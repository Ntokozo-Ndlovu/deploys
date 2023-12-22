import { PROFILE_ROUTE } from 'src/app/core/helpers/constants';
import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as fromRoot from 'src/app/features/dashboard/dashboard.selectors';
import * as actions from 'src/app/core/helpers/index.actions';
import * as snackBarConfigs from 'src/app/core/helpers/snackbar';
import { Actions, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { ScoutCard, Toggle } from 'src/app/core/models/viewModels';
import { MatSnackBar } from '@angular/material/snack-bar';
import { take, takeUntil } from 'rxjs/operators';
import { SCOUT_CREATE_ROUTE, HOME_ROUTE, STEP_INFO_DATA } from './../../../../core/helpers/constants';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { StepInfoModalComponent } from 'src/app/features/shared/components/step-info-modal/step-info-modal.component';

@Component({
    selector: 'app-scout',
    templateUrl: './scout.component.html',
    styleUrls: ['./scout.component.scss'],
})
export class ScoutComponent implements OnInit, OnDestroy {
    scoutToggles: Toggle[] = ['All', 'Sell', 'Buy'];
    toggleIndex: number = 0;

    scoutCards: ScoutCard[];
    filteredScoutCards: ScoutCard[];

    searchInput: string;

    isScoutLoading: boolean = true;
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
        this.actions$
            .pipe(ofType(actions.scoutActions.UserScoutCardsFail, actions.scoutActions.UserScoutCardsSuccess))
            .subscribe((action) => {
                if (action.type === actions.scoutActions.UserScoutCardsSuccess.type) {
                    this.isScoutLoading = false;
                } else {
                    this.snackbar.open(
                        'An error occurred when trying to retrieve your scouts. Please reload the page.',
                        'CLOSE',
                        snackBarConfigs.errorConfig,
                    );
                }
            });

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
            .pipe(select(fromRoot.marketSelectors.getAllOrderedScoutCards), takeUntil(this.destroyed$))
            .subscribe((scoutCards: ScoutCard[]) => {
                if (scoutCards) {
                    this.scoutCards = scoutCards;
                    this.filteredScoutCards = this.scoutCards;
                    if (this.toggleIndex) {
                        this.filterAccordingToToggleHelper();
                    }
                    if (this.searchInput) {
                        this.filterAccordingToSearchInputHelper();
                    }
                }
            });

        this.store.dispatch(actions.scoutActions.ReqUserScoutCards());
    }

    ngOnDestroy(): void {
        this.destroyed$.next();
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

    handleNavigateToCreateScout() {
        this.store.dispatch(actions.lotActions.LinkCurrentScoutToLot({ scout: null }));
        this.toggleIndex === 2
            ? this.router.navigate([SCOUT_CREATE_ROUTE], {
                  queryParams: { scoutType: 'Buy' },
              })
            : this.router.navigate([SCOUT_CREATE_ROUTE]);
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
                stepInfo: STEP_INFO_DATA['Scout the Market'],
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
            ? (this.filteredScoutCards = this.scoutCards.filter(
                  (scoutCard) => scoutCard.scoutType === this.scoutToggles[this.toggleIndex],
              ))
            : (this.filteredScoutCards = this.scoutCards);
        this.animateInHelper();
    }

    filterAccordingToSearchInputHelper() {
        this.filterAccordingToToggleHelper();
        this.filteredScoutCards = this.filteredScoutCards.filter((cards) => {
            return (
                cards.crop.name.toLocaleLowerCase().includes(this.searchInput.toLocaleLowerCase()) ||
                cards.town.toLocaleLowerCase().includes(this.searchInput.toLocaleLowerCase())
            );
        });
    }

    resetSearchInputFilterHelper() {
        this.filteredScoutCards = this.scoutCards;
        this.filterAccordingToToggleHelper();
    }

    animateInHelper() {
        this.animateIn = true;
        setTimeout(() => {
            this.animateIn = false;
        }, 300);
    }
}
