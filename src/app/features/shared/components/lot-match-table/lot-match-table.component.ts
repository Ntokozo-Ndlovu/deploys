import { Actions, ofType } from '@ngrx/effects';
import { NegotiationUpdateModalComponent } from './../../../negotiations/components/negotiation-update-modal/negotiation-update-modal.component';
import { cloneDeep } from 'lodash';
import { MatStepperModule } from '@angular/material/stepper';
import { Component, OnInit, Input, NgModule, Output, EventEmitter, OnDestroy } from '@angular/core';
import { CommonModule, formatDate } from '@angular/common';
import { LotMatch, LotMatchIteration } from 'src/app/core/models/viewModels';
import { IdName, LotMatchDetails, DeliveryPoint, Client } from 'src/app/core/models/queryModels';
import { MatchItems } from 'src/app/core/models/queryModels';
import { NegotiationEditModalComponent } from 'src/app/features/negotiations/components/negotiation-edit-modal/negotiation-edit-modal.component';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { filter, take, takeUntil } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import * as actions from 'src/app/core/helpers/index.actions';
import * as fromNegotiations from 'src/app/features/negotiations/negotiations.selectors';
import * as fromDashboard from 'src/app/features/dashboard/dashboard.selectors';
import * as fromApp from 'src/app/core/ngrx/app-state/app-state.selectors';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as snackBarConfigs from 'src/app/core/helpers/snackbar';
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';
import { matchItems, STEP_INFO_DATA } from 'src/app/core/helpers/constants';
import { StepInfoModalComponent } from '../step-info-modal/step-info-modal.component';
import { brokersSelectors } from '../../../../core/ngrx/brokers';

@Component({
    selector: 'app-lot-match-table',
    templateUrl: './lot-match-table.component.html',
    styleUrls: ['./lot-match-table.component.scss'],
})
export class LotMatchTableComponent implements OnInit, OnDestroy {
    @Input() isNegotiation: boolean = false;
    @Input() isLocked: boolean = false;
    @Input() isPending: boolean = false;
    @Input() hasAgent: boolean = false;
    @Input()
    get lotMatch(): LotMatch {
        return this._lotMatch;
    }
    set lotMatch(value: LotMatch) {
        const { sellerDetails, buyerDetails } = value;
        if (value.userType === 'Sell') {
            this.isSeller = true;
        }

        this.isMatch.Product = this.isProductMatchHelper(value);
        this.isMatch.Position =
            sellerDetails.deliveryPoint.id === buyerDetails.deliveryPoint.id &&
            sellerDetails.incoTerm.id === buyerDetails.incoTerm.id;
        this.isMatch.Period =
            this.getShortDateHelper(sellerDetails.dateFrom) === this.getShortDateHelper(buyerDetails.dateFrom) &&
            this.getShortDateHelper(sellerDetails.dateTo) === this.getShortDateHelper(buyerDetails.dateTo);
        this.isMatch.ContractPrice =
            sellerDetails.price === buyerDetails.price &&
            sellerDetails.priceType.id === buyerDetails.priceType.id &&
            sellerDetails.exchange.id === buyerDetails.exchange.id &&
            sellerDetails.exchangeValue === buyerDetails.exchangeValue &&
            sellerDetails.month?.id === buyerDetails.month?.id;
        this.isMatch.Payment = sellerDetails.payment.id === buyerDetails.payment.id;
        this.isMatch.Quantity =
            sellerDetails.quantity === buyerDetails.quantity &&
            sellerDetails.unitOfMeasure.id === buyerDetails.unitOfMeasure.id;
        this.isMatch.Quality = sellerDetails.grade?.id === buyerDetails.grade?.id;

        this._lotMatch = value;

        this.getFullMatchHelper();

        this.sellerProduct = this.constructProductValueHelper(sellerDetails);
        this.buyerProduct = this.constructProductValueHelper(buyerDetails);

        this.sellerDeliveryPoint = this.constructPositionValueHelper(sellerDetails);
        this.buyerDeliveryPoint = this.constructPositionValueHelper(buyerDetails);

        this.sellerPrice = this.constructPriceValueHelper(sellerDetails);
        this.buyerPrice = this.constructPriceValueHelper(buyerDetails);

        this.sellerGrade = sellerDetails.grade ? sellerDetails.grade.name : 'Standard';
        this.buyerGrade = buyerDetails.grade ? buyerDetails.grade.name : 'Standard';

        this.usableSellerDeliveryPointName =
            sellerDetails.deliveryPoint.name.length > 20
                ? this.formatTextHelper(sellerDetails.deliveryPoint.name, 20)
                : sellerDetails.deliveryPoint.name;

        this.usableBuyerDeliveryPointName =
            buyerDetails.deliveryPoint.name.length > 20
                ? this.formatTextHelper(buyerDetails.deliveryPoint.name, 20)
                : buyerDetails.deliveryPoint.name;
    }
    @Output() $isFullMatchEvent: EventEmitter<any> = new EventEmitter();

    _lotMatch: LotMatch;
    matchItems: MatchItems[] = matchItems;

    clientUid: string;

    isSeller: boolean = false;

    qualities: IdName[];
    formData = {};
    isUpdate: boolean = false;
    isFullMatch: boolean = false;
    isQualityLocked: boolean = false;
    isPaymentLocked: boolean = false;

    sellerProduct: string;
    buyerProduct: string;
    sellerDeliveryPoint: string;
    buyerDeliveryPoint: string;
    sellerPrice: string;
    buyerPrice: string;
    sellerGrade: string;
    buyerGrade: string;
    usableSellerDeliveryPointName: string = '';
    usableBuyerDeliveryPointName: string = '';

    grades: IdName[] = [];
    paymentTerms: IdName[] = [];
    matchIterations: LotMatchIteration[] = [];

    itterationInitialID: number = 0;
    itterationCurrentID: number = 0;

    BASIS_PRICE_ID: number = 1;
    SAFEX_EXCHANGE: string = 'MINUS';

    isComplete: boolean = false;
    isLotMatchEditable: boolean = true;

    isMatch = {
        Product: false,
        Position: false,
        Period: false,
        ContractPrice: false,
        Payment: false,
        Quantity: false,
        Quality: false,
    };

    isMatchItemLoading = {
        Product: false,
        Position: false,
        Period: false,
        ContractPrice: false,
        Payment: false,
        Quantity: false,
        Quality: false,
    };

    destroyed$: EventEmitter<void> = new EventEmitter<void>();

    constructor(
        private route: ActivatedRoute,
        public dialog: MatDialog,
        private store: Store<fromDashboard.State>,
        private snackbar: MatSnackBar,
        private actions$: Actions,
    ) {}

    ngOnInit(): void {
        this.fetchClientInfoHelper();

        this.route.url.pipe(take(1)).subscribe(() => {
            if (this.route.snapshot.url[0].path === 'view') {
                this.isComplete = true;
            }
        });

        if (this.isNegotiation) {
            this.store.dispatch(
                actions.matchActions.ReqLotMatchFormData({ lotMatchId: this._lotMatch.id, clientUid: this.clientUid }),
            );
        }

        this.store
            .pipe(
                select(fromNegotiations.getLotMatchFormData),
                takeUntil(this.destroyed$),
                filter((x) => !!x.lotMatchIterations[0]),
                take(1),
            )
            .subscribe(({ lotMatchIterations }) => {
                this.store.dispatch(
                    actions.cropActions.ReqCropMonthsAndGrades({
                        cropId: lotMatchIterations[0].buyerDetails.crop.id,
                        exchangeId: lotMatchIterations[0].buyerDetails.exchange.id || 1,
                    }),
                );

                this.itterationInitialID = this.isSeller
                    ? lotMatchIterations[0].buyerDetails.id
                    : lotMatchIterations[0].sellerDetails.id;
            });

        this.store
            .pipe(select(fromNegotiations.getLotMatchFormData), takeUntil(this.destroyed$))
            .subscribe(
                ({ priceTypes, safexMonths, crops, deliveryPoints, paymentTerms, lotMatchIterations, cropGrades }) => {
                    this.formData = {
                        ...this.formData,
                        priceTypes,
                        safexMonths,
                        crops,
                        deliveryPoints,
                        paymentTerms,
                        cropGrades,
                    };

                    this.grades = cropGrades;
                    this.paymentTerms = paymentTerms;
                    this.grades.length > 1 ? (this.isQualityLocked = false) : (this.isQualityLocked = true);
                    this.paymentTerms.length > 1 ? (this.isPaymentLocked = false) : (this.isPaymentLocked = true);

                    this.matchIterations.length = 0;
                    this.matchIterations.push(...lotMatchIterations);
                },
            );

        this.store.pipe(select(fromApp.getCropPackaging), takeUntil(this.destroyed$)).subscribe((packaging) => {
            this.formData['packaging'] = packaging;
        });
        this.store.dispatch(actions.cropActions.ReqCropPackaging({ cropId: this._lotMatch.sellerDetails.crop.id }));

        this.store
            .pipe(
                select(fromApp.getIncoTermsByCropId, {
                    cropId: this.isSeller ? this._lotMatch.sellerDetails.crop.id : this._lotMatch.buyerDetails.crop.id,
                }),
            )
            .subscribe((incoTerms) => {
                this.formData['incoTerms'] = incoTerms;
            });

        this.store
            .pipe(
                select(fromApp.getUnitsOfMeasureByCropId, {
                    cropId: this.isSeller ? this._lotMatch.sellerDetails.crop.id : this._lotMatch.buyerDetails.crop.id,
                }),
            )
            .subscribe((unitsOfMeasure) => {
                this.formData['unitsOfMeasure'] = unitsOfMeasure;
            });
    }

    ngOnDestroy(): void {
        this.destroyed$.next();
    }

    handleCheckIsNotSilo(deliveryPoint: DeliveryPoint) {
        return deliveryPoint.locationType?.id !== 8;
    }

    handleOpenUpdateModal() {
        this.dialog.open(NegotiationUpdateModalComponent, {});
    }

    handleOpenEditModal(matchItem: MatchItems) {
        if (!this.isComplete && this.isNegotiation && this.isModalAlreadyOpeningHelper()) {
            if (this.isLocked) {
                this.snackbar.open(
                    'The match is locked. Please try again later.',
                    'CLOSE',
                    snackBarConfigs.notificationConfig,
                );
            } else if (this.isPending) {
                this.snackbar.open(
                    'The match is pending. The terms are no longer changeable.',
                    'CLOSE',
                    snackBarConfigs.notificationConfig,
                );
            } else {
                this.isMatchItemLoading[matchItem] = true;

                this.store.dispatch(
                    actions.matchActions.ReqLotMatchFormData({
                        lotMatchId: this._lotMatch.id,
                        clientUid: this.clientUid,
                    }),
                );

                this.actions$
                    .pipe(ofType(actions.matchActions.LotMatchFormDataSuccess), take(1))
                    .subscribe(({ lotMatchIterations }) => {
                        this.itterationCurrentID = this.isSeller
                            ? lotMatchIterations[lotMatchIterations.length - 1].buyerDetails.id
                            : lotMatchIterations[lotMatchIterations.length - 1].sellerDetails.id;

                        this.store.dispatch(
                            actions.cropActions.ReqCropMonthsAndGrades({
                                cropId: lotMatchIterations[0].buyerDetails.crop.id,
                                exchangeId: lotMatchIterations[0].buyerDetails.exchange.id || 1,
                            }),
                        );
                        this.handleOpenModalCheck(matchItem);
                        this.isMatchItemLoading[matchItem] = false;
                    });
            }
        }
    }

    handleOpenModalCheck(matchItem: MatchItems) {
        if (this.itterationCurrentID > this.itterationInitialID) {
            this.handleOpenUpdateModal();
        } else {
            if (
                (this.isQualityLocked && matchItem === 'Quality') ||
                (this.isPaymentLocked && matchItem === 'Payment')
            ) {
                this.snackbar.open('No selection available', 'CLOSE', snackBarConfigs.notificationConfig);
            } else {
                if (this.isNegotiation && !this.isComplete) {
                    const dialogRef = this.dialog.open(NegotiationEditModalComponent, {
                        data: {
                            matchItem: matchItem,
                            lotMatch: cloneDeep(this.lotMatch),
                            formData: this.formData,
                            qualities: this.qualities,
                        },

                        panelClass: 'g-modal-scroll-container',
                    });

                    dialogRef
                        .afterClosed()
                        .pipe(take(1))
                        .subscribe((data) => {
                            if (data) {
                                this.lotMatch = data;
                            }
                            this.getFullMatchHelper(data);
                        });
                }
            }
        }
    }

    handleOpenAgentModal() {
        this.dialog.open(StepInfoModalComponent, {
            panelClass: 'g-modal-container',
            data: {
                stepInfo: STEP_INFO_DATA['brokers'],
            },
        });
    }

    isProductMatchHelper(lotMatch: LotMatch) {
        if (lotMatch.completedDate === undefined || lotMatch.completedDate === null) {
            return lotMatch.sellerDetails.packaging?.id === lotMatch.buyerDetails.packaging?.id;
        } else {
            return true;
        }
    }

    constructProductValueHelper(userDetails: LotMatchDetails) {
        return `${userDetails.crop.name} - ${
            userDetails.packaging !== null ? userDetails.packaging.name : 'No packaging set'
        }`;
    }

    constructPositionValueHelper(userDetails: LotMatchDetails) {
        return this.handleCheckIsNotSilo(userDetails.deliveryPoint)
            ? `${userDetails.incoTerm.name} - ${userDetails.deliveryPoint.town}`
            : `${userDetails.incoTerm.name} - ${userDetails.deliveryPoint.name}`;
    }

    constructPriceValueHelper(userDetails: LotMatchDetails) {
        if (userDetails.priceType.id === this.BASIS_PRICE_ID) {
            return `Basis ${userDetails.month.name.substring(0, 3)} ${
                userDetails.exchangeValue === this.SAFEX_EXCHANGE ? '-' : '+'
            }R${userDetails.price}`;
        } else {
            return `R${userDetails.price}`;
        }
    }

    getFullMatchHelper(value?) {
        this.isFullMatch = Object.values(this.isMatch).every((property) => property);
        const submitData = { isFullMatch: this.isFullMatch, lotMatch: this.lotMatch };
        this.$isFullMatchEvent.emit(submitData);
    }

    isModalAlreadyOpeningHelper() {
        return Object.values(this.isMatchItemLoading).every((matchItem) => !matchItem);
    }

    getShortDateHelper(date: Date) {
        return formatDate(date, 'shortDate', 'en-ZA');
    }

    formatTextHelper(text: string, formattedLength: number): string {
        return `${text.slice(0, formattedLength)}...`;
    }

    getCorrectIconNameHelper(value: string): string {
        return value.split(/(?=[A-Z])/).join('-');
    }

    getCorrectMatchItemNameHelper(value: string): string {
        return value.split(/(?=[A-Z])/).join(' ');
    }

    fetchClientInfoHelper(): void {
        this.store
            .select(brokersSelectors.getCurrentClient)
            .pipe(takeUntil(this.destroyed$))
            .subscribe((client: Client) => {
                this.clientUid = client ? client.uid : null;
            });
    }
}

@NgModule({
    declarations: [LotMatchTableComponent],
    imports: [CommonModule, MatStepperModule, MatProgressSpinnerModule],
    exports: [LotMatchTableComponent],
})
export class LotMatchTableModule {}
