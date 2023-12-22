import { Component, EventEmitter, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromRoot from 'src/app/features/dashboard/dashboard.selectors';
import * as actions from 'src/app/core/helpers/index.actions';
import * as snackBarConfigs from 'src/app/core/helpers/snackbar';
import { takeUntil } from 'rxjs/operators';
import { NegotiationCard } from 'src/app/core/models/viewModels';
import { Actions, ofType } from '@ngrx/effects';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { HOME_ROUTE } from 'src/app/core/helpers/constants';
import { ClearingEmailModalComponent } from './components/clearing-email-modal/clearing-email-modal.component';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';

@Component({
    selector: 'app-clearing',
    templateUrl: './clearing.component.html',
    styleUrls: ['./clearing.component.scss'],
})
export class ClearingComponent implements OnInit {
    completedCards: NegotiationCard[];
    filteredCompletedCards: NegotiationCard[];

    searchInput: string;

    isLoading: boolean = true;

    animateIn: boolean = false;

    destroyed$: EventEmitter<void> = new EventEmitter<void>();

    constructor(
        private store: Store<fromRoot.State>,
        private actions$: Actions,
        private snackbar: MatSnackBar,
        private router: Router,
        public dialog: MatDialog,
    ) {}

    ngOnInit(): void {
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

        this.store
            .pipe(select(fromRoot.negotiationSelector.getAllOrderedNegotiationCards), takeUntil(this.destroyed$))
            .subscribe((negotiationCards: NegotiationCard[]) => {
                this.completedCards = negotiationCards.filter((negotiationCard) => negotiationCard.isCompleted);
                this.filteredCompletedCards = this.completedCards;
            });

        this.store.dispatch(actions.negotiationActions.ReqUserNegotiationCards({}));
    }

    ngOnDestroy(): void {
        this.destroyed$.next();
    }

    handleSearchInput(input: string) {
        this.searchInput = input;
        if (this.searchInput) {
            this.filteredCompletedCards = this.filteredCompletedCards.filter((cards) => {
                return cards.lotName.toLocaleLowerCase().includes(this.searchInput.toLocaleLowerCase());
            });
        } else {
            this.resetSearchInputFilterHelper();
        }
    }

    handleNavigateToHomePage() {
        this.router.navigate([HOME_ROUTE]);
    }

    handleClearingEmailModal(completedNegotiation: NegotiationCard) {
        this.dialog.open<ClearingEmailModalComponent>(ClearingEmailModalComponent, {
            panelClass: 'g-modal-container-sm-padding',
            data: {
                completedNegotiation: completedNegotiation,
            },
        });
    }

    resetSearchInputFilterHelper() {
        this.filteredCompletedCards = this.completedCards;
    }
}
