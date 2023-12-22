import { Component, Inject, OnInit } from '@angular/core';
import { MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Purchases, PurchasesPackage } from '@awesome-cordova-plugins/purchases/ngx';
import { Capacitor } from '@capacitor/core';
import { Actions, ofType } from '@ngrx/effects';
import { Dictionary } from '@ngrx/entity';
import { select, Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import { VerificationSubscription } from 'src/app/core/models/viewModels';
import { User } from 'src/app/core/models/queryModels';
import { transformSingleUsersForVerificationHelper } from 'src/app/core/helpers/helperFunctions';

import * as snackBarConfigs from '../../../../../core/helpers/snackbar';
import * as actions from 'src/app/core/helpers/index.actions';
import * as fromRoot from 'src/app/features/dashboard/dashboard.selectors';
import * as fromApp from 'src/app/core/ngrx/app-state/index';

@Component({
    selector: 'app-subscription-type-modal',
    templateUrl: './subscription-type-modal.component.html',
    styleUrls: ['./subscription-type-modal.component.scss'],
})
export class SubscriptionTypeModalComponent implements OnInit {
    isWeb: boolean = true;
    isSuccess: boolean = false;
    isLoading: boolean = false;
    isEmailLoading: boolean = false;

    productName: string;
    annualOffering: PurchasesPackage;
    monthlyOffering: PurchasesPackage;

    user: User;

    constructor(
        private dialogRef: MatDialogRef<SubscriptionTypeModalComponent>,
        @Inject(MAT_DIALOG_DATA)
        public data: { verificationSubscription: Dictionary<VerificationSubscription>; promotionalText?: string },
        private purchases: Purchases,
        private snackbar: MatSnackBar,
        private store: Store,
        private actions$: Actions,
    ) {
        this.isWeb = Capacitor.getPlatform() === 'web';
    }

    ngOnInit(): void {
        this.store.pipe(select(fromRoot.authSelectors.getUser), take(1)).subscribe((user) => {
            this.user = user;
        });
        if (!this.isWeb) {
            this.purchases.getOfferings().then(
                (offerings) => {
                    this.productName = offerings.all[this.data.verificationSubscription.value.identifier].identifier;
                    this.annualOffering = offerings.all[this.data.verificationSubscription.value.identifier].annual;
                    this.monthlyOffering = offerings.all[this.data.verificationSubscription.value.identifier].monthly;
                },
                (error) => {
                    console.log('Failed to get Offerings: ', error.message);
                    this.snackbar.open(
                        'Failed to get Offerings, please try again',
                        'CLOSE',
                        snackBarConfigs.errorConfig,
                    );
                },
            );
        }
    }

    handleClose(): void {
        this.dialogRef.close();
    }

    handleNativePurchase(purchasePeriod: string, verificationId: number) {
        this.isLoading = true;
        let currentDate = new Date();
        if (purchasePeriod === 'year') {
            this.purchases.purchasePackage(this.annualOffering).then(
                () => {
                    this.isLoading = false;
                    let expiryDate = new Date(currentDate.setFullYear(currentDate.getFullYear() + 1)).getTime();
                    this.verificationHelper(verificationId, expiryDate);
                },
                ({ error, userCancelled }) => {
                    this.isLoading = false;
                    console.log('An error occurred while making the purchase: ', error.message);
                    if (!userCancelled) {
                        this.snackbar.open('Failed To Purchase Subscription', 'CLOSE', snackBarConfigs.errorConfig);
                    }
                },
            );
        } else if (purchasePeriod === 'month') {
            this.purchases.purchasePackage(this.monthlyOffering).then(
                () => {
                    this.isLoading = false;
                    let expiryDate = new Date(currentDate.setMonth(currentDate.getMonth() + 1)).getTime();
                    this.verificationHelper(verificationId, expiryDate);
                },
                ({ error, userCancelled }) => {
                    this.isLoading = false;
                    console.log('An error occurred while making the purchase: ', error.message);
                    if (!userCancelled) {
                        this.snackbar.open('Failed To Purchase Subscription', 'CLOSE', snackBarConfigs.errorConfig);
                    }
                },
            );
        }
    }

    verificationHelper(verificationId: number, expiryDate: number) {
        this.isLoading = true;
        this.actions$
            .pipe(ofType(actions.authActions.ReqUpdateUserVerificationStatusSuccess), take(1))
            .subscribe(() => {
                this.isLoading = false;
                this.isSuccess = true;
                this.snackbar.open('Successfully purchased Subscription', 'CLOSE', snackBarConfigs.successConfig);
            });

        this.actions$.pipe(ofType(actions.authActions.ReqUpdateUserVerificationStatusFail), take(1)).subscribe(() => {
            this.isLoading = false;
            this.snackbar.open(
                'Payment successful but failed to update verification, please contact MatchMX',
                'CLOSE',
                snackBarConfigs.errorConfig,
            );
        });

        this.store.dispatch(
            actions.authActions.ReqUpdateUserVerificationStatus({
                userVerifications: [transformSingleUsersForVerificationHelper(verificationId, this.user, expiryDate)],
                showSnackBar: false,
            }),
        );
    }

    handleEmail() {
        this.isEmailLoading = true;
        this.actions$
            .pipe(
                ofType(
                    fromApp.appActions.ReqEmailVerificationFormSuccess,
                    fromApp.appActions.ReqEmailVerificationFormFail,
                ),
                take(1),
            )
            .subscribe(() => {
                this.isEmailLoading = false;
                this.dialogRef.close();
            });
        this.store.dispatch(fromApp.appActions.ReqEmailVerificationForm());
    }
}
