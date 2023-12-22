import { LOTS_CROP_CATEGORIES_ROUTE } from './../../../../core/helpers/constants';
import { HOME_ROUTE, PROFILE_ROUTE } from 'src/app/core/helpers/constants';
import { Router } from '@angular/router';
import { Client, MarketFilterClass } from './../../../../core/models/queryModels';
import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { Actions, ofType } from '@ngrx/effects';
import { Action, select, Store } from '@ngrx/store';
import { take, takeUntil } from 'rxjs/operators';
import { MarketFilters, User } from 'src/app/core/models/queryModels';
import { MarketLotCard } from 'src/app/core/models/viewModels';
import { FilterTheMarketModalComponent } from './components/filter-the-market-modal/filter-the-market-modal.component';
import { PremiumFeatureModalComponent } from '../../../premium-feature-modal/premium-feature-modal.component';

import * as fromAuth from 'src/app/core/ngrx/authState/index';
import * as fromMarket from 'src/app/core/ngrx/market/index';
import { brokersSelectors } from '../../../../core/ngrx/brokers';
import * as actions from '../../../../core/helpers/index.actions';

@Component({
    selector: 'app-browse-the-market',
    templateUrl: './browse-the-market.component.html',
    styleUrls: ['./browse-the-market.component.scss'],
})
export class BrowseTheMarketComponent implements OnInit, OnDestroy {
    user: User = {} as User;
    hasFiltered: boolean = false;
    showFeatureIntroduction: boolean = true;
    userIsVerified: boolean = false;
    subscriptionsAreNotActive: boolean = true;

    marketLotCards: MarketLotCard[] | null = [];

    marketFilters: MarketFilters | null = new MarketFilterClass();

    actionIsLoading: boolean = false;

    destroyed$: EventEmitter<void> = new EventEmitter<void>();

    client: Client;

    constructor(private actions$: Actions, private store: Store, private router: Router, private dialog: MatDialog) {}

    ngOnInit(): void {
        this.selectClient();

        this.store
            .pipe(select(fromAuth.authSelectors.getUser), takeUntil(this.destroyed$))
            .subscribe((user: User | undefined) => {
                if (user) {
                    this.user = user;
                    this.showFeatureIntroduction = !user.hasBrowsedMarket;
                    this.userIsVerified = user.verification.id !== 6;

                    if (this.subscriptionsAreNotActive && this.userIsVerified) {
                        this.actions$
                            .pipe(
                                ofType(
                                    fromMarket.marketActions.ReqMarketLotCards,
                                    fromMarket.marketActions.MarketLotCardsSuccess,
                                    fromMarket.marketActions.MarketLotCardsFail,
                                ),
                                takeUntil(this.destroyed$),
                            )
                            .subscribe((action: Action) => {
                                if (action.type === fromMarket.marketActions.ReqMarketLotCards.type) {
                                    this.actionIsLoading = true;
                                } else {
                                    this.actionIsLoading = false;
                                }
                            });

                        this.store
                            .pipe(select(fromMarket.marketSelectors.getLotCards), takeUntil(this.destroyed$))
                            .subscribe((marketLotCards: MarketLotCard[] | null) => {
                                if (marketLotCards) {
                                    this.marketLotCards = marketLotCards;
                                }
                            });

                        this.store
                            .pipe(select(fromMarket.marketSelectors.getCurrentSessionFilters), take(1))
                            .subscribe((marketFilters: MarketFilters | null) => {
                                if (marketFilters) {
                                    this.marketFilters = marketFilters;
                                    this.store.dispatch(fromMarket.marketActions.ReqMarketLotCards({ marketFilters }));
                                }
                            });

                        this.subscriptionsAreNotActive = false;
                    }
                }
            });
    }

    ngOnDestroy(): void {
        this.destroyed$.next();
    }

    selectClient(): void {
        this.store
            .select(brokersSelectors.getCurrentClient)
            .pipe(takeUntil(this.destroyed$))
            .subscribe((client) => {
                this.client = client;
            });
    }

    // #region Handlers

    handleNavigateToHomePage(): void {
        this.router.navigate([HOME_ROUTE]);
    }

    handleNavigateToProfile(): void {
        this.router.navigate([PROFILE_ROUTE]);
    }

    handleNavigateToCreateLot() {
        this.router.navigate([LOTS_CROP_CATEGORIES_ROUTE]);
    }

    handleOpenFilterTheMarketModal(): void {
        const clientIsVerified = this.client ? this.client.verification.id !== 6 : false;
        if (clientIsVerified || this.userIsVerified) {
            this.hasFiltered = false;
            const dialogRef = this.dialog.open(FilterTheMarketModalComponent, {
                panelClass: 'g-modal-fullwidth-container',
                data: {
                    filters: this.marketFilters,
                },
                autoFocus: false,
            });

            dialogRef
                .afterClosed()
                .pipe(take(1))
                .subscribe((marketFilters?: MarketFilters) => {
                    if (marketFilters) {
                        this.actionIsLoading = true;
                        this.marketFilters = marketFilters;
                        this.hasFiltered = true;
                        this.store.dispatch(fromMarket.marketActions.ReqMarketLotCards({ marketFilters }));
                        if (this.showFeatureIntroduction) {
                            this.store.dispatch(
                                fromAuth.authActions.ReqUpdateUserDetails({
                                    user: { ...this.user, hasBrowsedMarket: true },
                                    updateSQL: false,
                                }),
                            );
                        }
                    }
                });
        } else {
            this.dialog.open(PremiumFeatureModalComponent, {
                panelClass: 'g-modal-container',
                autoFocus: false,
                data: {
                    featurePhrase: "Price Discovery at it's best.",
                    subscribeText: 'Subscribe to MX and access a new world of information to get the right price.',
                },
            });
        }
    }

    // #endregion
}
