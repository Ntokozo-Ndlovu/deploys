import { PROFILE_ROUTE } from 'src/app/core/helpers/constants';
import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as fromRoot from 'src/app/features/dashboard/dashboard.selectors';
import * as actions from 'src/app/core/helpers/index.actions';
import * as snackBarConfigs from 'src/app/core/helpers/snackbar';
import { Actions, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { LotCard, Toggle } from 'src/app/core/models/viewModels';
import { MatSnackBar } from '@angular/material/snack-bar';
import { take, takeUntil } from 'rxjs/operators';
import { HOME_ROUTE, STEP_INFO_DATA } from './../../../../core/helpers/constants';
import { StepInfoModalComponent } from 'src/app/features/shared/components/step-info-modal/step-info-modal.component';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { NavigateToScoutModalComponent } from '../navigate-to-scout-modal/navigate-to-scout-modal.component';
import { brokersSelectors } from '../../../../core/ngrx/brokers';
import { Client, Lot } from '../../../../core/models/queryModels';

@Component({
    selector: 'app-lot',
    templateUrl: './lot.component.html',
    styleUrls: ['./lot.component.scss'],
})
export class LotComponent implements OnInit, OnDestroy {
    lotToggles: Toggle[] = ['All', 'Sell', 'Buy'];
    toggleIndex: number = 0;

    lotCards: LotCard[];
    filteredLotCards: LotCard[];

    searchInput: string;

    isLotsLoading: boolean = true;
    animateIn: boolean = false;

    destroyed$: EventEmitter<void> = new EventEmitter<void>();

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private store: Store<fromRoot.State>,
        private actions$: Actions,
        private snackbar: MatSnackBar,
        private dialog: MatDialog,
    ) {}

    ngOnInit(): void {
        this.selectClient();

        this.route.queryParams.pipe(take(1)).subscribe((params) => {
            if (Object.keys(params).length) {
                if (params.toggleIndex) {
                    this.toggleIndex = +params.toggleIndex;
                }
                if (params.searchInput) {
                    this.searchInput = params.searchInput;
                }
            }
        });

        this.store
            .pipe(select(fromRoot.lotSelectors.getAllOrderedLotCards), takeUntil(this.destroyed$))
            .subscribe((lotCards: LotCard[]) => {
                if (lotCards) {
                    this.lotCards = lotCards;
                    this.filteredLotCards = this.lotCards;

                    if (this.filteredLotCards.length > 0) {
                        this.privatiseExpiredLotsHelper(this.filteredLotCards);
                    }
                    if (this.toggleIndex) {
                        this.filterAccordingToToggleHelper();
                    }
                    if (this.searchInput) {
                        this.filterAccordingToSearchInputHelper();
                    }
                }
            });

        this.actions$
            .pipe(ofType(actions.lotActions.UserLotsFail, actions.lotActions.UserLotsSuccess))
            .subscribe((action) => {
                if (action.type === actions.lotActions.UserLotsSuccess.type) {
                    this.isLotsLoading = false;
                    this.store.dispatch(actions.notificationActions.ReqCloudMessagingPermissionStatus());
                } else {
                    this.snackbar.open(
                        'An error occurred when trying to retrieve your lots. Please reload the page.',
                        'CLOSE',
                        snackBarConfigs.errorConfig,
                    );
                }
            });

        this.actions$
            .pipe(
                ofType(actions.authActions.ReqGetClientEntitiesSuccess, actions.authActions.ReqGetClientEntitiesFail),
                take(1),
            )
            .subscribe((action) => {
                if (action.type === actions.authActions.ReqGetClientEntitiesSuccess.type) {
                    this.store.dispatch(actions.lotActions.ReqUserLots());
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
            .subscribe((client: Client) => {
                if (client) {
                    this.store.dispatch(actions.authActions.ReqGetClientEntities({ clientUid: client.uid }));
                } else {
                    this.store.dispatch(actions.lotActions.ReqUserLots());
                }
            });
    }

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

    handleNavigateToScoutModal() {
        this.dialog.open(NavigateToScoutModalComponent, {
            panelClass: 'g-modal-container',
        });
    }

    handleNavigateToHomePage() {
        this.router.navigate([HOME_ROUTE]);
    }

    handleNavigateToProfile(): void {
        this.router.navigate([PROFILE_ROUTE]);
    }

    handleInfoModal() {
        this.dialog.open(StepInfoModalComponent, {
            panelClass: 'g-modal-container',
            data: {
                stepInfo: STEP_INFO_DATA['Lots'],
            },
        });
    }

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
            ? (this.filteredLotCards = this.lotCards.filter(
                  (lotCard) => lotCard.lotType === this.lotToggles[this.toggleIndex],
              ))
            : (this.filteredLotCards = this.lotCards);
        this.animateInHelper();
    }

    filterAccordingToSearchInputHelper() {
        this.filterAccordingToToggleHelper();
        this.filteredLotCards = this.filteredLotCards.filter((cards) => {
            return (
                cards.lotName.toLocaleLowerCase().includes(this.searchInput.toLocaleLowerCase()) ||
                cards.crop.name.toLocaleLowerCase().includes(this.searchInput.toLocaleLowerCase()) ||
                cards.deliveryPointName.toLocaleLowerCase().includes(this.searchInput.toLocaleLowerCase())
            );
        });
    }

    resetSearchInputFilterHelper() {
        this.filteredLotCards = this.lotCards;
        this.filterAccordingToToggleHelper();
    }

    animateInHelper() {
        this.animateIn = true;
        setTimeout(() => {
            this.animateIn = false;
        }, 300);
    }

    trackByIdx(i) {
        return i;
    }

    privatiseExpiredLotsHelper(lotCards: LotCard[]): void {
        const lotIds: number[] = [];
        lotCards.forEach((lot) => {
            if (lot.isExpired) {
                lotIds.push(lot.id);
            }
        });

        this.store.dispatch(actions.lotActions.ReqPrivatiseLots({ lotIds }));
    }
}
