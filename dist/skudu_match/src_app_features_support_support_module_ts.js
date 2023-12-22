"use strict";
(self["webpackChunkskudu_match"] = self["webpackChunkskudu_match"] || []).push([["src_app_features_support_support_module_ts"],{

/***/ 3937:
/*!******************************************************!*\
  !*** ./src/app/core/ngrx/paygate/paygate.effects.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaygateEffects: () => (/* binding */ PaygateEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ 1575);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 2607);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 1527);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 1891);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 2389);
/* harmony import */ var _services_paygate_paygate_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/paygate/paygate.service */ 7045);
/* harmony import */ var _paygate_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paygate.actions */ 3171);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);







class PaygateEffects {
  constructor(actions$, api) {
    this.actions$ = actions$;
    this.api = api;
    this.ReqPaySubs$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_paygate_actions__WEBPACK_IMPORTED_MODULE_1__.ReqPaySubs), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(payload => {
      return this.api.postPaySubs(payload.transaction).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(transaction => {
        console.log('Effect transaction: ', transaction);
        return [_paygate_actions__WEBPACK_IMPORTED_MODULE_1__.ReqPaySubsSuccess()];
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => {
        console.log('ReqPaySubs: ', error.message);
        return [_paygate_actions__WEBPACK_IMPORTED_MODULE_1__.ReqPaySubsFail()];
      }));
    })));
  }
  static #_ = this.ɵfac = function PaygateEffects_Factory(t) {
    return new (t || PaygateEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_services_paygate_paygate_service__WEBPACK_IMPORTED_MODULE_0__.PaygateService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
    token: PaygateEffects,
    factory: PaygateEffects.ɵfac
  });
}

/***/ }),

/***/ 7045:
/*!**********************************************************!*\
  !*** ./src/app/core/services/paygate/paygate.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaygateService: () => (/* binding */ PaygateService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 4860);



const paygateAPI = 'https://www.paygate.co.za/paysubs/process.trans';
class PaygateService {
  constructor(http) {
    this.http = http;
    this.baseHeaders = {
      password: 'secret'
    };
  }
  //#region Paygate Subscriptions
  postPaySubs(transaction) {
    return this.http.post(`${paygateAPI}`, {
      transaction
    }, {
      headers: this.baseHeaders
    });
  }
  static #_ = this.ɵfac = function PaygateService_Factory(t) {
    return new (t || PaygateService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: PaygateService,
    factory: PaygateService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 9278:
/*!********************************************************************************!*\
  !*** ./src/app/features/support/components/contact-us/contact-us.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactUsComponent: () => (/* binding */ ContactUsComponent)
/* harmony export */ });
/* harmony import */ var _core_helpers_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../core/helpers/constants */ 9487);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var _googlemaps_js_api_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @googlemaps/js-api-loader */ 8914);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/google-maps */ 8684);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ 5309);










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
    clickable: false,
    draggable: false
  };
};
function ContactUsComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20)(1, "google-map", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "map-marker", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("zoom", 14)("center", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](5, _c0, ctx_r0.skuduOfficeCoordinates.lat, ctx_r0.skuduOfficeCoordinates.lng))("options", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](8, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("position", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](9, _c0, ctx_r0.skuduOfficeCoordinates.lat, ctx_r0.skuduOfficeCoordinates.lng))("options", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](12, _c2));
  }
}
class ContactUsComponent {
  constructor(loader, router) {
    this.loader = loader;
    this.router = router;
    this.skuduOfficeCoordinates = {
      lat: -33.7317975,
      lng: 18.9642491
    };
    this.apiLoaded = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(false);
  }
  ngOnInit() {
    this.loader.importLibrary('maps').then(({
      Map
    }) => {
      this.apiLoaded?.next(true);
    }).catch(e => {
      // do something
    });
  }
  handleBack() {
    this.router.navigate([_core_helpers_constants__WEBPACK_IMPORTED_MODULE_0__.SUPPORT_ROUTE]);
  }
  static #_ = this.ɵfac = function ContactUsComponent_Factory(t) {
    return new (t || ContactUsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_googlemaps_js_api_loader__WEBPACK_IMPORTED_MODULE_1__.Loader), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ContactUsComponent,
    selectors: [["app-contact-us"]],
    decls: 38,
    vars: 3,
    consts: [[1, "g-app-dimensions", "l-container"], [1, "l-header"], ["src", "./assets/icons/back-arrow-icon.svg", "alt", "back-arrow-icon", 1, "l-back-icon", 3, "click"], [1, "g-text-h2-dark"], [1, "l-content"], [1, "d-flex", "flex-column"], [1, "g-text-h1-dark", "mb-3"], [1, "g-text-p-dark", "text-left"], [1, "mt-3"], [1, "d-flex", "flex-row", "mb-3"], ["src", "../../../../../assets/images/whatsapp.svg", "alt", "Whatsapp Logo", 1, "l-img"], [1, "g-text-p-dark", "text-left", "ml-5"], ["src", "../../../../../assets//images//blue-phone.svg", "alt", "Blue Phone Symbol", 1, "l-img"], [1, "d-flex", "flex-row"], ["src", "../../../../../assets//images/blue-at-symbol.svg", "alt", "Blue At Symbol", 1, "l-img"], ["href", "mailto:info@matchmx.com"], [1, "g-text-h1-dark", "text-left", "my-3"], [1, "g-text-p-dark", "text-left", "mb-3"], ["class", "l-map-holder", 4, "ngIf"], ["href", "https://forms.gle/Qtb3mpDuHbjD3SyA8", "target", "_blank", "matRipple", "", 1, "g-primary-button", "l-feedback-button"], [1, "l-map-holder"], [1, "g-delivery-form-map", 3, "zoom", "center", "options"], [3, "position", "options"]],
    template: function ContactUsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ContactUsComponent_Template_img_click_2_listener() {
          return ctx.handleBack();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Get in Touch. Get Involved");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " Do you have an idea or question? Is there a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " feature missing that can add value to you? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " Please tell us how we can do it better! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 8)(16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Whatsapp: 072 332 2936");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Call: 021 140 0387");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, " Email: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "info@matchmx.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "h1", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Where to Find Us:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, " Match Exchange, 1st Floor, Newlink Building, 1 New St, Esterville, Paarl, South Africa ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, ContactUsComponent_div_34_Template, 3, 13, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](35, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Leave Feedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](35, 1, ctx.apiLoaded));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_google_maps__WEBPACK_IMPORTED_MODULE_6__.GoogleMap, _angular_google_maps__WEBPACK_IMPORTED_MODULE_6__.MapMarker, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MatRipple, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
    styles: [".l-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #f5f5f5;\n  overflow: auto;\n}\n\n.l-header[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  min-height: 56px;\n  background-color: white;\n  padding-top: 16px;\n}\n\n.l-back-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 16px;\n  top: 20px;\n  width: 20.24px;\n  height: 13.5px;\n}\n\n.l-content[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 16px;\n}\n\n.l-map-holder[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.l-img[_ngcontent-%COMP%] {\n  height: 24px;\n  width: auto;\n}\n\n.l-feedback-button[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-decoration: none !important;\n  color: #ffffff !important;\n  margin-top: 16px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvc3VwcG9ydC9jb21wb25lbnRzL2NvbnRhY3QtdXMvY29udGFjdC11cy5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkM4Qm9CO0VEN0JwQixjQUFBO0FBREo7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUFESjs7QUFJQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQURKOztBQUlBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUFESjs7QUFJQTtFQUNJLGtCQ3NDWTtFRHJDWixnQkFBQTtBQURKOztBQUlBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUFESjs7QUFJQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQURKIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3JjL3ZhcmlhYmxlcy5zY3NzJztcclxuXHJcbi5sLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yLWdyZXk7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLmwtaGVhZGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogNTZweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZy10b3A6IDE2cHg7XHJcbn1cclxuXHJcbi5sLWJhY2staWNvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAxNnB4O1xyXG4gICAgdG9wOiAyMHB4O1xyXG4gICAgd2lkdGg6IDIwLjI0cHg7XHJcbiAgICBoZWlnaHQ6IDEzLjVweDtcclxufVxyXG5cclxuLmwtY29udGVudCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbn1cclxuXHJcbi5sLW1hcC1ob2xkZXIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ubC1pbWcge1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbn1cclxuXHJcbi5sLWZlZWRiYWNrLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG59XHJcbiIsIi8vIFRleHRcclxuJGFwcC1mb250OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiRhcHAtaW5wdXQtZm9udDogJ011bGlzaCcsIHNhbnMtc2VyaWY7XHJcbiRhcHAtZm9udC1ibGFjazogIzM0MzQzNDtcclxuJGFwcC10ZXh0LWdyZXk6ICM3MDcwNzA7XHJcbiRhcHAtZm9udC1pbnB1dC1wbGFjZWhvbGRlcjogcmdiYSgzMCwgNDgsIDM3LCAwLjU2KTtcclxuJGFwcC1mb3JtLWluZm8tY29sb3I6ICNhZmFmYWY7XHJcblxyXG4vLyBDb2xvcnNcclxuJGFwcC1iZy1jb2xvcjogI2Y5ZjlmYztcclxuJGFwcC1idXlpbmctcmVkOiAjZTc2ZjUxO1xyXG4kYXBwLXNlbGxpbmctZ3JlZW46ICM3ZmE5OTU7XHJcbiRhcHAtaW5wdXQtYmctY29sb3I6ICNlNmU2ZTY7XHJcbiRhcHAtYm90dG9tLW5hdi1pdGVtLWJnOiAjZTVlZmU5O1xyXG4kYXBwLXRhYnMtbWFya2V0cGxhY2UtZ3JlZW46ICMyODVkNjA7XHJcbiRhcHAtdGFicy1uZWdvdGlhdGlvbnMtYmx1ZTogIzRmOWViZDtcclxuJGFwcC1ub3RpZmljYXRpb24tcmVkOiAjYTUzYTRhO1xyXG5cclxuLy8gR3JhZGllbnRzXHJcbiRhcHAtc2VsbGluZy1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgIzk4YjRhNywgIzRhNmU1ZSk7XHJcbiRhcHAtYnV5aW5nLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjZGY4YTc1LCAjYTI1MzNmKTtcclxuJGFwcC1zZWxsaW5nLWNhcmQtZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICM4NWFlOWIsICM3MzllOGEpO1xyXG4kYXBwLWJ1eWluZy1jYXJkLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAkYXBwLWJ1eWluZy1yZWQsICNjNzVkNDMpO1xyXG5cclxuLy8gQnV0dG9uc1xyXG4kYXBwLXByaW1hcnktYnV0dG9uLWJnLWNvbG9yOiAjMzFhMDVmO1xyXG4kYXBwLXNlY29uZGFyeS1idXR0b24tYmctY29sb3I6ICNlNWU1ZTU7XHJcbiRhcHAtZGVsZXRlLWJ1dHRvbi1yZWQ6ICNkMzQ1NWI7XHJcblxyXG4vLyBPdGhlclxyXG4kYXBwLWJvcmRlci1yYWRpdXM6IDhweDtcclxuJGFwcC1ib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjA4KSAhaW1wb3J0YW50O1xyXG5cclxuLy8gI3JlZ2lvbiBNYXRjaCBFeGNoYW5nZVxyXG5cclxuLy8gI3JlZ2lvbiBDb2xvcnNcclxuXHJcbiRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4kYmFja2dyb3VuZC1jb2xvci1ncmV5OiAjZjVmNWY1O1xyXG4kdGV4dC1kYXJrOiAjNDA0MDQwO1xyXG4kdGV4dC1wbGFjZWhvbGRlcjogIzhjOGM4YztcclxuJHByaW1hcnktY29sb3I6ICM0MDdlZjg7XHJcbiRzZWNvbmRhcnktY29sb3I6ICNlNWVkZmQ7XHJcbiRtZWRpdW0tYmx1ZTogIzhkOWVjNTtcclxuJHByaW1hcnktZ3JlZW46ICMxY2FmN2U7XHJcbiRzZWNvbmRhcnktZ3JlZW46ICNlN2Y3ZjA7XHJcbiRwcmltYXJ5LXJlZDogI2QyMzAzZDtcclxuJHNlY29uZGFyeS1yZWQ6ICNmN2U4ZTc7XHJcbiRpbnB1dC1ib3JkZXI6ICNlMmU4ZjA7XHJcbiRlcnJvci1tZXNzYWdlOiAjYjExNTBhO1xyXG4kZGlzYWJsZWQtY29sb3I6ICNjYmNiY2I7XHJcblxyXG4vLyAjZW5kcmVnaW9uXHJcblxyXG4vLyAjcmVnaW9uIFRleHRcclxuXHJcbiR0ZXh0LWZvbnQ6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuJGZvbnQtd2VpZ2h0LWJvbGQ6IDcwMDtcclxuJGZvbnQtd2VpZ2h0LXNlbWktYm9sZDogNjAwO1xyXG4kZm9udC13ZWlnaHQtcmVndWxhcjogNTAwO1xyXG4kZm9udC13ZWlnaHQtbGlnaHQ6IDQwMDtcclxuXHJcbi8vICNlbmRyZWdpb25cclxuXHJcbi8vICNyZWdpb24gQnV0dG9uc1xyXG5cclxuJGJ1dHRvbi1mb250LXdlaWdodDogNjAwO1xyXG5cclxuLy8gI2VuZHJlZ2lvblxyXG5cclxuLy8gI3JlZ2lvbiBPdGhlclxyXG5cclxuJGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHJcbi8vICNlbmRyZWdpb25cclxuXHJcbi8vICNlbmRyZWdpb25cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3000:
/*!**********************************************************************************************!*\
  !*** ./src/app/features/support/components/detailed-tutorial/detailed-tutorial.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DetailedTutorialComponent: () => (/* binding */ DetailedTutorialComponent)
/* harmony export */ });
/* harmony import */ var _core_helpers_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../core/helpers/constants */ 9487);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);





function DetailedTutorialComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21)(1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " \u2022 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", item_r1.title, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.value);
  }
}
class DetailedTutorialComponent {
  constructor(router) {
    this.router = router;
    this.items = _core_helpers_constants__WEBPACK_IMPORTED_MODULE_0__.TUTORIAL_TABLE_DATA;
  }
  ngOnInit() {}
  handleBack() {
    this.router.navigate([_core_helpers_constants__WEBPACK_IMPORTED_MODULE_0__.SUPPORT_ROUTE]);
  }
  static #_ = this.ɵfac = function DetailedTutorialComponent_Factory(t) {
    return new (t || DetailedTutorialComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: DetailedTutorialComponent,
    selectors: [["app-detailed-tutorial"]],
    decls: 85,
    vars: 1,
    consts: [[1, "g-app-dimensions", "l-container"], [1, "l-header"], ["src", "./assets/icons/back-arrow-icon.svg", "alt", "back-arrow-icon", 1, "l-back-icon", 3, "click"], [1, "g-text-h2-dark"], [1, "l-content"], [1, "d-flex", "flex-column"], [1, "l-text-h2"], [1, "mt-3", "g-text-p-dark", "text-left"], [1, "g-text-p-dark", "text-left", "mt-3"], [1, "d-flex", "flex-column", "align-items-center"], ["src", "../../../../../assets/images/detail-tutorial-scout.svg", "alt", "Person with binoculars looking on", 1, "l-scout-image", "my-4"], [1, "mt-3", "g-text-p-dark", "text-left", "pl-3"], ["src", "../../../../../assets/images/detail-tutorial-lot.svg", "alt", "Hand holding back of wheat", 1, "l-lot-image", "my-4"], [1, "my-3"], ["class", "l-table g-text-p-small-dark", 4, "ngFor", "ngForOf"], ["src", "../../../../../assets/images/detail-tutorial-puzzle.svg", "alt", "Undirected graph linking to green circles with icons", 1, "l-compare-image", "my-4"], ["src", "../../../../../assets/images/detail-tutorial-negotiate.svg", "alt", "Two people having a conversation beside a bag of products", 1, "l-negotiate-image", "my-4"], ["src", "../../../../../assets/images/detail-tutorial-match.svg", "alt", "Handshake above a signed contract", 1, "l-match-image", "my-4"], ["src", "../../../../../assets/images/detail-tutorial-kyc.svg", "alt", "Two people having a conversation over a bag of products", 1, "l-know-image", "my-4"], ["src", "../../../../../assets/images/detail-tutorial-kyc.svg", "alt", "Handshake above a signed contract", 1, "l-match-image", "my-4"], [1, "mt-3"], [1, "l-table", "g-text-p-small-dark"], [1, "w-50"]],
    template: function DetailedTutorialComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DetailedTutorialComponent_Template_img_click_2_listener() {
          return ctx.handleBack();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Detailed Tutorial");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "div")(8, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "So How Does It Work?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Match Exchange stimulates a cash market at every point where a Lot is created, and doing so creates a transparent and fair market for both buyers and sellers. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Follow the four easy steps to get the perfect Match for your produce. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9)(15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div")(18, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Step 1: Create a Scout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " Tell the Market what you are planning to buy or sell. You can indicate what products you plan to produce or purchase, and the Scout will display how many counterparties are currently available with matching needs. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " \u2022 Product (commodity): e.g. Wheat ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " \u2022 Position (location): e.g. Malmesbury ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 9)(27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div")(30, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Step 2: Create a Lot");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, " Match Exchange stimulates a cash market at every point where a Lot is created. By creating a Match Exchange Lot you are communicating to the Market that you are a willing buyer or seller of a specific portion of your product. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, " To create a lot you have to tell the market about the 5 \u2018s and 2 Q\u2019s. They are, for example: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, DetailedTutorialComponent_div_37_Template, 7, 2, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 9)(39, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div")(42, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Step 3: Compare Matches");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, " Once you have created a Lot, Match Exchange will match your Lot with counter Lots of similar needs. Counter Lots display the 5 P\u2019s and 2 Q\u2019s of your own Lot in comparison to the counter Lots, and you can enter into a negotiation with the matching Lot of your choosing. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 9)(47, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div")(50, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Step 4: Negotiate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, " Both the buyer and seller are notified when a negotiation on a Lot has started. In the Negotiating Room the buyer and seller can obtain consensus on the 5 P's and 2 Q's. When consensus has been reached, you have a Match! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 9)(55, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div")(58, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Step 5: Match");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, " Once you have a Match you will be introduced to the counterparty with the 5 P\u2019s & 2 Q\u2019s you agreed upon. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, " Match Exchange only facilitates the platform for getting consensus on the marketing of your product. It is up to the buyer and seller to follow through on the transaction from here via further communication. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 9)(65, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div")(68, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Step 6: Know your counterparty (\u201CKYC-party\u201D)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, " Refer to the \u201CKnow your Counterparty (\"KYC-party\")\u201D section for steps to ensure that the counterparty you are dealing with is a trusted party. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, " Match Exchange is currently implementing \u2018user verification\u2019 to verify users on the platform. This will entail proof of identity, ownership, and authority to transact on behalf of the entity. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, " Match Exchange is also implementing a \u2018user experience rating\u2019 system to rate the experience between the buyer and seller after a successful match. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 20)(79, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "Need More Help?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, " Our support team is always ready to assist and navigate you through every step of the Match journey. Visit the \u201CContact us\u201D page for our details. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, " Also have a look at our video tutorials that explains every step in full detail. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.items);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf],
    styles: [".l-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-color: #f5f5f5;\n  overflow: auto;\n}\n\n.l-header[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  min-height: 56px;\n  background-color: white;\n  padding-top: 16px;\n}\n\n.l-back-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 16px;\n  top: 20px;\n  width: 20.24px;\n  height: 13.5px;\n}\n\n.l-content[_ngcontent-%COMP%] {\n  width: 100%;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  margin: 0 auto;\n  padding: 16px;\n  overflow: auto;\n}\n\n.l-table[_ngcontent-%COMP%] {\n  text-align: left;\n  display: flex;\n  line-height: 24px;\n}\n\n.l-text-h2[_ngcontent-%COMP%], .l-text-p[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n  letter-spacing: normal;\n  margin: 0;\n}\n\n.l-text-p[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.l-text-h2[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 800;\n}\n\n.l-scout-image[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 16px;\n}\n\n.l-lot-image[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 16px;\n}\n\n.l-compare-image[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 16px;\n}\n\n.l-negotiate-image[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 16px;\n}\n\n.l-match-image[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 16px;\n}\n\n.l-know-image[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 16px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvc3VwcG9ydC9jb21wb25lbnRzL2RldGFpbGVkLXR1dG9yaWFsL2RldGFpbGVkLXR1dG9yaWFsLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkNpQ29CO0VEaENwQixjQUFBO0FBREo7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUFESjs7QUFJQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQURKOztBQUlBO0VBQ0ksV0FBQTtFQUNBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FBREo7O0FBSUE7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQURKOztBQUlBOztFQUVJLHFDQ1lRO0VEWFIsc0JBQUE7RUFDQSxTQUFBO0FBREo7O0FBSUE7RUFDSSxlQUFBO0FBREo7O0FBR0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFHQTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBQ0E7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFBQTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtBQUdKOztBQURBO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0FBSUo7O0FBRkE7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7QUFLSiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3NyYy92YXJpYWJsZXMuc2Nzcyc7XHJcblxyXG4ubC1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvci1ncmV5O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi5sLWhlYWRlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDU2cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmctdG9wOiAxNnB4O1xyXG59XHJcblxyXG4ubC1iYWNrLWljb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMTZweDtcclxuICAgIHRvcDogMjBweDtcclxuICAgIHdpZHRoOiAyMC4yNHB4O1xyXG4gICAgaGVpZ2h0OiAxMy41cHg7XHJcbn1cclxuXHJcbi5sLWNvbnRlbnQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLmwtdGFibGUge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxufVxyXG5cclxuLmwtdGV4dC1oMixcclxuLmwtdGV4dC1wIHtcclxuICAgIGZvbnQtZmFtaWx5OiAkdGV4dC1mb250O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmwtdGV4dC1wIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4ubC10ZXh0LWgyIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuXHJcbi5sLXNjb3V0LWltYWdlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxufVxyXG4ubC1sb3QtaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG59XHJcbi5sLWNvbXBhcmUtaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG59XHJcbi5sLW5lZ290aWF0ZS1pbWFnZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbn1cclxuLmwtbWF0Y2gtaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG59XHJcbi5sLWtub3ctaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG59XHJcbiIsIi8vIFRleHRcclxuJGFwcC1mb250OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiRhcHAtaW5wdXQtZm9udDogJ011bGlzaCcsIHNhbnMtc2VyaWY7XHJcbiRhcHAtZm9udC1ibGFjazogIzM0MzQzNDtcclxuJGFwcC10ZXh0LWdyZXk6ICM3MDcwNzA7XHJcbiRhcHAtZm9udC1pbnB1dC1wbGFjZWhvbGRlcjogcmdiYSgzMCwgNDgsIDM3LCAwLjU2KTtcclxuJGFwcC1mb3JtLWluZm8tY29sb3I6ICNhZmFmYWY7XHJcblxyXG4vLyBDb2xvcnNcclxuJGFwcC1iZy1jb2xvcjogI2Y5ZjlmYztcclxuJGFwcC1idXlpbmctcmVkOiAjZTc2ZjUxO1xyXG4kYXBwLXNlbGxpbmctZ3JlZW46ICM3ZmE5OTU7XHJcbiRhcHAtaW5wdXQtYmctY29sb3I6ICNlNmU2ZTY7XHJcbiRhcHAtYm90dG9tLW5hdi1pdGVtLWJnOiAjZTVlZmU5O1xyXG4kYXBwLXRhYnMtbWFya2V0cGxhY2UtZ3JlZW46ICMyODVkNjA7XHJcbiRhcHAtdGFicy1uZWdvdGlhdGlvbnMtYmx1ZTogIzRmOWViZDtcclxuJGFwcC1ub3RpZmljYXRpb24tcmVkOiAjYTUzYTRhO1xyXG5cclxuLy8gR3JhZGllbnRzXHJcbiRhcHAtc2VsbGluZy1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgIzk4YjRhNywgIzRhNmU1ZSk7XHJcbiRhcHAtYnV5aW5nLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjZGY4YTc1LCAjYTI1MzNmKTtcclxuJGFwcC1zZWxsaW5nLWNhcmQtZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICM4NWFlOWIsICM3MzllOGEpO1xyXG4kYXBwLWJ1eWluZy1jYXJkLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAkYXBwLWJ1eWluZy1yZWQsICNjNzVkNDMpO1xyXG5cclxuLy8gQnV0dG9uc1xyXG4kYXBwLXByaW1hcnktYnV0dG9uLWJnLWNvbG9yOiAjMzFhMDVmO1xyXG4kYXBwLXNlY29uZGFyeS1idXR0b24tYmctY29sb3I6ICNlNWU1ZTU7XHJcbiRhcHAtZGVsZXRlLWJ1dHRvbi1yZWQ6ICNkMzQ1NWI7XHJcblxyXG4vLyBPdGhlclxyXG4kYXBwLWJvcmRlci1yYWRpdXM6IDhweDtcclxuJGFwcC1ib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjA4KSAhaW1wb3J0YW50O1xyXG5cclxuLy8gI3JlZ2lvbiBNYXRjaCBFeGNoYW5nZVxyXG5cclxuLy8gI3JlZ2lvbiBDb2xvcnNcclxuXHJcbiRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4kYmFja2dyb3VuZC1jb2xvci1ncmV5OiAjZjVmNWY1O1xyXG4kdGV4dC1kYXJrOiAjNDA0MDQwO1xyXG4kdGV4dC1wbGFjZWhvbGRlcjogIzhjOGM4YztcclxuJHByaW1hcnktY29sb3I6ICM0MDdlZjg7XHJcbiRzZWNvbmRhcnktY29sb3I6ICNlNWVkZmQ7XHJcbiRtZWRpdW0tYmx1ZTogIzhkOWVjNTtcclxuJHByaW1hcnktZ3JlZW46ICMxY2FmN2U7XHJcbiRzZWNvbmRhcnktZ3JlZW46ICNlN2Y3ZjA7XHJcbiRwcmltYXJ5LXJlZDogI2QyMzAzZDtcclxuJHNlY29uZGFyeS1yZWQ6ICNmN2U4ZTc7XHJcbiRpbnB1dC1ib3JkZXI6ICNlMmU4ZjA7XHJcbiRlcnJvci1tZXNzYWdlOiAjYjExNTBhO1xyXG4kZGlzYWJsZWQtY29sb3I6ICNjYmNiY2I7XHJcblxyXG4vLyAjZW5kcmVnaW9uXHJcblxyXG4vLyAjcmVnaW9uIFRleHRcclxuXHJcbiR0ZXh0LWZvbnQ6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuJGZvbnQtd2VpZ2h0LWJvbGQ6IDcwMDtcclxuJGZvbnQtd2VpZ2h0LXNlbWktYm9sZDogNjAwO1xyXG4kZm9udC13ZWlnaHQtcmVndWxhcjogNTAwO1xyXG4kZm9udC13ZWlnaHQtbGlnaHQ6IDQwMDtcclxuXHJcbi8vICNlbmRyZWdpb25cclxuXHJcbi8vICNyZWdpb24gQnV0dG9uc1xyXG5cclxuJGJ1dHRvbi1mb250LXdlaWdodDogNjAwO1xyXG5cclxuLy8gI2VuZHJlZ2lvblxyXG5cclxuLy8gI3JlZ2lvbiBPdGhlclxyXG5cclxuJGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHJcbi8vICNlbmRyZWdpb25cclxuXHJcbi8vICNlbmRyZWdpb25cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3913:
/*!******************************************************************!*\
  !*** ./src/app/features/support/components/faq/faq.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FAQComponent: () => (/* binding */ FAQComponent)
/* harmony export */ });
/* harmony import */ var _core_helpers_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../core/helpers/constants */ 9487);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/expansion */ 8060);





class FAQComponent {
  constructor(router) {
    this.router = router;
  }
  ngOnInit() {}
  handleBack() {
    this.router.navigate([_core_helpers_constants__WEBPACK_IMPORTED_MODULE_0__.SUPPORT_ROUTE]);
  }
  static #_ = this.ɵfac = function FAQComponent_Factory(t) {
    return new (t || FAQComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: FAQComponent,
    selectors: [["app-faq"]],
    decls: 52,
    vars: 0,
    consts: [[1, "g-app-dimensions", "l-container"], [1, "l-header"], ["src", "./assets/icons/back-arrow-icon.svg", "alt", "back-arrow-icon", 1, "l-back-icon", 3, "click"], [1, "g-text-h2-dark"], [1, "l-content"], [1, "l-flex-gap"], [1, "g-text-p-dark", "text-left"], ["href", "mailto:info@matchmx.com"]],
    template: function FAQComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FAQComponent_Template_img_click_2_listener() {
          return ctx.handleBack();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "FAQs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "mat-expansion-panel")(8, "mat-expansion-panel-header")(9, "mat-panel-title", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Is Match really free to use?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Yes, there are no sign-up fees. Match Exchange takes no commission on any successful purchase that results from parties being introduced through Match. Match is merely a free tool for buyers and sellers of agricultural commodities to have more options to do business with. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-expansion-panel")(14, "mat-expansion-panel-header")(15, "mat-panel-title", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "What is a Scout?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " You create a Scout to tell the market what you are planning to buy or sell and within which area. Match Exchange\u2019s algorithm with display the available counter-parties interested in the same commodity. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-expansion-panel")(20, "mat-expansion-panel-header")(21, "mat-panel-title", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "What is a Lot?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " You create a Lot to tell the market more details about the commodity that you want to buy or sell. These details are the 5 P\u2019s (product, price, period of availability, payment terms and position) and 2 Q\u2019s (quality and quantity). You can create multiple Lots to partially market your produce. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-expansion-panel")(26, "mat-expansion-panel-header")(27, "mat-panel-title", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Will my Scouts or Lots be removed or disappear after some time?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, " No, your Scouts and Lots will remain on Match, for as long as you are buying or selling the commodity for which the Scout or Lot has been created. You can delete a Scout or a Lot from the \u201CScouts\u201D or the \u201CLots\u201D screens if you no longer want a specific Scout or Lot to be matched with another user\u2019s Scouts or Lots. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "mat-expansion-panel")(32, "mat-expansion-panel-header")(33, "mat-panel-title", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " Is there any obligation to transact with the matching counterparty?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, " No, after you have a match, you and the counterparty are introduced to each other. If you are unsure about making a transaction with a specific party, you are welcome to decline the offer and recreate your lot on Match. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "mat-expansion-panel")(38, "mat-expansion-panel-header")(39, "mat-panel-title", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, " How do I know that the counterparty that I negotiate with is a trusted person or business?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, " Kindly see the \u201CKnow your counterparty\u201D page in the app for helpful guidelines to verify the counterparty. These guidelines will also be sent to you in an email once a negotiation has been completed. Match Exchange will also verify trusted users in the near future. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "mat-expansion-panel")(44, "mat-expansion-panel-header")(45, "mat-panel-title", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, " I am having difficulty understanding the process or I cannot find what I\u2019m looking for, what do I do now?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, " We will kindly assist users to become proficient in using the App, please send an email to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "info@matchmx.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, " or a WhatsApp message to 072 332 2936 and we will contact you. Alternatively, you can watch one of our tutorial videos on the Match Exchange YouTube page. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      }
    },
    dependencies: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__.MatExpansionPanelTitle],
    styles: [".l-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-color: #f5f5f5;\n  overflow: auto;\n}\n\n.l-header[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  min-height: 56px;\n  background-color: white;\n  padding-top: 16px;\n}\n\n.l-back-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 16px;\n  top: 20px;\n  width: 20.24px;\n  height: 13.5px;\n}\n\n.l-content[_ngcontent-%COMP%] {\n  width: 100%;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  margin: 0 auto;\n  padding: 16px;\n  overflow: auto;\n}\n\n.l-flex-gap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvc3VwcG9ydC9jb21wb25lbnRzL2ZhcS9mYXEuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQ2lDb0I7RURoQ3BCLGNBQUE7QUFESjs7QUFJQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQURKOztBQUlBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBREo7O0FBSUE7RUFDSSxXQUFBO0VBQ0Esd0JBQUE7RUFBQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUFESjs7QUFJQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUFESiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3NyYy92YXJpYWJsZXMuc2Nzcyc7XHJcblxyXG4ubC1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvci1ncmV5O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi5sLWhlYWRlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDU2cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmctdG9wOiAxNnB4O1xyXG59XHJcblxyXG4ubC1iYWNrLWljb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMTZweDtcclxuICAgIHRvcDogMjBweDtcclxuICAgIHdpZHRoOiAyMC4yNHB4O1xyXG4gICAgaGVpZ2h0OiAxMy41cHg7XHJcbn1cclxuXHJcbi5sLWNvbnRlbnQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLmwtZmxleC1nYXAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDE2cHg7XHJcbn1cclxuIiwiLy8gVGV4dFxyXG4kYXBwLWZvbnQ6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuJGFwcC1pbnB1dC1mb250OiAnTXVsaXNoJywgc2Fucy1zZXJpZjtcclxuJGFwcC1mb250LWJsYWNrOiAjMzQzNDM0O1xyXG4kYXBwLXRleHQtZ3JleTogIzcwNzA3MDtcclxuJGFwcC1mb250LWlucHV0LXBsYWNlaG9sZGVyOiByZ2JhKDMwLCA0OCwgMzcsIDAuNTYpO1xyXG4kYXBwLWZvcm0taW5mby1jb2xvcjogI2FmYWZhZjtcclxuXHJcbi8vIENvbG9yc1xyXG4kYXBwLWJnLWNvbG9yOiAjZjlmOWZjO1xyXG4kYXBwLWJ1eWluZy1yZWQ6ICNlNzZmNTE7XHJcbiRhcHAtc2VsbGluZy1ncmVlbjogIzdmYTk5NTtcclxuJGFwcC1pbnB1dC1iZy1jb2xvcjogI2U2ZTZlNjtcclxuJGFwcC1ib3R0b20tbmF2LWl0ZW0tYmc6ICNlNWVmZTk7XHJcbiRhcHAtdGFicy1tYXJrZXRwbGFjZS1ncmVlbjogIzI4NWQ2MDtcclxuJGFwcC10YWJzLW5lZ290aWF0aW9ucy1ibHVlOiAjNGY5ZWJkO1xyXG4kYXBwLW5vdGlmaWNhdGlvbi1yZWQ6ICNhNTNhNGE7XHJcblxyXG4vLyBHcmFkaWVudHNcclxuJGFwcC1zZWxsaW5nLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjOThiNGE3LCAjNGE2ZTVlKTtcclxuJGFwcC1idXlpbmctZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICNkZjhhNzUsICNhMjUzM2YpO1xyXG4kYXBwLXNlbGxpbmctY2FyZC1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgIzg1YWU5YiwgIzczOWU4YSk7XHJcbiRhcHAtYnV5aW5nLWNhcmQtZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICRhcHAtYnV5aW5nLXJlZCwgI2M3NWQ0Myk7XHJcblxyXG4vLyBCdXR0b25zXHJcbiRhcHAtcHJpbWFyeS1idXR0b24tYmctY29sb3I6ICMzMWEwNWY7XHJcbiRhcHAtc2Vjb25kYXJ5LWJ1dHRvbi1iZy1jb2xvcjogI2U1ZTVlNTtcclxuJGFwcC1kZWxldGUtYnV0dG9uLXJlZDogI2QzNDU1YjtcclxuXHJcbi8vIE90aGVyXHJcbiRhcHAtYm9yZGVyLXJhZGl1czogOHB4O1xyXG4kYXBwLWJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDgpICFpbXBvcnRhbnQ7XHJcblxyXG4vLyAjcmVnaW9uIE1hdGNoIEV4Y2hhbmdlXHJcblxyXG4vLyAjcmVnaW9uIENvbG9yc1xyXG5cclxuJGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiRiYWNrZ3JvdW5kLWNvbG9yLWdyZXk6ICNmNWY1ZjU7XHJcbiR0ZXh0LWRhcms6ICM0MDQwNDA7XHJcbiR0ZXh0LXBsYWNlaG9sZGVyOiAjOGM4YzhjO1xyXG4kcHJpbWFyeS1jb2xvcjogIzQwN2VmODtcclxuJHNlY29uZGFyeS1jb2xvcjogI2U1ZWRmZDtcclxuJG1lZGl1bS1ibHVlOiAjOGQ5ZWM1O1xyXG4kcHJpbWFyeS1ncmVlbjogIzFjYWY3ZTtcclxuJHNlY29uZGFyeS1ncmVlbjogI2U3ZjdmMDtcclxuJHByaW1hcnktcmVkOiAjZDIzMDNkO1xyXG4kc2Vjb25kYXJ5LXJlZDogI2Y3ZThlNztcclxuJGlucHV0LWJvcmRlcjogI2UyZThmMDtcclxuJGVycm9yLW1lc3NhZ2U6ICNiMTE1MGE7XHJcbiRkaXNhYmxlZC1jb2xvcjogI2NiY2JjYjtcclxuXHJcbi8vICNlbmRyZWdpb25cclxuXHJcbi8vICNyZWdpb24gVGV4dFxyXG5cclxuJHRleHQtZm9udDogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4kZm9udC13ZWlnaHQtYm9sZDogNzAwO1xyXG4kZm9udC13ZWlnaHQtc2VtaS1ib2xkOiA2MDA7XHJcbiRmb250LXdlaWdodC1yZWd1bGFyOiA1MDA7XHJcbiRmb250LXdlaWdodC1saWdodDogNDAwO1xyXG5cclxuLy8gI2VuZHJlZ2lvblxyXG5cclxuLy8gI3JlZ2lvbiBCdXR0b25zXHJcblxyXG4kYnV0dG9uLWZvbnQtd2VpZ2h0OiA2MDA7XHJcblxyXG4vLyAjZW5kcmVnaW9uXHJcblxyXG4vLyAjcmVnaW9uIE90aGVyXHJcblxyXG4kYm9yZGVyLXJhZGl1czogNHB4O1xyXG5cclxuLy8gI2VuZHJlZ2lvblxyXG5cclxuLy8gI2VuZHJlZ2lvblxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 7150:
/*!**********************************************************************************************************!*\
  !*** ./src/app/features/support/components/know-your-counter-party/know-your-counter-party.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KnowYourCounterPartyComponent: () => (/* binding */ KnowYourCounterPartyComponent)
/* harmony export */ });
/* harmony import */ var _core_helpers_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../core/helpers/constants */ 9487);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);




class KnowYourCounterPartyComponent {
  constructor(router) {
    this.router = router;
  }
  ngOnInit() {}
  handleBack() {
    this.router.navigate([_core_helpers_constants__WEBPACK_IMPORTED_MODULE_0__.SUPPORT_ROUTE]);
  }
  static #_ = this.ɵfac = function KnowYourCounterPartyComponent_Factory(t) {
    return new (t || KnowYourCounterPartyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: KnowYourCounterPartyComponent,
    selectors: [["app-know-your-counter-party"]],
    decls: 45,
    vars: 0,
    consts: [[1, "g-app-dimensions", "l-container"], [1, "l-header"], ["src", "./assets/icons/back-arrow-icon.svg", "alt", "back-arrow-icon", 1, "l-back-icon", 3, "click"], [1, "g-text-h2-dark"], [1, "l-content"], [1, "g-text-h1-dark"], [1, "g-text-p-dark", "text-left", "pt-2"], [1, "l-text-bold"], [1, "pt-4"], [1, "g-text-h2-dark", "mb-2"], [1, "g-text-p-dark", "text-left"], [1, "g-text-p-dar", "text-leftk"], [1, "g-text-p-dark", "l-text-bold", "pt-4"]],
    template: function KnowYourCounterPartyComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function KnowYourCounterPartyComponent_Template_img_click_2_listener() {
          return ctx.handleBack();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "KYC-Party");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4)(6, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Know your Counterparty (\"KYC-party\"), protect yourself");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 6)(9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "TAKE NOTE:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "[Match Exchange is not a party to the Seller and Buyer agreement. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " These are just guidelines for you to follow to better KYC-party.] ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 8)(16, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "SELLER");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " The objective here is to ensure that you get paid in full, on time, for the product you deliver: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " 1. Is the Buyer (Off-Taker) a well-known company? If not, ask around, especially in your area. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " 2. Google the Buyer\u2019s contact details, phone the company and ask to speak to the Procurement Manager. Is he aware of the transaction? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " 3. If you\u2019ve agreed to terms, consider paying for a credit check. Does this company pay its bills? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 8)(27, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "BUYER");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, " Your objective is to receive the quantity and quality product that you are paying for, and on time: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "1. Is the Seller a known farmer in the area?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " 2. Phone procurement agents or farmers you know in the area and get a reference. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "3. Are you aware of any problems with this farmer (producer)?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, " 4. Phone the farmer and confirm the location from where the produce will be delivered. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, " 5. Obtain information about the farmer\u2019s other off-takers / customers or to who the farmer normally supplies to. Phone that off-taker and get a reference. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, " 6. If you have agreed to any payments prior to delivery, consider a credit check or if possible an escrow account at an independent (and trusted) third party that may only release the payment on your receipt of the purchased goods. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, " We are not liable for any damages or losses whatsoever that may result for a transaction that was not successful. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
    },
    styles: [".l-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-color: #f9f9fc;\n  overflow: auto;\n  text-align: left !important;\n}\n\n.l-content[_ngcontent-%COMP%] {\n  width: 100%;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  margin: 0 auto;\n  overflow: auto;\n  padding: 16px;\n}\n\n.l-header[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  min-height: 56px;\n  background-color: white;\n  padding-top: 16px;\n}\n\n.l-back-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 16px;\n  top: 20px;\n  width: 20.24px;\n  height: 13.5px;\n}\n\n.l-text-bold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\n.l-text-p[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 500;\n  letter-spacing: normal;\n  text-align: left;\n  margin: 0;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvc3VwcG9ydC9jb21wb25lbnRzL2tub3cteW91ci1jb3VudGVyLXBhcnR5L2tub3cteW91ci1jb3VudGVyLXBhcnR5LmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkNJVztFREhYLGNBQUE7RUFDQSwyQkFBQTtBQURKOztBQUlBO0VBQ0ksV0FBQTtFQUNBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FBREo7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUFESjs7QUFJQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQURKOztBQUlBO0VBQ0ksZ0JBQUE7QUFESjs7QUFJQTtFQUNJLHFDQ3pDTztFRDBDUCxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQURKIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3JjL3ZhcmlhYmxlcy5zY3NzJztcclxuXHJcbi5sLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRhcHAtYmctY29sb3I7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmwtY29udGVudCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG59XHJcblxyXG4ubC1oZWFkZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiA1NnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcclxufVxyXG5cclxuLmwtYmFjay1pY29uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDE2cHg7XHJcbiAgICB0b3A6IDIwcHg7XHJcbiAgICB3aWR0aDogMjAuMjRweDtcclxuICAgIGhlaWdodDogMTMuNXB4O1xyXG59XHJcblxyXG4ubC10ZXh0LWJvbGQge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmwtdGV4dC1wIHtcclxuICAgIGZvbnQtZmFtaWx5OiAkYXBwLWZvbnQ7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuIiwiLy8gVGV4dFxyXG4kYXBwLWZvbnQ6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuJGFwcC1pbnB1dC1mb250OiAnTXVsaXNoJywgc2Fucy1zZXJpZjtcclxuJGFwcC1mb250LWJsYWNrOiAjMzQzNDM0O1xyXG4kYXBwLXRleHQtZ3JleTogIzcwNzA3MDtcclxuJGFwcC1mb250LWlucHV0LXBsYWNlaG9sZGVyOiByZ2JhKDMwLCA0OCwgMzcsIDAuNTYpO1xyXG4kYXBwLWZvcm0taW5mby1jb2xvcjogI2FmYWZhZjtcclxuXHJcbi8vIENvbG9yc1xyXG4kYXBwLWJnLWNvbG9yOiAjZjlmOWZjO1xyXG4kYXBwLWJ1eWluZy1yZWQ6ICNlNzZmNTE7XHJcbiRhcHAtc2VsbGluZy1ncmVlbjogIzdmYTk5NTtcclxuJGFwcC1pbnB1dC1iZy1jb2xvcjogI2U2ZTZlNjtcclxuJGFwcC1ib3R0b20tbmF2LWl0ZW0tYmc6ICNlNWVmZTk7XHJcbiRhcHAtdGFicy1tYXJrZXRwbGFjZS1ncmVlbjogIzI4NWQ2MDtcclxuJGFwcC10YWJzLW5lZ290aWF0aW9ucy1ibHVlOiAjNGY5ZWJkO1xyXG4kYXBwLW5vdGlmaWNhdGlvbi1yZWQ6ICNhNTNhNGE7XHJcblxyXG4vLyBHcmFkaWVudHNcclxuJGFwcC1zZWxsaW5nLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjOThiNGE3LCAjNGE2ZTVlKTtcclxuJGFwcC1idXlpbmctZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICNkZjhhNzUsICNhMjUzM2YpO1xyXG4kYXBwLXNlbGxpbmctY2FyZC1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgIzg1YWU5YiwgIzczOWU4YSk7XHJcbiRhcHAtYnV5aW5nLWNhcmQtZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICRhcHAtYnV5aW5nLXJlZCwgI2M3NWQ0Myk7XHJcblxyXG4vLyBCdXR0b25zXHJcbiRhcHAtcHJpbWFyeS1idXR0b24tYmctY29sb3I6ICMzMWEwNWY7XHJcbiRhcHAtc2Vjb25kYXJ5LWJ1dHRvbi1iZy1jb2xvcjogI2U1ZTVlNTtcclxuJGFwcC1kZWxldGUtYnV0dG9uLXJlZDogI2QzNDU1YjtcclxuXHJcbi8vIE90aGVyXHJcbiRhcHAtYm9yZGVyLXJhZGl1czogOHB4O1xyXG4kYXBwLWJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDgpICFpbXBvcnRhbnQ7XHJcblxyXG4vLyAjcmVnaW9uIE1hdGNoIEV4Y2hhbmdlXHJcblxyXG4vLyAjcmVnaW9uIENvbG9yc1xyXG5cclxuJGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiRiYWNrZ3JvdW5kLWNvbG9yLWdyZXk6ICNmNWY1ZjU7XHJcbiR0ZXh0LWRhcms6ICM0MDQwNDA7XHJcbiR0ZXh0LXBsYWNlaG9sZGVyOiAjOGM4YzhjO1xyXG4kcHJpbWFyeS1jb2xvcjogIzQwN2VmODtcclxuJHNlY29uZGFyeS1jb2xvcjogI2U1ZWRmZDtcclxuJG1lZGl1bS1ibHVlOiAjOGQ5ZWM1O1xyXG4kcHJpbWFyeS1ncmVlbjogIzFjYWY3ZTtcclxuJHNlY29uZGFyeS1ncmVlbjogI2U3ZjdmMDtcclxuJHByaW1hcnktcmVkOiAjZDIzMDNkO1xyXG4kc2Vjb25kYXJ5LXJlZDogI2Y3ZThlNztcclxuJGlucHV0LWJvcmRlcjogI2UyZThmMDtcclxuJGVycm9yLW1lc3NhZ2U6ICNiMTE1MGE7XHJcbiRkaXNhYmxlZC1jb2xvcjogI2NiY2JjYjtcclxuXHJcbi8vICNlbmRyZWdpb25cclxuXHJcbi8vICNyZWdpb24gVGV4dFxyXG5cclxuJHRleHQtZm9udDogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4kZm9udC13ZWlnaHQtYm9sZDogNzAwO1xyXG4kZm9udC13ZWlnaHQtc2VtaS1ib2xkOiA2MDA7XHJcbiRmb250LXdlaWdodC1yZWd1bGFyOiA1MDA7XHJcbiRmb250LXdlaWdodC1saWdodDogNDAwO1xyXG5cclxuLy8gI2VuZHJlZ2lvblxyXG5cclxuLy8gI3JlZ2lvbiBCdXR0b25zXHJcblxyXG4kYnV0dG9uLWZvbnQtd2VpZ2h0OiA2MDA7XHJcblxyXG4vLyAjZW5kcmVnaW9uXHJcblxyXG4vLyAjcmVnaW9uIE90aGVyXHJcblxyXG4kYm9yZGVyLXJhZGl1czogNHB4O1xyXG5cclxuLy8gI2VuZHJlZ2lvblxyXG5cclxuLy8gI2VuZHJlZ2lvblxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 9730:
/*!*************************************************************************************************************!*\
  !*** ./src/app/features/support/components/verification/not-verified-modal/not-verified-modal.component.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotVerifiedModalComponent: () => (/* binding */ NotVerifiedModalComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_helpers_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/helpers/constants */ 9487);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/legacy-dialog */ 1035);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);






class NotVerifiedModalComponent {
  constructor(dialogRef, router) {
    this.dialogRef = dialogRef;
    this.router = router;
  }
  ngOnInit() {}
  handleClose() {
    this.dialogRef.close();
  }
  handleRouteToProfile() {
    this.dialogRef.close();
    this.router.navigate([src_app_core_helpers_constants__WEBPACK_IMPORTED_MODULE_0__.PROFILE_ROUTE], {
      queryParams: {
        tabIndex: 2
      }
    });
  }
  static #_ = this.ɵfac = function NotVerifiedModalComponent_Factory(t) {
    return new (t || NotVerifiedModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_2__.MatLegacyDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: NotVerifiedModalComponent,
    selectors: [["app-not-verified-modal"]],
    decls: 17,
    vars: 0,
    consts: [[1, "l-container"], [1, "l-header"], ["src", "./assets/icons/close-icon-dark.svg", "alt", "close", 1, "l-close-icon", 3, "click"], ["src", "./assets/icons/grainSA-icon.svg", "alt", "icon", 1, "l-icon"], [1, "g-text-h1-dark"], [1, "l-content", "g-text-p-dark"], [1, "g-primary-button", 3, "click"], [1, "g-secondary-button", "mt-2", 3, "click"]],
    template: function NotVerifiedModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NotVerifiedModalComponent_Template_img_click_2_listener() {
          return ctx.handleClose();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1", 4)(5, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "You are not Verified");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5)(8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " This verification type is only available to verified Grain SA members. If you are a member of Grain SA you get a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "1 year");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " free Grain SA verification status. To apply for this promotion input your membership number on the profile tab. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NotVerifiedModalComponent_Template_button_click_13_listener() {
          return ctx.handleClose();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Okay, got it!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NotVerifiedModalComponent_Template_button_click_15_listener() {
          return ctx.handleRouteToProfile();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Go to Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
    },
    styles: [".l-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0 16px;\n}\n\n.l-header[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.l-close-icon[_ngcontent-%COMP%] {\n  width: 18px;\n  height: auto;\n  position: absolute;\n  top: 0;\n  right: 0;\n  cursor: pointer;\n}\n\n.l-content[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 24px 0;\n  text-align: left;\n}\n\n.l-icon[_ngcontent-%COMP%] {\n  height: 56px;\n  width: 56px;\n  margin-bottom: 16px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvc3VwcG9ydC9jb21wb25lbnRzL3ZlcmlmaWNhdGlvbi9ub3QtdmVyaWZpZWQtbW9kYWwvbm90LXZlcmlmaWVkLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUFESjs7QUFJQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBREo7O0FBSUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0FBREo7O0FBSUE7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBREo7O0FBSUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBREoiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzcmMvdmFyaWFibGVzLnNjc3MnO1xyXG5cclxuLmwtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMCAxNnB4O1xyXG59XHJcblxyXG4ubC1oZWFkZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sLWNsb3NlLWljb24ge1xyXG4gICAgd2lkdGg6IDE4cHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmwtY29udGVudCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMjRweCAwO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLmwtaWNvbiB7XHJcbiAgICBoZWlnaHQ6IDU2cHg7XHJcbiAgICB3aWR0aDogNTZweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 949:
/*!***********************************************************************************************************************!*\
  !*** ./src/app/features/support/components/verification/subscription-type-modal/subscription-type-modal.component.ts ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SubscriptionTypeModalComponent: () => (/* binding */ SubscriptionTypeModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/legacy-dialog */ 1035);
/* harmony import */ var _awesome_cordova_plugins_purchases_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @awesome-cordova-plugins/purchases/ngx */ 8087);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/core */ 8626);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/effects */ 1575);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 1527);
/* harmony import */ var src_app_core_helpers_helperFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/helpers/helperFunctions */ 1468);
/* harmony import */ var _core_helpers_snackbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/helpers/snackbar */ 2179);
/* harmony import */ var src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/helpers/index.actions */ 5626);
/* harmony import */ var src_app_features_dashboard_dashboard_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/features/dashboard/dashboard.selectors */ 2243);
/* harmony import */ var src_app_core_ngrx_app_state_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/ngrx/app-state/index */ 4073);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/snack-bar */ 9409);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ 5309);
/* harmony import */ var _angular_material_legacy_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/legacy-progress-spinner */ 3401);





















function SubscriptionTypeModalComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SubscriptionTypeModalComponent_div_1_Template_img_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r4.handleClose());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx_r0.data.verificationSubscription.value.source, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
  }
}
function SubscriptionTypeModalComponent_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SubscriptionTypeModalComponent_div_2_div_1_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](!ctx_r9.isWeb && ctx_r9.handleNativePurchase("year", ctx_r9.data.verificationSubscription.value.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 11)(11, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "*VAT Included");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "OR");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SubscriptionTypeModalComponent_div_2_div_1_Template_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r10);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](!ctx_r11.isWeb && ctx_r11.handleNativePurchase("month", ctx_r11.data.verificationSubscription.value.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 11)(19, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "*VAT Included");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 15)(22, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, "20%");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26, " with the yearly subscription!");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r6.data.verificationSubscription.value.product.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r6.data.promotionalText == null ? null : ctx_r6.data.promotionalText.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r6.data.promotionalText == null ? null : ctx_r6.data.promotionalText.period);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r6.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r6.data.verificationSubscription.value.product.price, " / year ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r6.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r6.data.verificationSubscription.value.product_monthly.price, " / month ");
  }
}
function SubscriptionTypeModalComponent_div_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "mat-progress-spinner", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "h1", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Processing your Payment...");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("diameter", 100);
  }
}
function SubscriptionTypeModalComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, SubscriptionTypeModalComponent_div_2_div_1_Template, 27, 7, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, SubscriptionTypeModalComponent_div_2_ng_template_2_Template, 3, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](3);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r1.isLoading)("ngIfElse", _r7);
  }
}
function SubscriptionTypeModalComponent_ng_template_3_mat_progress_spinner_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "mat-progress-spinner", 25);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("diameter", 30);
  }
}
function SubscriptionTypeModalComponent_ng_template_3_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](0, "Request By Email ");
  }
}
function SubscriptionTypeModalComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Congratulations!");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, " You are now verified as a ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, " You can now access all our premium features, like Browse the Market and MX Clearing. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, " Further increase your trust in the market by getting ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "FICA");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, " registered with MatchMX. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Download Form");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SubscriptionTypeModalComponent_ng_template_3_Template_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r15.handleEmail());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, SubscriptionTypeModalComponent_ng_template_3_mat_progress_spinner_16_Template, 1, 1, "mat-progress-spinner", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, SubscriptionTypeModalComponent_ng_template_3_ng_template_17_Template, 1, 0, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "*This is optional and can be completed at a future date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](18);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r3.data.verificationSubscription.value.product.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("href", ctx_r3.isWeb ? "./assets/files/The Match Exchange - Client Subscription Form.docx" : "https://match.skudu.co.za/assets/files/The Match Exchange - Client Subscription Form.docx", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r3.isEmailLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r3.isEmailLoading)("ngIfElse", _r13);
  }
}
class SubscriptionTypeModalComponent {
  constructor(dialogRef, data, purchases, snackbar, store, actions$) {
    this.dialogRef = dialogRef;
    this.data = data;
    this.purchases = purchases;
    this.snackbar = snackbar;
    this.store = store;
    this.actions$ = actions$;
    this.isWeb = true;
    this.isSuccess = false;
    this.isLoading = false;
    this.isEmailLoading = false;
    this.isWeb = _capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Capacitor.getPlatform() === 'web';
  }
  ngOnInit() {
    this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.select)(src_app_features_dashboard_dashboard_selectors__WEBPACK_IMPORTED_MODULE_5__.authSelectors.getUser), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.take)(1)).subscribe(user => {
      this.user = user;
    });
    if (!this.isWeb) {
      this.purchases.getOfferings().then(offerings => {
        this.productName = offerings.all[this.data.verificationSubscription.value.identifier].identifier;
        this.annualOffering = offerings.all[this.data.verificationSubscription.value.identifier].annual;
        this.monthlyOffering = offerings.all[this.data.verificationSubscription.value.identifier].monthly;
      }, error => {
        console.log('Failed to get Offerings: ', error.message);
        this.snackbar.open('Failed to get Offerings, please try again', 'CLOSE', _core_helpers_snackbar__WEBPACK_IMPORTED_MODULE_3__.errorConfig);
      });
    }
  }
  handleClose() {
    this.dialogRef.close();
  }
  handleNativePurchase(purchasePeriod, verificationId) {
    this.isLoading = true;
    let currentDate = new Date();
    if (purchasePeriod === 'year') {
      this.purchases.purchasePackage(this.annualOffering).then(() => {
        this.isLoading = false;
        let expiryDate = new Date(currentDate.setFullYear(currentDate.getFullYear() + 1)).getTime();
        this.verificationHelper(verificationId, expiryDate);
      }, ({
        error,
        userCancelled
      }) => {
        this.isLoading = false;
        console.log('An error occurred while making the purchase: ', error.message);
        if (!userCancelled) {
          this.snackbar.open('Failed To Purchase Subscription', 'CLOSE', _core_helpers_snackbar__WEBPACK_IMPORTED_MODULE_3__.errorConfig);
        }
      });
    } else if (purchasePeriod === 'month') {
      this.purchases.purchasePackage(this.monthlyOffering).then(() => {
        this.isLoading = false;
        let expiryDate = new Date(currentDate.setMonth(currentDate.getMonth() + 1)).getTime();
        this.verificationHelper(verificationId, expiryDate);
      }, ({
        error,
        userCancelled
      }) => {
        this.isLoading = false;
        console.log('An error occurred while making the purchase: ', error.message);
        if (!userCancelled) {
          this.snackbar.open('Failed To Purchase Subscription', 'CLOSE', _core_helpers_snackbar__WEBPACK_IMPORTED_MODULE_3__.errorConfig);
        }
      });
    }
  }
  verificationHelper(verificationId, expiryDate) {
    this.isLoading = true;
    this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_10__.ofType)(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_4__.authActions.ReqUpdateUserVerificationStatusSuccess), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.take)(1)).subscribe(() => {
      this.isLoading = false;
      this.isSuccess = true;
      this.snackbar.open('Successfully purchased Subscription', 'CLOSE', _core_helpers_snackbar__WEBPACK_IMPORTED_MODULE_3__.successConfig);
    });
    this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_10__.ofType)(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_4__.authActions.ReqUpdateUserVerificationStatusFail), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.take)(1)).subscribe(() => {
      this.isLoading = false;
      this.snackbar.open('Payment successful but failed to update verification, please contact MatchMX', 'CLOSE', _core_helpers_snackbar__WEBPACK_IMPORTED_MODULE_3__.errorConfig);
    });
    this.store.dispatch(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_4__.authActions.ReqUpdateUserVerificationStatus({
      userVerifications: [(0,src_app_core_helpers_helperFunctions__WEBPACK_IMPORTED_MODULE_2__.transformSingleUsersForVerificationHelper)(verificationId, this.user, expiryDate)],
      showSnackBar: false
    }));
  }
  handleEmail() {
    this.isEmailLoading = true;
    this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_10__.ofType)(src_app_core_ngrx_app_state_index__WEBPACK_IMPORTED_MODULE_6__.appActions.ReqEmailVerificationFormSuccess, src_app_core_ngrx_app_state_index__WEBPACK_IMPORTED_MODULE_6__.appActions.ReqEmailVerificationFormFail), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.take)(1)).subscribe(() => {
      this.isEmailLoading = false;
      this.dialogRef.close();
    });
    this.store.dispatch(src_app_core_ngrx_app_state_index__WEBPACK_IMPORTED_MODULE_6__.appActions.ReqEmailVerificationForm());
  }
  static #_ = this.ɵfac = function SubscriptionTypeModalComponent_Factory(t) {
    return new (t || SubscriptionTypeModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_11__.MatLegacyDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_11__.MAT_LEGACY_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_awesome_cordova_plugins_purchases_ngx__WEBPACK_IMPORTED_MODULE_0__.Purchases), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_10__.Actions));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: SubscriptionTypeModalComponent,
    selectors: [["app-subscription-type-modal"]],
    decls: 5,
    vars: 3,
    consts: [[1, "l-container"], [4, "ngIf"], [4, "ngIf", "ngIfElse"], ["showSuccess", ""], ["src", "./assets/icons/close-icon-dark.svg", "alt", "Black cross / close icon", 1, "l-close-icon", 3, "click"], ["alt", "verification-icon", 1, "l-verification-icon", 3, "src"], ["showLoading", ""], [1, "g-text-h1-dark"], [1, "g-text-p-dark", "my-2"], [1, "g-text-h2-dark"], ["mat-flat-button", "", 1, "g-primary-button", "mt-3", 3, "disabled", "click"], [1, "g-text-p-small-grey"], [1, "mt-1"], [1, "text-center", "m-0"], ["mat-flat-button", "", 1, "g-secondary-button", "mt-2", 3, "disabled", "click"], [1, "g-text-p-dark", "text-center", "m-0"], ["mode", "indeterminate", 1, "g-mat-progress-spinner-blue", "mx-auto", "my-4", 3, "diameter"], [1, "g-text-h1-dark", "my-3"], [1, "g-text-p-dark"], [1, "g-text-p-dark", "mt-2"], ["mat-ripple", "", "download", "The Match Exchange - Client Subscription Form", 1, "g-primary-button", "l-button-link", "mt-3", 3, "href"], ["mat-flat-button", "", 1, "g-secondary-button", "mt-3", 3, "disabled", "click"], ["class", "g-mat-progress-spinner-blue mx-auto", "mode", "indeterminate", 3, "diameter", 4, "ngIf", "ngIfElse"], ["showEmailText", ""], [1, "g-text-p-small-grey", "mt-2"], ["mode", "indeterminate", 1, "g-mat-progress-spinner-blue", "mx-auto", 3, "diameter"]],
    template: function SubscriptionTypeModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, SubscriptionTypeModalComponent_div_1_Template, 3, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, SubscriptionTypeModalComponent_div_2_Template, 4, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, SubscriptionTypeModalComponent_ng_template_3_Template, 21, 5, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.isSuccess)("ngIfElse", _r2);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatRipple, _angular_material_legacy_progress_spinner__WEBPACK_IMPORTED_MODULE_15__.MatLegacyProgressSpinner],
    styles: [".l-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.l-close-icon[_ngcontent-%COMP%] {\n  width: 24px;\n  height: auto;\n  position: absolute;\n  right: 0px;\n  cursor: pointer;\n}\n\n.l-verification-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: auto;\n  margin: auto;\n  display: flex;\n}\n\n.l-verification-option[_ngcontent-%COMP%] {\n  margin: 8px 0px;\n  border: 1px solid #407ef8;\n  padding: 16px;\n  border-radius: 4px;\n  position: relative;\n}\n\n.l-button-link[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-decoration: none !important;\n  color: #ffffff !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvc3VwcG9ydC9jb21wb25lbnRzL3ZlcmlmaWNhdGlvbi9zdWJzY3JpcHRpb24tdHlwZS1tb2RhbC9zdWJzY3JpcHRpb24tdHlwZS1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGtCQUFBO0FBREo7O0FBSUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUFESjs7QUFJQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFESjs7QUFJQTtFQUNJLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBREo7O0FBSUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0EseUJBQUE7QUFESiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3NyYy92YXJpYWJsZXMuc2Nzcyc7XHJcblxyXG4ubC1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ubC1jbG9zZS1pY29uIHtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmwtdmVyaWZpY2F0aW9uLWljb24ge1xyXG4gICAgd2lkdGg6IDQ4cHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ubC12ZXJpZmljYXRpb24tb3B0aW9uIHtcclxuICAgIG1hcmdpbjogOHB4IDBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmwtYnV0dG9uLWxpbmsge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 1697:
/*!***********************************************************************************************************!*\
  !*** ./src/app/features/support/components/verification/verification-card/verification-card.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VerificationCardComponent: () => (/* binding */ VerificationCardComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_helpers_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/helpers/constants */ 9487);
/* harmony import */ var _not_verified_modal_not_verified_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../not-verified-modal/not-verified-modal.component */ 9730);
/* harmony import */ var _subscription_type_modal_subscription_type_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../subscription-type-modal/subscription-type-modal.component */ 949);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/legacy-dialog */ 1035);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);








function VerificationCardComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.verificationSubscription.value.promotion, " ");
  }
}
class VerificationCardComponent {
  constructor(dialog) {
    this.dialog = dialog;
  }
  ngOnInit() {}
  handleVerificationModal() {
    if (+this.verificationSubscription.key === src_app_core_helpers_constants__WEBPACK_IMPORTED_MODULE_0__.GRAINSA_VERIFICATION_ID && this.isGrainSAVerified) {
      this.dialog.open(_subscription_type_modal_subscription_type_modal_component__WEBPACK_IMPORTED_MODULE_2__.SubscriptionTypeModalComponent, {
        panelClass: 'g-modal-container',
        autoFocus: false,
        data: {
          verificationSubscription: this.verificationSubscription,
          promotionalText: src_app_core_helpers_constants__WEBPACK_IMPORTED_MODULE_0__.GRAINSA_VERIFICATION_TEXT
        }
      });
    } else if (+this.verificationSubscription.key === src_app_core_helpers_constants__WEBPACK_IMPORTED_MODULE_0__.GRAINSA_VERIFICATION_ID && !this.isGrainSAVerified) {
      this.dialog.open(_not_verified_modal_not_verified_modal_component__WEBPACK_IMPORTED_MODULE_1__.NotVerifiedModalComponent, {
        panelClass: 'g-modal-container',
        autoFocus: false
      });
    } else {
      this.dialog.open(_subscription_type_modal_subscription_type_modal_component__WEBPACK_IMPORTED_MODULE_2__.SubscriptionTypeModalComponent, {
        panelClass: 'g-modal-container',
        autoFocus: false,
        data: {
          verificationSubscription: this.verificationSubscription
        }
      });
    }
  }
  static #_ = this.ɵfac = function VerificationCardComponent_Factory(t) {
    return new (t || VerificationCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_4__.MatLegacyDialog));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: VerificationCardComponent,
    selectors: [["app-verification-card"]],
    inputs: {
      verificationSubscription: "verificationSubscription",
      isWeb: "isWeb",
      isGrainSAVerified: "isGrainSAVerified"
    },
    decls: 8,
    vars: 4,
    consts: [[1, "l-verification-subscription", 3, "click"], ["class", "l-promotion", 4, "ngIf"], ["alt", "verification-icon", 1, "d-inline", "l-verification-icon", 3, "src"], [1, "d-inline", "g-text-p", "l-left"], [1, "g-text-p", "l-verification-price"], [1, "l-promotion"]],
    template: function VerificationCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function VerificationCardComponent_Template_div_click_0_listener() {
          return !ctx.isWeb && ctx.handleVerificationModal();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, VerificationCardComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.verificationSubscription.value.promotion);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx.verificationSubscription.value.source, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.verificationSubscription.value.product.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.verificationSubscription.value.product.price);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf],
    styles: [".l-verification-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  margin-right: 8px;\n}\n\n.l-left[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.l-verification-price[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n\n.l-verification-subscription[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px;\n  margin-bottom: 16px;\n  border: 1px #407ef8;\n  border-style: solid;\n  border-radius: 4px;\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  max-height: 70px;\n  position: relative;\n}\n\n.l-verification-subscription[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n\n.l-promotion[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  background-color: #407ef8;\n  color: #fff;\n  position: absolute;\n  top: -16px;\n  right: -2px;\n  font-weight: 700;\n  border-radius: 8px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvc3VwcG9ydC9jb21wb25lbnRzL3ZlcmlmaWNhdGlvbi92ZXJpZmljYXRpb24tY2FyZC92ZXJpZmljYXRpb24tY2FyZC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFESjs7QUFJQTtFQUNJLGdCQUFBO0FBREo7O0FBSUE7RUFDSSxnQkFBQTtBQURKOztBQUlBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFHQTtFQUNJLGdCQUFBO0FBQUo7O0FBR0E7RUFDSSxnQkFBQTtFQUNBLHlCQ0lZO0VESFosV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxnQkNlZTtFRGRmLGtCQ2JnQjtBRGFwQiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3NyYy92YXJpYWJsZXMuc2Nzcyc7XHJcblxyXG4ubC12ZXJpZmljYXRpb24taWNvbiB7XHJcbiAgICB3aWR0aDogNDhweDtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG59XHJcblxyXG4ubC1sZWZ0IHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5sLXZlcmlmaWNhdGlvbi1wcmljZSB7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4ubC12ZXJpZmljYXRpb24tc3Vic2NyaXB0aW9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICBib3JkZXI6IDFweCAkcHJpbWFyeS1jb2xvcjtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWF4LWhlaWdodDogNzBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4ubC12ZXJpZmljYXRpb24tc3Vic2NyaXB0aW9uOmxhc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLmwtcHJvbW90aW9uIHtcclxuICAgIHBhZGRpbmc6IDRweCA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtMTZweDtcclxuICAgIHJpZ2h0OiAtMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodC1ib2xkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogJGFwcC1ib3JkZXItcmFkaXVzO1xyXG59XHJcbiIsIi8vIFRleHRcclxuJGFwcC1mb250OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiRhcHAtaW5wdXQtZm9udDogJ011bGlzaCcsIHNhbnMtc2VyaWY7XHJcbiRhcHAtZm9udC1ibGFjazogIzM0MzQzNDtcclxuJGFwcC10ZXh0LWdyZXk6ICM3MDcwNzA7XHJcbiRhcHAtZm9udC1pbnB1dC1wbGFjZWhvbGRlcjogcmdiYSgzMCwgNDgsIDM3LCAwLjU2KTtcclxuJGFwcC1mb3JtLWluZm8tY29sb3I6ICNhZmFmYWY7XHJcblxyXG4vLyBDb2xvcnNcclxuJGFwcC1iZy1jb2xvcjogI2Y5ZjlmYztcclxuJGFwcC1idXlpbmctcmVkOiAjZTc2ZjUxO1xyXG4kYXBwLXNlbGxpbmctZ3JlZW46ICM3ZmE5OTU7XHJcbiRhcHAtaW5wdXQtYmctY29sb3I6ICNlNmU2ZTY7XHJcbiRhcHAtYm90dG9tLW5hdi1pdGVtLWJnOiAjZTVlZmU5O1xyXG4kYXBwLXRhYnMtbWFya2V0cGxhY2UtZ3JlZW46ICMyODVkNjA7XHJcbiRhcHAtdGFicy1uZWdvdGlhdGlvbnMtYmx1ZTogIzRmOWViZDtcclxuJGFwcC1ub3RpZmljYXRpb24tcmVkOiAjYTUzYTRhO1xyXG5cclxuLy8gR3JhZGllbnRzXHJcbiRhcHAtc2VsbGluZy1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgIzk4YjRhNywgIzRhNmU1ZSk7XHJcbiRhcHAtYnV5aW5nLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjZGY4YTc1LCAjYTI1MzNmKTtcclxuJGFwcC1zZWxsaW5nLWNhcmQtZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICM4NWFlOWIsICM3MzllOGEpO1xyXG4kYXBwLWJ1eWluZy1jYXJkLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAkYXBwLWJ1eWluZy1yZWQsICNjNzVkNDMpO1xyXG5cclxuLy8gQnV0dG9uc1xyXG4kYXBwLXByaW1hcnktYnV0dG9uLWJnLWNvbG9yOiAjMzFhMDVmO1xyXG4kYXBwLXNlY29uZGFyeS1idXR0b24tYmctY29sb3I6ICNlNWU1ZTU7XHJcbiRhcHAtZGVsZXRlLWJ1dHRvbi1yZWQ6ICNkMzQ1NWI7XHJcblxyXG4vLyBPdGhlclxyXG4kYXBwLWJvcmRlci1yYWRpdXM6IDhweDtcclxuJGFwcC1ib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjA4KSAhaW1wb3J0YW50O1xyXG5cclxuLy8gI3JlZ2lvbiBNYXRjaCBFeGNoYW5nZVxyXG5cclxuLy8gI3JlZ2lvbiBDb2xvcnNcclxuXHJcbiRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4kYmFja2dyb3VuZC1jb2xvci1ncmV5OiAjZjVmNWY1O1xyXG4kdGV4dC1kYXJrOiAjNDA0MDQwO1xyXG4kdGV4dC1wbGFjZWhvbGRlcjogIzhjOGM4YztcclxuJHByaW1hcnktY29sb3I6ICM0MDdlZjg7XHJcbiRzZWNvbmRhcnktY29sb3I6ICNlNWVkZmQ7XHJcbiRtZWRpdW0tYmx1ZTogIzhkOWVjNTtcclxuJHByaW1hcnktZ3JlZW46ICMxY2FmN2U7XHJcbiRzZWNvbmRhcnktZ3JlZW46ICNlN2Y3ZjA7XHJcbiRwcmltYXJ5LXJlZDogI2QyMzAzZDtcclxuJHNlY29uZGFyeS1yZWQ6ICNmN2U4ZTc7XHJcbiRpbnB1dC1ib3JkZXI6ICNlMmU4ZjA7XHJcbiRlcnJvci1tZXNzYWdlOiAjYjExNTBhO1xyXG4kZGlzYWJsZWQtY29sb3I6ICNjYmNiY2I7XHJcblxyXG4vLyAjZW5kcmVnaW9uXHJcblxyXG4vLyAjcmVnaW9uIFRleHRcclxuXHJcbiR0ZXh0LWZvbnQ6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuJGZvbnQtd2VpZ2h0LWJvbGQ6IDcwMDtcclxuJGZvbnQtd2VpZ2h0LXNlbWktYm9sZDogNjAwO1xyXG4kZm9udC13ZWlnaHQtcmVndWxhcjogNTAwO1xyXG4kZm9udC13ZWlnaHQtbGlnaHQ6IDQwMDtcclxuXHJcbi8vICNlbmRyZWdpb25cclxuXHJcbi8vICNyZWdpb24gQnV0dG9uc1xyXG5cclxuJGJ1dHRvbi1mb250LXdlaWdodDogNjAwO1xyXG5cclxuLy8gI2VuZHJlZ2lvblxyXG5cclxuLy8gI3JlZ2lvbiBPdGhlclxyXG5cclxuJGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHJcbi8vICNlbmRyZWdpb25cclxuXHJcbi8vICNlbmRyZWdpb25cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6324:
/*!************************************************************************************!*\
  !*** ./src/app/features/support/components/verification/verification.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VerificationComponent: () => (/* binding */ VerificationComponent)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/effects */ 1575);
/* harmony import */ var src_app_core_helpers_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/helpers/constants */ 9487);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 1527);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/core */ 8626);
/* harmony import */ var src_app_core_ngrx_app_state_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/ngrx/app-state/index */ 4073);
/* harmony import */ var _core_ngrx_reducers_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/ngrx/reducers/index */ 7032);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 5309);
/* harmony import */ var _angular_material_legacy_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/legacy-progress-spinner */ 3401);
/* harmony import */ var _verification_card_verification_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./verification-card/verification-card.component */ 1697);
















function VerificationComponent_ng_container_6_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 23)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Select a Yearly or Monthly subscription below");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function VerificationComponent_ng_container_6_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-verification-card", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const verificationSubscription_r11 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("verificationSubscription", verificationSubscription_r11)("isWeb", ctx_r4.isWeb);
  }
}
function VerificationComponent_ng_container_6_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 23)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "*VAT Excluded");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function VerificationComponent_ng_container_6_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-verification-card", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const verificationSubscription_r12 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("verificationSubscription", verificationSubscription_r12)("isWeb", ctx_r6.isWeb)("isGrainSAVerified", ctx_r6.isGrainSAVerified);
  }
}
function VerificationComponent_ng_container_6_div_15_a_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Apple EULA, ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function VerificationComponent_ng_container_6_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 27)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Your monthly or annual subscription automatically renews for the same term unless cancelled at least 24 hours prior to the end of the current term. Cancel at any time in the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " at no additional cost; your subscription will then cease at the end of the current term. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, VerificationComponent_ng_container_6_div_15_a_6_Template, 2, 0, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function VerificationComponent_ng_container_6_div_15_Template_a_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r14.handleRouteToDocumentViewer("ToS.pdf"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, " Terms Of Service");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function VerificationComponent_ng_container_6_div_15_Template_a_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r16.handleRouteToDocumentViewer("privacyPolicy.pdf"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Privacy Policy");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function VerificationComponent_ng_container_6_div_15_Template_a_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r17.handleRouteToDocumentViewer("Skudu_Acceptable.pdf"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Website Terms of Use");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r7.platform === "ios" ? "App Store" : "Google Play store");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r7.platform === "ios");
  }
}
function VerificationComponent_ng_container_6_mat_progress_spinner_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "mat-progress-spinner", 32);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("diameter", 30);
  }
}
function VerificationComponent_ng_container_6_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0, " Request By Email ");
  }
}
function VerificationComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " By Subscribing to Match Exchange you indicate to the market that you are a trusted party to transact with. A symbol of verification is displayed to matching counterparties on your Lots. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h2", 8)(4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Available Verification Types:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, VerificationComponent_ng_container_6_div_6_Template, 3, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, VerificationComponent_ng_container_6_div_7_Template, 2, 2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, VerificationComponent_ng_container_6_div_9_Template, 3, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "h2", 8)(11, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Grain SA");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, VerificationComponent_ng_container_6_div_13_Template, 2, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](14, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, VerificationComponent_ng_container_6_div_15_Template, 16, 2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "h2", 12)(17, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, " To verify your company you can download the application form or request it by email below: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 13)(20, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Download Form");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function VerificationComponent_ng_container_6_Template_button_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r18.handleRequestByEmail());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, VerificationComponent_ng_container_6_mat_progress_spinner_23_Template, 1, 1, "mat-progress-spinner", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, VerificationComponent_ng_container_6_ng_template_24_Template, 1, 0, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](27, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "Call: 021 870 3960");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](31, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "Email: info@matchmx.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](25);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r0.isWeb);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](8, 8, ctx_r0.baseVerificationSubscriptions));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.isWeb);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](14, 10, ctx_r0.promotionVerificationSubscriptions));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r0.isWeb);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("href", ctx_r0.isWeb ? "./assets/files/The Match Exchange - Client Subscription Form.docx" : "https://match.skudu.co.za/assets/files/The Match Exchange - Client Subscription Form.docx", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.isActionLoading)("ngIfElse", _r9);
  }
}
function VerificationComponent_ng_template_7_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 42)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Your monthly or annual subscription automatically renews for the same term unless cancelled at least 24 hours prior to the end of the current term. Cancel at any time in your store at no additional cost; your subscription will then cease at the end of the current term. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function VerificationComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 33)(1, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "You are verified as a");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 36)(7, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Subscription Start Date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, VerificationComponent_ng_template_7_div_11_Template, 3, 0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, " If your verification is displaying incorrectly, or you wish to change your verification type, please email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "info@matchmx.com.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r2.userVerification.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r2.userVerification.source, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.verificationDate.toLocaleDateString());
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r2.isWeb);
  }
}
class VerificationComponent {
  constructor(router, store, actions$) {
    this.router = router;
    this.store = store;
    this.actions$ = actions$;
    this.verificationSubscriptions = src_app_core_helpers_constants__WEBPACK_IMPORTED_MODULE_0__.VERIFICATION_SUBSCRIPTIONS;
    this.verificationTypes = src_app_core_helpers_constants__WEBPACK_IMPORTED_MODULE_0__.verificationTypes;
    this.isWeb = false;
    this.isUserVerified = false;
    this.isActionLoading = false;
    this.isGrainSAVerified = false;
    this.platform = _capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Capacitor.getPlatform();
    this.isWeb = this.platform === 'web';
  }
  ngOnInit() {
    this.baseVerificationSubscriptions = Object.fromEntries(Object.entries(this.verificationSubscriptions).filter(([key]) => src_app_core_helpers_constants__WEBPACK_IMPORTED_MODULE_0__.baseVerifications.includes(+key)));
    this.promotionVerificationSubscriptions = Object.fromEntries(Object.entries(this.verificationSubscriptions).filter(([key]) => src_app_core_helpers_constants__WEBPACK_IMPORTED_MODULE_0__.promotionVerifications.includes(+key)));
    this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.select)(_core_ngrx_reducers_index__WEBPACK_IMPORTED_MODULE_3__.authSelectors.getUser), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.take)(1)).subscribe(user => {
      if (user) {
        this.user = user;
        if (user.verification && user.verification.id !== 6) {
          this.isUserVerified = true;
          this.userVerification = this.verificationTypes[this.user.verification.id];
          this.verificationDate = new Date(this.user.verification.verificationDate);
        }
        if (user.grainSA?.isVerified) this.isGrainSAVerified = true;
      }
    });
  }
  handleBack() {
    this.router.navigate([src_app_core_helpers_constants__WEBPACK_IMPORTED_MODULE_0__.SUPPORT_ROUTE]);
  }
  handleRequestByEmail() {
    this.isActionLoading = true;
    this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.ofType)(src_app_core_ngrx_app_state_index__WEBPACK_IMPORTED_MODULE_2__.appActions.ReqEmailVerificationFormSuccess, src_app_core_ngrx_app_state_index__WEBPACK_IMPORTED_MODULE_2__.appActions.ReqEmailVerificationFormFail), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.take)(1)).subscribe(() => {
      this.isActionLoading = false;
    });
    this.store.dispatch(src_app_core_ngrx_app_state_index__WEBPACK_IMPORTED_MODULE_2__.appActions.ReqEmailVerificationForm());
  }
  handleRouteToDocumentViewer(name) {
    this.router.navigate([`${src_app_core_helpers_constants__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT_VIEWER_ROUTE}/${name}`]);
  }
  static #_ = this.ɵfac = function VerificationComponent_Factory(t) {
    return new (t || VerificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.Actions));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: VerificationComponent,
    selectors: [["app-verification"]],
    decls: 9,
    vars: 2,
    consts: [[1, "g-app-dimensions", "l-container"], [1, "l-header"], ["src", "./assets/icons/back-arrow-icon.svg", "alt", "back-arrow-icon", 1, "l-back-icon", 3, "click"], [1, "g-text-h2-dark", "m-0"], [1, "l-content"], [4, "ngIf", "ngIfElse"], ["showVerificationDetails", ""], [1, "g-text-p", "l-left", "my-5"], [1, "g-text-h2", "l-left", "mt-4", "mb-3"], ["class", "g-text-p-small-grey", 4, "ngIf"], ["class", "l-verification-container", 4, "ngFor", "ngForOf"], ["class", "g-text-p-small-grey mb-2", 4, "ngIf"], [1, "g-text-h2", "l-left", "my-4"], [1, "l-button-container"], ["mat-ripple", "", "download", "The Match Exchange - Client Subscription Form", 1, "g-primary-button", "l-button-link", 3, "href"], ["mat-flat-button", "", 1, "g-primary-button", "mt-3", 3, "click"], ["class", "g-mat-progress-spinner-white mx-auto", "mode", "indeterminate", 3, "diameter", 4, "ngIf", "ngIfElse"], ["showRequestByEmail", ""], [1, "l-contacts", "mt-4"], ["src", "./assets/images/blue-phone.svg", "alt", "Blue phone", 1, "l-verification-icon"], [1, "g-text-p", "l-left", "m-0"], [1, "l-contacts"], ["src", "./assets/images/blue-at-symbol.svg", "alt", "Commercial at sign", 1, "l-verification-icon"], [1, "g-text-p-small-grey"], [1, "l-verification-container"], [3, "verificationSubscription", "isWeb"], [3, "verificationSubscription", "isWeb", "isGrainSAVerified"], [1, "g-text-p-small-grey", "mb-2"], ["class", "l-document-link", "href", "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/", 4, "ngIf"], ["href", "https://app.matchmx.com/assets/files/ToS.html", 1, "l-document-link", 3, "click"], [1, "l-document-link", 3, "click"], ["href", "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/", 1, "l-document-link"], ["mode", "indeterminate", 1, "g-mat-progress-spinner-white", "mx-auto", 3, "diameter"], [1, "l-user-verified"], [1, "m-0"], ["alt", "verification-icon", 1, "l-verification-icon-verified", 3, "src"], [1, "mt-1"], [1, "g-text-h2", "d-inline", "mr-1"], ["id", "months", 1, "d-inline"], ["class", "g-text-p-small-grey mt-4", 4, "ngIf"], [1, "l-incorrect-verification-contact"], ["href", "mailto:info@matchmx.com"], [1, "g-text-p-small-grey", "mt-4"]],
    template: function VerificationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function VerificationComponent_Template_img_click_2_listener() {
          return ctx.handleBack();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Verification");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, VerificationComponent_ng_container_6_Template, 34, 12, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, VerificationComponent_ng_template_7_Template, 16, 4, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isUserVerified)("ngIfElse", _r1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatRipple, _angular_material_legacy_progress_spinner__WEBPACK_IMPORTED_MODULE_12__.MatLegacyProgressSpinner, _verification_card_verification_card_component__WEBPACK_IMPORTED_MODULE_4__.VerificationCardComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.KeyValuePipe],
    styles: [".l-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-color: #f5f5f5;\n  overflow-y: auto;\n}\n\n.l-header[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  min-height: 56px;\n  background-color: white;\n  padding-top: 16px;\n}\n\n.l-back-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 16px;\n  top: 20px;\n  width: 20.24px;\n  height: 13.5px;\n}\n\n.l-content[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 16px;\n  padding-bottom: 32px;\n}\n\n.l-left[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.l-contacts[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  margin-bottom: 16px;\n}\n\n.l-user-verified[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n\n.l-verification-container[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n\n.l-verification-container[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n\n.l-verification-price[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n\n.l-verification-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: auto;\n  margin-right: 24px;\n}\n\n.l-verification-icon-verified[_ngcontent-%COMP%] {\n  width: 64px;\n  height: auto;\n}\n\n.l-incorrect-verification-contact[_ngcontent-%COMP%] {\n  margin-top: 60px;\n}\n\n.l-button-container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.l-button-link[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-decoration: none !important;\n  color: #ffffff !important;\n}\n\n.l-document-link[_ngcontent-%COMP%] {\n  color: #407ef8;\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvc3VwcG9ydC9jb21wb25lbnRzL3ZlcmlmaWNhdGlvbi92ZXJpZmljYXRpb24uY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQ2lDb0I7RURoQ3BCLGdCQUFBO0FBREo7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUFESjs7QUFJQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQURKOztBQUlBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtBQURKOztBQUlBO0VBQ0ksZ0JBQUE7QUFESjs7QUFJQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQURKOztBQUlBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBREo7O0FBSUE7RUFDSSxtQkFBQTtBQURKOztBQUdBO0VBQ0ksZ0JBQUE7QUFBSjs7QUFHQTtFQUNJLGdCQUFBO0FBQUo7O0FBR0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBR0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUdBO0VBQ0ksZ0JBQUE7QUFBSjs7QUFHQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUdBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLHlCQUFBO0FBQUo7O0FBR0E7RUFDSSxjQ25EWTtFRG9EWiwwQkFBQTtBQUFKIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3JjL3ZhcmlhYmxlcy5zY3NzJztcclxuXHJcbi5sLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yLWdyZXk7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4ubC1oZWFkZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiA1NnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcclxufVxyXG5cclxuLmwtYmFjay1pY29uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDE2cHg7XHJcbiAgICB0b3A6IDIwcHg7XHJcbiAgICB3aWR0aDogMjAuMjRweDtcclxuICAgIGhlaWdodDogMTMuNXB4O1xyXG59XHJcblxyXG4ubC1jb250ZW50IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzMnB4O1xyXG59XHJcblxyXG4ubC1sZWZ0IHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5sLWNvbnRhY3RzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG59XHJcblxyXG4ubC11c2VyLXZlcmlmaWVkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubC12ZXJpZmljYXRpb24tY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbn1cclxuLmwtdmVyaWZpY2F0aW9uLWNvbnRhaW5lcjpsYXN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5sLXZlcmlmaWNhdGlvbi1wcmljZSB7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4ubC12ZXJpZmljYXRpb24taWNvbiB7XHJcbiAgICB3aWR0aDogNDhweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogMjRweDtcclxufVxyXG5cclxuLmwtdmVyaWZpY2F0aW9uLWljb24tdmVyaWZpZWQge1xyXG4gICAgd2lkdGg6IDY0cHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5sLWluY29ycmVjdC12ZXJpZmljYXRpb24tY29udGFjdCB7XHJcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xyXG59XHJcblxyXG4ubC1idXR0b24tY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubC1idXR0b24tbGluayB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubC1kb2N1bWVudC1saW5rIHtcclxuICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcbiIsIi8vIFRleHRcclxuJGFwcC1mb250OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiRhcHAtaW5wdXQtZm9udDogJ011bGlzaCcsIHNhbnMtc2VyaWY7XHJcbiRhcHAtZm9udC1ibGFjazogIzM0MzQzNDtcclxuJGFwcC10ZXh0LWdyZXk6ICM3MDcwNzA7XHJcbiRhcHAtZm9udC1pbnB1dC1wbGFjZWhvbGRlcjogcmdiYSgzMCwgNDgsIDM3LCAwLjU2KTtcclxuJGFwcC1mb3JtLWluZm8tY29sb3I6ICNhZmFmYWY7XHJcblxyXG4vLyBDb2xvcnNcclxuJGFwcC1iZy1jb2xvcjogI2Y5ZjlmYztcclxuJGFwcC1idXlpbmctcmVkOiAjZTc2ZjUxO1xyXG4kYXBwLXNlbGxpbmctZ3JlZW46ICM3ZmE5OTU7XHJcbiRhcHAtaW5wdXQtYmctY29sb3I6ICNlNmU2ZTY7XHJcbiRhcHAtYm90dG9tLW5hdi1pdGVtLWJnOiAjZTVlZmU5O1xyXG4kYXBwLXRhYnMtbWFya2V0cGxhY2UtZ3JlZW46ICMyODVkNjA7XHJcbiRhcHAtdGFicy1uZWdvdGlhdGlvbnMtYmx1ZTogIzRmOWViZDtcclxuJGFwcC1ub3RpZmljYXRpb24tcmVkOiAjYTUzYTRhO1xyXG5cclxuLy8gR3JhZGllbnRzXHJcbiRhcHAtc2VsbGluZy1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgIzk4YjRhNywgIzRhNmU1ZSk7XHJcbiRhcHAtYnV5aW5nLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjZGY4YTc1LCAjYTI1MzNmKTtcclxuJGFwcC1zZWxsaW5nLWNhcmQtZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICM4NWFlOWIsICM3MzllOGEpO1xyXG4kYXBwLWJ1eWluZy1jYXJkLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAkYXBwLWJ1eWluZy1yZWQsICNjNzVkNDMpO1xyXG5cclxuLy8gQnV0dG9uc1xyXG4kYXBwLXByaW1hcnktYnV0dG9uLWJnLWNvbG9yOiAjMzFhMDVmO1xyXG4kYXBwLXNlY29uZGFyeS1idXR0b24tYmctY29sb3I6ICNlNWU1ZTU7XHJcbiRhcHAtZGVsZXRlLWJ1dHRvbi1yZWQ6ICNkMzQ1NWI7XHJcblxyXG4vLyBPdGhlclxyXG4kYXBwLWJvcmRlci1yYWRpdXM6IDhweDtcclxuJGFwcC1ib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjA4KSAhaW1wb3J0YW50O1xyXG5cclxuLy8gI3JlZ2lvbiBNYXRjaCBFeGNoYW5nZVxyXG5cclxuLy8gI3JlZ2lvbiBDb2xvcnNcclxuXHJcbiRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4kYmFja2dyb3VuZC1jb2xvci1ncmV5OiAjZjVmNWY1O1xyXG4kdGV4dC1kYXJrOiAjNDA0MDQwO1xyXG4kdGV4dC1wbGFjZWhvbGRlcjogIzhjOGM4YztcclxuJHByaW1hcnktY29sb3I6ICM0MDdlZjg7XHJcbiRzZWNvbmRhcnktY29sb3I6ICNlNWVkZmQ7XHJcbiRtZWRpdW0tYmx1ZTogIzhkOWVjNTtcclxuJHByaW1hcnktZ3JlZW46ICMxY2FmN2U7XHJcbiRzZWNvbmRhcnktZ3JlZW46ICNlN2Y3ZjA7XHJcbiRwcmltYXJ5LXJlZDogI2QyMzAzZDtcclxuJHNlY29uZGFyeS1yZWQ6ICNmN2U4ZTc7XHJcbiRpbnB1dC1ib3JkZXI6ICNlMmU4ZjA7XHJcbiRlcnJvci1tZXNzYWdlOiAjYjExNTBhO1xyXG4kZGlzYWJsZWQtY29sb3I6ICNjYmNiY2I7XHJcblxyXG4vLyAjZW5kcmVnaW9uXHJcblxyXG4vLyAjcmVnaW9uIFRleHRcclxuXHJcbiR0ZXh0LWZvbnQ6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuJGZvbnQtd2VpZ2h0LWJvbGQ6IDcwMDtcclxuJGZvbnQtd2VpZ2h0LXNlbWktYm9sZDogNjAwO1xyXG4kZm9udC13ZWlnaHQtcmVndWxhcjogNTAwO1xyXG4kZm9udC13ZWlnaHQtbGlnaHQ6IDQwMDtcclxuXHJcbi8vICNlbmRyZWdpb25cclxuXHJcbi8vICNyZWdpb24gQnV0dG9uc1xyXG5cclxuJGJ1dHRvbi1mb250LXdlaWdodDogNjAwO1xyXG5cclxuLy8gI2VuZHJlZ2lvblxyXG5cclxuLy8gI3JlZ2lvbiBPdGhlclxyXG5cclxuJGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHJcbi8vICNlbmRyZWdpb25cclxuXHJcbi8vICNlbmRyZWdpb25cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2859:
/*!************************************************************!*\
  !*** ./src/app/features/support/support-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SupportRoutingModule: () => (/* binding */ SupportRoutingModule)
/* harmony export */ });
/* harmony import */ var _components_detailed_tutorial_detailed_tutorial_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/detailed-tutorial/detailed-tutorial.component */ 3000);
/* harmony import */ var _components_know_your_counter_party_know_your_counter_party_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/know-your-counter-party/know-your-counter-party.component */ 7150);
/* harmony import */ var _components_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/contact-us/contact-us.component */ 9278);
/* harmony import */ var _components_faq_faq_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/faq/faq.component */ 3913);
/* harmony import */ var _support_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./support.component */ 3994);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _components_verification_verification_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/verification/verification.component */ 6324);
/* harmony import */ var _angular_fire_compat_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/compat/auth-guard */ 8110);
/* harmony import */ var src_app_core_helpers_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/helpers/constants */ 9487);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 1699);











const redirectUnauthorizedToLogin = () => (0,_angular_fire_compat_auth_guard__WEBPACK_IMPORTED_MODULE_7__.redirectUnauthorizedTo)([src_app_core_helpers_constants__WEBPACK_IMPORTED_MODULE_6__.SIGNIN_ROUTE]);
const routes = [{
  path: '',
  children: [{
    path: '',
    canActivate: [_angular_fire_compat_auth_guard__WEBPACK_IMPORTED_MODULE_7__.AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectUnauthorizedToLogin
    },
    component: _support_component__WEBPACK_IMPORTED_MODULE_4__.SupportComponent
  }, {
    path: 'FAQs',
    canActivate: [_angular_fire_compat_auth_guard__WEBPACK_IMPORTED_MODULE_7__.AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectUnauthorizedToLogin
    },
    component: _components_faq_faq_component__WEBPACK_IMPORTED_MODULE_3__.FAQComponent
  }, {
    path: 'contact-us',
    canActivate: [_angular_fire_compat_auth_guard__WEBPACK_IMPORTED_MODULE_7__.AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectUnauthorizedToLogin
    },
    component: _components_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_2__.ContactUsComponent
  }, {
    path: 'kyc-party',
    canActivate: [_angular_fire_compat_auth_guard__WEBPACK_IMPORTED_MODULE_7__.AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectUnauthorizedToLogin
    },
    component: _components_know_your_counter_party_know_your_counter_party_component__WEBPACK_IMPORTED_MODULE_1__.KnowYourCounterPartyComponent
  }, {
    path: 'detailed-tutorial',
    canActivate: [_angular_fire_compat_auth_guard__WEBPACK_IMPORTED_MODULE_7__.AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectUnauthorizedToLogin
    },
    component: _components_detailed_tutorial_detailed_tutorial_component__WEBPACK_IMPORTED_MODULE_0__.DetailedTutorialComponent
  }, {
    path: 'verification',
    component: _components_verification_verification_component__WEBPACK_IMPORTED_MODULE_5__.VerificationComponent
  }]
}];
class SupportRoutingModule {
  static #_ = this.ɵfac = function SupportRoutingModule_Factory(t) {
    return new (t || SupportRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
    type: SupportRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](SupportRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
  });
})();

/***/ }),

/***/ 3994:
/*!*******************************************************!*\
  !*** ./src/app/features/support/support.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SupportComponent: () => (/* binding */ SupportComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_helpers_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/helpers/constants */ 9487);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ 5309);







function SupportComponent_div_6_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 11)(1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 14)(4, "h2", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const card_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", card_r1.linksTo, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", card_r1.source, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", card_r1.sourceAlt);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](card_r1.title);
  }
}
function SupportComponent_div_6_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SupportComponent_div_6_ng_template_2_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const card_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.handleNavigate(card_r1.routesTo));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 14)(4, "h2", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const card_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", card_r1.source, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", card_r1.sourceAlt);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](card_r1.title);
  }
}
function SupportComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SupportComponent_div_6_a_1_Template, 6, 4, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SupportComponent_div_6_ng_template_2_Template, 6, 3, "ng-template", 9, 10, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SupportComponent_div_6_Template_ng_template_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const card_r1 = restoredCtx.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r10.handleNavigate(card_r1.routesTo));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const card_r1 = ctx.$implicit;
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", card_r1.linksTo !== null)("ngIfElse", _r3);
  }
}
class SupportComponent {
  constructor(router, location) {
    this.router = router;
    this.location = location;
    this.cards = src_app_core_helpers_constants__WEBPACK_IMPORTED_MODULE_0__.SUPPORT_CARDS_DATA;
  }
  ngOnInit() {}
  handleNavigateToHome() {
    this.router.navigate([src_app_core_helpers_constants__WEBPACK_IMPORTED_MODULE_0__.HOME_ROUTE]);
  }
  handleNavigate(route) {
    route === src_app_core_helpers_constants__WEBPACK_IMPORTED_MODULE_0__.LANDING_ROUTE ? this.router.navigate([route], {
      queryParams: {
        fromSupport: true
      }
    }) : this.router.navigate([route]);
  }
  static #_ = this.ɵfac = function SupportComponent_Factory(t) {
    return new (t || SupportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.Location));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: SupportComponent,
    selectors: [["app-support"]],
    decls: 7,
    vars: 1,
    consts: [[1, "g-app-dimensions", "l-container"], [1, "l-header"], ["src", "./assets/icons/back-arrow-icon.svg", "alt", "back-arrow-icon", 1, "l-back-icon", 3, "click"], [1, "l-header-img-container"], ["src", "./assets/images/MX-logo-full.svg", "alt", "MX Match Logo", 1, "l-header-img", 3, "click"], [1, "l-cards-container"], ["class", "l-card", "matRipple", "", 4, "ngFor", "ngForOf"], ["matRipple", "", 1, "l-card"], ["class", "l-card l-black", "target", "_blank", 3, "href", 4, "ngIf", "ngIfElse"], ["class", "l-black", 3, "click"], ["displayRouteCard", ""], ["target", "_blank", 1, "l-card", "l-black", 3, "href"], [1, "l-card-img-container"], [1, "l-card-img", 3, "src", "alt"], [1, "l-card-title-container"], [1, "g-text-h2", "m-0"], [1, "l-card", 3, "click"], [1, "g-text-h2", "m-0", "text-left"]],
    template: function SupportComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SupportComponent_Template_img_click_2_listener() {
          return ctx.handleNavigateToHome();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3)(4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SupportComponent_Template_img_click_4_listener() {
          return ctx.handleNavigateToHome();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, SupportComponent_div_6_Template, 4, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.cards);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatRipple],
    styles: [".l-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-color: #f9f9fc;\n  overflow: auto;\n}\n\n.l-header[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: -moz-fit-content;\n  height: fit-content;\n  background-color: white;\n  padding: 16px;\n  display: flex;\n  align-items: center;\n}\n\n.l-header-img-container[_ngcontent-%COMP%] {\n  width: 120px;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin: 0 auto;\n}\n\n.l-header-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n}\n\n.l-notification-img[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 24px;\n  height: auto;\n}\n\n.l-cards-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: -moz-fit-content;\n  height: fit-content;\n  padding: 16px;\n  background-color: #f5f5f5;\n}\n\n.l-card[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 96px;\n  display: flex;\n  background-color: #ffffff;\n  margin-top: 16px;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n.l-card[_ngcontent-%COMP%]:first-child {\n  margin: 0;\n}\n\n.l-card-img-container[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 25px;\n  margin-left: 34px;\n}\n\n.l-card-img[_ngcontent-%COMP%] {\n  height: 24px;\n  width: 24px;\n}\n\n.l-card-title-container[_ngcontent-%COMP%] {\n  width: calc(100% - 140px);\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n\n.l-black[_ngcontent-%COMP%] {\n  color: black;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvc3VwcG9ydC9zdXBwb3J0LmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkNJVztFREhYLGNBQUE7QUFESjs7QUFJQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFJQTtFQUNJLFlBQUE7RUFDQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsY0FBQTtBQURKOztBQUlBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFESjs7QUFJQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQURKOztBQUlBO0VBQ0ksV0FBQTtFQUNBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxhQUFBO0VBQ0EseUJDSm9CO0FER3hCOztBQUlBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkNiZTtFRGNmLGdCQUFBO0VBQ0Esa0JDb0JZO0VEbkJaLGVBQUE7QUFESjs7QUFHQTtFQUNJLFNBQUE7QUFBSjs7QUFHQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFHQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBQUo7O0FBR0E7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFHQTtFQUNJLFlBQUE7RUFDQSxxQkFBQTtBQUFKIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3JjL3ZhcmlhYmxlcy5zY3NzJztcclxuXHJcbi5sLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRhcHAtYmctY29sb3I7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLmwtaGVhZGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubC1oZWFkZXItaW1nLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5sLWhlYWRlci1pbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5sLW5vdGlmaWNhdGlvbi1pbWcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB3aWR0aDogMjRweDtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLmwtY2FyZHMtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvci1ncmV5O1xyXG59XHJcblxyXG4ubC1jYXJkIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA5NnB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5sLWNhcmQ6Zmlyc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4ubC1jYXJkLWltZy1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1yaWdodDogMjVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzNHB4O1xyXG59XHJcblxyXG4ubC1jYXJkLWltZyB7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICB3aWR0aDogMjRweDtcclxufVxyXG5cclxuLmwtY2FyZC10aXRsZS1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDE0MHB4KTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubC1ibGFjayB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuIiwiLy8gVGV4dFxyXG4kYXBwLWZvbnQ6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuJGFwcC1pbnB1dC1mb250OiAnTXVsaXNoJywgc2Fucy1zZXJpZjtcclxuJGFwcC1mb250LWJsYWNrOiAjMzQzNDM0O1xyXG4kYXBwLXRleHQtZ3JleTogIzcwNzA3MDtcclxuJGFwcC1mb250LWlucHV0LXBsYWNlaG9sZGVyOiByZ2JhKDMwLCA0OCwgMzcsIDAuNTYpO1xyXG4kYXBwLWZvcm0taW5mby1jb2xvcjogI2FmYWZhZjtcclxuXHJcbi8vIENvbG9yc1xyXG4kYXBwLWJnLWNvbG9yOiAjZjlmOWZjO1xyXG4kYXBwLWJ1eWluZy1yZWQ6ICNlNzZmNTE7XHJcbiRhcHAtc2VsbGluZy1ncmVlbjogIzdmYTk5NTtcclxuJGFwcC1pbnB1dC1iZy1jb2xvcjogI2U2ZTZlNjtcclxuJGFwcC1ib3R0b20tbmF2LWl0ZW0tYmc6ICNlNWVmZTk7XHJcbiRhcHAtdGFicy1tYXJrZXRwbGFjZS1ncmVlbjogIzI4NWQ2MDtcclxuJGFwcC10YWJzLW5lZ290aWF0aW9ucy1ibHVlOiAjNGY5ZWJkO1xyXG4kYXBwLW5vdGlmaWNhdGlvbi1yZWQ6ICNhNTNhNGE7XHJcblxyXG4vLyBHcmFkaWVudHNcclxuJGFwcC1zZWxsaW5nLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjOThiNGE3LCAjNGE2ZTVlKTtcclxuJGFwcC1idXlpbmctZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICNkZjhhNzUsICNhMjUzM2YpO1xyXG4kYXBwLXNlbGxpbmctY2FyZC1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgIzg1YWU5YiwgIzczOWU4YSk7XHJcbiRhcHAtYnV5aW5nLWNhcmQtZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICRhcHAtYnV5aW5nLXJlZCwgI2M3NWQ0Myk7XHJcblxyXG4vLyBCdXR0b25zXHJcbiRhcHAtcHJpbWFyeS1idXR0b24tYmctY29sb3I6ICMzMWEwNWY7XHJcbiRhcHAtc2Vjb25kYXJ5LWJ1dHRvbi1iZy1jb2xvcjogI2U1ZTVlNTtcclxuJGFwcC1kZWxldGUtYnV0dG9uLXJlZDogI2QzNDU1YjtcclxuXHJcbi8vIE90aGVyXHJcbiRhcHAtYm9yZGVyLXJhZGl1czogOHB4O1xyXG4kYXBwLWJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDgpICFpbXBvcnRhbnQ7XHJcblxyXG4vLyAjcmVnaW9uIE1hdGNoIEV4Y2hhbmdlXHJcblxyXG4vLyAjcmVnaW9uIENvbG9yc1xyXG5cclxuJGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiRiYWNrZ3JvdW5kLWNvbG9yLWdyZXk6ICNmNWY1ZjU7XHJcbiR0ZXh0LWRhcms6ICM0MDQwNDA7XHJcbiR0ZXh0LXBsYWNlaG9sZGVyOiAjOGM4YzhjO1xyXG4kcHJpbWFyeS1jb2xvcjogIzQwN2VmODtcclxuJHNlY29uZGFyeS1jb2xvcjogI2U1ZWRmZDtcclxuJG1lZGl1bS1ibHVlOiAjOGQ5ZWM1O1xyXG4kcHJpbWFyeS1ncmVlbjogIzFjYWY3ZTtcclxuJHNlY29uZGFyeS1ncmVlbjogI2U3ZjdmMDtcclxuJHByaW1hcnktcmVkOiAjZDIzMDNkO1xyXG4kc2Vjb25kYXJ5LXJlZDogI2Y3ZThlNztcclxuJGlucHV0LWJvcmRlcjogI2UyZThmMDtcclxuJGVycm9yLW1lc3NhZ2U6ICNiMTE1MGE7XHJcbiRkaXNhYmxlZC1jb2xvcjogI2NiY2JjYjtcclxuXHJcbi8vICNlbmRyZWdpb25cclxuXHJcbi8vICNyZWdpb24gVGV4dFxyXG5cclxuJHRleHQtZm9udDogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4kZm9udC13ZWlnaHQtYm9sZDogNzAwO1xyXG4kZm9udC13ZWlnaHQtc2VtaS1ib2xkOiA2MDA7XHJcbiRmb250LXdlaWdodC1yZWd1bGFyOiA1MDA7XHJcbiRmb250LXdlaWdodC1saWdodDogNDAwO1xyXG5cclxuLy8gI2VuZHJlZ2lvblxyXG5cclxuLy8gI3JlZ2lvbiBCdXR0b25zXHJcblxyXG4kYnV0dG9uLWZvbnQtd2VpZ2h0OiA2MDA7XHJcblxyXG4vLyAjZW5kcmVnaW9uXHJcblxyXG4vLyAjcmVnaW9uIE90aGVyXHJcblxyXG4kYm9yZGVyLXJhZGl1czogNHB4O1xyXG5cclxuLy8gI2VuZHJlZ2lvblxyXG5cclxuLy8gI2VuZHJlZ2lvblxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 3673:
/*!****************************************************!*\
  !*** ./src/app/features/support/support.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SupportModule: () => (/* binding */ SupportModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ 5309);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/expansion */ 8060);
/* harmony import */ var _support_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./support-routing.module */ 2859);
/* harmony import */ var _angular_material_legacy_progress_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/legacy-progress-spinner */ 3401);
/* harmony import */ var _components_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/contact-us/contact-us.component */ 9278);
/* harmony import */ var _components_faq_faq_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/faq/faq.component */ 3913);
/* harmony import */ var _support_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./support.component */ 3994);
/* harmony import */ var _components_know_your_counter_party_know_your_counter_party_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/know-your-counter-party/know-your-counter-party.component */ 7150);
/* harmony import */ var _components_detailed_tutorial_detailed_tutorial_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/detailed-tutorial/detailed-tutorial.component */ 3000);
/* harmony import */ var _components_verification_verification_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/verification/verification.component */ 6324);
/* harmony import */ var _components_verification_verification_card_verification_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/verification/verification-card/verification-card.component */ 1697);
/* harmony import */ var _components_verification_subscription_type_modal_subscription_type_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/verification/subscription-type-modal/subscription-type-modal.component */ 949);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngrx/effects */ 1575);
/* harmony import */ var _core_ngrx_paygate_paygate_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/ngrx/paygate/paygate.effects */ 3937);
/* harmony import */ var _components_verification_not_verified_modal_not_verified_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/verification/not-verified-modal/not-verified-modal.component */ 9730);
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/google-maps */ 8684);
/* harmony import */ var _angular_magic_ngx_gp_autocomplete__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular-magic/ngx-gp-autocomplete */ 4711);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 1699);

//import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
//import { AgmCoreModule } from '@diegomvh/agm-core';




// #endregion
// #region Component Imports















// #endregion
class SupportModule {
  static #_ = this.ɵfac = function SupportModule_Factory(t) {
    return new (t || SupportModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
    type: SupportModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _support_routing_module__WEBPACK_IMPORTED_MODULE_0__.SupportRoutingModule, _angular_google_maps__WEBPACK_IMPORTED_MODULE_13__.GoogleMapsModule, _angular_magic_ngx_gp_autocomplete__WEBPACK_IMPORTED_MODULE_14__.NgxGpAutocompleteModule,
    // GooglePlaceModule,
    _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatRippleModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__.MatExpansionModule, _angular_material_legacy_progress_spinner__WEBPACK_IMPORTED_MODULE_17__.MatLegacyProgressSpinnerModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_18__.EffectsModule.forFeature([_core_ngrx_paygate_paygate_effects__WEBPACK_IMPORTED_MODULE_9__.PaygateEffects])]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](SupportModule, {
    declarations: [_support_component__WEBPACK_IMPORTED_MODULE_3__.SupportComponent, _components_faq_faq_component__WEBPACK_IMPORTED_MODULE_2__.FAQComponent, _components_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_1__.ContactUsComponent, _components_know_your_counter_party_know_your_counter_party_component__WEBPACK_IMPORTED_MODULE_4__.KnowYourCounterPartyComponent, _components_detailed_tutorial_detailed_tutorial_component__WEBPACK_IMPORTED_MODULE_5__.DetailedTutorialComponent, _components_verification_verification_component__WEBPACK_IMPORTED_MODULE_6__.VerificationComponent, _components_verification_verification_card_verification_card_component__WEBPACK_IMPORTED_MODULE_7__.VerificationCardComponent, _components_verification_subscription_type_modal_subscription_type_modal_component__WEBPACK_IMPORTED_MODULE_8__.SubscriptionTypeModalComponent, _components_verification_not_verified_modal_not_verified_modal_component__WEBPACK_IMPORTED_MODULE_10__.NotVerifiedModalComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _support_routing_module__WEBPACK_IMPORTED_MODULE_0__.SupportRoutingModule, _angular_google_maps__WEBPACK_IMPORTED_MODULE_13__.GoogleMapsModule, _angular_magic_ngx_gp_autocomplete__WEBPACK_IMPORTED_MODULE_14__.NgxGpAutocompleteModule,
    // GooglePlaceModule,
    _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatRippleModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__.MatExpansionModule, _angular_material_legacy_progress_spinner__WEBPACK_IMPORTED_MODULE_17__.MatLegacyProgressSpinnerModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_18__.EffectsFeatureModule]
  });
})();

/***/ }),

/***/ 8355:
/*!**********************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/accordion.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CDK_ACCORDION: () => (/* binding */ CDK_ACCORDION),
/* harmony export */   CdkAccordion: () => (/* binding */ CdkAccordion),
/* harmony export */   CdkAccordionItem: () => (/* binding */ CdkAccordionItem),
/* harmony export */   CdkAccordionModule: () => (/* binding */ CdkAccordionModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/collections */ 636);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/coercion */ 5998);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 1523);






/** Used to generate unique ID for each accordion. */
let nextId$1 = 0;
/**
 * Injection token that can be used to reference instances of `CdkAccordion`. It serves
 * as alternative token to the actual `CdkAccordion` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */
const CDK_ACCORDION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('CdkAccordion');
/**
 * Directive whose purpose is to manage the expanded state of CdkAccordionItem children.
 */
class CdkAccordion {
  constructor() {
    /** Emits when the state of the accordion changes */
    this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /** Stream that emits true/false when openAll/closeAll is triggered. */
    this._openCloseAllActions = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /** A readonly id value to use for unique selection coordination. */
    this.id = `cdk-accordion-${nextId$1++}`;
    this._multi = false;
  }
  /** Whether the accordion should allow multiple expanded accordion items simultaneously. */
  get multi() {
    return this._multi;
  }
  set multi(multi) {
    this._multi = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(multi);
  }
  /** Opens all enabled accordion items in an accordion where multi is enabled. */
  openAll() {
    if (this._multi) {
      this._openCloseAllActions.next(true);
    }
  }
  /** Closes all enabled accordion items. */
  closeAll() {
    this._openCloseAllActions.next(false);
  }
  ngOnChanges(changes) {
    this._stateChanges.next(changes);
  }
  ngOnDestroy() {
    this._stateChanges.complete();
    this._openCloseAllActions.complete();
  }
  static #_ = this.ɵfac = function CdkAccordion_Factory(t) {
    return new (t || CdkAccordion)();
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: CdkAccordion,
    selectors: [["cdk-accordion"], ["", "cdkAccordion", ""]],
    inputs: {
      multi: "multi"
    },
    exportAs: ["cdkAccordion"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
      provide: CDK_ACCORDION,
      useExisting: CdkAccordion
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkAccordion, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'cdk-accordion, [cdkAccordion]',
      exportAs: 'cdkAccordion',
      providers: [{
        provide: CDK_ACCORDION,
        useExisting: CdkAccordion
      }]
    }]
  }], null, {
    multi: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

/** Used to generate unique ID for each accordion item. */
let nextId = 0;
/**
 * An basic directive expected to be extended and decorated as a component.  Sets up all
 * events and attributes needed to be managed by a CdkAccordion parent.
 */
class CdkAccordionItem {
  /** Whether the AccordionItem is expanded. */
  get expanded() {
    return this._expanded;
  }
  set expanded(expanded) {
    expanded = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(expanded);
    // Only emit events and update the internal value if the value changes.
    if (this._expanded !== expanded) {
      this._expanded = expanded;
      this.expandedChange.emit(expanded);
      if (expanded) {
        this.opened.emit();
        /**
         * In the unique selection dispatcher, the id parameter is the id of the CdkAccordionItem,
         * the name value is the id of the accordion.
         */
        const accordionId = this.accordion ? this.accordion.id : this.id;
        this._expansionDispatcher.notify(this.id, accordionId);
      } else {
        this.closed.emit();
      }
      // Ensures that the animation will run when the value is set outside of an `@Input`.
      // This includes cases like the open, close and toggle methods.
      this._changeDetectorRef.markForCheck();
    }
  }
  /** Whether the AccordionItem is disabled. */
  get disabled() {
    return this._disabled;
  }
  set disabled(disabled) {
    this._disabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(disabled);
  }
  constructor(accordion, _changeDetectorRef, _expansionDispatcher) {
    this.accordion = accordion;
    this._changeDetectorRef = _changeDetectorRef;
    this._expansionDispatcher = _expansionDispatcher;
    /** Subscription to openAll/closeAll events. */
    this._openCloseAllSubscription = rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription.EMPTY;
    /** Event emitted every time the AccordionItem is closed. */
    this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Event emitted every time the AccordionItem is opened. */
    this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Event emitted when the AccordionItem is destroyed. */
    this.destroyed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Emits whenever the expanded state of the accordion changes.
     * Primarily used to facilitate two-way binding.
     * @docs-private
     */
    this.expandedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** The unique AccordionItem id. */
    this.id = `cdk-accordion-child-${nextId++}`;
    this._expanded = false;
    this._disabled = false;
    /** Unregister function for _expansionDispatcher. */
    this._removeUniqueSelectionListener = () => {};
    this._removeUniqueSelectionListener = _expansionDispatcher.listen((id, accordionId) => {
      if (this.accordion && !this.accordion.multi && this.accordion.id === accordionId && this.id !== id) {
        this.expanded = false;
      }
    });
    // When an accordion item is hosted in an accordion, subscribe to open/close events.
    if (this.accordion) {
      this._openCloseAllSubscription = this._subscribeToOpenCloseAllActions();
    }
  }
  /** Emits an event for the accordion item being destroyed. */
  ngOnDestroy() {
    this.opened.complete();
    this.closed.complete();
    this.destroyed.emit();
    this.destroyed.complete();
    this._removeUniqueSelectionListener();
    this._openCloseAllSubscription.unsubscribe();
  }
  /** Toggles the expanded state of the accordion item. */
  toggle() {
    if (!this.disabled) {
      this.expanded = !this.expanded;
    }
  }
  /** Sets the expanded state of the accordion item to false. */
  close() {
    if (!this.disabled) {
      this.expanded = false;
    }
  }
  /** Sets the expanded state of the accordion item to true. */
  open() {
    if (!this.disabled) {
      this.expanded = true;
    }
  }
  _subscribeToOpenCloseAllActions() {
    return this.accordion._openCloseAllActions.subscribe(expanded => {
      // Only change expanded state if item is enabled
      if (!this.disabled) {
        this.expanded = expanded;
      }
    });
  }
  static #_ = this.ɵfac = function CdkAccordionItem_Factory(t) {
    return new (t || CdkAccordionItem)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CDK_ACCORDION, 12), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__.UniqueSelectionDispatcher));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: CdkAccordionItem,
    selectors: [["cdk-accordion-item"], ["", "cdkAccordionItem", ""]],
    inputs: {
      expanded: "expanded",
      disabled: "disabled"
    },
    outputs: {
      closed: "closed",
      opened: "opened",
      destroyed: "destroyed",
      expandedChange: "expandedChange"
    },
    exportAs: ["cdkAccordionItem"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
    // Provide `CDK_ACCORDION` as undefined to prevent nested accordion items from
    // registering to the same accordion.
    {
      provide: CDK_ACCORDION,
      useValue: undefined
    }])]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkAccordionItem, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'cdk-accordion-item, [cdkAccordionItem]',
      exportAs: 'cdkAccordionItem',
      providers: [
      // Provide `CDK_ACCORDION` as undefined to prevent nested accordion items from
      // registering to the same accordion.
      {
        provide: CDK_ACCORDION,
        useValue: undefined
      }]
    }]
  }], function () {
    return [{
      type: CdkAccordion,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [CDK_ACCORDION]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__.UniqueSelectionDispatcher
    }];
  }, {
    closed: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    opened: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    destroyed: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    expandedChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    expanded: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class CdkAccordionModule {
  static #_ = this.ɵfac = function CdkAccordionModule_Factory(t) {
    return new (t || CdkAccordionModule)();
  };
  static #_2 = this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: CdkAccordionModule
  });
  static #_3 = this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkAccordionModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      exports: [CdkAccordion, CdkAccordionItem],
      declarations: [CdkAccordion, CdkAccordionItem]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 8060:
/*!***************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/expansion.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EXPANSION_PANEL_ANIMATION_TIMING: () => (/* binding */ EXPANSION_PANEL_ANIMATION_TIMING),
/* harmony export */   MAT_ACCORDION: () => (/* binding */ MAT_ACCORDION),
/* harmony export */   MAT_EXPANSION_PANEL: () => (/* binding */ MAT_EXPANSION_PANEL),
/* harmony export */   MAT_EXPANSION_PANEL_DEFAULT_OPTIONS: () => (/* binding */ MAT_EXPANSION_PANEL_DEFAULT_OPTIONS),
/* harmony export */   MatAccordion: () => (/* binding */ MatAccordion),
/* harmony export */   MatExpansionModule: () => (/* binding */ MatExpansionModule),
/* harmony export */   MatExpansionPanel: () => (/* binding */ MatExpansionPanel),
/* harmony export */   MatExpansionPanelActionRow: () => (/* binding */ MatExpansionPanelActionRow),
/* harmony export */   MatExpansionPanelContent: () => (/* binding */ MatExpansionPanelContent),
/* harmony export */   MatExpansionPanelDescription: () => (/* binding */ MatExpansionPanelDescription),
/* harmony export */   MatExpansionPanelHeader: () => (/* binding */ MatExpansionPanelHeader),
/* harmony export */   MatExpansionPanelTitle: () => (/* binding */ MatExpansionPanelTitle),
/* harmony export */   matExpansionAnimations: () => (/* binding */ matExpansionAnimations)
/* harmony export */ });
/* harmony import */ var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/accordion */ 8355);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/portal */ 3517);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser/animations */ 1699);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 5309);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ 5998);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/a11y */ 3170);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 3317);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 5043);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 4520);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 1527);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/keycodes */ 554);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 1523);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 6290);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 7835);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ 2501);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/collections */ 636);


















/**
 * Token used to provide a `MatAccordion` to `MatExpansionPanel`.
 * Used primarily to avoid circular imports between `MatAccordion` and `MatExpansionPanel`.
 */
const _c0 = ["body"];
function MatExpansionPanel_ng_template_5_Template(rf, ctx) {}
const _c1 = [[["mat-expansion-panel-header"]], "*", [["mat-action-row"]]];
const _c2 = ["mat-expansion-panel-header", "*", "mat-action-row"];
function MatExpansionPanelHeader_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 2);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@indicatorRotate", ctx_r0._getExpandedState());
  }
}
const _c3 = [[["mat-panel-title"]], [["mat-panel-description"]], "*"];
const _c4 = ["mat-panel-title", "mat-panel-description", "*"];
const MAT_ACCORDION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_ACCORDION');

/** Time and timing curve for expansion panel animations. */
// Note: Keep this in sync with the Sass variable for the panel header animation.
const EXPANSION_PANEL_ANIMATION_TIMING = '225ms cubic-bezier(0.4,0.0,0.2,1)';
/**
 * Animations used by the Material expansion panel.
 *
 * A bug in angular animation's `state` when ViewContainers are moved using ViewContainerRef.move()
 * causes the animation state of moved components to become `void` upon exit, and not update again
 * upon reentry into the DOM.  This can lead a to situation for the expansion panel where the state
 * of the panel is `expanded` or `collapsed` but the animation state is `void`.
 *
 * To correctly handle animating to the next state, we animate between `void` and `collapsed` which
 * are defined to have the same styles. Since angular animates from the current styles to the
 * destination state's style definition, in situations where we are moving from `void`'s styles to
 * `collapsed` this acts a noop since no style values change.
 *
 * In the case where angular's animation state is out of sync with the expansion panel's state, the
 * expansion panel being `expanded` and angular animations being `void`, the animation from the
 * `expanded`'s effective styles (though in a `void` animation state) to the collapsed state will
 * occur as expected.
 *
 * Angular Bug: https://github.com/angular/angular/issues/18847
 *
 * @docs-private
 */
const matExpansionAnimations = {
  /** Animation that rotates the indicator arrow. */
  indicatorRotate: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.trigger)('indicatorRotate', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.state)('collapsed, void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
    transform: 'rotate(0deg)'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.state)('expanded', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
    transform: 'rotate(180deg)'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('expanded <=> collapsed, void => collapsed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animate)(EXPANSION_PANEL_ANIMATION_TIMING))]),
  /** Animation that expands and collapses the panel content. */
  bodyExpansion: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.trigger)('bodyExpansion', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.state)('collapsed, void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
    height: '0px',
    visibility: 'hidden'
  })),
  // Clear the `visibility` while open, otherwise the content will be visible when placed in
  // a parent that's `visibility: hidden`, because `visibility` doesn't apply to descendants
  // that have a `visibility` of their own (see #27436).
  (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.state)('expanded', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
    height: '*',
    visibility: ''
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('expanded <=> collapsed, void => collapsed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animate)(EXPANSION_PANEL_ANIMATION_TIMING))])
};

/**
 * Token used to provide a `MatExpansionPanel` to `MatExpansionPanelContent`.
 * Used to avoid circular imports between `MatExpansionPanel` and `MatExpansionPanelContent`.
 */
const MAT_EXPANSION_PANEL = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_EXPANSION_PANEL');

/**
 * Expansion panel content that will be rendered lazily
 * after the panel is opened for the first time.
 */
class MatExpansionPanelContent {
  constructor(_template, _expansionPanel) {
    this._template = _template;
    this._expansionPanel = _expansionPanel;
  }
  static #_ = this.ɵfac = function MatExpansionPanelContent_Factory(t) {
    return new (t || MatExpansionPanelContent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_EXPANSION_PANEL, 8));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatExpansionPanelContent,
    selectors: [["ng-template", "matExpansionPanelContent", ""]]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatExpansionPanelContent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'ng-template[matExpansionPanelContent]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MAT_EXPANSION_PANEL]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }];
  }, null);
})();

/** Counter for generating unique element ids. */
let uniqueId = 0;
/**
 * Injection token that can be used to configure the default
 * options for the expansion panel component.
 */
const MAT_EXPANSION_PANEL_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_EXPANSION_PANEL_DEFAULT_OPTIONS');
/**
 * This component can be used as a single element to show expandable content, or as one of
 * multiple children of an element with the MatAccordion directive attached.
 */
class MatExpansionPanel extends _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_2__.CdkAccordionItem {
  /** Whether the toggle indicator should be hidden. */
  get hideToggle() {
    return this._hideToggle || this.accordion && this.accordion.hideToggle;
  }
  set hideToggle(value) {
    this._hideToggle = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
  }
  /** The position of the expansion indicator. */
  get togglePosition() {
    return this._togglePosition || this.accordion && this.accordion.togglePosition;
  }
  set togglePosition(value) {
    this._togglePosition = value;
  }
  constructor(accordion, _changeDetectorRef, _uniqueSelectionDispatcher, _viewContainerRef, _document, _animationMode, defaultOptions) {
    super(accordion, _changeDetectorRef, _uniqueSelectionDispatcher);
    this._viewContainerRef = _viewContainerRef;
    this._animationMode = _animationMode;
    this._hideToggle = false;
    /** An event emitted after the body's expansion animation happens. */
    this.afterExpand = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** An event emitted after the body's collapse animation happens. */
    this.afterCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Stream that emits for changes in `@Input` properties. */
    this._inputChanges = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    /** ID for the associated header element. Used for a11y labelling. */
    this._headerId = `mat-expansion-panel-header-${uniqueId++}`;
    /** Stream of body animation done events. */
    this._bodyAnimationDone = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this.accordion = accordion;
    this._document = _document;
    // We need a Subject with distinctUntilChanged, because the `done` event
    // fires twice on some browsers. See https://github.com/angular/angular/issues/24084
    this._bodyAnimationDone.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.distinctUntilChanged)((x, y) => {
      return x.fromState === y.fromState && x.toState === y.toState;
    })).subscribe(event => {
      if (event.fromState !== 'void') {
        if (event.toState === 'expanded') {
          this.afterExpand.emit();
        } else if (event.toState === 'collapsed') {
          this.afterCollapse.emit();
        }
      }
    });
    if (defaultOptions) {
      this.hideToggle = defaultOptions.hideToggle;
    }
  }
  /** Determines whether the expansion panel should have spacing between it and its siblings. */
  _hasSpacing() {
    if (this.accordion) {
      return this.expanded && this.accordion.displayMode === 'default';
    }
    return false;
  }
  /** Gets the expanded state string. */
  _getExpandedState() {
    return this.expanded ? 'expanded' : 'collapsed';
  }
  /** Toggles the expanded state of the expansion panel. */
  toggle() {
    this.expanded = !this.expanded;
  }
  /** Sets the expanded state of the expansion panel to false. */
  close() {
    this.expanded = false;
  }
  /** Sets the expanded state of the expansion panel to true. */
  open() {
    this.expanded = true;
  }
  ngAfterContentInit() {
    if (this._lazyContent && this._lazyContent._expansionPanel === this) {
      // Render the content as soon as the panel becomes open.
      this.opened.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.startWith)(null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(() => this.expanded && !this._portal), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.take)(1)).subscribe(() => {
        this._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__.TemplatePortal(this._lazyContent._template, this._viewContainerRef);
      });
    }
  }
  ngOnChanges(changes) {
    this._inputChanges.next(changes);
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this._bodyAnimationDone.complete();
    this._inputChanges.complete();
  }
  /** Checks whether the expansion panel's content contains the currently-focused element. */
  _containsFocus() {
    if (this._body) {
      const focusedElement = this._document.activeElement;
      const bodyElement = this._body.nativeElement;
      return focusedElement === bodyElement || bodyElement.contains(focusedElement);
    }
    return false;
  }
  static #_ = this.ɵfac = function MatExpansionPanel_Factory(t) {
    return new (t || MatExpansionPanel)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_ACCORDION, 12), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_10__.UniqueSelectionDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_EXPANSION_PANEL_DEFAULT_OPTIONS, 8));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MatExpansionPanel,
    selectors: [["mat-expansion-panel"]],
    contentQueries: function MatExpansionPanel_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatExpansionPanelContent, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._lazyContent = _t.first);
      }
    },
    viewQuery: function MatExpansionPanel_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._body = _t.first);
      }
    },
    hostAttrs: [1, "mat-expansion-panel"],
    hostVars: 6,
    hostBindings: function MatExpansionPanel_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-expanded", ctx.expanded)("_mat-animation-noopable", ctx._animationMode === "NoopAnimations")("mat-expansion-panel-spacing", ctx._hasSpacing());
      }
    },
    inputs: {
      disabled: "disabled",
      expanded: "expanded",
      hideToggle: "hideToggle",
      togglePosition: "togglePosition"
    },
    outputs: {
      opened: "opened",
      closed: "closed",
      expandedChange: "expandedChange",
      afterExpand: "afterExpand",
      afterCollapse: "afterCollapse"
    },
    exportAs: ["matExpansionPanel"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
    // Provide MatAccordion as undefined to prevent nested expansion panels from registering
    // to the same accordion.
    {
      provide: MAT_ACCORDION,
      useValue: undefined
    }, {
      provide: MAT_EXPANSION_PANEL,
      useExisting: MatExpansionPanel
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
    ngContentSelectors: _c2,
    decls: 7,
    vars: 4,
    consts: [["role", "region", 1, "mat-expansion-panel-content", 3, "id"], ["body", ""], [1, "mat-expansion-panel-body"], [3, "cdkPortalOutlet"]],
    template: function MatExpansionPanel_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@bodyExpansion.done", function MatExpansionPanel_Template_div_animation_bodyExpansion_done_1_listener($event) {
          return ctx._bodyAnimationDone.next($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MatExpansionPanel_ng_template_5_Template, 0, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](6, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@bodyExpansion", ctx._getExpandedState())("id", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-labelledby", ctx._headerId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkPortalOutlet", ctx._portal);
      }
    },
    dependencies: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__.CdkPortalOutlet],
    styles: [".mat-expansion-panel{--mat-expansion-container-shape:4px;box-sizing:content-box;display:block;margin:0;overflow:hidden;transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);position:relative;background:var(--mat-expansion-container-background-color);color:var(--mat-expansion-container-text-color);border-radius:var(--mat-expansion-container-shape)}.mat-expansion-panel:not([class*=mat-elevation-z]){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:var(--mat-expansion-container-shape);border-top-left-radius:var(--mat-expansion-container-shape)}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:var(--mat-expansion-container-shape);border-bottom-left-radius:var(--mat-expansion-container-shape)}.cdk-high-contrast-active .mat-expansion-panel{outline:solid 1px}.mat-expansion-panel.ng-animate-disabled,.ng-animate-disabled .mat-expansion-panel,.mat-expansion-panel._mat-animation-noopable{transition:none}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible;font-family:var(--mat-expansion-container-text-font);font-size:var(--mat-expansion-container-text-size);font-weight:var(--mat-expansion-container-text-weight);line-height:var(--mat-expansion-container-text-line-height);letter-spacing:var(--mat-expansion-container-text-tracking)}.mat-expansion-panel-content[style*=\"visibility: hidden\"] *{visibility:hidden !important}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px;border-top-color:var(--mat-expansion-actions-divider-color)}.mat-action-row .mat-button-base,.mat-action-row .mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row .mat-button-base,[dir=rtl] .mat-action-row .mat-mdc-button-base{margin-left:0;margin-right:8px}"],
    encapsulation: 2,
    data: {
      animation: [matExpansionAnimations.bodyExpansion]
    },
    changeDetection: 0
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatExpansionPanel, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-expansion-panel',
      exportAs: 'matExpansionPanel',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      inputs: ['disabled', 'expanded'],
      outputs: ['opened', 'closed', 'expandedChange'],
      animations: [matExpansionAnimations.bodyExpansion],
      providers: [
      // Provide MatAccordion as undefined to prevent nested expansion panels from registering
      // to the same accordion.
      {
        provide: MAT_ACCORDION,
        useValue: undefined
      }, {
        provide: MAT_EXPANSION_PANEL,
        useExisting: MatExpansionPanel
      }],
      host: {
        'class': 'mat-expansion-panel',
        '[class.mat-expanded]': 'expanded',
        '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"',
        '[class.mat-expansion-panel-spacing]': '_hasSpacing()'
      },
      template: "<ng-content select=\"mat-expansion-panel-header\"></ng-content>\n<div class=\"mat-expansion-panel-content\"\n     role=\"region\"\n     [@bodyExpansion]=\"_getExpandedState()\"\n     (@bodyExpansion.done)=\"_bodyAnimationDone.next($event)\"\n     [attr.aria-labelledby]=\"_headerId\"\n     [id]=\"id\"\n     #body>\n  <div class=\"mat-expansion-panel-body\">\n    <ng-content></ng-content>\n    <ng-template [cdkPortalOutlet]=\"_portal\"></ng-template>\n  </div>\n  <ng-content select=\"mat-action-row\"></ng-content>\n</div>\n",
      styles: [".mat-expansion-panel{--mat-expansion-container-shape:4px;box-sizing:content-box;display:block;margin:0;overflow:hidden;transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);position:relative;background:var(--mat-expansion-container-background-color);color:var(--mat-expansion-container-text-color);border-radius:var(--mat-expansion-container-shape)}.mat-expansion-panel:not([class*=mat-elevation-z]){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:var(--mat-expansion-container-shape);border-top-left-radius:var(--mat-expansion-container-shape)}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:var(--mat-expansion-container-shape);border-bottom-left-radius:var(--mat-expansion-container-shape)}.cdk-high-contrast-active .mat-expansion-panel{outline:solid 1px}.mat-expansion-panel.ng-animate-disabled,.ng-animate-disabled .mat-expansion-panel,.mat-expansion-panel._mat-animation-noopable{transition:none}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible;font-family:var(--mat-expansion-container-text-font);font-size:var(--mat-expansion-container-text-size);font-weight:var(--mat-expansion-container-text-weight);line-height:var(--mat-expansion-container-text-line-height);letter-spacing:var(--mat-expansion-container-text-tracking)}.mat-expansion-panel-content[style*=\"visibility: hidden\"] *{visibility:hidden !important}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px;border-top-color:var(--mat-expansion-actions-divider-color)}.mat-action-row .mat-button-base,.mat-action-row .mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row .mat-button-base,[dir=rtl] .mat-action-row .mat-mdc-button-base{margin-left:0;margin-right:8px}"]
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MAT_ACCORDION]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_10__.UniqueSelectionDispatcher
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MAT_EXPANSION_PANEL_DEFAULT_OPTIONS]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }];
  }, {
    hideToggle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    togglePosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    afterExpand: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    afterCollapse: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    _lazyContent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [MatExpansionPanelContent]
    }],
    _body: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['body']
    }]
  });
})();
/**
 * Actions of a `<mat-expansion-panel>`.
 */
class MatExpansionPanelActionRow {
  static #_ = this.ɵfac = function MatExpansionPanelActionRow_Factory(t) {
    return new (t || MatExpansionPanelActionRow)();
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatExpansionPanelActionRow,
    selectors: [["mat-action-row"]],
    hostAttrs: [1, "mat-action-row"]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatExpansionPanelActionRow, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'mat-action-row',
      host: {
        class: 'mat-action-row'
      }
    }]
  }], null, null);
})();

// Boilerplate for applying mixins to MatExpansionPanelHeader.
/** @docs-private */
class MatExpansionPanelHeaderBase {}
const _MatExpansionPanelHeaderMixinBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_12__.mixinTabIndex)(MatExpansionPanelHeaderBase);
/**
 * Header element of a `<mat-expansion-panel>`.
 */
class MatExpansionPanelHeader extends _MatExpansionPanelHeaderMixinBase {
  constructor(panel, _element, _focusMonitor, _changeDetectorRef, defaultOptions, _animationMode, tabIndex) {
    super();
    this.panel = panel;
    this._element = _element;
    this._focusMonitor = _focusMonitor;
    this._changeDetectorRef = _changeDetectorRef;
    this._animationMode = _animationMode;
    this._parentChangeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_13__.Subscription.EMPTY;
    const accordionHideToggleChange = panel.accordion ? panel.accordion._stateChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(changes => !!(changes['hideToggle'] || changes['togglePosition']))) : rxjs__WEBPACK_IMPORTED_MODULE_14__.EMPTY;
    this.tabIndex = parseInt(tabIndex || '') || 0;
    // Since the toggle state depends on an @Input on the panel, we
    // need to subscribe and trigger change detection manually.
    this._parentChangeSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.merge)(panel.opened, panel.closed, accordionHideToggleChange, panel._inputChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(changes => {
      return !!(changes['hideToggle'] || changes['disabled'] || changes['togglePosition']);
    }))).subscribe(() => this._changeDetectorRef.markForCheck());
    // Avoids focus being lost if the panel contained the focused element and was closed.
    panel.closed.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(() => panel._containsFocus())).subscribe(() => _focusMonitor.focusVia(_element, 'program'));
    if (defaultOptions) {
      this.expandedHeight = defaultOptions.expandedHeight;
      this.collapsedHeight = defaultOptions.collapsedHeight;
    }
  }
  /**
   * Whether the associated panel is disabled. Implemented as a part of `FocusableOption`.
   * @docs-private
   */
  get disabled() {
    return this.panel.disabled;
  }
  /** Toggles the expanded state of the panel. */
  _toggle() {
    if (!this.disabled) {
      this.panel.toggle();
    }
  }
  /** Gets whether the panel is expanded. */
  _isExpanded() {
    return this.panel.expanded;
  }
  /** Gets the expanded state string of the panel. */
  _getExpandedState() {
    return this.panel._getExpandedState();
  }
  /** Gets the panel id. */
  _getPanelId() {
    return this.panel.id;
  }
  /** Gets the toggle position for the header. */
  _getTogglePosition() {
    return this.panel.togglePosition;
  }
  /** Gets whether the expand indicator should be shown. */
  _showToggle() {
    return !this.panel.hideToggle && !this.panel.disabled;
  }
  /**
   * Gets the current height of the header. Null if no custom height has been
   * specified, and if the default height from the stylesheet should be used.
   */
  _getHeaderHeight() {
    const isExpanded = this._isExpanded();
    if (isExpanded && this.expandedHeight) {
      return this.expandedHeight;
    } else if (!isExpanded && this.collapsedHeight) {
      return this.collapsedHeight;
    }
    return null;
  }
  /** Handle keydown event calling to toggle() if appropriate. */
  _keydown(event) {
    switch (event.keyCode) {
      // Toggle for space and enter keys.
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__.SPACE:
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__.ENTER:
        if (!(0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__.hasModifierKey)(event)) {
          event.preventDefault();
          this._toggle();
        }
        break;
      default:
        if (this.panel.accordion) {
          this.panel.accordion._handleHeaderKeydown(event);
        }
        return;
    }
  }
  /**
   * Focuses the panel header. Implemented as a part of `FocusableOption`.
   * @param origin Origin of the action that triggered the focus.
   * @docs-private
   */
  focus(origin, options) {
    if (origin) {
      this._focusMonitor.focusVia(this._element, origin, options);
    } else {
      this._element.nativeElement.focus(options);
    }
  }
  ngAfterViewInit() {
    this._focusMonitor.monitor(this._element).subscribe(origin => {
      if (origin && this.panel.accordion) {
        this.panel.accordion._handleHeaderFocus(this);
      }
    });
  }
  ngOnDestroy() {
    this._parentChangeSubscription.unsubscribe();
    this._focusMonitor.stopMonitoring(this._element);
  }
  static #_ = this.ɵfac = function MatExpansionPanelHeader_Factory(t) {
    return new (t || MatExpansionPanelHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatExpansionPanel, 1), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_17__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_EXPANSION_PANEL_DEFAULT_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('tabindex'));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MatExpansionPanelHeader,
    selectors: [["mat-expansion-panel-header"]],
    hostAttrs: ["role", "button", 1, "mat-expansion-panel-header", "mat-focus-indicator"],
    hostVars: 15,
    hostBindings: function MatExpansionPanelHeader_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatExpansionPanelHeader_click_HostBindingHandler() {
          return ctx._toggle();
        })("keydown", function MatExpansionPanelHeader_keydown_HostBindingHandler($event) {
          return ctx._keydown($event);
        });
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.panel._headerId)("tabindex", ctx.tabIndex)("aria-controls", ctx._getPanelId())("aria-expanded", ctx._isExpanded())("aria-disabled", ctx.panel.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx._getHeaderHeight());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-expanded", ctx._isExpanded())("mat-expansion-toggle-indicator-after", ctx._getTogglePosition() === "after")("mat-expansion-toggle-indicator-before", ctx._getTogglePosition() === "before")("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
      }
    },
    inputs: {
      tabIndex: "tabIndex",
      expandedHeight: "expandedHeight",
      collapsedHeight: "collapsedHeight"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
    ngContentSelectors: _c4,
    decls: 5,
    vars: 3,
    consts: [[1, "mat-content"], ["class", "mat-expansion-indicator", 4, "ngIf"], [1, "mat-expansion-indicator"]],
    template: function MatExpansionPanelHeader_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MatExpansionPanelHeader_span_4_Template, 1, 1, "span", 1);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-content-hide-toggle", !ctx._showToggle());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._showToggle());
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf],
    styles: [".mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1);height:var(--mat-expansion-header-collapsed-state-height);font-family:var(--mat-expansion-header-text-font);font-size:var(--mat-expansion-header-text-size);font-weight:var(--mat-expansion-header-text-weight);line-height:var(--mat-expansion-header-text-line-height);letter-spacing:var(--mat-expansion-header-text-tracking)}.mat-expansion-panel-header.mat-expanded{height:var(--mat-expansion-header-expanded-state-height)}.mat-expansion-panel-header[aria-disabled=true]{color:var(--mat-expansion-header-disabled-state-text-color)}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-header-hover-state-layer-color)}@media(hover: none){.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-container-background-color)}}.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused,.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused{background:var(--mat-expansion-header-focus-state-layer-color)}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-content.mat-content-hide-toggle{margin-right:8px}[dir=rtl] .mat-content.mat-content-hide-toggle{margin-right:0;margin-left:8px}.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-left:24px;margin-right:0}[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-right:24px;margin-left:0}.mat-expansion-panel-header-title{color:var(--mat-expansion-header-text-color)}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;flex-basis:0;margin-right:16px;align-items:center}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description{color:inherit}.mat-expansion-panel-header-description{flex-grow:2;color:var(--mat-expansion-header-description-color)}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:\"\";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle;color:var(--mat-expansion-header-indicator-color)}.cdk-high-contrast-active .mat-expansion-panel-content{border-top:1px solid;border-top-left-radius:0;border-top-right-radius:0}"],
    encapsulation: 2,
    data: {
      animation: [matExpansionAnimations.indicatorRotate]
    },
    changeDetection: 0
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatExpansionPanelHeader, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-expansion-panel-header',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      inputs: ['tabIndex'],
      animations: [matExpansionAnimations.indicatorRotate],
      host: {
        'class': 'mat-expansion-panel-header mat-focus-indicator',
        'role': 'button',
        '[attr.id]': 'panel._headerId',
        '[attr.tabindex]': 'tabIndex',
        '[attr.aria-controls]': '_getPanelId()',
        '[attr.aria-expanded]': '_isExpanded()',
        '[attr.aria-disabled]': 'panel.disabled',
        '[class.mat-expanded]': '_isExpanded()',
        '[class.mat-expansion-toggle-indicator-after]': `_getTogglePosition() === 'after'`,
        '[class.mat-expansion-toggle-indicator-before]': `_getTogglePosition() === 'before'`,
        '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"',
        '[style.height]': '_getHeaderHeight()',
        '(click)': '_toggle()',
        '(keydown)': '_keydown($event)'
      },
      template: "<span class=\"mat-content\" [class.mat-content-hide-toggle]=\"!_showToggle()\">\n  <ng-content select=\"mat-panel-title\"></ng-content>\n  <ng-content select=\"mat-panel-description\"></ng-content>\n  <ng-content></ng-content>\n</span>\n<span [@indicatorRotate]=\"_getExpandedState()\" *ngIf=\"_showToggle()\"\n      class=\"mat-expansion-indicator\"></span>\n",
      styles: [".mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1);height:var(--mat-expansion-header-collapsed-state-height);font-family:var(--mat-expansion-header-text-font);font-size:var(--mat-expansion-header-text-size);font-weight:var(--mat-expansion-header-text-weight);line-height:var(--mat-expansion-header-text-line-height);letter-spacing:var(--mat-expansion-header-text-tracking)}.mat-expansion-panel-header.mat-expanded{height:var(--mat-expansion-header-expanded-state-height)}.mat-expansion-panel-header[aria-disabled=true]{color:var(--mat-expansion-header-disabled-state-text-color)}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-header-hover-state-layer-color)}@media(hover: none){.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-container-background-color)}}.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused,.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused{background:var(--mat-expansion-header-focus-state-layer-color)}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-content.mat-content-hide-toggle{margin-right:8px}[dir=rtl] .mat-content.mat-content-hide-toggle{margin-right:0;margin-left:8px}.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-left:24px;margin-right:0}[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-right:24px;margin-left:0}.mat-expansion-panel-header-title{color:var(--mat-expansion-header-text-color)}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;flex-basis:0;margin-right:16px;align-items:center}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description{color:inherit}.mat-expansion-panel-header-description{flex-grow:2;color:var(--mat-expansion-header-description-color)}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:\"\";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle;color:var(--mat-expansion-header-indicator-color)}.cdk-high-contrast-active .mat-expansion-panel-content{border-top:1px solid;border-top-left-radius:0;border-top-right-radius:0}"]
    }]
  }], function () {
    return [{
      type: MatExpansionPanel,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_17__.FocusMonitor
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MAT_EXPANSION_PANEL_DEFAULT_OPTIONS]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
        args: ['tabindex']
      }]
    }];
  }, {
    expandedHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    collapsedHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/**
 * Description element of a `<mat-expansion-panel-header>`.
 */
class MatExpansionPanelDescription {
  static #_ = this.ɵfac = function MatExpansionPanelDescription_Factory(t) {
    return new (t || MatExpansionPanelDescription)();
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatExpansionPanelDescription,
    selectors: [["mat-panel-description"]],
    hostAttrs: [1, "mat-expansion-panel-header-description"]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatExpansionPanelDescription, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'mat-panel-description',
      host: {
        class: 'mat-expansion-panel-header-description'
      }
    }]
  }], null, null);
})();
/**
 * Title element of a `<mat-expansion-panel-header>`.
 */
class MatExpansionPanelTitle {
  static #_ = this.ɵfac = function MatExpansionPanelTitle_Factory(t) {
    return new (t || MatExpansionPanelTitle)();
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatExpansionPanelTitle,
    selectors: [["mat-panel-title"]],
    hostAttrs: [1, "mat-expansion-panel-header-title"]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatExpansionPanelTitle, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'mat-panel-title',
      host: {
        class: 'mat-expansion-panel-header-title'
      }
    }]
  }], null, null);
})();

/**
 * Directive for a Material Design Accordion.
 */
class MatAccordion extends _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_2__.CdkAccordion {
  constructor() {
    super(...arguments);
    /** Headers belonging to this accordion. */
    this._ownHeaders = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.QueryList();
    this._hideToggle = false;
    /**
     * Display mode used for all expansion panels in the accordion. Currently two display
     * modes exist:
     *  default - a gutter-like spacing is placed around any expanded panel, placing the expanded
     *     panel at a different elevation from the rest of the accordion.
     *  flat - no spacing is placed around expanded panels, showing all panels at the same
     *     elevation.
     */
    this.displayMode = 'default';
    /** The position of the expansion indicator. */
    this.togglePosition = 'after';
  }
  /** Whether the expansion indicator should be hidden. */
  get hideToggle() {
    return this._hideToggle;
  }
  set hideToggle(show) {
    this._hideToggle = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(show);
  }
  ngAfterContentInit() {
    this._headers.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.startWith)(this._headers)).subscribe(headers => {
      this._ownHeaders.reset(headers.filter(header => header.panel.accordion === this));
      this._ownHeaders.notifyOnChanges();
    });
    this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_17__.FocusKeyManager(this._ownHeaders).withWrap().withHomeAndEnd();
  }
  /** Handles keyboard events coming in from the panel headers. */
  _handleHeaderKeydown(event) {
    this._keyManager.onKeydown(event);
  }
  _handleHeaderFocus(header) {
    this._keyManager.updateActiveItem(header);
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this._keyManager?.destroy();
    this._ownHeaders.destroy();
  }
  static #_ = this.ɵfac = /* @__PURE__ */function () {
    let ɵMatAccordion_BaseFactory;
    return function MatAccordion_Factory(t) {
      return (ɵMatAccordion_BaseFactory || (ɵMatAccordion_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatAccordion)))(t || MatAccordion);
    };
  }();
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatAccordion,
    selectors: [["mat-accordion"]],
    contentQueries: function MatAccordion_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatExpansionPanelHeader, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._headers = _t);
      }
    },
    hostAttrs: [1, "mat-accordion"],
    hostVars: 2,
    hostBindings: function MatAccordion_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-accordion-multi", ctx.multi);
      }
    },
    inputs: {
      multi: "multi",
      hideToggle: "hideToggle",
      displayMode: "displayMode",
      togglePosition: "togglePosition"
    },
    exportAs: ["matAccordion"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
      provide: MAT_ACCORDION,
      useExisting: MatAccordion
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatAccordion, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'mat-accordion',
      exportAs: 'matAccordion',
      inputs: ['multi'],
      providers: [{
        provide: MAT_ACCORDION,
        useExisting: MatAccordion
      }],
      host: {
        class: 'mat-accordion',
        // Class binding which is only used by the test harness as there is no other
        // way for the harness to detect if multiple panel support is enabled.
        '[class.mat-accordion-multi]': 'this.multi'
      }
    }]
  }], null, {
    _headers: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [MatExpansionPanelHeader, {
        descendants: true
      }]
    }],
    hideToggle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    displayMode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    togglePosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class MatExpansionModule {
  static #_ = this.ɵfac = function MatExpansionModule_Factory(t) {
    return new (t || MatExpansionModule)();
  };
  static #_2 = this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: MatExpansionModule
  });
  static #_3 = this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatCommonModule, _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_2__.CdkAccordionModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__.PortalModule]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatExpansionModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatCommonModule, _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_2__.CdkAccordionModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__.PortalModule],
      exports: [MatAccordion, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatExpansionPanelContent],
      declarations: [MatAccordion, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatExpansionPanelContent]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=src_app_features_support_support_module_ts.js.map