"use strict";
(self["webpackChunkskudu_match"] = self["webpackChunkskudu_match"] || []).push([["src_app_features_authentication_authentication_module_ts"],{

/***/ 684:
/*!**************************************************************************!*\
  !*** ./src/app/features/authentication/authentication-routing.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthenticationRoutingModule: () => (/* binding */ AuthenticationRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _authentication_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication.component */ 9934);
/* harmony import */ var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-in/sign-in.component */ 6914);
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ 2920);
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sign-up/sign-up.component */ 5592);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);







const routes = [{
  path: '',
  component: _authentication_component__WEBPACK_IMPORTED_MODULE_0__.AuthenticationComponent,
  children: [{
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full'
  }, {
    path: 'sign-in',
    component: _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_1__.SignInComponent
  }, {
    path: 'sign-up',
    component: _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_3__.SignUpComponent
  }, {
    path: 'forgot-password',
    component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_2__.ForgotPasswordComponent
  }]
}];
class AuthenticationRoutingModule {
  static #_ = this.ɵfac = function AuthenticationRoutingModule_Factory(t) {
    return new (t || AuthenticationRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: AuthenticationRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AuthenticationRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 9934:
/*!*********************************************************************!*\
  !*** ./src/app/features/authentication/authentication.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthenticationComponent: () => (/* binding */ AuthenticationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);


class AuthenticationComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function AuthenticationComponent_Factory(t) {
    return new (t || AuthenticationComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AuthenticationComponent,
    selectors: [["app-authentication"]],
    decls: 2,
    vars: 0,
    consts: [[1, "g-app-dimensions"]],
    template: function AuthenticationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 7282:
/*!******************************************************************!*\
  !*** ./src/app/features/authentication/authentication.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthenticationModule: () => (/* binding */ AuthenticationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _authentication_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication-routing.module */ 684);
/* harmony import */ var _authentication_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication.component */ 9934);
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sign-up/sign-up.component */ 5592);
/* harmony import */ var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sign-in/sign-in.component */ 6914);
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ 2920);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _shared_angular_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/angular-material.module */ 9702);
/* harmony import */ var _angular_magic_ngx_gp_autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular-magic/ngx-gp-autocomplete */ 4711);
/* harmony import */ var _password_validator_password_validator_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./password-validator/password-validator.component */ 8218);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);








//import { GooglePlaceModule } from 'ngx-google-places-autocomplete';



class AuthenticationModule {
  static #_ = this.ɵfac = function AuthenticationModule_Factory(t) {
    return new (t || AuthenticationModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
    type: AuthenticationModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _authentication_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthenticationRoutingModule, _shared_angular_material_module__WEBPACK_IMPORTED_MODULE_5__.AngularMaterialModule, _angular_magic_ngx_gp_autocomplete__WEBPACK_IMPORTED_MODULE_10__.NgxGpAutocompleteModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AuthenticationModule, {
    declarations: [_authentication_component__WEBPACK_IMPORTED_MODULE_1__.AuthenticationComponent, _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_2__.SignUpComponent, _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_3__.SignInComponent, _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_4__.ForgotPasswordComponent, _password_validator_password_validator_component__WEBPACK_IMPORTED_MODULE_6__.PasswordValidatorComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _authentication_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthenticationRoutingModule, _shared_angular_material_module__WEBPACK_IMPORTED_MODULE_5__.AngularMaterialModule, _angular_magic_ngx_gp_autocomplete__WEBPACK_IMPORTED_MODULE_10__.NgxGpAutocompleteModule]
  });
})();

/***/ }),

/***/ 2920:
/*!**************************************************************************************!*\
  !*** ./src/app/features/authentication/forgot-password/forgot-password.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForgotPasswordComponent: () => (/* binding */ ForgotPasswordComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/helpers/index.actions */ 5626);
/* harmony import */ var src_app_core_helpers_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/helpers/constants */ 9487);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8849);









function ForgotPasswordComponent_p_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Enter a valid email address. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
const _c0 = function (a0, a1) {
  return {
    "g-primary-button": a0,
    "g-disabled-button": a1
  };
};
class ForgotPasswordComponent {
  constructor(router, store) {
    this.router = router;
    this.store = store;
    this.emailInput = '';
    this.emailPattern = src_app_core_helpers_constants__WEBPACK_IMPORTED_MODULE_1__.emailRegex;
  }
  ngOnInit() {}
  handleForgotPassword() {
    this.store.dispatch(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_0__.authActions.ReqPasswordReset({
      email: this.emailInput
    }));
    this.router.navigate([src_app_core_helpers_constants__WEBPACK_IMPORTED_MODULE_1__.SIGNIN_ROUTE]);
  }
  static #_ = this.ɵfac = function ForgotPasswordComponent_Factory(t) {
    return new (t || ForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ForgotPasswordComponent,
    selectors: [["app-forgot-password"]],
    decls: 18,
    vars: 11,
    consts: [[1, "g-app-dimensions"], [1, "l-container"], [1, "l-content"], ["src", "../../../assets/icons/lock-icon.svg", "alt", "", 1, "l-icon", "mt-5"], [1, "g-text-h1-dark", "mt-4"], [1, "g-text-p-dark", "mt-4"], [1, "mt-5", "w-100"], ["forgotPasswordForm", "ngForm"], [1, "g-text-input-container"], ["alt", "", 1, "g-input-text-icon", 3, "src"], ["type", "email", "placeholder", "Your Email", "name", "email", "required", "", 1, "g-input-text", 3, "ngModel", "pattern", "ngModelChange"], ["email", "ngModel"], ["class", "g-input-validation-text-error pt-1 text-left", 4, "ngIf"], [1, "g-primary-button", "mt-5", 3, "ngClass", "disabled", "click"], [1, "g-input-validation-text-error", "pt-1", "text-left"]],
    template: function ForgotPasswordComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Forgot Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Enter your email address below and we will send you further instructions to reset your password. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6)(9, "form", null, 7)(11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ForgotPasswordComponent_Template_input_ngModelChange_13_listener($event) {
          return ctx.emailInput = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, ForgotPasswordComponent_p_15_Template, 2, 0, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ForgotPasswordComponent_Template_button_click_16_listener() {
          return ctx.handleForgotPassword();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " Send Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](10);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("l-validation-error", _r1.touched && !_r0.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", _r1.touched && !_r0.valid ? "../../../assets/icons/mail-red-icon.svg" : "../../../assets/icons/mail-icon.svg", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.emailInput)("pattern", ctx.emailPattern);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r1.touched && !_r0.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](8, _c0, _r0.valid, _r0.invalid))("disabled", _r0.invalid);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm],
    styles: [".l-container[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  padding: 16px;\n  overflow: auto;\n}\n\n.l-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column;\n  align-items: center;\n}\n\n.l-icon[_ngcontent-%COMP%] {\n  width: 32px;\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.l-validation-error[_ngcontent-%COMP%] {\n  border: solid 1px #b1150a !important;\n}\n.l-validation-error[_ngcontent-%COMP%]   .g-input-text[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #b1150a;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvYXV0aGVudGljYXRpb24vZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQURKOztBQUlBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBREo7O0FBSUE7RUFDSSxXQUFBO0FBREo7O0FBSUE7RUFDSSxhQUFBO0FBREo7O0FBSUE7RUFDSSxvQ0FBQTtBQURKO0FBRUk7RUFDSSxjQ3FCUTtBRHJCaEIiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzcmMvdmFyaWFibGVzLnNjc3MnO1xyXG5cclxuLmwtY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4ubC1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmwtaWNvbiB7XHJcbiAgICB3aWR0aDogMzJweDtcclxufVxyXG5cclxuaW5wdXQ6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLmwtdmFsaWRhdGlvbi1lcnJvciB7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAkZXJyb3ItbWVzc2FnZSAhaW1wb3J0YW50O1xyXG4gICAgLmctaW5wdXQtdGV4dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICAgICAgY29sb3I6ICRlcnJvci1tZXNzYWdlO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIFRleHRcclxuJGFwcC1mb250OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiRhcHAtaW5wdXQtZm9udDogJ011bGlzaCcsIHNhbnMtc2VyaWY7XHJcbiRhcHAtZm9udC1ibGFjazogIzM0MzQzNDtcclxuJGFwcC10ZXh0LWdyZXk6ICM3MDcwNzA7XHJcbiRhcHAtZm9udC1pbnB1dC1wbGFjZWhvbGRlcjogcmdiYSgzMCwgNDgsIDM3LCAwLjU2KTtcclxuJGFwcC1mb3JtLWluZm8tY29sb3I6ICNhZmFmYWY7XHJcblxyXG4vLyBDb2xvcnNcclxuJGFwcC1iZy1jb2xvcjogI2Y5ZjlmYztcclxuJGFwcC1idXlpbmctcmVkOiAjZTc2ZjUxO1xyXG4kYXBwLXNlbGxpbmctZ3JlZW46ICM3ZmE5OTU7XHJcbiRhcHAtaW5wdXQtYmctY29sb3I6ICNlNmU2ZTY7XHJcbiRhcHAtYm90dG9tLW5hdi1pdGVtLWJnOiAjZTVlZmU5O1xyXG4kYXBwLXRhYnMtbWFya2V0cGxhY2UtZ3JlZW46ICMyODVkNjA7XHJcbiRhcHAtdGFicy1uZWdvdGlhdGlvbnMtYmx1ZTogIzRmOWViZDtcclxuJGFwcC1ub3RpZmljYXRpb24tcmVkOiAjYTUzYTRhO1xyXG5cclxuLy8gR3JhZGllbnRzXHJcbiRhcHAtc2VsbGluZy1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgIzk4YjRhNywgIzRhNmU1ZSk7XHJcbiRhcHAtYnV5aW5nLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjZGY4YTc1LCAjYTI1MzNmKTtcclxuJGFwcC1zZWxsaW5nLWNhcmQtZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICM4NWFlOWIsICM3MzllOGEpO1xyXG4kYXBwLWJ1eWluZy1jYXJkLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAkYXBwLWJ1eWluZy1yZWQsICNjNzVkNDMpO1xyXG5cclxuLy8gQnV0dG9uc1xyXG4kYXBwLXByaW1hcnktYnV0dG9uLWJnLWNvbG9yOiAjMzFhMDVmO1xyXG4kYXBwLXNlY29uZGFyeS1idXR0b24tYmctY29sb3I6ICNlNWU1ZTU7XHJcbiRhcHAtZGVsZXRlLWJ1dHRvbi1yZWQ6ICNkMzQ1NWI7XHJcblxyXG4vLyBPdGhlclxyXG4kYXBwLWJvcmRlci1yYWRpdXM6IDhweDtcclxuJGFwcC1ib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjA4KSAhaW1wb3J0YW50O1xyXG5cclxuLy8gI3JlZ2lvbiBNYXRjaCBFeGNoYW5nZVxyXG5cclxuLy8gI3JlZ2lvbiBDb2xvcnNcclxuXHJcbiRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4kYmFja2dyb3VuZC1jb2xvci1ncmV5OiAjZjVmNWY1O1xyXG4kdGV4dC1kYXJrOiAjNDA0MDQwO1xyXG4kdGV4dC1wbGFjZWhvbGRlcjogIzhjOGM4YztcclxuJHByaW1hcnktY29sb3I6ICM0MDdlZjg7XHJcbiRzZWNvbmRhcnktY29sb3I6ICNlNWVkZmQ7XHJcbiRtZWRpdW0tYmx1ZTogIzhkOWVjNTtcclxuJHByaW1hcnktZ3JlZW46ICMxY2FmN2U7XHJcbiRzZWNvbmRhcnktZ3JlZW46ICNlN2Y3ZjA7XHJcbiRwcmltYXJ5LXJlZDogI2QyMzAzZDtcclxuJHNlY29uZGFyeS1yZWQ6ICNmN2U4ZTc7XHJcbiRpbnB1dC1ib3JkZXI6ICNlMmU4ZjA7XHJcbiRlcnJvci1tZXNzYWdlOiAjYjExNTBhO1xyXG4kZGlzYWJsZWQtY29sb3I6ICNjYmNiY2I7XHJcblxyXG4vLyAjZW5kcmVnaW9uXHJcblxyXG4vLyAjcmVnaW9uIFRleHRcclxuXHJcbiR0ZXh0LWZvbnQ6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuJGZvbnQtd2VpZ2h0LWJvbGQ6IDcwMDtcclxuJGZvbnQtd2VpZ2h0LXNlbWktYm9sZDogNjAwO1xyXG4kZm9udC13ZWlnaHQtcmVndWxhcjogNTAwO1xyXG4kZm9udC13ZWlnaHQtbGlnaHQ6IDQwMDtcclxuXHJcbi8vICNlbmRyZWdpb25cclxuXHJcbi8vICNyZWdpb24gQnV0dG9uc1xyXG5cclxuJGJ1dHRvbi1mb250LXdlaWdodDogNjAwO1xyXG5cclxuLy8gI2VuZHJlZ2lvblxyXG5cclxuLy8gI3JlZ2lvbiBPdGhlclxyXG5cclxuJGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHJcbi8vICNlbmRyZWdpb25cclxuXHJcbi8vICNlbmRyZWdpb25cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8218:
/*!********************************************************************************************!*\
  !*** ./src/app/features/authentication/password-validator/password-validator.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PasswordValidatorComponent: () => (/* binding */ PasswordValidatorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_core_helpers_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/helpers/constants */ 9487);



class PasswordValidatorComponent {
  get passwordInput() {
    return this._passwordInput;
  }
  set passwordInput(value) {
    this._passwordInput = value;
    this.passwordValidLength = this._passwordInput.length > 7;
    this.passwordHasSymbol = this.specialCharPattern.test(this._passwordInput);
    this.passwordHasNumber = this.numberPattern.test(this._passwordInput);
    this.passwordHasLetter = this.letterPattern.test(this._passwordInput);
    this.$passwordValidity.emit(this.passwordValidLength && this.passwordHasSymbol && this.passwordHasNumber && this.passwordHasLetter);
  }
  constructor() {
    this._passwordInput = '';
    this.$passwordValidity = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.passwordValidLength = false;
    this.passwordHasLetter = false;
    this.passwordHasNumber = false;
    this.passwordHasSymbol = false;
    this.specialCharPattern = src_app_core_helpers_constants__WEBPACK_IMPORTED_MODULE_0__.specialCharacterRegex;
    this.numberPattern = src_app_core_helpers_constants__WEBPACK_IMPORTED_MODULE_0__.numberRegex;
    this.letterPattern = src_app_core_helpers_constants__WEBPACK_IMPORTED_MODULE_0__.letterRegex;
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function PasswordValidatorComponent_Factory(t) {
    return new (t || PasswordValidatorComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: PasswordValidatorComponent,
    selectors: [["app-password-validator"]],
    inputs: {
      passwordInput: "passwordInput"
    },
    outputs: {
      $passwordValidity: "$passwordValidity"
    },
    decls: 17,
    vars: 4,
    consts: [[1, "l-container"], [1, "l-validation-container"], ["alt", "", 1, "l-validation-icon", 3, "src"], [1, "g-text-p-small-dark", "pt-1", "text-left"]],
    template: function PasswordValidatorComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "8 characters");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "1 letter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "1 number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "1 symbol");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.passwordValidLength ? "../../../assets/icons/green-tick.svg" : "../../../assets/icons/grey-tick.svg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.passwordHasLetter ? "../../../assets/icons/green-tick.svg" : "../../../assets/icons/grey-tick.svg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.passwordHasNumber ? "../../../assets/icons/green-tick.svg" : "../../../assets/icons/grey-tick.svg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.passwordHasSymbol ? "../../../assets/icons/green-tick.svg" : "../../../assets/icons/grey-tick.svg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      }
    },
    styles: [".l-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.l-validation-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-right: 8px;\n}\n\n.l-validation-icon[_ngcontent-%COMP%] {\n  width: 13px;\n  height: 13px;\n  margin-top: 3px;\n  margin-right: 3px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvYXV0aGVudGljYXRpb24vcGFzc3dvcmQtdmFsaWRhdG9yL3Bhc3N3b3JkLXZhbGlkYXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIi5sLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4ubC12YWxpZGF0aW9uLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG59XHJcblxyXG4ubC12YWxpZGF0aW9uLWljb24ge1xyXG4gICAgd2lkdGg6IDEzcHg7XHJcbiAgICBoZWlnaHQ6IDEzcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDNweDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 6914:
/*!**********************************************************************!*\
  !*** ./src/app/features/authentication/sign-in/sign-in.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignInComponent: () => (/* binding */ SignInComponent)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 8626);
/* harmony import */ var src_app_core_helpers_snackbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/helpers/snackbar */ 2179);
/* harmony import */ var src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/helpers/index.actions */ 5626);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/effects */ 1575);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 1527);
/* harmony import */ var src_app_core_helpers_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/helpers/constants */ 9487);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/compat/auth */ 7509);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ 9409);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/legacy-button */ 8654);




















function SignInComponent_p_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Enter a valid email address.... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function SignInComponent_img_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SignInComponent_img_26_Template_img_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r6.togglePassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function SignInComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SignInComponent_ng_template_27_Template_img_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r8.togglePassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
const _c0 = function (a0, a1) {
  return {
    "g-primary-button": a0,
    "g-disabled-button": a1
  };
};
class SignInComponent {
  constructor(store, actions$, afAuth, snackbar, route, router, location) {
    this.store = store;
    this.actions$ = actions$;
    this.afAuth = afAuth;
    this.snackbar = snackbar;
    this.route = route;
    this.router = router;
    this.location = location;
    this.passwordIsHidden = false;
    this.routeUserBack = false;
    this.emailPattern = src_app_core_helpers_constants__WEBPACK_IMPORTED_MODULE_3__.emailRegex;
    this.emailInput = '';
    this.password = '';
  }
  ngOnInit() {
    this.route.queryParams.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1)).subscribe(({
      fromScoutSearch
    }) => {
      if (fromScoutSearch) {
        this.routeUserBack = true;
      }
    });
  }
  togglePassword() {
    this.passwordIsHidden = !this.passwordIsHidden;
  }
  handleLogin(form) {
    if (form.valid) {
      const payload = {
        email: this.emailInput,
        password: this.password,
        executedTime: Date.now()
      };
      this.store.dispatch(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.authActions.ReqEmailLogin(payload));
      this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.ofType)(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.authActions.EmailLoginSuccess), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1)).subscribe(() => {
        this.redirectUserHelper();
      });
    }
  }
  handleRouteToPasswordManagement() {
    this.router.navigate([src_app_core_helpers_constants__WEBPACK_IMPORTED_MODULE_3__.FORGOT_PASSWORD_ROUTE]);
  }
  handleRouteToSignUp() {
    this.router.navigate([src_app_core_helpers_constants__WEBPACK_IMPORTED_MODULE_3__.SIGNUP_ROUTE]);
  }
  handleRouteToDocumentViewer(name) {
    this.router.navigate([`${src_app_core_helpers_constants__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT_VIEWER_ROUTE}/${name}`]);
  }
  googleLogin() {
    this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.ofType)(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.authActions.ProviderSignInSuccess), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1)).subscribe(() => {
      this.redirectUserHelper();
    });
    try {
      const platform = _capacitor_core__WEBPACK_IMPORTED_MODULE_0__.Capacitor.getPlatform();
      this.store.dispatch(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.authActions.ReqProviderSignIn({
        executedTime: Date.now(),
        platform: platform
      }));
    } catch (error) {
      this.snackbar.open(error.message, 'CLOSE', src_app_core_helpers_snackbar__WEBPACK_IMPORTED_MODULE_1__.errorConfig);
    }
  }
  redirectUserHelper() {
    this.routeUserBack ? this.location.back() : this.router.navigate([src_app_core_helpers_constants__WEBPACK_IMPORTED_MODULE_3__.HOME_ROUTE]);
  }
  static #_ = this.ɵfac = function SignInComponent_Factory(t) {
    return new (t || SignInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_8__.AngularFireAuth), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.Location));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: SignInComponent,
    selectors: [["app-sign-in"]],
    decls: 48,
    vars: 15,
    consts: [[1, "l-container"], [1, "l-centered-content"], ["src", "../../../assets/images/MX-logo.png", "alt", "Match Exchange", 1, "g-clickable", "l-logo"], [1, "g-text-h1-dark", "pt-4"], [1, "g-text-p-dark", "pt-3"], [1, "pt-3", "l-form-container"], [1, "g-google-button", 3, "click"], ["src", "../../../assets/icons/google-icon-dark.svg", 1, "mr-2"], [1, "g-text-p-dark"], [1, "d-flex", "justify-content-center", "my-4"], [1, "l-or"], ["loginForm", "ngForm"], [1, "g-text-input-container"], ["alt", "", 1, "g-input-text-icon", 3, "src"], ["type", "email", "placeholder", "Your Email", "name", "email", "required", "", 1, "g-input-text", 3, "ngModel", "pattern", "ngModelChange"], ["email", "ngModel"], ["class", "g-input-validation-text-error pt-1 text-left", 4, "ngIf"], [1, "g-text-input-container", "mt-3"], ["src", "../../../assets/icons/lock-icon.svg", "alt", "", 1, "g-input-text-icon"], ["placeholder", "******", "name", "password", "required", "", 1, "g-input-text", "pr-5", 3, "type", "ngModel", "ngModelChange", "keydown.enter"], ["class", "l-password-visible-icon", "src", "../../../assets/icons/eye-icon.svg", "alt", "View", 3, "click", 4, "ngIf", "ngIfElse"], ["showPassword", ""], [1, "g-text-p-dark", "g-text-blue", "text-right", "pt-2"], [3, "click"], ["mat-flat-button", "", 1, "g-primary-button", "mt-5", 3, "ngClass", "disabled", "click"], ["mat-flat-button", "", 1, "g-secondary-button", "mt-2", 3, "click"], [1, "g-text-p-small-dark", "pt-5", "l-terms"], [1, "g-text-blue"], ["target", "_blank", "id", "TermsOfServiceLink", 1, "terms", "clickable", 3, "click"], ["id", "PrivacyPolicyLink", "target", "_blank", 1, "terms", "clickable", 3, "click"], ["id", "WebsiteTermsofUseLink", "target", "_blank", 1, "terms", "clickable", 3, "click"], [1, "g-input-validation-text-error", "pt-1", "text-left"], ["src", "../../../assets/icons/eye-icon.svg", "alt", "View", 1, "l-password-visible-icon", 3, "click"], ["src", "../../../assets/icons/eye-closed-icon.svg", "alt", "Hide", 1, "l-password-visible-icon", 3, "click"]],
    template: function SignInComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Welcome Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Sign in to Match Exchange below");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5)(8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SignInComponent_Template_button_click_8_listener() {
          return ctx.googleLogin();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Sign in with Google");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 9)(13, "h5", 10)(14, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, " Or Sign in with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "form", null, 11)(18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function SignInComponent_Template_input_ngModelChange_20_listener($event) {
          return ctx.emailInput = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, SignInComponent_p_22_Template, 2, 0, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function SignInComponent_Template_input_ngModelChange_25_listener($event) {
          return ctx.password = $event;
        })("keydown.enter", function SignInComponent_Template_input_keydown_enter_25_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](17);
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.handleLogin(_r0));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, SignInComponent_img_26_Template, 1, 0, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, SignInComponent_ng_template_27_Template, 1, 0, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "p", 22)(30, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SignInComponent_Template_span_click_30_listener() {
          return ctx.handleRouteToPasswordManagement();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "Forgot Password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SignInComponent_Template_button_click_32_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](17);
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.handleLogin(_r0));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, " Sign In ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SignInComponent_Template_button_click_34_listener() {
          return ctx.handleRouteToSignUp();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, " Create Account ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, " By using our site, you agree to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "span", 27)(39, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SignInComponent_Template_a_click_39_listener() {
          return ctx.handleRouteToDocumentViewer("ToS.pdf");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, " Terms Of Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SignInComponent_Template_a_click_42_listener() {
          return ctx.handleRouteToDocumentViewer("privacyPolicy.pdf");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, " Privacy Policy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "span", 27)(46, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SignInComponent_Template_a_click_46_listener() {
          return ctx.handleRouteToDocumentViewer("Skudu_Acceptable.pdf");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, " Website Terms of Use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](17);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](21);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("l-validation-error", _r1.touched && !_r1.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", _r1.touched && !_r1.valid ? "../../../assets/icons/mail-red-icon.svg" : "../../../assets/icons/mail-icon.svg", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.emailInput)("pattern", ctx.emailPattern);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r1.touched && !_r1.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("type", ctx.passwordIsHidden ? "text" : "password")("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.passwordIsHidden)("ngIfElse", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](12, _c0, _r0.valid, _r0.invalid))("disabled", _r0.invalid);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgForm, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_13__.MatLegacyButton],
    styles: [".l-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.l-centered-content[_ngcontent-%COMP%] {\n  padding-bottom: 16px;\n  padding-top: 16px;\n  overflow: auto;\n}\n\n.l-logo[_ngcontent-%COMP%] {\n  display: block;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n.l-form-container[_ngcontent-%COMP%] {\n  margin-left: 16px;\n  margin-right: 16px;\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.l-or[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  border-bottom: 1px solid #e2e8f0;\n  line-height: 0.1em;\n  margin: 10px 0 20px;\n}\n.l-or[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 0 16px;\n}\n\n.l-terms[_ngcontent-%COMP%] {\n  line-height: 24px;\n}\n\n.l-password-visible-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  width: 20px;\n}\n\n.l-validation-error[_ngcontent-%COMP%] {\n  border: solid 1px #b1150a !important;\n}\n.l-validation-error[_ngcontent-%COMP%]   .g-input-text[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #b1150a;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvYXV0aGVudGljYXRpb24vc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQURKOztBQUlBO0VBQ0ksb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFESjs7QUFJQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBREo7O0FBSUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FBREo7O0FBSUE7RUFDSSxhQUFBO0FBREo7O0FBSUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFESjtBQUVJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FBQVI7O0FBSUE7RUFDSSxpQkFBQTtBQURKOztBQUlBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFESjs7QUFJQTtFQUNJLG9DQUFBO0FBREo7QUFFSTtFQUNJLGNDUlE7QURRaEIiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi92YXJpYWJsZXMuc2Nzcyc7XHJcblxyXG4ubC1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ubC1jZW50ZXJlZC1jb250ZW50IHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xyXG4gICAgcGFkZGluZy10b3A6IDE2cHg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLmwtbG9nbyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcblxyXG4ubC1mb3JtLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTZweDtcclxufVxyXG5cclxuaW5wdXQ6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLmwtb3Ige1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGlucHV0LWJvcmRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAwLjFlbTtcclxuICAgIG1hcmdpbjogMTBweCAwIDIwcHg7XHJcbiAgICAmIHNwYW4ge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgcGFkZGluZzogMCAxNnB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ubC10ZXJtcyB7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxufVxyXG5cclxuLmwtcGFzc3dvcmQtdmlzaWJsZS1pY29uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTZweDtcclxuICAgIHJpZ2h0OiAxNnB4O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbn1cclxuXHJcbi5sLXZhbGlkYXRpb24tZXJyb3Ige1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggJGVycm9yLW1lc3NhZ2UgIWltcG9ydGFudDtcclxuICAgIC5nLWlucHV0LXRleHQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgICAgIGNvbG9yOiAkZXJyb3ItbWVzc2FnZTtcclxuICAgIH1cclxufVxyXG4iLCIvLyBUZXh0XHJcbiRhcHAtZm9udDogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4kYXBwLWlucHV0LWZvbnQ6ICdNdWxpc2gnLCBzYW5zLXNlcmlmO1xyXG4kYXBwLWZvbnQtYmxhY2s6ICMzNDM0MzQ7XHJcbiRhcHAtdGV4dC1ncmV5OiAjNzA3MDcwO1xyXG4kYXBwLWZvbnQtaW5wdXQtcGxhY2Vob2xkZXI6IHJnYmEoMzAsIDQ4LCAzNywgMC41Nik7XHJcbiRhcHAtZm9ybS1pbmZvLWNvbG9yOiAjYWZhZmFmO1xyXG5cclxuLy8gQ29sb3JzXHJcbiRhcHAtYmctY29sb3I6ICNmOWY5ZmM7XHJcbiRhcHAtYnV5aW5nLXJlZDogI2U3NmY1MTtcclxuJGFwcC1zZWxsaW5nLWdyZWVuOiAjN2ZhOTk1O1xyXG4kYXBwLWlucHV0LWJnLWNvbG9yOiAjZTZlNmU2O1xyXG4kYXBwLWJvdHRvbS1uYXYtaXRlbS1iZzogI2U1ZWZlOTtcclxuJGFwcC10YWJzLW1hcmtldHBsYWNlLWdyZWVuOiAjMjg1ZDYwO1xyXG4kYXBwLXRhYnMtbmVnb3RpYXRpb25zLWJsdWU6ICM0ZjllYmQ7XHJcbiRhcHAtbm90aWZpY2F0aW9uLXJlZDogI2E1M2E0YTtcclxuXHJcbi8vIEdyYWRpZW50c1xyXG4kYXBwLXNlbGxpbmctZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICM5OGI0YTcsICM0YTZlNWUpO1xyXG4kYXBwLWJ1eWluZy1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgI2RmOGE3NSwgI2EyNTMzZik7XHJcbiRhcHAtc2VsbGluZy1jYXJkLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjODVhZTliLCAjNzM5ZThhKTtcclxuJGFwcC1idXlpbmctY2FyZC1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgJGFwcC1idXlpbmctcmVkLCAjYzc1ZDQzKTtcclxuXHJcbi8vIEJ1dHRvbnNcclxuJGFwcC1wcmltYXJ5LWJ1dHRvbi1iZy1jb2xvcjogIzMxYTA1ZjtcclxuJGFwcC1zZWNvbmRhcnktYnV0dG9uLWJnLWNvbG9yOiAjZTVlNWU1O1xyXG4kYXBwLWRlbGV0ZS1idXR0b24tcmVkOiAjZDM0NTViO1xyXG5cclxuLy8gT3RoZXJcclxuJGFwcC1ib3JkZXItcmFkaXVzOiA4cHg7XHJcbiRhcHAtYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wOCkgIWltcG9ydGFudDtcclxuXHJcbi8vICNyZWdpb24gTWF0Y2ggRXhjaGFuZ2VcclxuXHJcbi8vICNyZWdpb24gQ29sb3JzXHJcblxyXG4kYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuJGJhY2tncm91bmQtY29sb3ItZ3JleTogI2Y1ZjVmNTtcclxuJHRleHQtZGFyazogIzQwNDA0MDtcclxuJHRleHQtcGxhY2Vob2xkZXI6ICM4YzhjOGM7XHJcbiRwcmltYXJ5LWNvbG9yOiAjNDA3ZWY4O1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjZTVlZGZkO1xyXG4kbWVkaXVtLWJsdWU6ICM4ZDllYzU7XHJcbiRwcmltYXJ5LWdyZWVuOiAjMWNhZjdlO1xyXG4kc2Vjb25kYXJ5LWdyZWVuOiAjZTdmN2YwO1xyXG4kcHJpbWFyeS1yZWQ6ICNkMjMwM2Q7XHJcbiRzZWNvbmRhcnktcmVkOiAjZjdlOGU3O1xyXG4kaW5wdXQtYm9yZGVyOiAjZTJlOGYwO1xyXG4kZXJyb3ItbWVzc2FnZTogI2IxMTUwYTtcclxuJGRpc2FibGVkLWNvbG9yOiAjY2JjYmNiO1xyXG5cclxuLy8gI2VuZHJlZ2lvblxyXG5cclxuLy8gI3JlZ2lvbiBUZXh0XHJcblxyXG4kdGV4dC1mb250OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiRmb250LXdlaWdodC1ib2xkOiA3MDA7XHJcbiRmb250LXdlaWdodC1zZW1pLWJvbGQ6IDYwMDtcclxuJGZvbnQtd2VpZ2h0LXJlZ3VsYXI6IDUwMDtcclxuJGZvbnQtd2VpZ2h0LWxpZ2h0OiA0MDA7XHJcblxyXG4vLyAjZW5kcmVnaW9uXHJcblxyXG4vLyAjcmVnaW9uIEJ1dHRvbnNcclxuXHJcbiRidXR0b24tZm9udC13ZWlnaHQ6IDYwMDtcclxuXHJcbi8vICNlbmRyZWdpb25cclxuXHJcbi8vICNyZWdpb24gT3RoZXJcclxuXHJcbiRib3JkZXItcmFkaXVzOiA0cHg7XHJcblxyXG4vLyAjZW5kcmVnaW9uXHJcblxyXG4vLyAjZW5kcmVnaW9uXHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 5592:
/*!**********************************************************************!*\
  !*** ./src/app/features/authentication/sign-up/sign-up.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignUpComponent: () => (/* binding */ SignUpComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_helpers_snackbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/helpers/snackbar */ 2179);
/* harmony import */ var src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/helpers/index.actions */ 5626);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ 8626);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/effects */ 1575);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 1527);
/* harmony import */ var src_app_core_helpers_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/helpers/constants */ 9487);
/* harmony import */ var _shared_components_grain_sa_modal_grain_sa_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/grain-sa-modal/grain-sa-modal.component */ 7068);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/compat/auth */ 7509);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/snack-bar */ 9409);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/legacy-dialog */ 1035);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/stepper */ 6272);
/* harmony import */ var _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/legacy-button */ 8654);
/* harmony import */ var _angular_magic_ngx_gp_autocomplete__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular-magic/ngx-gp-autocomplete */ 4711);
/* harmony import */ var _password_validator_password_validator_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../password-validator/password-validator.component */ 8218);


























function SignUpComponent_p_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function SignUpComponent_p_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function SignUpComponent_p_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Enter a valid email address. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function SignUpComponent_p_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Enter a valid phone number. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function SignUpComponent_p_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Required - please select from list. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function SignUpComponent_p_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Insert your nearest town and ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "select");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " the location from the drop-down list. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function SignUpComponent_p_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Enter a valid Grain SA ID. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function SignUpComponent_img_65_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "img", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SignUpComponent_img_65_Template_img_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r28);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r27.togglePassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function SignUpComponent_ng_template_66_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SignUpComponent_ng_template_66_Template_img_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r30);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r29.togglePassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function SignUpComponent_img_73_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "img", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SignUpComponent_img_73_Template_img_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r32);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r31.toggleConfirmPassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function SignUpComponent_ng_template_74_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SignUpComponent_ng_template_74_Template_img_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r34);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r33.toggleConfirmPassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function SignUpComponent_div_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Passwords do not match.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function SignUpComponent_div_79_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "p", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " By using our site, you agree to the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 53)(4, "a", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SignUpComponent_div_79_Template_a_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r36);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r35.handleRouteToDocumentViewer("ToS.pdf"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, " Terms Of Service");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "a", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SignUpComponent_div_79_Template_a_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r36);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r37.handleRouteToDocumentViewer("privacyPolicy.pdf"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, " Privacy Policy ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, " and ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "span", 53)(11, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SignUpComponent_div_79_Template_a_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r36);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r38.handleRouteToDocumentViewer("Skudu_Acceptable.pdf"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, " Website Terms of Use ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
}
function SignUpComponent_ng_template_80_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Already have an account?");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SignUpComponent_ng_template_80_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r40);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r39.handleRouteToSignIn());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Sign In");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
const _c0 = function (a0, a1) {
  return {
    "g-primary-button": a0,
    "g-disabled-button": a1
  };
};
class SignUpComponent {
  constructor(router, store, actions$, afAuth, snackbar, location, dialog) {
    this.router = router;
    this.store = store;
    this.actions$ = actions$;
    this.afAuth = afAuth;
    this.snackbar = snackbar;
    this.location = location;
    this.dialog = dialog;
    this.newUser = {
      name: '',
      surname: '',
      email: '',
      phone: '',
      location: '',
      password: '',
      grainSAId: null
    };
    this.confirmPasswordInput = '';
    this.emailPattern = src_app_core_helpers_constants__WEBPACK_IMPORTED_MODULE_3__.emailRegex;
    this.routeUserBack = false;
    this.passwordIsHidden = false;
    this.confirmPasswordIsHidden = false;
    this.locationIsSelected = false;
    this.passwordIsValid = false;
    this.showLocationTip = false;
  }
  ngOnInit() {}
  handleRouteToSignIn() {
    this.router.navigate([src_app_core_helpers_constants__WEBPACK_IMPORTED_MODULE_3__.SIGNIN_ROUTE]);
  }
  handleAddressChange(address) {
    this.locationIsSelected = true;
    this.newUser.location = address.formatted_address;
  }
  handlePasswordValidity(isValid) {
    this.passwordIsValid = isValid === true;
  }
  handleLocationInfo() {
    this.showLocationTip = true;
  }
  handleSignUp() {
    this.store.dispatch(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_1__.authActions.ReqEmailRegister({
      email: this.newUser.email,
      password: this.newUser.password,
      signUpData: this.newUser,
      executedTime: Date.now()
    }));
    this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_7__.ofType)(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_1__.authActions.EmailRegisterSuccess), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.take)(1)).subscribe(() => {
      this.redirectUserHelper();
    });
  }
  handleGrainSAModal() {
    this.dialog.open(_shared_components_grain_sa_modal_grain_sa_modal_component__WEBPACK_IMPORTED_MODULE_4__.GrainSaModalComponent, {
      panelClass: 'g-modal-container',
      autoFocus: false,
      data: {
        showSubscription: false
      }
    });
  }
  togglePassword() {
    this.passwordIsHidden = !this.passwordIsHidden;
  }
  toggleConfirmPassword() {
    this.confirmPasswordIsHidden = !this.confirmPasswordIsHidden;
  }
  googleLogin() {
    this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_7__.ofType)(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_1__.authActions.ProviderSignInSuccess), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.take)(1)).subscribe(() => {
      this.redirectUserHelper();
    });
    try {
      const platform = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__.Capacitor.getPlatform();
      this.store.dispatch(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_1__.authActions.ReqProviderSignIn({
        executedTime: Date.now(),
        platform: platform
      }));
    } catch (error) {
      this.snackbar.open(error.message, 'CLOSE', src_app_core_helpers_snackbar__WEBPACK_IMPORTED_MODULE_0__.errorConfig);
    }
  }
  redirectUserHelper() {
    this.routeUserBack ? this.location.back() : this.router.navigate([src_app_core_helpers_constants__WEBPACK_IMPORTED_MODULE_3__.HOME_ROUTE]);
  }
  handleRouteToDocumentViewer(name) {
    this.router.navigate([`${src_app_core_helpers_constants__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT_VIEWER_ROUTE}/${name}`]);
  }
  static #_ = this.ɵfac = function SignUpComponent_Factory(t) {
    return new (t || SignUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_10__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_7__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_11__.AngularFireAuth), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_13__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_14__.MatLegacyDialog));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: SignUpComponent,
    selectors: [["app-sign-up"]],
    decls: 82,
    vars: 61,
    consts: [[1, "l-container"], [1, "l-centered-content"], ["src", "../../../assets/images/MX-logo.png", "alt", "Match Exchange", 1, "g-clickable", "l-logo"], [1, "g-text-h1-dark", "pt-4"], [1, "g-text-p-dark", "pt-3"], [1, "pt-3", "l-form-container"], [1, "g-google-button", 3, "click"], ["src", "../../../assets/icons/google-icon-dark.svg", 1, "mr-2"], [1, "g-text-p-dark"], [1, "d-flex", "justify-content-center", "my-4"], [1, "l-or"], [1, "g-stepper-sign-up"], ["stepper", ""], [1, "g-text-input-container"], ["alt", "", 1, "g-input-text-icon", 3, "src"], ["type", "text", "placeholder", "Name", "name", "name", "maxlength", "30", "required", "", 1, "g-input-text", 3, "ngModel", "ngModelChange"], ["name", "ngModel"], ["class", "g-input-validation-text-error pt-1 text-left", 4, "ngIf"], [1, "g-text-input-container", "mt-3"], ["type", "text", "placeholder", "Surname", "name", "surname", "maxlength", "30", "required", "", 1, "g-input-text", 3, "ngModel", "ngModelChange"], ["surname", "ngModel"], ["type", "email", "placeholder", "Email", "name", "email", "required", "", 1, "g-input-text", 3, "ngModel", "pattern", "ngModelChange"], ["email", "ngModel"], ["mat-flat-button", "", "matStepperNext", "", 1, "mt-3", 3, "ngClass", "disabled"], ["type", "text", "placeholder", "Cell", "name", "phone", "pattern", "^(?:(\\+264\\d{1,2}\\d{6}|\\d{6,9})|\\+27\\d{1,2}\\d{7}|\\d{9,10})$", "required", "", 1, "g-input-text", 3, "ngModel", "ngModelChange"], ["phone", "ngModel"], ["type", "text", "placeholder", "Nearest Town", "name", "location", "required", "", "ngx-gp-autocomplete", "", 1, "g-input-text", 3, "ngModel", "ngModelChange", "onAddressChange", "click"], ["location", "ngModel", "placesRef", "ngx-places"], ["class", "g-text-p-small-dark pt-1 text-left", 4, "ngIf"], ["src", "../../../assets/icons/grainSA-icon.svg", "alt", "Grain SA", 1, "g-input-text-icon"], ["type", "text", "placeholder", "Grain SA number (Optional)", "name", "grainSA", "pattern", "GSA[0-9]{4}$", 1, "g-input-text", "l-overflow", 3, "ngModel", "ngModelChange"], ["grainSA", "ngModel"], ["src", "../../../assets/icons/info-icon-blue.svg", "alt", "Grain SA Info view", 1, "l-additional-icon", 3, "click"], [1, "g-text-p-small-dark", "pt-1", "text-left", "l-optional"], ["src", "../../../assets/icons/lock-icon.svg", "alt", "", 1, "g-input-text-icon"], ["placeholder", "******", "name", "password", "required", "", 1, "g-input-text", "pr-5", 3, "type", "ngModel", "ngModelChange"], ["password", "ngModel"], ["class", "l-additional-icon", "src", "../../../assets/icons/eye-icon.svg", "alt", "View", 3, "click", 4, "ngIf", "ngIfElse"], ["showPassword", ""], [1, "l-validation-container", 3, "passwordInput", "$passwordValidity"], ["src", "../../../assets/icons/lock-icon.svg", "alt", "", 1, "g-input-text-icon", 3, "src"], ["placeholder", "******", "name", "confirmPassword", "required", "", 1, "g-input-text", "pr-5", 3, "type", "ngModel", "ngModelChange"], ["confirmPassword", "ngModel"], ["showConfirmPassword", ""], [4, "ngIf"], ["mat-flat-button", "", 1, "g-primary-button", "mt-3", 3, "ngClass", "disabled", "click"], [4, "ngIf", "ngIfElse"], ["showSignIn", ""], [1, "g-input-validation-text-error", "pt-1", "text-left"], [1, "g-text-p-small-dark", "pt-1", "text-left"], ["src", "../../../assets/icons/eye-icon.svg", "alt", "View", 1, "l-additional-icon", 3, "click"], ["src", "../../../assets/icons/eye-closed-icon.svg", "alt", "Hide", 1, "l-additional-icon", 3, "click"], [1, "g-text-p-small-dark", "pt-3", "l-terms"], [1, "g-text-blue"], ["target", "_blank", "id", "TermsOfServiceLink", 1, "terms", "clickable", 3, "click"], ["id", "PrivacyPolicyLink", "target", "_blank", 1, "terms", "clickable", 3, "click"], ["id", "WebsiteTermsofUseLink", "target", "_blank", 1, "terms", "clickable", 3, "click"], [1, "g-text-p-small-dark", "mt-3"], ["mat-flat-button", "", 1, "g-secondary-button", "mt-2", 3, "click"]],
    template: function SignUpComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Welcome");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Sign up to Match Exchange below");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 5)(8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SignUpComponent_Template_button_click_8_listener() {
          return ctx.googleLogin();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Sign up with Google");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 9)(13, "h5", 10)(14, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, " Or Sign up with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "form")(17, "mat-horizontal-stepper", 11, 12)(19, "mat-step")(20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](21, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "input", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function SignUpComponent_Template_input_ngModelChange_22_listener($event) {
          return ctx.newUser.name = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, SignUpComponent_p_24_Template, 2, 0, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](26, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "input", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function SignUpComponent_Template_input_ngModelChange_27_listener($event) {
          return ctx.newUser.surname = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](29, SignUpComponent_p_29_Template, 2, 0, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](31, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "input", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function SignUpComponent_Template_input_ngModelChange_32_listener($event) {
          return ctx.newUser.email = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](34, SignUpComponent_p_34_Template, 2, 0, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, " Next ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "mat-step")(38, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](39, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "input", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function SignUpComponent_Template_input_ngModelChange_40_listener($event) {
          return ctx.newUser.phone = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](42, SignUpComponent_p_42_Template, 2, 0, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](44, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "input", 26, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function SignUpComponent_Template_input_ngModelChange_45_listener($event) {
          return ctx.newUser.location = $event;
        })("onAddressChange", function SignUpComponent_Template_input_onAddressChange_45_listener($event) {
          return ctx.handleAddressChange($event);
        })("click", function SignUpComponent_Template_input_click_45_listener() {
          return ctx.handleLocationInfo();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](48, SignUpComponent_p_48_Template, 2, 0, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](49, SignUpComponent_p_49_Template, 5, 0, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](51, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "input", 30, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function SignUpComponent_Template_input_ngModelChange_52_listener($event) {
          return ctx.newUser.grainSAId = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SignUpComponent_Template_img_click_54_listener() {
          return ctx.handleGrainSAModal();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](56, "*Optional field");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](57, SignUpComponent_p_57_Template, 2, 0, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](59, " Next ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "mat-step")(61, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](62, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "input", 35, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function SignUpComponent_Template_input_ngModelChange_63_listener($event) {
          return ctx.newUser.password = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](65, SignUpComponent_img_65_Template, 1, 0, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](66, SignUpComponent_ng_template_66_Template, 1, 0, "ng-template", null, 38, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](68, "app-password-validator", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("$passwordValidity", function SignUpComponent_Template_app_password_validator__passwordValidity_68_listener($event) {
          return ctx.handlePasswordValidity($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](69, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](70, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](71, "input", 41, 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function SignUpComponent_Template_input_ngModelChange_71_listener($event) {
          return ctx.confirmPasswordInput = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](73, SignUpComponent_img_73_Template, 1, 0, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](74, SignUpComponent_ng_template_74_Template, 1, 0, "ng-template", null, 43, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](76, SignUpComponent_div_76_Template, 3, 0, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](77, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SignUpComponent_Template_button_click_77_listener() {
          return ctx.handleSignUp();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](78, " Sign Up ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](79, SignUpComponent_div_79_Template, 13, 0, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](80, SignUpComponent_ng_template_80_Template, 4, 0, "ng-template", null, 47, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](18);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](23);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](28);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](33);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](41);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](46);
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](53);
        const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](64);
        const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](67);
        const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](72);
        const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](75);
        const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](81);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("l-validation-error", _r1.touched && !_r1.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", _r1.touched && !_r1.valid ? "../../../assets/icons/user-red-icon.svg" : "../../../assets/icons/user-blue-icon.svg", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.newUser.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _r1.touched && !_r1.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("l-validation-error", _r3.touched && !_r3.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", _r3.touched && !_r3.valid ? "../../../assets/icons/user-red-icon.svg" : "../../../assets/icons/user-blue-icon.svg", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.newUser.surname);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _r3.touched && !_r3.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("l-validation-error", _r5.touched && !_r5.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", _r5.touched && !_r5.valid ? "../../../assets/icons/mail-red-icon.svg" : "../../../assets/icons/mail-icon.svg", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.newUser.email)("pattern", ctx.emailPattern);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _r5.touched && !_r5.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](52, _c0, _r1.valid && _r3.valid && _r5.valid, _r1.invalid || _r3.invalid || _r5.invalid))("disabled", _r1.invalid || _r3.invalid || _r5.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("l-validation-error", _r7.touched && !_r7.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", _r7.touched && !_r7.valid ? "../../../assets/icons/phone-red-icon.svg" : "../../../assets/icons/phone-blue-icon.svg", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.newUser.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _r7.touched && !_r7.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("l-validation-error", _r9.touched && !_r9.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", _r9.touched && !_r9.valid ? "../../../assets/icons/location-red-icon.svg" : "../../../assets/icons/location-blue-icon.svg", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.newUser.location);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _r9.touched && !_r9.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showLocationTip);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("l-validation-error", _r13.touched && !_r13.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.newUser.grainSAId);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _r13.touched && !_r13.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](55, _c0, _r7.valid && _r9.valid && _r13.valid, _r7.invalid || _r9.invalid || !ctx.locationIsSelected || _r13.invalid))("disabled", _r7.invalid || _r9.invalid || !ctx.locationIsSelected || _r13.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("type", ctx.passwordIsHidden ? "text" : "password")("ngModel", ctx.newUser.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.passwordIsHidden)("ngIfElse", _r17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("passwordInput", ctx.newUser.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("l-validation-error", _r15.value != _r19.value && _r19.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", _r15.value != _r19.value && _r19.touched ? "../../../assets/icons/lock-red-icon.svg" : "../../../assets/icons/lock-icon.svg", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("type", ctx.confirmPasswordIsHidden ? "text" : "password")("ngModel", ctx.confirmPasswordInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.confirmPasswordIsHidden)("ngIfElse", _r21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _r15.value != _r19.value && _r19.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](58, _c0, ctx.passwordIsValid && _r15.value == _r19.value, !ctx.passwordIsValid || _r15.value != _r19.value))("disabled", !ctx.passwordIsValid || _r15.value != _r19.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _r0.selectedIndex === 2)("ngIfElse", _r25);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgForm, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__.MatStep, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__.MatStepper, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__.MatStepperNext, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_17__.MatLegacyButton, _angular_magic_ngx_gp_autocomplete__WEBPACK_IMPORTED_MODULE_18__.NgxGpAutocompleteDirective, _password_validator_password_validator_component__WEBPACK_IMPORTED_MODULE_5__.PasswordValidatorComponent],
    styles: [".l-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.l-centered-content[_ngcontent-%COMP%] {\n  padding-bottom: 16px;\n  padding-top: 16px;\n  overflow: auto;\n}\n\n.l-logo[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0 auto;\n}\n\n.l-form-container[_ngcontent-%COMP%] {\n  margin: 0 16px;\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.l-or[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  border-bottom: 1px solid #e2e8f0;\n  line-height: 0.1em;\n  margin: 10px 0 20px;\n}\n.l-or[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 0 16px;\n}\n\n.l-additional-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  width: 20px;\n}\n\n.l-validation-error[_ngcontent-%COMP%] {\n  border: solid 1px #b1150a !important;\n}\n.l-validation-error[_ngcontent-%COMP%]   .g-input-text[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #b1150a;\n}\n\n.l-stepper[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%] {\n  display: none !important;\n}\n\n.l-validation-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 5px;\n}\n\n.l-terms[_ngcontent-%COMP%] {\n  line-height: 24px;\n}\n\n.l-optional[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.l-overflow[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  padding-right: 42px;\n}\n\n@media only screen and (max-width: 346px) {\n  .l-optional[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvYXV0aGVudGljYXRpb24vc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQURKOztBQUlBO0VBQ0ksb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFESjs7QUFJQTtFQUNJLGNBQUE7RUFDQSxjQUFBO0FBREo7O0FBSUE7RUFDSSxjQUFBO0FBREo7O0FBSUE7RUFDSSxhQUFBO0FBREo7O0FBSUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFESjtBQUVJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FBQVI7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQURKOztBQUlBO0VBQ0ksb0NBQUE7QUFESjtBQUVJO0VBQ0ksY0NGUTtBREVoQjs7QUFLSTtFQUNJLHdCQUFBO0FBRlI7O0FBTUE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBSEo7O0FBTUE7RUFDSSxpQkFBQTtBQUhKOztBQU1BO0VBQ0ksYUFBQTtBQUhKOztBQU1BO0VBQ0ksbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFISjs7QUFRQTtFQUNJO0lBQ0ksYUFBQTtFQUxOO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi92YXJpYWJsZXMuc2Nzcyc7XHJcblxyXG4ubC1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ubC1jZW50ZXJlZC1jb250ZW50IHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xyXG4gICAgcGFkZGluZy10b3A6IDE2cHg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLmwtbG9nbyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4ubC1mb3JtLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDAgMTZweDtcclxufVxyXG5cclxuaW5wdXQ6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLmwtb3Ige1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGlucHV0LWJvcmRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAwLjFlbTtcclxuICAgIG1hcmdpbjogMTBweCAwIDIwcHg7XHJcbiAgICAmIHNwYW4ge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgcGFkZGluZzogMCAxNnB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ubC1hZGRpdGlvbmFsLWljb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxNnB4O1xyXG4gICAgcmlnaHQ6IDE2cHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxufVxyXG5cclxuLmwtdmFsaWRhdGlvbi1lcnJvciB7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAkZXJyb3ItbWVzc2FnZSAhaW1wb3J0YW50O1xyXG4gICAgLmctaW5wdXQtdGV4dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICAgICAgY29sb3I6ICRlcnJvci1tZXNzYWdlO1xyXG4gICAgfVxyXG59XHJcblxyXG4ubC1zdGVwcGVyIHtcclxuICAgIC5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlci1jb250YWluZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuLmwtdmFsaWRhdGlvbi1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcbi5sLXRlcm1zIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG59XHJcblxyXG4ubC1vcHRpb25hbCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4ubC1vdmVyZmxvdyB7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcGFkZGluZy1yaWdodDogNDJweDtcclxufVxyXG5cclxuLy8gI3JlZ2lvbiBSZXNwb25zaXZlIE1lZGlhIFF1ZXJpZXNcclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzQ2cHgpIHtcclxuICAgIC5sLW9wdGlvbmFsIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyAjZW5kcmVnaW9uXHJcbiIsIi8vIFRleHRcclxuJGFwcC1mb250OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiRhcHAtaW5wdXQtZm9udDogJ011bGlzaCcsIHNhbnMtc2VyaWY7XHJcbiRhcHAtZm9udC1ibGFjazogIzM0MzQzNDtcclxuJGFwcC10ZXh0LWdyZXk6ICM3MDcwNzA7XHJcbiRhcHAtZm9udC1pbnB1dC1wbGFjZWhvbGRlcjogcmdiYSgzMCwgNDgsIDM3LCAwLjU2KTtcclxuJGFwcC1mb3JtLWluZm8tY29sb3I6ICNhZmFmYWY7XHJcblxyXG4vLyBDb2xvcnNcclxuJGFwcC1iZy1jb2xvcjogI2Y5ZjlmYztcclxuJGFwcC1idXlpbmctcmVkOiAjZTc2ZjUxO1xyXG4kYXBwLXNlbGxpbmctZ3JlZW46ICM3ZmE5OTU7XHJcbiRhcHAtaW5wdXQtYmctY29sb3I6ICNlNmU2ZTY7XHJcbiRhcHAtYm90dG9tLW5hdi1pdGVtLWJnOiAjZTVlZmU5O1xyXG4kYXBwLXRhYnMtbWFya2V0cGxhY2UtZ3JlZW46ICMyODVkNjA7XHJcbiRhcHAtdGFicy1uZWdvdGlhdGlvbnMtYmx1ZTogIzRmOWViZDtcclxuJGFwcC1ub3RpZmljYXRpb24tcmVkOiAjYTUzYTRhO1xyXG5cclxuLy8gR3JhZGllbnRzXHJcbiRhcHAtc2VsbGluZy1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgIzk4YjRhNywgIzRhNmU1ZSk7XHJcbiRhcHAtYnV5aW5nLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjZGY4YTc1LCAjYTI1MzNmKTtcclxuJGFwcC1zZWxsaW5nLWNhcmQtZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICM4NWFlOWIsICM3MzllOGEpO1xyXG4kYXBwLWJ1eWluZy1jYXJkLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAkYXBwLWJ1eWluZy1yZWQsICNjNzVkNDMpO1xyXG5cclxuLy8gQnV0dG9uc1xyXG4kYXBwLXByaW1hcnktYnV0dG9uLWJnLWNvbG9yOiAjMzFhMDVmO1xyXG4kYXBwLXNlY29uZGFyeS1idXR0b24tYmctY29sb3I6ICNlNWU1ZTU7XHJcbiRhcHAtZGVsZXRlLWJ1dHRvbi1yZWQ6ICNkMzQ1NWI7XHJcblxyXG4vLyBPdGhlclxyXG4kYXBwLWJvcmRlci1yYWRpdXM6IDhweDtcclxuJGFwcC1ib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjA4KSAhaW1wb3J0YW50O1xyXG5cclxuLy8gI3JlZ2lvbiBNYXRjaCBFeGNoYW5nZVxyXG5cclxuLy8gI3JlZ2lvbiBDb2xvcnNcclxuXHJcbiRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4kYmFja2dyb3VuZC1jb2xvci1ncmV5OiAjZjVmNWY1O1xyXG4kdGV4dC1kYXJrOiAjNDA0MDQwO1xyXG4kdGV4dC1wbGFjZWhvbGRlcjogIzhjOGM4YztcclxuJHByaW1hcnktY29sb3I6ICM0MDdlZjg7XHJcbiRzZWNvbmRhcnktY29sb3I6ICNlNWVkZmQ7XHJcbiRtZWRpdW0tYmx1ZTogIzhkOWVjNTtcclxuJHByaW1hcnktZ3JlZW46ICMxY2FmN2U7XHJcbiRzZWNvbmRhcnktZ3JlZW46ICNlN2Y3ZjA7XHJcbiRwcmltYXJ5LXJlZDogI2QyMzAzZDtcclxuJHNlY29uZGFyeS1yZWQ6ICNmN2U4ZTc7XHJcbiRpbnB1dC1ib3JkZXI6ICNlMmU4ZjA7XHJcbiRlcnJvci1tZXNzYWdlOiAjYjExNTBhO1xyXG4kZGlzYWJsZWQtY29sb3I6ICNjYmNiY2I7XHJcblxyXG4vLyAjZW5kcmVnaW9uXHJcblxyXG4vLyAjcmVnaW9uIFRleHRcclxuXHJcbiR0ZXh0LWZvbnQ6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuJGZvbnQtd2VpZ2h0LWJvbGQ6IDcwMDtcclxuJGZvbnQtd2VpZ2h0LXNlbWktYm9sZDogNjAwO1xyXG4kZm9udC13ZWlnaHQtcmVndWxhcjogNTAwO1xyXG4kZm9udC13ZWlnaHQtbGlnaHQ6IDQwMDtcclxuXHJcbi8vICNlbmRyZWdpb25cclxuXHJcbi8vICNyZWdpb24gQnV0dG9uc1xyXG5cclxuJGJ1dHRvbi1mb250LXdlaWdodDogNjAwO1xyXG5cclxuLy8gI2VuZHJlZ2lvblxyXG5cclxuLy8gI3JlZ2lvbiBPdGhlclxyXG5cclxuJGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHJcbi8vICNlbmRyZWdpb25cclxuXHJcbi8vICNlbmRyZWdpb25cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_features_authentication_authentication_module_ts.js.map