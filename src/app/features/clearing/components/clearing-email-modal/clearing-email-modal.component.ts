import { LotMatch, LotMatchIteration, NegotiationCard } from './../../../../core/models/viewModels';
import { Component, Inject, OnInit } from '@angular/core';
import { MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { select, Store } from '@ngrx/store';
import * as fromNegotiations from 'src/app/features/negotiations/negotiations.selectors';
import * as actions from 'src/app/core/helpers/index.actions';
import * as fromRoot from 'src/app/features/dashboard/dashboard.selectors';
import { take } from 'rxjs/operators';
import { Actions, ofType } from '@ngrx/effects';
import { User } from 'src/app/core/models/queryModels';

@Component({
    selector: 'app-clearing-email-modal',
    templateUrl: './clearing-email-modal.component.html',
    styleUrls: ['./clearing-email-modal.component.scss'],
})
export class ClearingEmailModalComponent implements OnInit {
    isLoading: boolean = true;
    lotMatch: LotMatch;
    isSuccess: boolean = false;
    matchIterations: LotMatchIteration;
    user: User;
    constructor(
        private dialogRef: MatDialogRef<ClearingEmailModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: { completedNegotiation: NegotiationCard },
        private store: Store<fromNegotiations.State>,
        private actions$: Actions,
    ) {}

    ngOnInit(): void {
        this.actions$
            .pipe(ofType(actions.negotiationActions.LatestLotMatchIterationSuccess), take(1))
            .subscribe((result) => {
                this.isLoading = false;
                this.matchIterations = result.latestMatch;
            });

        this.store.dispatch(
            actions.negotiationActions.ReqLatestLotMatchIteration({
                lotMatchId: this.data.completedNegotiation.activeNegotiations[0].lotMatchId,
            }),
        );
        this.store.pipe(select(fromRoot.authSelectors.getUser), take(1)).subscribe((user) => {
            this.user = user;
        });
    }

    handleCloseModal() {
        this.dialogRef.close();
    }

    handleLotMatch() {
        this.lotMatch = {
            id: this.matchIterations.lotMatchId,
            userType: this.matchIterations.userType,
            completedDate: this.matchIterations.completedDate,
            lotName: this.matchIterations.lotName,
            sellerDetails: this.matchIterations.sellerDetails,
            buyerDetails: this.matchIterations.buyerDetails,
        };
    }

    handleEmailSend() {
        const requestedBy =
            this.user.firstname + ' ' + this.user.lastname + ' (' + this.data.completedNegotiation.lotType + ')';
        this.isLoading = true;
        this.handleLotMatch();
        this.store.dispatch(
            actions.negotiationActions.ReqClearNegotiation({ lotMatch: this.lotMatch, requestedBy: requestedBy }),
        );
        this.actions$.pipe(ofType(actions.negotiationActions.ClearNegotiationSuccess), take(1)).subscribe(() => {
            this.isLoading = false;
            this.isSuccess = true;
        });
        this.actions$.pipe(ofType(actions.negotiationActions.ClearNegotiationFail), take(1)).subscribe(() => {
            this.isLoading = false;
        });
    }
}
