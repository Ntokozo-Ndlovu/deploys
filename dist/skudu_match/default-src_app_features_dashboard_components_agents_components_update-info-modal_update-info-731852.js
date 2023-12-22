"use strict";
(self["webpackChunkskudu_match"] = self["webpackChunkskudu_match"] || []).push([["default-src_app_features_dashboard_components_agents_components_update-info-modal_update-info-731852"],{

/***/ 6477:
/*!******************************************************************************************************************!*\
  !*** ./src/app/features/dashboard/components/agents/components/update-info-modal/update-info-modal.component.ts ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UpdateInfoModalComponent: () => (/* binding */ UpdateInfoModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/legacy-dialog */ 1035);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ 1575);
/* harmony import */ var src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/helpers/index.actions */ 5626);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 1527);
/* harmony import */ var src_app_core_helpers_snackbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/helpers/snackbar */ 2179);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ 9409);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_legacy_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/legacy-progress-spinner */ 3401);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_magic_ngx_gp_autocomplete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular-magic/ngx-gp-autocomplete */ 4711);
















function UpdateInfoModalComponent_p_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Enter a valid phone number. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function UpdateInfoModalComponent_mat_progress_spinner_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-progress-spinner", 19);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("diameter", 30);
  }
}
function UpdateInfoModalComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "Update Info");
  }
}
const _c0 = function (a0, a1) {
  return {
    "g-primary-button": a0,
    "g-disabled-button": a1
  };
};
class UpdateInfoModalComponent {
  constructor(dialogRef, actions$, store, data, snackbar) {
    this.dialogRef = dialogRef;
    this.actions$ = actions$;
    this.store = store;
    this.data = data;
    this.snackbar = snackbar;
    this.locationSet = false;
    this.isUpdateLocationLoading = false;
    this.userInfo = {
      location: null,
      phone: null
    };
    this.options = {
      types: ['(regions)']
    };
  }
  ngOnInit() {}
  handleBack() {
    this.dialogRef.close();
  }
  handleSelectLocation(address) {
    this.userInfo = {
      ...this.userInfo,
      location: address.formatted_address.split(',', 2).join(', ')
    };
    this.locationSet = true;
  }
  handleUpdateInfo() {
    this.isUpdateLocationLoading = true;
    this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_0__.authActions.ReqUpdateUserDetailsFail), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1)).subscribe(() => {
      this.isUpdateLocationLoading = false;
      this.snackbar.open('Failed to update location', 'CLOSE', src_app_core_helpers_snackbar__WEBPACK_IMPORTED_MODULE_1__.errorConfig);
    });
    this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_0__.authActions.ReqUpdateUserDetailsSuccess), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1)).subscribe(() => {
      this.isUpdateLocationLoading = false;
      this.dialogRef.close();
    });
    this.store.dispatch(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_0__.authActions.ReqUpdateUserDetails({
      user: {
        ...this.data.user,
        ...this.userInfo,
        updatedAt: Date.now()
      }
    }));
  }
  static #_ = this.ɵfac = function UpdateInfoModalComponent_Factory(t) {
    return new (t || UpdateInfoModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_5__.MatLegacyDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_LEGACY_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBar));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: UpdateInfoModalComponent,
    selectors: [["app-update-info-modal"]],
    decls: 27,
    vars: 11,
    consts: [[1, "g-app-dimensions", "l-container"], [1, "l-header"], ["src", "./assets/icons/back-arrow-icon.svg", "alt", "back-arrow-icon", 1, "l-back-icon", 3, "click"], [1, "g-text-h2-dark", "text-left", "ml-5"], [1, "l-content"], [1, "g-form-input-group", "mt-2"], [1, "g-form-label"], [1, "g-text-input-container"], ["src", "./assets/icons/location-blue-icon.svg", "alt", "", 1, "g-input-text-icon"], ["type", "location", "name", "location", "ngx-gp-autocomplete", "", "placeholder", "location", "autocomplete", "off", "required", "", 1, "g-input-text", 3, "ngModel", "options", "ngModelChange", "onAddressChange"], ["src", "./assets/icons/phone-blue-icon.svg", "alt", "", 1, "g-input-text-icon"], ["type", "text", "placeholder", "Cell", "name", "phone", "pattern", "^(\\+27|0)[6-8][0-9]{8}$", "required", "", 1, "g-input-text", 3, "ngModel", "ngModelChange"], ["phone", "ngModel"], ["class", "g-input-validation-text-error pt-1 text-left", 4, "ngIf"], [1, "mt-4"], [1, "mb-2", 3, "ngClass", "disabled", "click"], ["class", "g-mat-progress-spinner-white mx-auto", "mode", "indeterminate", 3, "diameter", 4, "ngIf", "ngIfElse"], ["showButtonText", ""], [1, "g-input-validation-text-error", "pt-1", "text-left"], ["mode", "indeterminate", 1, "g-mat-progress-spinner-white", "mx-auto", 3, "diameter"]],
    template: function UpdateInfoModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UpdateInfoModalComponent_Template_img_click_2_listener() {
          return ctx.handleBack();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Update Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4)(6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "We noticed you don't have some information set. To find the best broker please update your info below.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 5)(9, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function UpdateInfoModalComponent_Template_input_ngModelChange_13_listener($event) {
          return ctx.userInfo.location = $event;
        })("onAddressChange", function UpdateInfoModalComponent_Template_input_onAddressChange_13_listener($event) {
          return ctx.handleSelectLocation($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 5)(15, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Mobile Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function UpdateInfoModalComponent_Template_input_ngModelChange_19_listener($event) {
          return ctx.userInfo.phone = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, UpdateInfoModalComponent_p_21_Template, 2, 0, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 14)(23, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UpdateInfoModalComponent_Template_button_click_23_listener() {
          return ctx.handleUpdateInfo();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, UpdateInfoModalComponent_mat_progress_spinner_24_Template, 1, 1, "mat-progress-spinner", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, UpdateInfoModalComponent_ng_template_25_Template, 1, 0, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](20);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.userInfo.location)("options", ctx.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.userInfo.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r0.touched && !_r0.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](8, _c0, ctx.locationSet && _r0.valid, !ctx.locationSet || !_r0.valid))("disabled", !ctx.locationSet && !_r0.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isUpdateLocationLoading)("ngIfElse", _r3);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_legacy_progress_spinner__WEBPACK_IMPORTED_MODULE_9__.MatLegacyProgressSpinner, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _angular_magic_ngx_gp_autocomplete__WEBPACK_IMPORTED_MODULE_11__.NgxGpAutocompleteDirective],
    styles: [".l-container[_ngcontent-%COMP%] {\n  padding: 16px;\n  overflow: hidden;\n  width: auto;\n  background-color: #f9f9fc;\n}\n\n.l-header[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 28px;\n}\n\n.l-back-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 16px;\n  top: 22px;\n  width: 20.24px;\n  height: 13.5px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvZGFzaGJvYXJkL2NvbXBvbmVudHMvYWdlbnRzL2NvbXBvbmVudHMvdXBkYXRlLWluZm8tbW9kYWwvdXBkYXRlLWluZm8tbW9kYWwuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJDR1c7QURKZjs7QUFJQTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtBQURKOztBQUlBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBREoiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzcmMvdmFyaWFibGVzLnNjc3MnO1xyXG5cclxuLmwtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXBwLWJnLWNvbG9yO1xyXG59XHJcblxyXG4ubC1oZWFkZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyOHB4O1xyXG59XHJcblxyXG4ubC1iYWNrLWljb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMTZweDtcclxuICAgIHRvcDogMjJweDtcclxuICAgIHdpZHRoOiAyMC4yNHB4O1xyXG4gICAgaGVpZ2h0OiAxMy41cHg7XHJcbn1cclxuIiwiLy8gVGV4dFxyXG4kYXBwLWZvbnQ6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuJGFwcC1pbnB1dC1mb250OiAnTXVsaXNoJywgc2Fucy1zZXJpZjtcclxuJGFwcC1mb250LWJsYWNrOiAjMzQzNDM0O1xyXG4kYXBwLXRleHQtZ3JleTogIzcwNzA3MDtcclxuJGFwcC1mb250LWlucHV0LXBsYWNlaG9sZGVyOiByZ2JhKDMwLCA0OCwgMzcsIDAuNTYpO1xyXG4kYXBwLWZvcm0taW5mby1jb2xvcjogI2FmYWZhZjtcclxuXHJcbi8vIENvbG9yc1xyXG4kYXBwLWJnLWNvbG9yOiAjZjlmOWZjO1xyXG4kYXBwLWJ1eWluZy1yZWQ6ICNlNzZmNTE7XHJcbiRhcHAtc2VsbGluZy1ncmVlbjogIzdmYTk5NTtcclxuJGFwcC1pbnB1dC1iZy1jb2xvcjogI2U2ZTZlNjtcclxuJGFwcC1ib3R0b20tbmF2LWl0ZW0tYmc6ICNlNWVmZTk7XHJcbiRhcHAtdGFicy1tYXJrZXRwbGFjZS1ncmVlbjogIzI4NWQ2MDtcclxuJGFwcC10YWJzLW5lZ290aWF0aW9ucy1ibHVlOiAjNGY5ZWJkO1xyXG4kYXBwLW5vdGlmaWNhdGlvbi1yZWQ6ICNhNTNhNGE7XHJcblxyXG4vLyBHcmFkaWVudHNcclxuJGFwcC1zZWxsaW5nLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjOThiNGE3LCAjNGE2ZTVlKTtcclxuJGFwcC1idXlpbmctZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICNkZjhhNzUsICNhMjUzM2YpO1xyXG4kYXBwLXNlbGxpbmctY2FyZC1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgIzg1YWU5YiwgIzczOWU4YSk7XHJcbiRhcHAtYnV5aW5nLWNhcmQtZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICRhcHAtYnV5aW5nLXJlZCwgI2M3NWQ0Myk7XHJcblxyXG4vLyBCdXR0b25zXHJcbiRhcHAtcHJpbWFyeS1idXR0b24tYmctY29sb3I6ICMzMWEwNWY7XHJcbiRhcHAtc2Vjb25kYXJ5LWJ1dHRvbi1iZy1jb2xvcjogI2U1ZTVlNTtcclxuJGFwcC1kZWxldGUtYnV0dG9uLXJlZDogI2QzNDU1YjtcclxuXHJcbi8vIE90aGVyXHJcbiRhcHAtYm9yZGVyLXJhZGl1czogOHB4O1xyXG4kYXBwLWJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDgpICFpbXBvcnRhbnQ7XHJcblxyXG4vLyAjcmVnaW9uIE1hdGNoIEV4Y2hhbmdlXHJcblxyXG4vLyAjcmVnaW9uIENvbG9yc1xyXG5cclxuJGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiRiYWNrZ3JvdW5kLWNvbG9yLWdyZXk6ICNmNWY1ZjU7XHJcbiR0ZXh0LWRhcms6ICM0MDQwNDA7XHJcbiR0ZXh0LXBsYWNlaG9sZGVyOiAjOGM4YzhjO1xyXG4kcHJpbWFyeS1jb2xvcjogIzQwN2VmODtcclxuJHNlY29uZGFyeS1jb2xvcjogI2U1ZWRmZDtcclxuJG1lZGl1bS1ibHVlOiAjOGQ5ZWM1O1xyXG4kcHJpbWFyeS1ncmVlbjogIzFjYWY3ZTtcclxuJHNlY29uZGFyeS1ncmVlbjogI2U3ZjdmMDtcclxuJHByaW1hcnktcmVkOiAjZDIzMDNkO1xyXG4kc2Vjb25kYXJ5LXJlZDogI2Y3ZThlNztcclxuJGlucHV0LWJvcmRlcjogI2UyZThmMDtcclxuJGVycm9yLW1lc3NhZ2U6ICNiMTE1MGE7XHJcbiRkaXNhYmxlZC1jb2xvcjogI2NiY2JjYjtcclxuXHJcbi8vICNlbmRyZWdpb25cclxuXHJcbi8vICNyZWdpb24gVGV4dFxyXG5cclxuJHRleHQtZm9udDogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4kZm9udC13ZWlnaHQtYm9sZDogNzAwO1xyXG4kZm9udC13ZWlnaHQtc2VtaS1ib2xkOiA2MDA7XHJcbiRmb250LXdlaWdodC1yZWd1bGFyOiA1MDA7XHJcbiRmb250LXdlaWdodC1saWdodDogNDAwO1xyXG5cclxuLy8gI2VuZHJlZ2lvblxyXG5cclxuLy8gI3JlZ2lvbiBCdXR0b25zXHJcblxyXG4kYnV0dG9uLWZvbnQtd2VpZ2h0OiA2MDA7XHJcblxyXG4vLyAjZW5kcmVnaW9uXHJcblxyXG4vLyAjcmVnaW9uIE90aGVyXHJcblxyXG4kYm9yZGVyLXJhZGl1czogNHB4O1xyXG5cclxuLy8gI2VuZHJlZ2lvblxyXG5cclxuLy8gI2VuZHJlZ2lvblxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 2606:
/*!***********************************************************************************!*\
  !*** ./src/app/features/premium-feature-modal/premium-feature-modal.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PremiumFeatureModalComponent: () => (/* binding */ PremiumFeatureModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/legacy-dialog */ 1035);
/* harmony import */ var src_app_core_helpers_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/helpers/constants */ 9487);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/legacy-button */ 8654);







class PremiumFeatureModalComponent {
  constructor(dialogRef, router, data) {
    this.dialogRef = dialogRef;
    this.router = router;
    this.data = data;
  }
  ngOnInit() {}
  handleClose() {
    this.dialogRef.close();
  }
  handleNavigateToSubscribeToBeVerified() {
    this.router.navigate([src_app_core_helpers_constants__WEBPACK_IMPORTED_MODULE_0__.VERIFICATION_ROUTE]);
    this.handleClose();
  }
  static #_ = this.ɵfac = function PremiumFeatureModalComponent_Factory(t) {
    return new (t || PremiumFeatureModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_2__.MatLegacyDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_LEGACY_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: PremiumFeatureModalComponent,
    selectors: [["app-premium-feature-modal"]],
    decls: 10,
    vars: 2,
    consts: [[1, "l-container"], ["src", "./assets/icons/close-icon-dark.svg", "alt", "Black cross / close icon", 1, "l-close-icon", 3, "click"], [1, "g-text-h1-dark", "mb-4"], [1, "g-text-p-dark", "mb-4"], ["mat-flat-button", "", 1, "g-primary-button", 3, "click"]],
    template: function PremiumFeatureModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PremiumFeatureModalComponent_Template_img_click_1_listener() {
          return ctx.handleClose();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "This is a Premium Feature");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PremiumFeatureModalComponent_Template_button_click_8_listener() {
          return ctx.handleNavigateToSubscribeToBeVerified();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Verify / Subscribe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.featurePhrase);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.subscribeText);
      }
    },
    dependencies: [_angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_4__.MatLegacyButton],
    styles: [".l-close-icon[_ngcontent-%COMP%] {\n  width: 24px;\n  height: auto;\n  margin-left: calc(100% - 24px);\n  margin-bottom: 37px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvcHJlbWl1bS1mZWF0dXJlLW1vZGFsL3ByZW1pdW0tZmVhdHVyZS1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIi5sLWNsb3NlLWljb24ge1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogY2FsYygxMDAlIC0gMjRweCk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzN3B4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=default-src_app_features_dashboard_components_agents_components_update-info-modal_update-info-731852.js.map