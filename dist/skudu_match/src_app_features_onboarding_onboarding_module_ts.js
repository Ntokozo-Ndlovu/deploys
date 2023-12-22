"use strict";
(self["webpackChunkskudu_match"] = self["webpackChunkskudu_match"] || []).push([["src_app_features_onboarding_onboarding_module_ts"],{

/***/ 98:
/*!*****************************************************************************!*\
  !*** ./src/app/features/onboarding/components/stepper/stepper.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StepperComponent: () => (/* binding */ StepperComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);


function StepperComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 8);
  }
  if (rf & 2) {
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("l-step-active", ctx_r0.stepperIndex === i_r2);
  }
}
class StepperComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function StepperComponent_Factory(t) {
    return new (t || StepperComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: StepperComponent,
    selectors: [["app-stepper"]],
    inputs: {
      stepperContents: "stepperContents",
      stepperIndex: "stepperIndex"
    },
    decls: 11,
    vars: 5,
    consts: [[1, "l-container"], [1, "l-content"], [1, "g-text-h1-dark", "my-4"], [1, "g-text-p-dark", "l-step-index", "mb-3"], [1, "g-text-p-dark", "mb-3"], ["alt", "step-img", 1, "l-img", "my-auto", 3, "src"], [1, "l-progress-container", "my-3"], ["class", "l-progress-step mx-1", 3, "l-step-active", 4, "ngFor", "ngForOf"], [1, "l-progress-step", "mx-1"]],
    template: function StepperComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, StepperComponent_div_10_Template, 1, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.stepperContents[ctx.stepperIndex].title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Step ", ctx.stepperIndex + 1, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.stepperContents[ctx.stepperIndex].info);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.stepperContents[ctx.stepperIndex].imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.stepperContents);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
    styles: [".l-container[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.l-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column;\n}\n\n.l-step-index[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 18px;\n}\n\n.l-img[_ngcontent-%COMP%] {\n  height: 150px;\n}\n\n.l-progress-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.l-progress-step[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background-color: #e5edfd;\n}\n\n.l-step-active[_ngcontent-%COMP%] {\n  background-color: #407ef8;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvb25ib2FyZGluZy9jb21wb25lbnRzL3N0ZXBwZXIvc3RlcHBlci5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFESjs7QUFJQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUFESjs7QUFHQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUdBO0VBQ0ksYUFBQTtBQUFKOztBQUdBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FBQUo7O0FBR0E7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJDV2M7QURYbEI7O0FBR0E7RUFDSSx5QkNNWTtBRE5oQiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3NyYy92YXJpYWJsZXMuc2Nzcyc7XHJcblxyXG4ubC1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5sLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuLmwtc3RlcC1pbmRleCB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4ubC1pbWcge1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxufVxyXG5cclxuLmwtcHJvZ3Jlc3MtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmwtcHJvZ3Jlc3Mtc3RlcCB7XHJcbiAgICB3aWR0aDogN3B4O1xyXG4gICAgaGVpZ2h0OiA3cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xyXG59XHJcblxyXG4ubC1zdGVwLWFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxufVxyXG4iLCIvLyBUZXh0XHJcbiRhcHAtZm9udDogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4kYXBwLWlucHV0LWZvbnQ6ICdNdWxpc2gnLCBzYW5zLXNlcmlmO1xyXG4kYXBwLWZvbnQtYmxhY2s6ICMzNDM0MzQ7XHJcbiRhcHAtdGV4dC1ncmV5OiAjNzA3MDcwO1xyXG4kYXBwLWZvbnQtaW5wdXQtcGxhY2Vob2xkZXI6IHJnYmEoMzAsIDQ4LCAzNywgMC41Nik7XHJcbiRhcHAtZm9ybS1pbmZvLWNvbG9yOiAjYWZhZmFmO1xyXG5cclxuLy8gQ29sb3JzXHJcbiRhcHAtYmctY29sb3I6ICNmOWY5ZmM7XHJcbiRhcHAtYnV5aW5nLXJlZDogI2U3NmY1MTtcclxuJGFwcC1zZWxsaW5nLWdyZWVuOiAjN2ZhOTk1O1xyXG4kYXBwLWlucHV0LWJnLWNvbG9yOiAjZTZlNmU2O1xyXG4kYXBwLWJvdHRvbS1uYXYtaXRlbS1iZzogI2U1ZWZlOTtcclxuJGFwcC10YWJzLW1hcmtldHBsYWNlLWdyZWVuOiAjMjg1ZDYwO1xyXG4kYXBwLXRhYnMtbmVnb3RpYXRpb25zLWJsdWU6ICM0ZjllYmQ7XHJcbiRhcHAtbm90aWZpY2F0aW9uLXJlZDogI2E1M2E0YTtcclxuXHJcbi8vIEdyYWRpZW50c1xyXG4kYXBwLXNlbGxpbmctZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICM5OGI0YTcsICM0YTZlNWUpO1xyXG4kYXBwLWJ1eWluZy1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgI2RmOGE3NSwgI2EyNTMzZik7XHJcbiRhcHAtc2VsbGluZy1jYXJkLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjODVhZTliLCAjNzM5ZThhKTtcclxuJGFwcC1idXlpbmctY2FyZC1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgJGFwcC1idXlpbmctcmVkLCAjYzc1ZDQzKTtcclxuXHJcbi8vIEJ1dHRvbnNcclxuJGFwcC1wcmltYXJ5LWJ1dHRvbi1iZy1jb2xvcjogIzMxYTA1ZjtcclxuJGFwcC1zZWNvbmRhcnktYnV0dG9uLWJnLWNvbG9yOiAjZTVlNWU1O1xyXG4kYXBwLWRlbGV0ZS1idXR0b24tcmVkOiAjZDM0NTViO1xyXG5cclxuLy8gT3RoZXJcclxuJGFwcC1ib3JkZXItcmFkaXVzOiA4cHg7XHJcbiRhcHAtYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wOCkgIWltcG9ydGFudDtcclxuXHJcbi8vICNyZWdpb24gTWF0Y2ggRXhjaGFuZ2VcclxuXHJcbi8vICNyZWdpb24gQ29sb3JzXHJcblxyXG4kYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuJGJhY2tncm91bmQtY29sb3ItZ3JleTogI2Y1ZjVmNTtcclxuJHRleHQtZGFyazogIzQwNDA0MDtcclxuJHRleHQtcGxhY2Vob2xkZXI6ICM4YzhjOGM7XHJcbiRwcmltYXJ5LWNvbG9yOiAjNDA3ZWY4O1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjZTVlZGZkO1xyXG4kbWVkaXVtLWJsdWU6ICM4ZDllYzU7XHJcbiRwcmltYXJ5LWdyZWVuOiAjMWNhZjdlO1xyXG4kc2Vjb25kYXJ5LWdyZWVuOiAjZTdmN2YwO1xyXG4kcHJpbWFyeS1yZWQ6ICNkMjMwM2Q7XHJcbiRzZWNvbmRhcnktcmVkOiAjZjdlOGU3O1xyXG4kaW5wdXQtYm9yZGVyOiAjZTJlOGYwO1xyXG4kZXJyb3ItbWVzc2FnZTogI2IxMTUwYTtcclxuJGRpc2FibGVkLWNvbG9yOiAjY2JjYmNiO1xyXG5cclxuLy8gI2VuZHJlZ2lvblxyXG5cclxuLy8gI3JlZ2lvbiBUZXh0XHJcblxyXG4kdGV4dC1mb250OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiRmb250LXdlaWdodC1ib2xkOiA3MDA7XHJcbiRmb250LXdlaWdodC1zZW1pLWJvbGQ6IDYwMDtcclxuJGZvbnQtd2VpZ2h0LXJlZ3VsYXI6IDUwMDtcclxuJGZvbnQtd2VpZ2h0LWxpZ2h0OiA0MDA7XHJcblxyXG4vLyAjZW5kcmVnaW9uXHJcblxyXG4vLyAjcmVnaW9uIEJ1dHRvbnNcclxuXHJcbiRidXR0b24tZm9udC13ZWlnaHQ6IDYwMDtcclxuXHJcbi8vICNlbmRyZWdpb25cclxuXHJcbi8vICNyZWdpb24gT3RoZXJcclxuXHJcbiRib3JkZXItcmFkaXVzOiA0cHg7XHJcblxyXG4vLyAjZW5kcmVnaW9uXHJcblxyXG4vLyAjZW5kcmVnaW9uXHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 3946:
/*!******************************************************************!*\
  !*** ./src/app/features/onboarding/onboarding-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OnboardingRoutingModule: () => (/* binding */ OnboardingRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _onboarding_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onboarding.component */ 4573);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);




const routes = [{
  path: '',
  component: _onboarding_component__WEBPACK_IMPORTED_MODULE_0__.OnboardingComponent
}];
class OnboardingRoutingModule {
  static #_ = this.ɵfac = function OnboardingRoutingModule_Factory(t) {
    return new (t || OnboardingRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: OnboardingRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](OnboardingRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 4573:
/*!*************************************************************!*\
  !*** ./src/app/features/onboarding/onboarding.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OnboardingComponent: () => (/* binding */ OnboardingComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 1527);
/* harmony import */ var src_app_core_helpers_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/helpers/constants */ 9487);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/legacy-button */ 8654);
/* harmony import */ var _components_stepper_stepper_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/stepper/stepper.component */ 98);







class OnboardingComponent {
  constructor(route, router) {
    this.route = route;
    this.router = router;
    this.onboardingContents = src_app_core_helpers_constants__WEBPACK_IMPORTED_MODULE_0__.onboardingContent;
    this.fromSupport = false;
    this.stepperIndex = 0;
    this.showAnimation = false;
  }
  ngOnInit() {
    this.route.queryParams.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1)).subscribe(({
      stepperIndex,
      fromSupport
    }) => {
      if (stepperIndex) {
        this.stepperIndex = +stepperIndex;
      }
      if (fromSupport === 'true') {
        this.fromSupport = true;
      }
    });
  }
  handleProgressNext() {
    if (this.stepperIndex === this.onboardingContents.length - 1) {
      this.router.navigate([src_app_core_helpers_constants__WEBPACK_IMPORTED_MODULE_0__.SUBSCRIBE_ROUTE], {
        queryParams: {
          fromSupport: this.fromSupport
        }
      });
    } else {
      this.showAnimation = true;
      setTimeout(() => {
        this.showAnimation = false;
      }, 500);
      this.stepperIndex += 1;
      this.updateQueryParamsHelper();
    }
  }
  handleNavigateCreateScout() {
    this.router.navigate([src_app_core_helpers_constants__WEBPACK_IMPORTED_MODULE_0__.SCOUT_CREATE_ROUTE]);
  }
  updateQueryParamsHelper() {
    const queryParams = this.fromSupport ? {
      fromSupport: this.fromSupport,
      stepperIndex: this.stepperIndex
    } : {
      stepperIndex: this.stepperIndex
    };
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams,
      replaceUrl: true
    });
  }
  static #_ = this.ɵfac = function OnboardingComponent_Factory(t) {
    return new (t || OnboardingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: OnboardingComponent,
    selectors: [["app-onboarding"]],
    decls: 6,
    vars: 4,
    consts: [[1, "g-app-dimensions"], [1, "l-container"], [1, "l-content"], [3, "stepperContents", "stepperIndex"], ["mat-flat-button", "", 1, "g-primary-button", "mt-3", 3, "click"]],
    template: function OnboardingComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "app-stepper", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function OnboardingComponent_Template_button_click_4_listener() {
          return ctx.handleProgressNext();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("l-fade-in", ctx.showAnimation);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("stepperContents", ctx.onboardingContents)("stepperIndex", ctx.stepperIndex);
      }
    },
    dependencies: [_angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_5__.MatLegacyButton, _components_stepper_stepper_component__WEBPACK_IMPORTED_MODULE_1__.StepperComponent],
    styles: [".l-container[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  background-color: #ffffff;\n  padding: 16px;\n  overflow: auto;\n}\n\n.l-content[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n\n.l-fade-in[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.5s;\n}\n\n@keyframes _ngcontent-%COMP%_fadeIn {\n  0% {\n    left: 30%;\n    opacity: 0.2;\n  }\n  100% {\n    left: 0;\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvb25ib2FyZGluZy9vbmJvYXJkaW5nLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQytCZTtFRDlCZixhQUFBO0VBQ0EsY0FBQTtBQURKOztBQUlBO0VBQ0ksWUFBQTtBQURKOztBQUlBO0VBQ0ksc0JBQUE7QUFESjs7QUFJQTtFQUNJO0lBQ0ksU0FBQTtJQUNBLFlBQUE7RUFETjtFQUdFO0lBQ0ksT0FBQTtJQUNBLFVBQUE7RUFETjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vdmFyaWFibGVzLnNjc3MnO1xyXG5cclxuLmwtY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3I7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi5sLWNvbnRlbnQge1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG59XHJcblxyXG4ubC1mYWRlLWluIHtcclxuICAgIGFuaW1hdGlvbjogZmFkZUluIDAuNXM7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZUluIHtcclxuICAgIDAlIHtcclxuICAgICAgICBsZWZ0OiAzMCU7XHJcbiAgICAgICAgb3BhY2l0eTogMC4yO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIFRleHRcclxuJGFwcC1mb250OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiRhcHAtaW5wdXQtZm9udDogJ011bGlzaCcsIHNhbnMtc2VyaWY7XHJcbiRhcHAtZm9udC1ibGFjazogIzM0MzQzNDtcclxuJGFwcC10ZXh0LWdyZXk6ICM3MDcwNzA7XHJcbiRhcHAtZm9udC1pbnB1dC1wbGFjZWhvbGRlcjogcmdiYSgzMCwgNDgsIDM3LCAwLjU2KTtcclxuJGFwcC1mb3JtLWluZm8tY29sb3I6ICNhZmFmYWY7XHJcblxyXG4vLyBDb2xvcnNcclxuJGFwcC1iZy1jb2xvcjogI2Y5ZjlmYztcclxuJGFwcC1idXlpbmctcmVkOiAjZTc2ZjUxO1xyXG4kYXBwLXNlbGxpbmctZ3JlZW46ICM3ZmE5OTU7XHJcbiRhcHAtaW5wdXQtYmctY29sb3I6ICNlNmU2ZTY7XHJcbiRhcHAtYm90dG9tLW5hdi1pdGVtLWJnOiAjZTVlZmU5O1xyXG4kYXBwLXRhYnMtbWFya2V0cGxhY2UtZ3JlZW46ICMyODVkNjA7XHJcbiRhcHAtdGFicy1uZWdvdGlhdGlvbnMtYmx1ZTogIzRmOWViZDtcclxuJGFwcC1ub3RpZmljYXRpb24tcmVkOiAjYTUzYTRhO1xyXG5cclxuLy8gR3JhZGllbnRzXHJcbiRhcHAtc2VsbGluZy1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgIzk4YjRhNywgIzRhNmU1ZSk7XHJcbiRhcHAtYnV5aW5nLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjZGY4YTc1LCAjYTI1MzNmKTtcclxuJGFwcC1zZWxsaW5nLWNhcmQtZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICM4NWFlOWIsICM3MzllOGEpO1xyXG4kYXBwLWJ1eWluZy1jYXJkLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAkYXBwLWJ1eWluZy1yZWQsICNjNzVkNDMpO1xyXG5cclxuLy8gQnV0dG9uc1xyXG4kYXBwLXByaW1hcnktYnV0dG9uLWJnLWNvbG9yOiAjMzFhMDVmO1xyXG4kYXBwLXNlY29uZGFyeS1idXR0b24tYmctY29sb3I6ICNlNWU1ZTU7XHJcbiRhcHAtZGVsZXRlLWJ1dHRvbi1yZWQ6ICNkMzQ1NWI7XHJcblxyXG4vLyBPdGhlclxyXG4kYXBwLWJvcmRlci1yYWRpdXM6IDhweDtcclxuJGFwcC1ib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjA4KSAhaW1wb3J0YW50O1xyXG5cclxuLy8gI3JlZ2lvbiBNYXRjaCBFeGNoYW5nZVxyXG5cclxuLy8gI3JlZ2lvbiBDb2xvcnNcclxuXHJcbiRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4kYmFja2dyb3VuZC1jb2xvci1ncmV5OiAjZjVmNWY1O1xyXG4kdGV4dC1kYXJrOiAjNDA0MDQwO1xyXG4kdGV4dC1wbGFjZWhvbGRlcjogIzhjOGM4YztcclxuJHByaW1hcnktY29sb3I6ICM0MDdlZjg7XHJcbiRzZWNvbmRhcnktY29sb3I6ICNlNWVkZmQ7XHJcbiRtZWRpdW0tYmx1ZTogIzhkOWVjNTtcclxuJHByaW1hcnktZ3JlZW46ICMxY2FmN2U7XHJcbiRzZWNvbmRhcnktZ3JlZW46ICNlN2Y3ZjA7XHJcbiRwcmltYXJ5LXJlZDogI2QyMzAzZDtcclxuJHNlY29uZGFyeS1yZWQ6ICNmN2U4ZTc7XHJcbiRpbnB1dC1ib3JkZXI6ICNlMmU4ZjA7XHJcbiRlcnJvci1tZXNzYWdlOiAjYjExNTBhO1xyXG4kZGlzYWJsZWQtY29sb3I6ICNjYmNiY2I7XHJcblxyXG4vLyAjZW5kcmVnaW9uXHJcblxyXG4vLyAjcmVnaW9uIFRleHRcclxuXHJcbiR0ZXh0LWZvbnQ6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuJGZvbnQtd2VpZ2h0LWJvbGQ6IDcwMDtcclxuJGZvbnQtd2VpZ2h0LXNlbWktYm9sZDogNjAwO1xyXG4kZm9udC13ZWlnaHQtcmVndWxhcjogNTAwO1xyXG4kZm9udC13ZWlnaHQtbGlnaHQ6IDQwMDtcclxuXHJcbi8vICNlbmRyZWdpb25cclxuXHJcbi8vICNyZWdpb24gQnV0dG9uc1xyXG5cclxuJGJ1dHRvbi1mb250LXdlaWdodDogNjAwO1xyXG5cclxuLy8gI2VuZHJlZ2lvblxyXG5cclxuLy8gI3JlZ2lvbiBPdGhlclxyXG5cclxuJGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHJcbi8vICNlbmRyZWdpb25cclxuXHJcbi8vICNlbmRyZWdpb25cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 9932:
/*!**********************************************************!*\
  !*** ./src/app/features/onboarding/onboarding.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OnboardingModule: () => (/* binding */ OnboardingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _onboarding_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onboarding.component */ 4573);
/* harmony import */ var _onboarding_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onboarding-routing.module */ 3946);
/* harmony import */ var _components_stepper_stepper_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/stepper/stepper.component */ 98);
/* harmony import */ var _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/legacy-button */ 8654);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);






class OnboardingModule {
  static #_ = this.ɵfac = function OnboardingModule_Factory(t) {
    return new (t || OnboardingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: OnboardingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _onboarding_routing_module__WEBPACK_IMPORTED_MODULE_1__.OnboardingRoutingModule, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_5__.MatLegacyButtonModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](OnboardingModule, {
    declarations: [_onboarding_component__WEBPACK_IMPORTED_MODULE_0__.OnboardingComponent, _components_stepper_stepper_component__WEBPACK_IMPORTED_MODULE_2__.StepperComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _onboarding_routing_module__WEBPACK_IMPORTED_MODULE_1__.OnboardingRoutingModule, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_5__.MatLegacyButtonModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_features_onboarding_onboarding_module_ts.js.map