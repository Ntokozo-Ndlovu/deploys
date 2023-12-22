import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as snackBarConfigs from 'src/app/core/helpers/snackbar';
import * as fromRoot from 'src/app/core/ngrx/reducers/index';
import * as actions from 'src/app/core/helpers/index.actions';
import { Router } from '@angular/router';
import { Capacitor, Plugins } from '@capacitor/core';
import { Actions, ofType } from '@ngrx/effects';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import firebase from 'firebase/compat/app';
import { take } from 'rxjs/operators';
import { DOCUMENT_VIEWER_ROUTE, emailRegex, HOME_ROUTE, SIGNIN_ROUTE } from 'src/app/core/helpers/constants';
import { SignUpUser } from 'src/app/core/models/viewModels';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { GrainSaModalComponent } from '../../shared/components/grain-sa-modal/grain-sa-modal.component';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
    newUser: SignUpUser = { name: '', surname: '', email: '', phone: '', location: '', password: '', grainSAId: null };
    confirmPasswordInput: string = '';

    emailPattern: RegExp = emailRegex;

    routeUserBack: boolean = false;
    passwordIsHidden: boolean = false;
    confirmPasswordIsHidden: boolean = false;
    locationIsSelected: boolean = false;
    passwordIsValid: boolean = false;
    showLocationTip: boolean = false;

    constructor(
        private router: Router,
        private store: Store<fromRoot.State>,
        private actions$: Actions,
        private afAuth: AngularFireAuth,
        private snackbar: MatSnackBar,
        private location: Location,
        private dialog: MatDialog,
    ) {}

    ngOnInit(): void {}

    handleRouteToSignIn() {
        this.router.navigate([SIGNIN_ROUTE]);
    }

    handleAddressChange(address) {
        this.locationIsSelected = true;
        this.newUser.location = address.formatted_address;
    }

    handlePasswordValidity(isValid: boolean) {
        this.passwordIsValid = isValid === true;
    }

    handleLocationInfo() {
        this.showLocationTip = true;
    }

    handleSignUp() {
        this.store.dispatch(
            actions.authActions.ReqEmailRegister({
                email: this.newUser.email,
                password: this.newUser.password,
                signUpData: this.newUser,
                executedTime: Date.now(),
            }),
        );

        this.actions$.pipe(ofType(actions.authActions.EmailRegisterSuccess), take(1)).subscribe(() => {
            this.redirectUserHelper();
        });
    }

    handleGrainSAModal() {
        this.dialog.open(GrainSaModalComponent, {
            panelClass: 'g-modal-container',
            autoFocus: false,
            data: { showSubscription: false },
        });
    }

    togglePassword() {
        this.passwordIsHidden = !this.passwordIsHidden;
    }

    toggleConfirmPassword() {
        this.confirmPasswordIsHidden = !this.confirmPasswordIsHidden;
    }

    googleLogin() {
        this.actions$.pipe(ofType(actions.authActions.ProviderSignInSuccess), take(1)).subscribe(() => {
            this.redirectUserHelper();
        });
        try {
            const platform = Capacitor.getPlatform();
            this.store.dispatch(
                actions.authActions.ReqProviderSignIn({ executedTime: Date.now(), platform: platform }),
            );
        } catch (error) {
            this.snackbar.open(error.message, 'CLOSE', snackBarConfigs.errorConfig);
        }
    }

    redirectUserHelper() {
        this.routeUserBack ? this.location.back() : this.router.navigate([HOME_ROUTE]);
    }

    handleRouteToDocumentViewer(name: string) {
        this.router.navigate([`${DOCUMENT_VIEWER_ROUTE}/${name}`]);
    }
}
