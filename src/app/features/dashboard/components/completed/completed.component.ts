import { PROFILE_ROUTE } from 'src/app/core/helpers/constants';
import { HOME_ROUTE, STEP_INFO_DATA } from './../../../../core/helpers/constants';
import { AfterViewInit, Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import * as fromRoot from 'src/app/features/dashboard/dashboard.selectors';
import * as actions from 'src/app/core/helpers/index.actions';
import * as snackBarConfigs from 'src/app/core/helpers/snackbar';
import * as fromAgents from 'src/app/core/ngrx/brokers/index';
import { take, takeUntil } from 'rxjs/operators';
import { Toggle, NegotiationCard, Notification } from 'src/app/core/models/viewModels';
import { Actions, ofType } from '@ngrx/effects';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StepInfoModalComponent } from 'src/app/features/shared/components/step-info-modal/step-info-modal.component';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { brokersSelectors } from '../../../../core/ngrx/brokers';
import { Client } from '../../../../core/models/queryModels';
import { getAllLotMatchIdsFromNegotiationCards } from '../../../../core/helpers/brokerHelperFunctions';
import { brokersActions } from 'src/app/core/helpers/index.actions';
import { NegotiationUpdateModalComponent } from '../../../negotiations/components/negotiation-update-modal/negotiation-update-modal.component';

@Component({
    selector: 'app-completed',
    templateUrl: './completed.component.html',
    styleUrls: ['./completed.component.scss'],
})
export class CompletedComponent implements OnInit, OnDestroy {
    completedToggles: Toggle[] = ['All', 'Sold', 'Bought'];
    toggleIndex: number = 0;

    completedCards: NegotiationCard[];
    filteredCompletedCards: NegotiationCard[];

    searchInput: string;

    notifications: Notification[] = [];
    notificationLotIds: number[] = [];

    isLoading: boolean = true;

    animateIn: boolean = false;

    hasActiveBroker: boolean = false;

    client: Client;

    destroyed$: EventEmitter<void> = new EventEmitter<void>();
    fromSuccess = false;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private store: Store<fromRoot.State>,
        private actions$: Actions,
        private snackbar: MatSnackBar,
        private dialog: MatDialog,
    ) {}

    // #region Life Cycle
    ngOnInit(): void {
        this.selectClient();

        this.store
            .pipe(select(fromAgents.brokersSelectors.getFilteredBrokers), takeUntil(this.destroyed$))
            .subscribe((response) => {
                if (response?.activeBroker) {
                    this.hasActiveBroker = response.activeBroker ? true : false;
                }
            });

        this.actions$
            .pipe(
                ofType(
                    actions.negotiationActions.UserNegotiationCardsFail,
                    actions.negotiationActions.UserNegotiationCardsSuccess,
                ),
            )
            .subscribe((action) => {
                if (action.type === actions.negotiationActions.UserNegotiationCardsSuccess.type) {
                    this.isLoading = false;
                } else {
                    this.snackbar.open(
                        'An error occurred when trying to retrieve your negotiations. Please reload the page.',
                        'CLOSE',
                        snackBarConfigs.errorConfig,
                    );
                }
            });

        this.route.queryParams.pipe(take(1)).subscribe((params) => {
            if (Object.keys(params).length > 0) {
                if (params.toggleIndex) {
                    this.toggleIndex = +params.toggleIndex;
                }
                if (params.searchInput) {
                    this.searchInput = params.searchInput;
                }
                if (params.fromSuccess === 'true') {
                    this.fromSuccess = true;
                }
            }
        });

        this.store
            .pipe(select(fromRoot.negotiationSelector.getAllOrderedNegotiationCards), takeUntil(this.destroyed$))
            .subscribe((negotiationCards: NegotiationCard[]) => {
                this.completedCards = negotiationCards.filter((negotiationCard) => negotiationCard.isCompleted);
                this.filteredCompletedCards = this.completedCards;
                this.filterAccordingToToggleHelper();
                this.fetchBrokerNegotiationDocuments();
                if (this.searchInput) {
                    this.filterAccordingToSearchInputHelper();
                }
            });

        this.store
            .pipe(
                select(fromRoot.notificationSelectors.getCompletedNegotiationNotifications),
                takeUntil(this.destroyed$),
            )
            .subscribe((notifications) => {
                this.notifications = notifications;
                if (this.notifications.length) {
                    setTimeout(() => {
                        const toggleForAgent = this.client ? true : false;
                        this.store.dispatch(
                            actions.notificationActions.ReqToggleNotificationStatus({
                                notificationUids: this.notifications.map((notification) => notification.uid),
                                toggleForAgent,
                            }),
                        );
                    }, 3000);
                }
                this.notificationLotIds = this.notifications.length
                    ? this.notifications.map((notification) => notification.lotId)
                    : [];
            });
    }

    ngOnDestroy(): void {
        this.destroyed$.next();
    }

    //#endregion

    fetchBrokerNegotiationDocuments(): void {
        let lotMatchIds: number[] = [];

        if (this.filteredCompletedCards.length) {
            lotMatchIds = getAllLotMatchIdsFromNegotiationCards(this.filteredCompletedCards);

            if (lotMatchIds.length > 10) {
                const chuckSize = 10;
                for (let i = 0; i < lotMatchIds.length; i += chuckSize) {
                    const smallerLotMatchIdsArray: number[] = lotMatchIds.slice(i, i + chuckSize);
                    this.store.dispatch(
                        brokersActions.ReqGetBrokerNegotiationDocuments({ lotMatchIds: smallerLotMatchIdsArray }),
                    );
                }
            } else {
                this.store.dispatch(brokersActions.ReqGetBrokerNegotiationDocuments({ lotMatchIds }));
            }
        }
    }

    selectClient(): void {
        this.store
            .select(brokersSelectors.getCurrentClient)
            .pipe(takeUntil(this.destroyed$))
            .subscribe((client) => {
                if (client) {
                    this.client = client;
                    this.store.dispatch(actions.negotiationActions.ReqUserNegotiationCards({ clientUid: client.uid }));
                } else {
                    this.store.dispatch(actions.negotiationActions.ReqUserNegotiationCards({}));
                }
            });
    }

    // #region Event Handlers

    handleToggleChange(newToggleIndex: 0 | 1 | 2) {
        this.toggleIndex = newToggleIndex;
        if (this.searchInput) {
            this.filterAccordingToSearchInputHelper();
        } else {
            this.filterAccordingToToggleHelper();
        }
        this.updateQueryParamsHelper();
    }

    handleSearchInput(input: string) {
        this.searchInput = input;
        if (this.searchInput || this.searchInput === '') {
            this.filterAccordingToSearchInputHelper();
        } else {
            this.resetSearchInputFilterHelper();
        }
        this.updateQueryParamsHelper();
    }

    handleNavigateToHomePage() {
        this.router.navigate([HOME_ROUTE]);
    }

    handleNavigateToProfile(): void {
        this.router.navigate([PROFILE_ROUTE]);
    }

    handleGetNotification(id: number) {
        return this.notifications.filter((notification) => notification.lotId === id);
    }

    handleInfoModal() {
        this.dialog.open(StepInfoModalComponent, {
            panelClass: 'g-modal-container',
            data: {
                stepInfo: STEP_INFO_DATA['Matches'],
            },
        });
    }

    // #endregion

    // #region Helper Methods/Functions
    updateQueryParamsHelper() {
        let queryParams = this.searchInput
            ? { toggleIndex: this.toggleIndex, searchInput: this.searchInput }
            : { toggleIndex: this.toggleIndex };
        this.router.navigate([], {
            relativeTo: this.route,
            queryParams,
            replaceUrl: true,
        });
    }

    filterAccordingToToggleHelper() {
        let referenceToggles: Toggle[] = ['All', 'Sell', 'Buy'];
        this.toggleIndex
            ? (this.filteredCompletedCards = this.completedCards.filter(
                  (completedCard) => completedCard.lotType === referenceToggles[this.toggleIndex],
              ))
            : (this.filteredCompletedCards = this.completedCards);

        this.animateInHelper();
    }

    filterAccordingToSearchInputHelper() {
        this.filterAccordingToToggleHelper();
        this.filteredCompletedCards = this.filteredCompletedCards.filter((cards) => {
            return cards.lotName.toLocaleLowerCase().includes(this.searchInput.toLocaleLowerCase());
        });
    }

    resetSearchInputFilterHelper() {
        this.filteredCompletedCards = this.completedCards;
        this.filterAccordingToToggleHelper();
    }

    animateInHelper() {
        this.animateIn = true;
        setTimeout(() => {
            this.animateIn = false;
        }, 300);
    }

    // #endregion
}
