import { Component, Inject, OnInit } from '@angular/core';
import { MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import * as actions from 'src/app/core/helpers/index.actions';
import { take } from 'rxjs/operators';
import { User } from 'src/app/core/models/queryModels';
import { Address } from 'ngx-google-places-autocomplete/objects/address';

import { MatSnackBar } from '@angular/material/snack-bar';
import * as snackBarConfigs from 'src/app/core/helpers/snackbar';

@Component({
    selector: 'app-update-info-modal',
    templateUrl: './update-info-modal.component.html',
    styleUrls: ['./update-info-modal.component.scss'],
})
export class UpdateInfoModalComponent implements OnInit {
    locationSet: boolean = false;
    isUpdateLocationLoading: boolean = false;
    userInfo: { location: string; phone: string } = { location: null, phone: null };

    options: any = {
        types: ['(regions)'],
    };

    constructor(
        private dialogRef: MatDialogRef<UpdateInfoModalComponent>,
        private actions$: Actions,
        private store: Store,
        @Inject(MAT_DIALOG_DATA) public data: { user: User },
        private snackbar: MatSnackBar,
    ) {}

    ngOnInit(): void {}

    handleBack() {
        this.dialogRef.close();
    }

    handleSelectLocation(address: Address) {
        this.userInfo = { ...this.userInfo, location: address.formatted_address.split(',', 2).join(', ') };
        this.locationSet = true;
    }

    handleUpdateInfo(): void {
        this.isUpdateLocationLoading = true;

        this.actions$.pipe(ofType(actions.authActions.ReqUpdateUserDetailsFail), take(1)).subscribe(() => {
            this.isUpdateLocationLoading = false;
            this.snackbar.open('Failed to update location', 'CLOSE', snackBarConfigs.errorConfig);
        });

        this.actions$.pipe(ofType(actions.authActions.ReqUpdateUserDetailsSuccess), take(1)).subscribe(() => {
            this.isUpdateLocationLoading = false;
            this.dialogRef.close();
        });

        this.store.dispatch(
            actions.authActions.ReqUpdateUserDetails({
                user: { ...this.data.user, ...this.userInfo, updatedAt: Date.now() },
            }),
        );
    }
}
