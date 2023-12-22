import { PROFILE_ROUTE } from 'src/app/core/helpers/constants';
import { HOME_ROUTE, STEP_INFO_DATA } from './../../../../core/helpers/constants';
import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
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
import { brokersActions } from 'src/app/core/helpers/index.actions';
import { getAllLotMatchIdsFromNegotiationCards } from '../../../../core/helpers/brokerHelperFunctions';

@Component({
    selector: 'app-negotiations',
    templateUrl: './negotiations.component.html',
    styleUrls: ['./negotiations.component.scss'],
})
export class NegotiationsComponent implements OnInit, OnDestroy {
    negotiatingToggles: Toggle[] = ['All', 'Sell', 'Buy'];
    toggleIndex: number = 0;
    searchInput: string;

    negotiatingRoomCards: NegotiationCard[];
    filteredNegotiatingRoomCards: NegotiationCard[];

    notifications: Notification[] = [];
    notificationLotIds: number[] = [];

    isLoading: boolean = true;

    animateIn: boolean = false;

    hasActiveAgent: boolean = false;

    destroyed$: EventEmitter<void> = new EventEmitter<void>();

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

        this.route.queryParams.pipe(take(1)).subscribe((params) => {
            if (Object.keys(params).length > 0) {
                if (params.toggleIndex) {
                    this.toggleIndex = +params.toggleIndex;
                }
                if (params.searchInput) {
                    this.searchInput = params.searchInput;
                }
            }
        });

        this.store
            .pipe(select(fromRoot.negotiationSelector.getAllOrderedNegotiationCards), takeUntil(this.destroyed$))
            .subscribe((negotiatingRoomCards: NegotiationCard[]) => {
                this.negotiatingRoomCards = negotiatingRoomCards.filter(
                    (negotiationCard) => !negotiationCard.isCompleted,
                );
                this.filteredNegotiatingRoomCards = this.negotiatingRoomCards;
                this.fetchBrokerNegotiationDocuments();
                this.filterAccordingToToggleHelper();
                if (this.searchInput) {
                    this.filterAccordingToSearchInputHelper();
                }
            });

        this.actions$
            .pipe(
                ofType(
                    actions.negotiationActions.UserNegotiationCardsFail,
                    actions.negotiationActions.UserNegotiationCardsSuccess,
                ),
                takeUntil(this.destroyed$),
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

        this.store
            .pipe(select(fromAgents.brokersSelectors.getFilteredBrokers), takeUntil(this.destroyed$))
            .subscribe((response) => {
                if (response?.activeBroker) {
                    this.hasActiveAgent = response.activeBroker ? true : false;
                }
            });

        this.store
            .pipe(select(fromRoot.notificationSelectors.getNegotiationNotifications), takeUntil(this.destroyed$))
            .subscribe((notifications) => {
                this.notifications = notifications;
                this.notificationLotIds = this.notifications.length
                    ? this.notifications.map((notification) => notification.lotId)
                    : [];
            });
    }

    ngOnDestroy(): void {
        this.destroyed$.next();
    }

    // #endregion

    // #region NGRX Flows

    fetchBrokerNegotiationDocuments(): void {
        let lotMatchIds: number[] = [];

        if (this.filteredNegotiatingRoomCards.length) {
            lotMatchIds = getAllLotMatchIdsFromNegotiationCards(this.filteredNegotiatingRoomCards);

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

    // #endregion

    // #region State Selectors
    selectClient(): void {
        this.store
            .select(brokersSelectors.getCurrentClient)
            .pipe(takeUntil(this.destroyed$))
            .subscribe((client) => {
                if (client) {
                    this.store.dispatch(actions.negotiationActions.ReqUserNegotiationCards({ clientUid: client.uid }));
                } else {
                    this.store.dispatch(actions.negotiationActions.ReqUserNegotiationCards({}));
                }
            });
    }

    // #endregion

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
                stepInfo: STEP_INFO_DATA['Negotiate'],
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
        this.toggleIndex
            ? (this.filteredNegotiatingRoomCards = this.negotiatingRoomCards.filter(
                  (negotiationCard) => negotiationCard.lotType === this.negotiatingToggles[this.toggleIndex],
              ))
            : (this.filteredNegotiatingRoomCards = this.negotiatingRoomCards);

        this.animateInHelper();
    }

    filterAccordingToSearchInputHelper() {
        this.filterAccordingToToggleHelper();
        this.filteredNegotiatingRoomCards = this.filteredNegotiatingRoomCards.filter((cards) => {
            return cards.lotName.toLocaleLowerCase().includes(this.searchInput.toLocaleLowerCase());
        });
    }

    resetSearchInputFilterHelper() {
        this.filteredNegotiatingRoomCards = this.negotiatingRoomCards;
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
