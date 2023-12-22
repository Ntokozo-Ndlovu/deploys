"use strict";
(self["webpackChunkskudu_match"] = self["webpackChunkskudu_match"] || []).push([["default-src_app_features_shared_components_crop-categories_crop-categories_component_ts"],{

/***/ 4934:
/*!*****************************************************************************************!*\
  !*** ./src/app/features/shared/components/crop-categories/crop-categories.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CropCategoriesComponent: () => (/* binding */ CropCategoriesComponent),
/* harmony export */   CropCategoriesModule: () => (/* binding */ CropCategoriesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 5309);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 1527);
/* harmony import */ var src_app_core_helpers_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/helpers/constants */ 9487);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment.prod */ 7337);
/* harmony import */ var _category_info_modal_category_info_modal_category_info_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../category-info-modal/category-info-modal/category-info-modal.component */ 1374);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/legacy-dialog */ 1035);














function CropCategoriesComponent_div_1_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CropCategoriesComponent_div_1_ng_container_6_Template_img_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const cropCategoryCard_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.handleInfoModal(cropCategoryCard_r1.id, cropCategoryCard_r1.source, cropCategoryCard_r1.name, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
}
function CropCategoriesComponent_div_1_img_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 10);
  }
}
function CropCategoriesComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CropCategoriesComponent_div_1_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8);
      const cropCategoryCard_r1 = restoredCtx.$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r7.handleChooseCropCategory(cropCategoryCard_r1.id, cropCategoryCard_r1.isAvailable));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 5)(4, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, CropCategoriesComponent_div_1_ng_container_6_Template, 2, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, CropCategoriesComponent_div_1_img_7_Template, 1, 0, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const cropCategoryCard_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("l-coming-soon", !cropCategoryCard_r1.isAvailable);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", cropCategoryCard_r1.source, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("alt", cropCategoryCard_r1.sourceAlt);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](cropCategoryCard_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", cropCategoryCard_r1.name == "Grains & Oilseeds" || cropCategoryCard_r1.name == "Roughage (Bales)" || cropCategoryCard_r1.name == "Legumes & Pulses" || cropCategoryCard_r1.name == "Byproducts" || cropCategoryCard_r1.name == "SAFEX Forward Hedging");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !cropCategoryCard_r1.isAvailable);
  }
}
class CropCategoriesComponent {
  get cropCategories() {
    return this._cropCategoryCards;
  }
  set cropCategories(value) {
    this._cropCategoryCards = [];
    const activeCropCategories = value.filter(v => src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__.environment.CROP_CATEGORIES.includes(v.id));
    const inActiveCropCategories = value.filter(v => !src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__.environment.CROP_CATEGORIES.includes(v.id));
    const orderedCropCategories = [...activeCropCategories, ...inActiveCropCategories];
    for (let i = 0; i < orderedCropCategories.length; i++) {
      this._cropCategoryCards.push({
        ...orderedCropCategories[i],
        ...src_app_core_helpers_constants__WEBPACK_IMPORTED_MODULE_0__.cropCategoriesImages.find(cropCategoriesImage => cropCategoriesImage.name === orderedCropCategories[i].name),
        isAvailable: src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__.environment.CROP_CATEGORIES.includes(orderedCropCategories[i].id)
      });
    }
  }
  constructor(route, router, dialog) {
    this.route = route;
    this.router = router;
    this.dialog = dialog;
    this.$changeCropCategoryEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this._cropCategoryCards = [];
    this.isScoutCreate = false;
  }
  ngOnInit() {
    this.route.url.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1)).subscribe(() => {
      if (this.route.snapshot.url[0].path === 'create') {
        this.isScoutCreate = true;
      }
    });
    this.route.queryParams.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1)).subscribe(({
      lotType
    }) => {
      if (lotType) {
        this.lotType = lotType;
      }
    });
  }
  handleChooseCropCategory(id, isAvailable) {
    if (isAvailable) {
      this.isScoutCreate ? this.$changeCropCategoryEvent.emit(id) : this.router.navigate([src_app_core_helpers_constants__WEBPACK_IMPORTED_MODULE_0__.LOTS_CREATE_ROUTE], {
        queryParams: {
          lotType: this.lotType,
          cropCategoryId: id
        }
      });
    }
  }
  handleInfoModal(id, src, name, e) {
    e.stopPropagation();
    this.dialog.open(_category_info_modal_category_info_modal_category_info_modal_component__WEBPACK_IMPORTED_MODULE_2__.CategoryInfoModalComponent, {
      panelClass: 'g-modal-container',
      data: {
        categoryId: id,
        iconSource: src,
        categoryName: name
      }
    });
  }
  static #_ = this.ɵfac = function CropCategoriesComponent_Factory(t) {
    return new (t || CropCategoriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_6__.MatLegacyDialog));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: CropCategoriesComponent,
    selectors: [["app-crop-categories"]],
    inputs: {
      cropCategories: "cropCategories"
    },
    outputs: {
      $changeCropCategoryEvent: "$changeCropCategoryEvent"
    },
    decls: 2,
    vars: 3,
    consts: [[1, "l-container"], ["class", "l-card", "matRipple", "", 3, "l-coming-soon", "click", 4, "ngFor", "ngForOf"], ["matRipple", "", 1, "l-card", 3, "click"], [1, "l-card-img-container"], [1, "l-card-img", 3, "src", "alt"], [1, "l-card-title-container"], [1, "g-text-h2", "m-0"], [4, "ngIf"], ["class", "l-coming-soon-banner-img", "src", "./assets/images/coming-soon-banner.png", "alt", "Green banner thats reads 'coming soon'", 4, "ngIf"], ["src", "./assets/icons/info-icon-blue.svg", "alt", "info icon", 1, "g-card-info-icon", 3, "click"], ["src", "./assets/images/coming-soon-banner.png", "alt", "Green banner thats reads 'coming soon'", 1, "l-coming-soon-banner-img"]],
    template: function CropCategoriesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CropCategoriesComponent_div_1_Template, 8, 7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("l-container-scout", ctx.isScoutCreate);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx._cropCategoryCards);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatRipple],
    styles: [".l-container[_ngcontent-%COMP%], .l-container-scout[_ngcontent-%COMP%] {\n  width: 100%;\n  height: -moz-fit-content;\n  height: fit-content;\n  padding-bottom: 16px;\n}\n\n.l-container-scout[_ngcontent-%COMP%] {\n  width: 100vw !important;\n}\n\n.l-cards-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\n.l-card[_ngcontent-%COMP%] {\n  position: relative;\n  width: 90%;\n  height: 96px;\n  margin: 16px auto 0 auto;\n  display: flex;\n  background-color: #ffffff;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n.l-card-img-container[_ngcontent-%COMP%] {\n  width: 140px;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.l-card-img[_ngcontent-%COMP%] {\n  height: 30px;\n  width: auto;\n}\n\n.l-card-title-container[_ngcontent-%COMP%] {\n  width: calc(100% - 140px);\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n\n.l-coming-soon-banner-img[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n\n@media screen and (min-width: 576px) {\n  .l-container-scout[_ngcontent-%COMP%] {\n    width: 558px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvc2hhcmVkL2NvbXBvbmVudHMvY3JvcC1jYXRlZ29yaWVzL2Nyb3AtY2F0ZWdvcmllcy5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTs7RUFFSSxXQUFBO0VBQ0Esd0JBQUE7RUFBQSxtQkFBQTtFQUNBLG9CQUFBO0FBREo7O0FBR0E7RUFDSSx1QkFBQTtBQUFKOztBQUdBO0VBQ0ksV0FBQTtFQUNBLHdCQUFBO0VBQUEsbUJBQUE7QUFBSjs7QUFHQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQ2dEWTtFRC9DWixlQUFBO0FBQUo7O0FBR0E7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBR0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQUFKOztBQUdBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0FBQUo7O0FBS0E7RUFDSTtJQUNJLHVCQUFBO0VBRk47QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3NyYy92YXJpYWJsZXMuc2Nzcyc7XHJcblxyXG4ubC1jb250YWluZXIsXHJcbi5sLWNvbnRhaW5lci1zY291dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcclxufVxyXG4ubC1jb250YWluZXItc2NvdXQge1xyXG4gICAgd2lkdGg6IDEwMHZ3ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sLWNhcmRzLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbn1cclxuXHJcbi5sLWNhcmQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogOTZweDtcclxuICAgIG1hcmdpbjogMTZweCBhdXRvIDAgYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5sLWNhcmQtaW1nLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTQwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubC1jYXJkLWltZyB7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxufVxyXG5cclxuLmwtY2FyZC10aXRsZS1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDE0MHB4KTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubC1jb21pbmctc29vbi1iYW5uZXItaW1nIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG59XHJcblxyXG4vLyAjcmVnaW9uIFJlc3BvbnNpdmUgTWVkaWEgUXVlcmllc1xyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTc2cHgpIHtcclxuICAgIC5sLWNvbnRhaW5lci1zY291dCB7XHJcbiAgICAgICAgd2lkdGg6IDU1OHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vICNlbmRyZWdpb25cclxuIiwiLy8gVGV4dFxyXG4kYXBwLWZvbnQ6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuJGFwcC1pbnB1dC1mb250OiAnTXVsaXNoJywgc2Fucy1zZXJpZjtcclxuJGFwcC1mb250LWJsYWNrOiAjMzQzNDM0O1xyXG4kYXBwLXRleHQtZ3JleTogIzcwNzA3MDtcclxuJGFwcC1mb250LWlucHV0LXBsYWNlaG9sZGVyOiByZ2JhKDMwLCA0OCwgMzcsIDAuNTYpO1xyXG4kYXBwLWZvcm0taW5mby1jb2xvcjogI2FmYWZhZjtcclxuXHJcbi8vIENvbG9yc1xyXG4kYXBwLWJnLWNvbG9yOiAjZjlmOWZjO1xyXG4kYXBwLWJ1eWluZy1yZWQ6ICNlNzZmNTE7XHJcbiRhcHAtc2VsbGluZy1ncmVlbjogIzdmYTk5NTtcclxuJGFwcC1pbnB1dC1iZy1jb2xvcjogI2U2ZTZlNjtcclxuJGFwcC1ib3R0b20tbmF2LWl0ZW0tYmc6ICNlNWVmZTk7XHJcbiRhcHAtdGFicy1tYXJrZXRwbGFjZS1ncmVlbjogIzI4NWQ2MDtcclxuJGFwcC10YWJzLW5lZ290aWF0aW9ucy1ibHVlOiAjNGY5ZWJkO1xyXG4kYXBwLW5vdGlmaWNhdGlvbi1yZWQ6ICNhNTNhNGE7XHJcblxyXG4vLyBHcmFkaWVudHNcclxuJGFwcC1zZWxsaW5nLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjOThiNGE3LCAjNGE2ZTVlKTtcclxuJGFwcC1idXlpbmctZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICNkZjhhNzUsICNhMjUzM2YpO1xyXG4kYXBwLXNlbGxpbmctY2FyZC1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgIzg1YWU5YiwgIzczOWU4YSk7XHJcbiRhcHAtYnV5aW5nLWNhcmQtZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICRhcHAtYnV5aW5nLXJlZCwgI2M3NWQ0Myk7XHJcblxyXG4vLyBCdXR0b25zXHJcbiRhcHAtcHJpbWFyeS1idXR0b24tYmctY29sb3I6ICMzMWEwNWY7XHJcbiRhcHAtc2Vjb25kYXJ5LWJ1dHRvbi1iZy1jb2xvcjogI2U1ZTVlNTtcclxuJGFwcC1kZWxldGUtYnV0dG9uLXJlZDogI2QzNDU1YjtcclxuXHJcbi8vIE90aGVyXHJcbiRhcHAtYm9yZGVyLXJhZGl1czogOHB4O1xyXG4kYXBwLWJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDgpICFpbXBvcnRhbnQ7XHJcblxyXG4vLyAjcmVnaW9uIE1hdGNoIEV4Y2hhbmdlXHJcblxyXG4vLyAjcmVnaW9uIENvbG9yc1xyXG5cclxuJGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiRiYWNrZ3JvdW5kLWNvbG9yLWdyZXk6ICNmNWY1ZjU7XHJcbiR0ZXh0LWRhcms6ICM0MDQwNDA7XHJcbiR0ZXh0LXBsYWNlaG9sZGVyOiAjOGM4YzhjO1xyXG4kcHJpbWFyeS1jb2xvcjogIzQwN2VmODtcclxuJHNlY29uZGFyeS1jb2xvcjogI2U1ZWRmZDtcclxuJG1lZGl1bS1ibHVlOiAjOGQ5ZWM1O1xyXG4kcHJpbWFyeS1ncmVlbjogIzFjYWY3ZTtcclxuJHNlY29uZGFyeS1ncmVlbjogI2U3ZjdmMDtcclxuJHByaW1hcnktcmVkOiAjZDIzMDNkO1xyXG4kc2Vjb25kYXJ5LXJlZDogI2Y3ZThlNztcclxuJGlucHV0LWJvcmRlcjogI2UyZThmMDtcclxuJGVycm9yLW1lc3NhZ2U6ICNiMTE1MGE7XHJcbiRkaXNhYmxlZC1jb2xvcjogI2NiY2JjYjtcclxuXHJcbi8vICNlbmRyZWdpb25cclxuXHJcbi8vICNyZWdpb24gVGV4dFxyXG5cclxuJHRleHQtZm9udDogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4kZm9udC13ZWlnaHQtYm9sZDogNzAwO1xyXG4kZm9udC13ZWlnaHQtc2VtaS1ib2xkOiA2MDA7XHJcbiRmb250LXdlaWdodC1yZWd1bGFyOiA1MDA7XHJcbiRmb250LXdlaWdodC1saWdodDogNDAwO1xyXG5cclxuLy8gI2VuZHJlZ2lvblxyXG5cclxuLy8gI3JlZ2lvbiBCdXR0b25zXHJcblxyXG4kYnV0dG9uLWZvbnQtd2VpZ2h0OiA2MDA7XHJcblxyXG4vLyAjZW5kcmVnaW9uXHJcblxyXG4vLyAjcmVnaW9uIE90aGVyXHJcblxyXG4kYm9yZGVyLXJhZGl1czogNHB4O1xyXG5cclxuLy8gI2VuZHJlZ2lvblxyXG5cclxuLy8gI2VuZHJlZ2lvblxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}
class CropCategoriesModule {
  static #_ = this.ɵfac = function CropCategoriesModule_Factory(t) {
    return new (t || CropCategoriesModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: CropCategoriesModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatRippleModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CropCategoriesModule, {
    declarations: [CropCategoriesComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatRippleModule],
    exports: [CropCategoriesComponent]
  });
})();

/***/ })

}]);
//# sourceMappingURL=default-src_app_features_shared_components_crop-categories_crop-categories_component_ts.js.map