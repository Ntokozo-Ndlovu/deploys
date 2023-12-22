import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationComponent } from './authentication.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../shared/angular-material.module';
//import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { NgxGpAutocompleteModule } from "@angular-magic/ngx-gp-autocomplete"
import { PasswordValidatorComponent } from './password-validator/password-validator.component';

@NgModule({
    declarations: [AuthenticationComponent, SignUpComponent, SignInComponent, ForgotPasswordComponent, PasswordValidatorComponent],
    imports: [CommonModule, FormsModule, AuthenticationRoutingModule, AngularMaterialModule,// GooglePlaceModule,
    NgxGpAutocompleteModule
],
})
export class AuthenticationModule {}
