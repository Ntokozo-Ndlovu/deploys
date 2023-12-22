import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromRoot from 'src/app/core/ngrx/reducers/index';
import * as actions from 'src/app/core/helpers/index.actions';

import { emailRegex, SIGNIN_ROUTE } from 'src/app/core/helpers/constants';

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
    emailInput: string = '';
    emailPattern: RegExp = emailRegex;

    constructor(private router: Router, private store: Store<fromRoot.State>) {}

    ngOnInit(): void {}

    handleForgotPassword() {
        this.store.dispatch(actions.authActions.ReqPasswordReset({ email: this.emailInput }));
        this.router.navigate([SIGNIN_ROUTE]);
    }
}
