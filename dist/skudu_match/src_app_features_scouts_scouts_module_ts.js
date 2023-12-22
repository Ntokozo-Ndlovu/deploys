"use strict";
(self["webpackChunkskudu_match"] = self["webpackChunkskudu_match"] || []).push([["src_app_features_scouts_scouts_module_ts"],{

/***/ 4794:
/*!*****************************************************************************!*\
  !*** ./src/app/features/scouts/components/fine-tune/fine-tune.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FineTuneComponent: () => (/* binding */ FineTuneComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/helpers/index.actions */ 5626);
/* harmony import */ var src_app_core_models_queryModels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/models/queryModels */ 1417);
/* harmony import */ var src_app_core_helpers_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../core/helpers/constants */ 9487);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/legacy-core */ 773);
/* harmony import */ var _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/legacy-select */ 2198);
/* harmony import */ var _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/legacy-button */ 8654);














function FineTuneComponent_mat_option_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rating_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r0.ratingData.indexOf(rating_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", rating_r1, " ");
  }
}
class FineTuneComponent {
  constructor(router, store) {
    this.router = router;
    this.store = store;
    this.fineTune = new src_app_core_models_queryModels__WEBPACK_IMPORTED_MODULE_1__.FineTune();
    this.ratingData = src_app_core_helpers_constants__WEBPACK_IMPORTED_MODULE_2__.ratingData;
  }
  ngOnInit() {}
  handleToggleExFarm(input) {
    this.fineTune.exFarm = input;
  }
  handleToggleIncludeLots(input) {
    this.fineTune.hasLots = input;
  }
  navigateToSearchResultsHelper() {
    this.store.dispatch(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_0__.scoutActions.ReqFineTunedScoutSearch({
      searchInfo: this.fineTune
    }));
    this.router.navigate([src_app_core_helpers_constants__WEBPACK_IMPORTED_MODULE_2__.SCOUT_SEARCH_RESULT_ROUTE], {
      queryParams: {
        skipSearch: true
      }
    });
  }
  static #_ = this.ɵfac = function FineTuneComponent_Factory(t) {
    return new (t || FineTuneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: FineTuneComponent,
    selectors: [["app-fine-tune"]],
    decls: 33,
    vars: 14,
    consts: [[1, "l-container", "g-fade-in-right"], [1, "l-header"], ["src", "./assets/icons/back-arrow-icon.svg", "alt", "back-arrow-icon", 1, "l-back-icon", "ml-4", 3, "click"], [1, "g-text-h2-dark"], [1, "l-content"], [1, "l-input-container"], [1, "w-100", "mt-4", "g-form-label"], [1, "l-select-container"], ["mat-flat-button", "", 1, "l-option", 3, "click"], ["src", "./assets/icons/unselected-icon.svg", "alt", "selected-icon", 1, "l-icon", 3, "src"], ["alt", "selected-icon", 1, "l-icon", 3, "src"], [1, "d-flex", "l-input-container", "flex-column", "my-3"], [1, "g-form-label"], ["name", "bbbeeRating", 1, "g-form-select", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-flat-button", "", 1, "g-primary-button", "mt-5", 3, "click"], [3, "value"]],
    template: function FineTuneComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FineTuneComponent_Template_img_click_2_listener() {
          return ctx.navigateToSearchResultsHelper();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Fine-tune Scout");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Scout farmers that can deliver crop Ex Farm");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 7)(10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FineTuneComponent_Template_button_click_10_listener() {
          return ctx.handleToggleExFarm(true);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, " Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FineTuneComponent_Template_button_click_13_listener() {
          return ctx.handleToggleExFarm(false);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, " No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 11)(17, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Scout for farmers that have a B-BBEE rating better than:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "mat-select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function FineTuneComponent_Template_mat_select_ngModelChange_19_listener($event) {
          return ctx.fineTune.rating = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, FineTuneComponent_mat_option_20_Template, 2, 2, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 5)(22, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Include Lots in my Scout");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 7)(25, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FineTuneComponent_Template_button_click_25_listener() {
          return ctx.handleToggleIncludeLots(true);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, " Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FineTuneComponent_Template_button_click_28_listener() {
          return ctx.handleToggleIncludeLots(false);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, " No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FineTuneComponent_Template_button_click_31_listener() {
          return ctx.navigateToSearchResultsHelper();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, " Scout the Market ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("l-active-option", ctx.fineTune.exFarm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx.fineTune.exFarm ? "./assets/icons/selected-blue-icon.svg" : "./assets/icons/unselected-icon.svg", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("l-active-not-option", !ctx.fineTune.exFarm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", !ctx.fineTune.exFarm ? "./assets/icons/selected-blue-icon.svg" : "./assets/icons/unselected-icon.svg", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.fineTune.rating);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.ratingData);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("l-active-option", ctx.fineTune.hasLots);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx.fineTune.hasLots ? "./assets/icons/selected-blue-icon.svg" : "./assets/icons/unselected-icon.svg", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("l-active-not-option", !ctx.fineTune.hasLots);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", !ctx.fineTune.hasLots ? "./assets/icons/selected-blue-icon.svg" : "./assets/icons/unselected-icon.svg", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_8__.MatLegacyOption, _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_9__.MatLegacySelect, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_10__.MatLegacyButton],
    styles: [".l-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-color: #f5f5f5;\n}\n\n.l-content[_ngcontent-%COMP%] {\n  padding: 0px 16px 48px 16px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.l-input-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.l-back-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  width: 20.24px;\n  height: 13.5px;\n}\n\n.l-header[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  min-height: 56px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: white;\n}\n\n.l-select-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 48px;\n  margin-bottom: 0;\n}\n\n.l-step[_ngcontent-%COMP%] {\n  width: 90%;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.l-option[_ngcontent-%COMP%] {\n  position: relative;\n  width: 47%;\n  height: 56px;\n  padding: 0 16px;\n  text-align: left;\n  font-family: \"Mulish\", sans-serif;\n  font-weight: 600;\n  letter-spacing: normal;\n  line-height: 21px;\n  color: #404040;\n  border-radius: 4px;\n  background-color: #ffffff;\n  transition: ease-in-out 0.1s;\n  outline: none;\n  cursor: pointer;\n}\n\n.l-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 16px;\n  width: 20px;\n  height: 20px;\n}\n\n.l-active[_ngcontent-%COMP%], .l-active-not[_ngcontent-%COMP%] {\n  color: #ffffff;\n  background-color: #31a05f;\n}\n\n.l-active-not-option[_ngcontent-%COMP%], .l-active-option[_ngcontent-%COMP%] {\n  border: solid 1px #407ef8 !important;\n}\n\n.g-form-label[_ngcontent-%COMP%] {\n  line-height: 30px;\n}\n\n.l-grey-bg[_ngcontent-%COMP%] {\n  background-color: #e6e6e6;\n}\n\n.l-stepper-button[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 48px;\n  transition: ease-in-out 0.1s;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvc2NvdXRzL2NvbXBvbmVudHMvZmluZS10dW5lL2ZpbmUtdHVuZS5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJDaUNvQjtBRGxDeEI7O0FBSUE7RUFDSSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBREo7O0FBSUE7RUFDSSxXQUFBO0FBREo7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQURKOztBQUlBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBREo7O0FBSUE7RUFDSSxXQUFBO0VBQ0Esd0JBQUE7RUFBQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQURKOztBQUlBO0VBQ0ksVUFBQTtFQUNBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQURKOztBQUlBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQzFEYTtFRDJEYixnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQ3pCUTtFRDBCUixrQkNPWTtFRE5aLHlCQzdCZTtFRDhCZiw0QkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBREo7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQURKOztBQUlBOztFQUVJLGNBQUE7RUFDQSx5QkN6RDBCO0FEd0Q5Qjs7QUFJQTs7RUFFSSxvQ0FBQTtBQURKOztBQUlBO0VBQ0ksaUJBQUE7QUFESjs7QUFJQTtFQUNJLHlCQ25GaUI7QURrRnJCOztBQUlBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7QUFESiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3NyYy92YXJpYWJsZXMuc2Nzcyc7XHJcblxyXG4ubC1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvci1ncmV5O1xyXG59XHJcblxyXG4ubC1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDBweCAxNnB4IDQ4cHggMTZweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmwtaW5wdXQtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubC1iYWNrLWljb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAyMC4yNHB4O1xyXG4gICAgaGVpZ2h0OiAxMy41cHg7XHJcbn1cclxuXHJcbi5sLWhlYWRlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDU2cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5sLXNlbGVjdC1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0OHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLmwtc3RlcCB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmwtb3B0aW9uIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiA0NyU7XHJcbiAgICBoZWlnaHQ6IDU2cHg7XHJcbiAgICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC1mYW1pbHk6ICRhcHAtaW5wdXQtZm9udDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICBjb2xvcjogJHRleHQtZGFyaztcclxuICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3I7XHJcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAwLjFzO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmwtaWNvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTZweDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4ubC1hY3RpdmUsXHJcbi5sLWFjdGl2ZS1ub3Qge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXBwLXByaW1hcnktYnV0dG9uLWJnLWNvbG9yO1xyXG59XHJcblxyXG4ubC1hY3RpdmUtbm90LW9wdGlvbixcclxuLmwtYWN0aXZlLW9wdGlvbiB7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAkcHJpbWFyeS1jb2xvciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZy1mb3JtLWxhYmVsIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4ubC1ncmV5LWJnIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRhcHAtaW5wdXQtYmctY29sb3I7XHJcbn1cclxuXHJcbi5sLXN0ZXBwZXItYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogNDhweDtcclxuICAgIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IDAuMXM7XHJcbn1cclxuIiwiLy8gVGV4dFxyXG4kYXBwLWZvbnQ6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuJGFwcC1pbnB1dC1mb250OiAnTXVsaXNoJywgc2Fucy1zZXJpZjtcclxuJGFwcC1mb250LWJsYWNrOiAjMzQzNDM0O1xyXG4kYXBwLXRleHQtZ3JleTogIzcwNzA3MDtcclxuJGFwcC1mb250LWlucHV0LXBsYWNlaG9sZGVyOiByZ2JhKDMwLCA0OCwgMzcsIDAuNTYpO1xyXG4kYXBwLWZvcm0taW5mby1jb2xvcjogI2FmYWZhZjtcclxuXHJcbi8vIENvbG9yc1xyXG4kYXBwLWJnLWNvbG9yOiAjZjlmOWZjO1xyXG4kYXBwLWJ1eWluZy1yZWQ6ICNlNzZmNTE7XHJcbiRhcHAtc2VsbGluZy1ncmVlbjogIzdmYTk5NTtcclxuJGFwcC1pbnB1dC1iZy1jb2xvcjogI2U2ZTZlNjtcclxuJGFwcC1ib3R0b20tbmF2LWl0ZW0tYmc6ICNlNWVmZTk7XHJcbiRhcHAtdGFicy1tYXJrZXRwbGFjZS1ncmVlbjogIzI4NWQ2MDtcclxuJGFwcC10YWJzLW5lZ290aWF0aW9ucy1ibHVlOiAjNGY5ZWJkO1xyXG4kYXBwLW5vdGlmaWNhdGlvbi1yZWQ6ICNhNTNhNGE7XHJcblxyXG4vLyBHcmFkaWVudHNcclxuJGFwcC1zZWxsaW5nLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjOThiNGE3LCAjNGE2ZTVlKTtcclxuJGFwcC1idXlpbmctZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICNkZjhhNzUsICNhMjUzM2YpO1xyXG4kYXBwLXNlbGxpbmctY2FyZC1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgIzg1YWU5YiwgIzczOWU4YSk7XHJcbiRhcHAtYnV5aW5nLWNhcmQtZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICRhcHAtYnV5aW5nLXJlZCwgI2M3NWQ0Myk7XHJcblxyXG4vLyBCdXR0b25zXHJcbiRhcHAtcHJpbWFyeS1idXR0b24tYmctY29sb3I6ICMzMWEwNWY7XHJcbiRhcHAtc2Vjb25kYXJ5LWJ1dHRvbi1iZy1jb2xvcjogI2U1ZTVlNTtcclxuJGFwcC1kZWxldGUtYnV0dG9uLXJlZDogI2QzNDU1YjtcclxuXHJcbi8vIE90aGVyXHJcbiRhcHAtYm9yZGVyLXJhZGl1czogOHB4O1xyXG4kYXBwLWJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDgpICFpbXBvcnRhbnQ7XHJcblxyXG4vLyAjcmVnaW9uIE1hdGNoIEV4Y2hhbmdlXHJcblxyXG4vLyAjcmVnaW9uIENvbG9yc1xyXG5cclxuJGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiRiYWNrZ3JvdW5kLWNvbG9yLWdyZXk6ICNmNWY1ZjU7XHJcbiR0ZXh0LWRhcms6ICM0MDQwNDA7XHJcbiR0ZXh0LXBsYWNlaG9sZGVyOiAjOGM4YzhjO1xyXG4kcHJpbWFyeS1jb2xvcjogIzQwN2VmODtcclxuJHNlY29uZGFyeS1jb2xvcjogI2U1ZWRmZDtcclxuJG1lZGl1bS1ibHVlOiAjOGQ5ZWM1O1xyXG4kcHJpbWFyeS1ncmVlbjogIzFjYWY3ZTtcclxuJHNlY29uZGFyeS1ncmVlbjogI2U3ZjdmMDtcclxuJHByaW1hcnktcmVkOiAjZDIzMDNkO1xyXG4kc2Vjb25kYXJ5LXJlZDogI2Y3ZThlNztcclxuJGlucHV0LWJvcmRlcjogI2UyZThmMDtcclxuJGVycm9yLW1lc3NhZ2U6ICNiMTE1MGE7XHJcbiRkaXNhYmxlZC1jb2xvcjogI2NiY2JjYjtcclxuXHJcbi8vICNlbmRyZWdpb25cclxuXHJcbi8vICNyZWdpb24gVGV4dFxyXG5cclxuJHRleHQtZm9udDogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4kZm9udC13ZWlnaHQtYm9sZDogNzAwO1xyXG4kZm9udC13ZWlnaHQtc2VtaS1ib2xkOiA2MDA7XHJcbiRmb250LXdlaWdodC1yZWd1bGFyOiA1MDA7XHJcbiRmb250LXdlaWdodC1saWdodDogNDAwO1xyXG5cclxuLy8gI2VuZHJlZ2lvblxyXG5cclxuLy8gI3JlZ2lvbiBCdXR0b25zXHJcblxyXG4kYnV0dG9uLWZvbnQtd2VpZ2h0OiA2MDA7XHJcblxyXG4vLyAjZW5kcmVnaW9uXHJcblxyXG4vLyAjcmVnaW9uIE90aGVyXHJcblxyXG4kYm9yZGVyLXJhZGl1czogNHB4O1xyXG5cclxuLy8gI2VuZHJlZ2lvblxyXG5cclxuLy8gI2VuZHJlZ2lvblxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 593:
/*!*******************************************************************************************!*\
  !*** ./src/app/features/scouts/components/scouts-edit-form/scouts-edit-form.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScoutsEditFormComponent: () => (/* binding */ ScoutsEditFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _core_ngrx_crop_crop_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../core/ngrx/crop/crop.selectors */ 1923);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var src_app_core_ngrx_reducers_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/ngrx/reducers/index */ 7032);
/* harmony import */ var src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/helpers/index.actions */ 5626);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/effects */ 1575);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 1527);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 274);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var src_app_core_models_queryModels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/models/queryModels */ 1417);
/* harmony import */ var src_app_core_helpers_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/helpers/constants */ 9487);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ 7178);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_features_shared_components_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/features/shared/components/confirmation-modal/confirmation-modal.component */ 9510);
/* harmony import */ var _core_ngrx_brokers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/ngrx/brokers */ 1199);
/* harmony import */ var _googlemaps_js_api_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @googlemaps/js-api-loader */ 8914);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/legacy-dialog */ 1035);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_material_legacy_tabs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/legacy-tabs */ 3101);
/* harmony import */ var _angular_material_legacy_autocomplete__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/legacy-autocomplete */ 2718);
/* harmony import */ var _angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/legacy-core */ 773);
/* harmony import */ var _angular_material_legacy_slider__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/legacy-slider */ 2098);
/* harmony import */ var _angular_material_legacy_progress_spinner__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/legacy-progress-spinner */ 3401);
/* harmony import */ var _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/legacy-select */ 2198);
/* harmony import */ var _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/legacy-button */ 8654);
/* harmony import */ var _angular_magic_ngx_gp_autocomplete__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular-magic/ngx-gp-autocomplete */ 4711);
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/google-maps */ 8684);
// #region Angular Imports



// #endregion
// #region NgRx Imports





// #endregion
// #region RxJs Imports


// #endregion
// #region Interface, Class & Constant Imports


// #endregion
// #region Other Imports






















function ScoutsEditFormComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "mat-progress-spinner", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("diameter", 40);
  }
}
function ScoutsEditFormComponent_ng_template_2_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 13)(1, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Scout the whole of South Africa");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 15)(4, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ScoutsEditFormComponent_ng_template_2_div_26_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r11.handleToggleIsSouthAfrica(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, " Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ScoutsEditFormComponent_ng_template_2_div_26_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r12);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r13.handleToggleIsSouthAfrica(false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, " No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](9, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("l-active", ctx_r3.scout.inSouthAfrica);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", ctx_r3.scout.inSouthAfrica ? "./assets/icons/selected-blue-icon.svg" : "./assets/icons/unselected-icon.svg", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("l-active", !ctx_r3.scout.inSouthAfrica);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", !ctx_r3.scout.inSouthAfrica ? "./assets/icons/selected-blue-icon.svg" : "./assets/icons/unselected-icon.svg", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
  }
}
function ScoutsEditFormComponent_ng_template_2_div_27_mat_option_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const filteredDeliveryPoint_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", filteredDeliveryPoint_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", filteredDeliveryPoint_r16.name, " ");
  }
}
function ScoutsEditFormComponent_ng_template_2_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 33)(1, "mat-tab-group", 34)(2, "mat-tab", 35)(3, "div", 36)(4, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, " Tell the Market where your crop is situated using a location. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ScoutsEditFormComponent_ng_template_2_div_27_Template_input_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r17.scout.town = $event);
    })("onAddressChange", function ScoutsEditFormComponent_ng_template_2_div_27_Template_input_onAddressChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r18);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r19.handleSelectLocation($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "mat-tab", 41)(10, "div", 36)(11, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](12, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, " Tell the Market where your crop is situated using a silo. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ScoutsEditFormComponent_ng_template_2_div_27_Template_input_ngModelChange_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r18);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r20.searchTerm = $event);
    })("ngModelChange", function ScoutsEditFormComponent_ng_template_2_div_27_Template_input_ngModelChange_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r18);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r21.handleSearchTermChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "mat-autocomplete", 43, 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("optionSelected", function ScoutsEditFormComponent_ng_template_2_div_27_Template_mat_autocomplete_optionSelected_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r18);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r22.handleSelectDeliveryPoint($event.option.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](18, ScoutsEditFormComponent_ng_template_2_div_27_mat_option_18_Template, 2, 2, "mat-option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](17);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r4.scout.town)("options", ctx_r4.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r4.searchTerm)("matAutocomplete", _r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r4.filteredDeliveryPoints);
  }
}
function ScoutsEditFormComponent_ng_template_2_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 13)(1, "div", 47)(2, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "Delivery Radius Km");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "mat-slider", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ScoutsEditFormComponent_ng_template_2_div_28_Template_mat_slider_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r24);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r23.scout.radius = $event);
    })("change", function ScoutsEditFormComponent_ng_template_2_div_28_Template_mat_slider_change_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r24);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r25.hasBeenEditedHelper());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", ctx_r5.scout.radius, " Km");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r5.scout.radius);
  }
}
const _c0 = function (a0, a1) {
  return {
    lat: a0,
    lng: a1
  };
};
const _c1 = function () {
  return {
    mapTypeId: "hybrid",
    gestureHandling: "cooperative"
  };
};
const _c2 = function () {
  return {
    draggable: true
  };
};
function ScoutsEditFormComponent_ng_template_2_div_29_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 51)(1, "google-map", 52)(2, "map-marker", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("dragend", function ScoutsEditFormComponent_ng_template_2_div_29_div_7_Template_map_marker_dragend_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r28);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r27.handleDragEnd($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("zoom", ctx_r26.zoom)("center", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](5, _c0, ctx_r26.scout.location.lat, ctx_r26.scout.location.lng))("options", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](8, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("position", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](9, _c0, ctx_r26.scout.location.lat, ctx_r26.scout.location.lng))("options", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](12, _c2));
  }
}
function ScoutsEditFormComponent_ng_template_2_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 49)(1, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "Move the pin to your point of production.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, ScoutsEditFormComponent_ng_template_2_div_29_div_7_Template, 3, 13, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](8, 1, ctx_r6.apiLoaded));
  }
}
function ScoutsEditFormComponent_ng_template_2_div_30_mat_option_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rating_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", rating_r30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", rating_r30, " ");
  }
}
function ScoutsEditFormComponent_ng_template_2_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div")(1, "div", 13)(2, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "Scout farmers that can deliver crop Ex Farm");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 15)(5, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ScoutsEditFormComponent_ng_template_2_div_30_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r32);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r31.handleToggleExFarm(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, " Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](7, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ScoutsEditFormComponent_ng_template_2_div_30_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r32);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r33.handleToggleExFarm(false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, " No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](10, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "div", 13)(12, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, "Scout for farmers that have a B-BBEE rating better than:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "mat-select", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ScoutsEditFormComponent_ng_template_2_div_30_Template_mat_select_ngModelChange_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r32);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r34.fineTune.rating = $event);
    })("selectionChange", function ScoutsEditFormComponent_ng_template_2_div_30_Template_mat_select_selectionChange_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r32);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r35.hasBeenEditedHelper());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](15, ScoutsEditFormComponent_ng_template_2_div_30_mat_option_15_Template, 2, 2, "mat-option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "div", 56)(17, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18, "Include Lots in my Scout");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "div", 15)(20, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ScoutsEditFormComponent_ng_template_2_div_30_Template_button_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r32);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r36.handleToggleHasLots(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21, " Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](22, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ScoutsEditFormComponent_ng_template_2_div_30_Template_button_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r32);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r37.handleToggleHasLots(false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24, " No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](25, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("l-active", ctx_r7.fineTune.exFarm);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", ctx_r7.fineTune.exFarm ? "./assets/icons/selected-blue-icon.svg" : "./assets/icons/unselected-icon.svg", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("l-active", !ctx_r7.fineTune.exFarm);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", !ctx_r7.fineTune.exFarm ? "./assets/icons/selected-blue-icon.svg" : "./assets/icons/unselected-icon.svg", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r7.fineTune.rating)("compareWith", ctx_r7.compareSelectionsHelper);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r7.ratingData);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("l-active", ctx_r7.fineTune.hasLots);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", ctx_r7.fineTune.hasLots ? "./assets/icons/selected-blue-icon.svg" : "./assets/icons/unselected-icon.svg", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("l-active", !ctx_r7.fineTune.hasLots);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", !ctx_r7.fineTune.hasLots ? "./assets/icons/selected-blue-icon.svg" : "./assets/icons/unselected-icon.svg", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
  }
}
function ScoutsEditFormComponent_ng_template_2_ng_container_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "mat-progress-spinner", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("diameter", 30);
  }
}
function ScoutsEditFormComponent_ng_template_2_ng_template_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Save Changes");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
const _c3 = function (a0, a1, a2) {
  return {
    "l-public-card-sell": a0,
    "l-public-card-buy": a1,
    "l-active": a2
  };
};
function ScoutsEditFormComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 5)(1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ScoutsEditFormComponent_ng_template_2_Template_img_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r39);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r38.handleBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "Edit Scout");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 8)(5, "form", 9)(6, "div", 10)(7, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ScoutsEditFormComponent_ng_template_2_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r39);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r40.handlePublicToggle(false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, " Private ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ScoutsEditFormComponent_ng_template_2_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r39);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r41.handlePublicToggle(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, " Available to Market ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "div", 13)(12, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, "Scout the Market");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "div", 15)(15, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ScoutsEditFormComponent_ng_template_2_Template_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r39);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r42.handleToggleScoutType("Sell"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, " Sell");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](17, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ScoutsEditFormComponent_ng_template_2_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r39);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r43.handleToggleScoutType("Buy"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19, " Buy ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](20, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "div", 13)(22, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](23, "What Match Scout are you interested in?");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ScoutsEditFormComponent_ng_template_2_Template_input_ngModelChange_24_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r39);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r44.cropCategory.name = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function ScoutsEditFormComponent_ng_template_2_Template_input_ngModelChange_25_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r39);
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r45.scout.crop.name = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](26, ScoutsEditFormComponent_ng_template_2_div_26_Template, 10, 6, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](27, ScoutsEditFormComponent_ng_template_2_div_27_Template, 19, 5, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](28, ScoutsEditFormComponent_ng_template_2_div_28_Template, 7, 2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](29, ScoutsEditFormComponent_ng_template_2_div_29_Template, 9, 3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](30, ScoutsEditFormComponent_ng_template_2_div_30_Template, 26, 15, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "div", 25)(32, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ScoutsEditFormComponent_ng_template_2_Template_button_click_32_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r39);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r46.handleOpenConfirmationModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](33, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](34, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ScoutsEditFormComponent_ng_template_2_Template_button_click_34_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r39);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r47.handleSaveChanges());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](35, ScoutsEditFormComponent_ng_template_2_ng_container_35_Template, 2, 1, "ng-container", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](36, ScoutsEditFormComponent_ng_template_2_ng_template_36_Template, 2, 0, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](37);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction3"](18, _c3, (ctx_r2.scout == null ? null : ctx_r2.scout.scoutType) === "Sell", (ctx_r2.scout == null ? null : ctx_r2.scout.scoutType) === "Buy", !ctx_r2.scout.isPublic));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction3"](22, _c3, (ctx_r2.scout == null ? null : ctx_r2.scout.scoutType) === "Sell", (ctx_r2.scout == null ? null : ctx_r2.scout.scoutType) === "Buy", ctx_r2.scout.isPublic));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("l-active-sell", ctx_r2.scout.scoutType === "Sell");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", ctx_r2.scout.scoutType === "Sell" ? "./assets/icons/sell-selected-icon.svg" : "./assets/icons/unselected-icon.svg", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("l-active-buy", ctx_r2.scout.scoutType === "Buy");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", ctx_r2.scout.scoutType === "Buy" ? "./assets/icons/buy-selected-icon.svg" : "./assets/icons/unselected-icon.svg", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r2.cropCategory.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r2.scout.crop.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.scout.scoutType === "Buy");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r2.scout.inSouthAfrica);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r2.scout.inSouthAfrica && ctx_r2.scout.scoutType === "Buy");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r2.scout.inSouthAfrica);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.scout.scoutType === "Buy");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", !ctx_r2.hasBeenEdited);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.hasActionDispatched)("ngIfElse", _r9);
  }
}
// #endregion
class ScoutsEditFormComponent {
  constructor(loader, location, actions$, router, route, store, dialog) {
    this.loader = loader;
    this.location = location;
    this.actions$ = actions$;
    this.router = router;
    this.route = route;
    this.store = store;
    this.dialog = dialog;
    this.scout = new src_app_core_models_queryModels__WEBPACK_IMPORTED_MODULE_3__.ScoutClass();
    this.fineTune = new src_app_core_models_queryModels__WEBPACK_IMPORTED_MODULE_3__.FineTune();
    this.ratingData = src_app_core_helpers_constants__WEBPACK_IMPORTED_MODULE_4__.ratingData;
    this.searchTerm = '';
    this.publicDeliveryPoints = [];
    this.filteredDeliveryPoints = [];
    this.options = {
      types: ['(regions)']
    };
    this.zoom = 4;
    this.isLoading = true;
    this.hasBeenEdited = false;
    this.hasActionDispatched = false;
    this.destroyed$ = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.EventEmitter();
    this.apiLoaded = new rxjs__WEBPACK_IMPORTED_MODULE_10__.BehaviorSubject(false);
  }
  ngOnInit() {
    this.loader.importLibrary('maps').then(({
      Map
    }) => {
      this.apiLoaded?.next(true);
    }).catch(e => {
      // do something
    });
    this.selectClient();
    this.route.params.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1)).subscribe(({
      id
    }) => {
      id ? this.scoutId = id : this.handleBack();
    });
    this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_12__.ofType)(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.scoutActions.ScoutFormDataSuccess, src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.scoutActions.ScoutFormDataFail), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroyed$)).subscribe(() => {
      this.store.dispatch(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.cropActions.ReqCropCategories());
    });
    this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_14__.select)(src_app_core_ngrx_reducers_index__WEBPACK_IMPORTED_MODULE_1__.marketSelectors.getCurrentFullScout), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroyed$)).subscribe(currentScout => {
      if (currentScout && Object.keys(currentScout).length) {
        this.scout = (0,lodash__WEBPACK_IMPORTED_MODULE_5__.cloneDeep)(currentScout);
        if (!this.scout.inSouthAfrica) {
          this.zoom = 13;
        }
      }
    });
    this.store.dispatch(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.scoutActions.ReqScoutFormData({
      scoutId: this.scoutId
    }));
    this.store.dispatch(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.scoutActions.ReqScoutFormData({
      scoutId: this.scoutId
    }));
    this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_14__.select)(src_app_core_ngrx_reducers_index__WEBPACK_IMPORTED_MODULE_1__.marketSelectors.getFineTune), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroyed$)).subscribe(fineTune => {
      if (fineTune) {
        this.fineTune = (0,lodash__WEBPACK_IMPORTED_MODULE_5__.cloneDeep)(fineTune);
      }
    });
    this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_14__.select)(_core_ngrx_crop_crop_selectors__WEBPACK_IMPORTED_MODULE_0__.selectCropByCategories), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroyed$)).subscribe(cropCategories => {
      if (cropCategories.length > 0) {
        this.cropCategory = cropCategories.find(cropCategory => cropCategory.id === this.scout.crop.cropCategoryId);
        if (this.cropCategory) {
          this.isLoading = false;
        }
      }
    });
    this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_14__.select)(src_app_core_ngrx_reducers_index__WEBPACK_IMPORTED_MODULE_1__.deliveryPointsSelectors.getManageDeliveryPointDetails), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroyed$)).subscribe(({
      publicDeliveryPoints
    }) => {
      if (publicDeliveryPoints.length) {
        this.publicDeliveryPoints = publicDeliveryPoints;
        this.filteredDeliveryPoints = publicDeliveryPoints;
      }
    });
    this.store.dispatch(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.deliveryPointActions.ReqManagementData({
      executedTime: Date.now()
    }));
  }
  ngOnDestroy() {
    this.destroyed$.next();
  }
  selectClient() {
    this.store.select(_core_ngrx_brokers__WEBPACK_IMPORTED_MODULE_7__.brokersSelectors.getCurrentClient).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroyed$)).subscribe(client => {
      this.client = client;
    });
  }
  handleBack() {
    this.location.back();
  }
  handleToggleScoutType(scoutType) {
    if (this.scout.scoutType !== scoutType) {
      if (this.scout.inSouthAfrica) {
        this.scout.inSouthAfrica = false;
      }
      this.scout.scoutType = scoutType;
      this.hasBeenEditedHelper();
    }
  }
  handleToggleIsSouthAfrica(inSouthAfrica) {
    if (this.scout.inSouthAfrica !== inSouthAfrica) {
      this.scout.inSouthAfrica = inSouthAfrica;
      this.hasBeenEditedHelper();
    }
  }
  handleSelectLocation($event) {
    this.searchTerm = '';
    this.scout.town = $event.formatted_address;
    this.scout.googlePlaceId = $event.place_id;
    const newLocation = {
      lat: $event.geometry.location.lat(),
      lng: $event.geometry.location.lng()
    };
    this.scout.location = newLocation;
    this.zoom = 13;
    this.hasBeenEditedHelper();
  }
  handleSearchTermChange(searchTerm) {
    if (typeof searchTerm === 'string') {
      this.filteredDeliveryPoints = this.publicDeliveryPoints.filter(filtered => {
        return filtered.name.toLocaleLowerCase().includes(this.searchTerm.toLocaleLowerCase());
      });
    }
  }
  handleSelectDeliveryPoint(deliveryPoint) {
    this.scout.town = deliveryPoint.town;
    this.scout.location = deliveryPoint.location;
    this.searchTerm = deliveryPoint.name;
  }
  handleDragEnd($event) {
    this.scout.location.lat = $event.latLng.lat();
    this.scout.location.lng = $event.latLng.lng();
    this.hasBeenEditedHelper();
  }
  handleToggleExFarm(exFarm) {
    if (this.fineTune.exFarm !== exFarm) {
      this.fineTune.exFarm = exFarm;
      this.hasBeenEditedHelper();
    }
  }
  handleToggleHasLots(hasLots) {
    if (this.fineTune.hasLots !== hasLots) {
      this.fineTune.hasLots = hasLots;
      this.hasBeenEditedHelper();
    }
  }
  handleOpenConfirmationModal() {
    const dialogRef = this.dialog.open(src_app_features_shared_components_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_6__.ConfirmationModalComponent, {
      data: {
        currentAction: 'delete',
        currentItem: 'Scout'
      },
      panelClass: 'g-modal-container'
    });
    dialogRef.afterClosed().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1)).subscribe(shouldDispatch => {
      if (shouldDispatch) {
        this.handleDeleteScout();
      }
    });
  }
  handleDeleteScout() {
    this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_12__.ofType)(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.scoutActions.DeleteScoutSuccess, src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.scoutActions.DeleteScoutFail), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1)).subscribe(action => {
      if (action.type === src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.scoutActions.DeleteScoutSuccess.type) {
        this.router.navigate([src_app_core_helpers_constants__WEBPACK_IMPORTED_MODULE_4__.SCOUTS_ROUTE]);
      }
    });
    const props = this.client ? {
      scoutId: this.scout.id,
      clientUid: this.client.uid
    } : {
      scoutId: this.scout.id
    };
    this.store.dispatch(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.scoutActions.ReqDeleteScout({
      ...props
    }));
  }
  handleSaveChanges() {
    if (this.hasBeenEdited) {
      this.hasActionDispatched = true;
      this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_12__.ofType)(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.scoutActions.UpdateScoutSuccess, src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.scoutActions.UpdateScoutFail), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1)).subscribe(action => {
        if (action.type === src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.scoutActions.UpdateScoutSuccess.type) {
          this.router.navigate([src_app_core_helpers_constants__WEBPACK_IMPORTED_MODULE_4__.SCOUTS_ROUTE]);
        }
      });
      this.store.dispatch(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.scoutActions.ReqUpdateScout({
        scoutAndFineTune: {
          scout: this.scout,
          fineTune: this.fineTune
        }
      }));
    }
  }
  handlePublicToggle(option) {
    this.scout.isPublic = option;
    this.hasBeenEditedHelper();
  }
  compareSelectionsHelper(selection1, selection2) {
    return selection1.id === selection2?.id;
  }
  hasBeenEditedHelper() {
    if (!this.hasBeenEdited) {
      this.hasBeenEdited = true;
    }
  }
  static #_ = this.ɵfac = function ScoutsEditFormComponent_Factory(t) {
    return new (t || ScoutsEditFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_googlemaps_js_api_loader__WEBPACK_IMPORTED_MODULE_8__.Loader), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_15__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_12__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_14__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_17__.MatLegacyDialog));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
    type: ScoutsEditFormComponent,
    selectors: [["app-scouts-edit-form"]],
    decls: 4,
    vars: 2,
    consts: [[1, "l-container", "g-fade-in"], ["class", "l-loading-container", 4, "ngIf", "ngIfElse"], ["showScoutForm", ""], [1, "l-loading-container"], ["mode", "indeterminate", 1, "g-mat-progress-spinner", 3, "diameter"], [1, "l-header"], ["src", "./assets/icons/back-arrow-icon.svg", "alt", "back-arrow-icon", 1, "l-back-icon", 3, "click"], [1, "g-text-h2-dark"], [1, "l-content"], [1, "l-form"], [1, "l-public-toggle"], [1, "mr-2", 3, "ngClass", "click"], [1, "ml-2", 3, "ngClass", "click"], [1, "g-form-input-group", "mt-3"], [1, "g-form-label"], [1, "l-toggle-container"], [1, "l-option", 3, "click"], ["src", "./assets/icons/i-icon-grey.svg", "alt", "tick-icon", 1, "l-icon", 3, "src"], ["alt", "tick-icon", 1, "l-icon", 3, "src"], ["name", "crop category", "placeholder", "Product Category", "readonly", "", "required", "", 1, "g-form-input", "mb-2", 3, "ngModel", "ngModelChange"], ["name", "crop", "placeholder", "Product", "readonly", "", "required", "", 1, "g-form-input", 3, "ngModel", "ngModelChange"], ["class", "g-form-input-group mt-3", 4, "ngIf"], ["class", "g-form-input-group g-fade-in mt-3", 4, "ngIf"], ["class", "g-form-input-group d-flex flex-column mt-3 mb-2", 4, "ngIf"], [4, "ngIf"], [1, "l-buttons-container"], ["mat-flat-button", "", 1, "g-secondary-button", "mr-1", 3, "click"], ["mat-flat-button", "", 1, "g-primary-button", "ml-1", 3, "disabled", "click"], [4, "ngIf", "ngIfElse"], ["showLoadingSpinner", ""], [1, "w-100", "g-form-label"], ["src", "./assets/icons/unselected-icon.svg", "alt", "selected-icon", 1, "l-icon", 3, "src"], ["alt", "selected-icon", 1, "l-icon", 3, "src"], [1, "g-form-input-group", "g-fade-in", "mt-3"], [1, "g-mat-tabs-scout", "mt-3"], ["label", "Scout by Location"], [1, "g-form-input-group", "d-flex", "flex-column", "mt-3"], [1, "l-info-container"], ["src", "./assets/icons/info-icon-grey.svg", "alt", "info-icon-grey", 1, "g-form-info-icon", "mt-1"], [1, "g-form-info-p", "l-black", "m-0"], ["type", "text", "name", "town", "ngx-gp-autocomplete", "", "placeholder", "", "autocomplete", "off", "required", "", 1, "g-form-input", 3, "ngModel", "options", "ngModelChange", "onAddressChange"], ["label", "Scout by Silo"], ["name", "silo", 1, "g-form-input", 3, "ngModel", "matAutocomplete", "ngModelChange"], [1, "g-mat-autocomplete", 3, "optionSelected"], ["auto", "matAutocomplete"], ["class", "g-mat-option-text", 3, "value", 4, "ngFor", "ngForOf"], [1, "g-mat-option-text", 3, "value"], [1, "d-flex", "flex-row", "justify-content-between", "align-items-center"], ["min", "25", "max", "300", "step", "25", "name", "radius", 1, "g-mat-slider", 3, "ngModel", "ngModelChange", "change"], [1, "g-form-input-group", "d-flex", "flex-column", "mt-3", "mb-2"], ["class", "l-map-holder", 4, "ngIf"], [1, "l-map-holder"], [1, "g-delivery-form-map", 3, "zoom", "center", "options"], [3, "position", "options", "dragend"], ["name", "bbbeeRating", 1, "g-form-select", "l-grey-bg", 3, "ngModel", "compareWith", "ngModelChange", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "g-form-input-group", "mt-2"], [3, "value"], ["mode", "indeterminate", 1, "g-mat-progress-spinner-white", "mx-auto", 3, "diameter"], [1, "l-save"]],
    template: function ScoutsEditFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ScoutsEditFormComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, ScoutsEditFormComponent_ng_template_2_Template, 38, 26, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.isLoading)("ngIfElse", _r1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgForm, _angular_material_legacy_tabs__WEBPACK_IMPORTED_MODULE_19__.MatLegacyTabGroup, _angular_material_legacy_tabs__WEBPACK_IMPORTED_MODULE_19__.MatLegacyTab, _angular_material_legacy_autocomplete__WEBPACK_IMPORTED_MODULE_20__.MatLegacyAutocomplete, _angular_material_legacy_autocomplete__WEBPACK_IMPORTED_MODULE_20__.MatLegacyAutocompleteTrigger, _angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_21__.MatLegacyOption, _angular_material_legacy_slider__WEBPACK_IMPORTED_MODULE_22__.MatLegacySlider, _angular_material_legacy_progress_spinner__WEBPACK_IMPORTED_MODULE_23__.MatLegacyProgressSpinner, _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_24__.MatLegacySelect, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_25__.MatLegacyButton, _angular_magic_ngx_gp_autocomplete__WEBPACK_IMPORTED_MODULE_26__.NgxGpAutocompleteDirective, _angular_google_maps__WEBPACK_IMPORTED_MODULE_27__.GoogleMap, _angular_google_maps__WEBPACK_IMPORTED_MODULE_27__.MapMarker, _angular_common__WEBPACK_IMPORTED_MODULE_15__.AsyncPipe],
    styles: [".l-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #f9f9fc;\n  padding-bottom: 8px;\n}\n\n.l-loading-container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-grow: 1;\n}\n\n.l-content[_ngcontent-%COMP%] {\n  width: 100%;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex-grow: 1;\n  overflow: auto;\n  padding: 0 16px;\n}\n\n.l-header[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  min-height: 56px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: white;\n}\n\n.l-back-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  width: 20.24px;\n  height: 13.5px;\n  margin-left: 16px;\n}\n\n.l-form[_ngcontent-%COMP%] {\n  width: 100%;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\n.l-toggle-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n}\n\n.l-option[_ngcontent-%COMP%] {\n  width: 47%;\n  height: 56px;\n  display: flex;\n  justify-content: space-between;\n  padding: 0 16px;\n  align-items: center;\n  font-size: 16px;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 500;\n  letter-spacing: normal;\n  line-height: 21px;\n  color: #404040;\n  border-radius: 4px;\n  background-color: #ffffff;\n  position: relative;\n  border: none;\n  cursor: pointer;\n  outline: none;\n  transition: 0.1s ease-in-out;\n}\n\n.l-active-sell[_ngcontent-%COMP%] {\n  border: 1px solid #1caf7e;\n}\n\n.l-active-buy[_ngcontent-%COMP%] {\n  border: 1px solid #d2303d;\n}\n\n.l-active[_ngcontent-%COMP%] {\n  border: 1px solid #407ef8;\n}\n\n.l-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 16px;\n  width: 20px;\n  height: 20px;\n}\n\n.l-info-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: flex;\n  align-items: flex-start;\n  margin-bottom: 8px;\n}\n\n.l-buttons-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: flex;\n  align-items: center;\n  margin-top: 16px;\n}\n\n.l-map-holder[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.l-public-toggle[_ngcontent-%COMP%] {\n  width: 100%;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: flex;\n  justify-content: space-between;\n  margin: 16px 0;\n}\n\n.l-public-card-sell[_ngcontent-%COMP%], .l-public-card-buy[_ngcontent-%COMP%] {\n  width: 50%;\n  flex: 1 1 auto;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 22px;\n  letter-spacing: normal;\n  color: #8d9ec5;\n  border-radius: 4px;\n  border: solid 1px #8d9ec5;\n  background-color: #ffffff;\n  transition: 0.1s ease-in-out;\n  text-align: center;\n  padding: 8px 16px;\n  outline: none;\n  white-space: normal;\n}\n\n.l-active[_ngcontent-%COMP%] {\n  color: #ffffff !important;\n  background-color: #407ef8 !important;\n}\n\n@media screen and (max-width: 346px) {\n  .l-save[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvc2NvdXRzL2NvbXBvbmVudHMvc2NvdXRzLWVkaXQtZm9ybS9zY291dHMtZWRpdC1mb3JtLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQ0NXO0VEQVgsbUJBQUE7QUFESjs7QUFJQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFESjs7QUFJQTtFQUNJLFdBQUE7RUFDQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFESjs7QUFJQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQURKOztBQUlBO0VBQ0ksa0JBQUE7RUFDQSxPQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQURKOztBQUlBO0VBQ0ksV0FBQTtFQUNBLHdCQUFBO0VBQUEsbUJBQUE7QUFESjs7QUFJQTtFQUNJLFdBQUE7RUFDQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQURKOztBQUlBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EscUNDZlE7RURnQlIsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0NwQ1E7RURxQ1Isa0JDSlk7RURLWix5QkN4Q2U7RUR5Q2Ysa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtBQURKOztBQUlBO0VBQ0kseUJBQUE7QUFESjs7QUFHQTtFQUNJLHlCQUFBO0FBQUo7O0FBRUE7RUFDSSx5QkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQy9DWTtFRGdEWixnQkFBQTtBQUNKOztBQUVBO0VBQ0UsV0FBQTtFQUNBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsVUFBQTtFQUNBLGNBQUE7RUFDQSxxQ0MvRVU7RURnRlYsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNDakdZO0VEa0daLGtCQ3JFYztFRHNFZCx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLG9DQUFBO0FBQ0Y7O0FBR0E7RUFDSTtJQUNJLGVBQUE7RUFBTjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3JjL3ZhcmlhYmxlcy5zY3NzJztcclxuXHJcbi5sLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRhcHAtYmctY29sb3I7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG59XHJcblxyXG4ubC1sb2FkaW5nLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbn1cclxuXHJcbi5sLWNvbnRlbnQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAwIDE2cHg7XHJcbn1cclxuXHJcbi5sLWhlYWRlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDU2cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5sLWJhY2staWNvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDIwLjI0cHg7XHJcbiAgICBoZWlnaHQ6IDEzLjVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG59XHJcblxyXG4ubC1mb3JtIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxufVxyXG5cclxuLmwtdG9nZ2xlLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbn1cclxuXHJcbi5sLW9wdGlvbiB7XHJcbiAgICB3aWR0aDogNDclO1xyXG4gICAgaGVpZ2h0OiA1NnB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDAgMTZweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LWZhbWlseTogJHRleHQtZm9udDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICBjb2xvcjogJHRleHQtZGFyaztcclxuICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3I7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogMC4xcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmwtYWN0aXZlLXNlbGwge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgJHByaW1hcnktZ3JlZW47XHJcbn1cclxuLmwtYWN0aXZlLWJ1eSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkcHJpbWFyeS1yZWQ7XHJcbn1cclxuLmwtYWN0aXZlIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICRwcmltYXJ5LWNvbG9yO1xyXG59XHJcblxyXG4ubC1pY29uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxNnB4O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5sLWluZm8tY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxufVxyXG5cclxuLmwtYnV0dG9ucy1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG59XHJcblxyXG4ubC1tYXAtaG9sZGVyIHtcclxuICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmwtcHVibGljLXRvZ2dsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBtYXJnaW46IDE2cHggMDtcclxufVxyXG5cclxuLmwtcHVibGljLWNhcmQtc2VsbCxcclxuLmwtcHVibGljLWNhcmQtYnV5IHtcclxuICB3aWR0aDogNTAlO1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG4gIGZvbnQtZmFtaWx5OiAkdGV4dC1mb250O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgY29sb3I6ICRtZWRpdW0tYmx1ZTtcclxuICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuICBib3JkZXI6IHNvbGlkIDFweCAkbWVkaXVtLWJsdWU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICB0cmFuc2l0aW9uOiAwLjFzIGVhc2UtaW4tb3V0O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiA4cHggMTZweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbn1cclxuXHJcbi5sLWFjdGl2ZSB7XHJcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzQ2cHgpIHtcclxuICAgIC5sLXNhdmUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxufVxyXG4iLCIvLyBUZXh0XHJcbiRhcHAtZm9udDogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4kYXBwLWlucHV0LWZvbnQ6ICdNdWxpc2gnLCBzYW5zLXNlcmlmO1xyXG4kYXBwLWZvbnQtYmxhY2s6ICMzNDM0MzQ7XHJcbiRhcHAtdGV4dC1ncmV5OiAjNzA3MDcwO1xyXG4kYXBwLWZvbnQtaW5wdXQtcGxhY2Vob2xkZXI6IHJnYmEoMzAsIDQ4LCAzNywgMC41Nik7XHJcbiRhcHAtZm9ybS1pbmZvLWNvbG9yOiAjYWZhZmFmO1xyXG5cclxuLy8gQ29sb3JzXHJcbiRhcHAtYmctY29sb3I6ICNmOWY5ZmM7XHJcbiRhcHAtYnV5aW5nLXJlZDogI2U3NmY1MTtcclxuJGFwcC1zZWxsaW5nLWdyZWVuOiAjN2ZhOTk1O1xyXG4kYXBwLWlucHV0LWJnLWNvbG9yOiAjZTZlNmU2O1xyXG4kYXBwLWJvdHRvbS1uYXYtaXRlbS1iZzogI2U1ZWZlOTtcclxuJGFwcC10YWJzLW1hcmtldHBsYWNlLWdyZWVuOiAjMjg1ZDYwO1xyXG4kYXBwLXRhYnMtbmVnb3RpYXRpb25zLWJsdWU6ICM0ZjllYmQ7XHJcbiRhcHAtbm90aWZpY2F0aW9uLXJlZDogI2E1M2E0YTtcclxuXHJcbi8vIEdyYWRpZW50c1xyXG4kYXBwLXNlbGxpbmctZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICM5OGI0YTcsICM0YTZlNWUpO1xyXG4kYXBwLWJ1eWluZy1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgI2RmOGE3NSwgI2EyNTMzZik7XHJcbiRhcHAtc2VsbGluZy1jYXJkLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjODVhZTliLCAjNzM5ZThhKTtcclxuJGFwcC1idXlpbmctY2FyZC1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgJGFwcC1idXlpbmctcmVkLCAjYzc1ZDQzKTtcclxuXHJcbi8vIEJ1dHRvbnNcclxuJGFwcC1wcmltYXJ5LWJ1dHRvbi1iZy1jb2xvcjogIzMxYTA1ZjtcclxuJGFwcC1zZWNvbmRhcnktYnV0dG9uLWJnLWNvbG9yOiAjZTVlNWU1O1xyXG4kYXBwLWRlbGV0ZS1idXR0b24tcmVkOiAjZDM0NTViO1xyXG5cclxuLy8gT3RoZXJcclxuJGFwcC1ib3JkZXItcmFkaXVzOiA4cHg7XHJcbiRhcHAtYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wOCkgIWltcG9ydGFudDtcclxuXHJcbi8vICNyZWdpb24gTWF0Y2ggRXhjaGFuZ2VcclxuXHJcbi8vICNyZWdpb24gQ29sb3JzXHJcblxyXG4kYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuJGJhY2tncm91bmQtY29sb3ItZ3JleTogI2Y1ZjVmNTtcclxuJHRleHQtZGFyazogIzQwNDA0MDtcclxuJHRleHQtcGxhY2Vob2xkZXI6ICM4YzhjOGM7XHJcbiRwcmltYXJ5LWNvbG9yOiAjNDA3ZWY4O1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjZTVlZGZkO1xyXG4kbWVkaXVtLWJsdWU6ICM4ZDllYzU7XHJcbiRwcmltYXJ5LWdyZWVuOiAjMWNhZjdlO1xyXG4kc2Vjb25kYXJ5LWdyZWVuOiAjZTdmN2YwO1xyXG4kcHJpbWFyeS1yZWQ6ICNkMjMwM2Q7XHJcbiRzZWNvbmRhcnktcmVkOiAjZjdlOGU3O1xyXG4kaW5wdXQtYm9yZGVyOiAjZTJlOGYwO1xyXG4kZXJyb3ItbWVzc2FnZTogI2IxMTUwYTtcclxuJGRpc2FibGVkLWNvbG9yOiAjY2JjYmNiO1xyXG5cclxuLy8gI2VuZHJlZ2lvblxyXG5cclxuLy8gI3JlZ2lvbiBUZXh0XHJcblxyXG4kdGV4dC1mb250OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiRmb250LXdlaWdodC1ib2xkOiA3MDA7XHJcbiRmb250LXdlaWdodC1zZW1pLWJvbGQ6IDYwMDtcclxuJGZvbnQtd2VpZ2h0LXJlZ3VsYXI6IDUwMDtcclxuJGZvbnQtd2VpZ2h0LWxpZ2h0OiA0MDA7XHJcblxyXG4vLyAjZW5kcmVnaW9uXHJcblxyXG4vLyAjcmVnaW9uIEJ1dHRvbnNcclxuXHJcbiRidXR0b24tZm9udC13ZWlnaHQ6IDYwMDtcclxuXHJcbi8vICNlbmRyZWdpb25cclxuXHJcbi8vICNyZWdpb24gT3RoZXJcclxuXHJcbiRib3JkZXItcmFkaXVzOiA0cHg7XHJcblxyXG4vLyAjZW5kcmVnaW9uXHJcblxyXG4vLyAjZW5kcmVnaW9uXHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 5648:
/*!*********************************************************************************!*\
  !*** ./src/app/features/scouts/components/scouts-form/scouts-form.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScoutsFormComponent: () => (/* binding */ ScoutsFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var src_app_core_ngrx_reducers_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/ngrx/reducers/index */ 7032);
/* harmony import */ var src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/helpers/index.actions */ 5626);
/* harmony import */ var _core_ngrx_crop_crop_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../core/ngrx/crop/crop.selectors */ 1923);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 1527);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 274);
/* harmony import */ var src_app_core_models_queryModels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/models/queryModels */ 1417);
/* harmony import */ var _core_helpers_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../core/helpers/constants */ 9487);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var _googlemaps_js_api_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @googlemaps/js-api-loader */ 8914);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _shared_components_crop_categories_crop_categories_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/crop-categories/crop-categories.component */ 4934);
/* harmony import */ var _angular_material_legacy_tabs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/legacy-tabs */ 3101);
/* harmony import */ var _angular_material_legacy_autocomplete__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/legacy-autocomplete */ 2718);
/* harmony import */ var _angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/legacy-core */ 773);
/* harmony import */ var _angular_material_legacy_slider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/legacy-slider */ 2098);
/* harmony import */ var _angular_material_legacy_progress_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/legacy-progress-spinner */ 3401);
/* harmony import */ var _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/legacy-select */ 2198);
/* harmony import */ var _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/legacy-button */ 8654);
/* harmony import */ var _angular_magic_ngx_gp_autocomplete__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular-magic/ngx-gp-autocomplete */ 4711);
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/google-maps */ 8684);
// #region Angular Imports


// #endregion
// #region NgRx Imports




// #endregion
// #region RxJs Imports





















function ScoutsFormComponent_img_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ScoutsFormComponent_img_2_Template_img_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r10.handleAnimateStepperHelper("previous"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ScoutsFormComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ScoutsFormComponent_ng_template_3_Template_img_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r12.handleBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ScoutsFormComponent_div_10_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ScoutsFormComponent_div_10_button_3_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r17);
      const creatorType_r15 = restoredCtx.$implicit;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r16.handleToggleCreatorType(creatorType_r15));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const creatorType_r15 = ctx.$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("l-type-option-selected", ctx_r14.scout.creatorType === creatorType_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", creatorType_r15, " ");
  }
}
function ScoutsFormComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 15)(1, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Which best describes you?");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, ScoutsFormComponent_div_10_button_3_Template, 2, 3, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r3.creatorTypes);
  }
}
function ScoutsFormComponent_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "mat-progress-spinner", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("diameter", 40);
  }
}
function ScoutsFormComponent_div_11_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-crop-categories", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("$changeCropCategoryEvent", function ScoutsFormComponent_div_11_ng_template_2_Template_app_crop_categories__changeCropCategoryEvent_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r21.handleChangeCropCategory($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("cropCategories", ctx_r20.cropCategories);
  }
}
function ScoutsFormComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ScoutsFormComponent_div_11_div_1_Template, 2, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ScoutsFormComponent_div_11_ng_template_2_Template, 1, 1, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](3);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r4.isLoading)("ngIfElse", _r19);
  }
}
const _c0 = function (a0, a1) {
  return {
    "l-active-sell": a0,
    "l-active-buy": a1
  };
};
function ScoutsFormComponent_div_12_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ScoutsFormComponent_div_12_button_4_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r27);
      const scoutType_r25 = restoredCtx.$implicit;
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r26.handleToggleScoutType(scoutType_r25));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const scoutType_r25 = ctx.$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](3, _c0, ctx_r23.scout.scoutType === scoutType_r25 && scoutType_r25 === "Sell", ctx_r23.scout.scoutType === scoutType_r25 && scoutType_r25 === "Buy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", scoutType_r25, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx_r23.scout.scoutType === scoutType_r25 && scoutType_r25 === "Sell" ? "./assets/icons/sell-selected-icon.svg" : ctx_r23.scout.scoutType === scoutType_r25 && scoutType_r25 === "Buy" ? "./assets/icons/buy-selected-icon.svg" : "./assets/icons/unselected-icon.svg", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
  }
}
function ScoutsFormComponent_div_12_mat_option_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const crop_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", crop_r28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](crop_r28.name);
  }
}
function ScoutsFormComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 15)(1, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Scout the Market");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, ScoutsFormComponent_div_12_button_4_Template, 3, 6, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 27)(6, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "What Scout are you interested in?");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "mat-select", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ScoutsFormComponent_div_12_Template_mat_select_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r30);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r29.scout.crop = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, ScoutsFormComponent_div_12_mat_option_9_Template, 2, 2, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r5.scoutTypes);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r5.scout.crop)("compareWith", ctx_r5.compareSelectionsHelper);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r5.crops);
  }
}
function ScoutsFormComponent_div_13_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 36)(1, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Scout the whole of South Africa");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 38)(4, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ScoutsFormComponent_div_13_div_1_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r34);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r33.handleToggleIsSouthAfrica(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, " Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ScoutsFormComponent_div_13_div_1_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r34);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r35.handleToggleIsSouthAfrica(false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, " No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("l-active-sa", ctx_r31.scout.inSouthAfrica);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx_r31.scout.inSouthAfrica ? "./assets/icons/selected-blue-icon.svg" : "./assets/icons/unselected-icon.svg", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("l-active-not-sa", !ctx_r31.scout.inSouthAfrica);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", !ctx_r31.scout.inSouthAfrica ? "./assets/icons/selected-blue-icon.svg" : "./assets/icons/unselected-icon.svg", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
  }
}
function ScoutsFormComponent_div_13_div_2_mat_tab_group_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Scout Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ScoutsFormComponent_div_13_div_2_mat_tab_group_1_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Scout Silo");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Silo");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ScoutsFormComponent_div_13_div_2_mat_tab_group_1_mat_option_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const filteredDeliveryPoint_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", filteredDeliveryPoint_r45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", filteredDeliveryPoint_r45.name, " ");
  }
}
function ScoutsFormComponent_div_13_div_2_mat_tab_group_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-tab-group", 52)(1, "mat-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ScoutsFormComponent_div_13_div_2_mat_tab_group_1_ng_template_2_Template, 4, 0, "ng-template", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 54)(4, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "img", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, " Tell the Market where your crop is situated using a location. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 55)(9, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ScoutsFormComponent_div_13_div_2_mat_tab_group_1_Template_input_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r47);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r46.scout.town = $event);
    })("onAddressChange", function ScoutsFormComponent_div_13_div_2_mat_tab_group_1_Template_input_onAddressChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r47);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r48.handleSelectLocation($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "mat-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, ScoutsFormComponent_div_13_div_2_mat_tab_group_1_ng_template_11_Template, 4, 0, "ng-template", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 54)(13, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "img", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, " Tell the Market where your crop is situated using a silo. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 55)(18, "input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ScoutsFormComponent_div_13_div_2_mat_tab_group_1_Template_input_ngModelChange_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r47);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r49.searchTerm = $event);
    })("ngModelChange", function ScoutsFormComponent_div_13_div_2_mat_tab_group_1_Template_input_ngModelChange_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r47);
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r50.handleSearchTermChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "mat-autocomplete", 58, 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("optionSelected", function ScoutsFormComponent_div_13_div_2_mat_tab_group_1_Template_mat_autocomplete_optionSelected_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r47);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r51.handleSelectDeliveryPoint($event.option.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, ScoutsFormComponent_div_13_div_2_mat_tab_group_1_mat_option_21_Template, 2, 2, "mat-option", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](20);
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r36.scout.town)("options", ctx_r36.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r36.searchTerm)("matAutocomplete", _r43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r36.filteredDeliveryPoints);
  }
}
function ScoutsFormComponent_div_13_div_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 54)(1, "label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Scout By Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "img", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, " Tell the Market where your crop is situated using a location. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 55)(8, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ScoutsFormComponent_div_13_div_2_ng_template_2_Template_input_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r53);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r52.scout.town = $event);
    })("onAddressChange", function ScoutsFormComponent_div_13_div_2_ng_template_2_Template_input_onAddressChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r53);
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r54.handleSelectLocation($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r38.scout.town)("options", ctx_r38.options);
  }
}
function ScoutsFormComponent_div_13_div_2_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 65)(1, "div", 66)(2, "label", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Delivery Radius Km");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "label", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "mat-slider", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ScoutsFormComponent_div_13_div_2_div_4_Template_mat_slider_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r56);
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r55.scout.radius = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx_r39.scout.radius, " Km");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r39.scout.radius);
  }
}
const _c1 = function (a0, a1) {
  return {
    lat: a0,
    lng: a1
  };
};
const _c2 = function () {
  return {
    mapTypeId: "hybrid",
    gestureHandling: "cooperative"
  };
};
const _c3 = function () {
  return {
    draggable: true
  };
};
function ScoutsFormComponent_div_13_div_2_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 69)(1, "google-map", 70)(2, "map-marker", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("dragend", function ScoutsFormComponent_div_13_div_2_div_12_Template_map_marker_dragend_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r58);
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r57.handleDragEnd($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("zoom", ctx_r40.zoom)("center", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](5, _c1, ctx_r40.scout.location.lat, ctx_r40.scout.location.lng))("options", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](8, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("position", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](9, _c1, ctx_r40.scout.location.lat, ctx_r40.scout.location.lng))("options", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](12, _c3));
  }
}
const _c4 = function (a0, a1) {
  return {
    "l-fade-out": a0,
    "l-fade-in": a1
  };
};
function ScoutsFormComponent_div_13_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ScoutsFormComponent_div_13_div_2_mat_tab_group_1_Template, 22, 5, "mat-tab-group", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ScoutsFormComponent_div_13_div_2_ng_template_2_Template, 9, 2, "ng-template", null, 44, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, ScoutsFormComponent_div_13_div_2_div_4_Template, 7, 2, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 46)(6, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "img", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Move the pin to your point of production.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, ScoutsFormComponent_div_13_div_2_div_12_Template, 3, 13, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](13, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](3);
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](8, _c4, ctx_r32.animateFadeOut, ctx_r32.animateFadeIn));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r32.userIsAuthenticated)("ngIfElse", _r37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r32.scout.scoutType === "Buy");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx_r32.scout.scoutType === "Sell" ? "l-margin" : "mt-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](13, 6, ctx_r32.apiLoaded));
  }
}
function ScoutsFormComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ScoutsFormComponent_div_13_div_1_Template, 10, 6, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ScoutsFormComponent_div_13_div_2_Template, 14, 11, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r6.scout.scoutType === "Buy");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r6.scout.inSouthAfrica);
  }
}
function ScoutsFormComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "div", 72);
  }
  if (rf & 2) {
    const index_r59 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("l-step-active", ctx_r7.stepperIndex === index_r59);
  }
}
function ScoutsFormComponent_ng_container_16_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ScoutsFormComponent_ng_container_16_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r64);
      const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r63.handleAnimateStepperHelper("next"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx_r60.stepperIndex === 2 && !ctx_r60.scout.crop.id ? "g-disabled-button" : "g-primary-button")("disabled", ctx_r60.stepperIndex === 2 && !ctx_r60.scout.crop.id);
  }
}
const _c5 = function (a0, a1) {
  return {
    "g-primary-button": a0,
    "g-disabled-button": a1
  };
};
function ScoutsFormComponent_ng_container_16_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ScoutsFormComponent_ng_container_16_ng_template_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r66);
      const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r65.handleNavigateToSearchResults());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Scout the Market ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](2, _c5, ctx_r62.scout.inSouthAfrica || !ctx_r62.scout.inSouthAfrica && ctx_r62.scout.town !== "", !ctx_r62.scout.inSouthAfrica && ctx_r62.scout.town === ""))("disabled", !ctx_r62.scout.inSouthAfrica && ctx_r62.scout.town === "");
  }
}
function ScoutsFormComponent_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ScoutsFormComponent_ng_container_16_button_1_Template, 2, 2, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ScoutsFormComponent_ng_container_16_ng_template_2_Template, 2, 5, "ng-template", null, 74, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](3);
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r8.stepperIndex !== 3)("ngIfElse", _r61);
  }
}
const _c6 = function (a0, a1) {
  return {
    "mt-2": a0,
    "mb-0": a1
  };
};
function ScoutsFormComponent_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ScoutsFormComponent_button_17_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r68);
      const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r67.handleRouteToSignIn());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Skip To Sign In ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](1, _c6, ctx_r9.stepperIndex !== 1, ctx_r9.stepperIndex === 1));
  }
}
const _c7 = function (a0, a1) {
  return {
    "l-show-slideIn": a0,
    "l-show-slideOut": a1
  };
};
const _c8 = function () {
  return [0, 1, 2, 3];
};
// #endregion
class ScoutsFormComponent {
  constructor(loader, route, router, store) {
    this.loader = loader;
    this.route = route;
    this.router = router;
    this.store = store;
    this.stepperIndex = 0;
    this.animateForwards = false;
    this.animateBackwards = false;
    this.animateFadeOut = false;
    this.animateFadeIn = false;
    this.scout = new src_app_core_models_queryModels__WEBPACK_IMPORTED_MODULE_3__.ScoutClass();
    this.creatorTypes = ['Farmer', 'Offtaker (Processor)', 'Trader'];
    this.scoutTypes = ['Sell', 'Buy'];
    this.searchTerm = '';
    this.publicDeliveryPoints = [];
    this.filteredDeliveryPoints = [];
    this.options = {
      types: ['(regions)']
    };
    this.zoom = 4;
    this.isLoading = true;
    this.userIsAuthenticated = false;
    this.silosSubscriptionIsNotOpen = true;
    this.destroyed$ = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    this.apiLoaded = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject(false);
  }
  ngOnInit() {
    this.loader.importLibrary('maps').then(({
      Map
    }) => {
      this.apiLoaded?.next(true);
    }).catch(e => {
      // do something
    });
    this.route.queryParams.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.take)(1)).subscribe(params => {
      const paramsLength = Object.keys(params).length;
      if (paramsLength !== 0 && paramsLength !== 1 && paramsLength !== 10) {
        this.router.navigate([_core_helpers_constants__WEBPACK_IMPORTED_MODULE_4__.SCOUT_CREATE_ROUTE]);
      } else if (paramsLength === 1) {
        this.scout.scoutType = params.scoutType;
      } else if (paramsLength === 10) {
        this.scout.creatorType = params.creatorType;
        this.scout.scoutType = params.scoutType;
        this.scout.crop.id = +params.cropId;
        this.scout.crop.name = params.cropName;
        this.scout.inSouthAfrica = params.inSouthAfrica === 'true';
        if (!this.scout.inSouthAfrica) {
          this.scout.googlePlaceId = params.googlePlaceId;
          this.zoom = 13;
          this.scout.town = params.town;
          this.scout.location.lat = +params.lat;
          this.scout.location.lng = +params.lng;
          this.scout.radius = +params.radius;
        }
      }
    });
    this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_10__.select)(_core_ngrx_crop_crop_selectors__WEBPACK_IMPORTED_MODULE_2__.selectCropByCategories), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroyed$)).subscribe(cropCategories => {
      if (cropCategories.length) {
        this.cropCategories = cropCategories;
        this.isLoading = false;
      }
    });
    this.store.dispatch(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_1__.cropActions.ReqAllCrops());
    this.store.dispatch(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_1__.cropActions.ReqCropCategories());
    this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_10__.select)(src_app_core_ngrx_reducers_index__WEBPACK_IMPORTED_MODULE_0__.authSelectors.getUser), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroyed$)).subscribe(user => {
      if (user && Object.keys(user).length) {
        this.userIsAuthenticated = true;
        this.silosSubscriptionIsNotOpen && this.getSilosHelper();
      }
    });
  }
  ngOnDestroy() {
    this.destroyed$.next();
  }
  handleChangeCropCategory(id) {
    this.cropCategoryId = id;
    this.cropCategoryChangeHelper();
    this.handleAnimateStepperHelper('next');
  }
  handleNavigateToDashboard() {
    this.router.navigate([_core_helpers_constants__WEBPACK_IMPORTED_MODULE_4__.SCOUTS_ROUTE]);
  }
  handleAnimateStepperHelper(direction) {
    direction === 'previous' ? this.stepperIndex -= 1 : this.stepperIndex += 1;
    this[`animate${direction === 'previous' ? 'Backwards' : 'Forwards'}`] = true;
    setTimeout(() => {
      this[`animate${direction === 'previous' ? 'Backwards' : 'Forwards'}`] = false;
    }, 500);
  }
  handleBack() {
    this.userIsAuthenticated ? this.router.navigate([_core_helpers_constants__WEBPACK_IMPORTED_MODULE_4__.SCOUTS_ROUTE]) : this.router.navigate([_core_helpers_constants__WEBPACK_IMPORTED_MODULE_4__.ONBOARDING_ROUTE]);
  }
  handleRouteToSignIn() {
    this.router.navigate([_core_helpers_constants__WEBPACK_IMPORTED_MODULE_4__.SIGNIN_ROUTE]);
  }
  handleToggleCreatorType(creatorType) {
    if (creatorType !== this.scout.creatorType) {
      this.scout.creatorType = creatorType;
    }
  }
  handleToggleScoutType(scoutType) {
    if (this.scout.scoutType !== scoutType) {
      this.scout.scoutType = scoutType;
      if (this.scout.scoutType === 'Sell' && this.scout.inSouthAfrica) {
        this.scout.inSouthAfrica = false;
      }
    }
  }
  handleToggleIsSouthAfrica(option) {
    if (this.scout.inSouthAfrica !== option) {
      if (option) {
        this.animateFadeOut = true;
        setTimeout(() => {
          this.scout.inSouthAfrica = option;
          this.scout.radius = null;
          this.animateFadeOut = false;
        }, 290);
      }
      if (!option) {
        this.scout.inSouthAfrica = option;
        this.scout.radius = 50;
        this.animateFadeIn = true;
        setTimeout(() => {
          this.animateFadeIn = false;
        }, 300);
      }
    }
  }
  handleSelectLocation($event) {
    this.searchTerm = '';
    this.scout.town = $event.formatted_address;
    this.scout.googlePlaceId = $event.place_id;
    this.scout.location.lat = $event.geometry.location.lat();
    this.scout.location.lng = $event.geometry.location.lng();
    this.zoom = 13;
  }
  handleSearchTermChange(searchTerm) {
    if (typeof searchTerm === 'string') {
      this.filteredDeliveryPoints = this.publicDeliveryPoints.filter(filtered => {
        return filtered.name.toLocaleLowerCase().includes(this.searchTerm.toLocaleLowerCase());
      });
    }
  }
  handleSelectDeliveryPoint(deliveryPoint) {
    this.scout.town = deliveryPoint.town;
    this.scout.location = deliveryPoint.location;
    this.searchTerm = deliveryPoint.name;
  }
  handleDragEnd($event) {
    this.scout.location.lat = $event.latLng.lat();
    this.scout.location.lng = $event.latLng.lng();
  }
  handleNavigateToSearchResults() {
    let scoutParams = {
      creatorType: this.scout.creatorType,
      scoutType: this.scout.scoutType,
      cropId: this.scout.crop.id,
      cropName: this.scout.crop.name,
      inSouthAfrica: this.scout.inSouthAfrica,
      googlePlaceId: this.scout.googlePlaceId,
      town: this.scout.inSouthAfrica ? 'South Africa' : this.scout.town.split(',')[0],
      lat: this.scout.location.lat,
      lng: this.scout.location.lng,
      radius: this.scout.radius
    };
    this.router.navigate([_core_helpers_constants__WEBPACK_IMPORTED_MODULE_4__.SCOUT_SEARCH_RESULT_ROUTE], {
      queryParams: scoutParams
    });
  }
  getSilosHelper() {
    this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_10__.select)(src_app_core_ngrx_reducers_index__WEBPACK_IMPORTED_MODULE_0__.deliveryPointsSelectors.getManageDeliveryPointDetails), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroyed$)).subscribe(({
      publicDeliveryPoints
    }) => {
      if (publicDeliveryPoints.length) {
        this.publicDeliveryPoints = publicDeliveryPoints;
        this.filteredDeliveryPoints = publicDeliveryPoints;
      }
    });
    this.silosSubscriptionIsNotOpen = false;
    this.store.dispatch(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_1__.deliveryPointActions.ReqManagementData({
      executedTime: Date.now()
    }));
  }
  cropCategoryChangeHelper() {
    this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_10__.select)(_core_ngrx_crop_crop_selectors__WEBPACK_IMPORTED_MODULE_2__.selectCropByCategoryId, this.cropCategoryId), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroyed$)).subscribe(crops => {
      this.crops = crops;
    });
  }
  compareSelectionsHelper(selection1, selection2) {
    return selection1.id === selection2?.id;
  }
  static #_ = this.ɵfac = function ScoutsFormComponent_Factory(t) {
    return new (t || ScoutsFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_googlemaps_js_api_loader__WEBPACK_IMPORTED_MODULE_5__.Loader), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_10__.Store));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: ScoutsFormComponent,
    selectors: [["app-scouts-form"]],
    decls: 18,
    vars: 16,
    consts: [[1, "l-container", "g-fade-in"], [1, "l-header"], ["class", "l-back-icon", "src", "./assets/icons/back-arrow-icon.svg", "alt", "back-arrow-icon", 3, "click", 4, "ngIf", "ngIfElse"], ["showNavigateToDashboardIcon", ""], [1, "g-text-h2-dark"], [1, "l-content"], [1, "l-stepper"], [1, "l-step-holder", 3, "ngClass"], ["class", "l-step", 4, "ngIf"], ["class", "l-step l-step-wide", 4, "ngIf"], [1, "l-step-and-nav-container"], ["class", "l-stepper-progress-step", 3, "l-step-active", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "g-secondary-button", 3, "ngClass", "click", 4, "ngIf"], ["src", "./assets/icons/back-arrow-icon.svg", "alt", "back-arrow-icon", 1, "l-back-icon", 3, "click"], [1, "l-step"], [1, "g-text-p-dark", "mb-3"], ["mat-flat-button", "", "class", "l-type-option", 3, "l-type-option-selected", "click", 4, "ngFor", "ngForOf"], ["mat-flat-button", "", 1, "l-type-option", 3, "click"], [1, "l-step", "l-step-wide"], [4, "ngIf", "ngIfElse"], ["showCategories", ""], ["mode", "indeterminate", 1, "g-mat-progress-spinner-blue", 3, "diameter"], [3, "cropCategories", "$changeCropCategoryEvent"], [1, "w-100", "g-form-label"], [1, "l-scout-type-container"], ["mat-flat-button", "", "class", "l-scout-option g-text-p-dark", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "g-form-input-group"], [1, "g-form-label"], ["name", "crop", "required", "", 1, "g-form-select", "mt-2", 3, "ngModel", "compareWith", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-flat-button", "", 1, "l-scout-option", "g-text-p-dark", 3, "ngClass", "click"], ["alt", "selected-icon", 1, "l-scout-option-icon", 3, "src"], [3, "value"], ["class", "w-100", 4, "ngIf"], ["class", "l-location-container", 3, "ngClass", 4, "ngIf"], [1, "w-100"], [1, "w-100", "g-text-label", "mb-3"], [1, "l-sa-container"], ["mat-flat-button", "", 1, "l-sa-option", 3, "click"], ["src", "./assets/icons/unselected-icon.svg", "alt", "selected-icon", 1, "l-sa-icon", 3, "src"], ["alt", "selected-icon", 1, "l-sa-icon", 3, "src"], [1, "l-location-container", 3, "ngClass"], ["class", "g-mat-tabs-scout mt-3", 4, "ngIf", "ngIfElse"], ["showScoutByLocation", ""], ["class", "g-form-input-group l-margin", 4, "ngIf"], [1, "g-form-input-group", "d-flex", "flex-column", 3, "ngClass"], [1, "g-text-label"], [1, "l-info-container"], ["src", "./assets/icons/info-icon-grey.svg", "alt", "info-icon-grey", 1, "g-form-info-icon", "mt-1"], [1, "g-text-p-small-grey", "m-0"], ["class", "l-map-holder", 4, "ngIf"], [1, "g-mat-tabs-scout", "mt-3"], ["mat-tab-label", ""], [1, "d-flex", "flex-column", "mt-3"], [1, "g-text-input-container"], ["type", "text", "name", "town", "ngx-gp-autocomplete", "", "placeholder", "", "autocomplete", "off", "required", "", 1, "g-input-text-no-icon", 3, "ngModel", "options", "ngModelChange", "onAddressChange"], [1, "g-input-text-no-icon", 3, "ngModel", "matAutocomplete", "ngModelChange"], [1, "g-mat-autocomplete", 3, "optionSelected"], ["auto", "matAutocomplete"], ["class", "g-mat-option-text", 3, "value", 4, "ngFor", "ngForOf"], [1, "l-large-view"], [1, "l-small-view"], [1, "g-mat-option-text", 3, "value"], [1, "g-text-label", "mb-2"], [1, "g-form-input-group", "l-margin"], [1, "l-delivery-radius-container"], [1, "g-text-label", "l-no-height"], ["min", "25", "max", "300", "step", "25", "name", "radius", 1, "g-mat-slider", 3, "ngModel", "ngModelChange"], [1, "l-map-holder"], [1, "g-delivery-form-map", 3, "zoom", "center", "options"], [3, "position", "options", "dragend"], [1, "l-stepper-progress-step"], ["mat-flat-button", "", 3, "ngClass", "disabled", "click", 4, "ngIf", "ngIfElse"], ["finalButton", ""], ["mat-flat-button", "", 3, "ngClass", "disabled", "click"], [1, "g-secondary-button", 3, "ngClass", "click"]],
    template: function ScoutsFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ScoutsFormComponent_img_2_Template, 1, 0, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, ScoutsFormComponent_ng_template_3_Template, 1, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Creating a Scout");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, ScoutsFormComponent_div_10_Template, 4, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, ScoutsFormComponent_div_11_Template, 4, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, ScoutsFormComponent_div_12_Template, 10, 4, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, ScoutsFormComponent_div_13_Template, 3, 2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, ScoutsFormComponent_div_15_Template, 1, 2, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, ScoutsFormComponent_ng_container_16_Template, 4, 2, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, ScoutsFormComponent_button_17_Template, 2, 4, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("l-remove-padding-bottom", ctx.stepperIndex === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.stepperIndex !== 0)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](12, _c7, ctx.animateForwards, ctx.animateBackwards));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.stepperIndex === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.stepperIndex === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.stepperIndex === 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.stepperIndex === 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](15, _c8));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.stepperIndex !== 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.userIsAuthenticated);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel, _shared_components_crop_categories_crop_categories_component__WEBPACK_IMPORTED_MODULE_6__.CropCategoriesComponent, _angular_material_legacy_tabs__WEBPACK_IMPORTED_MODULE_15__.MatLegacyTabGroup, _angular_material_legacy_tabs__WEBPACK_IMPORTED_MODULE_15__.MatLegacyTabLabel, _angular_material_legacy_tabs__WEBPACK_IMPORTED_MODULE_15__.MatLegacyTab, _angular_material_legacy_autocomplete__WEBPACK_IMPORTED_MODULE_16__.MatLegacyAutocomplete, _angular_material_legacy_autocomplete__WEBPACK_IMPORTED_MODULE_16__.MatLegacyAutocompleteTrigger, _angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_17__.MatLegacyOption, _angular_material_legacy_slider__WEBPACK_IMPORTED_MODULE_18__.MatLegacySlider, _angular_material_legacy_progress_spinner__WEBPACK_IMPORTED_MODULE_19__.MatLegacyProgressSpinner, _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_20__.MatLegacySelect, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_21__.MatLegacyButton, _angular_magic_ngx_gp_autocomplete__WEBPACK_IMPORTED_MODULE_22__.NgxGpAutocompleteDirective, _angular_google_maps__WEBPACK_IMPORTED_MODULE_23__.GoogleMap, _angular_google_maps__WEBPACK_IMPORTED_MODULE_23__.MapMarker, _angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe],
    styles: [".l-container[_ngcontent-%COMP%], .l-content[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #f5f5f5;\n  overflow: auto;\n}\n\n.l-content[_ngcontent-%COMP%] {\n  padding: 0px 16px 16px 16px;\n}\n\n.l-remove-padding-bottom[_ngcontent-%COMP%] {\n  padding-bottom: 0;\n}\n\n.l-header[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  min-height: 56px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: white;\n}\n\n.l-back-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  width: 20.24px;\n  height: 13.5px;\n  margin-left: 16px;\n}\n\n.l-step-holder[_ngcontent-%COMP%] {\n  min-width: 100%;\n  max-width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 16px 0;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n\n.l-show-slideIn[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_showSlideIn 0.5s;\n}\n\n@keyframes _ngcontent-%COMP%_showSlideIn {\n  0% {\n    margin-left: 50%;\n    opacity: 0.5;\n  }\n  100% {\n    margin-left: 0;\n    opacity: 1;\n  }\n}\n.l-show-slideOut[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_showSlideOut 0.5s;\n}\n\n@keyframes _ngcontent-%COMP%_showSlideOut {\n  0% {\n    margin-left: -50%;\n    opacity: 0.5;\n  }\n  100% {\n    margin-left: 0;\n    opacity: 1;\n  }\n}\n.l-step[_ngcontent-%COMP%] {\n  width: 100%;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.l-step[_ngcontent-%COMP%]:last-child {\n  max-height: 100%;\n}\n\n.l-step-wide[_ngcontent-%COMP%] {\n  min-width: 100%;\n}\n\n.l-type-option[_ngcontent-%COMP%], .l-type-option-selected[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 56px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 4px;\n  background-color: #ffffff;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  color: #404040;\n  margin-bottom: 24px;\n  outline: none;\n  cursor: pointer;\n  transition: 0.1s ease-in-out;\n}\n\n.l-type-option-selected[_ngcontent-%COMP%] {\n  background-color: #407ef8;\n  color: #ffffff;\n}\n\n.l-scout-type-container[_ngcontent-%COMP%], .l-sa-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 48px;\n}\n\n.l-sa-container[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.l-scout-option[_ngcontent-%COMP%], .l-sa-option[_ngcontent-%COMP%] {\n  position: relative;\n  width: 47%;\n  height: 44px;\n  padding: 0 16px;\n  text-align: left;\n  font-family: \"Mulish\", sans-serif;\n  font-weight: 600;\n  letter-spacing: normal;\n  line-height: 21px;\n  color: #404040;\n  border-radius: 4px;\n  background-color: #ffffff;\n  outline: none;\n  cursor: pointer;\n}\n\n.l-scout-option[_ngcontent-%COMP%] {\n  transition: 0.1s ease-in-out;\n  height: 56px;\n}\n\n.l-active-sell[_ngcontent-%COMP%] {\n  border: solid 1px #1caf7e !important;\n}\n\n.l-active-buy[_ngcontent-%COMP%] {\n  border: solid 1px #d2303d !important;\n}\n\n.l-active-sa[_ngcontent-%COMP%], .l-active-not-sa[_ngcontent-%COMP%] {\n  border: solid 1px #407ef8 !important;\n}\n\n.l-scout-option-icon[_ngcontent-%COMP%], .l-sa-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 16px;\n  width: 20px;\n  height: 20px;\n}\n\n.l-stepper[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-grow: 1;\n  overflow: hidden;\n}\n\n.l-stepper-progress-step[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background-color: #e5edfd;\n  margin-right: 4px;\n  margin-left: 4px;\n}\n\n.l-step-active[_ngcontent-%COMP%] {\n  background-color: #407ef8;\n}\n\n.l-info-container[_ngcontent-%COMP%] {\n  width: 90%;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: flex;\n  align-items: flex-start;\n  margin-bottom: 8px;\n}\n\n.l-location-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: -moz-fit-content;\n  height: fit-content;\n  padding-bottom: 16px;\n}\n\n.l-step-and-nav-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 16px;\n}\n\n.l-margin[_ngcontent-%COMP%] {\n  margin-top: 38px;\n}\n\n.l-no-height[_ngcontent-%COMP%] {\n  line-height: normal;\n}\n\n.l-delivery-radius-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.l-fade-out[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeOut 0.3s;\n}\n\n@keyframes _ngcontent-%COMP%_fadeOut {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n.l-fade-in[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.3s;\n}\n\n@keyframes _ngcontent-%COMP%_fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n.l-map-holder[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.l-large-view[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.l-small-view[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@media screen and (max-width: 346px) {\n  .l-large-view[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .l-small-view[_ngcontent-%COMP%] {\n    display: inline-block;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvc2NvdXRzL2NvbXBvbmVudHMvc2NvdXRzLWZvcm0vc2NvdXRzLWZvcm0uY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJDOEJvQjtFRDdCcEIsY0FBQTtBQURKOztBQUlBO0VBRUksMkJBQUE7QUFGSjs7QUFLQTtFQUNJLGlCQUFBO0FBRko7O0FBS0E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFGSjs7QUFLQTtFQUNJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFGSjs7QUFLQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUZKOztBQUtBO0VBQ0ksMkJBQUE7QUFGSjs7QUFLQTtFQUNJO0lBQ0ksZ0JBQUE7SUFDQSxZQUFBO0VBRk47RUFJRTtJQUNJLGNBQUE7SUFDQSxVQUFBO0VBRk47QUFDRjtBQUtBO0VBQ0ksNEJBQUE7QUFISjs7QUFNQTtFQUNJO0lBQ0ksaUJBQUE7SUFDQSxZQUFBO0VBSE47RUFLRTtJQUNJLGNBQUE7SUFDQSxVQUFBO0VBSE47QUFDRjtBQU1BO0VBQ0ksV0FBQTtFQUNBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUpKOztBQU1BO0VBQ0ksZ0JBQUE7QUFISjs7QUFNQTtFQUNJLGVBQUE7QUFISjs7QUFNQTs7RUFFSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JDOUJZO0VEK0JaLHlCQUFBO0VBQ0EscUNDaERRO0VEaURSLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNDcEVRO0VEcUVSLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtBQUhKOztBQUtBO0VBQ0kseUJDekVZO0VEMEVaLGNBQUE7QUFGSjs7QUFLQTs7RUFFSSxXQUFBO0VBQ0Esd0JBQUE7RUFBQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFGSjs7QUFJQTtFQUNJLGdCQUFBO0FBREo7O0FBSUE7O0VBRUksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQ3hJYTtFRHlJYixnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQ3ZHUTtFRHdHUixrQkN2RVk7RUR3RVoseUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQURKOztBQUdBO0VBQ0ksNEJBQUE7RUFDQSxZQUFBO0FBQUo7O0FBR0E7RUFDSSxvQ0FBQTtBQUFKOztBQUVBO0VBQ0ksb0NBQUE7QUFDSjs7QUFFQTs7RUFFSSxvQ0FBQTtBQUNKOztBQUVBOztFQUVJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQzlJYztFRCtJZCxpQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkNySlk7QURzSmhCOztBQUVBO0VBQ0ksVUFBQTtFQUNBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSTtJQUNJLFVBQUE7RUFDTjtFQUNFO0lBQ0ksVUFBQTtFQUNOO0FBQ0Y7QUFFQTtFQUNJLHNCQUFBO0FBQUo7O0FBR0E7RUFDSTtJQUNJLFVBQUE7RUFBTjtFQUVFO0lBQ0ksVUFBQTtFQUFOO0FBQ0Y7QUFHQTtFQUNJLGtCQ3pMWTtFRDBMWixnQkFBQTtBQURKOztBQUlBO0VBQ0kscUJBQUE7QUFESjs7QUFJQTtFQUNJLGFBQUE7QUFESjs7QUFJQTtFQUNJO0lBQ0ksYUFBQTtFQUROO0VBSUU7SUFDSSxxQkFBQTtFQUZOO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzcmMvdmFyaWFibGVzLnNjc3MnO1xyXG5cclxuLmwtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3ItZ3JleTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4ubC1jb250ZW50IHtcclxuICAgIEBleHRlbmQgLmwtY29udGFpbmVyO1xyXG4gICAgcGFkZGluZzogMHB4IDE2cHggMTZweCAxNnB4O1xyXG59XHJcblxyXG4ubC1yZW1vdmUtcGFkZGluZy1ib3R0b20ge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5sLWhlYWRlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDU2cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5sLWJhY2staWNvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDIwLjI0cHg7XHJcbiAgICBoZWlnaHQ6IDEzLjVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG59XHJcblxyXG4ubC1zdGVwLWhvbGRlciB7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAxNnB4IDA7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcblxyXG4ubC1zaG93LXNsaWRlSW4ge1xyXG4gICAgYW5pbWF0aW9uOiBzaG93U2xpZGVJbiAwLjVzO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNob3dTbGlkZUluIHtcclxuICAgIDAlIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNTAlO1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5sLXNob3ctc2xpZGVPdXQge1xyXG4gICAgYW5pbWF0aW9uOiBzaG93U2xpZGVPdXQgMC41cztcclxufVxyXG5cclxuQGtleWZyYW1lcyBzaG93U2xpZGVPdXQge1xyXG4gICAgMCUge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtNTAlO1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5sLXN0ZXAge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5sLXN0ZXA6bGFzdC1jaGlsZCB7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ubC1zdGVwLXdpZGUge1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubC10eXBlLW9wdGlvbixcclxuLmwtdHlwZS1vcHRpb24tc2VsZWN0ZWQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDU2cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC1mYW1pbHk6ICR0ZXh0LWZvbnQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICR0ZXh0LWRhcms7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IDAuMXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuLmwtdHlwZS1vcHRpb24tc2VsZWN0ZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLmwtc2NvdXQtdHlwZS1jb250YWluZXIsXHJcbi5sLXNhLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDQ4cHg7XHJcbn1cclxuLmwtc2EtY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5sLXNjb3V0LW9wdGlvbixcclxuLmwtc2Etb3B0aW9uIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiA0NyU7XHJcbiAgICBoZWlnaHQ6IDQ0cHg7XHJcbiAgICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC1mYW1pbHk6ICRhcHAtaW5wdXQtZm9udDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICBjb2xvcjogJHRleHQtZGFyaztcclxuICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmwtc2NvdXQtb3B0aW9uIHtcclxuICAgIHRyYW5zaXRpb246IDAuMXMgZWFzZS1pbi1vdXQ7XHJcbiAgICBoZWlnaHQ6IDU2cHg7XHJcbn1cclxuXHJcbi5sLWFjdGl2ZS1zZWxsIHtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICRwcmltYXJ5LWdyZWVuICFpbXBvcnRhbnQ7XHJcbn1cclxuLmwtYWN0aXZlLWJ1eSB7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAkcHJpbWFyeS1yZWQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmwtYWN0aXZlLXNhLFxyXG4ubC1hY3RpdmUtbm90LXNhIHtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICRwcmltYXJ5LWNvbG9yICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sLXNjb3V0LW9wdGlvbi1pY29uLFxyXG4ubC1zYS1pY29uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxNnB4O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5sLXN0ZXBwZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmwtc3RlcHBlci1wcm9ncmVzcy1zdGVwIHtcclxuICAgIHdpZHRoOiA3cHg7XHJcbiAgICBoZWlnaHQ6IDdweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbn1cclxuXHJcbi5sLXN0ZXAtYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG59XHJcblxyXG4ubC1pbmZvLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxufVxyXG5cclxuLmwtbG9jYXRpb24tY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xyXG59XHJcblxyXG4ubC1zdGVwLWFuZC1uYXYtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxufVxyXG5cclxuLmwtbWFyZ2luIHtcclxuICAgIG1hcmdpbi10b3A6IDM4cHg7XHJcbn1cclxuXHJcbi5sLW5vLWhlaWdodCB7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG4ubC1kZWxpdmVyeS1yYWRpdXMtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmwtZmFkZS1vdXQge1xyXG4gICAgYW5pbWF0aW9uOiBmYWRlT3V0IDAuM3M7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZU91dCB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5sLWZhZGUtaW4ge1xyXG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gMC4zcztcclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlSW4ge1xyXG4gICAgMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG59XHJcblxyXG4ubC1tYXAtaG9sZGVyIHtcclxuICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmwtbGFyZ2UtdmlldyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5sLXNtYWxsLXZpZXcge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzQ2cHgpIHtcclxuICAgIC5sLWxhcmdlLXZpZXcge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLmwtc21hbGwtdmlldyB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIFRleHRcclxuJGFwcC1mb250OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiRhcHAtaW5wdXQtZm9udDogJ011bGlzaCcsIHNhbnMtc2VyaWY7XHJcbiRhcHAtZm9udC1ibGFjazogIzM0MzQzNDtcclxuJGFwcC10ZXh0LWdyZXk6ICM3MDcwNzA7XHJcbiRhcHAtZm9udC1pbnB1dC1wbGFjZWhvbGRlcjogcmdiYSgzMCwgNDgsIDM3LCAwLjU2KTtcclxuJGFwcC1mb3JtLWluZm8tY29sb3I6ICNhZmFmYWY7XHJcblxyXG4vLyBDb2xvcnNcclxuJGFwcC1iZy1jb2xvcjogI2Y5ZjlmYztcclxuJGFwcC1idXlpbmctcmVkOiAjZTc2ZjUxO1xyXG4kYXBwLXNlbGxpbmctZ3JlZW46ICM3ZmE5OTU7XHJcbiRhcHAtaW5wdXQtYmctY29sb3I6ICNlNmU2ZTY7XHJcbiRhcHAtYm90dG9tLW5hdi1pdGVtLWJnOiAjZTVlZmU5O1xyXG4kYXBwLXRhYnMtbWFya2V0cGxhY2UtZ3JlZW46ICMyODVkNjA7XHJcbiRhcHAtdGFicy1uZWdvdGlhdGlvbnMtYmx1ZTogIzRmOWViZDtcclxuJGFwcC1ub3RpZmljYXRpb24tcmVkOiAjYTUzYTRhO1xyXG5cclxuLy8gR3JhZGllbnRzXHJcbiRhcHAtc2VsbGluZy1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgIzk4YjRhNywgIzRhNmU1ZSk7XHJcbiRhcHAtYnV5aW5nLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjZGY4YTc1LCAjYTI1MzNmKTtcclxuJGFwcC1zZWxsaW5nLWNhcmQtZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICM4NWFlOWIsICM3MzllOGEpO1xyXG4kYXBwLWJ1eWluZy1jYXJkLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAkYXBwLWJ1eWluZy1yZWQsICNjNzVkNDMpO1xyXG5cclxuLy8gQnV0dG9uc1xyXG4kYXBwLXByaW1hcnktYnV0dG9uLWJnLWNvbG9yOiAjMzFhMDVmO1xyXG4kYXBwLXNlY29uZGFyeS1idXR0b24tYmctY29sb3I6ICNlNWU1ZTU7XHJcbiRhcHAtZGVsZXRlLWJ1dHRvbi1yZWQ6ICNkMzQ1NWI7XHJcblxyXG4vLyBPdGhlclxyXG4kYXBwLWJvcmRlci1yYWRpdXM6IDhweDtcclxuJGFwcC1ib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjA4KSAhaW1wb3J0YW50O1xyXG5cclxuLy8gI3JlZ2lvbiBNYXRjaCBFeGNoYW5nZVxyXG5cclxuLy8gI3JlZ2lvbiBDb2xvcnNcclxuXHJcbiRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4kYmFja2dyb3VuZC1jb2xvci1ncmV5OiAjZjVmNWY1O1xyXG4kdGV4dC1kYXJrOiAjNDA0MDQwO1xyXG4kdGV4dC1wbGFjZWhvbGRlcjogIzhjOGM4YztcclxuJHByaW1hcnktY29sb3I6ICM0MDdlZjg7XHJcbiRzZWNvbmRhcnktY29sb3I6ICNlNWVkZmQ7XHJcbiRtZWRpdW0tYmx1ZTogIzhkOWVjNTtcclxuJHByaW1hcnktZ3JlZW46ICMxY2FmN2U7XHJcbiRzZWNvbmRhcnktZ3JlZW46ICNlN2Y3ZjA7XHJcbiRwcmltYXJ5LXJlZDogI2QyMzAzZDtcclxuJHNlY29uZGFyeS1yZWQ6ICNmN2U4ZTc7XHJcbiRpbnB1dC1ib3JkZXI6ICNlMmU4ZjA7XHJcbiRlcnJvci1tZXNzYWdlOiAjYjExNTBhO1xyXG4kZGlzYWJsZWQtY29sb3I6ICNjYmNiY2I7XHJcblxyXG4vLyAjZW5kcmVnaW9uXHJcblxyXG4vLyAjcmVnaW9uIFRleHRcclxuXHJcbiR0ZXh0LWZvbnQ6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuJGZvbnQtd2VpZ2h0LWJvbGQ6IDcwMDtcclxuJGZvbnQtd2VpZ2h0LXNlbWktYm9sZDogNjAwO1xyXG4kZm9udC13ZWlnaHQtcmVndWxhcjogNTAwO1xyXG4kZm9udC13ZWlnaHQtbGlnaHQ6IDQwMDtcclxuXHJcbi8vICNlbmRyZWdpb25cclxuXHJcbi8vICNyZWdpb24gQnV0dG9uc1xyXG5cclxuJGJ1dHRvbi1mb250LXdlaWdodDogNjAwO1xyXG5cclxuLy8gI2VuZHJlZ2lvblxyXG5cclxuLy8gI3JlZ2lvbiBPdGhlclxyXG5cclxuJGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHJcbi8vICNlbmRyZWdpb25cclxuXHJcbi8vICNlbmRyZWdpb25cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 489:
/*!*****************************************************************************************************!*\
  !*** ./src/app/features/scouts/components/scouts-search-results/scouts-search-results.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScoutsSearchResultsComponent: () => (/* binding */ ScoutsSearchResultsComponent)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/effects */ 1575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_core_models_queryModels__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/models/queryModels */ 1417);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var src_app_core_ngrx_reducers_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/ngrx/reducers/index */ 7032);
/* harmony import */ var src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/helpers/index.actions */ 5626);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ 7178);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 1527);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 274);
/* harmony import */ var _core_helpers_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../core/helpers/constants */ 9487);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_legacy_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/legacy-progress-spinner */ 3401);
/* harmony import */ var _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/legacy-button */ 8654);

















function ScoutsSearchResultsComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "mat-progress-spinner", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("diameter", 40);
  }
}
function ScoutsSearchResultsComponent_ng_template_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const pill_r8 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", (ctx_r4.scoutResult == null ? null : ctx_r4.scoutResult.scoutType) === "Sell" ? "l-tab-sell" : "l-tab-buy");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", pill_r8, " ");
  }
}
function ScoutsSearchResultsComponent_ng_template_9_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ScoutsSearchResultsComponent_ng_template_9_button_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r9.handleNavigateToFineTune());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Fine Tune Your Scout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ScoutsSearchResultsComponent_ng_template_9_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", (ctx_r6.scoutResult == null ? null : ctx_r6.scoutResult.scoutType) === "Sell" ? "Buyers" : "Sellers", " ");
  }
}
function ScoutsSearchResultsComponent_ng_template_9_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 28)(1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Lots");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r7.scoutResult == null ? null : ctx_r7.scoutResult.lotCount, " ");
  }
}
const _c0 = function (a0, a1, a2) {
  return {
    "l-public-card-sell": a0,
    "l-public-card-buy": a1,
    "l-active": a2
  };
};
function ScoutsSearchResultsComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ScoutsSearchResultsComponent_ng_template_9_div_1_Template, 2, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ScoutsSearchResultsComponent_ng_template_9_button_2_Template, 2, 0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 14)(4, "div", 15)(5, "h1", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "You are now matched to");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 17)(8, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, ScoutsSearchResultsComponent_ng_template_9_div_10_Template, 2, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, ScoutsSearchResultsComponent_ng_template_9_div_11_Template, 5, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "h1", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 23)(17, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ScoutsSearchResultsComponent_ng_template_9_Template_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r11.handlePublicToggle(false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, " Private ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ScoutsSearchResultsComponent_ng_template_9_Template_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r13.handlePublicToggle(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, " Available to Market ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r2.pills);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx_r2.scoutResult == null ? null : ctx_r2.scoutResult.scoutType) === "Buy");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", (ctx_r2.scoutResult == null ? null : ctx_r2.scoutResult.scoutType) === "Sell" ? "l-results-card-sell" : "l-results-card-buy");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", (ctx_r2.scoutResult == null ? null : ctx_r2.scoutResult.scoutType) === "Sell" ? "l-match-count-sell" : "l-match-count-buy");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r2.scoutResult == null ? null : ctx_r2.scoutResult.matchCount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.hasLots);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.hasLots);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", (ctx_r2.scoutResult == null ? null : ctx_r2.scoutResult.scoutType) === "Sell" ? "Buyers that are interested in buying your crop" : "Suppliers that have the crop you are scouting for", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Would you like to tell the Market what you are planning to ", ctx_r2.scoutResult == null ? null : ctx_r2.scoutResult.scoutType, "? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction3"](11, _c0, (ctx_r2.scoutResult == null ? null : ctx_r2.scoutResult.scoutType) === "Sell", (ctx_r2.scoutResult == null ? null : ctx_r2.scoutResult.scoutType) === "Buy", (ctx_r2.scoutResult == null ? null : ctx_r2.scoutResult.scoutType) && !ctx_r2.scoutResult.isPublic));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction3"](15, _c0, (ctx_r2.scoutResult == null ? null : ctx_r2.scoutResult.scoutType) === "Sell", (ctx_r2.scoutResult == null ? null : ctx_r2.scoutResult.scoutType) === "Buy", (ctx_r2.scoutResult == null ? null : ctx_r2.scoutResult.scoutType) && ctx_r2.scoutResult.isPublic));
  }
}
function ScoutsSearchResultsComponent_button_11_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Save Scout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
}
function ScoutsSearchResultsComponent_button_11_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "mat-progress-spinner", 33);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("diameter", 30);
  }
}
function ScoutsSearchResultsComponent_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ScoutsSearchResultsComponent_button_11_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r17.handleSaveScout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ScoutsSearchResultsComponent_button_11_ng_container_1_Template, 2, 0, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ScoutsSearchResultsComponent_button_11_ng_template_2_Template, 1, 1, "ng-template", null, 32, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](3);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r3.isActionLoading)("ngIfElse", _r15);
  }
}
class ScoutsSearchResultsComponent {
  constructor(route, router, store, actions$) {
    this.route = route;
    this.router = router;
    this.store = store;
    this.actions$ = actions$;
    this.scout = new src_app_core_models_queryModels__WEBPACK_IMPORTED_MODULE_0__.ScoutClass();
    this.hasLots = false;
    this.shouldDispatch = true;
    this.isLoading = true;
    this.isActionLoading = false;
    this.isUserAuthenticated = false;
    this.destroyed$ = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
  }
  ngOnInit() {
    this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.ofType)(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.scoutActions.ScoutSearchFail, src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.scoutActions.ScoutSearchSuccess)).subscribe(() => {
      this.isLoading = false;
    });
    const redirectBackHelper = () => {
      throw new Error('Invalid Parameters');
    };
    this.route.queryParams.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.take)(1)).subscribe(params => {
      if (!params.skipSearch) {
        try {
          this.scoutId = params.id ? params.id : null;
          this.scout.creatorType = params.creatorType || redirectBackHelper();
          this.scout.scoutType = params.scoutType || redirectBackHelper();
          this.scout.crop.id = +params.cropId || redirectBackHelper();
          this.scout.crop.name = params.cropName || redirectBackHelper();
          this.scout.inSouthAfrica = params.inSouthAfrica === 'true';
          if (!this.scout.inSouthAfrica) {
            this.scout.googlePlaceId = params.googlePlaceId ? params.googlePlaceId : null;
            this.scout.location.lat = +params.lat || redirectBackHelper();
            this.scout.location.lng = +params.lng || redirectBackHelper();
            this.scout.radius = +params.radius || redirectBackHelper();
          } else {
            this.scout.radius = null;
          }
          this.scout.town = params.town || redirectBackHelper();
        } catch {
          this.router.navigate([_core_helpers_constants__WEBPACK_IMPORTED_MODULE_4__.SCOUT_CREATE_ROUTE]);
        }
      } else {
        this.shouldDispatch = false;
        this.isLoading = false;
      }
    });
    this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.select)(src_app_core_ngrx_reducers_index__WEBPACK_IMPORTED_MODULE_1__.marketSelectors.getSearchResults), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroyed$)).subscribe(scoutResult => {
      if (!!scoutResult && Object.keys(scoutResult).length > 0) {
        this.scoutResult = (0,lodash__WEBPACK_IMPORTED_MODULE_3__.cloneDeep)(scoutResult);
        this.pills = [this.scoutResult.scoutType, this.scoutResult.cropName, this.scoutResult.town === '' ? 'South Africa' : this.scoutResult.town];
        if (this.scoutResult.lotCount !== null) {
          this.hasLots = true;
        }
      }
    });
    if (this.shouldDispatch) {
      this.store.dispatch(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.scoutActions.ReqScoutSearch({
        scout: this.scout
      }));
    }
    this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.select)(src_app_core_ngrx_reducers_index__WEBPACK_IMPORTED_MODULE_1__.authSelectors.getUser), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.take)(1)).subscribe(user => {
      if (user) {
        this.isUserAuthenticated = true;
      }
    });
  }
  ngOnDestroy() {
    this.destroyed$.next();
  }
  handleNavigateToDashboard() {
    this.router.navigate([_core_helpers_constants__WEBPACK_IMPORTED_MODULE_4__.SCOUTS_ROUTE]);
  }
  handleEditButtonClick() {
    if (!this.scoutId) {
      let scoutParams = {
        creatorType: this.scout.creatorType,
        scoutType: this.scout.scoutType,
        cropId: this.scout.crop.id,
        cropName: this.scout.crop.name,
        inSouthAfrica: this.scout.inSouthAfrica,
        googlePlaceId: this.scout.googlePlaceId,
        town: this.scout.town,
        lat: this.scout.location.lat,
        lng: this.scout.location.lng,
        radius: this.scout.radius
      };
      this.router.navigate([_core_helpers_constants__WEBPACK_IMPORTED_MODULE_4__.SCOUT_CREATE_ROUTE], {
        queryParams: scoutParams
      });
    }
    if (this.scoutId) {
      this.router.navigate([`${_core_helpers_constants__WEBPACK_IMPORTED_MODULE_4__.SCOUT_EDIT_ROUTE}/${this.scoutId}`]);
    }
  }
  handlePublicToggle(option) {
    if (this.scoutResult.isPublic !== option) {
      this.scoutResult.isPublic = option;
    }
  }
  handleSaveScout() {
    if (this.isUserAuthenticated) {
      this.isActionLoading = true;
      this.store.dispatch(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.scoutActions.ReqCreateScout({
        isPublic: this.scoutResult.isPublic
      }));
      this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.ofType)(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.scoutActions.CreateScoutSuccess, src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.scoutActions.CreateScoutFail), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.take)(1)).subscribe(action => {
        if (action.type === src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.scoutActions.CreateScoutSuccess.type) {
          this.handleNavigateToDashboard();
        }
        this.isActionLoading = false;
      });
    } else {
      this.router.navigate([_core_helpers_constants__WEBPACK_IMPORTED_MODULE_4__.SIGNIN_ROUTE], {
        queryParams: {
          fromScoutSearch: true
        }
      });
    }
  }
  handleNavigateToFineTune() {
    this.router.navigate([_core_helpers_constants__WEBPACK_IMPORTED_MODULE_4__.SCOUT_FINE_TUNE_ROUTE]);
  }
  static #_ = this.ɵfac = function ScoutsSearchResultsComponent_Factory(t) {
    return new (t || ScoutsSearchResultsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.Actions));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: ScoutsSearchResultsComponent,
    selectors: [["app-scouts-search-results"]],
    decls: 12,
    vars: 4,
    consts: [[1, "l-container"], [1, "l-header"], ["src", "./assets/icons/back-arrow-icon.svg", "alt", "back-arrow-icon", 1, "l-back-icon", "ml-4", 3, "click"], [1, "g-text-h2-dark"], [1, "g-text-h2", "l-edit-text", "g-text-blue", "pr-3", 3, "click"], [1, "l-content", 3, "ngClass"], ["class", "l-spinner-container", 4, "ngIf", "ngIfElse"], ["showCard", ""], ["mat-flat-button", "", "class", "g-primary-button mb-5", 3, "click", 4, "ngIf"], [1, "l-spinner-container"], ["mode", "indeterminate", 1, "g-mat-progress-spinner", 3, "diameter"], [1, "l-search-tabs"], ["class", "l-tab", 3, "ngClass", 4, "ngFor", "ngForOf"], ["mat-flat-button", "", "class", "w-100 l-fine-tune-button l-h2 mb-3", 3, "click", 4, "ngIf"], [1, "l-results-card", 3, "ngClass"], [1, "l-results-card-content"], [1, "g-text-label", "mt-4"], [1, "d-flex", "w-100"], [1, "d-flex", 3, "ngClass"], ["class", "l-sub-num", 4, "ngIf"], ["class", "l-match-count-buy ml-2", 4, "ngIf"], [1, "g-text-p-dark", "text-center"], [1, "g-text-p-small-dark", "mt-4", "mx-3"], [1, "l-public-toggle"], ["mat-flat-button", "", 3, "ngClass", "click"], [1, "l-tab", 3, "ngClass"], ["mat-flat-button", "", 1, "w-100", "l-fine-tune-button", "l-h2", "mb-3", 3, "click"], [1, "l-sub-num"], [1, "l-match-count-buy", "ml-2"], [1, "d-flex", "align-items-center"], ["mat-flat-button", "", 1, "g-primary-button", "mb-5", 3, "click"], [4, "ngIf", "ngIfElse"], ["showLoadingSpinner", ""], ["mode", "indeterminate", 1, "g-mat-progress-spinner-white", "mx-auto", 3, "diameter"]],
    template: function ScoutsSearchResultsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ScoutsSearchResultsComponent_Template_img_click_2_listener() {
          return ctx.handleNavigateToDashboard();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Your Scout");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ScoutsSearchResultsComponent_Template_h2_click_5_listener() {
          return ctx.handleEditButtonClick();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, ScoutsSearchResultsComponent_div_8_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, ScoutsSearchResultsComponent_ng_template_9_Template, 21, 19, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, ScoutsSearchResultsComponent_button_11_Template, 4, 2, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx.isLoading ? "h-100" : "g-fade-in");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isLoading)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isLoading);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_material_legacy_progress_spinner__WEBPACK_IMPORTED_MODULE_12__.MatLegacyProgressSpinner, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_13__.MatLegacyButton],
    styles: [".l-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #f5f5f5;\n  overflow: auto;\n}\n\n.l-content[_ngcontent-%COMP%] {\n  width: 100%;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: flex;\n  flex-direction: column;\n  padding-right: 16px;\n  padding-left: 16px;\n}\n\n.l-spinner-container[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n}\n\n.l-back-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  width: 20.24px;\n  height: 13.5px;\n}\n\n.l-edit-text[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  text-decoration: underline;\n  font-size: 14px;\n}\n\n.l-header[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  min-height: 56px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: white;\n}\n\n.l-search-tabs[_ngcontent-%COMP%] {\n  width: 100%;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: 16px;\n}\n\n.l-tab[_ngcontent-%COMP%], .l-tab-sell[_ngcontent-%COMP%], .l-tab-buy[_ngcontent-%COMP%] {\n  width: -moz-fit-content;\n  width: fit-content;\n  height: 28px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 12px;\n  margin-bottom: 12px;\n  padding: 0 16px;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 12px;\n  font-weight: 700;\n  color: #407ef8;\n  border-radius: 4px;\n  background-color: #e5edfd;\n}\n\n.l-tab-sell[_ngcontent-%COMP%]:first-child {\n  color: #1caf7e;\n  background-color: #e7f7f0;\n}\n\n.l-tab-buy[_ngcontent-%COMP%]:first-child {\n  color: #d2303d;\n  background-color: #f7e8e7;\n}\n\n.l-results-card[_ngcontent-%COMP%] {\n  width: 100%;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border-radius: 4px;\n  margin-bottom: 24px;\n  background-color: #ffffff;\n}\n\n.l-results-card-content[_ngcontent-%COMP%] {\n  width: 90%;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.l-h1[_ngcontent-%COMP%] {\n  font: \"Montserrat\", sans-serif;\n  font-weight: 500;\n  font-size: 18px;\n  letter-spacing: normal;\n  color: #ffffff;\n  text-align: center;\n  margin-bottom: 0;\n}\n\n.l-match-count-sell[_ngcontent-%COMP%], .l-match-count-buy[_ngcontent-%COMP%] {\n  width: 60%;\n  height: 76px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font: \"Montserrat\", sans-serif;\n  font-size: 48px;\n  font-weight: 400;\n  color: #ffffff;\n  border-radius: 4px;\n  margin: 24px auto;\n  background-color: #407ef8;\n}\n\n.l-fine-tune-button[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  color: #407ef8;\n  position: relative;\n  border-radius: 4px !important;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 18px;\n  font-weight: 600;\n  height: 40px;\n}\n\n.l-public-toggle[_ngcontent-%COMP%] {\n  width: 100%;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: flex;\n  justify-content: space-between;\n  margin: 32px 0;\n}\n\n.l-public-card-sell[_ngcontent-%COMP%], .l-public-card-buy[_ngcontent-%COMP%] {\n  width: 47%;\n  height: -moz-fit-content;\n  height: fit-content;\n  min-height: 100%;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 22px;\n  letter-spacing: normal;\n  color: #8d9ec5;\n  border-radius: 4px;\n  border: solid 1px #8d9ec5;\n  background-color: #ffffff;\n  transition: 0.1s ease-in-out;\n  text-align: center;\n  padding: 8px 16px;\n  outline: none;\n  white-space: normal;\n}\n\n.l-active[_ngcontent-%COMP%] {\n  color: #ffffff;\n  background-color: #407ef8;\n}\n\n.l-edit-icon[_ngcontent-%COMP%] {\n  color: white;\n  position: absolute;\n  right: 20px;\n  top: 13px;\n}\n\n.l-sub-num[_ngcontent-%COMP%] {\n  font-weight: 0px !important;\n  font-size: 18px;\n}\n\n@media screen and (min-width: 360px) {\n  .l-match-count-sell[_ngcontent-%COMP%], .l-match-count-buy[_ngcontent-%COMP%] {\n    font-size: 60px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvc2NvdXRzL2NvbXBvbmVudHMvc2NvdXRzLXNlYXJjaC1yZXN1bHRzL3Njb3V0cy1zZWFyY2gtcmVzdWx0cy5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkM4Qm9CO0VEN0JwQixjQUFBO0FBREo7O0FBSUE7RUFDSSxXQUFBO0VBQ0Esd0JBQUE7RUFBQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFJQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFJQTtFQUNJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBREo7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7QUFESjs7QUFJQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQURKOztBQUlBO0VBQ0ksV0FBQTtFQUNBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBREo7O0FBSUE7OztFQUdJLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHFDQ3ZFTztFRHdFUCxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQ2xDWTtFRG1DWixrQkNKWTtFREtaLHlCQ25DYztBRGtDbEI7O0FBR0E7RUFDSSxjQ3BDWTtFRHFDWix5QkNwQ2M7QURvQ2xCOztBQUVBO0VBQ0ksY0N0Q1U7RUR1Q1YseUJDdENZO0FEdUNoQjs7QUFFQTtFQUNJLFdBQUE7RUFDQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkN0Qlk7RUR1QlosbUJBQUE7RUFDQSx5QkMzRGU7QUQ0RG5COztBQUVBO0VBQ0ksVUFBQTtFQUNBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksOEJDM0dPO0VENEdQLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTs7RUFFSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJDM0hPO0VENEhQLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkN4RFk7RUR5RFosaUJBQUE7RUFDQSx5QkN6Rlk7QUQwRmhCOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxjQzlGWTtFRCtGWixrQkFBQTtFQUNBLDZCQUFBO0VBQ0EscUNDeklPO0VEMElQLGVBQUE7RUFDQSxnQkNsRm9CO0VEbUZwQixZQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0Esd0JBQUE7RUFBQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTs7RUFFSSxVQUFBO0VBQ0Esd0JBQUE7RUFBQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUNDckdRO0VEc0dSLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQ3ZIVTtFRHdIVixrQkMzRlk7RUQ0RloseUJBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLHlCQ3RJWTtBRHVJaEI7O0FBRUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQUNKOztBQUVBO0VBQ0ksMkJBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBSUE7RUFDSTs7SUFFSSxlQUFBO0VBRE47QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3NyYy92YXJpYWJsZXMuc2Nzcyc7XHJcblxyXG4ubC1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvci1ncmV5O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi5sLWNvbnRlbnQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG59XHJcblxyXG4ubC1zcGlubmVyLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sLWJhY2staWNvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDIwLjI0cHg7XHJcbiAgICBoZWlnaHQ6IDEzLjVweDtcclxufVxyXG5cclxuLmwtZWRpdC10ZXh0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5sLWhlYWRlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDU2cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5sLXNlYXJjaC10YWJzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG59XHJcblxyXG4ubC10YWIsXHJcbi5sLXRhYi1zZWxsLFxyXG4ubC10YWItYnV5IHtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIGhlaWdodDogMjhweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gICAgcGFkZGluZzogMCAxNnB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICRhcHAtZm9udDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XHJcbiAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XHJcbn1cclxuLmwtdGFiLXNlbGw6Zmlyc3QtY2hpbGQge1xyXG4gICAgY29sb3I6ICRwcmltYXJ5LWdyZWVuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1ncmVlbjtcclxufVxyXG4ubC10YWItYnV5OmZpcnN0LWNoaWxkIHtcclxuICAgIGNvbG9yOiAkcHJpbWFyeS1yZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LXJlZDtcclxufVxyXG5cclxuLmwtcmVzdWx0cy1jYXJkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yO1xyXG59XHJcblxyXG4ubC1yZXN1bHRzLWNhcmQtY29udGVudCB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmwtaDEge1xyXG4gICAgZm9udDogJGFwcC1mb250O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5sLW1hdGNoLWNvdW50LXNlbGwsXHJcbi5sLW1hdGNoLWNvdW50LWJ1eSB7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgaGVpZ2h0OiA3NnB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQ6ICRhcHAtZm9udDtcclxuICAgIGZvbnQtc2l6ZTogNDhweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG4gICAgbWFyZ2luOiAyNHB4IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxufVxyXG5cclxuLmwtZmluZS10dW5lLWJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMgIWltcG9ydGFudDtcclxuICAgIGZvbnQtZmFtaWx5OiAkYXBwLWZvbnQ7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LXNlbWktYm9sZDtcclxuICAgIGhlaWdodDogNDBweDtcclxufVxyXG5cclxuLmwtcHVibGljLXRvZ2dsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgbWFyZ2luOiAzMnB4IDA7XHJcbn1cclxuXHJcbi5sLXB1YmxpYy1jYXJkLXNlbGwsXHJcbi5sLXB1YmxpYy1jYXJkLWJ1eSB7XHJcbiAgICB3aWR0aDogNDclO1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICBmb250LWZhbWlseTogJHRleHQtZm9udDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICBjb2xvcjogJG1lZGl1bS1ibHVlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAkbWVkaXVtLWJsdWU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgdHJhbnNpdGlvbjogMC4xcyBlYXNlLWluLW91dDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbn1cclxuXHJcbi5sLWFjdGl2ZSB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG59XHJcblxyXG4ubC1lZGl0LWljb24ge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDIwcHg7XHJcbiAgICB0b3A6IDEzcHg7XHJcbn1cclxuXHJcbi5sLXN1Yi1udW0ge1xyXG4gICAgZm9udC13ZWlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4vLyAjcmVnaW9uIE1lZGlhIFF1ZXJpZXNcclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM2MHB4KSB7XHJcbiAgICAubC1tYXRjaC1jb3VudC1zZWxsLFxyXG4gICAgLmwtbWF0Y2gtY291bnQtYnV5IHtcclxuICAgICAgICBmb250LXNpemU6IDYwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vICNlbmRyZWdpb25cclxuIiwiLy8gVGV4dFxyXG4kYXBwLWZvbnQ6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuJGFwcC1pbnB1dC1mb250OiAnTXVsaXNoJywgc2Fucy1zZXJpZjtcclxuJGFwcC1mb250LWJsYWNrOiAjMzQzNDM0O1xyXG4kYXBwLXRleHQtZ3JleTogIzcwNzA3MDtcclxuJGFwcC1mb250LWlucHV0LXBsYWNlaG9sZGVyOiByZ2JhKDMwLCA0OCwgMzcsIDAuNTYpO1xyXG4kYXBwLWZvcm0taW5mby1jb2xvcjogI2FmYWZhZjtcclxuXHJcbi8vIENvbG9yc1xyXG4kYXBwLWJnLWNvbG9yOiAjZjlmOWZjO1xyXG4kYXBwLWJ1eWluZy1yZWQ6ICNlNzZmNTE7XHJcbiRhcHAtc2VsbGluZy1ncmVlbjogIzdmYTk5NTtcclxuJGFwcC1pbnB1dC1iZy1jb2xvcjogI2U2ZTZlNjtcclxuJGFwcC1ib3R0b20tbmF2LWl0ZW0tYmc6ICNlNWVmZTk7XHJcbiRhcHAtdGFicy1tYXJrZXRwbGFjZS1ncmVlbjogIzI4NWQ2MDtcclxuJGFwcC10YWJzLW5lZ290aWF0aW9ucy1ibHVlOiAjNGY5ZWJkO1xyXG4kYXBwLW5vdGlmaWNhdGlvbi1yZWQ6ICNhNTNhNGE7XHJcblxyXG4vLyBHcmFkaWVudHNcclxuJGFwcC1zZWxsaW5nLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjOThiNGE3LCAjNGE2ZTVlKTtcclxuJGFwcC1idXlpbmctZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICNkZjhhNzUsICNhMjUzM2YpO1xyXG4kYXBwLXNlbGxpbmctY2FyZC1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgIzg1YWU5YiwgIzczOWU4YSk7XHJcbiRhcHAtYnV5aW5nLWNhcmQtZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICRhcHAtYnV5aW5nLXJlZCwgI2M3NWQ0Myk7XHJcblxyXG4vLyBCdXR0b25zXHJcbiRhcHAtcHJpbWFyeS1idXR0b24tYmctY29sb3I6ICMzMWEwNWY7XHJcbiRhcHAtc2Vjb25kYXJ5LWJ1dHRvbi1iZy1jb2xvcjogI2U1ZTVlNTtcclxuJGFwcC1kZWxldGUtYnV0dG9uLXJlZDogI2QzNDU1YjtcclxuXHJcbi8vIE90aGVyXHJcbiRhcHAtYm9yZGVyLXJhZGl1czogOHB4O1xyXG4kYXBwLWJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDgpICFpbXBvcnRhbnQ7XHJcblxyXG4vLyAjcmVnaW9uIE1hdGNoIEV4Y2hhbmdlXHJcblxyXG4vLyAjcmVnaW9uIENvbG9yc1xyXG5cclxuJGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiRiYWNrZ3JvdW5kLWNvbG9yLWdyZXk6ICNmNWY1ZjU7XHJcbiR0ZXh0LWRhcms6ICM0MDQwNDA7XHJcbiR0ZXh0LXBsYWNlaG9sZGVyOiAjOGM4YzhjO1xyXG4kcHJpbWFyeS1jb2xvcjogIzQwN2VmODtcclxuJHNlY29uZGFyeS1jb2xvcjogI2U1ZWRmZDtcclxuJG1lZGl1bS1ibHVlOiAjOGQ5ZWM1O1xyXG4kcHJpbWFyeS1ncmVlbjogIzFjYWY3ZTtcclxuJHNlY29uZGFyeS1ncmVlbjogI2U3ZjdmMDtcclxuJHByaW1hcnktcmVkOiAjZDIzMDNkO1xyXG4kc2Vjb25kYXJ5LXJlZDogI2Y3ZThlNztcclxuJGlucHV0LWJvcmRlcjogI2UyZThmMDtcclxuJGVycm9yLW1lc3NhZ2U6ICNiMTE1MGE7XHJcbiRkaXNhYmxlZC1jb2xvcjogI2NiY2JjYjtcclxuXHJcbi8vICNlbmRyZWdpb25cclxuXHJcbi8vICNyZWdpb24gVGV4dFxyXG5cclxuJHRleHQtZm9udDogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4kZm9udC13ZWlnaHQtYm9sZDogNzAwO1xyXG4kZm9udC13ZWlnaHQtc2VtaS1ib2xkOiA2MDA7XHJcbiRmb250LXdlaWdodC1yZWd1bGFyOiA1MDA7XHJcbiRmb250LXdlaWdodC1saWdodDogNDAwO1xyXG5cclxuLy8gI2VuZHJlZ2lvblxyXG5cclxuLy8gI3JlZ2lvbiBCdXR0b25zXHJcblxyXG4kYnV0dG9uLWZvbnQtd2VpZ2h0OiA2MDA7XHJcblxyXG4vLyAjZW5kcmVnaW9uXHJcblxyXG4vLyAjcmVnaW9uIE90aGVyXHJcblxyXG4kYm9yZGVyLXJhZGl1czogNHB4O1xyXG5cclxuLy8gI2VuZHJlZ2lvblxyXG5cclxuLy8gI2VuZHJlZ2lvblxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 1815:
/*!**********************************************************!*\
  !*** ./src/app/features/scouts/scouts-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScoutsRoutingModule: () => (/* binding */ ScoutsRoutingModule)
/* harmony export */ });
/* harmony import */ var _components_fine_tune_fine_tune_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/fine-tune/fine-tune.component */ 4794);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _scouts_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scouts.component */ 3416);
/* harmony import */ var _components_scouts_form_scouts_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/scouts-form/scouts-form.component */ 5648);
/* harmony import */ var _components_scouts_search_results_scouts_search_results_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/scouts-search-results/scouts-search-results.component */ 489);
/* harmony import */ var _components_scouts_edit_form_scouts_edit_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/scouts-edit-form/scouts-edit-form.component */ 593);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);








const routes = [{
  path: '',
  component: _scouts_component__WEBPACK_IMPORTED_MODULE_1__.ScoutsComponent,
  children: [{
    path: '',
    redirectTo: 'create',
    pathMatch: 'full'
  }, {
    path: 'create',
    component: _components_scouts_form_scouts_form_component__WEBPACK_IMPORTED_MODULE_2__.ScoutsFormComponent
  }, {
    path: 'edit/:id',
    component: _components_scouts_edit_form_scouts_edit_form_component__WEBPACK_IMPORTED_MODULE_4__.ScoutsEditFormComponent
  }, {
    path: 'search-results',
    component: _components_scouts_search_results_scouts_search_results_component__WEBPACK_IMPORTED_MODULE_3__.ScoutsSearchResultsComponent
  }, {
    path: 'fine-tune',
    component: _components_fine_tune_fine_tune_component__WEBPACK_IMPORTED_MODULE_0__.FineTuneComponent
  }]
}];
class ScoutsRoutingModule {
  static #_ = this.ɵfac = function ScoutsRoutingModule_Factory(t) {
    return new (t || ScoutsRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: ScoutsRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ScoutsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
})();

/***/ }),

/***/ 3416:
/*!*****************************************************!*\
  !*** ./src/app/features/scouts/scouts.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScoutsComponent: () => (/* binding */ ScoutsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);


class ScoutsComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function ScoutsComponent_Factory(t) {
    return new (t || ScoutsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ScoutsComponent,
    selectors: [["app-scouts"]],
    decls: 2,
    vars: 0,
    consts: [[1, "g-app-dimensions"]],
    template: function ScoutsComponent_Template(rf, ctx) {
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

/***/ 6310:
/*!**************************************************!*\
  !*** ./src/app/features/scouts/scouts.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScoutsModule: () => (/* binding */ ScoutsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _shared_angular_material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared/angular-material.module */ 9702);
/* harmony import */ var _scouts_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scouts-routing.module */ 1815);
/* harmony import */ var _shared_components_crop_categories_crop_categories_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/components/crop-categories/crop-categories.component */ 4934);
/* harmony import */ var _scouts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scouts.component */ 3416);
/* harmony import */ var _components_scouts_form_scouts_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/scouts-form/scouts-form.component */ 5648);
/* harmony import */ var _components_scouts_search_results_scouts_search_results_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/scouts-search-results/scouts-search-results.component */ 489);
/* harmony import */ var _components_fine_tune_fine_tune_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/fine-tune/fine-tune.component */ 4794);
/* harmony import */ var _components_scouts_edit_form_scouts_edit_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/scouts-edit-form/scouts-edit-form.component */ 593);
/* harmony import */ var _shared_components_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/components/confirmation-modal/confirmation-modal.component */ 9510);
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/google-maps */ 8684);
/* harmony import */ var _angular_magic_ngx_gp_autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular-magic/ngx-gp-autocomplete */ 4711);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 1699);




//import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
//import { AgmCoreModule } from '@diegomvh/agm-core';

// #endregion
// #region Component Imports









// #endregion
class ScoutsModule {
  static #_ = this.ɵfac = function ScoutsModule_Factory(t) {
    return new (t || ScoutsModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
    type: ScoutsModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _scouts_routing_module__WEBPACK_IMPORTED_MODULE_1__.ScoutsRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _shared_components_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_8__.ConfirmationComponentModule, _shared_components_crop_categories_crop_categories_component__WEBPACK_IMPORTED_MODULE_2__.CropCategoriesModule, _shared_angular_material_module__WEBPACK_IMPORTED_MODULE_0__.AngularMaterialModule,
    //  GooglePlaceModule,
    _angular_magic_ngx_gp_autocomplete__WEBPACK_IMPORTED_MODULE_12__.NgxGpAutocompleteModule, _angular_google_maps__WEBPACK_IMPORTED_MODULE_13__.GoogleMapsModule
    /*
    AgmCoreModule.forRoot({
        apiKey: 'AIzaSyAPz_4c60V_PBTnACgcWOz2nVPKpyN8DT8',
    }),*/]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](ScoutsModule, {
    declarations: [_scouts_component__WEBPACK_IMPORTED_MODULE_3__.ScoutsComponent, _components_scouts_form_scouts_form_component__WEBPACK_IMPORTED_MODULE_4__.ScoutsFormComponent, _components_scouts_search_results_scouts_search_results_component__WEBPACK_IMPORTED_MODULE_5__.ScoutsSearchResultsComponent, _components_fine_tune_fine_tune_component__WEBPACK_IMPORTED_MODULE_6__.FineTuneComponent, _components_scouts_edit_form_scouts_edit_form_component__WEBPACK_IMPORTED_MODULE_7__.ScoutsEditFormComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _scouts_routing_module__WEBPACK_IMPORTED_MODULE_1__.ScoutsRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _shared_components_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_8__.ConfirmationComponentModule, _shared_components_crop_categories_crop_categories_component__WEBPACK_IMPORTED_MODULE_2__.CropCategoriesModule, _shared_angular_material_module__WEBPACK_IMPORTED_MODULE_0__.AngularMaterialModule,
    //  GooglePlaceModule,
    _angular_magic_ngx_gp_autocomplete__WEBPACK_IMPORTED_MODULE_12__.NgxGpAutocompleteModule, _angular_google_maps__WEBPACK_IMPORTED_MODULE_13__.GoogleMapsModule
    /*
    AgmCoreModule.forRoot({
        apiKey: 'AIzaSyAPz_4c60V_PBTnACgcWOz2nVPKpyN8DT8',
    }),*/]
  });
})();

/***/ }),

/***/ 9510:
/*!***********************************************************************************************!*\
  !*** ./src/app/features/shared/components/confirmation-modal/confirmation-modal.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfirmationComponentModule: () => (/* binding */ ConfirmationComponentModule),
/* harmony export */   ConfirmationModalComponent: () => (/* binding */ ConfirmationModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/legacy-button */ 8654);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/legacy-dialog */ 1035);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);







function ConfirmationModalComponent_img_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 11);
  }
}
class ConfirmationModalComponent {
  constructor(dialogRef, data) {
    this.dialogRef = dialogRef;
    this.data = data;
  }
  ngOnInit() {
    this.currentAction = this.data.currentAction;
    this.currentItem = this.data.currentItem;
  }
  handleCloseModal() {
    this.dialogRef.close(false);
  }
  handleConfirmAction() {
    this.dialogRef.close(true);
  }
  static #_ = this.ɵfac = function ConfirmationModalComponent_Factory(t) {
    return new (t || ConfirmationModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_1__.MatLegacyDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_LEGACY_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ConfirmationModalComponent,
    selectors: [["app-confirmation-modal"]],
    decls: 18,
    vars: 8,
    consts: [[1, "l-container"], [1, "l-content"], [1, "l-header"], ["src", "./assets/icons/close-icon-dark.svg", "alt", "close", 1, "l-close-icon", 3, "click"], [1, "g-text-h2-dark", "my-3"], [1, "g-text-p-dark"], [1, "g-text-p-dark", "my-3"], [1, "l-buttons-container"], [1, "g-secondary-button", "mr-1", 3, "click"], ["mat-flat-button", "", 1, "g-primary-button", "ml-1", 3, "click"], ["class", "l-delete-icon", "src", "./assets/icons/delete-icon.svg", "alt", "delete", 4, "ngIf"], ["src", "./assets/icons/delete-icon.svg", "alt", "delete", 1, "l-delete-icon"]],
    template: function ConfirmationModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmationModalComponent_Template_img_click_3_listener() {
          return ctx.handleCloseModal();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4)(5, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Are you sure?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7)(12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmationModalComponent_Template_button_click_12_listener() {
          return ctx.handleCloseModal();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmationModalComponent_Template_button_click_14_listener() {
          return ctx.handleConfirmAction();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ConfirmationModalComponent_img_17_Template, 1, 0, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("You are about to ", ctx.currentAction, " a ", ctx.currentItem, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" This will ", ctx.currentAction === "decline" ? "remove" : ctx.currentAction, " the selected ", ctx.currentItem, " from the list. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 6, ctx.currentAction), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentAction === "delete");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_3__.MatLegacyButton, _angular_common__WEBPACK_IMPORTED_MODULE_2__.TitleCasePipe],
    styles: [".l-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.l-header[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.l-close-icon[_ngcontent-%COMP%] {\n  width: 18px;\n  height: auto;\n  position: absolute;\n  top: -4px;\n  right: -4px;\n}\n\n.l-content[_ngcontent-%COMP%] {\n  width: 100%;\n  height: -moz-fit-content;\n  height: fit-content;\n  padding: 0 16px;\n}\n\n.l-buttons-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: flex;\n  align-items: center;\n}\n\n.l-delete-icon[_ngcontent-%COMP%] {\n  width: 13px;\n  height: 16px;\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvc2hhcmVkL2NvbXBvbmVudHMvY29uZmlybWF0aW9uLW1vZGFsL2NvbmZpcm1hdGlvbi1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFdBQUE7RUFDQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFJQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBREo7O0FBSUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFESjs7QUFJQTtFQUNJLFdBQUE7RUFDQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsZUFBQTtBQURKOztBQUlBO0VBQ0ksV0FBQTtFQUNBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFJQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFESiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3NyYy92YXJpYWJsZXMuc2Nzcyc7XHJcblxyXG4ubC1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubC1oZWFkZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5sLWNsb3NlLWljb24ge1xyXG4gICAgd2lkdGg6IDE4cHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC00cHg7XHJcbiAgICByaWdodDogLTRweDtcclxufVxyXG5cclxuLmwtY29udGVudCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICBwYWRkaW5nOiAwIDE2cHg7XHJcbn1cclxuXHJcbi5sLWJ1dHRvbnMtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubC1kZWxldGUtaWNvbiB7XHJcbiAgICB3aWR0aDogMTNweDtcclxuICAgIGhlaWdodDogMTZweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}
class ConfirmationComponentModule {
  static #_ = this.ɵfac = function ConfirmationComponentModule_Factory(t) {
    return new (t || ConfirmationComponentModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: ConfirmationComponentModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_3__.MatLegacyButtonModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ConfirmationComponentModule, {
    declarations: [ConfirmationModalComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_3__.MatLegacyButtonModule],
    exports: [ConfirmationModalComponent]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_features_scouts_scouts_module_ts.js.map