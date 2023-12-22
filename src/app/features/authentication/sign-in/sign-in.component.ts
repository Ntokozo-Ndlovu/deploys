import { Component, OnInit } from '@angular/core';
import { Capacitor, Plugins } from '@capacitor/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as snackBarConfigs from 'src/app/core/helpers/snackbar';
import firebase from 'firebase/compat/app';
import * as fromRoot from 'src/app/core/ngrx/reducers/index';
import * as actions from 'src/app/core/helpers/index.actions';
import { Actions, ofType } from '@ngrx/effects';
import { take } from 'rxjs/operators';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import {
    DOCUMENT_VIEWER_ROUTE,
    emailRegex,
    FORGOT_PASSWORD_ROUTE,
    HOME_ROUTE,
    SIGNUP_ROUTE,
} from 'src/app/core/helpers/constants';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
    passwordIsHidden: boolean = false;
    routeUserBack: boolean = false;

    emailPattern: RegExp = emailRegex;

    emailInput: string = '';
    password: string = '';

    constructor(
        private store: Store<fromRoot.State>,
        private actions$: Actions,
        private afAuth: AngularFireAuth,
        private snackbar: MatSnackBar,
        private route: ActivatedRoute,
        private router: Router,
        private location: Location,
    ) {}

    ngOnInit(): void {
        this.route.queryParams.pipe(take(1)).subscribe(({ fromScoutSearch }) => {
            if (fromScoutSearch) {
                this.routeUserBack = true;
            }
        });
    }

    togglePassword() {
        this.passwordIsHidden = !this.passwordIsHidden;
    }

    handleLogin(form: NgForm) {
        if (form.valid) {
            const payload = {
                email: this.emailInput,
                password: this.password,
                executedTime: Date.now(),
            };

            this.store.dispatch(actions.authActions.ReqEmailLogin(payload));

            this.actions$.pipe(ofType(actions.authActions.EmailLoginSuccess), take(1)).subscribe(() => {
                this.redirectUserHelper();
            });
        }
    }

    handleRouteToPasswordManagement() {
        this.router.navigate([FORGOT_PASSWORD_ROUTE]);
    }

    handleRouteToSignUp() {
        this.router.navigate([SIGNUP_ROUTE]);
    }

    handleRouteToDocumentViewer(name: string) {
        this.router.navigate([`${DOCUMENT_VIEWER_ROUTE}/${name}`]);
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
}
