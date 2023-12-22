import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Actions, ofType } from '@ngrx/effects';
import { Dictionary } from '@ngrx/entity';
import {
    baseVerifications,
    promotionVerifications,
    SUPPORT_ROUTE,
    verificationTypes,
    VERIFICATION_SUBSCRIPTIONS,
    DOCUMENT_VIEWER_ROUTE,
} from 'src/app/core/helpers/constants';
import { VerificationSubscription, VerificationType } from 'src/app/core/models/viewModels';
import { take } from 'rxjs/operators';
import { Capacitor } from '@capacitor/core';
import { User } from 'src/app/core/models/queryModels';

import * as fromApp from 'src/app/core/ngrx/app-state/index';
import * as fromRoot from '../../../../core/ngrx/reducers/index';

@Component({
    selector: 'app-verification',
    templateUrl: './verification.component.html',
    styleUrls: ['./verification.component.scss'],
})
export class VerificationComponent implements OnInit {
    verificationSubscriptions: Dictionary<VerificationSubscription> = VERIFICATION_SUBSCRIPTIONS;
    baseVerificationSubscriptions: Dictionary<VerificationSubscription>;
    promotionVerificationSubscriptions: Dictionary<VerificationSubscription>;
    verificationTypes: Dictionary<VerificationType> = verificationTypes;
    user: User;
    userVerification: VerificationType;
    verificationDate: Date;

    platform: string;
    isWeb: boolean = false;
    isUserVerified: boolean = false;
    isActionLoading: boolean = false;
    isGrainSAVerified: boolean = false;

    constructor(private router: Router, private store: Store<fromApp.AppState>, private actions$: Actions) {
        this.platform = Capacitor.getPlatform();
        this.isWeb = this.platform === 'web';
    }

    ngOnInit(): void {
        this.baseVerificationSubscriptions = Object.fromEntries(
            Object.entries(this.verificationSubscriptions).filter(([key]) => baseVerifications.includes(+key)),
        );
        this.promotionVerificationSubscriptions = Object.fromEntries(
            Object.entries(this.verificationSubscriptions).filter(([key]) => promotionVerifications.includes(+key)),
        );

        this.store.pipe(select(fromRoot.authSelectors.getUser), take(1)).subscribe((user) => {
            if (user) {
                this.user = user;
                if (user.verification && user.verification.id !== 6) {
                    this.isUserVerified = true;
                    this.userVerification = this.verificationTypes[this.user.verification.id];
                    this.verificationDate = new Date(this.user.verification.verificationDate);
                }
                if (user.grainSA?.isVerified) this.isGrainSAVerified = true;
            }
        });
    }

    handleBack(): void {
        this.router.navigate([SUPPORT_ROUTE]);
    }

    handleRequestByEmail(): void {
        this.isActionLoading = true;

        this.actions$
            .pipe(
                ofType(
                    fromApp.appActions.ReqEmailVerificationFormSuccess,
                    fromApp.appActions.ReqEmailVerificationFormFail,
                ),
                take(1),
            )
            .subscribe(() => {
                this.isActionLoading = false;
            });

        this.store.dispatch(fromApp.appActions.ReqEmailVerificationForm());
    }

    handleRouteToDocumentViewer(name: string) {
        this.router.navigate([`${DOCUMENT_VIEWER_ROUTE}/${name}`]);
    }
}
