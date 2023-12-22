"use strict";
(self["webpackChunkskudu_match"] = self["webpackChunkskudu_match"] || []).push([["src_app_features_lots_lots_module_ts"],{

/***/ 7625:
/*!*********************************************************************************************************!*\
  !*** ./src/app/features/broker-dashboard/components/confirmation-modal/confirmation-modal.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfirmationModalComponent: () => (/* binding */ ConfirmationModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/legacy-dialog */ 1035);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/legacy-button */ 8654);





function ConfirmationModalComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2)(1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmationModalComponent_div_0_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.handleCloseModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5)(4, "h1", 6)(5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7)(8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-agent-info-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9)(13, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.data.header);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.data.subHeader, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r0.data == null ? null : ctx_r0.data.clientData);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.data.confirmButton, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.data.declineButton, " ");
  }
}
function ConfirmationModalComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No User Data Provided");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class ConfirmationModalComponent {
  constructor(dialogRef, data) {
    this.dialogRef = dialogRef;
    this.data = data;
  }
  handleCloseModal() {
    this.dialogRef.close();
  }
  static #_ = this.ɵfac = function ConfirmationModalComponent_Factory(t) {
    return new (t || ConfirmationModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_1__.MatLegacyDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_LEGACY_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ConfirmationModalComponent,
    selectors: [["app-confirmation-modal"]],
    decls: 3,
    vars: 2,
    consts: [["mat-dialog-content", "", "class", "d-flex flex-column", 4, "ngIf", "ngIfElse"], ["noUserData", ""], ["mat-dialog-content", "", 1, "d-flex", "flex-column"], [1, "d-flex", "flex-row", "justify-content-end", 3, "click"], ["src", "assets/icons/close-icon-dark.svg", "alt", "close"], [1, "d-flex", "flex-column"], [1, "g-text-h1-dark", "mb-3", "w-100"], [1, "g-text-p-dark", "w-100", "text-center"], [3, "data"], [1, "d-flex", "flex-column", "l-buttons-stack"], ["mat-flat-button", "", 1, "g-primary-button", "mt-0", 3, "mat-dialog-close"], ["mat-flat-button", "", 1, "g-secondary-button", "mt-0", 3, "mat-dialog-close"], [1, "d-flex", "flex-row", "align-content-around", "justify-content-around"]],
    template: function ConfirmationModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ConfirmationModalComponent_div_0_Template, 17, 7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ConfirmationModalComponent_ng_template_1_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data)("ngIfElse", _r1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_3__.MatLegacyButton, _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_1__.MatLegacyDialogClose, _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_1__.MatLegacyDialogContent],
    styles: [".l-buttons-stack[_ngcontent-%COMP%] {\n  gap: 16px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvYnJva2VyLWRhc2hib2FyZC9jb21wb25lbnRzL2NvbmZpcm1hdGlvbi1tb2RhbC9jb25maXJtYXRpb24tbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIubC1idXR0b25zLXN0YWNrIHtcclxuICBnYXA6IDE2cHg7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 936:
/*!*************************************************************************************************!*\
  !*** ./src/app/features/lots/components/crop-categories-page/crop-categories-page.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CropCategoriesPageComponent: () => (/* binding */ CropCategoriesPageComponent)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 7178);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/helpers/index.actions */ 5626);
/* harmony import */ var _core_ngrx_crop_crop_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../core/ngrx/crop/crop.selectors */ 1923);
/* harmony import */ var src_app_core_helpers_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/helpers/constants */ 9487);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 274);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _shared_components_crop_categories_crop_categories_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/crop-categories/crop-categories.component */ 4934);












class CropCategoriesPageComponent {
  constructor(router, store) {
    this.router = router;
    this.store = store;
    this.cropCategories = [];
    this.destroyed$ = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
  }
  ngOnInit() {
    this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.select)(_core_ngrx_crop_crop_selectors__WEBPACK_IMPORTED_MODULE_2__.selectCropByCategories), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroyed$)).subscribe(cropCategories => {
      if (cropCategories.length) {
        this.cropCategories = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(cropCategories);
      }
    });
    this.store.dispatch(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_1__.cropActions.ReqCropCategories());
  }
  ngOnDestroy() {
    this.destroyed$.next();
  }
  handleNavigateToDashboard() {
    this.router.navigate([src_app_core_helpers_constants__WEBPACK_IMPORTED_MODULE_3__.LOTS_ROUTE]);
  }
  static #_ = this.ɵfac = function CropCategoriesPageComponent_Factory(t) {
    return new (t || CropCategoriesPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.Store));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: CropCategoriesPageComponent,
    selectors: [["app-crop-categories-page"]],
    decls: 7,
    vars: 1,
    consts: [[1, "l-container", "g-fade-in"], [1, "l-header"], ["src", "./assets/icons/back-arrow-icon.svg", "alt", "back-arrow-icon", 1, "l-back-icon", 3, "click"], [1, "g-text-h2-dark"], [1, "l-content"], [3, "cropCategories"]],
    template: function CropCategoriesPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CropCategoriesPageComponent_Template_img_click_2_listener() {
          return ctx.handleNavigateToDashboard();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Select Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "app-crop-categories", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("cropCategories", ctx.cropCategories);
      }
    },
    dependencies: [_shared_components_crop_categories_crop_categories_component__WEBPACK_IMPORTED_MODULE_4__.CropCategoriesComponent],
    styles: [".l-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #f9f9fc;\n}\n\n.l-header[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  min-height: 56px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: white;\n}\n\n.l-back-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 16px;\n  width: 20.24px;\n  height: 13.5px;\n}\n\n.l-content[_ngcontent-%COMP%] {\n  width: 100%;\n  flex-grow: 1;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvbG90cy9jb21wb25lbnRzL2Nyb3AtY2F0ZWdvcmllcy1wYWdlL2Nyb3AtY2F0ZWdvcmllcy1wYWdlLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQ0NXO0FERmY7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFESjs7QUFJQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBREo7O0FBSUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFESiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3NyYy92YXJpYWJsZXMuc2Nzcyc7XHJcblxyXG4ubC1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXBwLWJnLWNvbG9yO1xyXG59XHJcblxyXG4ubC1oZWFkZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiA1NnB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubC1iYWNrLWljb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMTZweDtcclxuICAgIHdpZHRoOiAyMC4yNHB4O1xyXG4gICAgaGVpZ2h0OiAxMy41cHg7XHJcbn1cclxuXHJcbi5sLWNvbnRlbnQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufVxyXG4iLCIvLyBUZXh0XHJcbiRhcHAtZm9udDogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4kYXBwLWlucHV0LWZvbnQ6ICdNdWxpc2gnLCBzYW5zLXNlcmlmO1xyXG4kYXBwLWZvbnQtYmxhY2s6ICMzNDM0MzQ7XHJcbiRhcHAtdGV4dC1ncmV5OiAjNzA3MDcwO1xyXG4kYXBwLWZvbnQtaW5wdXQtcGxhY2Vob2xkZXI6IHJnYmEoMzAsIDQ4LCAzNywgMC41Nik7XHJcbiRhcHAtZm9ybS1pbmZvLWNvbG9yOiAjYWZhZmFmO1xyXG5cclxuLy8gQ29sb3JzXHJcbiRhcHAtYmctY29sb3I6ICNmOWY5ZmM7XHJcbiRhcHAtYnV5aW5nLXJlZDogI2U3NmY1MTtcclxuJGFwcC1zZWxsaW5nLWdyZWVuOiAjN2ZhOTk1O1xyXG4kYXBwLWlucHV0LWJnLWNvbG9yOiAjZTZlNmU2O1xyXG4kYXBwLWJvdHRvbS1uYXYtaXRlbS1iZzogI2U1ZWZlOTtcclxuJGFwcC10YWJzLW1hcmtldHBsYWNlLWdyZWVuOiAjMjg1ZDYwO1xyXG4kYXBwLXRhYnMtbmVnb3RpYXRpb25zLWJsdWU6ICM0ZjllYmQ7XHJcbiRhcHAtbm90aWZpY2F0aW9uLXJlZDogI2E1M2E0YTtcclxuXHJcbi8vIEdyYWRpZW50c1xyXG4kYXBwLXNlbGxpbmctZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICM5OGI0YTcsICM0YTZlNWUpO1xyXG4kYXBwLWJ1eWluZy1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgI2RmOGE3NSwgI2EyNTMzZik7XHJcbiRhcHAtc2VsbGluZy1jYXJkLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjODVhZTliLCAjNzM5ZThhKTtcclxuJGFwcC1idXlpbmctY2FyZC1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgJGFwcC1idXlpbmctcmVkLCAjYzc1ZDQzKTtcclxuXHJcbi8vIEJ1dHRvbnNcclxuJGFwcC1wcmltYXJ5LWJ1dHRvbi1iZy1jb2xvcjogIzMxYTA1ZjtcclxuJGFwcC1zZWNvbmRhcnktYnV0dG9uLWJnLWNvbG9yOiAjZTVlNWU1O1xyXG4kYXBwLWRlbGV0ZS1idXR0b24tcmVkOiAjZDM0NTViO1xyXG5cclxuLy8gT3RoZXJcclxuJGFwcC1ib3JkZXItcmFkaXVzOiA4cHg7XHJcbiRhcHAtYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wOCkgIWltcG9ydGFudDtcclxuXHJcbi8vICNyZWdpb24gTWF0Y2ggRXhjaGFuZ2VcclxuXHJcbi8vICNyZWdpb24gQ29sb3JzXHJcblxyXG4kYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuJGJhY2tncm91bmQtY29sb3ItZ3JleTogI2Y1ZjVmNTtcclxuJHRleHQtZGFyazogIzQwNDA0MDtcclxuJHRleHQtcGxhY2Vob2xkZXI6ICM4YzhjOGM7XHJcbiRwcmltYXJ5LWNvbG9yOiAjNDA3ZWY4O1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjZTVlZGZkO1xyXG4kbWVkaXVtLWJsdWU6ICM4ZDllYzU7XHJcbiRwcmltYXJ5LWdyZWVuOiAjMWNhZjdlO1xyXG4kc2Vjb25kYXJ5LWdyZWVuOiAjZTdmN2YwO1xyXG4kcHJpbWFyeS1yZWQ6ICNkMjMwM2Q7XHJcbiRzZWNvbmRhcnktcmVkOiAjZjdlOGU3O1xyXG4kaW5wdXQtYm9yZGVyOiAjZTJlOGYwO1xyXG4kZXJyb3ItbWVzc2FnZTogI2IxMTUwYTtcclxuJGRpc2FibGVkLWNvbG9yOiAjY2JjYmNiO1xyXG5cclxuLy8gI2VuZHJlZ2lvblxyXG5cclxuLy8gI3JlZ2lvbiBUZXh0XHJcblxyXG4kdGV4dC1mb250OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiRmb250LXdlaWdodC1ib2xkOiA3MDA7XHJcbiRmb250LXdlaWdodC1zZW1pLWJvbGQ6IDYwMDtcclxuJGZvbnQtd2VpZ2h0LXJlZ3VsYXI6IDUwMDtcclxuJGZvbnQtd2VpZ2h0LWxpZ2h0OiA0MDA7XHJcblxyXG4vLyAjZW5kcmVnaW9uXHJcblxyXG4vLyAjcmVnaW9uIEJ1dHRvbnNcclxuXHJcbiRidXR0b24tZm9udC13ZWlnaHQ6IDYwMDtcclxuXHJcbi8vICNlbmRyZWdpb25cclxuXHJcbi8vICNyZWdpb24gT3RoZXJcclxuXHJcbiRib3JkZXItcmFkaXVzOiA0cHg7XHJcblxyXG4vLyAjZW5kcmVnaW9uXHJcblxyXG4vLyAjZW5kcmVnaW9uXHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 4343:
/*!*************************************************************************!*\
  !*** ./src/app/features/lots/components/lot-form/lot-form.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LotFormComponent: () => (/* binding */ LotFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngrx/effects */ 1575);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 1527);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 274);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 1891);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 3317);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs/operators */ 4520);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 3839);
/* harmony import */ var src_app_features_lots_lots_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/features/lots/lots.selectors */ 7362);
/* harmony import */ var src_app_core_ngrx_crop_crop_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/ngrx/crop/crop.selectors */ 1923);
/* harmony import */ var src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/helpers/index.actions */ 5626);
/* harmony import */ var src_app_core_models_queryModels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/models/queryModels */ 1417);
/* harmony import */ var src_app_core_helpers_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/helpers/constants */ 9487);
/* harmony import */ var _shared_components_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../shared/components/confirmation-modal/confirmation-modal.component */ 9510);
/* harmony import */ var src_app_features_shared_components_delivery_point_modal_delivery_point_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/features/shared/components/delivery-point-modal/delivery-point-modal.component */ 6201);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment.prod */ 7337);
/* harmony import */ var src_app_core_helpers_snackbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/helpers/snackbar */ 2179);
/* harmony import */ var _core_ngrx_brokers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../core/ngrx/brokers */ 1199);
/* harmony import */ var _core_helpers_helperFunctions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../core/helpers/helperFunctions */ 1468);
/* harmony import */ var _core_ngrx_reducers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../core/ngrx/reducers */ 7032);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash */ 7178);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/legacy-dialog */ 1035);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/snack-bar */ 9409);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/legacy-core */ 773);
/* harmony import */ var _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/legacy-form-field */ 4352);
/* harmony import */ var _angular_material_legacy_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/legacy-progress-spinner */ 3401);
/* harmony import */ var _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/legacy-select */ 2198);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/datepicker */ 2226);
/* harmony import */ var _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/legacy-button */ 8654);




// #region NgRx/RxJs







// #endregion
// #region Models/Constants


// #endregion
// #region Modals



// #endregion
// #region Other




















const _c0 = ["picker"];
function LotFormComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "mat-progress-spinner", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("diameter", 40);
  }
}
const _c1 = function (a0, a1) {
  return {
    "l-active-sell": a0,
    "l-active-buy": a1
  };
};
function LotFormComponent_ng_template_2_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function LotFormComponent_ng_template_2_button_15_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r28);
      const lotType_r26 = restoredCtx.$implicit;
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r27.handleToggleLotType(lotType_r26));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "img", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const lotType_r26 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction2"](3, _c1, ctx_r4.lot.lotType === lotType_r26 && lotType_r26 === "Sell", ctx_r4.lot.lotType === lotType_r26 && lotType_r26 === "Buy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", lotType_r26, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("src", ctx_r4.lot.lotType === lotType_r26 && lotType_r26 === "Sell" ? "./assets/icons/sell-selected-icon.svg" : ctx_r4.lot.lotType === lotType_r26 && lotType_r26 === "Buy" ? "./assets/icons/buy-selected-icon.svg" : "./assets/icons/unselected-icon.svg", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsanitizeUrl"]);
  }
}
function LotFormComponent_ng_template_2_mat_select_35_mat_option_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "mat-option", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const crop_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", crop_r30);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](crop_r30.name);
  }
}
function LotFormComponent_ng_template_2_mat_select_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "mat-select", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function LotFormComponent_ng_template_2_mat_select_35_Template_mat_select_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r32);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r31.lot.crop = $event);
    })("selectionChange", function LotFormComponent_ng_template_2_mat_select_35_Template_mat_select_selectionChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r32);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r33.handleCropChange($event.value.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, LotFormComponent_ng_template_2_mat_select_35_mat_option_1_Template, 2, 2, "mat-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", !ctx_r5.lotId)("ngModel", ctx_r5.lot.crop)("compareWith", ctx_r5.compareSelectionsHelper);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r5.crops);
  }
}
function LotFormComponent_ng_template_2_ng_template_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "input", 75);
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", ctx_r7.lot.crop == null ? null : ctx_r7.lot.crop.name);
  }
}
function LotFormComponent_ng_template_2_mat_option_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "mat-option", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const package_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", package_r34);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](package_r34.name);
  }
}
function LotFormComponent_ng_template_2_mat_option_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "mat-option", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const quality_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", quality_r35);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](quality_r35.name);
  }
}
function LotFormComponent_ng_template_2_mat_option_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "mat-option", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const quantityMeasure_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", quantityMeasure_r36);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](quantityMeasure_r36.name);
  }
}
function LotFormComponent_ng_template_2_div_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 76)(1, "p", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "Enter a quantity lower than 1000000.");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
}
function LotFormComponent_ng_template_2_mat_option_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "mat-option", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const incoTerm_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", incoTerm_r37);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](incoTerm_r37.name);
  }
}
function LotFormComponent_ng_template_2_label_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "Position (Delivery Point)");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function LotFormComponent_ng_template_2_label_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "Position (Collection Point)");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function LotFormComponent_ng_template_2_mat_error_101_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "mat-error", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Invalid Period: Start Date Should Be Before End Date AND End Date Should Be After Today's Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function LotFormComponent_ng_template_2_ng_container_107_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 79)(2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "img", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "button", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function LotFormComponent_ng_template_2_ng_container_107_Template_button_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r40);
      const priceType_r38 = restoredCtx.$implicit;
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r39.handleTogglePrice(priceType_r38));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const priceType_r38 = ctx.$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassProp"]("l-toggle-active", ctx_r18.lot.priceType.id === priceType_r38.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassProp"]("l-icon-disabled", !(ctx_r18.safexMonths == null ? null : ctx_r18.safexMonths.length) && priceType_r38.id === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("src", !(ctx_r18.safexMonths == null ? null : ctx_r18.safexMonths.length) && priceType_r38.id === 1 ? "./assets/icons/wallet-icon-disabled.svg" : "./assets/icons/wallet-icon.svg", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassProp"]("l-disabled", !(ctx_r18.safexMonths == null ? null : ctx_r18.safexMonths.length) && priceType_r38.id === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", !(ctx_r18.safexMonths == null ? null : ctx_r18.safexMonths.length) && priceType_r38.id === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", priceType_r38.name, " ");
  }
}
function LotFormComponent_ng_template_2_div_108_mat_option_9_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function LotFormComponent_ng_template_2_div_108_mat_option_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "mat-option", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, LotFormComponent_ng_template_2_div_108_mat_option_9_span_2_Template, 2, 0, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const month_r42 = ctx.$implicit;
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", month_r42);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", month_r42.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r41.asteriskMonths.includes(month_r42.name));
  }
}
function LotFormComponent_ng_template_2_div_108_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 82)(1, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "img", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "p", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "Select the applicable SAFEX month.");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "div", 84)(6, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](7, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "mat-select", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function LotFormComponent_ng_template_2_div_108_Template_mat_select_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r45);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r44.lot.month = $event);
    })("selectionChange", function LotFormComponent_ng_template_2_div_108_Template_mat_select_selectionChange_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r45);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r46.hasBeenEditedHelper());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](9, LotFormComponent_ng_template_2_div_108_mat_option_9_Template, 3, 3, "mat-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "div", 24)(11, "div", 56)(12, "div", 79)(13, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function LotFormComponent_ng_template_2_div_108_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r45);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r47.handleToggleSafexOption("PLUS"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](14, " SAFEX PLUS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "div", 79)(16, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function LotFormComponent_ng_template_2_div_108_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r45);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r48.handleToggleSafexOption("MINUS"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](17, " SAFEX MINUS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx_r19.lot.month)("compareWith", ctx_r19.compareSelectionsHelper);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r19.safexMonths);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassProp"]("l-toggle-active", ctx_r19.lot.safexOption === "PLUS");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassProp"]("l-toggle-active", ctx_r19.lot.safexOption === "MINUS");
  }
}
function LotFormComponent_ng_template_2_div_119_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "img", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "p", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, " On Ex Silo-Coop Certificate, Ex Silo-SAFEX Certificate and Ex Silo-Title Transfer, basis refers to the Premium received above the published SAFEX location differential. Thus only enter the premium. Final Basis for the Product will be inclusive of the SAFEX Location Differential. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
}
function LotFormComponent_ng_template_2_div_120_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 76)(1, "p", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "Enter a price greater than 0.");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
}
function LotFormComponent_ng_template_2_mat_option_128_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "mat-option", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const paymentTerm_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", paymentTerm_r49);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](paymentTerm_r49.name);
  }
}
function LotFormComponent_ng_template_2_button_134_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "Save Lot");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
}
function LotFormComponent_ng_template_2_button_134_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "mat-progress-spinner", 93);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("diameter", 30);
  }
}
function LotFormComponent_ng_template_2_button_134_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function LotFormComponent_ng_template_2_button_134_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r54);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](5);
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r53.handleSaveLot(_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, LotFormComponent_ng_template_2_button_134_ng_container_1_Template, 2, 0, "ng-container", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, LotFormComponent_ng_template_2_button_134_ng_template_2_Template, 1, 1, "ng-template", null, 92, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](5);
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassProp"]("g-btn-disabled", !ctx_r23.isFormValidHelper(_r3) || !ctx_r23.isPeriodValid);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", !ctx_r23.isFormValidHelper(_r3) || !ctx_r23.isPeriodValid);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r23.isActionLoading)("ngIfElse", _r51);
  }
}
function LotFormComponent_ng_template_2_ng_template_135_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "Save Changes");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
}
function LotFormComponent_ng_template_2_ng_template_135_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "mat-progress-spinner", 93);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("diameter", 30);
  }
}
function LotFormComponent_ng_template_2_ng_template_135_Template(rf, ctx) {
  if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function LotFormComponent_ng_template_2_ng_template_135_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r59);
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r58.handleDeleteLot());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function LotFormComponent_ng_template_2_ng_template_135_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r59);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](5);
      const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r60.handleEditLot(_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](3, LotFormComponent_ng_template_2_ng_template_135_ng_container_3_Template, 2, 0, "ng-container", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](4, LotFormComponent_ng_template_2_ng_template_135_ng_template_4_Template, 1, 1, "ng-template", null, 92, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](5);
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassProp"]("g-btn-disabled", !ctx_r25.isFormValidHelper(_r3) || !ctx_r25.isPeriodValid || !ctx_r25.hasBeenEdited);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", !ctx_r25.isFormValidHelper(_r3) || !ctx_r25.isPeriodValid || !ctx_r25.hasBeenEdited);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r25.isActionLoading)("ngIfElse", _r56);
  }
}
const _c2 = function (a0, a1, a2) {
  return {
    "l-public-card-sell": a0,
    "l-public-card-buy": a1,
    "l-active": a2
  };
};
function LotFormComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 5)(1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function LotFormComponent_ng_template_2_Template_img_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r62);
      const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r61.handleBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "h2", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "form", 8, 9)(6, "div", 10)(7, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function LotFormComponent_ng_template_2_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r62);
      const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r63.handlePublicToggle(false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8, " Private ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function LotFormComponent_ng_template_2_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r62);
      const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r64.handlePublicToggle(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](10, " Available to Market ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "div", 13)(12, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](13, "Lot Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](15, LotFormComponent_ng_template_2_button_15_Template, 3, 6, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "div", 13)(17, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](18, "Lot Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](19, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](20, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](21, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function LotFormComponent_ng_template_2_Template_input_ngModelChange_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r62);
      const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r65.lot.lotName = $event);
    })("keydown", function LotFormComponent_ng_template_2_Template_input_keydown_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r62);
      const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r66.hasBeenEditedHelper());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](22, "div", 13)(23, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](24, "Product Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](25, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](26, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](27, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function LotFormComponent_ng_template_2_Template_input_ngModelChange_27_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r62);
      const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r67.cropCategory.name = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](28, "div", 22)(29, "div", 23)(30, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](31, "Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](32, "div", 24)(33, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](34, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](35, LotFormComponent_ng_template_2_mat_select_35_Template, 2, 4, "mat-select", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](36, LotFormComponent_ng_template_2_ng_template_36_Template, 1, 1, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](38, "div", 29)(39, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](40, "Packaging");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](41, "div", 24)(42, "mat-select", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function LotFormComponent_ng_template_2_Template_mat_select_ngModelChange_42_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r62);
      const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r68.lot.packaging = $event);
    })("selectionChange", function LotFormComponent_ng_template_2_Template_mat_select_selectionChange_42_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r62);
      const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r69.hasBeenEditedHelper());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](43, LotFormComponent_ng_template_2_mat_option_43_Template, 2, 2, "mat-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](44, "div", 13)(45, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](46, "Quality");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](47, "div", 24)(48, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](49, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](50, "mat-select", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function LotFormComponent_ng_template_2_Template_mat_select_ngModelChange_50_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r62);
      const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r70.lot.quality = $event);
    })("selectionChange", function LotFormComponent_ng_template_2_Template_mat_select_selectionChange_50_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r62);
      const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r71.hasBeenEditedHelper());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](51, LotFormComponent_ng_template_2_mat_option_51_Template, 2, 2, "mat-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](52, "div", 13)(53, "div", 34)(54, "div", 23)(55, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](56, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](57, "div", 24)(58, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](59, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](60, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function LotFormComponent_ng_template_2_Template_input_ngModelChange_60_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r62);
      const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r72.lot.quantity = $event);
    })("ngModelChange", function LotFormComponent_ng_template_2_Template_input_ngModelChange_60_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r62);
      const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r73.handleShowQuantityHint());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](61, "div", 36)(62, "div", 24)(63, "mat-select", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function LotFormComponent_ng_template_2_Template_mat_select_ngModelChange_63_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r62);
      const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r74.lot.quantityMeasure = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](64, LotFormComponent_ng_template_2_mat_option_64_Template, 2, 2, "mat-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](65, LotFormComponent_ng_template_2_div_65_Template, 3, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](66, "div", 13)(67, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](68, "INCO Term");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](69, "div", 24)(70, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](71, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](72, "mat-select", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function LotFormComponent_ng_template_2_Template_mat_select_ngModelChange_72_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r62);
      const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r75.lot.incoTerm = $event);
    })("selectionChange", function LotFormComponent_ng_template_2_Template_mat_select_selectionChange_72_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r62);
      const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r76.handleIncoTermChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](73, LotFormComponent_ng_template_2_mat_option_73_Template, 2, 2, "mat-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](74, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](75, LotFormComponent_ng_template_2_label_75_Template, 2, 0, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](76, LotFormComponent_ng_template_2_label_76_Template, 2, 0, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](77, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function LotFormComponent_ng_template_2_Template_div_click_77_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r62);
      const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r77.handleEditDeliveryPoint());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](78, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](79, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](80, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function LotFormComponent_ng_template_2_Template_input_ngModelChange_80_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r62);
      const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r78.lot.deliveryPoint.name = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](81, "div", 13)(82, "div", 45)(83, "div", 46)(84, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](85, "Period Start");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](86, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function LotFormComponent_ng_template_2_Template_div_click_86_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r62);
      const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](91);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](_r15.open());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](87, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](88, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](89, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function LotFormComponent_ng_template_2_Template_input_ngModelChange_89_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r62);
      const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r80.lot.dateFrom = $event);
    })("dateChange", function LotFormComponent_ng_template_2_Template_input_dateChange_89_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r62);
      const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r81.handlePeriodChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](90, "mat-datepicker", 49, 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](92, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function LotFormComponent_ng_template_2_Template_div_click_92_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r62);
      const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](100);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](_r16.open());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](93, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](94, "Period End");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](95, "div", 24)(96, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](97, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](98, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function LotFormComponent_ng_template_2_Template_input_ngModelChange_98_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r62);
      const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r83.lot.dateTo = $event);
    })("dateChange", function LotFormComponent_ng_template_2_Template_input_dateChange_98_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r62);
      const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r84.handlePeriodChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](99, "mat-datepicker", 53, 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](101, LotFormComponent_ng_template_2_mat_error_101_Template, 2, 0, "mat-error", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](102, "div", 13)(103, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](104, "Price Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](105, "div", 24)(106, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](107, LotFormComponent_ng_template_2_ng_container_107_Template, 6, 9, "ng-container", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](108, LotFormComponent_ng_template_2_div_108_Template, 18, 7, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](109, "div", 13)(110, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](111);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](112, "div", 24)(113, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](114, "img", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](115, "div", 60)(116, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function LotFormComponent_ng_template_2_Template_input_ngModelChange_116_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r62);
      const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r85.lot.price = $event);
    })("ngModelChange", function LotFormComponent_ng_template_2_Template_input_ngModelChange_116_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r62);
      const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r86.handleShowPriceHint());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](117, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](118, "ZAR");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](119, LotFormComponent_ng_template_2_div_119_Template, 4, 0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](120, LotFormComponent_ng_template_2_div_120_Template, 3, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](121, "div", 13)(122, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](123, "Payment");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](124, "div", 24)(125, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](126, "img", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](127, "mat-select", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function LotFormComponent_ng_template_2_Template_mat_select_ngModelChange_127_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r62);
      const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r87.lot.paymentTerm = $event);
    })("selectionChange", function LotFormComponent_ng_template_2_Template_mat_select_selectionChange_127_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r62);
      const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r88.hasBeenEditedHelper());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](128, LotFormComponent_ng_template_2_mat_option_128_Template, 2, 2, "mat-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](129, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](130, "img", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](131, "p", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](132, "Payment terms may be fine-tuned after there is a Match.");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](133, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](134, LotFormComponent_ng_template_2_button_134_Template, 4, 5, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](135, LotFormComponent_ng_template_2_ng_template_135_Template, 6, 5, "ng-template", null, 70, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](37);
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](91);
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](100);
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](136);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", !ctx_r2.lotId ? "Create" : "Edit", " a Lot");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction3"](42, _c2, (ctx_r2.lot == null ? null : ctx_r2.lot.lotType) === "Sell", (ctx_r2.lot == null ? null : ctx_r2.lot.lotType) === "Buy", !ctx_r2.lot.isPublic));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction3"](46, _c2, (ctx_r2.lot == null ? null : ctx_r2.lot.lotType) === "Sell", (ctx_r2.lot == null ? null : ctx_r2.lot.lotType) === "Buy", ctx_r2.lot.isPublic));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r2.lotTypes);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx_r2.lot.lotName);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx_r2.cropCategory.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r2.lotId)("ngIfElse", _r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx_r2.lot.packaging)("compareWith", ctx_r2.compareSelectionsHelper);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r2.packaging);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx_r2.lot.quality)("compareWith", ctx_r2.compareSelectionsHelper);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r2.qualities);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx_r2.lot.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx_r2.lot.quantityMeasure)("compareWith", ctx_r2.compareSelectionsHelper);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r2.quantityMeasures);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r2.showQuantityHint);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx_r2.lot.incoTerm)("compareWith", ctx_r2.compareSelectionsHelper);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r2.incoTerms);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r2.isSeller);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r2.isSeller);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx_r2.lot.deliveryPoint.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx_r2.lot.dateFrom)("matDatepicker", _r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx_r2.lot.dateTo)("matDatepicker", _r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("startAt", ctx_r2.lot.dateFrom);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r2.periodHadBeenEdited && !ctx_r2.isPeriodValid);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r2.priceTypes);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r2.lot.priceType.id === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", ctx_r2.lot.priceType.id === 1 ? "Basis" : "Contract Price", " / MT");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx_r2.lot.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r2.lot.priceType.id === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r2.showPriceHint);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx_r2.lot.paymentTerm)("compareWith", ctx_r2.compareSelectionsHelper);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r2.paymentTerms);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r2.lotId)("ngIfElse", _r24);
  }
}
// #endregion
class LotFormComponent {
  constructor(actions$, route, router, location, store, dialog, snackbar) {
    this.actions$ = actions$;
    this.route = route;
    this.router = router;
    this.location = location;
    this.store = store;
    this.dialog = dialog;
    this.snackbar = snackbar;
    this.cropCategory = {
      id: null,
      name: ''
    };
    this.lot = new src_app_core_models_queryModels__WEBPACK_IMPORTED_MODULE_3__.Lot();
    this.lotTypes = ['Sell', 'Buy'];
    this.isSeller = false;
    this.periodHadBeenEdited = false;
    this.monthIndex = 0;
    this.asteriskMonths = src_app_core_helpers_constants__WEBPACK_IMPORTED_MODULE_4__.lotFormAsteriskMonths;
    this.fineTune = new src_app_core_models_queryModels__WEBPACK_IMPORTED_MODULE_3__.FineTune();
    this.hasBeenEdited = false;
    this.showInitialDeliveryPointsModalStep = true;
    this.isPageLoading = true;
    this.isActionLoading = false;
    this.showPriceHint = false;
    this.showQuantityHint = false;
    this.selectedCropId$ = new rxjs__WEBPACK_IMPORTED_MODULE_14__.BehaviorSubject(null);
    this.destroyed$ = new _angular_core__WEBPACK_IMPORTED_MODULE_13__.EventEmitter();
  }
  ngOnInit() {
    this.selectClient();
    this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_15__.ofType)(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.lotActions.LotFormDataSuccess), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.take)(1)).subscribe(() => {
      this.isPageLoading = false;
    });
    this.route.params.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.take)(1)).subscribe(({
      id
    }) => {
      id && (this.lotId = id);
    });
    this.route.queryParams.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.take)(1)).subscribe(({
      lotType,
      cropCategoryId
    }) => {
      lotType && this.handleToggleLotType(lotType);
      cropCategoryId && (this.cropCategoryId = +cropCategoryId);
    });
    this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_17__.select)(src_app_features_lots_lots_selectors__WEBPACK_IMPORTED_MODULE_0__.getLotFormData), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.takeUntil)(this.destroyed$)).subscribe(({
      lot,
      priceTypes,
      paymentTerms,
      safexMonths
    }) => {
      if (priceTypes && priceTypes.length) {
        this.priceTypes = priceTypes;
      }
      if (paymentTerms && paymentTerms.length) {
        this.paymentTerms = paymentTerms;
        if (!this.lotId) {
          this.lot.paymentTerm = paymentTerms.find(paymentTerms => paymentTerms.id === src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__.environment.DEFAULT_PAYMENT_ID);
        }
      }
      this.safexMonths = safexMonths;
      if (!safexMonths.length) {
        this.lot.month = null;
        this.handleTogglePrice(priceTypes[1], true);
      }
      if (lot !== null) {
        this.lot = lot;
        this.cropCategoryId = this.lot.crop.cropCategoryId;
        if (this.lot.quality === null) {
          this.lot.quality = this.qualities.find(quality => quality.id === src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__.environment.STANDARD_QUALITY_ID);
        }
        this.selectedCropId$.next(this.lot.crop.id);
        if (this.lot.priceType.id === 1) {
          this.monthIndex = this.safexMonths.findIndex(month => month.id === this.lot.month.id) || 0;
        }
        if (this.lot.dateTo < new Date()) this.scrollToExpiredLotsDateInput();
      }
    });
    this.selectedCropId$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.switchMap)(cropId => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.combineLatest)([this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_17__.select)(src_app_features_lots_lots_selectors__WEBPACK_IMPORTED_MODULE_0__.appSelectors.getUnitsOfMeasureByCropId, {
        cropId
      })), this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_17__.select)(src_app_features_lots_lots_selectors__WEBPACK_IMPORTED_MODULE_0__.appSelectors.getIncoTermsByCropId, {
        cropId
      }))]);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.takeUntil)(this.destroyed$)).subscribe(([unitsOfMeasure, incoTerms]) => {
      this.quantityMeasures = unitsOfMeasure;
      if (!this.lotId) {
        this.lot.quantityMeasure = this.quantityMeasures.find(quantityMeasure => quantityMeasure.id === src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__.environment.DEFAULT_UOM_ID);
      }
      this.incoTerms = incoTerms;
    });
    this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_17__.select)(src_app_features_lots_lots_selectors__WEBPACK_IMPORTED_MODULE_0__.deliveryPointSelectors.getManageDeliveryPointDetails), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.takeUntil)(this.destroyed$)).subscribe(({
      userDeliveryPoints,
      publicDeliveryPoints
    }) => {
      this.userDeliveryPoints = userDeliveryPoints;
      this.publicDeliveryPoints = publicDeliveryPoints;
    });
    this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_17__.select)(src_app_features_lots_lots_selectors__WEBPACK_IMPORTED_MODULE_0__.appSelectors.getCropGrades), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.takeUntil)(this.destroyed$)).subscribe(cropGrades => {
      this.qualities = cropGrades;
      if (this.qualities.length === 1 || this.cropCategory?.name === 'Grains & Oilseeds') {
        this.lot.quality = this.qualities[0];
      }
    });
    this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_17__.select)(src_app_features_lots_lots_selectors__WEBPACK_IMPORTED_MODULE_0__.appSelectors.getCropPackaging), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.takeUntil)(this.destroyed$)).subscribe(cropPackaging => {
      this.packaging = cropPackaging;
      if (this.cropCategory?.name === 'Grains & Oilseeds') this.lot.packaging = this.packaging[0];
    });
    this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_17__.select)(src_app_features_lots_lots_selectors__WEBPACK_IMPORTED_MODULE_0__.getLotFormData), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.takeUntil)(this.destroyed$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.distinctUntilChanged)((a, b) => a?.lot?.id === b?.lot?.id), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.filter)(x => !!x.lot), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.take)(1)).subscribe(() => {
      this.store.dispatch(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.cropActions.ReqCropMonthsAndGrades({
        cropId: this.lot.crop.id,
        exchangeId: this.lot?.exchange?.id || 1
      }));
      this.store.dispatch(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.cropActions.ReqCropPackaging({
        cropId: this.lot.crop.id
      }));
    });
    this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_17__.select)(_core_ngrx_reducers__WEBPACK_IMPORTED_MODULE_11__.marketSelectors.getFineTune), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.takeUntil)(this.destroyed$)).subscribe(fineTune => {
      if (fineTune) {
        this.fineTune = (0,lodash__WEBPACK_IMPORTED_MODULE_12__.cloneDeep)(fineTune);
      }
    });
    this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_17__.select)(_core_ngrx_reducers__WEBPACK_IMPORTED_MODULE_11__.marketSelectors.getCurrentFullScout), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.takeUntil)(this.destroyed$)).subscribe(currentScout => {
      if (currentScout && Object.keys(currentScout).length) {
        this.scout = (0,lodash__WEBPACK_IMPORTED_MODULE_12__.cloneDeep)(currentScout);
      }
    });
    this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_17__.select)(src_app_features_lots_lots_selectors__WEBPACK_IMPORTED_MODULE_0__.lotSelectors.getLinkedScout), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.takeUntil)(this.destroyed$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.distinctUntilChanged)((a, b) => a?.id === b?.id)).subscribe(scout => {
      if (scout) {
        this.lot.lotType = scout.scoutType;
        this.lot.crop = scout.crop;
        this.selectedCropId$.next(this.lot.crop.id);
        this.lot.scoutId = scout.id;
        this.lot.isPublic = scout.isPublic;
        this.lot.radius = scout.radius;
        this.store.dispatch(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.cropActions.ReqCropMonthsAndGrades({
          cropId: this.lot.crop.id,
          exchangeId: this.lot?.exchange?.id || 1
        }));
        this.store.dispatch(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.cropActions.ReqCropPackaging({
          cropId: this.lot.crop.id
        }));
        this.store.dispatch(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.scoutActions.ReqScoutFormData({
          scoutId: scout.id
        }));
      }
    });
    this.store.dispatch(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.deliveryPointActions.ReqManagementData({
      executedTime: Date.now()
    }));
    this.store.dispatch(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.lotActions.ReqLotFormData(this.lotId ? {
      lotId: this.lotId
    } : null));
    this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_17__.select)(src_app_core_ngrx_crop_crop_selectors__WEBPACK_IMPORTED_MODULE_1__.selectCropByCategories), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.takeUntil)(this.destroyed$)).subscribe(cropCategories => {
      if (cropCategories.length) {
        this.cropCategories = cropCategories.filter(cropCategory => src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__.environment.CROP_CATEGORIES.includes(cropCategory.id));
        if (!this.cropCategoryId) {
          this.cropCategoryId = this.lot.scoutId ? this.lot.crop.cropCategoryId : this.cropCategories[0].id;
        }
        this.cropCategory = this.cropCategories.find(cropCategory => cropCategory.id === this.cropCategoryId);
        this.handleCropCategoryChange();
      }
    });
    this.store.dispatch(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.cropActions.ReqCropCategories());
    if (this.lot.lotType === 'Sell') {
      this.isSeller = true;
    }
  }
  ngOnDestroy() {
    this.destroyed$.next();
  }
  selectClient() {
    this.store.select(_core_ngrx_brokers__WEBPACK_IMPORTED_MODULE_9__.brokersSelectors.getCurrentClient).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.takeUntil)(this.destroyed$)).subscribe(client => {
      this.client = client;
    });
  }
  handleCropCategoryChange() {
    this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_17__.select)(src_app_core_ngrx_crop_crop_selectors__WEBPACK_IMPORTED_MODULE_1__.selectCropByCategoryId, this.cropCategoryId), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.takeUntil)(this.destroyed$)).subscribe(crops => {
      this.crops = crops;
    });
  }
  handleBack() {
    this.lot.quality = null;
    this.lot.packaging = null;
    this.location.back();
  }
  handlePublicToggle(option) {
    this.lot.isPublic = option;
    this.hasBeenEditedHelper();
  }
  handleCropChange(cropId) {
    this.store.dispatch(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.cropActions.ReqCropPackaging({
      cropId: this.lot.crop.id
    }));
    this.store.dispatch(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.cropActions.ReqCropMonthsAndGrades({
      cropId: this.lot.crop.id,
      exchangeId: this.lot.exchange.id
    }));
    this.selectedCropId$.next(cropId);
  }
  handleEditDeliveryPoint() {
    const dialogRef = this.dialog.open(src_app_features_shared_components_delivery_point_modal_delivery_point_modal_component__WEBPACK_IMPORTED_MODULE_6__.DeliveryPointModalComponent, {
      data: {
        deliveryPointId: null,
        showInitial: this.showInitialDeliveryPointsModalStep,
        isView: false,
        fromProfile: false,
        hidePublicDeliveryPoints: this.lot.incoTerm?.id === 1 || false
      },
      panelClass: 'g-modal-fullwidth-container',
      autoFocus: false
    });
    dialogRef.afterClosed().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.take)(1)).subscribe(selectedDeliveryPointId => {
      let selectedDeliveryPoint = [...this.userDeliveryPoints, ...this.publicDeliveryPoints].find(deliveryPoint => deliveryPoint.id === selectedDeliveryPointId);
      selectedDeliveryPoint && (this.lot.deliveryPoint = selectedDeliveryPoint);
    });
    this.hasBeenEditedHelper();
  }
  handleTogglePrice(priceType, fromInit) {
    if (priceType.id === 2) {
      this.lot.month = null;
    } else {
      this.handleToggleSafexOption('MINUS');
      this.monthIndex = 0;
      this.lot.month = this.safexMonths[this.monthIndex];
    }
    if (this.lot.priceType !== priceType) {
      this.lot.priceType = priceType;
    }
    !fromInit && this.hasBeenEditedHelper();
  }
  handleToggleLotType(lotType) {
    if (!this.lotId) {
      this.lot.lotType = lotType;
      this.isSeller = this.lot.lotType === 'Sell';
    }
  }
  handleToggleSafexOption(option) {
    this.lot.safexOption = option;
    this.hasBeenEditedHelper();
  }
  handleShowPriceHint() {
    if (this.lot.price === 0) {
      this.showPriceHint = true;
    }
    if (this.lot.price > 0 && this.showPriceHint) {
      this.showPriceHint = false;
    }
    this.hasBeenEditedHelper();
  }
  handleShowQuantityHint() {
    if (this.lot.quantity > 1000000) {
      this.showQuantityHint = true;
    }
    if (this.lot.quantity < 1000000 && this.showQuantityHint) {
      this.showQuantityHint = false;
    }
    this.hasBeenEditedHelper();
  }
  handleSaveLot(lotForm) {
    if (this.isFormValidHelper(lotForm)) {
      const props = this.client ? {
        lot: (0,_core_helpers_helperFunctions__WEBPACK_IMPORTED_MODULE_10__.transformLotBeforeDispatchHelper)(this.lot),
        clientUid: this.client.uid
      } : {
        lot: (0,_core_helpers_helperFunctions__WEBPACK_IMPORTED_MODULE_10__.transformLotBeforeDispatchHelper)(this.lot)
      };
      this.isActionLoading = true;
      this.store.dispatch(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.lotActions.ReqCreateLot({
        ...props
      }));
      this.handleMakeScoutPublic();
      this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_15__.ofType)(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.lotActions.CreateLotSuccess), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.take)(1)).subscribe(() => {
        this.isActionLoading = false;
        this.routeToLotsHelper();
      });
      this.routeToLotsHelper();
    } else {
      const lotFormErrorMessage = `Your Lot Form Has Some Issues. Please Resolve Them And Try Again.`;
      this.snackbar.open(lotFormErrorMessage, 'CLOSE', src_app_core_helpers_snackbar__WEBPACK_IMPORTED_MODULE_8__.errorConfig);
    }
  }
  handleMakeScoutPublic() {
    if (!this.scout.isPublic) {
      this.scout.isPublic = true;
      this.store.dispatch(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.scoutActions.ReqUpdateScout({
        scoutAndFineTune: {
          scout: this.scout,
          fineTune: this.fineTune
        }
      }));
    }
  }
  handleEditLot(lotForm) {
    if (this.isFormValidHelper(lotForm) && this.hasBeenEdited) {
      const props = this.client ? {
        lot: (0,_core_helpers_helperFunctions__WEBPACK_IMPORTED_MODULE_10__.transformLotBeforeDispatchHelper)(this.lot),
        clientUid: this.client.uid
      } : {
        lot: (0,_core_helpers_helperFunctions__WEBPACK_IMPORTED_MODULE_10__.transformLotBeforeDispatchHelper)(this.lot)
      };
      this.isActionLoading = true;
      this.store.dispatch(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.lotActions.ReqUpdateLot({
        ...props
      }));
      this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_15__.ofType)(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.lotActions.UpdateLotSuccess), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.take)(1)).subscribe(() => {
        this.isActionLoading = false;
        this.routeToLotsHelper();
      });
    }
  }
  handleDeleteLot() {
    const dialogRef = this.dialog.open(_shared_components_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_5__.ConfirmationModalComponent, {
      data: {
        currentAction: 'delete',
        currentItem: 'Lot'
      },
      panelClass: 'g-modal-container'
    });
    dialogRef.afterClosed().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.take)(1)).subscribe(shouldDispatch => {
      if (shouldDispatch) {
        const props = this.client ? {
          lotId: this.lotId,
          clientUid: this.client.uid
        } : {
          lotId: this.lotId
        };
        this.isPageLoading = true;
        this.store.dispatch(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.lotActions.ReqDeleteLot({
          ...props
        }));
        this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_15__.ofType)(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.lotActions.DeleteLotSuccess, src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.lotActions.DeleteLotFail), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.take)(1)).subscribe(action => {
          this.isPageLoading = false;
          if (action.type === src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.lotActions.DeleteLotSuccess.type) {
            this.routeToLotsHelper();
          }
        });
      }
    });
  }
  handleIncoTermChange() {
    this.hasBeenEditedHelper();
    if (this.lot.incoTerm.name === 'ExFarm') {
      this.showInitialDeliveryPointsModalStep = false;
    } else {
      this.showInitialDeliveryPointsModalStep = true;
    }
  }
  handlePeriodChange() {
    this.hasBeenEditedHelper();
    !this.periodHadBeenEdited && (this.periodHadBeenEdited = true);
    this.isPeriodValid = this.isPeriodValidHelper();
  }
  routeToLotsHelper() {
    this.router.navigate([src_app_core_helpers_constants__WEBPACK_IMPORTED_MODULE_4__.LOTS_ROUTE]);
  }
  compareSelectionsHelper(selection1, selection2) {
    return selection1.id === selection2?.id;
  }
  isFormValidHelper(lotForm) {
    this.isPeriodValid = this.isPeriodValidHelper();
    return lotForm.form.valid && this.lot.packaging && !this.showPriceHint && !this.showQuantityHint && this.isPeriodValid;
  }
  hasBeenEditedHelper() {
    !this.hasBeenEdited && (this.hasBeenEdited = true);
  }
  isPeriodValidHelper() {
    return this.lot.dateFrom < this.lot.dateTo && new Date() < this.lot.dateTo;
  }
  scrollToExpiredLotsDateInput() {
    const referenceElement = document.getElementById('dateInput');
    if (referenceElement) referenceElement.scrollIntoView({
      behavior: 'smooth'
    });
  }
  static #_ = this.ɵfac = function LotFormComponent_Factory(t) {
    return new (t || LotFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_15__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_23__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_23__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_24__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_17__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_25__.MatLegacyDialog), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__.MatSnackBar));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
    type: LotFormComponent,
    selectors: [["app-lot-form"]],
    viewQuery: function LotFormComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.picker = _t.first);
      }
    },
    decls: 4,
    vars: 2,
    consts: [[1, "l-container"], ["class", "l-loading-container", 4, "ngIf", "ngIfElse"], ["showLotForm", ""], [1, "l-loading-container"], ["mode", "indeterminate", 1, "g-mat-progress-spinner", 3, "diameter"], [1, "l-header"], ["src", "./assets/icons/back-arrow-icon.svg", "alt", "back-arrow-icon", 1, "l-back-icon", 3, "click"], [1, "g-text-h2-dark"], [1, "l-form", "g-fade-in"], ["lotForm", "ngForm"], [1, "l-public-toggle"], [1, "mr-2", 3, "ngClass", "click"], [1, "ml-2", 3, "ngClass", "click"], [1, "l-input-group"], [1, "g-form-label"], [1, "l-lot-type-container"], ["class", "l-lot-option g-text-p-dark", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "g-text-input-container", "l-no-border"], ["src", "./assets/icons/sellers-icon-grey.svg", "alt", "", 1, "g-input-text-icon"], ["type", "text", "name", "lotName", "required", "", 1, "g-input-text", 3, "ngModel", "ngModelChange", "keydown"], ["src", "./assets/icons/crop-icon.svg", "alt", "", 1, "g-input-text-icon"], ["type", "text", "name", "cropCategory", "readonly", "", "required", "", 1, "g-input-text", 3, "ngModel", "ngModelChange"], [1, "l-double-input-container"], [1, "l-double-input-left"], [1, "l-input-container"], [1, "l-input-icon-holder"], ["src", "./assets/icons/crop-icon.svg", "alt", "", 1, "l-input-icon"], ["class", "g-form-select l-alter-width", "name", "crop", "required", "", 3, "disabled", "ngModel", "compareWith", "ngModelChange", "selectionChange", 4, "ngIf", "ngIfElse"], ["showReadOnlyCrop", ""], [1, "l-double-input-right"], ["name", "package", "required", "", 1, "g-form-select", 3, "ngModel", "compareWith", "ngModelChange", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["src", "./assets/icons/quantity-icon.svg", "alt", "", 1, "l-input-icon"], ["name", "quality", "required", "", 1, "g-form-select", "l-alter-width", 3, "ngModel", "compareWith", "ngModelChange", "selectionChange"], [1, "w-100", "d-flex", "justify-content-between", "align-items-end"], ["type", "number", "name", "quantity", "max", "1000000", "min", "1", "required", "", 1, "g-form-input", "l-alter-width", 3, "ngModel", "ngModelChange"], [1, "h-100", "l-double-input-right", "justify-content-end"], ["name", "packaging", "required", "", 1, "g-form-select", 3, "ngModel", "compareWith", "ngModelChange"], ["class", "l-info-container-payment g-fade-in", 4, "ngIf"], ["src", "./assets/icons/location-icon.svg", "alt", "", 1, "l-input-icon"], ["name", "incoTerm", "required", "", 1, "g-form-select", "l-alter-width", 3, "ngModel", "compareWith", "ngModelChange", "selectionChange"], ["class", "g-form-label", 4, "ngIf"], [1, "l-input-container", 3, "click"], ["src", "./assets/icons/location-icon.svg", "alt", "position", 1, "l-input-icon"], ["type", "text", "name", "deliveryPoint", "readonly", "", "required", "", 1, "g-form-input", "l-alter-width-mat-fields", 3, "ngModel", "ngModelChange"], ["id", "dateInput", 1, "w-100", "d-flex", "justify-content-between", "align-items-end"], [1, "l-date-input-left"], ["src", "./assets/icons/datepicker-icon.svg", "alt", "", 1, "l-input-icon"], ["name", "dateFrom", 1, "g-form-input", "l-alter-width-mat-fields", 3, "ngModel", "matDatepicker", "ngModelChange", "dateChange"], ["startView", "year"], ["pickerStart", ""], [1, "h-100", "l-date-input-right", "justify-content-end", 3, "click"], ["name", "dateTo", 1, "g-form-input", 3, "ngModel", "matDatepicker", "ngModelChange", "dateChange"], ["startView", "year", 3, "startAt"], ["pickerEnd", ""], ["class", "l-period-error", 4, "ngIf"], [1, "l-price-container"], [4, "ngFor", "ngForOf"], ["class", "l-basis-price-container g-fade-in", 4, "ngIf"], ["src", "./assets/icons/wallet-icon.svg", "alt", "", 1, "l-input-icon"], [1, "l-price-input"], ["type", "number", "name", "price", "min", "1", "required", "", 1, "g-form-input", "l-price-padding", 3, "ngModel", "ngModelChange"], [1, "g-text-input", "l-price-p"], ["class", "w-100 d-flex mt-3", 4, "ngIf"], ["name", "paymentTerm", "required", "", 1, "g-form-select", "l-alter-width", 3, "ngModel", "compareWith", "ngModelChange", "selectionChange"], [1, "l-info-container-payment"], ["src", "./assets/icons/info-icon-grey.svg", "alt", "info-icon-grey", 1, "g-form-info-icon", "mt-1"], [1, "g-form-info-p", "m-0"], [1, "w-100", "d-flex", "align-items-center", "justify-content-center", "my-3"], ["mat-flat-button", "", "class", "g-primary-button", 3, "g-btn-disabled", "disabled", "click", 4, "ngIf", "ngIfElse"], ["showLotEditButtons", ""], [1, "l-lot-option", "g-text-p-dark", 3, "ngClass", "click"], ["alt", "selected-icon", 1, "l-lot-option-icon", 3, "src"], ["name", "crop", "required", "", 1, "g-form-select", "l-alter-width", 3, "disabled", "ngModel", "compareWith", "ngModelChange", "selectionChange"], [3, "value"], ["name", "crop", "readonly", "", 1, "g-form-input", "l-alter-width", 3, "value"], [1, "l-info-container-payment", "g-fade-in"], [1, "g-form-info-p", "l-red", "m-0"], [1, "l-period-error"], [1, "l-price-type"], ["alt", "", 1, "l-input-icon", 3, "src"], [1, "l-general-toggle", 3, "disabled", "click"], [1, "l-basis-price-container", "g-fade-in"], [1, "w-100", "d-flex"], [1, "l-input-container", "my-3"], ["name", "crop", "required", "", 1, "g-form-select", "l-alter-width", 3, "ngModel", "compareWith", "ngModelChange", "selectionChange"], [1, "l-general-toggle", "justify-content-center", 3, "click"], ["class", "l-safex-asterisk", 4, "ngIf"], [1, "l-safex-asterisk"], [1, "w-100", "d-flex", "mt-3"], ["mat-flat-button", "", 1, "g-primary-button", 3, "disabled", "click"], [4, "ngIf", "ngIfElse"], ["showLoadingSpinner", ""], ["mode", "indeterminate", 1, "g-mat-progress-spinner-white", "mx-auto", 3, "diameter"], ["mat-flat-button", "", 1, "g-primary-button", "mr-1", 3, "click"], ["mat-flat-button", "", 1, "g-primary-button", "ml-1", 3, "disabled", "click"]],
    template: function LotFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, LotFormComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, LotFormComponent_ng_template_2_Template, 137, 50, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.isPageLoading)("ngIfElse", _r1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_24__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_27__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_27__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.NgForm, _angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_28__.MatLegacyOption, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_29__.MatLegacyError, _angular_material_legacy_progress_spinner__WEBPACK_IMPORTED_MODULE_30__.MatLegacyProgressSpinner, _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_31__.MatLegacySelect, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_32__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_32__.MatDatepickerInput, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_33__.MatLegacyButton],
    styles: [".l-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #f5f5f5;\n}\n\n.l-loading-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.l-back-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 16px;\n  width: 20.24px;\n  height: 13.5px;\n}\n\n.l-header[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  min-height: 56px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: white;\n}\n\n.l-form[_ngcontent-%COMP%] {\n  width: 100%;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  overflow: auto;\n  padding: 0 16px;\n}\n\n.l-public-toggle[_ngcontent-%COMP%] {\n  width: 100%;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: flex;\n  justify-content: space-between;\n  margin: 16px 0;\n}\n\n.l-public-card-sell[_ngcontent-%COMP%], .l-public-card-buy[_ngcontent-%COMP%] {\n  width: 50%;\n  height: -moz-fit-content;\n  height: fit-content;\n  min-height: 100%;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 22px;\n  letter-spacing: normal;\n  color: #8d9ec5;\n  border-radius: 4px;\n  border: solid 1px #8d9ec5;\n  background-color: #ffffff;\n  transition: 0.1s ease-in-out;\n  text-align: center;\n  padding: 8px 16px;\n  outline: none;\n  white-space: normal;\n}\n\n.l-active[_ngcontent-%COMP%] {\n  color: #ffffff !important;\n  background-color: #407ef8 !important;\n}\n\n.l-no-border[_ngcontent-%COMP%] {\n  border: none !important;\n}\n\n.l-lot-type-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.l-lot-option[_ngcontent-%COMP%] {\n  position: relative;\n  width: 47%;\n  height: 56px;\n  padding: 0 16px;\n  text-align: left;\n  font-family: \"Mulish\", sans-serif;\n  font-weight: 600;\n  letter-spacing: normal;\n  line-height: 21px;\n  color: #404040;\n  border-radius: 4px;\n  border: none;\n  background-color: #ffffff;\n  outline: none;\n  cursor: pointer;\n  transition: 0.1s ease-in-out;\n}\n\n.l-lot-option-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 16px;\n  width: 20px;\n  height: 20px;\n}\n\n.l-input-group[_ngcontent-%COMP%], .l-double-input-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: -moz-fit-content;\n  height: fit-content;\n  padding-bottom: 16px;\n}\n\n.l-double-input-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.l-input-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: flex;\n}\n\n.l-date-input-left[_ngcontent-%COMP%], .l-date-input-right[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.l-date-input-left[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n\n.l-date-input-right[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n\n.l-double-input-left[_ngcontent-%COMP%], .l-double-input-right[_ngcontent-%COMP%] {\n  height: -moz-fit-content;\n  height: fit-content;\n  display: flex;\n  flex-direction: column;\n}\n\n.l-double-input-left[_ngcontent-%COMP%] {\n  width: 58.5%;\n}\n\n.l-double-input-right[_ngcontent-%COMP%] {\n  width: 37.5%;\n}\n\n.l-input-icon-holder[_ngcontent-%COMP%] {\n  height: 56px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #ffffff;\n  border-radius: 4px 0 0 4px;\n  padding-left: 16px;\n}\n\n.l-period-error[_ngcontent-%COMP%] {\n  font-size: small;\n  font-weight: 500;\n}\n\n.l-input-icon[_ngcontent-%COMP%] {\n  height: 20px;\n  width: auto;\n}\n\n.l-general-toggle[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 56px;\n  display: flex;\n  align-items: center;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  color: #404040;\n  border-radius: 0 4px 4px 0;\n  background-color: #ffffff;\n  transition: 0.1s ease-in-out;\n  outline: none;\n  border: none;\n}\n\n.l-disabled[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.12);\n  color: rgba(0, 0, 0, 0.24);\n}\n\n.l-toggle-active[_ngcontent-%COMP%] {\n  border: 1px solid #407ef8 !important;\n  border-radius: 4px;\n}\n\n.l-active-sell[_ngcontent-%COMP%] {\n  border: solid 1px #1caf7e !important;\n}\n\n.l-active-buy[_ngcontent-%COMP%] {\n  border: solid 1px #d2303d !important;\n}\n\n.l-price-container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}\n\n.l-price-type[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  margin-right: 16px;\n}\n\n.l-price-type[_ngcontent-%COMP%]:last-child {\n  margin-right: 0px;\n  width: 100%;\n}\n\n.l-icon-disabled[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.12);\n  height: 56px;\n}\n\n.l-basis-price-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: flex;\n  flex-direction: column;\n  padding-top: 16px;\n}\n\n.l-price-input[_ngcontent-%COMP%] {\n  position: relative;\n  width: calc(100% - 48px);\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\n.l-price-padding[_ngcontent-%COMP%] {\n  padding-left: 56px;\n}\n\n.l-price-p[_ngcontent-%COMP%] {\n  position: absolute;\n  margin: 0;\n  left: 12px;\n  top: 16px;\n}\n\n.l-info-container-payment[_ngcontent-%COMP%] {\n  width: 90%;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: flex;\n  align-items: flex-start;\n  margin: 16px 0 0 0;\n}\n\n.l-red[_ngcontent-%COMP%] {\n  color: #b1150a !important;\n}\n\n.l-safex-asterisk[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvbG90cy9jb21wb25lbnRzL2xvdC1mb3JtL2xvdC1mb3JtLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQzhCb0I7QUQvQnhCOztBQUlBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQURKOztBQUlBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFESjs7QUFJQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQURKOztBQUlBO0VBQ0ksV0FBQTtFQUNBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBREo7O0FBSUE7RUFDSSxXQUFBO0VBQ0Esd0JBQUE7RUFBQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7QUFESjs7QUFJQTs7RUFFSSxVQUFBO0VBQ0Esd0JBQUE7RUFBQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUNDSFE7RURJUixlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0NyQlU7RURzQlYsa0JDT1k7RUROWix5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBREo7O0FBSUE7RUFDSSx5QkFBQTtFQUNBLG9DQUFBO0FBREo7O0FBSUE7RUFDSSx1QkFBQTtBQURKOztBQUlBO0VBQ0ksV0FBQTtFQUNBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQURKOztBQUlBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQ2hHYTtFRGlHYixnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQy9EUTtFRGdFUixrQkMvQlk7RURnQ1osWUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtBQURKOztBQUlBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFESjs7QUFJQTs7RUFFSSxXQUFBO0VBQ0Esd0JBQUE7RUFBQSxtQkFBQTtFQUNBLG9CQUFBO0FBREo7O0FBSUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7QUFESjs7QUFJQTtFQUNJLFdBQUE7RUFDQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsYUFBQTtBQURKOztBQUlBOztFQUVJLFVBQUE7QUFESjs7QUFJQTtFQUNJLGlCQUFBO0FBREo7O0FBSUE7RUFDSSxnQkFBQTtBQURKOztBQUlBOztFQUVJLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFESjs7QUFHQTtFQUNJLFlBQUE7QUFBSjs7QUFHQTtFQUNJLFlBQUE7QUFBSjs7QUFHQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUNBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUFFSjs7QUFDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUNDbElRO0VEbUlSLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNDdEpRO0VEdUpSLDBCQUFBO0VBQ0EseUJDMUplO0VEMkpmLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFFSjs7QUFDQTtFQUNJLHFDQUFBO0VBQ0EsMEJBQUE7QUFFSjs7QUFDQTtFQUNJLG9DQUFBO0VBQ0Esa0JDcElZO0FEc0loQjs7QUFDQTtFQUNJLG9DQUFBO0FBRUo7O0FBQUE7RUFDSSxvQ0FBQTtBQUdKOztBQUFBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQUdKOztBQUFBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUdKOztBQUFBO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0FBR0o7O0FBQUE7RUFDSSxxQ0FBQTtFQUNBLFlBQUE7QUFHSjs7QUFBQTtFQUNJLFdBQUE7RUFDQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUFHSjs7QUFBQTtFQUNJLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSx3QkFBQTtFQUFBLG1CQUFBO0FBR0o7O0FBQUE7RUFDSSxrQkFBQTtBQUdKOztBQUFBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFHSjs7QUFBQTtFQUNJLFVBQUE7RUFDQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFHSjs7QUFBQTtFQUNJLHlCQUFBO0FBR0o7O0FBQUE7RUFDSSxVQUFBO0FBR0oiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzcmMvdmFyaWFibGVzLnNjc3MnO1xyXG5cclxuLmwtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3ItZ3JleTtcclxufVxyXG5cclxuLmwtbG9hZGluZy1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubC1iYWNrLWljb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMTZweDtcclxuICAgIHdpZHRoOiAyMC4yNHB4O1xyXG4gICAgaGVpZ2h0OiAxMy41cHg7XHJcbn1cclxuXHJcbi5sLWhlYWRlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDU2cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5sLWZvcm0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAwIDE2cHg7XHJcbn1cclxuXHJcbi5sLXB1YmxpYy10b2dnbGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG1hcmdpbjogMTZweCAwO1xyXG59XHJcblxyXG4ubC1wdWJsaWMtY2FyZC1zZWxsLFxyXG4ubC1wdWJsaWMtY2FyZC1idXkge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgZm9udC1mYW1pbHk6ICR0ZXh0LWZvbnQ7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICAgY29sb3I6ICRtZWRpdW0tYmx1ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggJG1lZGl1bS1ibHVlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIHRyYW5zaXRpb246IDAuMXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG59XHJcblxyXG4ubC1hY3RpdmUge1xyXG4gICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sLW5vLWJvcmRlciB7XHJcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmwtbG90LXR5cGUtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubC1sb3Qtb3B0aW9uIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiA0NyU7XHJcbiAgICBoZWlnaHQ6IDU2cHg7XHJcbiAgICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC1mYW1pbHk6ICRhcHAtaW5wdXQtZm9udDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICBjb2xvcjogJHRleHQtZGFyaztcclxuICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjFzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4ubC1sb3Qtb3B0aW9uLWljb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDE2cHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxufVxyXG5cclxuLmwtaW5wdXQtZ3JvdXAsXHJcbi5sLWRvdWJsZS1pbnB1dC1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE2cHg7XHJcbn1cclxuXHJcbi5sLWRvdWJsZS1pbnB1dC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmwtaW5wdXQtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5sLWRhdGUtaW5wdXQtbGVmdCxcclxuLmwtZGF0ZS1pbnB1dC1yaWdodCB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4ubC1kYXRlLWlucHV0LWxlZnQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn1cclxuXHJcbi5sLWRhdGUtaW5wdXQtcmlnaHQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxufVxyXG5cclxuLmwtZG91YmxlLWlucHV0LWxlZnQsXHJcbi5sLWRvdWJsZS1pbnB1dC1yaWdodCB7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuLmwtZG91YmxlLWlucHV0LWxlZnQge1xyXG4gICAgd2lkdGg6IDU4LjUlO1xyXG59XHJcblxyXG4ubC1kb3VibGUtaW5wdXQtcmlnaHQge1xyXG4gICAgd2lkdGg6IDM3LjUlO1xyXG59XHJcblxyXG4ubC1pbnB1dC1pY29uLWhvbGRlciB7XHJcbiAgICBoZWlnaHQ6IDU2cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzIDAgMCAkYm9yZGVyLXJhZGl1cztcclxuICAgIHBhZGRpbmctbGVmdDogMTZweDtcclxufVxyXG4ubC1wZXJpb2QtZXJyb3Ige1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuLmwtaW5wdXQtaWNvbiB7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxufVxyXG5cclxuLmwtZ2VuZXJhbC10b2dnbGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDU2cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAkdGV4dC1mb250O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAkdGV4dC1kYXJrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAkYm9yZGVyLXJhZGl1cyAkYm9yZGVyLXJhZGl1cyAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3I7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjFzIGVhc2UtaW4tb3V0O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLmwtZGlzYWJsZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjQpO1xyXG59XHJcblxyXG4ubC10b2dnbGUtYWN0aXZlIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICRwcmltYXJ5LWNvbG9yICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxufVxyXG5cclxuLmwtYWN0aXZlLXNlbGwge1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggJHByaW1hcnktZ3JlZW4gIWltcG9ydGFudDtcclxufVxyXG4ubC1hY3RpdmUtYnV5IHtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICRwcmltYXJ5LXJlZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubC1wcmljZS1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4ubC1wcmljZS10eXBlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1yaWdodDogMTZweDtcclxufVxyXG5cclxuLmwtcHJpY2UtdHlwZTpsYXN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5sLWljb24tZGlzYWJsZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICAgIGhlaWdodDogNTZweDtcclxufVxyXG5cclxuLmwtYmFzaXMtcHJpY2UtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZy10b3A6IDE2cHg7XHJcbn1cclxuXHJcbi5sLXByaWNlLWlucHV0IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0OHB4KTtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbn1cclxuXHJcbi5sLXByaWNlLXBhZGRpbmcge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1NnB4O1xyXG59XHJcblxyXG4ubC1wcmljZS1wIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGxlZnQ6IDEycHg7XHJcbiAgICB0b3A6IDE2cHg7XHJcbn1cclxuXHJcbi5sLWluZm8tY29udGFpbmVyLXBheW1lbnQge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBtYXJnaW46IDE2cHggMCAwIDA7XHJcbn1cclxuXHJcbi5sLXJlZCB7XHJcbiAgICBjb2xvcjogJGVycm9yLW1lc3NhZ2UgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmwtc2FmZXgtYXN0ZXJpc2sge1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG4iLCIvLyBUZXh0XHJcbiRhcHAtZm9udDogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4kYXBwLWlucHV0LWZvbnQ6ICdNdWxpc2gnLCBzYW5zLXNlcmlmO1xyXG4kYXBwLWZvbnQtYmxhY2s6ICMzNDM0MzQ7XHJcbiRhcHAtdGV4dC1ncmV5OiAjNzA3MDcwO1xyXG4kYXBwLWZvbnQtaW5wdXQtcGxhY2Vob2xkZXI6IHJnYmEoMzAsIDQ4LCAzNywgMC41Nik7XHJcbiRhcHAtZm9ybS1pbmZvLWNvbG9yOiAjYWZhZmFmO1xyXG5cclxuLy8gQ29sb3JzXHJcbiRhcHAtYmctY29sb3I6ICNmOWY5ZmM7XHJcbiRhcHAtYnV5aW5nLXJlZDogI2U3NmY1MTtcclxuJGFwcC1zZWxsaW5nLWdyZWVuOiAjN2ZhOTk1O1xyXG4kYXBwLWlucHV0LWJnLWNvbG9yOiAjZTZlNmU2O1xyXG4kYXBwLWJvdHRvbS1uYXYtaXRlbS1iZzogI2U1ZWZlOTtcclxuJGFwcC10YWJzLW1hcmtldHBsYWNlLWdyZWVuOiAjMjg1ZDYwO1xyXG4kYXBwLXRhYnMtbmVnb3RpYXRpb25zLWJsdWU6ICM0ZjllYmQ7XHJcbiRhcHAtbm90aWZpY2F0aW9uLXJlZDogI2E1M2E0YTtcclxuXHJcbi8vIEdyYWRpZW50c1xyXG4kYXBwLXNlbGxpbmctZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICM5OGI0YTcsICM0YTZlNWUpO1xyXG4kYXBwLWJ1eWluZy1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgI2RmOGE3NSwgI2EyNTMzZik7XHJcbiRhcHAtc2VsbGluZy1jYXJkLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjODVhZTliLCAjNzM5ZThhKTtcclxuJGFwcC1idXlpbmctY2FyZC1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgJGFwcC1idXlpbmctcmVkLCAjYzc1ZDQzKTtcclxuXHJcbi8vIEJ1dHRvbnNcclxuJGFwcC1wcmltYXJ5LWJ1dHRvbi1iZy1jb2xvcjogIzMxYTA1ZjtcclxuJGFwcC1zZWNvbmRhcnktYnV0dG9uLWJnLWNvbG9yOiAjZTVlNWU1O1xyXG4kYXBwLWRlbGV0ZS1idXR0b24tcmVkOiAjZDM0NTViO1xyXG5cclxuLy8gT3RoZXJcclxuJGFwcC1ib3JkZXItcmFkaXVzOiA4cHg7XHJcbiRhcHAtYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wOCkgIWltcG9ydGFudDtcclxuXHJcbi8vICNyZWdpb24gTWF0Y2ggRXhjaGFuZ2VcclxuXHJcbi8vICNyZWdpb24gQ29sb3JzXHJcblxyXG4kYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuJGJhY2tncm91bmQtY29sb3ItZ3JleTogI2Y1ZjVmNTtcclxuJHRleHQtZGFyazogIzQwNDA0MDtcclxuJHRleHQtcGxhY2Vob2xkZXI6ICM4YzhjOGM7XHJcbiRwcmltYXJ5LWNvbG9yOiAjNDA3ZWY4O1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjZTVlZGZkO1xyXG4kbWVkaXVtLWJsdWU6ICM4ZDllYzU7XHJcbiRwcmltYXJ5LWdyZWVuOiAjMWNhZjdlO1xyXG4kc2Vjb25kYXJ5LWdyZWVuOiAjZTdmN2YwO1xyXG4kcHJpbWFyeS1yZWQ6ICNkMjMwM2Q7XHJcbiRzZWNvbmRhcnktcmVkOiAjZjdlOGU3O1xyXG4kaW5wdXQtYm9yZGVyOiAjZTJlOGYwO1xyXG4kZXJyb3ItbWVzc2FnZTogI2IxMTUwYTtcclxuJGRpc2FibGVkLWNvbG9yOiAjY2JjYmNiO1xyXG5cclxuLy8gI2VuZHJlZ2lvblxyXG5cclxuLy8gI3JlZ2lvbiBUZXh0XHJcblxyXG4kdGV4dC1mb250OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiRmb250LXdlaWdodC1ib2xkOiA3MDA7XHJcbiRmb250LXdlaWdodC1zZW1pLWJvbGQ6IDYwMDtcclxuJGZvbnQtd2VpZ2h0LXJlZ3VsYXI6IDUwMDtcclxuJGZvbnQtd2VpZ2h0LWxpZ2h0OiA0MDA7XHJcblxyXG4vLyAjZW5kcmVnaW9uXHJcblxyXG4vLyAjcmVnaW9uIEJ1dHRvbnNcclxuXHJcbiRidXR0b24tZm9udC13ZWlnaHQ6IDYwMDtcclxuXHJcbi8vICNlbmRyZWdpb25cclxuXHJcbi8vICNyZWdpb24gT3RoZXJcclxuXHJcbiRib3JkZXItcmFkaXVzOiA0cHg7XHJcblxyXG4vLyAjZW5kcmVnaW9uXHJcblxyXG4vLyAjZW5kcmVnaW9uXHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 9263:
/*!*************************************************************************************!*\
  !*** ./src/app/features/lots/components/lot-match-page/lot-match-page.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LotMatchPageComponent: () => (/* binding */ LotMatchPageComponent)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/effects */ 1575);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 1527);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_features_lots_lots_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/features/lots/lots.selectors */ 7362);
/* harmony import */ var src_app_core_ngrx_entities_match__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/ngrx/entities/match */ 426);
/* harmony import */ var src_app_core_ngrx_entities_lot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/ngrx/entities/lot */ 7230);
/* harmony import */ var src_app_core_helpers_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/helpers/constants */ 9487);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ 7178);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _broker_dashboard_components_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../broker-dashboard/components/confirmation-modal/confirmation-modal.component */ 7625);
/* harmony import */ var _core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/helpers/index.actions */ 5626);
/* harmony import */ var _core_ngrx_brokers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/ngrx/brokers */ 1199);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/legacy-dialog */ 1035);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/legacy-core */ 773);
/* harmony import */ var _angular_material_legacy_progress_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/legacy-progress-spinner */ 3401);
/* harmony import */ var _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/legacy-select */ 2198);
/* harmony import */ var _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/legacy-button */ 8654);
/* harmony import */ var _shared_components_lot_match_table_lot_match_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/lot-match-table/lot-match-table.component */ 5127);
/* harmony import */ var _shared_components_verification_badge_verification_badge_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/components/verification-badge/verification-badge.component */ 4612);




























function LotMatchPageComponent_div_6_mat_option_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const radius_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", radius_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", radius_r8, " km");
  }
}
function LotMatchPageComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 12)(1, "mat-select", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function LotMatchPageComponent_div_6_Template_mat_select_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r9.radius = $event);
    })("selectionChange", function LotMatchPageComponent_div_6_Template_mat_select_selectionChange_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r10);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r11.handleChangeRadius());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, LotMatchPageComponent_div_6_mat_option_2_Template, 2, 2, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, " Change the search radius to filter your potential Matches. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r0.radius);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r0.radii);
  }
}
function LotMatchPageComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "mat-progress-spinner", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("diameter", 40);
  }
}
const _c0 = function (a0, a1) {
  return {
    "l-animate-from-left": a0,
    "l-animate-from-right": a1
  };
};
function LotMatchPageComponent_ng_template_9_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "app-lot-match-table", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction2"](4, _c0, ctx_r12.animateFromLeft, ctx_r12.animateFromRight));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("lotMatch", ctx_r12.lotMatches[ctx_r12.matchIndex])("isNegotiation", false)("hasAgent", ctx_r12.hasAgent);
  }
}
function LotMatchPageComponent_ng_template_9_ng_template_1_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " There are currently no matches available within ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, " for your selected lot. Increase your radius to expand your search. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx_r15.radius, " km");
  }
}
function LotMatchPageComponent_ng_template_9_ng_template_1_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "There are currently no matches available.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function LotMatchPageComponent_ng_template_9_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, LotMatchPageComponent_ng_template_9_ng_template_1_p_1_Template, 5, 1, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, LotMatchPageComponent_ng_template_9_ng_template_1_p_2_Template, 2, 0, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r14.isBuyer);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r14.isBuyer);
  }
}
function LotMatchPageComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](0, LotMatchPageComponent_ng_template_9_ng_container_0_Template, 3, 7, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, LotMatchPageComponent_ng_template_9_ng_template_1_Template, 3, 2, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
  }
  if (rf & 2) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](2);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r3.lotMatches.length > 0)("ngIfElse", _r13);
  }
}
function LotMatchPageComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "app-verification-badge", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("verificationTypes", ctx_r4.verificationTypes)("verificationId", ctx_r4.isBuyer ? ctx_r4.lotMatches[ctx_r4.matchIndex].sellerDetails.userVerificationId : ctx_r4.lotMatches[ctx_r4.matchIndex].buyerDetails.userVerificationId);
  }
}
function LotMatchPageComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "div", 30);
  }
}
function LotMatchPageComponent_div_13_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Negotiate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
}
function LotMatchPageComponent_div_13_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "mat-progress-spinner", 40);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("diameter", 30);
  }
}
function LotMatchPageComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 31)(1, "p", 32)(2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 33)(5, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LotMatchPageComponent_div_13_Template_div_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r20.handleToggleMatches("previous"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 36)(8, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LotMatchPageComponent_div_13_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r21);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r22.handleNegotiate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, LotMatchPageComponent_div_13_ng_container_9_Template, 2, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](10, LotMatchPageComponent_div_13_ng_template_10_Template, 1, 1, "ng-template", null, 38, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LotMatchPageComponent_div_13_Template_div_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r21);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r23.handleToggleMatches("next"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](13, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](11);
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate3"]("", ctx_r6.matchIndex + 1, " of ", ctx_r6.lotMatches == null ? null : ctx_r6.lotMatches.length, " ", ctx_r6.oppositeDetails, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r6.isActionLoading)("ngIfElse", _r18);
  }
}
class LotMatchPageComponent {
  constructor(location, router, route, store, actions$, dialog) {
    this.location = location;
    this.router = router;
    this.route = route;
    this.store = store;
    this.actions$ = actions$;
    this.dialog = dialog;
    this.lotId = null;
    this.lot = null;
    this.radii = ['25', '50', '75', '100', 'Over 100'];
    this.radius = 'Over 100';
    this.matchIndex = 0;
    this.oppositeDetails = '';
    this.verificationTypes = src_app_core_helpers_constants__WEBPACK_IMPORTED_MODULE_3__.verificationTypes;
    this.animateFromLeft = false;
    this.animateFromRight = false;
    this.isLoading = true;
    this.isActionLoading = false;
    this.hasAgent = false;
    this.destroyed$ = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
  }
  ngOnInit() {
    this.selectClientHelper();
    this.route.params.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1)).subscribe(({
      id
    }) => {
      this.lotId = id;
    });
    this.route.queryParams.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1)).subscribe(params => {
      if (Object.keys(params).includes('isBuyer')) {
        this.isBuyer = params.isBuyer === 'true';
        params.radius && +params.radius <= 100 && (this.radius = params.radius);
      }
    });
    this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_12__.ofType)(src_app_core_ngrx_entities_match__WEBPACK_IMPORTED_MODULE_1__.matchActions.LoadLotMatchesFail, src_app_core_ngrx_entities_match__WEBPACK_IMPORTED_MODULE_1__.matchActions.LoadLotMatchesSuccess), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroyed$)).subscribe(() => {
      this.isLoading = false;
    });
    this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_12__.ofType)(src_app_core_ngrx_entities_match__WEBPACK_IMPORTED_MODULE_1__.matchActions.ReqLotHasBrokerCheckSuccess, src_app_core_ngrx_entities_match__WEBPACK_IMPORTED_MODULE_1__.matchActions.ReqLotHasBrokerCheckFail), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1)).subscribe(payload => {
      if (payload.type === src_app_core_ngrx_entities_match__WEBPACK_IMPORTED_MODULE_1__.matchActions.ReqLotHasBrokerCheckSuccess.type) {
        this.hasAgentDict = payload;
        this.hasAgent = this.hasAgentHelper();
      }
    });
    this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_14__.select)(src_app_features_lots_lots_selectors__WEBPACK_IMPORTED_MODULE_0__.matchSelectors.getCurrentLotMatches), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroyed$)).subscribe(lotMatches => {
      this.lotMatches = lotMatches;
      if (this.lotMatches.length) {
        let lotIds = this.lotMatches.map(lot => this.isBuyer ? lot.sellerDetails.lotId : lot.buyerDetails.lotId);
        this.store.dispatch(src_app_core_ngrx_entities_match__WEBPACK_IMPORTED_MODULE_1__.matchActions.ReqLotHasBrokerCheck({
          lotIds: lotIds
        }));
      }
      this.lotMatches[0]?.userType === 'Sell' ? this.oppositeDetails = 'Buyer Lots' : this.oppositeDetails = 'Seller Lots';
    });
    this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_14__.select)(src_app_features_lots_lots_selectors__WEBPACK_IMPORTED_MODULE_0__.lotSelectors.getCurrentLot, (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroyed$))).subscribe(currentLot => {
      currentLot?.id && (this.lot = (0,lodash__WEBPACK_IMPORTED_MODULE_4__.cloneDeep)(currentLot));
    });
    this.store.dispatch(src_app_core_ngrx_entities_match__WEBPACK_IMPORTED_MODULE_1__.matchActions.ReqLoadLotMatches({
      lotId: this.lotId,
      radius: +this.radius
    }));
    this.lot?.id !== this.lotId && this.store.dispatch(src_app_core_ngrx_entities_lot__WEBPACK_IMPORTED_MODULE_2__.lotActions.ReqLotFormData({
      lotId: this.lotId
    }));
  }
  ngOnDestroy() {
    this.destroyed$.next();
  }
  handleBack() {
    this.location.back();
  }
  handleChangeRadius() {
    this.isLoading = true;
    this.matchIndex = 0;
    this.store.dispatch(src_app_core_ngrx_entities_match__WEBPACK_IMPORTED_MODULE_1__.matchActions.ReqLoadLotMatches({
      lotId: this.lotId,
      radius: +this.radius
    }));
    this.updateLotRadiusHelper();
    this.updateQueryParamsHelper();
  }
  handleToggleMatches(direction) {
    if (this.lotMatches.length > 1) {
      const lotMatchesLength = this.lotMatches.length - 1;
      if (direction === 'previous') {
        this.matchIndex === 0 ? this.matchIndex = lotMatchesLength : this.matchIndex -= 1;
        this.hasAgent = this.hasAgentHelper();
      } else {
        this.matchIndex === lotMatchesLength ? this.matchIndex = 0 : this.matchIndex += 1;
        this.hasAgent = this.hasAgentHelper();
      }
      this.animateLotMatchHelper(direction);
    }
  }
  handleNegotiate() {
    if (this.lot.isPublic) {
      this.createLotMatch();
    } else {
      this.toggleLotPrivacyStatusModalHelper();
    }
  }
  createLotMatch() {
    this.isActionLoading = true;
    this.store.dispatch(src_app_core_ngrx_entities_match__WEBPACK_IMPORTED_MODULE_1__.matchActions.ReqCreateLotMatch({
      lotMatch: this.lotMatches[this.matchIndex]
    }));
    this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_12__.ofType)(src_app_core_ngrx_entities_match__WEBPACK_IMPORTED_MODULE_1__.matchActions.CreateLotMatchSuccess, src_app_core_ngrx_entities_match__WEBPACK_IMPORTED_MODULE_1__.matchActions.CreateLotMatchFail), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1)).subscribe(payload => {
      this.isActionLoading = false;
      if (payload.type === src_app_core_ngrx_entities_match__WEBPACK_IMPORTED_MODULE_1__.matchActions.CreateLotMatchSuccess.type) {
        this.router.navigate([src_app_core_helpers_constants__WEBPACK_IMPORTED_MODULE_3__.SUCCESS_ROUTE]);
      }
    });
  }
  toggleLotPrivacyStatusModalHelper() {
    const dialogRef = this.dialog.open(_broker_dashboard_components_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_5__.ConfirmationModalComponent, {
      panelClass: 'g-modal-container',
      data: {
        header: 'Lot Visibility',
        subHeader: 'Clicking Continue will update the Lot visibility to be ‘Available to Market’',
        confirmButton: 'Continue',
        declineButton: 'Cancel'
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.updateLotAndCreateLotMatchHelper();
      }
    });
  }
  updateLotAndCreateLotMatchHelper() {
    const props = this.client ? {
      lot: this.transformLotBeforeDispatchHelper(),
      clientUid: this.client.uid
    } : {
      lot: this.transformLotBeforeDispatchHelper()
    };
    this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_12__.ofType)(src_app_core_ngrx_entities_lot__WEBPACK_IMPORTED_MODULE_2__.lotActions.UpdateLotSuccess, src_app_core_ngrx_entities_lot__WEBPACK_IMPORTED_MODULE_2__.lotActions.UpdateLotFail), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1)).subscribe(action => {
      if (action.type === src_app_core_ngrx_entities_lot__WEBPACK_IMPORTED_MODULE_2__.lotActions.UpdateLotSuccess.type) {
        this.createLotMatch();
      } else {
        this.lot.isPublic = false;
      }
    });
    this.store.dispatch(_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_6__.lotActions.ReqUpdateLot({
      ...props
    }));
  }
  transformLotBeforeDispatchHelper() {
    this.lot.isPublic = true;
    return {
      ...this.lot,
      quantity: +this.lot.quantity,
      price: +this.lot.price,
      dateFrom: this.transformDateToUtcHelper(this.lot.dateFrom),
      dateTo: this.transformDateToUtcHelper(this.lot.dateTo)
    };
  }
  transformDateToUtcHelper(date) {
    const newDate = date;
    newDate.setHours(newDate.getHours() + 12);
    return newDate;
  }
  selectClientHelper() {
    this.store.select(_core_ngrx_brokers__WEBPACK_IMPORTED_MODULE_7__.brokersSelectors.getCurrentClient).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroyed$)).subscribe(client => {
      this.client = client;
    });
  }
  hasAgentHelper() {
    return this.isBuyer ? this.hasAgentDict[this.lotMatches[this.matchIndex]?.sellerDetails.lotId] : this.hasAgentDict[this.lotMatches[this.matchIndex]?.buyerDetails.lotId];
  }
  updateLotRadiusHelper() {
    this.lot = {
      ...this.lot,
      radius: +this.radius
    };
    this.store.dispatch(src_app_core_ngrx_entities_lot__WEBPACK_IMPORTED_MODULE_2__.lotActions.ReqUpdateLot({
      lot: this.lot
    }));
  }
  animateLotMatchHelper(direction) {
    let currentDirection = direction === 'previous' ? 'Left' : 'Right';
    this[`animateFrom${currentDirection}`] = true;
    setTimeout(() => {
      this[`animateFrom${currentDirection}`] = false;
    }, 300);
  }
  updateQueryParamsHelper() {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        radius: this.radius,
        isBuyer: this.isBuyer
      },
      replaceUrl: true
    });
  }
  static #_ = this.ɵfac = function LotMatchPageComponent_Factory(t) {
    return new (t || LotMatchPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_15__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_14__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_12__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_17__.MatLegacyDialog));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
    type: LotMatchPageComponent,
    selectors: [["app-lot-match-page"]],
    decls: 14,
    vars: 8,
    consts: [[1, "l-container", "g-fade-in"], [1, "l-header"], ["src", "./assets/icons/back-arrow-icon.svg", "alt", "back-arrow-icon", 1, "l-back-icon", 3, "click"], [1, "g-text-h2-dark"], [1, "l-content"], ["class", "l-range-container", 4, "ngIf"], [1, "l-lotmatch"], [4, "ngIf", "ngIfElse"], ["showLotMatches", ""], ["class", "l-verification-badge-container", 4, "ngIf"], ["class", "l-spacer", 4, "ngIf"], ["class", "l-footer", 4, "ngIf"], [1, "l-range-container"], ["name", "radius", 1, "g-form-select", 3, "ngModel", "ngModelChange", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "g-info-container"], ["src", "./assets/icons/info-icon-blue.svg", "alt", "info-icon-blue", 1, "g-info-icon"], [1, "g-text-p-small-dark", "text-left", "mt-1"], [3, "value"], ["mode", "indeterminate", 1, "g-mat-progress-spinner-blue", 3, "diameter"], ["showNoLotMatches", ""], [1, "l-lotmatch-table-container", 3, "ngClass"], [3, "lotMatch", "isNegotiation", "hasAgent"], [1, "l-no-matches", "g-text-p-dark"], ["class", "text-center m-0", 4, "ngIf"], ["class", "text-center", 4, "ngIf"], [1, "text-center", "m-0"], [1, "text-center"], [1, "l-verification-badge-container"], [3, "verificationTypes", "verificationId"], [1, "l-spacer"], [1, "l-footer"], [1, "g-text-p-small-grey", "text-center", "mb-2"], [1, "w-100", "d-flex", "justify-content-between", "align-items-center"], [1, "l-chevron-holder", 3, "click"], ["src", "./assets/icons/chevron-blue.svg", "alt", "toggle-left", 1, "l-chevron-icon-left"], [1, "l-button-container"], ["mat-flat-button", "", 1, "g-primary-button", 3, "click"], ["showLoadingSpinner", ""], ["src", "./assets/icons/chevron-blue.svg", "alt", "toggle-right", 1, "l-chevron-icon-right"], ["mode", "indeterminate", 1, "g-mat-progress-spinner-white", "mx-auto", 3, "diameter"]],
    template: function LotMatchPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LotMatchPageComponent_Template_img_click_2_listener() {
          return ctx.handleBack();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "Potential Match Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, LotMatchPageComponent_div_6_Template, 7, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, LotMatchPageComponent_div_8_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, LotMatchPageComponent_ng_template_9_Template, 3, 2, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](11, LotMatchPageComponent_div_11_Template, 2, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](12, LotMatchPageComponent_div_12_Template, 1, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](13, LotMatchPageComponent_div_13_Template, 14, 5, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.isBuyer && ctx.lot);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("l-fill", ctx.isLoading || ctx.lotMatches.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.isLoading)("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.lotMatches.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.lotMatches.length !== 0);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgModel, _angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_19__.MatLegacyOption, _angular_material_legacy_progress_spinner__WEBPACK_IMPORTED_MODULE_20__.MatLegacyProgressSpinner, _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_21__.MatLegacySelect, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_22__.MatLegacyButton, _shared_components_lot_match_table_lot_match_table_component__WEBPACK_IMPORTED_MODULE_8__.LotMatchTableComponent, _shared_components_verification_badge_verification_badge_component__WEBPACK_IMPORTED_MODULE_9__.VerificationBadgeComponent],
    styles: [".l-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #f5f5f5;\n  overflow: auto;\n}\n\n.l-header[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  min-height: 56px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: white;\n}\n\n.l-back-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 16px;\n  width: 20.24px;\n  height: 13.5px;\n}\n\n.l-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  align-items: center;\n  padding: 16px;\n}\n\n.l-range-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin-bottom: 16px;\n}\n\n.l-lotmatch[_ngcontent-%COMP%] {\n  width: 100%;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\n.l-lotmatch-table-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\n.l-no-matches[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  border-radius: 4px;\n  width: 100%;\n  display: flex;\n  flex-grow: 1;\n  justify-content: center;\n  align-items: center;\n  padding: 16px;\n}\n\n.l-animate-from-left[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_animateFromLeft 0.3s 1 forwards;\n}\n\n@keyframes _ngcontent-%COMP%_animateFromLeft {\n  0% {\n    margin-left: -50%;\n    opacity: 0;\n  }\n  100% {\n    margin-left: 0;\n    opacity: 1;\n  }\n}\n.l-animate-from-right[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_animateFromRight 0.3s 1 forwards;\n}\n\n@keyframes _ngcontent-%COMP%_animateFromRight {\n  0% {\n    margin-left: 50%;\n    opacity: 0;\n  }\n  100% {\n    margin-right: 0;\n    opacity: 1;\n  }\n}\n.l-fill[_ngcontent-%COMP%] {\n  height: unset;\n  display: flex;\n  flex-grow: 1;\n  justify-content: center;\n  align-items: center;\n}\n\n.l-verification-badge-container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 16px;\n}\n\n.l-spacer[_ngcontent-%COMP%] {\n  width: 100%;\n  flex: 1;\n}\n\n.l-footer[_ngcontent-%COMP%] {\n  width: 100%;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: sticky;\n  bottom: 0;\n  padding: 16px;\n  background-color: #f5f5f5;\n}\n\n.l-chevron-holder[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #ffffff;\n  border-radius: 4px;\n}\n\n.l-chevron-icon-left[_ngcontent-%COMP%] {\n  width: 9px;\n  height: auto;\n  cursor: pointer;\n}\n\n.l-chevron-icon-right[_ngcontent-%COMP%] {\n  width: 9px;\n  height: auto;\n  transform: rotate(180deg) !important;\n  cursor: pointer;\n}\n\n.l-button-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0 16px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvbG90cy9jb21wb25lbnRzL2xvdC1tYXRjaC1wYWdlL2xvdC1tYXRjaC1wYWdlLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQzhCb0I7RUQ3QnBCLGNBQUE7QUFESjs7QUFJQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQURKOztBQUlBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFESjs7QUFJQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFESjs7QUFJQTtFQUNJLFdBQUE7RUFDQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFJQTtFQUNJLFdBQUE7RUFDQSx3QkFBQTtFQUFBLG1CQUFBO0FBREo7O0FBSUE7RUFDSSxXQUFBO0VBQ0Esd0JBQUE7RUFBQSxtQkFBQTtBQURKOztBQUlBO0VBQ0kseUJDakJlO0VEa0JmLGtCQ2lCWTtFRGhCWixXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQURKOztBQUlBO0VBQ0ksMENBQUE7QUFESjs7QUFJQTtFQUNJO0lBQ0ksaUJBQUE7SUFDQSxVQUFBO0VBRE47RUFHRTtJQUNJLGNBQUE7SUFDQSxVQUFBO0VBRE47QUFDRjtBQUlBO0VBQ0ksMkNBQUE7QUFGSjs7QUFLQTtFQUNJO0lBQ0ksZ0JBQUE7SUFDQSxVQUFBO0VBRk47RUFJRTtJQUNJLGVBQUE7SUFDQSxVQUFBO0VBRk47QUFDRjtBQUtBO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUhKOztBQU1BO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FBSEo7O0FBTUE7RUFDSSxXQUFBO0VBQ0EsT0FBQTtBQUhKOztBQU1BO0VBQ0ksV0FBQTtFQUNBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSx5QkNuRm9CO0FEZ0Z4Qjs7QUFNQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQzNEWTtBRHdEaEI7O0FBTUE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFISjs7QUFNQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxlQUFBO0FBSEo7O0FBTUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQUhKIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3JjL3ZhcmlhYmxlcy5zY3NzJztcclxuXHJcbi5sLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yLWdyZXk7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLmwtaGVhZGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogNTZweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmwtYmFjay1pY29uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDE2cHg7XHJcbiAgICB3aWR0aDogMjAuMjRweDtcclxuICAgIGhlaWdodDogMTMuNXB4O1xyXG59XHJcblxyXG4ubC1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTZweDtcclxufVxyXG5cclxuLmwtcmFuZ2UtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbn1cclxuXHJcbi5sLWxvdG1hdGNoIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxufVxyXG5cclxuLmwtbG90bWF0Y2gtdGFibGUtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxufVxyXG5cclxuLmwtbm8tbWF0Y2hlcyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcclxuICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTZweDtcclxufVxyXG5cclxuLmwtYW5pbWF0ZS1mcm9tLWxlZnQge1xyXG4gICAgYW5pbWF0aW9uOiBhbmltYXRlRnJvbUxlZnQgMC4zcyAxIGZvcndhcmRzO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGFuaW1hdGVGcm9tTGVmdCB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC01MCU7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5sLWFuaW1hdGUtZnJvbS1yaWdodCB7XHJcbiAgICBhbmltYXRpb246IGFuaW1hdGVGcm9tUmlnaHQgMC4zcyAxIGZvcndhcmRzO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGFuaW1hdGVGcm9tUmlnaHQge1xyXG4gICAgMCUge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1MCU7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG59XHJcblxyXG4ubC1maWxsIHtcclxuICAgIGhlaWdodDogdW5zZXQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubC12ZXJpZmljYXRpb24tYmFkZ2UtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxufVxyXG5cclxuLmwtc3BhY2VyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmxleDogMTtcclxufVxyXG5cclxuLmwtZm9vdGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3ItZ3JleTtcclxufVxyXG5cclxuLmwtY2hldnJvbi1ob2xkZXIge1xyXG4gICAgd2lkdGg6IDU2cHg7XHJcbiAgICBoZWlnaHQ6IDU2cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG59XHJcblxyXG4ubC1jaGV2cm9uLWljb24tbGVmdCB7XHJcbiAgICB3aWR0aDogOXB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubC1jaGV2cm9uLWljb24tcmlnaHQge1xyXG4gICAgd2lkdGg6IDlweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZykgIWltcG9ydGFudDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmwtYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDAgMTZweDtcclxufVxyXG4iLCIvLyBUZXh0XHJcbiRhcHAtZm9udDogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4kYXBwLWlucHV0LWZvbnQ6ICdNdWxpc2gnLCBzYW5zLXNlcmlmO1xyXG4kYXBwLWZvbnQtYmxhY2s6ICMzNDM0MzQ7XHJcbiRhcHAtdGV4dC1ncmV5OiAjNzA3MDcwO1xyXG4kYXBwLWZvbnQtaW5wdXQtcGxhY2Vob2xkZXI6IHJnYmEoMzAsIDQ4LCAzNywgMC41Nik7XHJcbiRhcHAtZm9ybS1pbmZvLWNvbG9yOiAjYWZhZmFmO1xyXG5cclxuLy8gQ29sb3JzXHJcbiRhcHAtYmctY29sb3I6ICNmOWY5ZmM7XHJcbiRhcHAtYnV5aW5nLXJlZDogI2U3NmY1MTtcclxuJGFwcC1zZWxsaW5nLWdyZWVuOiAjN2ZhOTk1O1xyXG4kYXBwLWlucHV0LWJnLWNvbG9yOiAjZTZlNmU2O1xyXG4kYXBwLWJvdHRvbS1uYXYtaXRlbS1iZzogI2U1ZWZlOTtcclxuJGFwcC10YWJzLW1hcmtldHBsYWNlLWdyZWVuOiAjMjg1ZDYwO1xyXG4kYXBwLXRhYnMtbmVnb3RpYXRpb25zLWJsdWU6ICM0ZjllYmQ7XHJcbiRhcHAtbm90aWZpY2F0aW9uLXJlZDogI2E1M2E0YTtcclxuXHJcbi8vIEdyYWRpZW50c1xyXG4kYXBwLXNlbGxpbmctZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICM5OGI0YTcsICM0YTZlNWUpO1xyXG4kYXBwLWJ1eWluZy1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgI2RmOGE3NSwgI2EyNTMzZik7XHJcbiRhcHAtc2VsbGluZy1jYXJkLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjODVhZTliLCAjNzM5ZThhKTtcclxuJGFwcC1idXlpbmctY2FyZC1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgJGFwcC1idXlpbmctcmVkLCAjYzc1ZDQzKTtcclxuXHJcbi8vIEJ1dHRvbnNcclxuJGFwcC1wcmltYXJ5LWJ1dHRvbi1iZy1jb2xvcjogIzMxYTA1ZjtcclxuJGFwcC1zZWNvbmRhcnktYnV0dG9uLWJnLWNvbG9yOiAjZTVlNWU1O1xyXG4kYXBwLWRlbGV0ZS1idXR0b24tcmVkOiAjZDM0NTViO1xyXG5cclxuLy8gT3RoZXJcclxuJGFwcC1ib3JkZXItcmFkaXVzOiA4cHg7XHJcbiRhcHAtYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wOCkgIWltcG9ydGFudDtcclxuXHJcbi8vICNyZWdpb24gTWF0Y2ggRXhjaGFuZ2VcclxuXHJcbi8vICNyZWdpb24gQ29sb3JzXHJcblxyXG4kYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuJGJhY2tncm91bmQtY29sb3ItZ3JleTogI2Y1ZjVmNTtcclxuJHRleHQtZGFyazogIzQwNDA0MDtcclxuJHRleHQtcGxhY2Vob2xkZXI6ICM4YzhjOGM7XHJcbiRwcmltYXJ5LWNvbG9yOiAjNDA3ZWY4O1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjZTVlZGZkO1xyXG4kbWVkaXVtLWJsdWU6ICM4ZDllYzU7XHJcbiRwcmltYXJ5LWdyZWVuOiAjMWNhZjdlO1xyXG4kc2Vjb25kYXJ5LWdyZWVuOiAjZTdmN2YwO1xyXG4kcHJpbWFyeS1yZWQ6ICNkMjMwM2Q7XHJcbiRzZWNvbmRhcnktcmVkOiAjZjdlOGU3O1xyXG4kaW5wdXQtYm9yZGVyOiAjZTJlOGYwO1xyXG4kZXJyb3ItbWVzc2FnZTogI2IxMTUwYTtcclxuJGRpc2FibGVkLWNvbG9yOiAjY2JjYmNiO1xyXG5cclxuLy8gI2VuZHJlZ2lvblxyXG5cclxuLy8gI3JlZ2lvbiBUZXh0XHJcblxyXG4kdGV4dC1mb250OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiRmb250LXdlaWdodC1ib2xkOiA3MDA7XHJcbiRmb250LXdlaWdodC1zZW1pLWJvbGQ6IDYwMDtcclxuJGZvbnQtd2VpZ2h0LXJlZ3VsYXI6IDUwMDtcclxuJGZvbnQtd2VpZ2h0LWxpZ2h0OiA0MDA7XHJcblxyXG4vLyAjZW5kcmVnaW9uXHJcblxyXG4vLyAjcmVnaW9uIEJ1dHRvbnNcclxuXHJcbiRidXR0b24tZm9udC13ZWlnaHQ6IDYwMDtcclxuXHJcbi8vICNlbmRyZWdpb25cclxuXHJcbi8vICNyZWdpb24gT3RoZXJcclxuXHJcbiRib3JkZXItcmFkaXVzOiA0cHg7XHJcblxyXG4vLyAjZW5kcmVnaW9uXHJcblxyXG4vLyAjZW5kcmVnaW9uXHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 1474:
/*!******************************************************!*\
  !*** ./src/app/features/lots/lots-routing.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LotsRoutingModule: () => (/* binding */ LotsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _lots_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lots.component */ 1046);
/* harmony import */ var _components_lot_form_lot_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/lot-form/lot-form.component */ 4343);
/* harmony import */ var _components_lot_match_page_lot_match_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/lot-match-page/lot-match-page.component */ 9263);
/* harmony import */ var _components_crop_categories_page_crop_categories_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/crop-categories-page/crop-categories-page.component */ 936);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);







const routes = [{
  path: '',
  component: _lots_component__WEBPACK_IMPORTED_MODULE_0__.LotsComponent,
  children: [{
    path: '',
    redirectTo: 'crop-categories',
    pathMatch: 'full'
  }, {
    path: 'crop-categories',
    component: _components_crop_categories_page_crop_categories_page_component__WEBPACK_IMPORTED_MODULE_3__.CropCategoriesPageComponent
  }, {
    path: 'create',
    component: _components_lot_form_lot_form_component__WEBPACK_IMPORTED_MODULE_1__.LotFormComponent
  }, {
    path: 'edit/:id',
    component: _components_lot_form_lot_form_component__WEBPACK_IMPORTED_MODULE_1__.LotFormComponent
  }, {
    path: 'lot-match/:id',
    component: _components_lot_match_page_lot_match_page_component__WEBPACK_IMPORTED_MODULE_2__.LotMatchPageComponent
  }]
}];
class LotsRoutingModule {
  static #_ = this.ɵfac = function LotsRoutingModule_Factory(t) {
    return new (t || LotsRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: LotsRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](LotsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 1046:
/*!*************************************************!*\
  !*** ./src/app/features/lots/lots.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LotsComponent: () => (/* binding */ LotsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);


class LotsComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function LotsComponent_Factory(t) {
    return new (t || LotsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: LotsComponent,
    selectors: [["app-lots"]],
    decls: 2,
    vars: 0,
    consts: [[1, "g-app-dimensions"]],
    template: function LotsComponent_Template(rf, ctx) {
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

/***/ 6555:
/*!**********************************************!*\
  !*** ./src/app/features/lots/lots.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LotsModule: () => (/* binding */ LotsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _lots_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lots-routing.module */ 1474);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _shared_angular_material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/angular-material.module */ 9702);
/* harmony import */ var _shared_components_lot_match_table_lot_match_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../shared/components/lot-match-table/lot-match-table.component */ 5127);
/* harmony import */ var _shared_components_crop_categories_crop_categories_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/components/crop-categories/crop-categories.component */ 4934);
/* harmony import */ var _shared_components_verification_badge_verification_badge_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/components/verification-badge/verification-badge.component */ 4612);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngrx/effects */ 1575);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _lots_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lots.component */ 1046);
/* harmony import */ var _components_lot_form_lot_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/lot-form/lot-form.component */ 4343);
/* harmony import */ var _components_lot_match_page_lot_match_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/lot-match-page/lot-match-page.component */ 9263);
/* harmony import */ var _core_ngrx_entities_lot_lot_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../core/ngrx/entities/lot/lot.effects */ 4542);
/* harmony import */ var _core_ngrx_entities_lot_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../core/ngrx/entities/lot/index */ 7230);
/* harmony import */ var src_app_core_ngrx_entities_match__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/ngrx/entities/match */ 426);
/* harmony import */ var _core_ngrx_entities_match_match_effects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../core/ngrx/entities/match/match.effects */ 1833);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ 5309);
/* harmony import */ var _shared_components_delivery_point_modal_delivery_point_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/components/delivery-point-modal/delivery-point-modal.component */ 6201);
/* harmony import */ var _components_crop_categories_page_crop_categories_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/crop-categories-page/crop-categories-page.component */ 936);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 1699);









// #endregion
// #region Component Imports



// #endregion
// #region Other










// #endregion
class LotsModule {
  static #_ = this.ɵfac = function LotsModule_Factory(t) {
    return new (t || LotsModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({
    type: LotsModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({
    providers: [{
      provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MAT_DATE_LOCALE,
      useValue: 'en-GB'
    }],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule, _lots_routing_module__WEBPACK_IMPORTED_MODULE_0__.LotsRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule, _shared_angular_material_module__WEBPACK_IMPORTED_MODULE_1__.AngularMaterialModule, _shared_components_delivery_point_modal_delivery_point_modal_component__WEBPACK_IMPORTED_MODULE_12__.DeliveryPointModule, _shared_components_lot_match_table_lot_match_table_component__WEBPACK_IMPORTED_MODULE_2__.LotMatchTableModule, _shared_components_crop_categories_crop_categories_component__WEBPACK_IMPORTED_MODULE_3__.CropCategoriesModule, _shared_components_verification_badge_verification_badge_component__WEBPACK_IMPORTED_MODULE_4__.VerificationBadgeModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_18__.StoreModule.forFeature(_core_ngrx_entities_lot_index__WEBPACK_IMPORTED_MODULE_9__.lotFeatureKey, _core_ngrx_entities_lot_index__WEBPACK_IMPORTED_MODULE_9__.lotReducer), _ngrx_store__WEBPACK_IMPORTED_MODULE_18__.StoreModule.forFeature(src_app_core_ngrx_entities_match__WEBPACK_IMPORTED_MODULE_10__.matchFeatureKey, src_app_core_ngrx_entities_match__WEBPACK_IMPORTED_MODULE_10__.matchReducer), _ngrx_effects__WEBPACK_IMPORTED_MODULE_19__.EffectsModule.forFeature([_core_ngrx_entities_lot_lot_effects__WEBPACK_IMPORTED_MODULE_8__.LotEffects, _core_ngrx_entities_match_match_effects__WEBPACK_IMPORTED_MODULE_11__.MatchEffects])]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](LotsModule, {
    declarations: [_lots_component__WEBPACK_IMPORTED_MODULE_5__.LotsComponent, _components_lot_form_lot_form_component__WEBPACK_IMPORTED_MODULE_6__.LotFormComponent, _components_lot_match_page_lot_match_page_component__WEBPACK_IMPORTED_MODULE_7__.LotMatchPageComponent, _components_crop_categories_page_crop_categories_page_component__WEBPACK_IMPORTED_MODULE_13__.CropCategoriesPageComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule, _lots_routing_module__WEBPACK_IMPORTED_MODULE_0__.LotsRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule, _shared_angular_material_module__WEBPACK_IMPORTED_MODULE_1__.AngularMaterialModule, _shared_components_delivery_point_modal_delivery_point_modal_component__WEBPACK_IMPORTED_MODULE_12__.DeliveryPointModule, _shared_components_lot_match_table_lot_match_table_component__WEBPACK_IMPORTED_MODULE_2__.LotMatchTableModule, _shared_components_crop_categories_crop_categories_component__WEBPACK_IMPORTED_MODULE_3__.CropCategoriesModule, _shared_components_verification_badge_verification_badge_component__WEBPACK_IMPORTED_MODULE_4__.VerificationBadgeModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_18__.StoreFeatureModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_18__.StoreFeatureModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_19__.EffectsFeatureModule]
  });
})();

/***/ }),

/***/ 7362:
/*!*************************************************!*\
  !*** ./src/app/features/lots/lots.selectors.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appSelectors: () => (/* binding */ appSelectors),
/* harmony export */   deliveryPointSelectors: () => (/* binding */ deliveryPointSelectors),
/* harmony export */   getAppState: () => (/* binding */ getAppState),
/* harmony export */   getLotFormData: () => (/* binding */ getLotFormData),
/* harmony export */   lotSelectors: () => (/* binding */ lotSelectors),
/* harmony export */   matchSelectors: () => (/* binding */ matchSelectors)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _core_ngrx_app_state_app_state_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/ngrx/app-state/app-state.reducer */ 1383);
/* harmony import */ var _core_ngrx_app_state_app_state_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/ngrx/app-state/app-state.selectors */ 5391);
/* harmony import */ var _core_ngrx_entities_lot_lot_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/ngrx/entities/lot/lot.selectors */ 5014);
/* harmony import */ var _core_ngrx_crop_crop_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/ngrx/crop/crop.selectors */ 1923);
/* harmony import */ var _core_ngrx_entities_delivery_points_delivery_points_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/ngrx/entities/delivery-points/delivery-points.selectors */ 6070);
/* harmony import */ var src_app_core_ngrx_entities_match_match_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/ngrx/entities/match/match.selectors */ 809);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ 7178);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);








const getAppState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.createFeatureSelector)('appState');
const appSelectors = _core_ngrx_app_state_app_state_selectors__WEBPACK_IMPORTED_MODULE_1__;
const lotSelectors = _core_ngrx_entities_lot_lot_selectors__WEBPACK_IMPORTED_MODULE_2__;
const deliveryPointSelectors = _core_ngrx_entities_delivery_points_delivery_points_selectors__WEBPACK_IMPORTED_MODULE_4__;
const matchSelectors = src_app_core_ngrx_entities_match_match_selectors__WEBPACK_IMPORTED_MODULE_5__;
const getLotFormData = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.createSelector)(_core_ngrx_entities_lot_lot_selectors__WEBPACK_IMPORTED_MODULE_2__.getCurrentLot, getAppState, _core_ngrx_crop_crop_selectors__WEBPACK_IMPORTED_MODULE_3__.selectCropState, _core_ngrx_entities_delivery_points_delivery_points_selectors__WEBPACK_IMPORTED_MODULE_4__.getAllDeliveryPoints, (lot, appState, cropState, deliveryPoints) => {
  try {
    lot = (0,lodash__WEBPACK_IMPORTED_MODULE_6__.cloneDeep)(lot);
    deliveryPoints = (0,lodash__WEBPACK_IMPORTED_MODULE_6__.cloneDeep)(deliveryPoints);
    const crops = cropState.crops || [];
    const paymentTerms = appState.paymentTerms.filter(paymentTerm => paymentTerm.id === 6) || [];
    const priceTypes = [{
      id: 1,
      name: 'Basis'
    }, {
      id: 2,
      name: 'Fixed Price'
    }];
    const safexMonths = appState.months || [];
    return {
      lot,
      crops,
      paymentTerms,
      priceTypes,
      safexMonths,
      deliveryPoints
    };
  } catch (error) {
    return null;
  }
});

/***/ })

}]);
//# sourceMappingURL=src_app_features_lots_lots_module_ts.js.map