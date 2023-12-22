import { Actions, ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { take, takeUntil } from 'rxjs/operators';
import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AnimationDirection, LotMatch, VerificationType } from 'src/app/core/models/viewModels';
import { Router, ActivatedRoute } from '@angular/router';
import * as fromLot from 'src/app/features/lots/lots.selectors';
import { matchActions } from 'src/app/core/ngrx/entities/match';
import { lotActions } from 'src/app/core/ngrx/entities/lot';
import { SUCCESS_ROUTE, verificationTypes } from 'src/app/core/helpers/constants';
import { Dictionary } from '@ngrx/entity';
import { Client, Lot } from 'src/app/core/models/queryModels';
import { cloneDeep } from 'lodash';
import { ConfirmationModalComponent } from '../../../broker-dashboard/components/confirmation-modal/confirmation-modal.component';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import * as actions from '../../../../core/helpers/index.actions';
import { brokersSelectors } from '../../../../core/ngrx/brokers';

@Component({
    selector: 'app-lot-match-page',
    templateUrl: './lot-match-page.component.html',
    styleUrls: ['./lot-match-page.component.scss'],
})
export class LotMatchPageComponent implements OnInit, OnDestroy {
    lotId: number = null;
    lot: Lot = null as Lot;

    radii: string[] = ['25', '50', '75', '100', 'Over 100'];
    radius: string = 'Over 100';

    matchIndex: number = 0;
    lotMatches: LotMatch[];
    isBuyer: boolean;
    oppositeDetails: string = '';

    verificationTypes: Dictionary<VerificationType> = verificationTypes;

    animateFromLeft: boolean = false;
    animateFromRight: boolean = false;

    isLoading: boolean = true;
    isActionLoading: boolean = false;

    hasAgentDict: { [key: string]: boolean };
    hasAgent: boolean = false;
    client: Client;

    destroyed$: EventEmitter<void> = new EventEmitter<void>();

    constructor(
        private location: Location,
        private router: Router,
        private route: ActivatedRoute,
        private store: Store<fromLot.State>,
        private actions$: Actions,
        private dialog: MatDialog,
    ) {}

    ngOnInit(): void {
        this.selectClientHelper();

        this.route.params.pipe(take(1)).subscribe(({ id }) => {
            this.lotId = id;
        });

        this.route.queryParams.pipe(take(1)).subscribe((params) => {
            if (Object.keys(params).includes('isBuyer')) {
                this.isBuyer = params.isBuyer === 'true';
                params.radius && +params.radius <= 100 && (this.radius = params.radius);
            }
        });

        this.actions$
            .pipe(
                ofType(matchActions.LoadLotMatchesFail, matchActions.LoadLotMatchesSuccess),
                takeUntil(this.destroyed$),
            )
            .subscribe(() => {
                this.isLoading = false;
            });

        this.actions$
            .pipe(ofType(matchActions.ReqLotHasBrokerCheckSuccess, matchActions.ReqLotHasBrokerCheckFail), take(1))
            .subscribe((payload) => {
                if (payload.type === matchActions.ReqLotHasBrokerCheckSuccess.type) {
                    this.hasAgentDict = payload;
                    this.hasAgent = this.hasAgentHelper();
                }
            });

        this.store
            .pipe(select(fromLot.matchSelectors.getCurrentLotMatches), takeUntil(this.destroyed$))
            .subscribe((lotMatches) => {
                this.lotMatches = lotMatches;
                if (this.lotMatches.length) {
                    let lotIds = this.lotMatches.map((lot) =>
                        this.isBuyer ? lot.sellerDetails.lotId : lot.buyerDetails.lotId,
                    );
                    this.store.dispatch(matchActions.ReqLotHasBrokerCheck({ lotIds: lotIds }));
                }

                this.lotMatches[0]?.userType === 'Sell'
                    ? (this.oppositeDetails = 'Buyer Lots')
                    : (this.oppositeDetails = 'Seller Lots');
            });

        this.store
            .pipe(select(fromLot.lotSelectors.getCurrentLot, takeUntil(this.destroyed$)))
            .subscribe((currentLot) => {
                currentLot?.id && (this.lot = cloneDeep(currentLot));
            });

        this.store.dispatch(matchActions.ReqLoadLotMatches({ lotId: this.lotId, radius: +this.radius }));
        this.lot?.id !== this.lotId && this.store.dispatch(lotActions.ReqLotFormData({ lotId: this.lotId }));
    }

    ngOnDestroy(): void {
        this.destroyed$.next();
    }

    handleBack() {
        this.location.back();
    }

    handleChangeRadius() {
        this.isLoading = true;
        this.matchIndex = 0;
        this.store.dispatch(matchActions.ReqLoadLotMatches({ lotId: this.lotId, radius: +this.radius }));
        this.updateLotRadiusHelper();
        this.updateQueryParamsHelper();
    }

    handleToggleMatches(direction: AnimationDirection) {
        if (this.lotMatches.length > 1) {
            const lotMatchesLength = this.lotMatches.length - 1;
            if (direction === 'previous') {
                this.matchIndex === 0 ? (this.matchIndex = lotMatchesLength) : (this.matchIndex -= 1);
                this.hasAgent = this.hasAgentHelper();
            } else {
                this.matchIndex === lotMatchesLength ? (this.matchIndex = 0) : (this.matchIndex += 1);
                this.hasAgent = this.hasAgentHelper();
            }
            this.animateLotMatchHelper(direction);
        }
    }

    handleNegotiate() {
        if (this.lot.isPublic) {
            this.createLotMatch();
        } else {
            this.toggleLotPrivacyStatusModalHelper();
        }
    }

    createLotMatch(): void {
        this.isActionLoading = true;
        this.store.dispatch(matchActions.ReqCreateLotMatch({ lotMatch: this.lotMatches[this.matchIndex] }));

        this.actions$
            .pipe(ofType(matchActions.CreateLotMatchSuccess, matchActions.CreateLotMatchFail), take(1))
            .subscribe((payload) => {
                this.isActionLoading = false;
                if (payload.type === matchActions.CreateLotMatchSuccess.type) {
                    this.router.navigate([SUCCESS_ROUTE]);
                }
            });
    }

    toggleLotPrivacyStatusModalHelper(): void {
        const dialogRef = this.dialog.open(ConfirmationModalComponent, {
            panelClass: 'g-modal-container',
            data: {
                header: 'Lot Visibility',
                subHeader: 'Clicking Continue will update the Lot visibility to be ‘Available to Market’',
                confirmButton: 'Continue',
                declineButton: 'Cancel',
            },
        });

        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                this.updateLotAndCreateLotMatchHelper();
            }
        });
    }

    updateLotAndCreateLotMatchHelper(): void {
        const props = this.client
            ? { lot: this.transformLotBeforeDispatchHelper(), clientUid: this.client.uid }
            : { lot: this.transformLotBeforeDispatchHelper() };

        this.actions$
            .pipe(ofType(lotActions.UpdateLotSuccess, lotActions.UpdateLotFail), take(1))
            .subscribe((action) => {
                if (action.type === lotActions.UpdateLotSuccess.type) {
                    this.createLotMatch();
                } else {
                    this.lot.isPublic = false;
                }
            });

        this.store.dispatch(
            actions.lotActions.ReqUpdateLot({
                ...props,
            }),
        );
    }

    transformLotBeforeDispatchHelper(): Lot {
        this.lot.isPublic = true;
        return {
            ...this.lot,
            quantity: +this.lot.quantity,
            price: +this.lot.price,
            dateFrom: this.transformDateToUtcHelper(this.lot.dateFrom),
            dateTo: this.transformDateToUtcHelper(this.lot.dateTo),
        };
    }

    transformDateToUtcHelper(date: Date): Date {
        const newDate = date;
        newDate.setHours(newDate.getHours() + 12);
        return newDate;
    }

    selectClientHelper(): void {
        this.store
            .select(brokersSelectors.getCurrentClient)
            .pipe(takeUntil(this.destroyed$))
            .subscribe((client: Client) => {
                this.client = client;
            });
    }

    hasAgentHelper(): boolean {
        return this.isBuyer
            ? this.hasAgentDict[this.lotMatches[this.matchIndex]?.sellerDetails.lotId]
            : this.hasAgentDict[this.lotMatches[this.matchIndex]?.buyerDetails.lotId];
    }

    updateLotRadiusHelper(): void {
        this.lot = {
            ...this.lot,
            radius: +this.radius,
        };
        this.store.dispatch(lotActions.ReqUpdateLot({ lot: this.lot }));
    }

    animateLotMatchHelper(direction: AnimationDirection): void {
        let currentDirection = direction === 'previous' ? 'Left' : 'Right';
        this[`animateFrom${currentDirection}`] = true;
        setTimeout(() => {
            this[`animateFrom${currentDirection}`] = false;
        }, 300);
    }

    updateQueryParamsHelper(): void {
        this.router.navigate([], {
            relativeTo: this.route,
            queryParams: { radius: this.radius, isBuyer: this.isBuyer },
            replaceUrl: true,
        });
    }
}
