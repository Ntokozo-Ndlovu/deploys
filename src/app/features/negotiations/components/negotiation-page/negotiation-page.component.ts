import { ConfirmationModalComponent } from './../../../shared/components/confirmation-modal/confirmation-modal.component';
import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

// #region NgRx/RxJs

import { select, Store } from '@ngrx/store';
import { Actions, ofType } from '@ngrx/effects';
import { Dictionary } from '@ngrx/entity';
import { interval, Subscription, combineLatest, BehaviorSubject } from 'rxjs';
import { filter, retry, take, takeUntil } from 'rxjs/operators';
import * as actions from 'src/app/core/helpers/index.actions';
import * as fromNegotiations from 'src/app/features/negotiations/negotiations.selectors';
import * as fromDashboard from 'src/app/features/dashboard/dashboard.selectors';
import * as fromAgents from 'src/app/core/ngrx/brokers/index';
import { matchActions } from 'src/app/core/ngrx/entities/match';

// #endregion

// #region Modal

import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { NegotiationUpdateModalComponent } from '../negotiation-update-modal/negotiation-update-modal.component';
import { SubmitMatchComponent } from 'src/app/features/shared/components/submit-match/submit-match.component';

// #endregion

// #region Types

import {
    Broker,
    BrokerNegotiation,
    BrokerRequest,
    Client,
    IdName,
    LotMatchDetails,
    MatchItems,
    User,
} from 'src/app/core/models/queryModels';
import { AnimationDirection, LotMatch, LotMatchIteration, VerificationType } from 'src/app/core/models/viewModels';

// #endregion

// #region Other

import {
    SUCCESS_ROUTE,
    NEGOTIATING_ROOM_ROUTE,
    NEGOTIATIONS_COMPLETED_ROUTE,
    NEGOTIATION_EDIT_ROUTE,
    verificationTypes,
} from 'src/app/core/helpers/constants';
import { authSelectors } from '../../../../core/ngrx/reducers';
import { PaymentCheckModalComponent } from '../../../shared/components/payment-check-modal/payment-check-modal.component';
import { brokersSelectors } from 'src/app/core/ngrx/brokers/index';
import { brokersActions } from 'src/app/core/helpers/index.actions';
import { filterOutNegotiationDocument } from '../../../../core/helpers/brokerHelperFunctions';

// #endregion

@Component({
    selector: 'app-negotiation-page',
    templateUrl: './negotiation-page.component.html',
    styleUrls: ['./negotiation-page.component.scss'],
})
export class NegotiationPageComponent implements OnInit, OnDestroy {
    lotMatchId: number;
    lotMatch: LotMatch;
    matchIterations: LotMatchIteration[] = [];
    selectedIteration: number = 0;
    activeNegotiationIds: number[];
    negotiationIndex: number = 0;
    lotDetails: LotMatchDetails;
    oppLotDetails: LotMatchDetails;
    matchItem: MatchItems;

    isLoading: boolean = true;
    isSubmitMatchActionLoading: boolean = false;
    isDeclineNegotiationActionLoading: boolean = false;
    isMatchAllLoading: boolean = false;
    isFullMatch: boolean = false;
    fromSuccess: boolean = true;
    isLocked: boolean = false;
    isComplete: boolean = false;
    isPending: boolean = false;
    submitModalIsOpen: boolean = false;

    submittedSkuduMatch: boolean = false;
    isSeller: boolean = false;

    iterationInitialID: number = null;
    iterationCurrentID: number = null;

    verificationTypes: Dictionary<VerificationType> = verificationTypes;

    //#region count down variables
    countDownSubscription: Subscription;
    dateNow = this.transformDateToUtcHelper(new Date());
    dDay: Date;
    milliSecondsInASecond: number = 1000;
    hoursInADay: number = 24;
    minutesInAnHour: number = 60;
    SecondsInAMinute: number = 60;
    timeDifference: number;
    secondsToDday: number;
    minutesToDday: number;
    hoursToDday: number;
    daysToDday: number;
    //#endregion

    user: User;
    clientUid: string;
    brokerClient: Client;
    brokerAdminRole: boolean;
    bindingNegotiationDocuments: BrokerNegotiation[];

    hasAgentDict: { [key: string]: boolean };
    counterPartyHasBroker: boolean = false;
    hasActiveBroker: boolean = false;

    toggleForBroker = new BehaviorSubject<boolean>(false);
    agents: Broker[];

    destroyed$: EventEmitter<void> = new EventEmitter<void>();

    constructor(
        private route: ActivatedRoute,
        private location: Location,
        public dialog: MatDialog,
        private actions$: Actions,
        private store: Store<fromNegotiations.State>,
        private router: Router,
    ) {}

    ngOnInit(): void {
        this.fetchAgentInfoHelper();
        this.fetchClientInfoHelper();
        this.fetchAgentRequestHelper();
        this.selectBindingNegotiationDocument();

        this.route.params.pipe(take(1)).subscribe(({ id }) => {
            id ? (this.lotMatchId = +id) : this.handleBack();
            this.fetchBindingNegotiationDocumentHelper([this.lotMatchId]);
        });

        this.route.queryParams.pipe(take(1)).subscribe(({ fromSuccess, isPending }) => {
            if (fromSuccess) {
                this.fromSuccess = true;
            }
            if (isPending) {
                this.isPending = isPending === 'true';
            }
        });

        combineLatest([this.route.queryParams, this.toggleForBroker])
            .pipe(takeUntil(this.destroyed$))
            .subscribe(([{ notificationUids }, toggleForBroker]) => {
                const props = toggleForBroker
                    ? { notificationUids, toggleForAgent: toggleForBroker }
                    : { notificationUids };
                this.store.dispatch(actions.notificationActions.ReqToggleNotificationStatus({ ...props }));
            });

        this.route.url.pipe(take(1)).subscribe(() => {
            if (this.route.snapshot.url[0].path === 'view' && !this.isPending) {
                this.isComplete = true;
            }
        });

        this.actions$
            .pipe(
                ofType(actions.matchActions.LotMatchFormDataSuccess, actions.matchActions.LotMatchFormDataFail),
                take(1),
            )
            .subscribe((action$) => {
                this.checkSubmittedHelper();

                action$.type === actions.matchActions.LotMatchFormDataSuccess.type
                    ? this.handleChangeIteration()
                    : this.handleBack();
                this.isLoading = false;
            });

        this.store
            .pipe(
                select(fromNegotiations.getLotMatchFormData),
                takeUntil(this.destroyed$),
                filter((x) => !!x.lotMatchIterations[0]),
                take(1),
            )
            .subscribe(({ lotMatchIterations }) => {
                this.iterationInitialID === null && (this.iterationInitialID = lotMatchIterations[0].id);

                this.store.dispatch(
                    actions.cropActions.ReqCropMonthsAndGrades({
                        cropId: lotMatchIterations[0].buyerDetails.crop.id,
                        exchangeId: lotMatchIterations[0].buyerDetails.exchange.id || 1,
                    }),
                );
            });

        this.store
            .pipe(select(fromAgents.brokersSelectors.getFilteredBrokers), takeUntil(this.destroyed$))
            .subscribe((response) => {
                if (!response) {
                    this.store.dispatch(fromAgents.brokersActions.ReqBrokersAndDistance_Shared({ user: this.user }));
                    this.store.dispatch(
                        fromAgents.brokersActions.ReqClientBrokerRequests_Client({ uid: this.user.uid }),
                    );
                }
                if (response?.activeBroker) {
                    this.hasActiveBroker = response.activeBroker ? true : false;
                }
            });

        this.store
            .pipe(select(fromNegotiations.getLotMatchFormData), takeUntil(this.destroyed$))
            .subscribe(({ lotMatchIterations }) => {
                this.matchIterations = lotMatchIterations;

                if (this.matchIterations?.length) {
                    this.isLocked = !!this.matchIterations[0].completedDate;

                    this.dDay = this.matchIterations[this.selectedIteration].completedDate;
                    if (this.dDay) {
                        this.dDay = this.transformTimerDateHelper(this.dDay);

                        const dateDiff = (this.dateNow.getTime() - this.dDay.getTime()) / 3600000;

                        if (dateDiff > 0) {
                            this.isLocked = false;
                        }
                    }
                }
            });

        this.actions$
            .pipe(ofType(matchActions.ReqLotHasBrokerCheckSuccess, matchActions.ReqLotHasBrokerCheckFail), take(1))
            .subscribe((payload) => {
                if (payload.type === matchActions.ReqLotHasBrokerCheckSuccess.type) {
                    this.hasAgentDict = payload;
                    this.counterPartyHasBroker =
                        this.hasAgentDict[
                            this.isSeller ? this.lotMatch.buyerDetails.lotId : this.lotMatch.sellerDetails.lotId
                        ];
                }
            });

        this.store.dispatch(
            actions.matchActions.ReqLotMatchFormData({ lotMatchId: this.lotMatchId, clientUid: this.clientUid }),
        );

        this.store.dispatch(
            actions.negotiationActions.ReqGetAvailableMatchIds({
                lotMatchId: this.lotMatchId,
                clientUid: this.clientUid,
            }),
        );

        this.store
            .pipe(select(fromDashboard.negotiationSelector.getLotMatchIds), takeUntil(this.destroyed$))
            .subscribe((lotMatchIds: number[]) => {
                if (lotMatchIds.length) {
                    this.activeNegotiationIds = lotMatchIds;
                    this.negotiationIndex = this.activeNegotiationIds.indexOf(this.lotMatchId);
                }
            });

        this.countDownSubscription = interval(1000)
            .pipe(takeUntil(this.destroyed$))
            .subscribe((x) => {
                this.getTimeDifferenceHelper();
            });
    }

    ngOnDestroy(): void {
        this.destroyed$.next();
        this.countDownSubscription.unsubscribe();
    }

    handleBack() {
        this.isComplete
            ? this.router.navigate([NEGOTIATIONS_COMPLETED_ROUTE])
            : this.fromSuccess
            ? this.router.navigate([NEGOTIATING_ROOM_ROUTE])
            : this.location.back();
    }

    handleToggleNegotiations(direction: AnimationDirection) {
        if (this.activeNegotiationIds.length > 1) {
            const activeNegotiationsLength = this.activeNegotiationIds.length - 1;
            if (direction === 'previous') {
                this.negotiationIndex === 0
                    ? (this.negotiationIndex = activeNegotiationsLength)
                    : (this.negotiationIndex -= 1);
            } else {
                this.negotiationIndex === activeNegotiationsLength
                    ? (this.negotiationIndex = 0)
                    : (this.negotiationIndex += 1);
            }
            this.lotMatchId = this.activeNegotiationIds[this.negotiationIndex];
            this.changeActiveNegotiationHelper();
            this.router.navigate([`${NEGOTIATION_EDIT_ROUTE}/${this.activeNegotiationIds[this.negotiationIndex]}`]);
        }
    }

    handleOpenUpdateModal() {
        this.dialog.open(NegotiationUpdateModalComponent);
    }

    handleChangeIteration() {
        this.lotMatch = {
            id: this.matchIterations[this.selectedIteration].lotMatchId,
            userType: this.matchIterations[this.selectedIteration].userType,
            completedDate: this.matchIterations[this.selectedIteration].completedDate,
            lotName: this.matchIterations[this.selectedIteration].lotName,
            sellerDetails: this.matchIterations[this.selectedIteration].sellerDetails,
            buyerDetails: this.matchIterations[this.selectedIteration].buyerDetails,
        };
        let lotId = this.isSeller ? this.lotMatch.buyerDetails.lotId : this.lotMatch.sellerDetails.lotId;
        this.store.dispatch(matchActions.ReqLotHasBrokerCheck({ lotIds: [lotId] }));
    }

    handleSaveIteration() {
        this.isSubmitMatchActionLoading = true;
        const lotMatch = this.lotMatch;
        this.store.dispatch(actions.matchActions.ReqUpdateLotMatch({ lotMatch }));

        this.actions$
            .pipe(ofType(actions.matchActions.UpdateLotMatchSuccess, actions.matchActions.UpdateLotMatchFail), take(1))
            .subscribe(() => {
                this.isSubmitMatchActionLoading = false;
            });
    }

    handleOpenSubmitYourMatchModal() {
        this.store.dispatch(
            actions.matchActions.ReqLotMatchFormData({ lotMatchId: this.lotMatchId, clientUid: this.clientUid }),
        );

        this.actions$
            .pipe(ofType(actions.matchActions.LotMatchFormDataSuccess), takeUntil(this.destroyed$))
            .subscribe(({ lotMatchIterations }) => {
                this.iterationCurrentID = lotMatchIterations[lotMatchIterations.length - 1].id;

                if (this.iterationInitialID === this.iterationCurrentID) {
                    if (!this.submitModalIsOpen) {
                        const dialogRef = this.dialog.open(SubmitMatchComponent, {
                            panelClass: 'g-modal-fullwidth-transparent-container',
                        });

                        this.submitModalIsOpen = true;

                        dialogRef
                            .afterClosed()
                            .pipe(take(1))
                            .subscribe(({ shouldDispatch }) => {
                                if (shouldDispatch) {
                                    this.submitFullMatchHelper();
                                }
                                this.submitModalIsOpen = false;
                            });
                    }
                } else {
                    this.handleOpenUpdateModal();
                }
            });
    }

    handleOpenPaymentCheckModal(
        paymentReady: boolean,
        currentUserSubmitted?: boolean,
        counterPartySubmitted?: boolean,
    ): void {
        const dialogRef = this.dialog.open(PaymentCheckModalComponent, {
            panelClass: 'g-modal-container',
            data: {
                metricTons: this.lotMatch.buyerDetails.quantity,
                paymentStepReady: paymentReady,
                paymentComplete: false,
                counterPartySubmitted: counterPartySubmitted,
                currentUserSubmitted: currentUserSubmitted,
            },
        });

        dialogRef.afterClosed().subscribe((result: boolean) => {
            if (result) {
                this.routeToSuccessPageHelper();
            }
        });
    }

    handleDeclineNegotiation() {
        const dialogRef = this.dialog.open(ConfirmationModalComponent, {
            data: { currentAction: 'decline', currentItem: 'negotiation' },
            panelClass: 'g-modal-container',
        });

        dialogRef
            .afterClosed()
            .pipe(take(1))
            .subscribe((shouldDispatch) => {
                if (shouldDispatch) {
                    this.isDeclineNegotiationActionLoading = true;
                    this.actions$
                        .pipe(
                            ofType(
                                actions.negotiationActions.DeclineNegotiationSuccess,
                                actions.negotiationActions.DeclineNegotiationFail,
                            ),
                            take(1),
                        )
                        .subscribe((action) => {
                            if (
                                action.type === actions.negotiationActions.DeclineNegotiationSuccess.type &&
                                action.activeNegotiationIds.length >= 1
                            ) {
                                this.lotMatchId = action.activeNegotiationIds[this.negotiationIndex];
                                this.changeActiveNegotiationHelper();
                            }
                            this.isDeclineNegotiationActionLoading = false;
                        });

                    this.store.dispatch(
                        actions.negotiationActions.ReqDeclineNegotiation({
                            lotMatch: this.lotMatch,
                            activeNegotiationIds: this.activeNegotiationIds,
                        }),
                    );
                }
            });
    }

    handleMatchAll() {
        this.isMatchAllLoading = true;
        if (this.lotMatch.userType === 'Sell') {
            this.lotDetails = this.lotMatch.sellerDetails;
            this.oppLotDetails = this.lotMatch.buyerDetails;
            this.lotMatch = { ...this.lotMatch, sellerDetails: this.matchDetailsHelper() };
        } else {
            this.lotDetails = this.lotMatch.buyerDetails;
            this.oppLotDetails = this.lotMatch.sellerDetails;
            this.lotMatch = { ...this.lotMatch, buyerDetails: this.matchDetailsHelper() };
        }
        this.actions$
            .pipe(ofType(actions.matchActions.UpdateLotMatchSuccess, actions.matchActions.UpdateLotMatchFail), take(1))
            .subscribe(() => {
                this.isMatchAllLoading = false;
            });
        this.store.dispatch(actions.matchActions.ReqUpdateLotMatch({ lotMatch: this.lotMatch }));
    }

    matchDetailsHelper() {
        return {
            ...this.oppLotDetails,
            id: this.lotDetails.id,
            userVerificationId: this.lotDetails.userVerificationId,
            lotId: this.lotDetails.lotId,
        };
    }

    submitFullMatchHelper() {
        this.isSubmitMatchActionLoading = true;

        this.actions$.pipe(ofType(actions.negotiationActions.CompleteNegotiationSuccess), take(1)).subscribe(() => {
            this.isSubmitMatchActionLoading = false;
            const lotIds = [
                this.lotMatch.userType === 'Sell'
                    ? this.lotMatch.sellerDetails.lotId
                    : this.lotMatch.buyerDetails.lotId,
            ];
            this.store.dispatch(actions.lotActions.ReqPrivatiseLots({ lotIds }));
            if (this.hasActiveBroker || this.user.isBroker) {
                this.createCorrectNegotiationDocument();
            } else if (!this.hasActiveBroker && this.counterPartyHasBroker && !this.user.isBroker) {
                this.createShallowNegotiationDocument();
                this.routeToSuccessPageHelper();
            } else {
                this.routeToSuccessPageHelper();
            }
        });

        this.actions$.pipe(ofType(actions.negotiationActions.CompleteNegotiationFail), take(1)).subscribe(() => {
            this.isSubmitMatchActionLoading = false;
        });

        this.store.dispatch(
            actions.negotiationActions.ReqCompleteNegotiation({
                lotMatch: this.lotMatch,
                clientHasBroker: this.hasActiveBroker,
                counterPartyHasBroker: this.counterPartyHasBroker,
            }),
        );
    }

    createShallowNegotiationDocument(): void {
        let bindingDocument: BrokerNegotiation;
        const bindingNegotiationDocument = filterOutNegotiationDocument(
            this.lotMatchId,
            this.bindingNegotiationDocuments,
        );

        if (bindingNegotiationDocument) {
            bindingDocument = { ...bindingNegotiationDocument };
            if (this.lotMatch.userType === 'Sell') {
                bindingDocument.sellerEmail = `${this.user.email} - No Broker`;
                bindingDocument.sellerPaid = true;
            } else {
                bindingDocument.buyerEmail = `${this.user.email} - No Broker`;
                bindingDocument.buyerPaid = true;
            }

            this.store.dispatch(
                actions.brokersActions.ReqUpdateNegotiationDocument({ brokerNegotiation: bindingDocument }),
            );
        } else {
            bindingDocument = {
                lotMatchId: this.lotMatchId,
                buyerEmail: this.lotMatch.userType === 'Buy' ? `${this.user.email} - No Broker` : null,
                buyerPaid: false,
                sellerEmail: this.lotMatch.userType === 'Sell' ? `${this.user.email} - No Broker` : null,
                sellerPaid: false,
                emailSent: false,
            };

            this.store.dispatch(actions.brokersActions.ReqCreateNegotiationDocument({ ...bindingDocument }));
        }
    }

    createCorrectNegotiationDocument(): void {
        let bindingDocument: BrokerNegotiation;
        const bindingNegotiationDocument = filterOutNegotiationDocument(
            this.lotMatchId,
            this.bindingNegotiationDocuments,
        );

        if (bindingNegotiationDocument) {
            bindingDocument = { ...bindingNegotiationDocument };
            if (this.lotMatch.userType === 'Sell') {
                bindingDocument.sellerEmail = this.returnUserOrClientEmailHelper();
                bindingDocument.sellerPaid = false;
            } else {
                bindingDocument.buyerEmail = this.returnUserOrClientEmailHelper();
                bindingDocument.buyerPaid = false;
            }

            this.store.dispatch(
                actions.brokersActions.ReqUpdateNegotiationDocument({ brokerNegotiation: bindingDocument }),
            );
        } else {
            if ((this.hasActiveBroker || this.user.isBroker) && !this.counterPartyHasBroker) {
                bindingDocument = {
                    lotMatchId: this.lotMatchId,
                    buyerEmail: this.lotMatch.userType === 'Buy' ? this.returnUserOrClientEmailHelper() : null,
                    buyerPaid: this.lotMatch.userType === 'Buy' ? false : true,
                    sellerEmail: this.lotMatch.userType === 'Sell' ? this.returnUserOrClientEmailHelper() : null,
                    sellerPaid: this.lotMatch.userType === 'Sell' ? false : true,
                    emailSent: false,
                };
            } else if ((this.hasActiveBroker || this.user.isBroker) && this.counterPartyHasBroker) {
                bindingDocument = {
                    lotMatchId: this.lotMatchId,
                    buyerEmail: this.lotMatch.userType === 'Buy' ? this.returnUserOrClientEmailHelper() : null,
                    buyerPaid: false,
                    sellerEmail: this.lotMatch.userType === 'Sell' ? this.returnUserOrClientEmailHelper() : null,
                    sellerPaid: false,
                    emailSent: false,
                };
            }

            this.store.dispatch(actions.brokersActions.ReqCreateNegotiationDocument({ ...bindingDocument }));
        }

        this.triggerPaymentCheckModalHelper(bindingDocument);
    }

    triggerPaymentCheckModalHelper(bindingDocument: BrokerNegotiation): void {
        const currentUserSubmitted =
            (this.lotMatch.userType === 'Buy' && bindingDocument.buyerPaid !== null) ||
            (this.lotMatch.userType === 'Sell' && bindingDocument.sellerEmail !== null);
        const counterPartySubmitted =
            (this.lotMatch.userType === 'Buy' && bindingDocument.sellerEmail !== null) ||
            (this.lotMatch.userType === 'Sell' && bindingDocument.buyerEmail !== null);

        if (bindingDocument.sellerEmail && bindingDocument.buyerEmail) {
            this.handleOpenPaymentCheckModal(true, currentUserSubmitted, counterPartySubmitted);
        } else {
            this.handleOpenPaymentCheckModal(false, currentUserSubmitted, counterPartySubmitted);
        }
    }

    returnUserOrClientEmailHelper(): string {
        if (this.user.isBroker) {
            return this.brokerClient.email;
        } else {
            return this.user.email;
        }
    }

    handleGetMatch(item) {
        if (item) {
            this.isFullMatch = item.isFullMatch;
            this.lotMatch = item.lotMatch;
        }
    }

    routeToSuccessPageHelper(): void {
        this.hasOpposingPartySubmittedMatchHelper()
            ? this.router.navigate([`${SUCCESS_ROUTE}/${this.lotMatchId}`], {
                  queryParams: { hasOpposingPartySubmitted: true },
              })
            : this.router.navigate([`${SUCCESS_ROUTE}/${this.lotMatchId}`]);
    }

    checkSubmittedHelper() {
        this.isSeller = this.matchIterations[this.selectedIteration].userType === 'Sell';
        this.submittedSkuduMatch = this.isSeller
            ? this.matchIterations[this.selectedIteration].hasSellerSubmittedMatch
            : this.matchIterations[this.selectedIteration].hasBuyerSubmittedMatch;
    }

    changeActiveNegotiationHelper() {
        this.isLoading = true;

        this.actions$.pipe(ofType(actions.matchActions.LotMatchFormDataSuccess), take(1)).subscribe(() => {
            this.handleChangeIteration();
            this.isLoading = false;
        });

        this.store.dispatch(
            actions.matchActions.ReqLotMatchFormData({ lotMatchId: this.lotMatchId, clientUid: this.clientUid }),
        );
    }

    getTimeDifferenceHelper() {
        if (this.dDay) {
            this.timeDifference = this.dDay.getTime() - new Date().getTime();
            this.allocateTimeUnitsHelper(this.timeDifference);
        } else {
            this.isLocked = false;
        }
    }

    allocateTimeUnitsHelper(timeDifference: number) {
        this.secondsToDday = Math.floor((timeDifference / this.milliSecondsInASecond) % this.SecondsInAMinute);
        this.minutesToDday = Math.floor(
            (timeDifference / (this.milliSecondsInASecond * this.minutesInAnHour)) % this.SecondsInAMinute,
        );
        this.hoursToDday = Math.floor(
            (timeDifference / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute)) %
                this.hoursInADay,
        );
        this.daysToDday = Math.floor(
            timeDifference /
                (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute * this.hoursInADay),
        );
    }

    compareSelectionsHelper(selection1: IdName, selection2: IdName) {
        return selection1.id === selection2?.id;
    }

    transformDateToUtcHelper(date: Date) {
        let newDate = date;
        newDate.setHours(newDate.getHours() + 2);
        return newDate;
    }

    transformTimerDateHelper(date: Date) {
        let newDate = date;
        newDate?.setHours(newDate.getHours() + 24);
        return newDate;
    }

    hasOpposingPartySubmittedMatchHelper() {
        return this['matchIterations'][0][`has${this.isSeller ? 'Buyer' : 'Seller'}SubmittedMatch`];
    }

    fetchAgentInfoHelper(): void {
        this.store
            .select(authSelectors.getUser)
            .pipe(takeUntil(this.destroyed$))
            .subscribe((user: User) => {
                this.user = user;

                this.user.isBroker ? this.toggleForBroker.next(true) : this.toggleForBroker.next(false);
            });
    }

    fetchClientInfoHelper(): void {
        this.store
            .select(brokersSelectors.getCurrentClient)
            .pipe(takeUntil(this.destroyed$))
            .subscribe((client: Client) => {
                this.clientUid = client ? client.uid : null;
                this.brokerClient = client;
            });
    }

    selectBindingNegotiationDocument(): void {
        this.store
            .select(brokersSelectors.getNegotiationDocuments)
            .pipe(takeUntil(this.destroyed$))
            .subscribe((negotiationDocs: BrokerNegotiation[]) => {
                this.bindingNegotiationDocuments = negotiationDocs;
            });
    }

    fetchBindingNegotiationDocumentHelper(lotMatchIds: number[]): void {
        this.store.dispatch(brokersActions.ReqGetBrokerNegotiationDocuments({ lotMatchIds: lotMatchIds }));
    }

    fetchAgentRequestHelper(): void {
        this.store
            .select(brokersSelectors.getBrokerRequest)
            .pipe(takeUntil(this.destroyed$))
            .subscribe((agentRequest: BrokerRequest) => {
                this.brokerAdminRole = agentRequest?.brokerAdminRole;
            });
    }
}
