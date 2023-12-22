"use strict";
(self["webpackChunkskudu_match"] = self["webpackChunkskudu_match"] || []).push([["main"],{

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_fire_compat_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/compat/auth-guard */ 8110);
/* harmony import */ var _features_landing_landing_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./features/landing/landing.component */ 2975);
/* harmony import */ var _features_transactional_risks_transactional_risks_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./features/transactional-risks/transactional-risks.component */ 6496);
/* harmony import */ var _features_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./features/subscribe/subscribe.component */ 2703);
/* harmony import */ var _features_shared_components_success_page_success_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./features/shared/components/success-page/success-page.component */ 4231);
/* harmony import */ var _core_helpers_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/helpers/constants */ 9487);
/* harmony import */ var _features_shared_components_document_viewer_document_viewer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./features/shared/components/document-viewer/document-viewer.component */ 1939);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);










const redirectLoggedInToHome = () => (0,_angular_fire_compat_auth_guard__WEBPACK_IMPORTED_MODULE_6__.redirectLoggedInTo)([_core_helpers_constants__WEBPACK_IMPORTED_MODULE_4__.HOME_ROUTE]);
const redirectUnauthorizedToLogin = () => (0,_angular_fire_compat_auth_guard__WEBPACK_IMPORTED_MODULE_6__.redirectUnauthorizedTo)([_core_helpers_constants__WEBPACK_IMPORTED_MODULE_4__.SIGNIN_ROUTE]);
const routes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
}, {
  path: 'landing',
  component: _features_landing_landing_component__WEBPACK_IMPORTED_MODULE_0__.LandingComponent
}, {
  path: 'onboarding',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_onboarding_onboarding_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./features/onboarding/onboarding.module */ 9932)).then(m => m.OnboardingModule)
}, {
  path: 'scouts',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_features_shared_angular-material_module_ts"), __webpack_require__.e("default-node_modules_angular_google-maps_fesm2022_google-maps_mjs"), __webpack_require__.e("default-src_app_features_shared_components_crop-categories_crop-categories_component_ts"), __webpack_require__.e("src_app_features_scouts_scouts_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/scouts/scouts.module */ 6310)).then(m => m.ScoutsModule)
}, {
  path: 'authentication',
  canActivate: [_angular_fire_compat_auth_guard__WEBPACK_IMPORTED_MODULE_6__.AngularFireAuthGuard],
  data: {
    authGuardPipe: redirectLoggedInToHome
  },
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_features_shared_angular-material_module_ts"), __webpack_require__.e("src_app_features_authentication_authentication_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/authentication/authentication.module */ 7282)).then(m => m.AuthenticationModule)
}, {
  path: 'transactional-risk',
  component: _features_transactional_risks_transactional_risks_component__WEBPACK_IMPORTED_MODULE_1__.TransactionalRisksComponent
}, {
  path: 'subscribe',
  component: _features_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_2__.SubscribeComponent
}, {
  path: 'document/:name',
  component: _features_shared_components_document_viewer_document_viewer_component__WEBPACK_IMPORTED_MODULE_5__.DocumentViewerComponent
}, {
  path: 'home',
  canActivate: [_angular_fire_compat_auth_guard__WEBPACK_IMPORTED_MODULE_6__.AngularFireAuthGuard],
  data: {
    authGuardPipe: redirectUnauthorizedToLogin
  },
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_features_shared_angular-material_module_ts"), __webpack_require__.e("default-src_app_features_dashboard_components_agents_components_update-info-modal_update-info-731852"), __webpack_require__.e("default-src_app_features_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/home/home.module */ 425)).then(m => m.HomeModule)
}, {
  path: 'support',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_google-maps_fesm2022_google-maps_mjs"), __webpack_require__.e("src_app_features_support_support_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/support/support.module */ 3673)).then(m => m.SupportModule)
}, {
  path: 'dashboard',
  canActivate: [_angular_fire_compat_auth_guard__WEBPACK_IMPORTED_MODULE_6__.AngularFireAuthGuard],
  data: {
    authGuardPipe: redirectUnauthorizedToLogin
  },
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_features_shared_angular-material_module_ts"), __webpack_require__.e("default-node_modules_angular_google-maps_fesm2022_google-maps_mjs"), __webpack_require__.e("default-src_app_core_ngrx_entities_lot_lot_effects_ts-src_app_core_ngrx_entities_match_match_-646100"), __webpack_require__.e("default-src_app_features_dashboard_components_agents_components_update-info-modal_update-info-731852"), __webpack_require__.e("default-src_app_features_broker-dashboard_components_confirmation-modal_confirmation-modal_co-3568eb"), __webpack_require__.e("default-src_app_features_shared_components_delivery-point-modal_delivery-point-modal_component_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_features_dashboard_dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/dashboard/dashboard.module */ 447)).then(m => m.DashboardModule)
}, {
  path: 'clearing',
  canActivate: [_angular_fire_compat_auth_guard__WEBPACK_IMPORTED_MODULE_6__.AngularFireAuthGuard],
  data: {
    authGuardPipe: redirectUnauthorizedToLogin
  },
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_features_shared_angular-material_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_features_clearing_clearing_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/clearing/clearing.module */ 9660)).then(m => m.ClearingModule)
}, {
  path: 'lots',
  canActivate: [_angular_fire_compat_auth_guard__WEBPACK_IMPORTED_MODULE_6__.AngularFireAuthGuard],
  data: {
    authGuardPipe: redirectUnauthorizedToLogin
  },
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_features_shared_angular-material_module_ts"), __webpack_require__.e("default-node_modules_angular_google-maps_fesm2022_google-maps_mjs"), __webpack_require__.e("default-src_app_core_ngrx_entities_lot_lot_effects_ts-src_app_core_ngrx_entities_match_match_-646100"), __webpack_require__.e("default-src_app_features_shared_components_lot-match-table_lot-match-table_component_ts"), __webpack_require__.e("default-src_app_features_shared_components_delivery-point-modal_delivery-point-modal_component_ts"), __webpack_require__.e("default-src_app_features_shared_components_crop-categories_crop-categories_component_ts"), __webpack_require__.e("src_app_features_lots_lots_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/lots/lots.module */ 6555)).then(m => m.LotsModule)
}, {
  path: 'success',
  canActivate: [_angular_fire_compat_auth_guard__WEBPACK_IMPORTED_MODULE_6__.AngularFireAuthGuard],
  data: {
    authGuardPipe: redirectUnauthorizedToLogin
  },
  component: _features_shared_components_success_page_success_page_component__WEBPACK_IMPORTED_MODULE_3__.SuccessPageComponent
}, {
  path: 'success/:id',
  canActivate: [_angular_fire_compat_auth_guard__WEBPACK_IMPORTED_MODULE_6__.AngularFireAuthGuard],
  data: {
    authGuardPipe: redirectUnauthorizedToLogin
  },
  component: _features_shared_components_success_page_success_page_component__WEBPACK_IMPORTED_MODULE_3__.SuccessPageComponent
}, {
  path: 'negotiations',
  canActivate: [_angular_fire_compat_auth_guard__WEBPACK_IMPORTED_MODULE_6__.AngularFireAuthGuard],
  data: {
    authGuardPipe: redirectUnauthorizedToLogin
  },
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_features_shared_angular-material_module_ts"), __webpack_require__.e("default-node_modules_angular_google-maps_fesm2022_google-maps_mjs"), __webpack_require__.e("default-src_app_core_ngrx_entities_lot_lot_effects_ts-src_app_core_ngrx_entities_match_match_-646100"), __webpack_require__.e("default-src_app_features_shared_components_lot-match-table_lot-match-table_component_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_features_negotiations_negotiations_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/negotiations/negotiations.module */ 27)).then(m => m.NegotiationsModule)
}, {
  path: 'broker-dashboard',
  canActivate: [_angular_fire_compat_auth_guard__WEBPACK_IMPORTED_MODULE_6__.AngularFireAuthGuard],
  data: {
    authGuardPipe: redirectUnauthorizedToLogin
  },
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_features_shared_angular-material_module_ts"), __webpack_require__.e("default-src_app_features_dashboard_components_agents_components_update-info-modal_update-info-731852"), __webpack_require__.e("default-src_app_features_broker-dashboard_components_confirmation-modal_confirmation-modal_co-3568eb"), __webpack_require__.e("default-src_app_features_home_home_module_ts"), __webpack_require__.e("src_app_features_broker-dashboard_broker-dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/broker-dashboard/broker-dashboard.module */ 6602)).then(m => m.BrokerDashboardModule)
}, {
  path: '**',
  redirectTo: 'home'
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forRoot(routes, {}), _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 4520);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 1527);
/* harmony import */ var _core_ngrx_reducers_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/ngrx/reducers/index */ 7032);
/* harmony import */ var _features_shared_components_refresh_modal_refresh_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./features/shared/components/refresh-modal/refresh-modal.component */ 1370);
/* harmony import */ var _awesome_cordova_plugins_purchases_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/purchases/ngx */ 8087);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/core */ 8626);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/legacy-dialog */ 1035);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/service-worker */ 1509);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _features_shared_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./features/shared/components/loading-spinner/loading-spinner.component */ 2220);
/* harmony import */ var _features_notification_notification_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./features/notification/notification.component */ 6649);

















function AppComponent_div_0_app_loading_spinner_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-loading-spinner");
  }
}
function AppComponent_div_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AppComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AppComponent_div_0_app_loading_spinner_1_Template, 1, 0, "app-loading-spinner", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "app-notification");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, AppComponent_div_0_div_3_Template, 2, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const appData_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", appData_r1.isLoading || appData_r1.persist);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !appData_r1.isLoading && !appData_r1.persist);
  }
}
class AppComponent {
  constructor(store, dialog, serviceWorkerUpdate, purchases) {
    this.store = store;
    this.dialog = dialog;
    this.serviceWorkerUpdate = serviceWorkerUpdate;
    this.purchases = purchases;
    this.title = 'skudu_match';
    this.appState$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.select)(_core_ngrx_reducers_index__WEBPACK_IMPORTED_MODULE_0__.getAppState));
    this.isWeb = false;
  }
  ngOnInit() {
    if (this.serviceWorkerUpdate.isEnabled) {
      this.serviceWorkerUpdate.versionUpdates.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(evt => evt.type === 'VERSION_READY')).subscribe(() => {
        const dialogRef = this.dialog.open(_features_shared_components_refresh_modal_refresh_modal_component__WEBPACK_IMPORTED_MODULE_1__.RefreshModalComponent, {
          panelClass: 'g-modal-fullwidth-transparent-container'
        });
        dialogRef.afterClosed().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.take)(1)).subscribe(() => {
          window.location.reload();
        });
      });
    }
    this.isWeb = _capacitor_core__WEBPACK_IMPORTED_MODULE_3__.Capacitor.getPlatform() == 'web';
    this.onDeviceReady();
  }
  onDeviceReady() {
    if (!this.isWeb) {
      this.purchases.setDebugLogsEnabled(true);
      if (_capacitor_core__WEBPACK_IMPORTED_MODULE_3__.Capacitor.getPlatform() == 'ios') {
        this.purchases.setFirebaseAppInstanceID('appl_SNiWZGuiodCXToFPLjYJkggISVd');
        //this.purchases.setup('appl_SNiWZGuiodCXToFPLjYJkggISVd');
      } else if (_capacitor_core__WEBPACK_IMPORTED_MODULE_3__.Capacitor.getPlatform() == 'android') {
        this.purchases.setFirebaseAppInstanceID('goog_hiDXDTNYQQJNeqcKMMoMcpkJOUy');
        //  this.purchases.setup('goog_hiDXDTNYQQJNeqcKMMoMcpkJOUy');
      }
    }
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_10__.MatLegacyDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_service_worker__WEBPACK_IMPORTED_MODULE_11__.SwUpdate), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_awesome_cordova_plugins_purchases_ngx__WEBPACK_IMPORTED_MODULE_2__.Purchases));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 2,
    vars: 3,
    consts: [["class", "w-100 h-100 bg-white", 4, "ngIf"], [1, "w-100", "h-100", "bg-white"], [4, "ngIf"], ["class", "w-100 h-100", 4, "ngIf"], [1, "w-100", "h-100"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, AppComponent_div_0_Template, 4, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "async");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 1, ctx.appState$));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterOutlet, _features_shared_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_4__.LoadingSpinnerComponent, _features_notification_notification_component__WEBPACK_IMPORTED_MODULE_5__.NotificationComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.AsyncPipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule),
/* harmony export */   playerFactory: () => (/* binding */ playerFactory)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _core_ngrx_ngrx_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/ngrx/ngrx.module */ 2723);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/platform-browser/animations */ 4987);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _features_shared_firebase_module_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./features/shared/firebase.module.ts */ 3728);
/* harmony import */ var _features_shared_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./features/shared/components/loading-spinner/loading-spinner.component */ 2220);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/legacy-dialog */ 1035);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/legacy-button */ 8654);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/core */ 5309);
/* harmony import */ var _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/legacy-select */ 2198);
/* harmony import */ var _angular_material_legacy_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/legacy-progress-spinner */ 3401);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/service-worker */ 1509);
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ngx-lottie */ 9809);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _features_shared_components_additional_info_modal_additional_info_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./features/shared/components/additional-info-modal/additional-info-modal.component */ 6861);
/* harmony import */ var _features_shared_components_refresh_modal_refresh_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./features/shared/components/refresh-modal/refresh-modal.component */ 1370);
/* harmony import */ var _features_shared_components_success_page_success_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./features/shared/components/success-page/success-page.component */ 4231);
/* harmony import */ var _features_landing_landing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./features/landing/landing.component */ 2975);
/* harmony import */ var _features_transactional_risks_transactional_risks_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./features/transactional-risks/transactional-risks.component */ 6496);
/* harmony import */ var _features_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./features/subscribe/subscribe.component */ 2703);
/* harmony import */ var _features_notification_notification_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./features/notification/notification.component */ 6649);
/* harmony import */ var _awesome_cordova_plugins_in_app_purchase_2_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @awesome-cordova-plugins/in-app-purchase-2/ngx */ 771);
/* harmony import */ var _features_shared_components_category_info_modal_category_info_modal_category_info_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./features/shared/components/category-info-modal/category-info-modal/category-info-modal.component */ 1374);
/* harmony import */ var _angular_fire_compat_auth_guard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/fire/compat/auth-guard */ 8110);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/environments/environment.prod */ 7337);
/* harmony import */ var _features_shared_components_payment_check_modal_payment_check_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./features/shared/components/payment-check-modal/payment-check-modal.component */ 9839);
/* harmony import */ var _features_shared_components_grain_sa_modal_grain_sa_modal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./features/shared/components/grain-sa-modal/grain-sa-modal.component */ 7068);
/* harmony import */ var _features_shared_components_document_viewer_document_viewer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./features/shared/components/document-viewer/document-viewer.component */ 1939);
/* harmony import */ var ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ngx-extended-pdf-viewer */ 393);
/* harmony import */ var _googlemaps_js_api_loader__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @googlemaps/js-api-loader */ 8914);
/* harmony import */ var _angular_magic_ngx_gp_autocomplete__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular-magic/ngx-gp-autocomplete */ 4711);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 1699);
// #region Module Imports







//import { GooglePlaceModule } from 'ngx-google-places-autocomplete';








// #endregion
// #region Component Imports










// #endregion
// #region Other Imports






// #endregion





// #region Lottie Player
function playerFactory() {
  return __webpack_require__.e(/*! import() */ "node_modules_lottie-web_build_player_lottie_js").then(__webpack_require__.t.bind(__webpack_require__, /*! lottie-web */ 2466, 23));
}
// #endregion
class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineInjector"]({
    providers: [_angular_fire_compat_auth_guard__WEBPACK_IMPORTED_MODULE_20__.AngularFireAuthGuard, {
      provide: _googlemaps_js_api_loader__WEBPACK_IMPORTED_MODULE_18__.Loader,
      useValue: new _googlemaps_js_api_loader__WEBPACK_IMPORTED_MODULE_18__.Loader({
        apiKey: 'AIzaSyAFaylOBsuhYPYw9YqWmhN370xTvc6DXYU',
        libraries: ['places']
      })
    }, _awesome_cordova_plugins_in_app_purchase_2_ngx__WEBPACK_IMPORTED_MODULE_12__.InAppPurchase2],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.CommonModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__.BrowserAnimationsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _features_shared_firebase_module_ts__WEBPACK_IMPORTED_MODULE_2__.FirebaseModule, _core_ngrx_ngrx_module__WEBPACK_IMPORTED_MODULE_0__.NGRXModule, _features_shared_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_3__.LoadingSpinnerModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_23__.HttpClientModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_23__.HttpClientJsonpModule,
    //GooglePlaceModule,
    _angular_magic_ngx_gp_autocomplete__WEBPACK_IMPORTED_MODULE_24__.NgxGpAutocompleteModule, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.FormsModule, _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_26__.MatLegacyDialogModule, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_27__.MatLegacyButtonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_28__.MatRippleModule, _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_29__.MatLegacySelectModule, _angular_material_legacy_progress_spinner__WEBPACK_IMPORTED_MODULE_30__.MatLegacyProgressSpinnerModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_31__.ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_14__.environment.production
    }), ngx_lottie__WEBPACK_IMPORTED_MODULE_32__.LottieModule.forRoot({
      player: playerFactory
    }), ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_33__.NgxExtendedPdfViewerModule,
    //GooglePlaceModule
    _angular_magic_ngx_gp_autocomplete__WEBPACK_IMPORTED_MODULE_24__.NgxGpAutocompleteModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent, _features_landing_landing_component__WEBPACK_IMPORTED_MODULE_8__.LandingComponent, _features_transactional_risks_transactional_risks_component__WEBPACK_IMPORTED_MODULE_9__.TransactionalRisksComponent, _features_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_10__.SubscribeComponent, _features_shared_components_additional_info_modal_additional_info_modal_component__WEBPACK_IMPORTED_MODULE_5__.AdditionalInfoModalComponent, _features_shared_components_refresh_modal_refresh_modal_component__WEBPACK_IMPORTED_MODULE_6__.RefreshModalComponent, _features_shared_components_success_page_success_page_component__WEBPACK_IMPORTED_MODULE_7__.SuccessPageComponent, _features_notification_notification_component__WEBPACK_IMPORTED_MODULE_11__.NotificationComponent, _features_shared_components_category_info_modal_category_info_modal_category_info_modal_component__WEBPACK_IMPORTED_MODULE_13__.CategoryInfoModalComponent, _features_shared_components_payment_check_modal_payment_check_modal_component__WEBPACK_IMPORTED_MODULE_15__.PaymentCheckModalComponent, _features_shared_components_grain_sa_modal_grain_sa_modal_component__WEBPACK_IMPORTED_MODULE_16__.GrainSaModalComponent, _features_shared_components_document_viewer_document_viewer_component__WEBPACK_IMPORTED_MODULE_17__.DocumentViewerComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.CommonModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__.BrowserAnimationsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _features_shared_firebase_module_ts__WEBPACK_IMPORTED_MODULE_2__.FirebaseModule, _core_ngrx_ngrx_module__WEBPACK_IMPORTED_MODULE_0__.NGRXModule, _features_shared_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_3__.LoadingSpinnerModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_23__.HttpClientModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_23__.HttpClientJsonpModule,
    //GooglePlaceModule,
    _angular_magic_ngx_gp_autocomplete__WEBPACK_IMPORTED_MODULE_24__.NgxGpAutocompleteModule, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.FormsModule, _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_26__.MatLegacyDialogModule, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_27__.MatLegacyButtonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_28__.MatRippleModule, _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_29__.MatLegacySelectModule, _angular_material_legacy_progress_spinner__WEBPACK_IMPORTED_MODULE_30__.MatLegacyProgressSpinnerModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_31__.ServiceWorkerModule, ngx_lottie__WEBPACK_IMPORTED_MODULE_32__.LottieModule, ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_33__.NgxExtendedPdfViewerModule],
    exports: [
    //GooglePlaceModule
    _angular_magic_ngx_gp_autocomplete__WEBPACK_IMPORTED_MODULE_24__.NgxGpAutocompleteModule]
  });
})();

/***/ }),

/***/ 8215:
/*!*******************************************************!*\
  !*** ./src/app/core/helpers/brokerHelperFunctions.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkIfClientHasBroker: () => (/* binding */ checkIfClientHasBroker),
/* harmony export */   filterOutNegotiationDocument: () => (/* binding */ filterOutNegotiationDocument),
/* harmony export */   getAllLotMatchIdsFromNegotiationCards: () => (/* binding */ getAllLotMatchIdsFromNegotiationCards),
/* harmony export */   newClientsListWithoutDuplicates: () => (/* binding */ newClientsListWithoutDuplicates)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 7178);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Broker Feature Helper Functions
 * */
// #region Negotiation Documents
function filterOutNegotiationDocument(lotMatchId, brokerNegotiationDocuments) {
  if (!brokerNegotiationDocuments.length) {
    return null;
  }
  let brokerDocument;
  brokerDocument = brokerNegotiationDocuments.filter(document => document.lotMatchId === lotMatchId);
  return brokerDocument[0];
}
function getAllLotMatchIdsFromNegotiationCards(negotiationCards) {
  const lotMatchIds = [];
  if (!negotiationCards.length) {
    return lotMatchIds;
  }
  negotiationCards.map(card => {
    card.activeNegotiations.map(activeNegotiation => {
      lotMatchIds.push(activeNegotiation.lotMatchId);
    });
  });
  return lotMatchIds;
}
function newClientsListWithoutDuplicates(stateClients, actionClients) {
  if (!stateClients.length && !actionClients.length) {
    return [];
  } else if (!actionClients.length) {
    return stateClients;
  }
  const newStateClients = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(stateClients);
  const newActionClients = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(actionClients);
  for (let i = actionClients.length - 1; i >= 0; i--) {
    const actionClient = actionClients[i];
    const existingIndex = newStateClients.findIndex(client => client.uid === actionClient.uid);
    if (existingIndex !== -1) {
      newStateClients[existingIndex] = actionClient;
      newActionClients.splice(i, 1);
    }
  }
  return newStateClients.concat(newActionClients);
}
function checkIfClientHasBroker(clientId, brokerRequests) {
  if (!brokerRequests.length) {
    return false;
  }
  return brokerRequests.filter(brokerRequest => brokerRequest.clientUid === clientId && brokerRequest.acceptedRequest).length > 0;
}
// #endregion

/***/ }),

/***/ 9487:
/*!*******************************************!*\
  !*** ./src/app/core/helpers/constants.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BROKERS_ROUTE: () => (/* binding */ BROKERS_ROUTE),
/* harmony export */   BROKER_DASHBOARD_ROUTE: () => (/* binding */ BROKER_DASHBOARD_ROUTE),
/* harmony export */   BROWSE_THE_MARKET_ROUTE: () => (/* binding */ BROWSE_THE_MARKET_ROUTE),
/* harmony export */   BUYER_VERIFICATION_ID: () => (/* binding */ BUYER_VERIFICATION_ID),
/* harmony export */   CLEARING: () => (/* binding */ CLEARING),
/* harmony export */   CONTACT_PAGE_ROUTE: () => (/* binding */ CONTACT_PAGE_ROUTE),
/* harmony export */   DEFAULT_VERIFICATION: () => (/* binding */ DEFAULT_VERIFICATION),
/* harmony export */   DELIVERY_POINT_ROUTE: () => (/* binding */ DELIVERY_POINT_ROUTE),
/* harmony export */   DETAILED_TUTORIAL_ROUTE: () => (/* binding */ DETAILED_TUTORIAL_ROUTE),
/* harmony export */   DOCUMENT_VIEWER_ROUTE: () => (/* binding */ DOCUMENT_VIEWER_ROUTE),
/* harmony export */   FAQ_ROUTE: () => (/* binding */ FAQ_ROUTE),
/* harmony export */   FARMER_ON_FARM_STORAGE_VERIFICATION_ID: () => (/* binding */ FARMER_ON_FARM_STORAGE_VERIFICATION_ID),
/* harmony export */   FARMER_VERIFICATION_ID: () => (/* binding */ FARMER_VERIFICATION_ID),
/* harmony export */   FORGOT_PASSWORD_ROUTE: () => (/* binding */ FORGOT_PASSWORD_ROUTE),
/* harmony export */   GRAINSA_VERIFICATION_ID: () => (/* binding */ GRAINSA_VERIFICATION_ID),
/* harmony export */   GRAINSA_VERIFICATION_TEXT: () => (/* binding */ GRAINSA_VERIFICATION_TEXT),
/* harmony export */   HOME_CARDS_DATA: () => (/* binding */ HOME_CARDS_DATA),
/* harmony export */   HOME_ROUTE: () => (/* binding */ HOME_ROUTE),
/* harmony export */   HOURS_IN_A_DAY: () => (/* binding */ HOURS_IN_A_DAY),
/* harmony export */   KYC_PARTY_ROUTE: () => (/* binding */ KYC_PARTY_ROUTE),
/* harmony export */   LANDING_ROUTE: () => (/* binding */ LANDING_ROUTE),
/* harmony export */   LOTS_CREATE_ROUTE: () => (/* binding */ LOTS_CREATE_ROUTE),
/* harmony export */   LOTS_CROP_CATEGORIES_ROUTE: () => (/* binding */ LOTS_CROP_CATEGORIES_ROUTE),
/* harmony export */   LOTS_EDIT_ROUTE: () => (/* binding */ LOTS_EDIT_ROUTE),
/* harmony export */   LOTS_MATCH_ROUTE: () => (/* binding */ LOTS_MATCH_ROUTE),
/* harmony export */   LOTS_ROUTE: () => (/* binding */ LOTS_ROUTE),
/* harmony export */   MATCHBOX_ROUTE: () => (/* binding */ MATCHBOX_ROUTE),
/* harmony export */   MATCH_EXCHANGE_VERIFICATION_ID: () => (/* binding */ MATCH_EXCHANGE_VERIFICATION_ID),
/* harmony export */   MILLISECONDS_IN_A_SECOND: () => (/* binding */ MILLISECONDS_IN_A_SECOND),
/* harmony export */   MINUTES_IN_AN_HOUR: () => (/* binding */ MINUTES_IN_AN_HOUR),
/* harmony export */   NEGOTIATING_ROOM_ROUTE: () => (/* binding */ NEGOTIATING_ROOM_ROUTE),
/* harmony export */   NEGOTIATIONS_COMPLETED_ROUTE: () => (/* binding */ NEGOTIATIONS_COMPLETED_ROUTE),
/* harmony export */   NEGOTIATION_EDIT_ROUTE: () => (/* binding */ NEGOTIATION_EDIT_ROUTE),
/* harmony export */   NEGOTIATION_VIEW_ROUTE: () => (/* binding */ NEGOTIATION_VIEW_ROUTE),
/* harmony export */   ONBOARDING_ROUTE: () => (/* binding */ ONBOARDING_ROUTE),
/* harmony export */   PROCESSOR_OF_BYPRODUCTS_VERIFICATION_ID: () => (/* binding */ PROCESSOR_OF_BYPRODUCTS_VERIFICATION_ID),
/* harmony export */   PROFILE_ROUTE: () => (/* binding */ PROFILE_ROUTE),
/* harmony export */   RCproductIdentifiers: () => (/* binding */ RCproductIdentifiers),
/* harmony export */   REQUESTS_ROUTE: () => (/* binding */ REQUESTS_ROUTE),
/* harmony export */   SCOUTS_ROUTE: () => (/* binding */ SCOUTS_ROUTE),
/* harmony export */   SCOUT_CREATE_ROUTE: () => (/* binding */ SCOUT_CREATE_ROUTE),
/* harmony export */   SCOUT_EDIT_ROUTE: () => (/* binding */ SCOUT_EDIT_ROUTE),
/* harmony export */   SCOUT_FINE_TUNE_ROUTE: () => (/* binding */ SCOUT_FINE_TUNE_ROUTE),
/* harmony export */   SCOUT_SEARCH_RESULT_ROUTE: () => (/* binding */ SCOUT_SEARCH_RESULT_ROUTE),
/* harmony export */   SECONDS_IN_A_MINUTE: () => (/* binding */ SECONDS_IN_A_MINUTE),
/* harmony export */   SIGNIN_ROUTE: () => (/* binding */ SIGNIN_ROUTE),
/* harmony export */   SIGNUP_ROUTE: () => (/* binding */ SIGNUP_ROUTE),
/* harmony export */   STEP_INFO_DATA: () => (/* binding */ STEP_INFO_DATA),
/* harmony export */   SUBSCRIBE_ROUTE: () => (/* binding */ SUBSCRIBE_ROUTE),
/* harmony export */   SUCCESS_ROUTE: () => (/* binding */ SUCCESS_ROUTE),
/* harmony export */   SUPPORT_CARDS_DATA: () => (/* binding */ SUPPORT_CARDS_DATA),
/* harmony export */   SUPPORT_ROUTE: () => (/* binding */ SUPPORT_ROUTE),
/* harmony export */   TRANSACTIONAL_RISK_ROUTE: () => (/* binding */ TRANSACTIONAL_RISK_ROUTE),
/* harmony export */   TRANSPORTER_VERIFICATION_ID: () => (/* binding */ TRANSPORTER_VERIFICATION_ID),
/* harmony export */   TUTORIAL_TABLE_DATA: () => (/* binding */ TUTORIAL_TABLE_DATA),
/* harmony export */   UNVERIFIED_VERIFICATION_ID: () => (/* binding */ UNVERIFIED_VERIFICATION_ID),
/* harmony export */   VERIFICATION_ROUTE: () => (/* binding */ VERIFICATION_ROUTE),
/* harmony export */   VERIFICATION_SUBSCRIPTIONS: () => (/* binding */ VERIFICATION_SUBSCRIPTIONS),
/* harmony export */   adminEmails: () => (/* binding */ adminEmails),
/* harmony export */   baseVerifications: () => (/* binding */ baseVerifications),
/* harmony export */   buyerDeliveryPointIcon: () => (/* binding */ buyerDeliveryPointIcon),
/* harmony export */   cropCategoriesImages: () => (/* binding */ cropCategoriesImages),
/* harmony export */   displayChoices: () => (/* binding */ displayChoices),
/* harmony export */   emailRegex: () => (/* binding */ emailRegex),
/* harmony export */   iconDetails: () => (/* binding */ iconDetails),
/* harmony export */   letterRegex: () => (/* binding */ letterRegex),
/* harmony export */   lotFormAsteriskMonths: () => (/* binding */ lotFormAsteriskMonths),
/* harmony export */   matchItems: () => (/* binding */ matchItems),
/* harmony export */   numberRegex: () => (/* binding */ numberRegex),
/* harmony export */   onboardingContent: () => (/* binding */ onboardingContent),
/* harmony export */   promotionVerifications: () => (/* binding */ promotionVerifications),
/* harmony export */   ratingData: () => (/* binding */ ratingData),
/* harmony export */   requiredUserProfileItems: () => (/* binding */ requiredUserProfileItems),
/* harmony export */   sellerDeliveryPointIcon: () => (/* binding */ sellerDeliveryPointIcon),
/* harmony export */   specialCharacterRegex: () => (/* binding */ specialCharacterRegex),
/* harmony export */   submitMatchContent: () => (/* binding */ submitMatchContent),
/* harmony export */   verificationTypes: () => (/* binding */ verificationTypes),
/* harmony export */   version: () => (/* binding */ version)
/* harmony export */ });
// #region Version
const version = 'V9.0.0';
// #endregion
//#region Numeric Constants
const HOURS_IN_A_DAY = 24;
const MINUTES_IN_AN_HOUR = 60;
const SECONDS_IN_A_MINUTE = 60;
const MILLISECONDS_IN_A_SECOND = 1000;
//#endregion
//#region IAP Verification Ids
const FARMER_VERIFICATION_ID = 1;
const FARMER_ON_FARM_STORAGE_VERIFICATION_ID = 2;
const PROCESSOR_OF_BYPRODUCTS_VERIFICATION_ID = 3;
const BUYER_VERIFICATION_ID = 4;
const TRANSPORTER_VERIFICATION_ID = 5;
const UNVERIFIED_VERIFICATION_ID = 6;
const GRAINSA_VERIFICATION_ID = 7;
const MATCH_EXCHANGE_VERIFICATION_ID = 8;
//#endregion
//#region Verification groups
const baseVerifications = [FARMER_VERIFICATION_ID, FARMER_ON_FARM_STORAGE_VERIFICATION_ID, PROCESSOR_OF_BYPRODUCTS_VERIFICATION_ID, BUYER_VERIFICATION_ID, TRANSPORTER_VERIFICATION_ID];
const promotionVerifications = [GRAINSA_VERIFICATION_ID];
//#endregion
// #region Routes
const ONBOARDING_ROUTE = '/onboarding';
const DOCUMENT_VIEWER_ROUTE = '/document';
const TRANSACTIONAL_RISK_ROUTE = '/transactional-risk';
const SUBSCRIBE_ROUTE = '/subscribe';
const SIGNUP_ROUTE = '/authentication/sign-up';
const SIGNIN_ROUTE = '/authentication/sign-in';
const FORGOT_PASSWORD_ROUTE = '/authentication/forgot-password';
const LANDING_ROUTE = '/landing';
const HOME_ROUTE = '/home';
const BROKER_DASHBOARD_ROUTE = '/broker-dashboard';
const SUPPORT_ROUTE = '/support';
const CLEARING = '/clearing';
const SCOUTS_ROUTE = '/dashboard/scouts';
const LOTS_ROUTE = '/dashboard/lots';
const NEGOTIATING_ROOM_ROUTE = '/dashboard/negotiations';
const NEGOTIATIONS_COMPLETED_ROUTE = '/dashboard/completed';
const BROWSE_THE_MARKET_ROUTE = '/dashboard/browse';
const BROKERS_ROUTE = '/dashboard/brokers';
const REQUESTS_ROUTE = '/dashboard/requested';
const PROFILE_ROUTE = '/dashboard/profile';
const LOTS_CROP_CATEGORIES_ROUTE = '/lots/crop-categories';
const LOTS_CREATE_ROUTE = '/lots/create';
const LOTS_EDIT_ROUTE = '/lots/edit';
const LOTS_MATCH_ROUTE = '/lots/lot-match';
const SCOUT_CREATE_ROUTE = '/scouts/create';
const SCOUT_EDIT_ROUTE = '/scouts/edit';
const SCOUT_FINE_TUNE_ROUTE = '/scouts/fine-tune';
const SCOUT_SEARCH_RESULT_ROUTE = '/scouts/search-results';
const NEGOTIATION_EDIT_ROUTE = '/negotiations/edit';
const NEGOTIATION_VIEW_ROUTE = '/negotiations/view';
const DELIVERY_POINT_ROUTE = '/delivery-point';
const SUCCESS_ROUTE = '/success';
const MATCHBOX_ROUTE = '/onboarding/matchbox';
const FAQ_ROUTE = '/support/FAQs';
const CONTACT_PAGE_ROUTE = '/support/contact-us';
const KYC_PARTY_ROUTE = '/support/kyc-party';
const DETAILED_TUTORIAL_ROUTE = '/support/detailed-tutorial';
const VERIFICATION_ROUTE = '/support/verification';
// #endregion
// #region Stepper
const onboardingContent = [{
  title: 'Testing the Water',
  info: "Tell the Market what you're planning to buy or sell. Scout the Market, with no obligations.",
  imagePath: 'assets/images/onboard-step1-MX.svg'
}, {
  title: 'Step Up to the Plate',
  info: 'By creating a Match Lot you are communicating to the Market that you are a willing seller or buyer of a specific portion of your crop.',
  imagePath: 'assets/images/onboard-step2-MX.svg'
}, {
  title: 'Matching',
  info: 'Once you have created a lot, Match Exchange will match your Lot with counter parties interested in your lot. Choose a Match and you can start to negotiate.',
  imagePath: 'assets/images/onboard-step3-MX.svg'
}, {
  title: "Negotiating: Let's Get Serious",
  info: "In the Negotiating Room, the buyer and seller can negotiate the most important conditions of the deal. Agree on the 5 P's and 2 Q's to get a successful Match.",
  imagePath: 'assets/images/onboard-step4-MX.svg'
}, {
  title: 'Match',
  info: 'Once you have a Match, you will be introduced to the interested party. The final contract is done directly between buyer and seller.',
  imagePath: 'assets/images/onboard-step5-MX.svg'
}];
// #endregion
// #region Home
const HOME_CARDS_DATA = {
  browse: {
    title: 'Browse MX Market',
    routesTo: BROWSE_THE_MARKET_ROUTE,
    source: './assets/images/browse-blue-icon.svg',
    sourceAlt: 'Browse'
  },
  clearing: {
    title: 'Clear with MX',
    routesTo: CLEARING,
    source: './assets/images/clearing-blue-icon.svg',
    sourceAlt: 'Clearing'
  },
  scouts: {
    title: 'Scout the Market',
    routesTo: SCOUTS_ROUTE,
    source: './assets/images/scout-blue-icon.svg',
    sourceAlt: 'Scout',
    stepText: 'Step 1:'
  },
  lots: {
    title: 'Lots',
    routesTo: LOTS_ROUTE,
    source: './assets/images/lots-blue-icon.svg',
    sourceAlt: 'Lot',
    stepText: 'Step 2:'
  },
  negotiations: {
    title: 'Negotiate',
    routesTo: NEGOTIATING_ROOM_ROUTE,
    source: './assets/images/negotiate-blue-icon.svg',
    sourceAlt: 'Negotiate',
    stepText: 'Step 3:'
  },
  completed: {
    title: 'Matches',
    routesTo: NEGOTIATIONS_COMPLETED_ROUTE,
    source: './assets/images/match-blue-icon.svg',
    sourceAlt: 'Match',
    stepText: 'Step 4:'
  },
  brokers: {
    title: 'Brokers',
    routesTo: BROKERS_ROUTE,
    source: './assets/images/brokers-blue-icon.svg',
    sourceAlt: 'Brokers'
  },
  profile: {
    title: 'Profile',
    routesTo: PROFILE_ROUTE,
    source: './assets/icons/user-blue-icon.svg',
    sourceAlt: 'Profile'
  },
  FAQ: {
    title: 'Subscription & More Info',
    routesTo: SUPPORT_ROUTE,
    source: './assets/images/FAQ-blue-icon.svg',
    sourceAlt: 'FAQ'
  }
};
// #endregion
// #region Support
const SUPPORT_CARDS_DATA = [{
  title: 'Subscribe to MX',
  routesTo: VERIFICATION_ROUTE,
  linksTo: null,
  source: './assets/images/verification-farmer-icon.svg',
  sourceAlt: 'Crop field behind a green circle with a white tick inside'
}, {
  title: 'Quick Tutorial',
  routesTo: LANDING_ROUTE,
  linksTo: null,
  source: './assets/images/quick-tutorial.svg',
  sourceAlt: 'Illustration with a circle and 3 sections for Buyers, Sellers and Product'
}, {
  title: 'Explainer Videos',
  routesTo: null,
  linksTo: 'https://www.youtube.com/watch?v=ERit4FVI7GQ&list=PLHycIisL9eaGWve6BwwasY-XqzNM27bU7',
  source: './assets/images/play-button.svg',
  sourceAlt: 'Green play button'
}, {
  title: 'Detailed Tutorial',
  routesTo: DETAILED_TUTORIAL_ROUTE,
  linksTo: null,
  source: './assets/images/detailed-tutorial.svg',
  sourceAlt: 'Two men talking over a sack of gold coins'
}, {
  title: 'FAQs',
  routesTo: FAQ_ROUTE,
  linksTo: null,
  source: './assets/images/FAQ.svg',
  sourceAlt: 'Confused woman with her hands in the air'
}, {
  title: 'Know Your Counterparty',
  routesTo: KYC_PARTY_ROUTE,
  linksTo: null,
  source: './assets/images/get-to-kyk.svg',
  sourceAlt: "Man's face wearing a hat and glass"
}, {
  title: 'Contact Us',
  routesTo: CONTACT_PAGE_ROUTE,
  linksTo: null,
  source: './assets/images/contact-us.svg',
  sourceAlt: 'Old style phone with speech bubble'
}];
// #endregion
// #region Detailed Tutorial
const TUTORIAL_TABLE_DATA = [{
  title: 'Product and Packaging',
  value: 'Yellow Maize, in Bulk'
}, {
  title: 'Position / INCO terms',
  value: 'Ex silo Bultfontein'
}, {
  title: 'Period of availability',
  value: '1 July 2021 to 31 July 2021'
}, {
  title: 'Price',
  value: 'R per ton of R per basis'
}, {
  title: 'Payment terms',
  value: 'Payment after proof of product'
}, {
  title: 'Quality',
  value: 'YM1'
}, {
  title: 'Quantity',
  value: '200 Metric tons'
}];
// #endregion
// #region Navigation Bar
const iconDetails = {
  'Step 1': {
    name: 'scouts',
    sourceGrey: './assets/images/bottom-nav-scouts-grey.svg',
    sourceBlue: './assets/images/bottom-nav-scouts-blue.svg'
  },
  'Step 2': {
    name: 'lots',
    sourceGrey: './assets/images/bottom-nav-lots-grey.svg',
    sourceBlue: './assets/images/bottom-nav-lots-blue.svg'
  },
  'Step 3': {
    name: 'negotiations',
    sourceGrey: './assets/images/bottom-nav-negotiations-grey.svg',
    sourceBlue: './assets/images/bottom-nav-negotiations-blue.svg'
  },
  'Step 4': {
    name: 'completed',
    sourceGrey: './assets/images/bottom-nav-completed-grey.svg',
    sourceBlue: './assets/images/bottom-nav-completed-blue.svg'
  },
  Browse: {
    name: 'browse',
    sourceGrey: './assets/images/bottom-nav-browse-grey.svg',
    sourceBlue: './assets/images/bottom-nav-browse-blue.svg'
  }
};
// #endregion
// #region BBBEE
const ratingData = ['Non-compliant', 'Level 1', 'Level 2', 'Level 3', 'Level 4', 'Level 5', 'Level 6', 'Level 7', 'Level 8'];
// #endregion
// #region Match Items
const matchItems = ['Product', 'Position', 'Period', 'ContractPrice', 'Payment', 'Quantity', 'Quality'];
// #endregion
// #region Market Availability
const displayChoices = [{
  value: true,
  key: 'Available to market'
}, {
  value: false,
  key: 'Not available to market'
}];
// #endregion
// #region Submit Match Modal
const submitMatchContent = ['Legal Entity Name: ', 'The Counterparty will be notified about the Match and will have 24 hours to accept the Match before the Lot opens up for negotiation again.', 'Take note: If your counterparty is making use of a Broker, they \n' + 'have to pay a commission fee to MX to be introduced.', 'Once the interested party accepts the Match you will be introduced to them. The final contract will be negotiated directly between buyer and seller.'];
// #endregion
// #region Admin Email
const adminEmails = ['info@matchmx.com', 'test@gmail.com'];
// #endregion
// #region Crop Categories
const cropCategoriesImages = [{
  name: 'Grains & Oilseeds',
  source: './assets/icons/grains-and-oilseeds.svg',
  sourceAlt: 'Silo filled with grain'
}, {
  name: 'Roughage (Bales)',
  source: './assets/icons/roughage.svg',
  sourceAlt: 'Bale of hay aside a rake'
}, {
  name: 'Legumes & Pulses',
  source: './assets/icons/legumes-and-pulses.svg',
  sourceAlt: 'Pea pod with peas aside it'
}, {
  name: 'Fruits & Vegetables',
  source: './assets/icons/fruit-and-veg.svg',
  sourceAlt: 'Carrot, apple, and avocado'
}, {
  name: 'Byproducts',
  source: './assets/icons/byproducts.svg',
  sourceAlt: 'Bag with picture of grain on it'
}, {
  name: 'Livestock',
  source: './assets/icons/livestock.svg',
  sourceAlt: 'Pig'
}, {
  name: 'Transport',
  source: './assets/icons/transport.svg',
  sourceAlt: 'Truck'
}, {
  name: 'Intention to plant',
  source: './assets/icons/roughage.svg',
  sourceAlt: 'Hand shovel in pile of dirt'
}, {
  name: 'SAFEX Forward Hedging',
  source: './assets/icons/safex-forward-hedging.svg',
  sourceAlt: 'Dollar sign with umbrella'
}];
// #endregion
// #region Delivery Point Icons
const sellerDeliveryPointIcon = {
  url: './assets/icons/green-location-pin.svg',
  scaledSize: {
    width: 20,
    height: 40
  }
};
const buyerDeliveryPointIcon = {
  url: './assets/icons/red-location-pin.svg',
  scaledSize: {
    width: 20,
    height: 40
  }
};
// #endregion
//#region Verification
const verificationTypes = {
  [FARMER_VERIFICATION_ID]: {
    id: FARMER_VERIFICATION_ID,
    name: 'Farmer',
    source: './assets/icons/verification-farmer-icon.svg'
  },
  [FARMER_ON_FARM_STORAGE_VERIFICATION_ID]: {
    id: FARMER_ON_FARM_STORAGE_VERIFICATION_ID,
    name: 'Farmer: On-Farm Storage',
    source: './assets/icons/verification-farmer-on-farm-icon.svg'
  },
  [PROCESSOR_OF_BYPRODUCTS_VERIFICATION_ID]: {
    id: PROCESSOR_OF_BYPRODUCTS_VERIFICATION_ID,
    name: 'Processor of Byproducts',
    source: './assets/icons/verification-processor-icon.svg'
  },
  [BUYER_VERIFICATION_ID]: {
    id: BUYER_VERIFICATION_ID,
    name: 'Buyer',
    source: './assets/icons/verification-buyer-icon.svg'
  },
  [TRANSPORTER_VERIFICATION_ID]: {
    id: TRANSPORTER_VERIFICATION_ID,
    name: 'Transporter',
    source: './assets/icons/verification-transporter-icon.svg'
  },
  [UNVERIFIED_VERIFICATION_ID]: {
    id: UNVERIFIED_VERIFICATION_ID,
    name: 'Unverified',
    source: './assets/icons/verification-unverified-icon.svg'
  },
  [GRAINSA_VERIFICATION_ID]: {
    id: GRAINSA_VERIFICATION_ID,
    name: 'Grain SA',
    source: './assets/icons/grainSA-icon.svg'
  },
  [MATCH_EXCHANGE_VERIFICATION_ID]: {
    id: MATCH_EXCHANGE_VERIFICATION_ID,
    name: 'Acting on behalf of premium client',
    source: './assets/icons/MX-verification-icon.svg'
  }
};
const VERIFICATION_SUBSCRIPTIONS = {
  [FARMER_VERIFICATION_ID]: {
    id: FARMER_VERIFICATION_ID,
    name: 'Farmer',
    identifier: 'Farmer',
    source: './assets/icons/verification-farmer-icon.svg',
    product: {
      title: 'Farmer',
      price: 'R1150'
    },
    product_monthly: {
      title: 'Farmer',
      price: 'R115'
    }
  },
  [FARMER_ON_FARM_STORAGE_VERIFICATION_ID]: {
    id: FARMER_ON_FARM_STORAGE_VERIFICATION_ID,
    name: 'Farmer: On-Farm Storage',
    identifier: 'Farmer, On-farm storage',
    source: './assets/icons/verification-farmer-on-farm-icon.svg',
    product: {
      title: 'Farmer: On-Farm Storage',
      price: 'R2300'
    },
    product_monthly: {
      title: 'Farmer: On-Farm Storage',
      price: 'R230'
    }
  },
  [PROCESSOR_OF_BYPRODUCTS_VERIFICATION_ID]: {
    id: PROCESSOR_OF_BYPRODUCTS_VERIFICATION_ID,
    name: 'Processor of Byproducts',
    identifier: 'Processor of by-products',
    source: './assets/icons/verification-processor-icon.svg',
    product: {
      title: 'Processor of Byproducts',
      price: 'R5500'
    },
    product_monthly: {
      title: 'Processor of Byproducts',
      price: 'R550'
    }
  },
  [BUYER_VERIFICATION_ID]: {
    id: BUYER_VERIFICATION_ID,
    name: 'Buyer',
    identifier: 'Buyer',
    source: './assets/icons/verification-buyer-icon.svg',
    product: {
      title: 'Buyer',
      price: 'R5500'
    },
    product_monthly: {
      title: 'Buyer',
      price: 'R550'
    }
  },
  [TRANSPORTER_VERIFICATION_ID]: {
    id: TRANSPORTER_VERIFICATION_ID,
    name: 'Transporter',
    identifier: 'Transporter',
    source: './assets/icons/verification-transporter-icon.svg',
    product: {
      title: 'Transporter',
      price: 'R5500'
    },
    product_monthly: {
      title: 'Transporter',
      price: 'R550'
    }
  },
  [GRAINSA_VERIFICATION_ID]: {
    id: GRAINSA_VERIFICATION_ID,
    name: 'Grain SA',
    identifier: 'GrainSA',
    source: './assets/icons/grainSA-icon.svg',
    product: {
      title: 'GrainSA',
      price: 'R1150'
    },
    product_monthly: {
      title: 'GrainSA',
      price: 'R115'
    },
    promotion: '1 Year Free'
  }
};
const RCproductIdentifiers = {
  [FARMER_VERIFICATION_ID]: ['mx_farmer_year', 'mx_farmer', 'mx_farmer_month', 'mx_farmer_monthly'],
  [BUYER_VERIFICATION_ID]: ['mx_buyer_year', 'mx_buyer', 'mx_buyer_month', 'mx_buyer_monthly'],
  [FARMER_ON_FARM_STORAGE_VERIFICATION_ID]: ['mx_farmer_on_farm_storage_year', 'mx_farmer_on_farm_storage', 'mx_farmer_on_farm_storage_month', 'mx_farmer_on_farm_storage_monthly'],
  [PROCESSOR_OF_BYPRODUCTS_VERIFICATION_ID]: ['mx_processor_of_by_products_year', 'mx_processor_of_by_products', 'mx_processor_of_by_products_month', 'mx_processor_of_by_products_monthly'],
  [TRANSPORTER_VERIFICATION_ID]: ['mx_transporter_year', 'mx_transporter', 'mx_transporter_month', 'mx_transporter_monthly'],
  [GRAINSA_VERIFICATION_ID]: ['mx_grainsa_year', 'mx_grainsa', 'mx_grainsa_month', 'mx_grainsa_monthly']
};
// #endregion
// #region Verification
const DEFAULT_VERIFICATION = {
  id: 6,
  verificationDate: Date.now()
};
const GRAINSA_VERIFICATION_TEXT = {
  description: 'You are a verified member of Grain SA, giving you 1 free year of this exclusive verification type. This gives you access to all Premium features in the Match Exchange.',
  period: '1 year FREE with your subscription!'
};
// #endregion
// #region Regex
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const specialCharacterRegex = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
const numberRegex = /.*[0-9].*/;
const letterRegex = /.*[a-zA-Z].*/;
// #endregion
// #region Required User Profile Items
const requiredUserProfileItems = ['firstname', 'lastname', 'email', 'phone', 'location'];
// #endregion
// #region Lot Form Asterisk Months
const lotFormAsteriskMonths = ['March', 'May', 'July', 'September', 'December'];
// #endregion
// #region Home
const STEP_INFO_DATA = {
  browse: {
    iconPath: 'assets/images/browse-blue-icon.svg',
    tooltip: 'Browse the Market',
    heading: 'Browse the Market',
    body: 'Browse MX for existing Lots you are interested in. See what price buyers and sellers are ready to buy and sell their product for.'
  },
  clearing: {
    iconPath: './assets/images/clearing-blue-icon.svg',
    tooltip: 'Clear with MX',
    heading: 'Clear with MX',
    body: 'MX will walk you through a clearing process to help you trade in the safest way possible.'
  },
  brokers: {
    iconPath: './assets/images/brokers-blue-icon.svg',
    tooltip: 'Brokers',
    heading: 'Why Appoint a Broker?',
    body: `Subscribers can appoint a Broker to manage their account.
             Brokers can create Scouts, Lots, and Negotiate on the subscribers' behalf.
            ' Throughout the process keep complete control. Only you submit the final Match.`
  },
  scouts: {
    iconPath: 'assets/images/onboard-step1-MX.svg',
    tooltip: 'Use Scouts to search the Market',
    heading: 'What is a Scout?',
    body: "We call it the magic of an MX Scout because you can't do the best deal if you don't see all the available options. With a Scout, you get linked permanently by our technology to buyers or sellers interested in buying from you or selling to you. This link is permanent, and the moment our algorithm finds another relevant party, your Scout will be updated."
  },
  lots: {
    iconPath: 'assets/images/onboard-step2-MX.svg',
    tooltip: 'Use Lots to search the Market',
    heading: 'What is a Lot?',
    body: `
        <p> With an MX Lot, you communicate to your Scout links that you want to sell or buy a specific portion of your crop (or annual need if you are a trader or processor). Every party linked in your Scout will be notified that you are in the market to sell or buy. A Lot describes the 5 P's and 2 Qs, and an interested party can now create a counter-Lot. The 5 P's are Product, Position, Period of availability, Price, Payment Terms. The 2 Q's are Quality and Quantity. Your Lot gets linked to all Lots of parties that want to do business with you. You can then choose with whom you want to negotiate (one or multiple). There is no better way to perfect the timing between buyer and seller than an MX Lot. </p>
          <ul>
            <li>Ex Silo-Coop Certificate - Buy Coop Certificate, only if Sales contract makes Provision for Coop certificates.</li>
            <li>Ex Silo-SAFEX Certificate - Buy SAFEX Certificate.</li>
            <li>Ex Silo-Title Transfer - Direct Transfer of stock from Delivery Party to Match Exchange.</li>
            <li>Ex Silo-ProducerDelivery - Delivery of stock by Producer, direct on TMX folio at Silo.</li>
            <li>Ex Silo-Farm - Delivery of Producer stock by TMX, direct on TMX folio at Silo.</li>
            <li>Ex Farm - Delivery of Producer stock by TMX, at Milldoor.</li>
            <li>Ex Mill - Delivery of stock by Producer, at Milldoor.</li>
          </ul>  `
  },
  negotiations: {
    iconPath: 'assets/images/onboard-step4-MX.svg',
    tooltip: 'How to Negotiate',
    heading: 'How to Negotiate?',
    body: "Once you have identified the Lot(s) that you want to negotiate with, you can click the 'Let's Negotiate' button. Clicking on that will bring both parties into the Negotiating Room. In there, you can negotiate with one or multiple parties the 5 P's and 2 Q's until you have a consensus on all seven Lot items. Choose the best Lot for you and click on the 'Submit Match' button."
  },
  completed: {
    iconPath: 'assets/images/onboard-step5-MX.svg',
    tooltip: 'What are Completed Negotiations',
    heading: 'Completed Negotiations',
    body: 'Once you have submitted your match, the counterparty has 24h to counter-submit your match. When the counterparty submitted (accepted) the match, MX will reveal the identity of the two parties to each other via email. All the necessary contact details will be in the email so that the counterparties can contact each other to finalize the deal and sign a contract. Remember, there is no contractual risk by using MX. Until the final contract is signed, the counterparties have no obligation to each other. MX is solving the two biggest problems, and that is that buyers and sellers always know of each other and getting the timing perfect between them.'
  }
};
// #endregion

/***/ }),

/***/ 1468:
/*!*************************************************!*\
  !*** ./src/app/core/helpers/helperFunctions.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculateBrokerDistanceHelper: () => (/* binding */ calculateBrokerDistanceHelper),
/* harmony export */   dateStringToDate: () => (/* binding */ dateStringToDate),
/* harmony export */   downloadFile: () => (/* binding */ downloadFile),
/* harmony export */   filterBrokerHelper: () => (/* binding */ filterBrokerHelper),
/* harmony export */   getClientNotificationsCountHelper: () => (/* binding */ getClientNotificationsCountHelper),
/* harmony export */   isProfileCompleteHelper: () => (/* binding */ isProfileCompleteHelper),
/* harmony export */   matchRCIdentifierToVerificationIdHelper: () => (/* binding */ matchRCIdentifierToVerificationIdHelper),
/* harmony export */   prepareScoutFromMarketLotCardHelper: () => (/* binding */ prepareScoutFromMarketLotCardHelper),
/* harmony export */   transformDateToUtcHelper: () => (/* binding */ transformDateToUtcHelper),
/* harmony export */   transformLotBeforeDispatchHelper: () => (/* binding */ transformLotBeforeDispatchHelper),
/* harmony export */   transformSingleUsersForVerificationHelper: () => (/* binding */ transformSingleUsersForVerificationHelper)
/* harmony export */ });
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! file-saver */ 6778);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ 9487);


function dateStringToDate(objectToConvert) {
  if (objectToConvert instanceof Array) {
    return mapArrayOfObjects(objectToConvert);
  } else {
    return convertDateStringToObject(objectToConvert);
  }
}
function convertDateStringToObject(object) {
  if (typeof object === 'object') {
    for (const key of Object.keys(object)) {
      if (key.toLowerCase().includes('date') && object[key]) {
        object[key] = new Date(object[key]);
      }
    }
  }
  return object;
}
function mapArrayOfObjects(objectArray) {
  objectArray = objectArray.map(convertDateStringToObject);
  return objectArray;
}
// #endregion
//#region CSV Download Helper
function downloadFile(data) {
  const replacer = (key, value) => value === null ? '' : value;
  const header = Object.keys(data[0]);
  const csv = data.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','));
  csv.unshift(header.join(','));
  csv.unshift('SEP=,');
  const csvArray = csv.join('\r\n');
  var blob = new Blob([csvArray], {
    type: 'text/csv'
  });
  (0,file_saver__WEBPACK_IMPORTED_MODULE_0__.saveAs)(blob, 'myFile.csv');
}
//#endregion
// #region Prepare Scout From Market Lot Card Helper
function prepareScoutFromMarketLotCardHelper(marketLotCard) {
  const {
    lotType,
    crop,
    town,
    location,
    radius
  } = marketLotCard;
  const counterPartyLotType = lotType === 'Sell' ? 'Buy' : 'Sell';
  return {
    creatorType: 'Farmer',
    scoutType: counterPartyLotType,
    crop,
    inSouthAfrica: false,
    googlePlaceId: '',
    town,
    location,
    radius,
    isPublic: true
  };
}
// #endregion
function transformSingleUsersForVerificationHelper(verificationId, user, period) {
  const verificationDate = Date.now();
  return {
    uid: user.uid,
    fullName: `${user.firstname} ${user.lastname}`,
    verification: {
      id: verificationId,
      verificationDate: verificationDate,
      verificationExpires: period
    }
  };
}
function matchRCIdentifierToVerificationIdHelper(identifier) {
  for (const verificationId in _constants__WEBPACK_IMPORTED_MODULE_1__.RCproductIdentifiers) {
    if (_constants__WEBPACK_IMPORTED_MODULE_1__.RCproductIdentifiers[verificationId].includes(identifier)) {
      return parseInt(verificationId);
    }
  }
}
//#region Calculate distance
function calculateBrokerDistanceHelper(coordinates) {
  let latUser = coordinates[0].lat;
  let lngUser = coordinates[0].lng;
  coordinates = coordinates.slice(1);
  let distances = [];
  for (let i = 0; i < coordinates.length; i++) {
    let latAgent = coordinates[i].lat;
    let lngAgent = coordinates[i].lng;
    if (latUser == latAgent && lngUser == lngAgent) {
      distances.push(0);
    } else if (latAgent == 0) {
      distances.push(-1);
    } else {
      var radLatUser = Math.PI * latUser / 180;
      var radLatAgent = Math.PI * latAgent / 180;
      var theta = lngUser - lngAgent;
      var radTheta = Math.PI * theta / 180;
      var dist = Math.sin(radLatUser) * Math.sin(radLatAgent) + Math.cos(radLatUser) * Math.cos(radLatAgent) * Math.cos(radTheta);
      if (dist > 1) {
        dist = 1;
      }
      dist = Math.acos(dist);
      dist = dist * 180 / Math.PI;
      dist = dist * 60 * 1.85;
      distances.push(Math.ceil(dist));
    }
  }
  return distances;
}
// #endregion
// #region Client Notifications
function getClientNotificationsCountHelper(uid, notifications) {
  let notificationsCount = 0;
  for (let i = 0; i < notifications.length; i++) {
    if (notifications[i].userId === uid) {
      notificationsCount++;
    }
  }
  return notificationsCount;
}
// #endregion
// #region Filter broker requests
function filterBrokerHelper(brokerRequests, brokers, sentByBroker) {
  let sentBy = brokerRequests.filter(brokerRequest => brokerRequest.sentByBroker === sentByBroker);
  let sentByUids = sentBy.map(brokerRequest => brokerRequest.brokerUid);
  let sentByBrokers = brokers.filter(broker => sentByUids.includes(broker.uid));
  return sentByBrokers.sort((a, b) => a.distance - b.distance);
}
// #endregion
// #region Profile Complete Checker
function isProfileCompleteHelper(user) {
  return Boolean(user.firstname && user.lastname && user.email && user.phone && user.location);
}
// #endregion
// #region Lots Transformation
function transformDateToUtcHelper(date) {
  let newDate = date;
  newDate.setHours(newDate.getHours() + 12);
  return newDate;
}
function transformLotBeforeDispatchHelper(lot) {
  return {
    ...lot,
    quantity: +lot.quantity,
    price: +lot.price,
    dateFrom: transformDateToUtcHelper(lot.dateFrom),
    dateTo: transformDateToUtcHelper(lot.dateTo)
  };
}
// #endregion

/***/ }),

/***/ 5626:
/*!***********************************************!*\
  !*** ./src/app/core/helpers/index.actions.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appActions: () => (/* reexport safe */ src_app_core_ngrx_app_state_index__WEBPACK_IMPORTED_MODULE_0__.appActions),
/* harmony export */   authActions: () => (/* reexport safe */ src_app_core_ngrx_authState_index__WEBPACK_IMPORTED_MODULE_2__.authActions),
/* harmony export */   brokersActions: () => (/* reexport safe */ src_app_core_ngrx_brokers_index__WEBPACK_IMPORTED_MODULE_10__.brokersActions),
/* harmony export */   cropActions: () => (/* reexport safe */ src_app_core_ngrx_crop_index__WEBPACK_IMPORTED_MODULE_1__.cropActions),
/* harmony export */   deliveryPointActions: () => (/* reexport safe */ src_app_core_ngrx_entities_delivery_points_index__WEBPACK_IMPORTED_MODULE_4__.deliveryPointActions),
/* harmony export */   lotActions: () => (/* reexport safe */ src_app_core_ngrx_entities_lot_index__WEBPACK_IMPORTED_MODULE_5__.lotActions),
/* harmony export */   matchActions: () => (/* reexport safe */ src_app_core_ngrx_entities_match_index__WEBPACK_IMPORTED_MODULE_6__.matchActions),
/* harmony export */   negotiationActions: () => (/* reexport safe */ src_app_core_ngrx_entities_negotiations_index__WEBPACK_IMPORTED_MODULE_7__.negotiationActions),
/* harmony export */   notificationActions: () => (/* reexport safe */ src_app_core_ngrx_entities_notifications__WEBPACK_IMPORTED_MODULE_8__.notificationActions),
/* harmony export */   paygateActions: () => (/* reexport safe */ src_app_core_ngrx_paygate_index__WEBPACK_IMPORTED_MODULE_9__.paygateActions),
/* harmony export */   scoutActions: () => (/* reexport safe */ src_app_core_ngrx_entities_scout_index__WEBPACK_IMPORTED_MODULE_3__.scoutActions)
/* harmony export */ });
/* harmony import */ var src_app_core_ngrx_app_state_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/ngrx/app-state/index */ 4073);
/* harmony import */ var src_app_core_ngrx_crop_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/ngrx/crop/index */ 1643);
/* harmony import */ var src_app_core_ngrx_authState_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/ngrx/authState/index */ 395);
/* harmony import */ var src_app_core_ngrx_entities_scout_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/ngrx/entities/scout/index */ 8512);
/* harmony import */ var src_app_core_ngrx_entities_delivery_points_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/ngrx/entities/delivery-points/index */ 5951);
/* harmony import */ var src_app_core_ngrx_entities_lot_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/ngrx/entities/lot/index */ 7230);
/* harmony import */ var src_app_core_ngrx_entities_match_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/ngrx/entities/match/index */ 426);
/* harmony import */ var src_app_core_ngrx_entities_negotiations_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/ngrx/entities/negotiations/index */ 9602);
/* harmony import */ var src_app_core_ngrx_entities_notifications__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/ngrx/entities/notifications */ 4624);
/* harmony import */ var src_app_core_ngrx_paygate_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/ngrx/paygate/index */ 2356);
/* harmony import */ var src_app_core_ngrx_brokers_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/ngrx/brokers/index */ 1199);













/***/ }),

/***/ 2179:
/*!******************************************!*\
  !*** ./src/app/core/helpers/snackbar.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   errorConfig: () => (/* binding */ errorConfig),
/* harmony export */   notificationConfig: () => (/* binding */ notificationConfig),
/* harmony export */   successConfig: () => (/* binding */ successConfig)
/* harmony export */ });
const errorConfig = {
  duration: 5000,
  horizontalPosition: 'right',
  verticalPosition: 'top',
  panelClass: 'g-snack-error'
};
const successConfig = {
  duration: 5000,
  horizontalPosition: 'right',
  verticalPosition: 'top',
  panelClass: 'g-snack-success'
};
const notificationConfig = {
  duration: 5000,
  horizontalPosition: 'center',
  verticalPosition: 'top',
  panelClass: 'g-snack-notification'
};

/***/ }),

/***/ 1417:
/*!********************************************!*\
  !*** ./src/app/core/models/queryModels.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdditionalEntityDetailsClass: () => (/* binding */ AdditionalEntityDetailsClass),
/* harmony export */   DateRange: () => (/* binding */ DateRange),
/* harmony export */   DeliveryPointClass: () => (/* binding */ DeliveryPointClass),
/* harmony export */   FineTune: () => (/* binding */ FineTune),
/* harmony export */   Lot: () => (/* binding */ Lot),
/* harmony export */   LotMatchDetails: () => (/* binding */ LotMatchDetails),
/* harmony export */   MarketFilterClass: () => (/* binding */ MarketFilterClass),
/* harmony export */   MarketFilters: () => (/* binding */ MarketFilters),
/* harmony export */   ScoutClass: () => (/* binding */ ScoutClass)
/* harmony export */ });
class ScoutClass {
  constructor() {
    this.creatorType = 'Farmer';
    this.scoutType = 'Sell';
    this.crop = {
      id: null,
      name: '',
      cropCategoryId: null
    };
    this.inSouthAfrica = false;
    this.googlePlaceId = '';
    this.town = '';
    this.location = {
      lat: -30.5595,
      lng: 22.9375
    };
    this.radius = 50;
    this.isPublic = true;
  }
}
class DeliveryPointClass {
  constructor() {
    this.id = 112358132134558914;
    this.name = null;
    this.streetNumber = null;
    this.street = null;
    this.suburb = null;
    this.town = null;
    this.postalCode = null;
    this.region = null;
    this.province = null;
    this.country = null;
    this.googlePlaceId = null;
    this.isPublic = false;
    this.location = {
      lat: -30.5595,
      lng: 22.9375
    };
    this.locationType = {
      id: 8,
      name: 'User Generated'
    };
  }
}
class AdditionalEntityDetailsClass {
  constructor() {
    this.legalEntityName = '';
    this.exFarm = false;
    this.bbbeeRating = 0;
    this.email = '';
  }
}
class Lot {
  constructor() {
    this.lotName = '';
    this.lotType = 'Sell';
    this.crop = null;
    this.priceType = {
      name: 'Fixed Price',
      id: 2
    };
    this.month = null;
    this.dateFrom = null;
    this.dateTo = null;
    this.incoTerm = null;
    this.deliveryPoint = new DeliveryPointClass();
    this.quality = null;
    this.quantity = null;
    this.price = null;
    this.paymentTerm = null;
    this.isPublic = true;
    this.scoutId = null;
    this.exchange = {
      id: 1,
      name: 'SAFEX'
    };
    this.quantityMeasure = null;
    this.safexOption = 'PLUS';
    this.tradingEntityId = null;
    this.packaging = null;
    this.radius = null;
  }
}
class LotMatchDetails {}
// #endregion
// #region Fine Tune
class FineTune {}
class DateRange {}
//#endregion
//#region Browse the Market
class MarketFilters {}
class MarketFilterClass extends MarketFilters {
  constructor() {
    super(...arguments);
    this.cardType = 'Buy';
    this.gpsCoordinates = {
      lat: -30.5595,
      lng: 22.9375
    };
    this.crop = null;
    this.cropCategory = null;
    this.town = null;
    this.dateFrom = null;
    this.dateTo = null;
    this.radius = null;
  }
}
//#endregion

/***/ }),

/***/ 4651:
/*!**********************************************************!*\
  !*** ./src/app/core/ngrx/app-state/app-state.actions.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CheckAuthorizationFail: () => (/* binding */ CheckAuthorizationFail),
/* harmony export */   CheckAuthorizationSuccess: () => (/* binding */ CheckAuthorizationSuccess),
/* harmony export */   GetAnalyticsFail: () => (/* binding */ GetAnalyticsFail),
/* harmony export */   GetAnalyticsSuccess: () => (/* binding */ GetAnalyticsSuccess),
/* harmony export */   GetLotsInDateRangeFail: () => (/* binding */ GetLotsInDateRangeFail),
/* harmony export */   GetLotsInDateRangeSuccess: () => (/* binding */ GetLotsInDateRangeSuccess),
/* harmony export */   ReqCheckAuthorization: () => (/* binding */ ReqCheckAuthorization),
/* harmony export */   ReqEmailVerificationForm: () => (/* binding */ ReqEmailVerificationForm),
/* harmony export */   ReqEmailVerificationFormFail: () => (/* binding */ ReqEmailVerificationFormFail),
/* harmony export */   ReqEmailVerificationFormSuccess: () => (/* binding */ ReqEmailVerificationFormSuccess),
/* harmony export */   ReqGetAnalytics: () => (/* binding */ ReqGetAnalytics),
/* harmony export */   ReqGetLotsInDateRange: () => (/* binding */ ReqGetLotsInDateRange),
/* harmony export */   ReqGetUsersForVerification: () => (/* binding */ ReqGetUsersForVerification),
/* harmony export */   ReqGetUsersForVerificationFail: () => (/* binding */ ReqGetUsersForVerificationFail),
/* harmony export */   ReqGetUsersForVerificationSuccess: () => (/* binding */ ReqGetUsersForVerificationSuccess),
/* harmony export */   ReqToggleIsLoading: () => (/* binding */ ReqToggleIsLoading)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 6270);

//#region Create
//#endregion
//#region Read
// #region Link the user state to firebase
const ReqCheckAuthorization = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[App Start Up] ReqCheckAuthorization', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const CheckAuthorizationFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqCheckAuthorization] CheckAuthorizationFail', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const CheckAuthorizationSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqCheckAuthorization] [SCU] CheckAuthorizationSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
//#endregion
//#endregion
//#region Update
const ReqToggleIsLoading = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[App] ReqToggleIsLoading', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
//#endregion
//#region Delete
//#endregion
// #region App Level Actions
// #region ReqGetAnalytics
const ReqGetAnalytics = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Profile] ReqGetAnalytics');
const GetAnalyticsFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqGetAnalytics] GetAnalyticsFail');
const GetAnalyticsSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqGetAnalytics] GetAnalyticsSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// #endregion
// #region ReqGetLotsInDateRange
const ReqGetLotsInDateRange = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Profile] ReqGetLotsInDateRange', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const GetLotsInDateRangeFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqGetLotsInDateRange] GetLotsInDateRangeFail');
const GetLotsInDateRangeSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqGetLotsInDateRange] GetLotsInDateRangeSuccess');
// #endregion
// #endregion
//#region ReqGetUsersForVerification
const ReqGetUsersForVerification = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Admin] ReqGetUsersForVerification');
const ReqGetUsersForVerificationFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqGetUsersForVerification] ReqGetUsersForVerificationFail');
const ReqGetUsersForVerificationSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqGetUsersForVerification] ReqGetUsersForVerificationSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
//#endregion
//#region ReqEmailVerificationForm
const ReqEmailVerificationForm = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Verification] ReqEmailVerificationForm');
const ReqEmailVerificationFormFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqEmailVerificationForm] ReqEmailVerificationFormFail');
const ReqEmailVerificationFormSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqEmailVerificationForm] ReqEmailVerificationFormSuccess');
//#endregion

/***/ }),

/***/ 5308:
/*!**********************************************************!*\
  !*** ./src/app/core/ngrx/app-state/app-state.effects.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppStateEffects: () => (/* binding */ AppStateEffects)
/* harmony export */ });
/* harmony import */ var src_app_core_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/api/api.service */ 7588);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth/auth.service */ 4964);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ 1575);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 2607);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 1891);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 2389);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 2452);
/* harmony import */ var src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/helpers/index.actions */ 5626);
/* harmony import */ var _helpers_snackbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/snackbar */ 2179);
/* harmony import */ var _helpers_helperFunctions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/helperFunctions */ 1468);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/snack-bar */ 9409);
















class AppStateEffects {
  //#endregion
  //#region Helper Functions
  generateAndDownloadCSVLots(apiResponse) {
    const lots = apiResponse.map(lot => {
      delete lot.id;
      return {
        Name: lot.lotName || '',
        Type: lot.lotType || '',
        Crop: lot.crop?.name || '',
        PriceType: lot.priceType?.name || '',
        Month: lot.month?.name || '',
        FromDate: lot.dateFrom.toLocaleDateString() || '',
        ToDate: lot.dateTo.toLocaleDateString() || '',
        IncoTerm: lot.incoTerm?.name || '',
        DeliveryPoint: lot.deliveryPoint?.name || '',
        Quality: lot.quality?.name || '',
        Quantity: lot.quantity || '',
        Price: lot.price || '',
        PaymentTerm: lot.paymentTerm?.name || '',
        IsPublic: lot.isPublic || '',
        ScoutId: lot.scoutId || '',
        Exchange: lot.exchange?.name || '',
        UnitOfMeasure: lot.quantityMeasure?.name || '',
        SafexOption: lot.safexOption || '',
        TradingEntityId: lot.tradingEntityId || '',
        Packaging: lot.packaging?.name || ''
      };
    });
    (0,_helpers_helperFunctions__WEBPACK_IMPORTED_MODULE_4__.downloadFile)(lots);
    return 'Download Started';
  }
  //#endregion
  constructor(actions$, authService, store, api, snackbar) {
    this.actions$ = actions$;
    this.authService = authService;
    this.store = store;
    this.api = api;
    this.snackbar = snackbar;
    //#region Create
    //#endregion
    //#region Read
    // #region ReqLinkUser
    this.ReqCheckAuthorization$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.appActions.ReqCheckAuthorization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.mergeMap)(payload => {
      return this.authService.getAuthorization().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.mergeMap)(firebaseUser => {
        if (firebaseUser) {
          this.store.dispatch(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.authActions.ReqGetUserFromAuthorization({
            uid: firebaseUser.uid
          }));
          return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.authActions.GetUserFromAuthorizationSuccess, src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.authActions.GetUserFromAuthorizationFail), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(storeAction => {
            if (storeAction.type === src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.authActions.GetUserFromAuthorizationSuccess.type) {
              return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.appActions.CheckAuthorizationSuccess({
                executedTime: payload.executedTime
              }), src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.appActions.ReqToggleIsLoading({
                flag: false
              })];
            } else {
              throw new Error('failed to retrieve user information');
            }
          }));
        } else {
          return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.appActions.CheckAuthorizationFail({
            executedTime: payload.executedTime
          }), src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.appActions.ReqToggleIsLoading({
            flag: false
          })];
        }
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)(error => {
        console.log('ReqLinkUser: ', error.message);
        this.authService.logout();
        return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.appActions.CheckAuthorizationFail({
          executedTime: payload.executedTime
        }), src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.appActions.ReqToggleIsLoading({
          flag: false
        })];
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.repeat)());
    })));
    // #endregion
    // #endregion
    //#region Update
    //#endregion
    //#region Delete
    //#endregion
    // #region App Level Effects
    // #region ReqGetAnalytics
    this.ReqGetAnalytics$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.appActions.ReqGetAnalytics), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(() => {
      return this.api.getAnalytics().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.mergeMap)(apiResponse => {
        return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.appActions.GetAnalyticsSuccess({
          analytics: apiResponse
        })];
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)(error => {
        console.log('ReqGetAnalytics: ', error.message);
        this.snackbar.open('Failed to get Analytics', 'CLOSE', _helpers_snackbar__WEBPACK_IMPORTED_MODULE_3__.errorConfig);
        return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.appActions.GetAnalyticsFail()];
      }));
    })));
    // #endregion
    //#region ReqGetLotsInDateRange
    this.ReqGetLotsInDateRange$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.appActions.ReqGetLotsInDateRange), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(({
      dateRange
    }) => {
      return this.api.getLotsInDateRange(dateRange).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.mergeMap)(apiResponse => {
        return this.generateAndDownloadCSVLots(apiResponse);
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.mergeMap)(() => {
        return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.appActions.GetLotsInDateRangeSuccess()];
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)(error => {
        console.log('ReqGetLotsInDateRange: ', error.message);
        this.snackbar.open('Failed to get Lots', 'CLOSE', _helpers_snackbar__WEBPACK_IMPORTED_MODULE_3__.errorConfig);
        return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.appActions.GetLotsInDateRangeFail()];
      }));
    })));
    // #endregion
    // #endregion
    //#region ReqGetUsersForVerification
    this.ReqGetUsersForVerification$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.appActions.ReqGetUsersForVerification), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(() => {
      return this.authService.getUsersForVerification().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.mergeMap)(users => {
        return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.appActions.ReqGetUsersForVerificationSuccess({
          users
        })];
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)(error => {
        console.log('ReqUpdateUserVerificationStatus: ', error);
        this.snackbar.open(error, 'CLOSE', _helpers_snackbar__WEBPACK_IMPORTED_MODULE_3__.errorConfig);
        return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.appActions.ReqGetUsersForVerificationFail()];
      }));
    })));
    //#endregion
    //#region ReqEmailVerificationForm
    this.ReqEmailVerificationFormSuccess$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.appActions.ReqEmailVerificationForm), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(() => {
      return this.api.sendVerificationFormEmail().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.mergeMap)(() => {
        this.snackbar.open('Successfully Emailed Verification Form', 'CLOSE', _helpers_snackbar__WEBPACK_IMPORTED_MODULE_3__.successConfig);
        return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.appActions.ReqEmailVerificationFormSuccess()];
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)(error => {
        console.log('ReqEmailVerificationFormSuccess: ', error);
        this.snackbar.open(error, 'CLOSE', _helpers_snackbar__WEBPACK_IMPORTED_MODULE_3__.errorConfig);
        return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.appActions.ReqEmailVerificationFormFail()];
      }));
    })));
  }
  static #_ = this.ɵfac = function AppStateEffects_Factory(t) {
    return new (t || AppStateEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_11__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](src_app_core_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__.MatSnackBar));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjectable"]({
    token: AppStateEffects,
    factory: AppStateEffects.ɵfac
  });
}

/***/ }),

/***/ 1383:
/*!**********************************************************!*\
  !*** ./src/app/core/ngrx/app-state/app-state.reducer.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appStateFeatureKey: () => (/* binding */ appStateFeatureKey),
/* harmony export */   initialState: () => (/* binding */ initialState),
/* harmony export */   reducer: () => (/* binding */ reducer)
/* harmony export */ });
/* harmony import */ var _authState_auth_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../authState/auth.actions */ 6189);
/* harmony import */ var _entities_match_match_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../entities/match/match.actions */ 8603);
/* harmony import */ var _crop_crop_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../crop/crop.actions */ 7634);
/* harmony import */ var _entities_lot_lot_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../entities/lot/lot.actions */ 4981);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _app_state_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-state.actions */ 4651);
/* harmony import */ var _helperFunctions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helperFunctions */ 2447);
/* harmony import */ var _entities_scout_scout_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../entities/scout/scout.actions */ 7993);










const appStateFeatureKey = 'appState';
const initialState = {
  initialLogin: false,
  persist: true,
  isLoading: false,
  dictLoading: {},
  unitsOfMeasure: [],
  incoTerms: [],
  priceTypes: [{
    id: 1,
    name: 'Basis'
  }, {
    id: 2,
    name: 'Fixed Price'
  }],
  paymentTerms: [],
  packaging: [],
  cropGrades: [],
  cropPackaging: [],
  months: [],
  users: []
};
const appStateReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.on)(_app_state_actions__WEBPACK_IMPORTED_MODULE_4__.ReqToggleIsLoading, (state, {
  ...payload
}) => {
  return {
    ...state,
    isLoading: payload.flag
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.on)(_authState_auth_actions__WEBPACK_IMPORTED_MODULE_0__.ReqEmailLogin, _authState_auth_actions__WEBPACK_IMPORTED_MODULE_0__.ReqEmailRegister, _authState_auth_actions__WEBPACK_IMPORTED_MODULE_0__.ReqProviderSignIn, state => {
  return {
    ...state,
    isLoading: true
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.on)(_authState_auth_actions__WEBPACK_IMPORTED_MODULE_0__.EmailLoginFail, _authState_auth_actions__WEBPACK_IMPORTED_MODULE_0__.ProviderSignInFail, _authState_auth_actions__WEBPACK_IMPORTED_MODULE_0__.EmailRegistrationFail, _authState_auth_actions__WEBPACK_IMPORTED_MODULE_0__.EmailLoginSuccess, _authState_auth_actions__WEBPACK_IMPORTED_MODULE_0__.ProviderSignInSuccess, _authState_auth_actions__WEBPACK_IMPORTED_MODULE_0__.EmailRegisterSuccess, state => {
  return {
    ...state,
    isLoading: false
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.on)(_app_state_actions__WEBPACK_IMPORTED_MODULE_4__.ReqCheckAuthorization, (state, {
  ...payload
}) => {
  return (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_5__.addLoading)({
    ...state,
    persist: true
  }, payload);
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.on)(_app_state_actions__WEBPACK_IMPORTED_MODULE_4__.CheckAuthorizationSuccess, _app_state_actions__WEBPACK_IMPORTED_MODULE_4__.CheckAuthorizationFail, (state, {
  ...payload
}) => {
  return (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_5__.removeLoading)({
    ...state,
    persist: false
  }, payload);
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.on)(_entities_scout_scout_actions__WEBPACK_IMPORTED_MODULE_6__.ScoutFormDataSuccess, (state, payload) => {
  return {
    ...state,
    unitsOfMeasure: payload.unitsOfMeasure
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.on)(_entities_lot_lot_actions__WEBPACK_IMPORTED_MODULE_3__.LotFormDataSuccess, _entities_match_match_actions__WEBPACK_IMPORTED_MODULE_1__.LotMatchFormDataSuccess, (state, payload) => {
  return {
    ...state,
    unitsOfMeasure: payload.unitsOfMeasure,
    incoTerms: payload.incoTerms,
    paymentTerms: payload.paymentOptions
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.on)(_crop_crop_actions__WEBPACK_IMPORTED_MODULE_2__.CropGradesSuccess, (state, payload) => {
  return {
    ...state,
    cropGrades: payload.grades
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.on)(_crop_crop_actions__WEBPACK_IMPORTED_MODULE_2__.CropMonthsSuccess, (state, payload) => {
  return {
    ...state,
    months: payload.safexMonths
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.on)(_crop_crop_actions__WEBPACK_IMPORTED_MODULE_2__.CropMonthsAndGradesSuccess, (state, payload) => {
  return {
    ...state,
    months: payload.safexMonths,
    cropGrades: payload.grades
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.on)(_crop_crop_actions__WEBPACK_IMPORTED_MODULE_2__.CropPackagingSuccess, (state, payload) => {
  return {
    ...state,
    cropPackaging: payload.cropPackaging
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.on)(_app_state_actions__WEBPACK_IMPORTED_MODULE_4__.ReqGetUsersForVerificationSuccess, (state, payload) => {
  return {
    ...state,
    users: payload.users
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.on)(_authState_auth_actions__WEBPACK_IMPORTED_MODULE_0__.ClearState, _authState_auth_actions__WEBPACK_IMPORTED_MODULE_0__.ReqLogoutAction, () => {
  return {
    ...initialState,
    persist: false
  };
}));
function reducer(state = initialState, action) {
  return appStateReducer(state, action);
}

/***/ }),

/***/ 5391:
/*!************************************************************!*\
  !*** ./src/app/core/ngrx/app-state/app-state.selectors.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCropGrades: () => (/* binding */ getCropGrades),
/* harmony export */   getCropPackaging: () => (/* binding */ getCropPackaging),
/* harmony export */   getFormData: () => (/* binding */ getFormData),
/* harmony export */   getIncoTermsByCropId: () => (/* binding */ getIncoTermsByCropId),
/* harmony export */   getUnitsOfMeasureByCropId: () => (/* binding */ getUnitsOfMeasureByCropId),
/* harmony export */   getUsers: () => (/* binding */ getUsers),
/* harmony export */   selectAppState: () => (/* binding */ selectAppState)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _app_state_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-state.reducer */ 1383);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment.prod */ 7337);



const selectAppState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createFeatureSelector)(_app_state_reducer__WEBPACK_IMPORTED_MODULE_0__.appStateFeatureKey);
const getCropPackaging = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectAppState, appState => {
  return appState.cropPackaging || [];
});
const getCropGrades = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectAppState, appSate => {
  return appSate.cropGrades.length ? appSate.cropGrades : [{
    id: 0,
    name: 'Standard'
  }];
});
const getFormData = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectAppState, appState => {
  const unitsOfMeasure = appState.unitsOfMeasure || [];
  const incoTerms = appState.incoTerms || [];
  const packaging = appState.packaging || [];
  const paymentTerms = appState.paymentTerms || [];
  const priceTypes = appState.priceTypes || [];
  const safexMonths = appState.months || [];
  return {
    unitsOfMeasure,
    incoTerms,
    packaging,
    paymentTerms,
    priceTypes,
    safexMonths
  };
});
const getIncoTermsByCropId = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectAppState, (appState, props) => {
  const roughageBales = [...src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__.environment.ROUGHAGE_BALES_CROP_IDS];
  if (props.cropId) {
    return roughageBales.includes(props.cropId) ? appState.incoTerms.filter(incoTerm => src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__.environment.ROUGHAGE_BALES_INCO_TERM_IDS.includes(incoTerm.id)) : appState.incoTerms;
  } else {
    return appState.incoTerms || [];
  }
});
const getUnitsOfMeasureByCropId = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectAppState, (appState, props) => {
  const filterCropIds = [...src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__.environment.STRAW_CROP_IDS, ...src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__.environment.HAY_CROP_IDS];
  if (filterCropIds.includes(props.cropId)) {
    return appState.unitsOfMeasure.filter(unitOfMeasure => src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__.environment.STRAW_HAY_UNIT_OF_MEASURE_IDS.includes(unitOfMeasure.id));
  } else {
    return appState.unitsOfMeasure.filter(unitOfMeasure => unitOfMeasure.id === src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__.environment.DEFAULT_UOM_ID) || [];
  }
});
const getUsers = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectAppState, appState => {
  return appState.users;
});

/***/ }),

/***/ 4073:
/*!**********************************************!*\
  !*** ./src/app/core/ngrx/app-state/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appActions: () => (/* reexport module object */ _app_state_actions__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   appSelectors: () => (/* reexport module object */ _app_state_selectors__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   appStateFeatureKey: () => (/* reexport safe */ _app_state_reducer__WEBPACK_IMPORTED_MODULE_2__.appStateFeatureKey),
/* harmony export */   authReducer: () => (/* reexport safe */ _app_state_reducer__WEBPACK_IMPORTED_MODULE_2__.reducer)
/* harmony export */ });
/* harmony import */ var _app_state_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-state.actions */ 4651);
/* harmony import */ var _app_state_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-state.selectors */ 5391);
/* harmony import */ var _app_state_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-state.reducer */ 1383);





/***/ }),

/***/ 6189:
/*!*****************************************************!*\
  !*** ./src/app/core/ngrx/authState/auth.actions.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClearClientEntities: () => (/* binding */ ClearClientEntities),
/* harmony export */   ClearState: () => (/* binding */ ClearState),
/* harmony export */   EmailLoginFail: () => (/* binding */ EmailLoginFail),
/* harmony export */   EmailLoginSuccess: () => (/* binding */ EmailLoginSuccess),
/* harmony export */   EmailRegisterSuccess: () => (/* binding */ EmailRegisterSuccess),
/* harmony export */   EmailRegistrationFail: () => (/* binding */ EmailRegistrationFail),
/* harmony export */   EntityDisplayInfoFail: () => (/* binding */ EntityDisplayInfoFail),
/* harmony export */   EntityDisplayInfoSuccess: () => (/* binding */ EntityDisplayInfoSuccess),
/* harmony export */   GetUserFromAuthorizationFail: () => (/* binding */ GetUserFromAuthorizationFail),
/* harmony export */   GetUserFromAuthorizationSuccess: () => (/* binding */ GetUserFromAuthorizationSuccess),
/* harmony export */   ProviderSignInFail: () => (/* binding */ ProviderSignInFail),
/* harmony export */   ProviderSignInSuccess: () => (/* binding */ ProviderSignInSuccess),
/* harmony export */   ReqDeleteAccountEmail: () => (/* binding */ ReqDeleteAccountEmail),
/* harmony export */   ReqDeleteAccountEmailFail: () => (/* binding */ ReqDeleteAccountEmailFail),
/* harmony export */   ReqDeleteAccountEmailSuccess: () => (/* binding */ ReqDeleteAccountEmailSuccess),
/* harmony export */   ReqEmailLogin: () => (/* binding */ ReqEmailLogin),
/* harmony export */   ReqEmailRegister: () => (/* binding */ ReqEmailRegister),
/* harmony export */   ReqEntityDisplayInfo: () => (/* binding */ ReqEntityDisplayInfo),
/* harmony export */   ReqGetClientEntities: () => (/* binding */ ReqGetClientEntities),
/* harmony export */   ReqGetClientEntitiesFail: () => (/* binding */ ReqGetClientEntitiesFail),
/* harmony export */   ReqGetClientEntitiesSuccess: () => (/* binding */ ReqGetClientEntitiesSuccess),
/* harmony export */   ReqGetUserFromAuthorization: () => (/* binding */ ReqGetUserFromAuthorization),
/* harmony export */   ReqLogoutAction: () => (/* binding */ ReqLogoutAction),
/* harmony export */   ReqPasswordReset: () => (/* binding */ ReqPasswordReset),
/* harmony export */   ReqProviderSignIn: () => (/* binding */ ReqProviderSignIn),
/* harmony export */   ReqSubscriptionStatus: () => (/* binding */ ReqSubscriptionStatus),
/* harmony export */   ReqUpdateEntityInfo: () => (/* binding */ ReqUpdateEntityInfo),
/* harmony export */   ReqUpdateUserDetails: () => (/* binding */ ReqUpdateUserDetails),
/* harmony export */   ReqUpdateUserDetailsFail: () => (/* binding */ ReqUpdateUserDetailsFail),
/* harmony export */   ReqUpdateUserDetailsSuccess: () => (/* binding */ ReqUpdateUserDetailsSuccess),
/* harmony export */   ReqUpdateUserVerificationStatus: () => (/* binding */ ReqUpdateUserVerificationStatus),
/* harmony export */   ReqUpdateUserVerificationStatusFail: () => (/* binding */ ReqUpdateUserVerificationStatusFail),
/* harmony export */   ReqUpdateUserVerificationStatusSuccess: () => (/* binding */ ReqUpdateUserVerificationStatusSuccess),
/* harmony export */   SaveAdditionalEntityDetails: () => (/* binding */ SaveAdditionalEntityDetails),
/* harmony export */   SaveAdditionalEntityDetailsFail: () => (/* binding */ SaveAdditionalEntityDetailsFail),
/* harmony export */   SaveAdditionalEntityDetailsSuccess: () => (/* binding */ SaveAdditionalEntityDetailsSuccess),
/* harmony export */   UpdateEntityInfoFail: () => (/* binding */ UpdateEntityInfoFail),
/* harmony export */   UpdateEntityInfoSuccess: () => (/* binding */ UpdateEntityInfoSuccess),
/* harmony export */   UpdateUserFromInit: () => (/* binding */ UpdateUserFromInit)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 6270);

// #region Email Login
const ReqEmailLogin = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Login Page] ReqEmailLogin', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const EmailLoginSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqEmailLogin] [SCU] EmailLoginSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const EmailLoginFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqEmailLogin] EmailLoginFail', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// #endregion
// #region Email registration
const ReqEmailRegister = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Register Page] ReqEmailRegister', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const EmailRegisterSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqEmailRegister] EmailRegisterSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const EmailRegistrationFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqEmailRegistration] EmailRegistrationFail', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const SaveAdditionalEntityDetails = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Additional Info Modal] SaveAdditionalEntityDetails', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const SaveAdditionalEntityDetailsSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Additional Info Modal] SaveAdditionalEntityDetailsSuccess');
const SaveAdditionalEntityDetailsFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Additional Info Modal] SaveAdditionalEntityDetailsFail');
// #endregion
// #region Provider Sign In
const ReqProviderSignIn = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Register Page] ReqProviderSignIn', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const ProviderSignInFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqProviderSignIn] ProviderSignInFail', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const ProviderSignInSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqProviderSignIn] ProviderSignInSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// #endregion
// #region ReqPasswordReset
const ReqPasswordReset = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Login Page] [NF] ReqPasswordReset', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// #endregion
//#region UpdateUserFromInit
const UpdateUserFromInit = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqLinkUser] [SCU] UpdateUserFromInit', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
//#endregion
//#region ReqUpdateUserDetails
const ReqUpdateUserDetails = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[User Tab / Verification Page] ReqUpdateUserDetails', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const ReqUpdateUserDetailsFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqUpdateUserDetails] ReqUpdateUserDetailsFail');
const ReqUpdateUserDetailsSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqUpdateUserDetails] ReqUpdateUserDetailsSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
//#endregion
// #region ReqSubscriptionStatus
const ReqSubscriptionStatus = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[GetUserFromAuthorizationSuccess] [NF] ReqSubscriptionStatus');
//#endregion
//#region ReqUpdateUserVerificationStatus
const ReqUpdateUserVerificationStatus = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Admin] ReqUpdateUserVerificationStatus', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const ReqUpdateUserVerificationStatusFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqUpdateUserVerificationStatus] ReqUpdateUserVerificationStatusFail');
const ReqUpdateUserVerificationStatusSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqUpdateUserVerificationStatus] ReqUpdateUserVerificationStatusSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
//#endregion
// #region ReqGetUserFromAuthorization
const ReqGetUserFromAuthorization = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqCheckAuthorization] [SCU] ReqGetUserFromAuthorization', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const GetUserFromAuthorizationFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqGetUserFromAuthorization] GetUserFromAuthorizationFail');
const GetUserFromAuthorizationSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqGetUserFromAuthorization] GetUserFromAuthorizationSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
//#endregion
// #region ReqEntityDisplayInfo
const ReqEntityDisplayInfo = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Profile Page] ReqEntityDisplayInfo');
const EntityDisplayInfoFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqEntityDisplayInfo] EntityDisplayInfoFail');
const EntityDisplayInfoSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqEntityDisplayInfo] EntityDisplayInfoSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// #endregion
// #region ReqEntityDisplayInfo
const ReqUpdateEntityInfo = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Profile Page] ReqUpdateEntityInfo', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const UpdateEntityInfoFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqUpdateEntityInfo] UpdateEntityInfoFail');
const UpdateEntityInfoSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqUpdateEntityInfo] UpdateEntityInfoSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// #endregion
// #region ReqDeleteAccountEmail
const ReqDeleteAccountEmail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Profile Page] ReqDeleteAccountEmail', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const ReqDeleteAccountEmailFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqDeleteAccountEmail] ReqDeleteAccountEmailFail');
const ReqDeleteAccountEmailSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqDeleteAccountEmail] ReqDeleteAccountEmailSuccess');
// #endregion
// #region Get Client Entities
const ReqGetClientEntities = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ Lot Component ] ReqGetClientEntities', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const ReqGetClientEntitiesFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ ReqGetClientEntities ] ReqGetClientEntitiesFail');
const ReqGetClientEntitiesSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ ReqGetClientEntities ] ReqGetClientEntitiesSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// #endregion
// #region Clear Client Entity
const ClearClientEntities = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Broker Dashboard] [NF] ClearClientEntity');
// #endregion
// #region Logout
const ReqLogoutAction = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Any] [NF] Logout');
const ClearState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ALL] ClearState');
// #endregion

/***/ }),

/***/ 2124:
/*!*****************************************************!*\
  !*** ./src/app/core/ngrx/authState/auth.effects.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthEffects: () => (/* binding */ AuthEffects)
/* harmony export */ });
/* harmony import */ var src_app_core_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/api/api.service */ 7588);
/* harmony import */ var _features_shared_components_additional_info_modal_additional_info_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../features/shared/components/additional-info-modal/additional-info-modal.component */ 6861);
/* harmony import */ var _services_subscription_subscription_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/subscription/subscription.service */ 3231);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth/auth.service */ 4964);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/effects */ 1575);
/* harmony import */ var src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/helpers/index.actions */ 5626);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 6231);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 3839);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 6290);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _reducers_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/index */ 7032);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 2607);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 1527);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 2389);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 1891);
/* harmony import */ var _helpers_snackbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/snackbar */ 2179);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @capacitor/core */ 8626);
/* harmony import */ var _awesome_cordova_plugins_purchases_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @awesome-cordova-plugins/purchases/ngx */ 8087);
/* harmony import */ var src_app_core_helpers_helperFunctions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/helpers/helperFunctions */ 1468);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/snack-bar */ 9409);
/* harmony import */ var _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/legacy-dialog */ 1035);

























class AuthEffects {
  //#endregion
  // #region Helper Functions
  generateAdditionalDetailsWithTradingEntity(additionalDetails, entityId) {
    const additionalDetailsWithTradingEntity = {
      legalEntityName: additionalDetails.legalEntityName,
      exFarm: additionalDetails.exFarm,
      bbbeeRating: +additionalDetails.bbbeeRating,
      entityId: entityId,
      email: additionalDetails.email
    };
    return additionalDetailsWithTradingEntity;
  }
  constructErrorMessage(code) {
    let message = '';
    switch (code) {
      case 'auth/email-already-exists':
      case 'auth/email-already-in-use':
        message = 'The provided email is already in use. Please sign in or reset your password.';
        break;
      case 'auth/wrong-password':
        message = 'The email or password is incorrect. Please try again.';
        break;
      case 'auth/popup-closed-by-user':
        message = 'Login has been cancelled by the user.';
        break;
      case 'auth/popup-blocked':
        message = 'The login popup has been blocked. Please allow popups to continue.';
        break;
      case 'auth/cancelled-popup-request':
        message = 'The login request has been cancelled.';
        break;
      case 'auth/timeout':
        message = 'The action took too long. Please check your network connection and try again.';
        break;
      case 'auth/account-exists-with-different-credential':
        message = 'This account already exists in our system.';
        break;
      case 'auth/too-many-requests':
        message = 'Too many incorrect attempts have been made. Please try again in 1 minute.';
        break;
      case 'auth/invalid-email':
        message = 'Please provide a full valid email address.';
        break;
      case 'auth/user-not-found':
        message = 'There is no user with the provided credentials.';
        break;
      case 'auth/user-disabled':
        message = 'This user account has been disabled by the developers.';
        break;
      case 'auth/signed-in':
        message = 'Please log out to register a new account.';
        break;
      case 'auth/operation-not-allowed':
        message = 'This feature has not been enabled yet. Please use one of the other methods to login.';
        break;
      default:
        console.log({
          code
        });
        if (code.length < 15) {
          message = 'We ran into an authentication error.\nPlease try again.';
        } else {
          message = 'An unexpected error has occurred and your action was cancelled. Please try again. ';
        }
        break;
    }
    return message;
  }
  // #endregion
  constructor(actions$, snackbar, authService, store, subService, api, dialog, purchases) {
    this.actions$ = actions$;
    this.snackbar = snackbar;
    this.authService = authService;
    this.store = store;
    this.subService = subService;
    this.api = api;
    this.dialog = dialog;
    this.purchases = purchases;
    // #region ReqEmailLogin
    this.ReqEmailLogin$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_10__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_10__.ofType)(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_4__.authActions.ReqEmailLogin), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.mergeMap)(({
      email,
      password,
      executedTime
    }) => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.from)(this.authService.emailLogin(email, password)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.mergeMap)(() => {
        return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_4__.authActions.EmailLoginSuccess({
          executedTime
        })];
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.catchError)(error => {
        this.snackbar.open(this.constructErrorMessage(error), 'CLOSE', _helpers_snackbar__WEBPACK_IMPORTED_MODULE_6__.errorConfig);
        console.log('ReqEmailLogin: ', error);
        return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_4__.authActions.EmailLoginFail({
          executedTime
        })];
      }));
    })));
    // #endregion
    // #region ReqProviderSignIn
    this.ReqProviderSignIn$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_10__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_10__.ofType)(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_4__.authActions.ReqProviderSignIn), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.mergeMap)(({
      executedTime,
      platform
    }) => {
      return (platform === 'web' ? (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.from)(this.authService.providerLogin()) : (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.from)(this.authService.nativeProviderLogin())).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.mergeMap)(() => {
        return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_4__.authActions.ProviderSignInSuccess({
          executedTime
        })];
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.catchError)(error => {
        this.snackbar.open(this.constructErrorMessage(error), 'CLOSE', _helpers_snackbar__WEBPACK_IMPORTED_MODULE_6__.errorConfig);
        console.log('ReqProviderSignIn: ', error);
        return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_4__.authActions.ProviderSignInFail({
          executedTime
        })];
      }));
    })));
    // #endregion
    // #region Registration
    this.ReqEmailRegister$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_10__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_10__.ofType)(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_4__.authActions.ReqEmailRegister), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.mergeMap)(({
      executedTime,
      email,
      password,
      signUpData
    }) => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.from)(this.authService.emailSignUp(email, password, signUpData)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.mergeMap)(() => {
        return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_4__.authActions.EmailRegisterSuccess({
          executedTime
        })];
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.catchError)(error => {
        console.log('ReqEmailRegister: ', error);
        this.snackbar.open(this.constructErrorMessage(error), 'CLOSE', _helpers_snackbar__WEBPACK_IMPORTED_MODULE_6__.errorConfig);
        return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_4__.authActions.EmailRegistrationFail({
          executedTime
        })];
      }));
    })));
    // #endregion
    // #region ReqPasswordReset
    this.ReqPasswordReset = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_10__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_10__.ofType)(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_4__.authActions.ReqPasswordReset), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.mergeMap)(payload => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.combineLatest)([this.authService.resetPassword(payload.email), (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.of)(payload)]);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.switchMap)(([, _payload]) => {
      this.snackbar.open(`Successfully sent password reset email to ${_payload.email}.`, 'CLOSE', _helpers_snackbar__WEBPACK_IMPORTED_MODULE_6__.successConfig);
      return rxjs__WEBPACK_IMPORTED_MODULE_18__.EMPTY;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.catchError)(error => {
      console.log('ReqPasswordReset: ', error.message);
      return rxjs__WEBPACK_IMPORTED_MODULE_18__.EMPTY;
    })), {
      dispatch: false
    });
    // #endregion
    // #region ReqLogoutAction
    this.ReqLogoutAction$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_10__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_10__.ofType)(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_4__.authActions.ReqLogoutAction), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.mergeMap)(payload => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.of)(payload).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.mergeMap)(_payload => {
        return this.authService.logout();
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.mergeMap)(() => {
        this.subService.unsubscribeComponent$.next();
        localStorage.clear();
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.of)('disposable').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.switchMap)(() => {
          return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_4__.authActions.ClearState()];
        }));
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.catchError)(error => {
        console.log('ReqLogoutAction: ', error.message);
        return [];
      }));
    })));
    // #endregion
    // #region ReqGetUserFromAuthorization
    this.ReqGetUserFromAuthorization$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_10__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_10__.ofType)(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_4__.authActions.ReqGetUserFromAuthorization), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.mergeMap)(payload => {
      return this.authService.getUser(payload.uid).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.mergeMap)(user => {
        return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_4__.authActions.GetUserFromAuthorizationSuccess({
          user
        })];
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.catchError)(error => {
        console.log('ReqGetUserFromAuthorization: ', error.message);
        return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_4__.authActions.GetUserFromAuthorizationFail()];
      }));
    })));
    // #endregion
    // #region ReqGetUserFromAuthorization
    this.ReqGetClientEntities$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_10__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_10__.ofType)(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_4__.authActions.ReqGetClientEntities), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.mergeMap)(payload => {
      return this.authService.getUser(payload.clientUid, true).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.mergeMap)(user => {
        return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_4__.authActions.ReqGetClientEntitiesSuccess({
          user
        })];
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.catchError)(error => {
        console.log('ReqGetClientEntitiesFail: ', error.message);
        return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_4__.authActions.ReqGetClientEntitiesFail()];
      }));
    })));
    // #endregion
    // #region saveAdditionalEntityDetails
    this.saveAdditionalEntityDetails$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_10__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_10__.ofType)(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_4__.authActions.GetUserFromAuthorizationSuccess), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.mergeMap)(user => {
      return this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_19__.select)(_reducers_index__WEBPACK_IMPORTED_MODULE_5__.authSelectors.getUserEntities), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.switchMap)(entities => {
        return this.api.getEntityById(entities[0].id);
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.switchMap)(entity => {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.combineLatest)([(0,rxjs__WEBPACK_IMPORTED_MODULE_16__.of)(user), (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.of)(entity.id)]);
      }));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.mergeMap)(([{
      user
    }, entityId]) => {
      if (!user.hasB_BBEE) {
        const dialogRef = this.dialog.open(_features_shared_components_additional_info_modal_additional_info_modal_component__WEBPACK_IMPORTED_MODULE_1__.AdditionalInfoModalComponent, {
          disableClose: true,
          panelClass: 'g-modal-container'
        });
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.combineLatest)([dialogRef.afterClosed(), (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.of)(entityId)]);
      } else {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.combineLatest)([(0,rxjs__WEBPACK_IMPORTED_MODULE_16__.of)(null), (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.of)(null)]);
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.mergeMap)(([additionalDetails, entityId]) => {
      if (additionalDetails && entityId) {
        const additionalEntityDetails = this.generateAdditionalDetailsWithTradingEntity(additionalDetails, entityId);
        return this.api.saveAdditionalEntityDetails(additionalEntityDetails);
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.of)(null);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.mergeMap)(authResult => {
      if (authResult) {
        this.snackbar.open('Successfully Saved Equity Information', 'CLOSE', _helpers_snackbar__WEBPACK_IMPORTED_MODULE_6__.successConfig);
        return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_4__.authActions.SaveAdditionalEntityDetailsSuccess()];
      }
      return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_4__.authActions.SaveAdditionalEntityDetailsSuccess()];
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.catchError)(error => {
      console.log('saveAdditionalEntityDetails: ', error.message);
      this.snackbar.open('An Error Occurred When Attempting To Save Equity Information', 'CLOSE', _helpers_snackbar__WEBPACK_IMPORTED_MODULE_6__.errorConfig);
      return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_4__.authActions.SaveAdditionalEntityDetailsFail()];
    })));
    // #endregion
    // #region ReqSubscriptionStatus
    this.ReqSubscriptionStatus$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_10__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_10__.ofType)(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_4__.authActions.GetUserFromAuthorizationSuccess), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.mergeMap)(user => {
      if (_capacitor_core__WEBPACK_IMPORTED_MODULE_7__.Capacitor.getPlatform() !== 'web') {
        if (user.user.verification?.verificationExpires) {
          this.purchases.logIn(user.user.uid).then(({
            customerInfo,
            created
          }) => {
            if (!created) {
              let latestExpiryDate = customerInfo.latestExpirationDate;
              if (new Date(latestExpiryDate) > new Date()) {
                const verificationId = (0,src_app_core_helpers_helperFunctions__WEBPACK_IMPORTED_MODULE_9__.matchRCIdentifierToVerificationIdHelper)(customerInfo?.activeSubscriptions[0]);
                this.store.dispatch(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_4__.authActions.ReqUpdateUserVerificationStatus({
                  userVerifications: [(0,src_app_core_helpers_helperFunctions__WEBPACK_IMPORTED_MODULE_9__.transformSingleUsersForVerificationHelper)(verificationId, user.user, new Date(latestExpiryDate).getTime())],
                  showSnackBar: false
                }));
              } else {
                this.store.dispatch(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_4__.authActions.ReqUpdateUserVerificationStatus({
                  userVerifications: [(0,src_app_core_helpers_helperFunctions__WEBPACK_IMPORTED_MODULE_9__.transformSingleUsersForVerificationHelper)(6, user.user, null)],
                  showSnackBar: false
                }));
              }
            }
          }, error => {
            this.snackbar.open('An Error occurred updating your verification status.', 'CLOSE', _helpers_snackbar__WEBPACK_IMPORTED_MODULE_6__.errorConfig);
            console.log('RevenueCat Subscription Check Error: ', error);
          });
        }
      }
      return rxjs__WEBPACK_IMPORTED_MODULE_18__.EMPTY;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.catchError)(error => {
      console.log('ReqSubscriptionStatus: ', error.message);
      this.snackbar.open('An Error Occurred When Attempting To check verification status', 'CLOSE', _helpers_snackbar__WEBPACK_IMPORTED_MODULE_6__.errorConfig);
      return rxjs__WEBPACK_IMPORTED_MODULE_18__.EMPTY;
    })), {
      dispatch: false
    });
    // #endregion
    // #region ReqEntityDisplayInfo
    this.ReqEntityDisplayInfo$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_10__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_10__.ofType)(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_4__.authActions.ReqEntityDisplayInfo), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.switchMap)(() => {
      return this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_19__.select)(_reducers_index__WEBPACK_IMPORTED_MODULE_5__.authSelectors.getUserEntities), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.switchMap)(entities => {
        return this.api.getAdditionalEntityDetails(entities[0].id);
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.switchMap)(additionalEntityDetails => {
        return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_4__.authActions.EntityDisplayInfoSuccess({
          additionalEntityDetails
        })];
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.catchError)(error => {
        console.log({
          ReqEntityDisplayInfo: error
        });
        return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_4__.authActions.EntityDisplayInfoFail()];
      }));
    })));
    // #endregion
    // #region ReqUpdateEntityInfo
    this.ReqUpdateEntityInfo$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_10__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_10__.ofType)(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_4__.authActions.ReqUpdateEntityInfo), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.switchMap)(payload => {
      return this.api.saveAdditionalEntityDetails(payload.additionalEntityDetails).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.switchMap)(additionalEntityDetail => {
        this.snackbar.open('Successfully Updated Entity Information', 'CLOSE', _helpers_snackbar__WEBPACK_IMPORTED_MODULE_6__.successConfig);
        return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_4__.authActions.UpdateEntityInfoSuccess({
          additionalEntityDetails: additionalEntityDetail
        })];
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.catchError)(error => {
        console.log('ReqUpdateEntityInfo: ', error.message);
        this.snackbar.open('An Error Occurred When Attempting To Update Equity Information', 'CLOSE', _helpers_snackbar__WEBPACK_IMPORTED_MODULE_6__.errorConfig);
        return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_4__.authActions.UpdateEntityInfoFail()];
      }));
    })));
    // #endregion
    //#region ReqUpdateUserVerificationStatus
    this.ReqUpdateUserVerificationStatus$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_10__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_10__.ofType)(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_4__.authActions.ReqUpdateUserVerificationStatus), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.switchMap)(({
      userVerifications,
      showSnackBar
    }) => {
      return [{
        verifyResponse: this.authService.verifyUsers(userVerifications),
        userVerification: userVerifications,
        showSnackBar: showSnackBar
      }];
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.switchMap)(verificationResponse => {
      verificationResponse.verifyResponse.then(response => {
        if (verificationResponse.showSnackBar) {
          const failed = response.includes('Failed');
          this.snackbar.open(response, 'CLOSE', failed ? _helpers_snackbar__WEBPACK_IMPORTED_MODULE_6__.errorConfig : _helpers_snackbar__WEBPACK_IMPORTED_MODULE_6__.successConfig);
        }
      });
      return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_4__.authActions.ReqUpdateUserVerificationStatusSuccess({
        verification: verificationResponse.userVerification[0].verification
      })];
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.catchError)(error => {
      console.log('ReqUpdateUserVerificationStatus: ', error);
      this.snackbar.open(error, 'CLOSE', _helpers_snackbar__WEBPACK_IMPORTED_MODULE_6__.errorConfig);
      return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_4__.authActions.ReqUpdateUserVerificationStatusFail()];
    })));
    //#endregion
    //#region ReqUpdateUserDetails
    this.ReqUpdateUserDetails$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_10__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_10__.ofType)(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_4__.authActions.ReqUpdateUserDetails), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.switchMap)(({
      user,
      updateSQL
    }) => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.of)(this.authService.updateUserData(user)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.switchMap)(res => {
        if (!updateSQL) return res;
        return this.api.updateUser({
          uid: user.uid,
          phoneNumber: user.phone,
          email: user.email
        });
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.switchMap)(() => {
        if (updateSQL) this.snackbar.open('Successfully Updated User Details', 'CLOSE', _helpers_snackbar__WEBPACK_IMPORTED_MODULE_6__.successConfig);
        return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_4__.authActions.ReqUpdateUserDetailsSuccess({
          user
        })];
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.catchError)(error => {
        console.log('ReqUpdateUserDetails: ', error);
        if (updateSQL) this.snackbar.open('Failed To Update User Details', 'CLOSE', _helpers_snackbar__WEBPACK_IMPORTED_MODULE_6__.errorConfig);
        return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_4__.authActions.ReqUpdateUserDetailsFail()];
      }));
    })));
    //#endregion
    //#region ReqDeleteAccountEmail
    this.ReqDeleteAccountEmail$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_10__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_10__.ofType)(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_4__.authActions.ReqDeleteAccountEmail), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.switchMap)(({
      user
    }) => {
      return this.api.deleteAccountRequest(user).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.mergeMap)(() => {
        this.snackbar.open('Account Deletion Email sent.', 'CLOSE', _helpers_snackbar__WEBPACK_IMPORTED_MODULE_6__.successConfig);
        return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_4__.authActions.ReqDeleteAccountEmailSuccess()];
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.catchError)(error => {
        console.log('ReqDeleteAccountEmail: ', error.message);
        this.snackbar.open('Failed To send deletion email, please try again.', 'CLOSE', _helpers_snackbar__WEBPACK_IMPORTED_MODULE_6__.errorConfig);
        return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_4__.authActions.ReqDeleteAccountEmailFail()];
      }));
    })));
  }
  static #_ = this.ɵfac = function AuthEffects_Factory(t) {
    return new (t || AuthEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_10__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵinject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_19__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵinject"](_services_subscription_subscription_service__WEBPACK_IMPORTED_MODULE_2__.SubscriptionService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵinject"](src_app_core_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵinject"](_angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_22__.MatLegacyDialog), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵinject"](_awesome_cordova_plugins_purchases_ngx__WEBPACK_IMPORTED_MODULE_8__.Purchases));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjectable"]({
    token: AuthEffects,
    factory: AuthEffects.ɵfac
  });
}

/***/ }),

/***/ 6086:
/*!*****************************************************!*\
  !*** ./src/app/core/ngrx/authState/auth.reducer.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   authFeatureKey: () => (/* binding */ authFeatureKey),
/* harmony export */   reducer: () => (/* binding */ reducer)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 7178);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.actions */ 6189);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _helperFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helperFunctions */ 2447);




const authFeatureKey = 'auth';
const initialState = getInitialState();
function getInitialState() {
  const initState = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_2__.getStateData)(authFeatureKey);
  return initState;
}
const authReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_auth_actions__WEBPACK_IMPORTED_MODULE_1__.ReqEmailLogin, _auth_actions__WEBPACK_IMPORTED_MODULE_1__.ReqEmailRegister, _auth_actions__WEBPACK_IMPORTED_MODULE_1__.ReqProviderSignIn, (state, {
  ...payload
}) => {
  return (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_2__.addLoading)(state, payload);
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_auth_actions__WEBPACK_IMPORTED_MODULE_1__.UpdateUserFromInit, _auth_actions__WEBPACK_IMPORTED_MODULE_1__.GetUserFromAuthorizationSuccess, (state, {
  ...payload
}) => {
  const {
    entities,
    ...user
  } = payload.user;
  let newState = {
    ...state,
    user,
    entities
  };
  return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(newState);
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_auth_actions__WEBPACK_IMPORTED_MODULE_1__.ReqUpdateUserDetailsSuccess, (state, {
  ...payload
}) => {
  const user = payload.user;
  return {
    ...state,
    user
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_auth_actions__WEBPACK_IMPORTED_MODULE_1__.ReqUpdateUserVerificationStatusSuccess, (state, {
  ...payload
}) => {
  let userCopy = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(state.user);
  const user = {
    ...userCopy,
    verification: payload.verification
  };
  return {
    ...state,
    user
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_auth_actions__WEBPACK_IMPORTED_MODULE_1__.EmailLoginSuccess, _auth_actions__WEBPACK_IMPORTED_MODULE_1__.EmailRegisterSuccess, _auth_actions__WEBPACK_IMPORTED_MODULE_1__.ProviderSignInSuccess, (state, {
  ...payload
}) => {
  let newState = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_2__.removeLoading)(state, payload);
  return newState;
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_auth_actions__WEBPACK_IMPORTED_MODULE_1__.EntityDisplayInfoSuccess, _auth_actions__WEBPACK_IMPORTED_MODULE_1__.UpdateEntityInfoSuccess, (state, {
  ...payload
}) => {
  return {
    ...state,
    additionalEntityDetails: payload.additionalEntityDetails
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_auth_actions__WEBPACK_IMPORTED_MODULE_1__.EmailRegistrationFail, _auth_actions__WEBPACK_IMPORTED_MODULE_1__.ProviderSignInFail, _auth_actions__WEBPACK_IMPORTED_MODULE_1__.EmailLoginFail, (state, {
  ...payload
}) => {
  return (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_2__.removeLoading)(state, payload);
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_auth_actions__WEBPACK_IMPORTED_MODULE_1__.ReqLogoutAction, () => {
  return initialState;
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_auth_actions__WEBPACK_IMPORTED_MODULE_1__.ReqGetClientEntitiesSuccess, (state, {
  ...payload
}) => {
  return {
    ...state,
    entities: payload.user.entities
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_auth_actions__WEBPACK_IMPORTED_MODULE_1__.ClearClientEntities, state => {
  return {
    ...state,
    entities: []
  };
}));
function reducer(state = initialState, action) {
  return authReducer(state, action);
}

/***/ }),

/***/ 6646:
/*!*******************************************************!*\
  !*** ./src/app/core/ngrx/authState/auth.selectors.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAdditionalEntityDetails: () => (/* binding */ getAdditionalEntityDetails),
/* harmony export */   getAuthState: () => (/* binding */ getAuthState),
/* harmony export */   getUser: () => (/* binding */ getUser),
/* harmony export */   getUserEntities: () => (/* binding */ getUserEntities)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _auth_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.reducer */ 6086);


const getAuthState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createFeatureSelector)(_auth_reducer__WEBPACK_IMPORTED_MODULE_0__.authFeatureKey);
// #region getUser
const getUser = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(getAuthState, authState => {
  return authState?.user;
});
// #endregion
// #region getUserEntities
const getUserEntities = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(getAuthState, authState => {
  return authState?.entities || [];
});
// #endregion
// #region getAdditionalEntityDetails
const getAdditionalEntityDetails = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(getAuthState, authState => {
  return authState?.additionalEntityDetails || null;
});
// #endregion

/***/ }),

/***/ 395:
/*!**********************************************!*\
  !*** ./src/app/core/ngrx/authState/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   authActions: () => (/* reexport module object */ _auth_actions__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   authFeatureKey: () => (/* reexport safe */ _auth_reducer__WEBPACK_IMPORTED_MODULE_2__.authFeatureKey),
/* harmony export */   authReducer: () => (/* reexport safe */ _auth_reducer__WEBPACK_IMPORTED_MODULE_2__.reducer),
/* harmony export */   authSelectors: () => (/* reexport module object */ _auth_selectors__WEBPACK_IMPORTED_MODULE_1__)
/* harmony export */ });
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.actions */ 6189);
/* harmony import */ var _auth_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.selectors */ 6646);
/* harmony import */ var _auth_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.reducer */ 6086);





/***/ }),

/***/ 6382:
/*!**************************************************************!*\
  !*** ./src/app/core/ngrx/brokers/brokers-effects.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrokersEffects: () => (/* binding */ BrokersEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/effects */ 1575);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 2607);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 1527);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 2389);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 1891);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 6231);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var _services_brokers_brokers_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/brokers/brokers.service */ 250);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ 1199);
/* harmony import */ var _helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/index.actions */ 5626);
/* harmony import */ var _helpers_snackbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/snackbar */ 2179);
/* harmony import */ var _helpers_helperFunctions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/helperFunctions */ 1468);
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/api/api.service */ 7588);
/* harmony import */ var _services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/notifications/notifications.service */ 7012);
/* harmony import */ var _helpers_brokerHelperFunctions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../helpers/brokerHelperFunctions */ 8215);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/snack-bar */ 9409);


















class BrokersEffects {
  // #endregion
  // #endregion
  constructor(actions$, brokersService, snackbar, api, notifications) {
    this.actions$ = actions$;
    this.brokersService = brokersService;
    this.snackbar = snackbar;
    this.api = api;
    this.notifications = notifications;
    //#region Shared Broker/Client
    // #region ReqBrokersAndDistance_Shared
    this.ReqBrokersAndDistance_Shared$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.ofType)(_index__WEBPACK_IMPORTED_MODULE_1__.brokersActions.ReqBrokersAndDistance_Shared), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.mergeMap)(user => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(this.brokersService.getBrokers()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.mergeMap)(brokers => {
        let locationsToGeocode = [user.user.location];
        brokers.forEach(broker => {
          locationsToGeocode.push(broker.location);
        });
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(this.brokersService.getGeocodedAddresses(locationsToGeocode)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.mergeMap)(coordinates => {
          let distances = (0,_helpers_helperFunctions__WEBPACK_IMPORTED_MODULE_4__.calculateBrokerDistanceHelper)(coordinates);
          brokers.forEach((broker, index) => {
            broker.distance = distances[index];
          });
          return [_index__WEBPACK_IMPORTED_MODULE_1__.brokersActions.ReqBrokersAndDistance_SharedSuccess({
            brokers: brokers
          })];
        }));
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.catchError)(error => {
        console.log('ReqBrokersAndDistance_Shared: ', error);
        return [_index__WEBPACK_IMPORTED_MODULE_1__.brokersActions.ReqBrokersAndDistance_SharedFail()];
      }));
    })));
    //#endregion
    // #region ReqCreateRequest_Shared
    this.ReqCreateRequest_Shared$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.ofType)(_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.brokersActions.ReqCreateRequest_Shared), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)(({
      brokerUid,
      clientUid,
      sentByBroker
    }) => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.of)(this.brokersService.createRequest(brokerUid, clientUid, sentByBroker)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)(response => {
        return [_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.brokersActions.ReqCreateRequest_SharedSuccess({
          response,
          clientUid,
          brokerUid
        })];
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.catchError)(error => {
        console.log('ReqCreateRequest_Shared: ', error);
        return [_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.brokersActions.ReqCreateRequest_SharedFail()];
      }));
    })));
    // #endregion
    // #region ReqAcceptRequest_Shared
    this.ReqAcceptRequest_Shared$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.ofType)(_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.brokersActions.ReqAcceptRequest_Shared), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)(({
      brokerUid,
      clientUid
    }) => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.of)(this.brokersService.acceptRequest(brokerUid, clientUid)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)(response => {
        return [_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.brokersActions.ReqAcceptRequest_SharedSuccess({
          response: response
        })];
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.catchError)(error => {
        console.log('ReqAcceptRequest_Shared: ', error);
        return [_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.brokersActions.ReqAcceptRequest_SharedFail()];
      }));
    })));
    // #endregion
    // #region ReqDeleteRequest_Shared
    this.ReqDeleteRequest_Shared$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.ofType)(_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.brokersActions.ReqDeleteRequest_Shared), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)(({
      brokerUid,
      clientUid
    }) => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.of)(this.brokersService.deleteRequest(brokerUid, clientUid)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)(() => {
        return [_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.brokersActions.ReqDeleteRequest_SharedSuccess({
          clientUid
        })];
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.catchError)(error => {
        console.log('ReqDeleteRequest_Shared: ', error);
        return [_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.brokersActions.ReqDeleteRequest_SharedFail()];
      }));
    })));
    // #endregion
    // #region ReqSendPairingNotification_Shared
    this.ReqSendPairingNotification_Shared$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.ofType)(_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.brokersActions.ReqSendPairingNotification_Shared), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.mergeMap)(({
      fromBroker,
      newRequest,
      brokerUid,
      clientUid
    }) => {
      return this.api.sendPairingNotification(fromBroker, newRequest, brokerUid, clientUid).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)(() => {
        return [_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.brokersActions.ReqSendPairingNotification_SharedSuccess()];
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.catchError)(error => {
        console.log('ReqSendPairingNotification_SharedFail: ', error.message);
        return [_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.brokersActions.ReqSendPairingNotification_SharedFail()];
      }));
    })));
    // #endregion
    // #region ReqCheckIfClientExists_Broker
    this.ReqCheckIfClientExists_Broker$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.ofType)(_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.brokersActions.ReqCheckIfClientExists_Broker), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)(({
      email
    }) => {
      return this.brokersService.getClientByEmail(email).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.mergeMap)(client => {
        if (client.length && !client[0].isBroker) {
          return [_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.brokersActions.ReqCheckIfClientExists_BrokerSuccess({
            client: client[0]
          })];
        }
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.catchError)(error => {
        console.log('ReqCheckIfClientExists_Broker: ', error);
        this.snackbar.open(error, 'CLOSE', _helpers_snackbar__WEBPACK_IMPORTED_MODULE_3__.errorConfig);
        return [_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.brokersActions.ReqCheckIfClientExists_BrokerFail()];
      }));
    })));
    // #endregion
    // #region ReqCheckIfClientHasBroker
    this.ReqCheckIfClientHasBroker$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.ofType)(_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.brokersActions.ReqCheckIfClientHasBroker), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)(({
      clientId
    }) => {
      return this.brokersService.getClientBrokerRequests(clientId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.mergeMap)(brokerRequests => {
        const result = (0,_helpers_brokerHelperFunctions__WEBPACK_IMPORTED_MODULE_7__.checkIfClientHasBroker)(clientId, brokerRequests);
        return [_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.brokersActions.ReqCheckIfClientHasBrokerSuccess({
          result
        })];
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.catchError)(error => {
        console.log('ReqCheckIfClientHasBroker: ', error);
        this.snackbar.open(error, 'CLOSE', _helpers_snackbar__WEBPACK_IMPORTED_MODULE_3__.errorConfig);
        return [_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.brokersActions.ReqCheckIfClientHasBrokerFail()];
      }));
    })));
    // #endregion
    // #region ReqGetBrokerRequest
    this.ReqGetBrokerRequest$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.ofType)(_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.brokersActions.ReqGetBrokerRequest), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)(({
      brokerUid,
      clientUid
    }) => {
      return this.brokersService.getBrokerRequest(brokerUid, clientUid).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.mergeMap)(brokerRequest => {
        return [_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.brokersActions.GetBrokerRequestSuccess({
          brokerRequest: brokerRequest.pop()
        })];
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.catchError)(error => {
        console.log('GetBrokerRequestFail: ', error);
        this.snackbar.open(error, 'CLOSE', _helpers_snackbar__WEBPACK_IMPORTED_MODULE_3__.errorConfig);
        return [_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.brokersActions.GetBrokerRequestFail()];
      }));
    })));
    // #endregion
    // #region ReqToggleBrokerAdminRole
    this.ReqToggleBrokerAdminRole$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.ofType)(_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.brokersActions.ReqToggleBrokerAdminRole), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)(({
      brokerUid,
      clientUid,
      adminRole
    }) => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.of)(this.brokersService.toggleBrokerAdminRole(brokerUid, clientUid, adminRole)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.mergeMap)(() => {
        return [_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.brokersActions.ToggleBrokerAdminRoleSuccess()];
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.catchError)(error => {
        console.log('ToggleBrokerAdminRoleFail: ', error);
        this.snackbar.open(error, 'CLOSE', _helpers_snackbar__WEBPACK_IMPORTED_MODULE_3__.errorConfig);
        return [_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.brokersActions.ToggleBrokerAdminRoleFail()];
      }));
    })));
    // #endregion
    // #region ReqToggleBrokerAdminRole
    this.ReqGetActiveClients_Broker$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.ofType)(_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.brokersActions.ReqGetActiveClients_Broker), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.mergeMap)(({
      clientIds
    }) => {
      return this.brokersService.getClients(clientIds).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.mergeMap)(clients => {
        if (clients) {
          return [_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.brokersActions.ReqGetActiveClients_BrokerSuccess({
            clients
          })];
        }
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.catchError)(error => {
        console.log('ReqGetActiveClients_Broker: ', error);
        this.snackbar.open(error, 'CLOSE', _helpers_snackbar__WEBPACK_IMPORTED_MODULE_3__.errorConfig);
        return [_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.brokersActions.ReqGetActiveClients_BrokerFail()];
      }));
    })));
    // #endregion
    // #region ReqGetPendingClients_Broker
    this.ReqGetPendingClients_Broker$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.ofType)(_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.brokersActions.ReqGetPendingClients_Broker), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.mergeMap)(({
      clientIds
    }) => {
      return this.brokersService.getClients(clientIds).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.mergeMap)(clients => {
        if (clients) {
          return [_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.brokersActions.ReqGetPendingClients_BrokerSuccess({
            clients
          })];
        }
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.catchError)(error => {
        console.log('ReqGetPendingClients_Broker: ', error);
        this.snackbar.open(error, 'CLOSE', _helpers_snackbar__WEBPACK_IMPORTED_MODULE_3__.errorConfig);
        return [_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.brokersActions.ReqGetPendingClients_BrokerFail()];
      }));
    })));
    // #endregion
    // #region ReqPendingBrokerRequests_Broker
    this.ReqPendingBrokerRequests_Broker$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.ofType)(_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.brokersActions.ReqPendingBrokerRequests_Broker), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.mergeMap)(({
      brokerUid
    }) => {
      return this.brokersService.getPendingBrokerRequests(brokerUid).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.mergeMap)(requests => {
        if (requests) {
          return [_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.brokersActions.ReqPendingBrokerRequests_BrokerSuccess({
            brokerRequests: requests
          })];
        }
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.catchError)(error => {
        console.log('ReqPendingBrokerRequests_Broker: ', error);
        this.snackbar.open(error, 'CLOSE', _helpers_snackbar__WEBPACK_IMPORTED_MODULE_3__.errorConfig);
        return [_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.brokersActions.ReqPendingBrokerRequests_BrokerFail()];
      }));
    })));
    // #endregion
    // #region ReqAcceptedBrokerRequests_Broker
    this.ReqAcceptedBrokerRequests_Broker$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.ofType)(_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.brokersActions.ReqAcceptedBrokerRequests_Broker), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)(({
      brokerUid
    }) => {
      return this.brokersService.getAcceptedBrokerRequests(brokerUid).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.mergeMap)(requests => {
        if (requests) {
          return [_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.brokersActions.ReqAcceptedBrokerRequests_BrokerSuccess({
            acceptedRequests: requests
          })];
        }
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.catchError)(error => {
        console.log('ReqAcceptedBrokerRequests_Broker: ', error);
        this.snackbar.open(error, 'CLOSE', _helpers_snackbar__WEBPACK_IMPORTED_MODULE_3__.errorConfig);
        return [_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.brokersActions.ReqAcceptedBrokerRequests_BrokerFail()];
      }));
    })));
    // #endregion
    // #endregion
    // #region Client Effects
    // #region ReqClientBrokerRequests_Client
    this.ReqClientBrokerRequests_Client$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.ofType)(_index__WEBPACK_IMPORTED_MODULE_1__.brokersActions.ReqClientBrokerRequests_Client), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.mergeMap)(payload => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(this.brokersService.getClientBrokerRequests(payload.uid)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.mergeMap)(brokerRequests => {
        return [_index__WEBPACK_IMPORTED_MODULE_1__.brokersActions.ReqClientBrokerRequests_ClientSuccess({
          brokerRequests: brokerRequests
        })];
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.catchError)(error => {
        console.log('ReqClientBrokerRequests_Client: ', error);
        return [_index__WEBPACK_IMPORTED_MODULE_1__.brokersActions.ReqClientBrokerRequests_ClientFail()];
      }));
    })));
    //#endregion
    // #region ReqClientsNotifications
    this.ReqClientsNotifications$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.ofType)(_index__WEBPACK_IMPORTED_MODULE_1__.brokersActions.ReqClientsNotifications), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.mergeMap)(payload => {
      return this.notifications.getClientsNotifications(payload.clientsUids).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.mergeMap)(notifications => {
        return [_index__WEBPACK_IMPORTED_MODULE_1__.brokersActions.ReqClientsNotificationsSuccess({
          notifications: notifications
        })];
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.catchError)(error => {
        console.log('ReqClientsNotifications: ', error);
        return [_index__WEBPACK_IMPORTED_MODULE_1__.brokersActions.ReqClientsNotificationsFail()];
      }));
    })));
    // #endregion
    // #region ReqCoordinates_Client
    this.ReqCoordinates_Client$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.ofType)(_index__WEBPACK_IMPORTED_MODULE_1__.brokersActions.ReqCoordinates_Client), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.mergeMap)(payload => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(this.brokersService.getGeocodedAddresses(payload.location)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.mergeMap)(coordinates => {
        return [_index__WEBPACK_IMPORTED_MODULE_1__.brokersActions.ReqCoordinates_ClientSuccess({
          coordinates
        })];
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.catchError)(error => {
        console.log('ReqCoordinates_Client: ', error);
        return [_index__WEBPACK_IMPORTED_MODULE_1__.brokersActions.ReqCoordinates_ClientFail()];
      }));
    })));
    // #endregion
    // #region ReqCreateNegotiationDocument
    this.ReqCreateNegotiationDocument$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.ofType)(_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.brokersActions.ReqCreateNegotiationDocument), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)(({
      lotMatchId,
      buyerEmail,
      sellerEmail,
      buyerPaid,
      sellerPaid
    }) => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(this.brokersService.createNegotiationDocument(lotMatchId, sellerEmail, buyerEmail, sellerPaid, buyerPaid)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)(response => {
        return [_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.brokersActions.CreateNegotiationDocumentSuccess({
          response
        })];
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.catchError)(error => {
        console.log('ReqCreateNegotiation_Client: ', error);
        return [_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.brokersActions.CreateNegotiationDocumentFail()];
      }));
    })));
    // #endregion
    // #region ReqUpdateNegotiationDocument
    this.ReqUpdateNegotiationDocument$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.ofType)(_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.brokersActions.ReqUpdateNegotiationDocument), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)(({
      brokerNegotiation
    }) => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(this.brokersService.updateBrokerNegotiationDocument(brokerNegotiation)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.switchMap)(response => {
        return [_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.brokersActions.UpdateNegotiationDocumentSuccess({
          response
        })];
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.catchError)(error => {
        console.log('ReqCreateNegotiation_Client: ', error);
        return [_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.brokersActions.UpdateNegotiationDocumentFail()];
      }));
    })));
    // #endregion
    // #region ReqGetBrokerNegotiationDocument
    this.ReqGetBrokerNegotiationDocument$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.ofType)(_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.brokersActions.ReqGetBrokerNegotiationDocuments), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.mergeMap)(({
      lotMatchIds
    }) => {
      return this.brokersService.getBrokerNegotiations(lotMatchIds).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.mergeMap)(brokerNegotiationDocs => {
        return [_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.brokersActions.GetBrokerNegotiationDocumentsSuccess({
          brokerNegotiationDocs
        })];
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.catchError)(error => {
        console.log('GetBrokerNegotiationDocumentFail: ', error);
        return [_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.brokersActions.GetBrokerNegotiationDocumentsFail];
      }));
    })));
    // #endregion
    // #region ReqSendIntroductionEmail
    this.ReqSendIntroductionEmail$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.ofType)(_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.brokersActions.ReqSendIntroductionEmail), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.mergeMap)(({
      lotMatchId
    }) => {
      return this.api.sendIntroductionEmail(lotMatchId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.mergeMap)(response => {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.from)(this.brokersService.updateBrokerNegotiationEmailStatus(response.lotMatchId)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.mergeMap)(() => {
          return [_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.brokersActions.SendIntroductionEmailSuccess];
        }));
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.catchError)(error => {
        console.log('SendIntroductionEmailFail: ', error);
        return [_index__WEBPACK_IMPORTED_MODULE_1__.brokersActions.SendIntroductionEmailFail()];
      }));
    })));
  }
  static #_ = this.ɵfac = function BrokersEffects_Factory(t) {
    return new (t || BrokersEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_services_brokers_brokers_service__WEBPACK_IMPORTED_MODULE_0__.BrokersService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_services_api_api_service__WEBPACK_IMPORTED_MODULE_5__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵinject"](_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_6__.NotificationsService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjectable"]({
    token: BrokersEffects,
    factory: BrokersEffects.ɵfac
  });
}

/***/ }),

/***/ 4684:
/*!******************************************************!*\
  !*** ./src/app/core/ngrx/brokers/brokers.actions.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClearBrokerRequest: () => (/* binding */ ClearBrokerRequest),
/* harmony export */   ClearClientObject_Broker: () => (/* binding */ ClearClientObject_Broker),
/* harmony export */   CreateNegotiationDocumentFail: () => (/* binding */ CreateNegotiationDocumentFail),
/* harmony export */   CreateNegotiationDocumentSuccess: () => (/* binding */ CreateNegotiationDocumentSuccess),
/* harmony export */   GetBrokerNegotiationDocumentsFail: () => (/* binding */ GetBrokerNegotiationDocumentsFail),
/* harmony export */   GetBrokerNegotiationDocumentsSuccess: () => (/* binding */ GetBrokerNegotiationDocumentsSuccess),
/* harmony export */   GetBrokerRequestFail: () => (/* binding */ GetBrokerRequestFail),
/* harmony export */   GetBrokerRequestSuccess: () => (/* binding */ GetBrokerRequestSuccess),
/* harmony export */   PopulateClientObject: () => (/* binding */ PopulateClientObject),
/* harmony export */   ReqAcceptRequest_Shared: () => (/* binding */ ReqAcceptRequest_Shared),
/* harmony export */   ReqAcceptRequest_SharedFail: () => (/* binding */ ReqAcceptRequest_SharedFail),
/* harmony export */   ReqAcceptRequest_SharedSuccess: () => (/* binding */ ReqAcceptRequest_SharedSuccess),
/* harmony export */   ReqAcceptedBrokerRequests_Broker: () => (/* binding */ ReqAcceptedBrokerRequests_Broker),
/* harmony export */   ReqAcceptedBrokerRequests_BrokerFail: () => (/* binding */ ReqAcceptedBrokerRequests_BrokerFail),
/* harmony export */   ReqAcceptedBrokerRequests_BrokerSuccess: () => (/* binding */ ReqAcceptedBrokerRequests_BrokerSuccess),
/* harmony export */   ReqBrokerTermsCheck_Client: () => (/* binding */ ReqBrokerTermsCheck_Client),
/* harmony export */   ReqBrokersAndDistance_Shared: () => (/* binding */ ReqBrokersAndDistance_Shared),
/* harmony export */   ReqBrokersAndDistance_SharedFail: () => (/* binding */ ReqBrokersAndDistance_SharedFail),
/* harmony export */   ReqBrokersAndDistance_SharedSuccess: () => (/* binding */ ReqBrokersAndDistance_SharedSuccess),
/* harmony export */   ReqCheckIfClientExists_Broker: () => (/* binding */ ReqCheckIfClientExists_Broker),
/* harmony export */   ReqCheckIfClientExists_BrokerFail: () => (/* binding */ ReqCheckIfClientExists_BrokerFail),
/* harmony export */   ReqCheckIfClientExists_BrokerSuccess: () => (/* binding */ ReqCheckIfClientExists_BrokerSuccess),
/* harmony export */   ReqCheckIfClientHasBroker: () => (/* binding */ ReqCheckIfClientHasBroker),
/* harmony export */   ReqCheckIfClientHasBrokerFail: () => (/* binding */ ReqCheckIfClientHasBrokerFail),
/* harmony export */   ReqCheckIfClientHasBrokerSuccess: () => (/* binding */ ReqCheckIfClientHasBrokerSuccess),
/* harmony export */   ReqClientBrokerRequests_Client: () => (/* binding */ ReqClientBrokerRequests_Client),
/* harmony export */   ReqClientBrokerRequests_ClientFail: () => (/* binding */ ReqClientBrokerRequests_ClientFail),
/* harmony export */   ReqClientBrokerRequests_ClientSuccess: () => (/* binding */ ReqClientBrokerRequests_ClientSuccess),
/* harmony export */   ReqClientsNotifications: () => (/* binding */ ReqClientsNotifications),
/* harmony export */   ReqClientsNotificationsFail: () => (/* binding */ ReqClientsNotificationsFail),
/* harmony export */   ReqClientsNotificationsSuccess: () => (/* binding */ ReqClientsNotificationsSuccess),
/* harmony export */   ReqCoordinates_Client: () => (/* binding */ ReqCoordinates_Client),
/* harmony export */   ReqCoordinates_ClientFail: () => (/* binding */ ReqCoordinates_ClientFail),
/* harmony export */   ReqCoordinates_ClientSuccess: () => (/* binding */ ReqCoordinates_ClientSuccess),
/* harmony export */   ReqCreateNegotiationDocument: () => (/* binding */ ReqCreateNegotiationDocument),
/* harmony export */   ReqCreateRequest_Shared: () => (/* binding */ ReqCreateRequest_Shared),
/* harmony export */   ReqCreateRequest_SharedFail: () => (/* binding */ ReqCreateRequest_SharedFail),
/* harmony export */   ReqCreateRequest_SharedSuccess: () => (/* binding */ ReqCreateRequest_SharedSuccess),
/* harmony export */   ReqDeleteRequest_Shared: () => (/* binding */ ReqDeleteRequest_Shared),
/* harmony export */   ReqDeleteRequest_SharedFail: () => (/* binding */ ReqDeleteRequest_SharedFail),
/* harmony export */   ReqDeleteRequest_SharedSuccess: () => (/* binding */ ReqDeleteRequest_SharedSuccess),
/* harmony export */   ReqGetActiveClients_Broker: () => (/* binding */ ReqGetActiveClients_Broker),
/* harmony export */   ReqGetActiveClients_BrokerFail: () => (/* binding */ ReqGetActiveClients_BrokerFail),
/* harmony export */   ReqGetActiveClients_BrokerSuccess: () => (/* binding */ ReqGetActiveClients_BrokerSuccess),
/* harmony export */   ReqGetBrokerNegotiationDocuments: () => (/* binding */ ReqGetBrokerNegotiationDocuments),
/* harmony export */   ReqGetBrokerRequest: () => (/* binding */ ReqGetBrokerRequest),
/* harmony export */   ReqGetPendingClients_Broker: () => (/* binding */ ReqGetPendingClients_Broker),
/* harmony export */   ReqGetPendingClients_BrokerFail: () => (/* binding */ ReqGetPendingClients_BrokerFail),
/* harmony export */   ReqGetPendingClients_BrokerSuccess: () => (/* binding */ ReqGetPendingClients_BrokerSuccess),
/* harmony export */   ReqPendingBrokerRequests_Broker: () => (/* binding */ ReqPendingBrokerRequests_Broker),
/* harmony export */   ReqPendingBrokerRequests_BrokerFail: () => (/* binding */ ReqPendingBrokerRequests_BrokerFail),
/* harmony export */   ReqPendingBrokerRequests_BrokerSuccess: () => (/* binding */ ReqPendingBrokerRequests_BrokerSuccess),
/* harmony export */   ReqSendIntroductionEmail: () => (/* binding */ ReqSendIntroductionEmail),
/* harmony export */   ReqSendPairingNotification_Shared: () => (/* binding */ ReqSendPairingNotification_Shared),
/* harmony export */   ReqSendPairingNotification_SharedFail: () => (/* binding */ ReqSendPairingNotification_SharedFail),
/* harmony export */   ReqSendPairingNotification_SharedSuccess: () => (/* binding */ ReqSendPairingNotification_SharedSuccess),
/* harmony export */   ReqToggleBrokerAdminRole: () => (/* binding */ ReqToggleBrokerAdminRole),
/* harmony export */   ReqUpdateNegotiationDocument: () => (/* binding */ ReqUpdateNegotiationDocument),
/* harmony export */   ResetActiveClientsState: () => (/* binding */ ResetActiveClientsState),
/* harmony export */   ResetPendingClientsState: () => (/* binding */ ResetPendingClientsState),
/* harmony export */   SendIntroductionEmailFail: () => (/* binding */ SendIntroductionEmailFail),
/* harmony export */   SendIntroductionEmailSuccess: () => (/* binding */ SendIntroductionEmailSuccess),
/* harmony export */   ToggleBrokerAdminRoleFail: () => (/* binding */ ToggleBrokerAdminRoleFail),
/* harmony export */   ToggleBrokerAdminRoleSuccess: () => (/* binding */ ToggleBrokerAdminRoleSuccess),
/* harmony export */   UpdateNegotiationDocumentFail: () => (/* binding */ UpdateNegotiationDocumentFail),
/* harmony export */   UpdateNegotiationDocumentSuccess: () => (/* binding */ UpdateNegotiationDocumentSuccess)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 6270);

// #region Shared Broker/Client Actions
// #region ReqBrokersAndDistance_Shared
const ReqBrokersAndDistance_Shared = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Brokers & Brokers Dashboard] ReqBrokersAndDistance_Shared', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const ReqBrokersAndDistance_SharedSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqBrokersAndDistance_Shared] ReqBrokersAndDistance_SharedSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const ReqBrokersAndDistance_SharedFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqBrokersAndDistance_Shared] ReqBrokersAndDistance_SharedFail');
// #endregion
// #region ReqCreateRequest_Shared
const ReqCreateRequest_Shared = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Request Broker Modal & Broker Dashboard] ReqCreateRequest_Shared', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const ReqCreateRequest_SharedSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqCreateRequest_Shared] ReqCreateRequest_SharedSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const ReqCreateRequest_SharedFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqCreateRequest_Shared] ReqCreateRequest_SharedFail');
// #endregion
// #region ReqAcceptRequest_Shared
const ReqAcceptRequest_Shared = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Pending Request Modal & Broker Dashboard] ReqAcceptRequest_Shared', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const ReqAcceptRequest_SharedSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqAcceptRequest_Shared] ReqAcceptRequest_SharedSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const ReqAcceptRequest_SharedFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqAcceptRequest_Shared] ReqAcceptRequest_SharedFail');
// #endregion
// #region ReqDeleteRequest_Shared
const ReqDeleteRequest_Shared = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Broker Dashboard & Pending Request Modal] ReqDeleteRequest_Shared', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const ReqDeleteRequest_SharedFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqDeleteRequest_Shared] ReqDeleteRequest_SharedFail');
const ReqDeleteRequest_SharedSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqDeleteRequest_Shared] ReqDeleteRequest_SharedSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// #endregion
// #region ReqSendPairingNotification
const ReqSendPairingNotification_Shared = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Request Broker Modal & Add New Client Modal] ReqSendPairingNotification_Shared', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const ReqSendPairingNotification_SharedSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqSendPairingNotification_Shared] ReqSendPairingNotification_SharedSuccess');
const ReqSendPairingNotification_SharedFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqSendPairingNotification_Shared] ReqSendPairingNotification_SharedFail');
// #region Populate/Hydrate Client Object
const PopulateClientObject = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Broker Dashboard] [NF] [SCU] PopulateClientObject', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// #region Broker Actions
// #region ClearClientObject_Broker
const ClearClientObject_Broker = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Broker Dashboard] [NF] [SCU] ClearClientObject_Broker');
// #endregion
// #region ReqCheckIfClientExists_Broker
const ReqCheckIfClientExists_Broker = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Broker Dashboard] ReqCheckIfClientExists_Broker', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const ReqCheckIfClientExists_BrokerFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Broker Dashboard] ReqCheckIfClientExists_BrokerFail');
const ReqCheckIfClientExists_BrokerSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Broker Dashboard] ReqCheckIfClientExists_BrokerSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// #endregion
// #region ReqCheckIfClientHasBroker
const ReqCheckIfClientHasBroker = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Add New Client Modal] ReqCheckIfClientHasBroker', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const ReqCheckIfClientHasBrokerFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Add New Client Modal] ReqCheckIfClientHasBrokerFail');
const ReqCheckIfClientHasBrokerSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Add New Client Modal] ReqCheckIfClientHasBrokerSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// #endregion
// #region ReqGetActiveClients_Broker
const ReqGetActiveClients_Broker = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Broker Dashboard] ReqGetActiveClients_Broker', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const ReqGetActiveClients_BrokerFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Broker Dashboard] ReqGetActiveClients_BrokerFail');
const ReqGetActiveClients_BrokerSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Broker Dashboard] ReqGetActiveClients_BrokerSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const ResetActiveClientsState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Broker Dashboard] [NF] [SCU] ResetActiveClientsState');
// #endregion
// #region ReqGetPendingClients_Broker
const ReqGetPendingClients_Broker = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Broker Dashboard] ReqGetPendingClients_Broker', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const ReqGetPendingClients_BrokerFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Broker Dashboard] ReqGetPendingClients_BrokerFail');
const ReqGetPendingClients_BrokerSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Broker Dashboard] ReqGetPendingClients_BrokerSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const ResetPendingClientsState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Broker Dashboard] [NF] [SCU] ResetPendingClientsState');
// #endregion
// #region ReqPendingBrokerRequests_Broker
const ReqPendingBrokerRequests_Broker = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Broker Dashboard] ReqPendingBrokerRequests_Broker', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const ReqPendingBrokerRequests_BrokerFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Broker Dashboard] ReqPendingBrokerRequests_BrokerFail');
const ReqPendingBrokerRequests_BrokerSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Broker Dashboard] ReqPendingBrokerRequests_BrokerSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// #endregion
// #region ReqAcceptedBrokerRequests_Broker
const ReqAcceptedBrokerRequests_Broker = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Broker Dashboard] ReqAcceptedBrokerRequests_Broker', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const ReqAcceptedBrokerRequests_BrokerFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Broker Dashboard] ReqAcceptedBrokerRequests_BrokerFail');
const ReqAcceptedBrokerRequests_BrokerSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Broker Dashboard] ReqAcceptedBrokerRequests_BrokerSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// #endregion
// #endregion
// #region Client Actions
// #region ReqBrokerTermsCheck_Client
const ReqBrokerTermsCheck_Client = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Brokers] [NF] [SCU] ReqBrokerTermsCheck_Client');
// #endregion
// #region ReqClientBrokerRequests_Client
const ReqClientBrokerRequests_Client = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Brokers] ReqClientBrokerRequests_Client', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const ReqClientBrokerRequests_ClientSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqClientBrokerRequests_Client] ReqClientBrokerRequests_ClientSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const ReqClientBrokerRequests_ClientFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqClientBrokerRequests_Client] ReqClientBrokerRequests_ClientFail');
// #endregion
// #region ReqCoordinates_Client
const ReqCoordinates_Client = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Brokers] ReqCoordinates_Client', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const ReqCoordinates_ClientSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqCoordinates_Client] ReqCoordinates_ClientSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const ReqCoordinates_ClientFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqCoordinates_Client] ReqCoordinates_ClientFail');
// #endregion
// #region ReqCreateNegotiationDocument
const ReqCreateNegotiationDocument = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Request Broker Modal & Broker Dashboard] ReqCreateNegotiation', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const CreateNegotiationDocumentSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqCreateNegotiation_Client] CreateNegotiationDocumentSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const CreateNegotiationDocumentFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqCreateNegotiation_Client] CreateNegotiationDocumentFail');
// #endregion
// #region ReqUpdateNegotiationDocument
const ReqUpdateNegotiationDocument = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Request Broker Modal & Broker Dashboard] ReqUpdateNegotiationDocument', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const UpdateNegotiationDocumentSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqUpdateNegotiationDocument] UpdateNegotiationDocumentSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const UpdateNegotiationDocumentFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqUpdateNegotiationDocument] UpdateNegotiationDocumentFail');
// #endregion
// #region Get Broker-Client Negotiation Document
const ReqGetBrokerNegotiationDocuments = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Negotiation page] ReqGetBrokerNegotiationDocument', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const GetBrokerNegotiationDocumentsSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqGetBrokerNegotiationDocument] GetBrokerNegotiationDocumentSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const GetBrokerNegotiationDocumentsFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqGetBrokerNegotiationDocument] GetBrokerNegotiationDocumentFail');
// #endregion
const ReqSendIntroductionEmail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Negotiation Card] ReqSendIntroductionEmail', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const SendIntroductionEmailSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqSendIntroductionEmail] SendIntroductionEmailSuccess');
const SendIntroductionEmailFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqSendIntroductionEmail] SendIntroductionEmailFail');
// #endregion
// #region ReqClientsNotifications
const ReqClientsNotifications = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Broker Dashboard] ReqClientsNotifications', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const ReqClientsNotificationsSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqClientsNotifications] ReqClientsNotificationsSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const ReqClientsNotificationsFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqClientsNotifications] ReqClientsNotificationsFail');
// #endregion
// #region ReqGetBrokerRequest
const ReqGetBrokerRequest = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ Negotiation ] ReqGetBrokerRequest', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const GetBrokerRequestSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ Negotiation ] GetBrokerRequestSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const GetBrokerRequestFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ Negotiation ] GetBrokerRequestFail');
const ClearBrokerRequest = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ Negotiation ] ClearBrokerRequest');
// #endregion
// #region ReqToggleBrokerAdminRole
const ReqToggleBrokerAdminRole = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ Brokers Component ] ReqToggleBrokerAdminRole', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const ToggleBrokerAdminRoleSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ Brokers Component ] ToggleBrokerAdminRoleSuccess');
const ToggleBrokerAdminRoleFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ Brokers Component ] ToggleBrokerAdminRoleFail');
// #endregion

/***/ }),

/***/ 1893:
/*!******************************************************!*\
  !*** ./src/app/core/ngrx/brokers/brokers.reducer.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   brokersFeatureKey: () => (/* binding */ brokersFeatureKey),
/* harmony export */   initialState: () => (/* binding */ initialState),
/* harmony export */   reducer: () => (/* binding */ reducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _brokers_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./brokers.actions */ 4684);
/* harmony import */ var _helpers_helperFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/helperFunctions */ 1468);
/* harmony import */ var _helpers_brokerHelperFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/brokerHelperFunctions */ 8215);




const brokersFeatureKey = 'brokers';
const initialState = {
  brokers: getBrokersFromLocalStorage(),
  broker: undefined,
  activeClients: [],
  acceptedRequests: [],
  pendingClients: [],
  pendingRequests: [],
  client: getClientFromLocalStorage(),
  brokerRequest: getBrokerRequestFromLocalStorage(),
  seenTsAndCs: false,
  clientBrokerRequests: getClientBrokerRequestsFromLocalStorage(),
  clientsNotifications: {},
  brokerNegotiations: []
};
function getClientFromLocalStorage() {
  const localStorageValue = localStorage.getItem('client');
  return localStorageValue !== 'undefined' ? JSON.parse(localStorageValue) : null;
}
function getBrokerRequestFromLocalStorage() {
  const localStorageValue = localStorage.getItem('brokerRequest');
  return localStorageValue !== 'undefined' ? JSON.parse(localStorageValue) : null;
}
function getClientBrokerRequestsFromLocalStorage() {
  const localStorageValue = localStorage.getItem('ClientBrokerRequests');
  return localStorageValue !== 'undefined' ? JSON.parse(localStorageValue) : null;
}
function getBrokersFromLocalStorage() {
  const localStorageValue = localStorage.getItem('Brokers');
  return localStorageValue !== 'undefined' ? JSON.parse(localStorageValue) : null;
}
const reducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_brokers_actions__WEBPACK_IMPORTED_MODULE_0__.ReqBrokerTermsCheck_Client, (state, action) => {
  return {
    ...state,
    seenTsAndCs: true
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_brokers_actions__WEBPACK_IMPORTED_MODULE_0__.ReqBrokersAndDistance_SharedSuccess, (state, action) => {
  localStorage.setItem('Brokers', JSON.stringify(action.brokers));
  return {
    ...state,
    brokers: action.brokers
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_brokers_actions__WEBPACK_IMPORTED_MODULE_0__.ReqClientBrokerRequests_ClientSuccess, (state, action) => {
  localStorage.setItem('ClientBrokerRequests', JSON.stringify(action.brokerRequests));
  return {
    ...state,
    clientBrokerRequests: action.brokerRequests
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_brokers_actions__WEBPACK_IMPORTED_MODULE_0__.ReqCheckIfClientExists_BrokerSuccess, _brokers_actions__WEBPACK_IMPORTED_MODULE_0__.PopulateClientObject, (state, action) => {
  localStorage.setItem('client', JSON.stringify(action.client));
  return {
    ...state,
    client: action.client
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_brokers_actions__WEBPACK_IMPORTED_MODULE_0__.ClearClientObject_Broker, (state, action) => {
  localStorage.removeItem('client');
  return {
    ...state,
    client: undefined
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_brokers_actions__WEBPACK_IMPORTED_MODULE_0__.GetBrokerRequestSuccess, (state, action) => {
  localStorage.setItem('brokerRequest', JSON.stringify(action.brokerRequest));
  return {
    ...state,
    brokerRequest: action.brokerRequest
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_brokers_actions__WEBPACK_IMPORTED_MODULE_0__.ClearBrokerRequest, (state, action) => {
  localStorage.removeItem('brokerRequest');
  return {
    ...state,
    brokerRequest: undefined
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_brokers_actions__WEBPACK_IMPORTED_MODULE_0__.ReqGetActiveClients_BrokerSuccess, (state, action) => {
  let clients = [];
  if (state.activeClients.length) {
    clients = (0,_helpers_brokerHelperFunctions__WEBPACK_IMPORTED_MODULE_2__.newClientsListWithoutDuplicates)(state.activeClients, action.clients);
  } else {
    clients = action.clients;
  }
  return {
    ...state,
    activeClients: clients
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_brokers_actions__WEBPACK_IMPORTED_MODULE_0__.ResetActiveClientsState, (state, action) => {
  return {
    ...state,
    activeClients: []
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_brokers_actions__WEBPACK_IMPORTED_MODULE_0__.ResetPendingClientsState, (state, action) => {
  return {
    ...state,
    pendingClients: []
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_brokers_actions__WEBPACK_IMPORTED_MODULE_0__.ReqGetPendingClients_BrokerSuccess, (state, action) => {
  let clients;
  if (state.pendingClients.length) {
    clients = (0,_helpers_brokerHelperFunctions__WEBPACK_IMPORTED_MODULE_2__.newClientsListWithoutDuplicates)(state.pendingClients, action.clients);
  } else {
    clients = action.clients;
  }
  return {
    ...state,
    pendingClients: clients
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_brokers_actions__WEBPACK_IMPORTED_MODULE_0__.ReqPendingBrokerRequests_BrokerSuccess, (state, action) => {
  return {
    ...state,
    pendingRequests: action.brokerRequests
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_brokers_actions__WEBPACK_IMPORTED_MODULE_0__.ReqAcceptedBrokerRequests_BrokerSuccess, (state, action) => {
  return {
    ...state,
    acceptedRequests: action.acceptedRequests
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_brokers_actions__WEBPACK_IMPORTED_MODULE_0__.ReqDeleteRequest_SharedSuccess, (state, action) => {
  return {
    ...state,
    pendingRequests: state.pendingRequests.filter(pendingRequest => pendingRequest.clientUid !== action.clientUid),
    pendingClients: state.pendingClients.filter(pendingClient => pendingClient.uid !== action.clientUid),
    acceptedRequests: state.acceptedRequests.filter(pendingRequest => pendingRequest.clientUid !== action.clientUid),
    activeClients: state.activeClients.filter(pendingClient => pendingClient.uid !== action.clientUid)
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_brokers_actions__WEBPACK_IMPORTED_MODULE_0__.ReqClientsNotificationsSuccess, (state, action) => {
  const notificationDict = {};
  state.acceptedRequests.map(request => notificationDict[request.clientUid] = (0,_helpers_helperFunctions__WEBPACK_IMPORTED_MODULE_1__.getClientNotificationsCountHelper)(request.clientUid, action.notifications));
  return {
    ...state,
    clientsNotifications: notificationDict
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_brokers_actions__WEBPACK_IMPORTED_MODULE_0__.GetBrokerNegotiationDocumentsSuccess, (state, action) => {
  let newBrokerNegotiations = [];
  if (state.brokerNegotiations.length) {
    newBrokerNegotiations = state.brokerNegotiations;
    newBrokerNegotiations.concat(action.brokerNegotiationDocs);
  } else {
    newBrokerNegotiations = action.brokerNegotiationDocs;
  }
  return {
    ...state,
    brokerNegotiations: newBrokerNegotiations
  };
}));

/***/ }),

/***/ 2414:
/*!********************************************************!*\
  !*** ./src/app/core/ngrx/brokers/brokers.selectors.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAcceptedRequests: () => (/* binding */ getAcceptedRequests),
/* harmony export */   getActiveClients: () => (/* binding */ getActiveClients),
/* harmony export */   getBrokerRequest: () => (/* binding */ getBrokerRequest),
/* harmony export */   getBrokerTermsCheck: () => (/* binding */ getBrokerTermsCheck),
/* harmony export */   getBrokers: () => (/* binding */ getBrokers),
/* harmony export */   getClientNotificationsCount: () => (/* binding */ getClientNotificationsCount),
/* harmony export */   getClientsBrokerRequests: () => (/* binding */ getClientsBrokerRequests),
/* harmony export */   getCurrentClient: () => (/* binding */ getCurrentClient),
/* harmony export */   getFilteredBrokers: () => (/* binding */ getFilteredBrokers),
/* harmony export */   getFilteredRequests: () => (/* binding */ getFilteredRequests),
/* harmony export */   getNegotiationDocuments: () => (/* binding */ getNegotiationDocuments),
/* harmony export */   getPendingClients: () => (/* binding */ getPendingClients),
/* harmony export */   getPendingRequests: () => (/* binding */ getPendingRequests),
/* harmony export */   selectBrokersState: () => (/* binding */ selectBrokersState)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _helpers_helperFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/helperFunctions */ 1468);
/* harmony import */ var _brokers_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./brokers.reducer */ 1893);



const selectBrokersState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createFeatureSelector)(_brokers_reducer__WEBPACK_IMPORTED_MODULE_1__.brokersFeatureKey);
const getBrokers = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectBrokersState, brokersState => {
  return brokersState.brokers;
});
const getClientsBrokerRequests = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectBrokersState, brokersState => {
  return brokersState.clientBrokerRequests;
});
const getBrokerRequest = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectBrokersState, brokersState => {
  return brokersState.brokerRequest;
});
const getBrokerTermsCheck = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectBrokersState, brokersState => {
  return brokersState.seenTsAndCs;
});
const getCurrentClient = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectBrokersState, brokersState => {
  return brokersState.client;
});
const getActiveClients = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectBrokersState, brokersState => {
  return brokersState.activeClients;
});
const getPendingClients = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectBrokersState, brokersState => {
  return brokersState.pendingClients;
});
const getPendingRequests = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectBrokersState, brokersState => {
  return brokersState.pendingRequests;
});
const getAcceptedRequests = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectBrokersState, brokersState => {
  return brokersState.acceptedRequests;
});
const getClientNotificationsCount = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectBrokersState, brokersState => {
  return brokersState.clientsNotifications;
});
const getNegotiationDocuments = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectBrokersState, brokersState => {
  return brokersState.brokerNegotiations;
});
const getFilteredBrokers = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(getBrokers, getClientsBrokerRequests, (broker, brokerRequests) => {
  var activeBroker;
  var brokerList;
  if (brokerRequests.length) {
    let activeBrokerRequest = brokerRequests.filter(({
      acceptedRequest,
      expiryDate
    }) => acceptedRequest && expiryDate >= Date.now());
    activeBroker = broker.filter(({
      uid
    }) => uid === activeBrokerRequest[0]?.brokerUid)[0];
    if (activeBroker) {
      return {
        activeBroker: activeBroker
      };
    }
  }
  if (broker.length && !activeBroker) {
    let sortedBrokers = [...broker];
    sortedBrokers.sort((a, b) => a.distance - b.distance);
    brokerList = sortedBrokers;
    if (brokerRequests.length) {
      let brokerRequestUids = brokerRequests.map(brokerRequest => brokerRequest.brokerUid);
      let filteredBrokers = sortedBrokers.filter(broker => !brokerRequestUids.includes(broker.uid));
      brokerList = filteredBrokers;
    }
    return {
      brokerList: brokerList
    };
  } else {
    return {
      brokerList: []
    };
  }
});
const getFilteredRequests = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(getBrokers, getClientsBrokerRequests, (brokers, brokerRequests) => {
  if (brokers.length && brokerRequests.length) {
    let fromClientRequests = (0,_helpers_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.filterBrokerHelper)(brokerRequests, brokers, false);
    let fromBrokerRequests = (0,_helpers_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.filterBrokerHelper)(brokerRequests, brokers, true);
    return {
      fromClientRequests: fromClientRequests,
      fromBrokerRequests: fromBrokerRequests
    };
  }
});

/***/ }),

/***/ 1199:
/*!********************************************!*\
  !*** ./src/app/core/ngrx/brokers/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   brokersActions: () => (/* reexport module object */ _brokers_actions__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   brokersFeatureKey: () => (/* reexport safe */ _brokers_reducer__WEBPACK_IMPORTED_MODULE_2__.brokersFeatureKey),
/* harmony export */   brokersReducer: () => (/* reexport safe */ _brokers_reducer__WEBPACK_IMPORTED_MODULE_2__.reducer),
/* harmony export */   brokersSelectors: () => (/* reexport module object */ _brokers_selectors__WEBPACK_IMPORTED_MODULE_1__)
/* harmony export */ });
/* harmony import */ var _brokers_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./brokers.actions */ 4684);
/* harmony import */ var _brokers_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./brokers.selectors */ 2414);
/* harmony import */ var _brokers_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./brokers.reducer */ 1893);





/***/ }),

/***/ 7634:
/*!************************************************!*\
  !*** ./src/app/core/ngrx/crop/crop.actions.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AllCropsFail: () => (/* binding */ AllCropsFail),
/* harmony export */   AllCropsSuccess: () => (/* binding */ AllCropsSuccess),
/* harmony export */   CropGradesFail: () => (/* binding */ CropGradesFail),
/* harmony export */   CropGradesSuccess: () => (/* binding */ CropGradesSuccess),
/* harmony export */   CropMonthsAndGradesFail: () => (/* binding */ CropMonthsAndGradesFail),
/* harmony export */   CropMonthsAndGradesSuccess: () => (/* binding */ CropMonthsAndGradesSuccess),
/* harmony export */   CropMonthsFail: () => (/* binding */ CropMonthsFail),
/* harmony export */   CropMonthsSuccess: () => (/* binding */ CropMonthsSuccess),
/* harmony export */   CropPackagingFail: () => (/* binding */ CropPackagingFail),
/* harmony export */   CropPackagingSuccess: () => (/* binding */ CropPackagingSuccess),
/* harmony export */   ReqAllCrops: () => (/* binding */ ReqAllCrops),
/* harmony export */   ReqCropCategories: () => (/* binding */ ReqCropCategories),
/* harmony export */   ReqCropCategoriesFail: () => (/* binding */ ReqCropCategoriesFail),
/* harmony export */   ReqCropCategoriesSuccess: () => (/* binding */ ReqCropCategoriesSuccess),
/* harmony export */   ReqCropGrades: () => (/* binding */ ReqCropGrades),
/* harmony export */   ReqCropMonths: () => (/* binding */ ReqCropMonths),
/* harmony export */   ReqCropMonthsAndGrades: () => (/* binding */ ReqCropMonthsAndGrades),
/* harmony export */   ReqCropPackaging: () => (/* binding */ ReqCropPackaging)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 6270);

//#region Read
// #region ReqAllCrops
const ReqAllCrops = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Market Page] ReqAllCrops');
const AllCropsFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqAllCrops] AllCropsFail');
const AllCropsSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqAllCrops] AllCropsSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// #endregion
// #region ReqCropCategories
const ReqCropCategories = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Form Page] ReqCropCategories');
const ReqCropCategoriesFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqCropCategories] ReqCropCategoriesFail');
const ReqCropCategoriesSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqCropCategories] ReqCropCategoriesSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// #endregion
// #region ReqCropGrades
const ReqCropGrades = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Create Lot Page] ReqCropGrades', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const CropGradesFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqCropGrades] CropGradesFail');
const CropGradesSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqCropGrades] CropGradesSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// #endregion
// #region ReqCropMonths
const ReqCropMonths = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Create Lot Page] ReqCropMonths', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const CropMonthsFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqCropMonths] CropMonthsFail');
const CropMonthsSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqCropMonths] CropMonthsSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// #endregion
// #region ReqCropMonthsAndGrades
const ReqCropMonthsAndGrades = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Create Lot Page] ReqCropMonthsAndGrades', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const CropMonthsAndGradesFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqCropMonthsAndGrades] CropMonthsAndGradesFail');
const CropMonthsAndGradesSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqCropMonthsAndGrades] CropMonthsAndGradesSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// #endregion
// #region ReqCropPackaging
const ReqCropPackaging = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Create Lot Page] ReqCropPackaging', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const CropPackagingFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqCropPackaging] CropPackagingFail');
const CropPackagingSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqCropPackaging] CropPackagingSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// #endregion
// #endregion

/***/ }),

/***/ 5614:
/*!************************************************!*\
  !*** ./src/app/core/ngrx/crop/crop.effects.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CropEffects: () => (/* binding */ CropEffects)
/* harmony export */ });
/* harmony import */ var _services_crop_crop_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/crop/crop.service */ 8157);
/* harmony import */ var src_app_core_services_api_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/api/api.service */ 7588);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ 1575);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 1891);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 2607);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 2389);
/* harmony import */ var src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/helpers/index.actions */ 5626);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);









class CropEffects {
  // #endregion
  constructor(actions$, api, cropService) {
    this.actions$ = actions$;
    this.api = api;
    this.cropService = cropService;
    // #region ReqAllCrops
    this.ReqAllCrops$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.cropActions.ReqAllCrops), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(() => {
      return this.api.getAllCrops().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.mergeMap)(crops => {
        return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.cropActions.AllCropsSuccess({
          crops
        })];
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => {
        console.log('ReqAllCrops: ', error.message);
        return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.cropActions.AllCropsFail()];
      }));
    })));
    // endregion
    // #region ReqAllCrops
    this.ReqCropCategories$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.cropActions.ReqCropCategories), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(() => {
      return this.api.getCropCategories().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.mergeMap)(cropCategories => {
        return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.cropActions.ReqCropCategoriesSuccess({
          cropCategories
        })];
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => {
        console.log('ReqCropCategories: ', error.message);
        return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.cropActions.ReqCropCategoriesFail()];
      }));
    })));
    // endregion
    // #region ReqCropGrades
    this.ReqCropGrades$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.cropActions.ReqCropGrades), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(payload => {
      return this.api.getCropGrades(payload.cropId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.mergeMap)(grades => {
        return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.cropActions.CropGradesSuccess({
          grades
        })];
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => {
        console.log('ReqCropGrades: ', error.message);
        return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.cropActions.CropGradesFail()];
      }));
    })));
    // #endregion
    // #region ReqCropMonths
    this.ReqCropMonths$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.cropActions.ReqCropMonths), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(payload => {
      return this.api.getCropMonths(payload.cropId, payload.exchangeId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.mergeMap)(safexMonths => {
        return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.cropActions.CropMonthsSuccess({
          safexMonths
        })];
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => {
        console.log('ReqCropMonths: ', error.message);
        return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.cropActions.CropMonthsFail()];
      }));
    })));
    // #endregion
    // #region ReqCropMonthsAndGrades
    this.ReqCropMonthsAndGrades$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.cropActions.ReqCropMonthsAndGrades), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(payload => {
      return this.cropService.getCropMonthsAndGrades(payload.cropId, payload.exchangeId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.mergeMap)(([safexMonths, grades]) => {
        return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.cropActions.CropMonthsAndGradesSuccess({
          safexMonths,
          grades
        })];
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => {
        console.log('ReqCropMonthsAndGrades: ', error.message);
        return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.cropActions.CropMonthsAndGradesFail()];
      }));
    })));
    // #endregion
    // #region ReqCropPackaging
    this.ReqCropPackaging$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.cropActions.ReqCropPackaging), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(payload => {
      return this.api.getCropPackaging(payload.cropId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.mergeMap)(cropPackaging => {
        return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.cropActions.CropPackagingSuccess({
          cropPackaging
        })];
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => {
        console.log('ReqCropPackaging: ', error.message);
        return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.cropActions.CropPackagingFail()];
      }));
    })));
  }
  static #_ = this.ɵfac = function CropEffects_Factory(t) {
    return new (t || CropEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](src_app_core_services_api_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_services_crop_crop_service__WEBPACK_IMPORTED_MODULE_0__.CropService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
    token: CropEffects,
    factory: CropEffects.ɵfac
  });
}

/***/ }),

/***/ 9589:
/*!************************************************!*\
  !*** ./src/app/core/ngrx/crop/crop.reducer.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cropFeatureKey: () => (/* binding */ cropFeatureKey),
/* harmony export */   initialState: () => (/* binding */ initialState),
/* harmony export */   reducer: () => (/* binding */ reducer)
/* harmony export */ });
/* harmony import */ var _authState_auth_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../authState/auth.actions */ 6189);
/* harmony import */ var _entities_match_match_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../entities/match/match.actions */ 8603);
/* harmony import */ var _entities_lot_lot_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../entities/lot/lot.actions */ 4981);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _crop_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crop.actions */ 7634);
/* harmony import */ var _entities_scout_scout_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../entities/scout/scout.actions */ 7993);






const cropFeatureKey = 'crop';
const initialState = {
  crops: [],
  cropCategories: [],
  exchanges: []
};
const reducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.on)(_entities_lot_lot_actions__WEBPACK_IMPORTED_MODULE_2__.LotFormDataSuccess, _entities_scout_scout_actions__WEBPACK_IMPORTED_MODULE_4__.ScoutFormDataSuccess, _crop_actions__WEBPACK_IMPORTED_MODULE_3__.AllCropsSuccess, _entities_match_match_actions__WEBPACK_IMPORTED_MODULE_1__.LotMatchFormDataSuccess, (state, {
  ...payload
}) => {
  return {
    ...state,
    crops: payload.crops
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.on)(_crop_actions__WEBPACK_IMPORTED_MODULE_3__.ReqCropCategoriesSuccess, (state, {
  ...payload
}) => {
  return {
    ...state,
    cropCategories: payload.cropCategories
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.on)(_authState_auth_actions__WEBPACK_IMPORTED_MODULE_0__.ReqLogoutAction, () => {
  return initialState;
}));

/***/ }),

/***/ 1923:
/*!**************************************************!*\
  !*** ./src/app/core/ngrx/crop/crop.selectors.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   selectCropByCategories: () => (/* binding */ selectCropByCategories),
/* harmony export */   selectCropByCategoryId: () => (/* binding */ selectCropByCategoryId),
/* harmony export */   selectCropState: () => (/* binding */ selectCropState)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _crop_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crop.reducer */ 9589);


const selectCropState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createFeatureSelector)(_crop_reducer__WEBPACK_IMPORTED_MODULE_0__.cropFeatureKey);
const selectCropByCategoryId = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(selectCropState, (cropState, categoryId) => {
  return cropState.crops.filter(crop => crop.cropCategoryId == categoryId);
});
const selectCropByCategories = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(selectCropState, cropState => {
  return cropState.cropCategories;
});

/***/ }),

/***/ 1643:
/*!*****************************************!*\
  !*** ./src/app/core/ngrx/crop/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cropActions: () => (/* reexport module object */ _crop_actions__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   cropFeatureKey: () => (/* reexport safe */ _crop_reducer__WEBPACK_IMPORTED_MODULE_2__.cropFeatureKey),
/* harmony export */   cropReducer: () => (/* reexport safe */ _crop_reducer__WEBPACK_IMPORTED_MODULE_2__.reducer),
/* harmony export */   cropSelectors: () => (/* reexport module object */ _crop_selectors__WEBPACK_IMPORTED_MODULE_1__)
/* harmony export */ });
/* harmony import */ var _crop_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crop.actions */ 7634);
/* harmony import */ var _crop_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crop.selectors */ 1923);
/* harmony import */ var _crop_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./crop.reducer */ 9589);





/***/ }),

/***/ 1246:
/*!*******************************************************************************!*\
  !*** ./src/app/core/ngrx/entities/delivery-points/delivery-points.actions.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateDeliveryPointFail: () => (/* binding */ CreateDeliveryPointFail),
/* harmony export */   CreateDeliveryPointSuccess: () => (/* binding */ CreateDeliveryPointSuccess),
/* harmony export */   DeleteDeliveryPointFail: () => (/* binding */ DeleteDeliveryPointFail),
/* harmony export */   DeleteDeliveryPointSuccess: () => (/* binding */ DeleteDeliveryPointSuccess),
/* harmony export */   EntityDeliveryPointsFail: () => (/* binding */ EntityDeliveryPointsFail),
/* harmony export */   EntityDeliveryPointsSuccess: () => (/* binding */ EntityDeliveryPointsSuccess),
/* harmony export */   ManagementDataFail: () => (/* binding */ ManagementDataFail),
/* harmony export */   ManagementDataSuccess: () => (/* binding */ ManagementDataSuccess),
/* harmony export */   PublicDeliveryPointsFail: () => (/* binding */ PublicDeliveryPointsFail),
/* harmony export */   PublicDeliveryPointsSuccess: () => (/* binding */ PublicDeliveryPointsSuccess),
/* harmony export */   ReqCreateDeliveryPoint: () => (/* binding */ ReqCreateDeliveryPoint),
/* harmony export */   ReqDeleteDeliveryPoint: () => (/* binding */ ReqDeleteDeliveryPoint),
/* harmony export */   ReqEntityDeliveryPoints: () => (/* binding */ ReqEntityDeliveryPoints),
/* harmony export */   ReqManagementData: () => (/* binding */ ReqManagementData),
/* harmony export */   ReqPublicDeliveryPoints: () => (/* binding */ ReqPublicDeliveryPoints),
/* harmony export */   ReqUpdateDeliveryPoint: () => (/* binding */ ReqUpdateDeliveryPoint),
/* harmony export */   UpdateDeliveryPointFail: () => (/* binding */ UpdateDeliveryPointFail),
/* harmony export */   UpdateDeliveryPointSuccess: () => (/* binding */ UpdateDeliveryPointSuccess)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 6270);

//#region Create
const ReqCreateDeliveryPoint = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[DeliveryPointSetup] ReqCreateDeliveryPoint', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const CreateDeliveryPointFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqCreateDeliveryPoint] CreateDeliveryPointFail', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const CreateDeliveryPointSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqCreateDeliveryPoint] CreateDeliveryPointSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
//#endregion
//#region Read
const ReqPublicDeliveryPoints = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[DeliveryPointSetup] ReqPublicDeliveryPoints', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const PublicDeliveryPointsSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqPublicDeliveryPoints] PublicDeliveryPointsSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const PublicDeliveryPointsFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqPublicDeliveryPoints] PublicDeliveryPointsFail', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const ReqEntityDeliveryPoints = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[DeliveryPointSetup] ReqEntityDeliveryPoints', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const EntityDeliveryPointsSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqEntityDeliveryPoints] EntityDeliveryPointsSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const EntityDeliveryPointsFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqEntityDeliveryPoints] EntityDeliveryPointsFail', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const ReqManagementData = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[DeliveryPointManagement] ReqManagementData', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const ManagementDataFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqManagementData] ManagementDataFail', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const ManagementDataSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqManagementData] ManagementDataSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
//#endregion
//#region Update
const ReqUpdateDeliveryPoint = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[DeliveryPointSetup] ReqUpdateDeliveryPoint', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const UpdateDeliveryPointFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqUpdateDeliveryPoint] UpdateDeliveryPointFail', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const UpdateDeliveryPointSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqUpdateDeliveryPoint] UpdateDeliveryPointSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
//#endregion
//#region Delete
const ReqDeleteDeliveryPoint = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[DeliveryPointManagement] ReqDeleteDeliveryPoint', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const DeleteDeliveryPointFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqDeleteDeliveryPoint] DeleteDeliveryPointFail', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const DeleteDeliveryPointSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqDeleteDeliveryPoint] DeleteDeliveryPointSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
//#endregion

/***/ }),

/***/ 7506:
/*!*******************************************************************************!*\
  !*** ./src/app/core/ngrx/entities/delivery-points/delivery-points.effects.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeliveryPointsEffects: () => (/* binding */ DeliveryPointsEffects)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 7178);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/effects */ 1575);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 1891);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 9877);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 2389);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 1527);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 3839);
/* harmony import */ var src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/helpers/index.actions */ 5626);
/* harmony import */ var src_app_core_ngrx_reducers_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/ngrx/reducers/index */ 7032);
/* harmony import */ var src_app_core_helpers_snackbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/helpers/snackbar */ 2179);
/* harmony import */ var src_app_core_services_delivery_points_delivery_points_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/delivery-points/delivery-points.service */ 570);
/* harmony import */ var src_app_core_services_api_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/api/api.service */ 7588);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _core_helpers_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../core/helpers/constants */ 9487);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/snack-bar */ 9409);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 7947);




















class DeliveryPointsEffects {
  //#endregion
  constructor(api, actions$, snackbar, router, store, deliveryPointService) {
    this.api = api;
    this.actions$ = actions$;
    this.snackbar = snackbar;
    this.router = router;
    this.store = store;
    this.deliveryPointService = deliveryPointService;
    //#region Create
    // #region ReqCreateDeliveryPoint
    this.ReqCreateDeliveryPoint$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_7__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_7__.ofType)(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_1__.deliveryPointActions.ReqCreateDeliveryPoint), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.switchMap)(payload => {
      return this.api.createDeliveryPoint((0,lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(payload.deliveryPoint), payload.clientUid).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.concatMap)(deliveryPoint => {
        return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_1__.deliveryPointActions.CreateDeliveryPointSuccess({
          deliveryPoint,
          executedTime: payload.executedTime
        })];
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.catchError)(error => {
        console.log('ReqCreateDeliveryPoint: ', error.message);
        this.snackbar.open('We were unable to create the desired delivery point. Please ensure all information is accurate and try again.', 'CLOSE', src_app_core_helpers_snackbar__WEBPACK_IMPORTED_MODULE_3__.errorConfig);
        return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_1__.deliveryPointActions.CreateDeliveryPointFail({
          executedTime: payload.executedTime
        })];
      }));
    })));
    // #endregion
    //#endregion
    //#region Read
    // #region ReqPublicDeliveryPoints
    this.ReqPublicDeliveryPoints$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_7__.createEffect)(() => {
      return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_7__.ofType)(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_1__.deliveryPointActions.ReqPublicDeliveryPoints), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.switchMap)(payload => {
        return this.api.getPublicDeliveryPoints().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.concatMap)(deliveryPoints => [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_1__.deliveryPointActions.PublicDeliveryPointsSuccess({
          deliveryPoints,
          executedTime: payload.executedTime
        })]), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.catchError)(error => {
          console.log('ReqPublicDeliveryPoints', error.message);
          this.snackbar.open(error.message, 'CLOSE', src_app_core_helpers_snackbar__WEBPACK_IMPORTED_MODULE_3__.errorConfig);
          return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_1__.deliveryPointActions.PublicDeliveryPointsFail({
            executedTime: payload.executedTime
          })];
        }));
      }));
    });
    //#endregion
    // #region ReqEntityDeliveryPoints
    this.ReqEntityDeliveryPoints$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_7__.createEffect)(() => {
      return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_7__.ofType)(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_1__.deliveryPointActions.ReqEntityDeliveryPoints), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.switchMap)(payload => {
        return this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_11__.select)(src_app_core_ngrx_reducers_index__WEBPACK_IMPORTED_MODULE_2__.authSelectors.getUserEntities), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.concatMap)(entities => {
          return this.deliveryPointService.getEntityUsersDeliveryPoints(entities).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.concatMap)(deliveryPoints => [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_1__.deliveryPointActions.EntityDeliveryPointsSuccess({
            deliveryPoints,
            executedTime: payload.executedTime
          })]), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.catchError)(error => {
            console.log('ReqEntityDeliveryPoints', error.message);
            this.snackbar.open(error.message, 'CLOSE', src_app_core_helpers_snackbar__WEBPACK_IMPORTED_MODULE_3__.errorConfig);
            return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_1__.deliveryPointActions.EntityDeliveryPointsFail({
              executedTime: payload.executedTime
            })];
          }));
        }));
      }));
    });
    //#endregion
    // #region ReqManagementData
    this.ReqManagementData$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_7__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_7__.ofType)(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_1__.deliveryPointActions.ReqManagementData), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.switchMap)(payload => {
      return this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_11__.select)(src_app_core_ngrx_reducers_index__WEBPACK_IMPORTED_MODULE_2__.authSelectors.getUserEntities), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.concatMap)(entities => {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)([this.deliveryPointService.getEntityUsersDeliveryPoints(entities), this.api.getPublicDeliveryPoints(), this.api.getLocationTypes()]);
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.concatMap)(([deliveryPoints, publicDeliveryPoints, locationTypes]) => [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_1__.deliveryPointActions.ManagementDataSuccess({
        deliveryPoints: [...deliveryPoints, ...publicDeliveryPoints],
        locationTypes,
        regions: ['Default'],
        executedTime: payload.executedTime
      })]), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.catchError)(error => {
        console.log('ReqEntityDeliveryPoints', error.message);
        this.snackbar.open(error.message, 'CLOSE', src_app_core_helpers_snackbar__WEBPACK_IMPORTED_MODULE_3__.errorConfig);
        return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_1__.deliveryPointActions.ManagementDataFail({
          executedTime: payload.executedTime
        })];
      }));
    })));
    // #endregion
    //#endregion
    //#region Update
    // #region ReqUpdateDeliveryPoint
    this.ReqUpdateDeliveryPoint$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_7__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_7__.ofType)(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_1__.deliveryPointActions.ReqUpdateDeliveryPoint), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.switchMap)(payload => {
      return this.api.updateDeliveryPoint(payload.deliveryPoint).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.concatMap)(deliveryPoint => {
        if (deliveryPoint.isPublic) {
          throw new Error('Updating of public delivery points is not allowed.');
        }
        this.router.navigate([_core_helpers_constants__WEBPACK_IMPORTED_MODULE_6__.PROFILE_ROUTE], {
          queryParams: {
            tabIndex: 1
          }
        });
        return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_1__.deliveryPointActions.UpdateDeliveryPointSuccess({
          deliveryPoint,
          executedTime: payload.executedTime
        })];
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.catchError)(error => {
        console.log('ReqUpdateDeliveryPoint: ', error.message);
        this.snackbar.open('We were unable to Update the desired delivery point. Please ensure all information is accurate and you are working with a private delivery point.', 'CLOSE', src_app_core_helpers_snackbar__WEBPACK_IMPORTED_MODULE_3__.errorConfig);
        return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_1__.deliveryPointActions.UpdateDeliveryPointFail({
          executedTime: payload.executedTime
        })];
      }));
    })));
    // #endregion
    //#endregion
    //#region Delete
    this.ReqDeleteDeliveryPoint$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_7__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_7__.ofType)(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_1__.deliveryPointActions.ReqDeleteDeliveryPoint), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.switchMap)(payload => {
      return this.api.deleteDeliveryPoint(payload.id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.concatMap)(({
        id
      }) => {
        return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_1__.deliveryPointActions.DeleteDeliveryPointSuccess({
          id,
          executedTime: payload.executedTime
        })];
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.catchError)(error => {
        console.log('ReqDeleteDeliveryPoint: ', error.message);
        this.snackbar.open('We were unable to Delete the desired delivery point. Please ensure you are working with a private delivery point.', 'CLOSE', src_app_core_helpers_snackbar__WEBPACK_IMPORTED_MODULE_3__.errorConfig);
        return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_1__.deliveryPointActions.DeleteDeliveryPointFail({
          executedTime: payload.executedTime
        })];
      }));
    })));
  }
  static #_ = this.ɵfac = function DeliveryPointsEffects_Factory(t) {
    return new (t || DeliveryPointsEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](src_app_core_services_api_api_service__WEBPACK_IMPORTED_MODULE_5__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_7__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_11__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](src_app_core_services_delivery_points_delivery_points_service__WEBPACK_IMPORTED_MODULE_4__.DeliveryPointsService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjectable"]({
    token: DeliveryPointsEffects,
    factory: DeliveryPointsEffects.ɵfac
  });
}

/***/ }),

/***/ 7704:
/*!*******************************************************************************!*\
  !*** ./src/app/core/ngrx/entities/delivery-points/delivery-points.reducer.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   adapter: () => (/* binding */ adapter),
/* harmony export */   deliveryPointsFeatureKey: () => (/* binding */ deliveryPointsFeatureKey),
/* harmony export */   initialState: () => (/* binding */ initialState),
/* harmony export */   reducer: () => (/* binding */ reducer),
/* harmony export */   selectDeliveryPointId: () => (/* binding */ selectDeliveryPointId)
/* harmony export */ });
/* harmony import */ var _authState_auth_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../authState/auth.actions */ 6189);
/* harmony import */ var _lot_lot_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../lot/lot.actions */ 4981);
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/entity */ 8825);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _helperFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helperFunctions */ 2447);
/* harmony import */ var _delivery_points_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./delivery-points.actions */ 1246);
/* harmony import */ var _match_match_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../match/match.actions */ 8603);







const deliveryPointsFeatureKey = 'deliveryPoints';
const adapter = (0,_ngrx_entity__WEBPACK_IMPORTED_MODULE_5__.createEntityAdapter)({
  selectId: selectDeliveryPointId
});
function selectDeliveryPointId(deliveryPoint) {
  return deliveryPoint.id;
}
const initialState = adapter.getInitialState({
  ids: [],
  entities: {},
  locationTypes: [],
  regions: ['Default'],
  dictLoading: {}
});
const reducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.on)(_delivery_points_actions__WEBPACK_IMPORTED_MODULE_3__.ReqManagementData, _delivery_points_actions__WEBPACK_IMPORTED_MODULE_3__.ReqDeleteDeliveryPoint, _delivery_points_actions__WEBPACK_IMPORTED_MODULE_3__.ReqUpdateDeliveryPoint, _delivery_points_actions__WEBPACK_IMPORTED_MODULE_3__.ReqCreateDeliveryPoint, _delivery_points_actions__WEBPACK_IMPORTED_MODULE_3__.ReqPublicDeliveryPoints, _delivery_points_actions__WEBPACK_IMPORTED_MODULE_3__.ReqEntityDeliveryPoints, (state, payload) => {
  return (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_2__.addLoading)(state, payload);
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.on)(_delivery_points_actions__WEBPACK_IMPORTED_MODULE_3__.ManagementDataFail, _delivery_points_actions__WEBPACK_IMPORTED_MODULE_3__.DeleteDeliveryPointFail, _delivery_points_actions__WEBPACK_IMPORTED_MODULE_3__.UpdateDeliveryPointFail, _delivery_points_actions__WEBPACK_IMPORTED_MODULE_3__.CreateDeliveryPointFail, _delivery_points_actions__WEBPACK_IMPORTED_MODULE_3__.PublicDeliveryPointsFail, _delivery_points_actions__WEBPACK_IMPORTED_MODULE_3__.EntityDeliveryPointsFail, (state, payload) => {
  return (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_2__.removeLoading)(state, payload);
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.on)(_delivery_points_actions__WEBPACK_IMPORTED_MODULE_3__.PublicDeliveryPointsSuccess, _delivery_points_actions__WEBPACK_IMPORTED_MODULE_3__.EntityDeliveryPointsSuccess, (state, payload) => {
  let newState = adapter.removeAll(state);
  newState = adapter.upsertMany(payload.deliveryPoints, newState);
  return (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_2__.removeLoading)(newState, payload);
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.on)(_delivery_points_actions__WEBPACK_IMPORTED_MODULE_3__.CreateDeliveryPointSuccess, _delivery_points_actions__WEBPACK_IMPORTED_MODULE_3__.UpdateDeliveryPointSuccess, (state, payload) => {
  const newState = adapter.upsertOne(payload.deliveryPoint, state);
  return (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_2__.removeLoading)(newState, payload);
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.on)(_delivery_points_actions__WEBPACK_IMPORTED_MODULE_3__.DeleteDeliveryPointSuccess, (state, payload) => {
  const newState = adapter.removeOne(payload.id, state);
  return (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_2__.removeLoading)(newState, payload);
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.on)(_delivery_points_actions__WEBPACK_IMPORTED_MODULE_3__.ManagementDataSuccess, (state, payload) => {
  const newState = {
    ...adapter.upsertMany(payload.deliveryPoints, state),
    locationTypes: payload.locationTypes,
    regions: payload.regions
  };
  return (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_2__.removeLoading)(newState, payload);
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.on)(_lot_lot_actions__WEBPACK_IMPORTED_MODULE_1__.LotFormDataSuccess, _match_match_actions__WEBPACK_IMPORTED_MODULE_4__.LotMatchFormDataSuccess, (state, payload) => {
  const newState = adapter.upsertMany(payload.deliveryPoints, state);
  return newState;
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.on)(_authState_auth_actions__WEBPACK_IMPORTED_MODULE_0__.ReqLogoutAction, () => {
  return initialState;
}));

/***/ }),

/***/ 6070:
/*!*********************************************************************************!*\
  !*** ./src/app/core/ngrx/entities/delivery-points/delivery-points.selectors.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAllDeliveryPoints: () => (/* binding */ getAllDeliveryPoints),
/* harmony export */   getDeliveryPointById: () => (/* binding */ getDeliveryPointById),
/* harmony export */   getDeliveryPointEntities: () => (/* binding */ getDeliveryPointEntities),
/* harmony export */   getDeliveryPointIds: () => (/* binding */ getDeliveryPointIds),
/* harmony export */   getDeliveryPointState: () => (/* binding */ getDeliveryPointState),
/* harmony export */   getManageDeliveryPointDetails: () => (/* binding */ getManageDeliveryPointDetails),
/* harmony export */   getSetupDeliveryPointDetails: () => (/* binding */ getSetupDeliveryPointDetails),
/* harmony export */   getTotalDeliveryPoints: () => (/* binding */ getTotalDeliveryPoints)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _delivery_points_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delivery-points.reducer */ 7704);


const getDeliveryPointState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createFeatureSelector)(_delivery_points_reducer__WEBPACK_IMPORTED_MODULE_0__.deliveryPointsFeatureKey);
const {
  selectIds: getDeliveryPointIds,
  selectEntities: getDeliveryPointEntities,
  selectAll: getAllDeliveryPoints,
  selectTotal: getTotalDeliveryPoints
} = _delivery_points_reducer__WEBPACK_IMPORTED_MODULE_0__.adapter.getSelectors(getDeliveryPointState);
// For the delivery Point management page
const getManageDeliveryPointDetails = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(getDeliveryPointState, deliveryPointState => {
  const allDeliveryPoints = Object.values(deliveryPointState.entities);
  const userDeliveryPoints = allDeliveryPoints.filter(deliveryPoint => !deliveryPoint.isPublic);
  const publicDeliveryPoints = allDeliveryPoints.filter(deliveryPoint => deliveryPoint.isPublic);
  const locationTypes = deliveryPointState.locationTypes;
  const regions = deliveryPointState.regions;
  return {
    userDeliveryPoints,
    publicDeliveryPoints,
    locationTypes,
    regions
  };
});
const getSetupDeliveryPointDetails = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(getDeliveryPointState, deliveryPointState => {
  const deliveryPoints = Object.values(deliveryPointState.entities);
  const locationTypes = deliveryPointState.locationTypes;
  const regions = deliveryPointState.regions;
  return {
    deliveryPoints,
    locationTypes,
    regions
  };
});
const getDeliveryPointById = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(getDeliveryPointEntities, (deliveryPointMap, props) => {
  const deliveryPoint = deliveryPointMap[props.id] || null;
  return deliveryPoint;
});

/***/ }),

/***/ 5951:
/*!*************************************************************!*\
  !*** ./src/app/core/ngrx/entities/delivery-points/index.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deliveryPointActions: () => (/* reexport module object */ _delivery_points_actions__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   deliveryPointReducer: () => (/* reexport safe */ _delivery_points_reducer__WEBPACK_IMPORTED_MODULE_2__.reducer),
/* harmony export */   deliveryPointSelectors: () => (/* reexport module object */ _delivery_points_selectors__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   deliveryPointsFeatureKey: () => (/* reexport safe */ _delivery_points_reducer__WEBPACK_IMPORTED_MODULE_2__.deliveryPointsFeatureKey)
/* harmony export */ });
/* harmony import */ var _delivery_points_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delivery-points.actions */ 1246);
/* harmony import */ var _delivery_points_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delivery-points.selectors */ 6070);
/* harmony import */ var _delivery_points_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delivery-points.reducer */ 7704);





/***/ }),

/***/ 7230:
/*!*************************************************!*\
  !*** ./src/app/core/ngrx/entities/lot/index.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lotActions: () => (/* reexport module object */ _lot_actions__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   lotFeatureKey: () => (/* reexport safe */ _lot_reducer__WEBPACK_IMPORTED_MODULE_2__.lotFeatureKey),
/* harmony export */   lotReducer: () => (/* reexport safe */ _lot_reducer__WEBPACK_IMPORTED_MODULE_2__.reducer),
/* harmony export */   lotSelectors: () => (/* reexport module object */ _lot_selectors__WEBPACK_IMPORTED_MODULE_1__)
/* harmony export */ });
/* harmony import */ var _lot_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lot.actions */ 4981);
/* harmony import */ var _lot_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lot.selectors */ 5014);
/* harmony import */ var _lot_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lot.reducer */ 6415);





/***/ }),

/***/ 4981:
/*!*******************************************************!*\
  !*** ./src/app/core/ngrx/entities/lot/lot.actions.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClearAllLots: () => (/* binding */ ClearAllLots),
/* harmony export */   CreateLotFail: () => (/* binding */ CreateLotFail),
/* harmony export */   CreateLotSuccess: () => (/* binding */ CreateLotSuccess),
/* harmony export */   DeleteLotFail: () => (/* binding */ DeleteLotFail),
/* harmony export */   DeleteLotSuccess: () => (/* binding */ DeleteLotSuccess),
/* harmony export */   LinkCurrentScoutToLot: () => (/* binding */ LinkCurrentScoutToLot),
/* harmony export */   LotFormDataFail: () => (/* binding */ LotFormDataFail),
/* harmony export */   LotFormDataSuccess: () => (/* binding */ LotFormDataSuccess),
/* harmony export */   PrivatiseLotsFail: () => (/* binding */ PrivatiseLotsFail),
/* harmony export */   PrivatiseLotsSuccess: () => (/* binding */ PrivatiseLotsSuccess),
/* harmony export */   ReqCreateLot: () => (/* binding */ ReqCreateLot),
/* harmony export */   ReqDeleteLot: () => (/* binding */ ReqDeleteLot),
/* harmony export */   ReqLotFormData: () => (/* binding */ ReqLotFormData),
/* harmony export */   ReqPrivatiseLots: () => (/* binding */ ReqPrivatiseLots),
/* harmony export */   ReqSaveLotFormData: () => (/* binding */ ReqSaveLotFormData),
/* harmony export */   ReqUpdateLot: () => (/* binding */ ReqUpdateLot),
/* harmony export */   ReqUserLots: () => (/* binding */ ReqUserLots),
/* harmony export */   UpdateLotFail: () => (/* binding */ UpdateLotFail),
/* harmony export */   UpdateLotSuccess: () => (/* binding */ UpdateLotSuccess),
/* harmony export */   UserLotsFail: () => (/* binding */ UserLotsFail),
/* harmony export */   UserLotsSuccess: () => (/* binding */ UserLotsSuccess)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 6270);

//#region Create
const ReqCreateLot = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Lot Search Page] ReqCreateLot', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const CreateLotFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqCreateLot] CreateLotFail');
const CreateLotSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqCreateLot] CreateLotSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
//#endregion
//#region Read
const ReqLotFormData = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Create/Edit Lot] ReqLotFormData', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const LotFormDataFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqLotFormData] LotFormDataFail');
const LotFormDataSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqLotFormData] LotFormDataSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
//#endregion
const ReqUserLots = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Lot Dashboard] ReqUserLots');
const UserLotsFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqUserLots] UserLotsFail');
const UserLotsSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqUserLots] UserLotsSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
//#region Update
const ReqUpdateLot = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Edit Lot Page] ReqUpdateLot', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const UpdateLotFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqUpdateLot] UpdateLotFail');
const UpdateLotSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqUpdateLot] UpdateLotSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
//#endregion
// #region Privatise
const ReqPrivatiseLots = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Lot Component] ReqPrivatiseLots', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const PrivatiseLotsFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqPrivatiseLots] PrivatiseLotsFail');
const PrivatiseLotsSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqPrivatiseLots] PrivatiseLotsSuccess');
//#endregion
// #region Delete
const ReqDeleteLot = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Edit Lot Page] ReqDeleteLot', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const DeleteLotFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqDeleteLot] DeleteLotFail');
const DeleteLotSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqDeleteLot] DeleteLotSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// #endregion
// #region Never Fail Actions
const ReqSaveLotFormData = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Create Lot Page] [NF] ReqSaveLotFormData', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const LinkCurrentScoutToLot = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Scout Dashboard] [NF] LinkCurrentScoutToLot', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// #endregion
// #region Clear All Lots
const ClearAllLots = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ Broker Dashboard ] [NF] ClearAllLots');
// #endregion

/***/ }),

/***/ 6415:
/*!*******************************************************!*\
  !*** ./src/app/core/ngrx/entities/lot/lot.reducer.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   adapter: () => (/* binding */ adapter),
/* harmony export */   initialState: () => (/* binding */ initialState),
/* harmony export */   lotFeatureKey: () => (/* binding */ lotFeatureKey),
/* harmony export */   reducer: () => (/* binding */ reducer)
/* harmony export */ });
/* harmony import */ var _authState_auth_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../authState/auth.actions */ 6189);
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/entity */ 8825);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _lot_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lot.actions */ 4981);





const lotFeatureKey = 'lot';
const adapter = (0,_ngrx_entity__WEBPACK_IMPORTED_MODULE_2__.createEntityAdapter)({});
const initialState = adapter.getInitialState({
  ids: [],
  entities: {},
  currentLot: null,
  linkedScout: null
});
const reducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_lot_actions__WEBPACK_IMPORTED_MODULE_1__.CreateLotSuccess, _lot_actions__WEBPACK_IMPORTED_MODULE_1__.UpdateLotSuccess, (state, action) => {
  if (action.lot) {
    const newState = adapter.upsertOne(action.lot, {
      ...state,
      currentLot: null
    });
    return newState;
  } else {
    return state;
  }
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_lot_actions__WEBPACK_IMPORTED_MODULE_1__.LotFormDataSuccess, (state, action) => {
  return {
    ...state,
    currentLot: action.lot
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_lot_actions__WEBPACK_IMPORTED_MODULE_1__.UserLotsSuccess, (state, action) => {
  const newState = adapter.upsertMany(action.lotCards, state);
  return newState;
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_lot_actions__WEBPACK_IMPORTED_MODULE_1__.ReqSaveLotFormData, (state, action) => {
  return {
    ...state,
    currentLot: action.lot
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_lot_actions__WEBPACK_IMPORTED_MODULE_1__.DeleteLotSuccess, (state, action) => {
  const newState = adapter.removeOne(action.lotId, state);
  return {
    ...newState,
    currentLot: null
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_lot_actions__WEBPACK_IMPORTED_MODULE_1__.LinkCurrentScoutToLot, (state, action) => {
  const newState = {
    ...state,
    linkedScout: action.scout,
    currentLot: null
  };
  return newState;
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_authState_auth_actions__WEBPACK_IMPORTED_MODULE_0__.ReqLogoutAction, _lot_actions__WEBPACK_IMPORTED_MODULE_1__.ClearAllLots, () => {
  return initialState;
}));

/***/ }),

/***/ 5014:
/*!*********************************************************!*\
  !*** ./src/app/core/ngrx/entities/lot/lot.selectors.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAllLotCards: () => (/* binding */ getAllLotCards),
/* harmony export */   getAllOrderedLotCards: () => (/* binding */ getAllOrderedLotCards),
/* harmony export */   getCurrentLot: () => (/* binding */ getCurrentLot),
/* harmony export */   getLinkedScout: () => (/* binding */ getLinkedScout),
/* harmony export */   getLotCardEntities: () => (/* binding */ getLotCardEntities),
/* harmony export */   getLotCardIds: () => (/* binding */ getLotCardIds),
/* harmony export */   getTotalLotCards: () => (/* binding */ getTotalLotCards),
/* harmony export */   selectLotState: () => (/* binding */ selectLotState)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _lot_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lot.reducer */ 6415);


const selectLotState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createFeatureSelector)(_lot_reducer__WEBPACK_IMPORTED_MODULE_0__.lotFeatureKey);
const {
  selectIds: getLotCardIds,
  selectEntities: getLotCardEntities,
  selectAll: getAllLotCards,
  selectTotal: getTotalLotCards
} = _lot_reducer__WEBPACK_IMPORTED_MODULE_0__.adapter.getSelectors(selectLotState);
const getCurrentLot = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(selectLotState, lotState => {
  const currentLot = lotState.currentLot;
  return currentLot || null;
});
const getAllOrderedLotCards = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(getAllLotCards, lotCards => {
  const orderedLotCards = lotCards.sort((first, second) => second.createdDate.getTime() - first.createdDate.getTime());
  return orderedLotCards;
});
const getLinkedScout = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(selectLotState, lotState => {
  const linkedScout = lotState.linkedScout;
  return linkedScout;
});

/***/ }),

/***/ 426:
/*!***************************************************!*\
  !*** ./src/app/core/ngrx/entities/match/index.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   matchActions: () => (/* reexport module object */ _match_actions__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   matchFeatureKey: () => (/* reexport safe */ _match_reducer__WEBPACK_IMPORTED_MODULE_2__.matchFeatureKey),
/* harmony export */   matchReducer: () => (/* reexport safe */ _match_reducer__WEBPACK_IMPORTED_MODULE_2__.reducer),
/* harmony export */   matchSelectors: () => (/* reexport module object */ _match_selectors__WEBPACK_IMPORTED_MODULE_1__)
/* harmony export */ });
/* harmony import */ var _match_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./match.actions */ 8603);
/* harmony import */ var _match_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./match.selectors */ 809);
/* harmony import */ var _match_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./match.reducer */ 6998);





/***/ }),

/***/ 8603:
/*!***********************************************************!*\
  !*** ./src/app/core/ngrx/entities/match/match.actions.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateLotMatchFail: () => (/* binding */ CreateLotMatchFail),
/* harmony export */   CreateLotMatchSuccess: () => (/* binding */ CreateLotMatchSuccess),
/* harmony export */   LoadLotMatchesFail: () => (/* binding */ LoadLotMatchesFail),
/* harmony export */   LoadLotMatchesSuccess: () => (/* binding */ LoadLotMatchesSuccess),
/* harmony export */   LotMatchFormDataFail: () => (/* binding */ LotMatchFormDataFail),
/* harmony export */   LotMatchFormDataSuccess: () => (/* binding */ LotMatchFormDataSuccess),
/* harmony export */   ReqCreateLotMatch: () => (/* binding */ ReqCreateLotMatch),
/* harmony export */   ReqLoadLotMatches: () => (/* binding */ ReqLoadLotMatches),
/* harmony export */   ReqLotHasBrokerCheck: () => (/* binding */ ReqLotHasBrokerCheck),
/* harmony export */   ReqLotHasBrokerCheckFail: () => (/* binding */ ReqLotHasBrokerCheckFail),
/* harmony export */   ReqLotHasBrokerCheckSuccess: () => (/* binding */ ReqLotHasBrokerCheckSuccess),
/* harmony export */   ReqLotMatchFormData: () => (/* binding */ ReqLotMatchFormData),
/* harmony export */   ReqUpdateLotMatch: () => (/* binding */ ReqUpdateLotMatch),
/* harmony export */   UpdateLotMatchFail: () => (/* binding */ UpdateLotMatchFail),
/* harmony export */   UpdateLotMatchSuccess: () => (/* binding */ UpdateLotMatchSuccess)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 6270);

// #region CREATE
const ReqCreateLotMatch = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Lot Match Page] ReqCreateLotMatch', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const CreateLotMatchFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqCreateLotMatch] CreateLotMatchFail');
const CreateLotMatchSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqCreateLotMatch] CreateLotMatchSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// #endregion
// #region READ
const ReqLoadLotMatches = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Lot Match Page] ReqLoadLotMatches', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const LoadLotMatchesFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqLoadLotMatches] LoadLotMatchesFail');
const LoadLotMatchesSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqLoadLotMatches] LoadLotMatchesSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const ReqLotMatchFormData = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Negotiation Page] ReqLotMatchFormData', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const LotMatchFormDataFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqLotMatchFormData] LotMatchFormDataFail');
const LotMatchFormDataSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqLotMatchFormData] LotMatchFormDataSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const ReqLotHasBrokerCheck = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Lot Match Table] ReqLotHasBrokerCheck', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const ReqLotHasBrokerCheckFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqLotHasBrokerCheck] ReqLotHasBrokerCheckFail');
const ReqLotHasBrokerCheckSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqLotHasBrokerCheck] ReqLotHasBrokerCheckSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// #endregion
// #region UPDATE
const ReqUpdateLotMatch = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Negotiation Page] ReqUpdateLotMatch', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const UpdateLotMatchFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqUpdateLotMatch] UpdateLotMatchFail');
const UpdateLotMatchSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqUpdateLotMatch] UpdateLotMatchSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// #endregion
// #region DELETE
// #endregion

/***/ }),

/***/ 6998:
/*!***********************************************************!*\
  !*** ./src/app/core/ngrx/entities/match/match.reducer.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   adapter: () => (/* binding */ adapter),
/* harmony export */   initialState: () => (/* binding */ initialState),
/* harmony export */   matchFeatureKey: () => (/* binding */ matchFeatureKey),
/* harmony export */   reducer: () => (/* binding */ reducer)
/* harmony export */ });
/* harmony import */ var _authState_auth_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../authState/auth.actions */ 6189);
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/entity */ 8825);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _match_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./match.actions */ 8603);




const matchFeatureKey = 'match';
const adapter = (0,_ngrx_entity__WEBPACK_IMPORTED_MODULE_2__.createEntityAdapter)({});
const initialState = adapter.getInitialState({
  ids: [],
  entities: {},
  currentMatches: [],
  matchId: null
});
const reducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_match_actions__WEBPACK_IMPORTED_MODULE_1__.LoadLotMatchesSuccess, (state, payload) => {
  return {
    ...state,
    currentMatches: payload.matches
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_match_actions__WEBPACK_IMPORTED_MODULE_1__.LotMatchFormDataSuccess, (state, action) => {
  let newState = adapter.removeAll(state);
  newState = adapter.upsertMany(action.lotMatchIterations, newState);
  return newState;
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_match_actions__WEBPACK_IMPORTED_MODULE_1__.UpdateLotMatchSuccess, (state, action) => {
  const newState = adapter.upsertOne(action.lotMatchIteration, state);
  return newState;
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_match_actions__WEBPACK_IMPORTED_MODULE_1__.CreateLotMatchSuccess, (state, action) => {
  return {
    ...state,
    matchId: action.id
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_authState_auth_actions__WEBPACK_IMPORTED_MODULE_0__.ReqLogoutAction, () => {
  return initialState;
}));

/***/ }),

/***/ 809:
/*!*************************************************************!*\
  !*** ./src/app/core/ngrx/entities/match/match.selectors.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAllMatchIterations: () => (/* binding */ getAllMatchIterations),
/* harmony export */   getCurrentLotMatches: () => (/* binding */ getCurrentLotMatches),
/* harmony export */   getMatchIterationsEntities: () => (/* binding */ getMatchIterationsEntities),
/* harmony export */   getMatchIterationsIds: () => (/* binding */ getMatchIterationsIds),
/* harmony export */   getNewMatchId: () => (/* binding */ getNewMatchId),
/* harmony export */   getTotalMatchIterations: () => (/* binding */ getTotalMatchIterations),
/* harmony export */   selectMatchState: () => (/* binding */ selectMatchState)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 7178);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _match_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./match.reducer */ 6998);



const selectMatchState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createFeatureSelector)(_match_reducer__WEBPACK_IMPORTED_MODULE_1__.matchFeatureKey);
const {
  selectIds: getMatchIterationsIds,
  selectEntities: getMatchIterationsEntities,
  selectAll: getAllMatchIterations,
  selectTotal: getTotalMatchIterations
} = _match_reducer__WEBPACK_IMPORTED_MODULE_1__.adapter.getSelectors(selectMatchState);
const getCurrentLotMatches = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectMatchState, state => {
  let availableMatches = state.currentMatches || [];
  if (availableMatches.length > 0) {
    availableMatches = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(availableMatches);
    availableMatches = availableMatches.reverse();
  }
  return availableMatches;
});
const getNewMatchId = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createSelector)(selectMatchState, state => {
  const matchId = state.matchId || null;
  return matchId;
});

/***/ }),

/***/ 9602:
/*!**********************************************************!*\
  !*** ./src/app/core/ngrx/entities/negotiations/index.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   negotiationActions: () => (/* reexport module object */ _negotiation_actions__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   negotiationFeatureKey: () => (/* reexport safe */ _negotiation_reducer__WEBPACK_IMPORTED_MODULE_2__.negotiationFeatureKey),
/* harmony export */   negotiationReducer: () => (/* reexport safe */ _negotiation_reducer__WEBPACK_IMPORTED_MODULE_2__.reducer),
/* harmony export */   negotiationSelectors: () => (/* reexport module object */ _negotiation_selectors__WEBPACK_IMPORTED_MODULE_1__)
/* harmony export */ });
/* harmony import */ var _negotiation_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./negotiation.actions */ 979);
/* harmony import */ var _negotiation_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./negotiation.selectors */ 5026);
/* harmony import */ var _negotiation_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./negotiation.reducer */ 6208);





/***/ }),

/***/ 979:
/*!************************************************************************!*\
  !*** ./src/app/core/ngrx/entities/negotiations/negotiation.actions.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClearNegotiationFail: () => (/* binding */ ClearNegotiationFail),
/* harmony export */   ClearNegotiationSuccess: () => (/* binding */ ClearNegotiationSuccess),
/* harmony export */   CompleteNegotiationFail: () => (/* binding */ CompleteNegotiationFail),
/* harmony export */   CompleteNegotiationSuccess: () => (/* binding */ CompleteNegotiationSuccess),
/* harmony export */   DeclineNegotiationFail: () => (/* binding */ DeclineNegotiationFail),
/* harmony export */   DeclineNegotiationSuccess: () => (/* binding */ DeclineNegotiationSuccess),
/* harmony export */   GetAvailableMatchIdsFail: () => (/* binding */ GetAvailableMatchIdsFail),
/* harmony export */   GetAvailableMatchIdsSuccess: () => (/* binding */ GetAvailableMatchIdsSuccess),
/* harmony export */   LatestLotMatchIterationFail: () => (/* binding */ LatestLotMatchIterationFail),
/* harmony export */   LatestLotMatchIterationSuccess: () => (/* binding */ LatestLotMatchIterationSuccess),
/* harmony export */   ReqClearNegotiation: () => (/* binding */ ReqClearNegotiation),
/* harmony export */   ReqCompleteNegotiation: () => (/* binding */ ReqCompleteNegotiation),
/* harmony export */   ReqDeclineNegotiation: () => (/* binding */ ReqDeclineNegotiation),
/* harmony export */   ReqGetAvailableMatchIds: () => (/* binding */ ReqGetAvailableMatchIds),
/* harmony export */   ReqLatestLotMatchIteration: () => (/* binding */ ReqLatestLotMatchIteration),
/* harmony export */   ReqUserNegotiationCards: () => (/* binding */ ReqUserNegotiationCards),
/* harmony export */   UserNegotiationCardsFail: () => (/* binding */ UserNegotiationCardsFail),
/* harmony export */   UserNegotiationCardsSuccess: () => (/* binding */ UserNegotiationCardsSuccess)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 6270);

//#region Create
//#endregion
//#region Read
// #region ReqNegotiationCards
const ReqUserNegotiationCards = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Negotiation Dashboard] ReqUserNegotiationCards', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const UserNegotiationCardsFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqUserNegotiationCards] UserNegotiationCardsFail');
const UserNegotiationCardsSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqUserNegotiationCards] UserNegotiationsCardsSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
//====================================================================================================
const ReqGetAvailableMatchIds = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Negotiation Page] ReqGetAvailableMatchIds', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const GetAvailableMatchIdsSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqGetAvailableMatchIds] GetAvailableMatchIdsSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const GetAvailableMatchIdsFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqGetAvailableMatchIds] GetAvailableMatchIdsFail');
// #endregion
// #region ReqLatestLotMatchIteration
const ReqLatestLotMatchIteration = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Clearing Email Page] ReqLotMatchIteration', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const LatestLotMatchIterationFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqLatestLotMatchIteration] LatestLotMatchIterationFail');
const LatestLotMatchIterationSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqLatestLotMatchIteration] LatestLotMatchIterationSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
//#endregion
//#region Update
// #region ReqCompleteNegotiation
const ReqCompleteNegotiation = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Negotiation Dashboard] ReqCompleteNegotiation', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const CompleteNegotiationFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqCompleteNegotiation] CompleteNegotiationFail');
const CompleteNegotiationSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqCompleteNegotiation] NegotiationsCardsSuccess');
// #endregion
// #region ReqClearNegotiation
const ReqClearNegotiation = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Clearing Email Modal] ReqClearNegotiation', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const ClearNegotiationFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqClearNegotiation] ClearNegotiationFail');
const ClearNegotiationSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqClearNegotiation] ClearNegotiationSuccess');
// #endregion
// #region ReqDeclineNegotiation
const ReqDeclineNegotiation = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Negotiation Dashboard] ReqDeclineNegotiation', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const DeclineNegotiationFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqDeclineNegotiation] DeclineNegotiationFail');
const DeclineNegotiationSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqDeclineNegotiation] DeclineNegotiationSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// #endregion
//#endregion
// #region Delete
// #endregion
// #region Never Fail Actions
// #endregion

/***/ }),

/***/ 6208:
/*!************************************************************************!*\
  !*** ./src/app/core/ngrx/entities/negotiations/negotiation.reducer.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   adapter: () => (/* binding */ adapter),
/* harmony export */   initialState: () => (/* binding */ initialState),
/* harmony export */   negotiationFeatureKey: () => (/* binding */ negotiationFeatureKey),
/* harmony export */   reducer: () => (/* binding */ reducer)
/* harmony export */ });
/* harmony import */ var _authState_auth_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../authState/auth.actions */ 6189);
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/entity */ 8825);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _negotiations_negotiation_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../negotiations/negotiation.actions */ 979);




const negotiationFeatureKey = 'negotiation';
function getLocalStorageLotMatchIds() {
  const localStorageValue = localStorage.getItem('lotMatchIds');
  const lotMatchIds = localStorageValue === 'undefined' ? null : JSON.parse(localStorageValue);
  return lotMatchIds ? lotMatchIds : [];
}
const adapter = (0,_ngrx_entity__WEBPACK_IMPORTED_MODULE_2__.createEntityAdapter)({});
const initialState = adapter.getInitialState({
  ids: [],
  entities: {},
  completedNegotiations: [],
  lotMatchIds: getLocalStorageLotMatchIds()
});
const reducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_negotiations_negotiation_actions__WEBPACK_IMPORTED_MODULE_1__.UserNegotiationCardsSuccess, (state, action) => {
  let newState = adapter.removeAll(state);
  newState = {
    ...adapter.upsertMany(action.activeNegotiationCards, newState),
    completedNegotiations: action.completedNegotiationCards
  };
  return newState;
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_negotiations_negotiation_actions__WEBPACK_IMPORTED_MODULE_1__.GetAvailableMatchIdsSuccess, (state, action) => {
  const newState = {
    ...state,
    lotMatchIds: action.lotMatchIds
  };
  localStorage.setItem('lotMatchIds', JSON.stringify(action.lotMatchIds));
  return newState;
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_authState_auth_actions__WEBPACK_IMPORTED_MODULE_0__.ReqLogoutAction, () => {
  return initialState;
}));

/***/ }),

/***/ 5026:
/*!**************************************************************************!*\
  !*** ./src/app/core/ngrx/entities/negotiations/negotiation.selectors.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAllNegotiationCards: () => (/* binding */ getAllNegotiationCards),
/* harmony export */   getAllOrderedNegotiationCards: () => (/* binding */ getAllOrderedNegotiationCards),
/* harmony export */   getLotMatchIds: () => (/* binding */ getLotMatchIds),
/* harmony export */   getNegotiationCardEntities: () => (/* binding */ getNegotiationCardEntities),
/* harmony export */   getNegotiationCardIds: () => (/* binding */ getNegotiationCardIds),
/* harmony export */   getTotalNegotiationCards: () => (/* binding */ getTotalNegotiationCards),
/* harmony export */   selectNegotiationState: () => (/* binding */ selectNegotiationState)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _negotiation_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./negotiation.reducer */ 6208);


const selectNegotiationState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createFeatureSelector)(_negotiation_reducer__WEBPACK_IMPORTED_MODULE_0__.negotiationFeatureKey);
const {
  selectIds: getNegotiationCardIds,
  selectEntities: getNegotiationCardEntities,
  selectAll: getAllNegotiationCards,
  selectTotal: getTotalNegotiationCards
} = _negotiation_reducer__WEBPACK_IMPORTED_MODULE_0__.adapter.getSelectors(selectNegotiationState);
const getAllOrderedNegotiationCards = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(getAllNegotiationCards, selectNegotiationState, (negotiationCards, state) => {
  const orderedNegotiationCards = [...negotiationCards, ...state.completedNegotiations].sort((first, second) => second.createdDate.getTime() - first.createdDate.getTime());
  return orderedNegotiationCards;
});
const getLotMatchIds = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(selectNegotiationState, negotiationState => {
  return negotiationState.lotMatchIds;
});

/***/ }),

/***/ 4624:
/*!***********************************************************!*\
  !*** ./src/app/core/ngrx/entities/notifications/index.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   notificationActions: () => (/* reexport module object */ _notifications_actions__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   notificationSelectors: () => (/* reexport module object */ _notifications_selectors__WEBPACK_IMPORTED_MODULE_1__)
/* harmony export */ });
/* harmony import */ var _notifications_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notifications.actions */ 9936);
/* harmony import */ var _notifications_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notifications.selectors */ 4178);




/***/ }),

/***/ 9936:
/*!***************************************************************************!*\
  !*** ./src/app/core/ngrx/entities/notifications/notifications.actions.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActivateNotificationListenerFail: () => (/* binding */ ActivateNotificationListenerFail),
/* harmony export */   ActivateNotificationListenerSuccess: () => (/* binding */ ActivateNotificationListenerSuccess),
/* harmony export */   ClearNotifications: () => (/* binding */ ClearNotifications),
/* harmony export */   ClientNotificationsFail: () => (/* binding */ ClientNotificationsFail),
/* harmony export */   ClientNotificationsSuccess: () => (/* binding */ ClientNotificationsSuccess),
/* harmony export */   CloudMessagingPermissionStatusFail: () => (/* binding */ CloudMessagingPermissionStatusFail),
/* harmony export */   CloudMessagingPermissionStatusSuccess: () => (/* binding */ CloudMessagingPermissionStatusSuccess),
/* harmony export */   ReqActivateNotificationListener: () => (/* binding */ ReqActivateNotificationListener),
/* harmony export */   ReqClientNotifications: () => (/* binding */ ReqClientNotifications),
/* harmony export */   ReqCloudMessagingPermissionStatus: () => (/* binding */ ReqCloudMessagingPermissionStatus),
/* harmony export */   ReqToggleNotificationStatus: () => (/* binding */ ReqToggleNotificationStatus),
/* harmony export */   ReqUpdateCloudMessagingPermissionStatus: () => (/* binding */ ReqUpdateCloudMessagingPermissionStatus),
/* harmony export */   ReqUpdateCurrentNotification: () => (/* binding */ ReqUpdateCurrentNotification),
/* harmony export */   ReqUserNotifications: () => (/* binding */ ReqUserNotifications),
/* harmony export */   ToggleNotificationStatusFail: () => (/* binding */ ToggleNotificationStatusFail),
/* harmony export */   ToggleNotificationStatusSuccess: () => (/* binding */ ToggleNotificationStatusSuccess),
/* harmony export */   UserNotificationsFail: () => (/* binding */ UserNotificationsFail),
/* harmony export */   UserNotificationsSuccess: () => (/* binding */ UserNotificationsSuccess)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 6270);

//#region ReqCloudMessagingPermissionStatus
const ReqCloudMessagingPermissionStatus = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Lots Page] ReqCloudMessagingPermissionStatus');
const CloudMessagingPermissionStatusFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqCloudMessagingPermissionStatus] CloudMessagingPermissionFail');
const CloudMessagingPermissionStatusSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqCloudMessagingPermissionStatus] CloudMessagingPermissionStatusSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
//#endregion
//#region ReqActivateNotificationListener
const ReqActivateNotificationListener = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Notification] ReqActivateNotificationListener');
const ActivateNotificationListenerFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqActivateNotificationListener] ActivateNotificationListenerFail');
const ActivateNotificationListenerSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqActivateNotificationListener] ActivateNotificationListenerSuccess');
//#endregion
// #region ReqUserNotifications
const ReqUserNotifications = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Notification] ReqUserNotifications');
const UserNotificationsFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqUserNotifications] UserNotificationsFail');
const UserNotificationsSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqUserNotifications] UserNotificationsSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// #endregion
// #region ReqClientNotifications
const ReqClientNotifications = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Notification] ReqClientNotifications', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const ClientNotificationsFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqClientNotifications] ClientNotificationsFail');
const ClientNotificationsSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqClientNotifications] ClientNotificationsSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// #endregion
// #region ReqToggleNotificationStatus
const ReqToggleNotificationStatus = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Negotiation Page] ReqToggleNotificationStatus', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const ToggleNotificationStatusFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqToggleNotificationStatus] ToggleNotificationStatusFail');
const ToggleNotificationStatusSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqToggleNotificationStatus] ToggleNotificationStatusSuccess');
// #endregion
// #region Never Fail Actions
const ReqUpdateCloudMessagingPermissionStatus = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Notification | Lots Page] [NF] ReqUpdateCloudMessagingPermissionStatus', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const ReqUpdateCurrentNotification = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Notification] [NF] [SCU] ReqUpdateCurrentNotification', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// #endregion
// #region Clear Notifications
const ClearNotifications = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ Agent dashboard ] ClearNotifications');
// #endregion

/***/ }),

/***/ 6335:
/*!***************************************************************************!*\
  !*** ./src/app/core/ngrx/entities/notifications/notifications.effects.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationsEffects: () => (/* binding */ NotificationsEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ 1575);
/* harmony import */ var src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/helpers/index.actions */ 5626);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 2607);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 2389);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 1891);
/* harmony import */ var src_app_core_ngrx_reducers_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/ngrx/reducers/index */ 7032);
/* harmony import */ var src_app_core_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/notifications/notifications.service */ 7012);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 3839);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ 6270);











class NotificationsEffects {
  // #endregion
  constructor(actions$, notificationService, store) {
    this.actions$ = actions$;
    this.notificationService = notificationService;
    this.store = store;
    // #region ReqCloudMessagingPermissionStatus
    this.ReqCloudMessagingPermissionStatus$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_0__.notificationActions.ReqCloudMessagingPermissionStatus), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.mergeMap)(() => {
      return this.store.select(src_app_core_ngrx_reducers_index__WEBPACK_IMPORTED_MODULE_1__.authSelectors.getUser).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.mergeMap)(user => {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.combineLatest)([(0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(user), this.notificationService.getCloudMessagingPermissionStatus()]);
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.mergeMap)(([user, deviceToken]) => {
        if (deviceToken) {
          this.notificationService.addDeviceTokenToUserDocument(user, deviceToken);
        }
        return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_0__.notificationActions.CloudMessagingPermissionStatusSuccess({
          permissionStatus: Boolean(deviceToken)
        })];
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(error => {
        console.log('ReqCloudMessagingPermissionStatus: ', error.message);
        return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_0__.notificationActions.CloudMessagingPermissionStatusFail()];
      }));
    })));
    // #endregion
    // #region ReqActivateNotificationListener
    this.ReqActivateNotificationListener$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_0__.notificationActions.ReqActivateNotificationListener), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.mergeMap)(() => {
      return this.notificationService.activateNotificationListener();
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.mergeMap)(fireBaseNotification => {
      if (fireBaseNotification.notification) {
        const {
          title,
          body
        } = fireBaseNotification.notification;
        return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_0__.notificationActions.ReqUpdateCurrentNotification({
          notification: {
            title,
            body
          }
        })];
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(error => {
      console.log('ReqActivateNotificationListener: ', error.message);
      return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_0__.notificationActions.ActivateNotificationListenerFail()];
    })));
    // #endregion
    // #region ReqUserNotifications
    this.ReqUserNotifications$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_0__.notificationActions.ReqUserNotifications), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.mergeMap)(() => {
      return this.store.select(src_app_core_ngrx_reducers_index__WEBPACK_IMPORTED_MODULE_1__.authSelectors.getUser).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.mergeMap)(user => {
        return this.notificationService.getUserNotifications(user.uid);
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.switchMap)(userNotifications => {
        return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_0__.notificationActions.UserNotificationsSuccess({
          userNotifications
        })];
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(error => {
        console.log('ReqUserNotifications: ', error.message);
        return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_0__.notificationActions.UserNotificationsFail()];
      }));
    })));
    // #endregion
    // #region ReqClientNotifications
    this.ReqClientNotifications$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_0__.notificationActions.ReqClientNotifications), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.mergeMap)(payload => {
      return this.notificationService.getClientsNotifications([payload.clientUid]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.switchMap)(clientNotifications => {
        return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_0__.notificationActions.ClientNotificationsSuccess({
          clientNotifications
        })];
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(error => {
        console.log('ReqClientNotifications: ', error.message);
        return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_0__.notificationActions.ClientNotificationsFail()];
      }));
    })));
    // #endregion
    // #region ReqToggleNotificationStatus
    this.ReqToggleNotificationStatus$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_0__.notificationActions.ReqToggleNotificationStatus), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.mergeMap)(payload => {
      return this.notificationService.toggleNotificationStatus(payload.notificationUids, payload.toggleForAgent);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.mergeMap)(() => {
      return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_0__.notificationActions.ToggleNotificationStatusSuccess()];
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(error => {
      console.log('ReqToggleNotificationStatus: ', error.message);
      return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_0__.notificationActions.ToggleNotificationStatusFail()];
    })));
  }
  static #_ = this.ɵfac = function NotificationsEffects_Factory(t) {
    return new (t || NotificationsEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](src_app_core_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_2__.NotificationsService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_10__.Store));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
    token: NotificationsEffects,
    factory: NotificationsEffects.ɵfac
  });
}

/***/ }),

/***/ 6974:
/*!***************************************************************************!*\
  !*** ./src/app/core/ngrx/entities/notifications/notifications.reducer.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   adapter: () => (/* binding */ adapter),
/* harmony export */   initialState: () => (/* binding */ initialState),
/* harmony export */   notificationsFeatureKey: () => (/* binding */ notificationsFeatureKey),
/* harmony export */   reducer: () => (/* binding */ reducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/entity */ 8825);
/* harmony import */ var _notifications_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notifications.actions */ 9936);



const notificationsFeatureKey = 'notifications';
const adapter = (0,_ngrx_entity__WEBPACK_IMPORTED_MODULE_1__.createEntityAdapter)({
  selectId: model => model.uid
});
const initialState = adapter.getInitialState({
  ids: [],
  entities: {},
  permissionStatus: null,
  currentNotification: null
});
const reducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_notifications_actions__WEBPACK_IMPORTED_MODULE_0__.CloudMessagingPermissionStatusSuccess, (state, action) => {
  return {
    ...state,
    permissionStatus: action.permissionStatus
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_notifications_actions__WEBPACK_IMPORTED_MODULE_0__.ReqUpdateCloudMessagingPermissionStatus, (state, action) => {
  return {
    ...state,
    permissionStatus: action.permissionStatus
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_notifications_actions__WEBPACK_IMPORTED_MODULE_0__.ReqUpdateCurrentNotification, (state, action) => {
  return {
    ...state,
    currentNotification: action.notification
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_notifications_actions__WEBPACK_IMPORTED_MODULE_0__.UserNotificationsSuccess, (state, action) => {
  const newState = adapter.setAll(action.userNotifications, state);
  return newState;
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_notifications_actions__WEBPACK_IMPORTED_MODULE_0__.ClientNotificationsSuccess, (state, action) => {
  const newState = adapter.setAll(action.clientNotifications, state);
  return newState;
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.on)(_notifications_actions__WEBPACK_IMPORTED_MODULE_0__.ClearNotifications, () => {
  return initialState;
}));

/***/ }),

/***/ 4178:
/*!*****************************************************************************!*\
  !*** ./src/app/core/ngrx/entities/notifications/notifications.selectors.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCompletedNegotiationNotifications: () => (/* binding */ getCompletedNegotiationNotifications),
/* harmony export */   getCurrentNotification: () => (/* binding */ getCurrentNotification),
/* harmony export */   getIncompleteUserProfileItems: () => (/* binding */ getIncompleteUserProfileItems),
/* harmony export */   getNegotiationNotifications: () => (/* binding */ getNegotiationNotifications),
/* harmony export */   getNotificationCounts: () => (/* binding */ getNotificationCounts),
/* harmony export */   getNotificationsForDropDown: () => (/* binding */ getNotificationsForDropDown),
/* harmony export */   getPermissionStatus: () => (/* binding */ getPermissionStatus),
/* harmony export */   selectAuthState: () => (/* binding */ selectAuthState),
/* harmony export */   selectNotificationsState: () => (/* binding */ selectNotificationsState)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _notifications_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notifications.reducer */ 6974);
/* harmony import */ var src_app_core_ngrx_authState_auth_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/ngrx/authState/auth.reducer */ 6086);
/* harmony import */ var src_app_core_helpers_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/helpers/constants */ 9487);




// #region Feature Selectors
const selectNotificationsState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.createFeatureSelector)(_notifications_reducer__WEBPACK_IMPORTED_MODULE_0__.notificationsFeatureKey);
const selectAuthState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.createFeatureSelector)(src_app_core_ngrx_authState_auth_reducer__WEBPACK_IMPORTED_MODULE_1__.authFeatureKey);
// #endregion
// #region GetPermissionStatus
const getPermissionStatus = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.createSelector)(selectNotificationsState, state => {
  return state.permissionStatus;
});
// #endregion
// #region getCurrentNotification
const getCurrentNotification = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.createSelector)(selectNotificationsState, state => {
  return state.currentNotification;
});
// #endregion
// #region getNotificationCounts
const getNotificationCounts = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.createSelector)(selectNotificationsState, selectAuthState, (notificationState, authState) => {
  const notifications = Object.values(notificationState.entities);
  const profileNotificationCount = isProfileCompleteHelper(authState?.user) ? 0 : 1;
  return {
    total: notifications.length + profileNotificationCount,
    profile: profileNotificationCount,
    negotiations: notifications.filter(notification => notification.lotStatus !== 'complete' && !notification.senderUid).length,
    completedNegotiations: notifications.filter(notification => notification.lotStatus === 'complete').length,
    agentRequest: notifications.filter(notification => notification.senderUid).length
  };
});
// #endregion
// #region getNotificationsForDropDown
const getNotificationsForDropDown = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.createSelector)(selectNotificationsState, state => {
  const notifications = Object.values(state.entities);
  return {
    negotiations: notifications.filter(notification => notification.lotStatus === 'negotiating' || notification.lotStatus === 'pending' || notification.lotStatus === 'declined'),
    matches: notifications.filter(notification => notification.lotStatus === 'new' || notification.lotStatus === 'complete'),
    brokers: notifications.filter(notification => notification?.senderUid)
  };
});
// #endregion
// #region getIncompleteUserProfileItems
const getIncompleteUserProfileItems = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.createSelector)(selectAuthState, state => {
  const requiredKeys = src_app_core_helpers_constants__WEBPACK_IMPORTED_MODULE_2__.requiredUserProfileItems;
  return requiredKeys.filter(requiredKey => !state.user[requiredKey]);
});
// #endregion
// #region getNegotiationNotifications
const getNegotiationNotifications = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.createSelector)(selectNotificationsState, state => {
  return [...Object.values(state.entities).filter(notification => notification.lotStatus !== 'complete')];
});
// #endregion
// #region getCompletedNegotiationNotifications
const getCompletedNegotiationNotifications = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.createSelector)(selectNotificationsState, state => {
  return [...Object.values(state.entities).filter(notification => notification.lotStatus === 'complete')];
});
// #endregion
// #region Helpers
function isProfileCompleteHelper(user) {
  return Boolean(user?.firstname && user?.lastname && user?.email && user?.phone && user?.location);
}
// #endregion

/***/ }),

/***/ 8512:
/*!***************************************************!*\
  !*** ./src/app/core/ngrx/entities/scout/index.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scoutActions: () => (/* reexport module object */ _scout_actions__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   scoutFeatureKey: () => (/* reexport safe */ _scout_reducer__WEBPACK_IMPORTED_MODULE_2__.scoutFeatureKey),
/* harmony export */   scoutReducer: () => (/* reexport safe */ _scout_reducer__WEBPACK_IMPORTED_MODULE_2__.reducer),
/* harmony export */   scoutSelectors: () => (/* reexport module object */ _scout_selectors__WEBPACK_IMPORTED_MODULE_1__)
/* harmony export */ });
/* harmony import */ var _scout_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scout.actions */ 7993);
/* harmony import */ var _scout_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scout.selectors */ 6427);
/* harmony import */ var _scout_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scout.reducer */ 5110);





/***/ }),

/***/ 7993:
/*!***********************************************************!*\
  !*** ./src/app/core/ngrx/entities/scout/scout.actions.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClearAllScouts: () => (/* binding */ ClearAllScouts),
/* harmony export */   CreateScoutFail: () => (/* binding */ CreateScoutFail),
/* harmony export */   CreateScoutSuccess: () => (/* binding */ CreateScoutSuccess),
/* harmony export */   DeleteScoutFail: () => (/* binding */ DeleteScoutFail),
/* harmony export */   DeleteScoutSuccess: () => (/* binding */ DeleteScoutSuccess),
/* harmony export */   FineTunedScoutSearchFail: () => (/* binding */ FineTunedScoutSearchFail),
/* harmony export */   FineTunedScoutSearchSuccess: () => (/* binding */ FineTunedScoutSearchSuccess),
/* harmony export */   ReqCreateScout: () => (/* binding */ ReqCreateScout),
/* harmony export */   ReqDeleteScout: () => (/* binding */ ReqDeleteScout),
/* harmony export */   ReqFineTunedScoutSearch: () => (/* binding */ ReqFineTunedScoutSearch),
/* harmony export */   ReqScoutFormData: () => (/* binding */ ReqScoutFormData),
/* harmony export */   ReqScoutSearch: () => (/* binding */ ReqScoutSearch),
/* harmony export */   ReqUpdateScout: () => (/* binding */ ReqUpdateScout),
/* harmony export */   ReqUpdateSearchValues: () => (/* binding */ ReqUpdateSearchValues),
/* harmony export */   ReqUserScoutCards: () => (/* binding */ ReqUserScoutCards),
/* harmony export */   ScoutFormDataFail: () => (/* binding */ ScoutFormDataFail),
/* harmony export */   ScoutFormDataSuccess: () => (/* binding */ ScoutFormDataSuccess),
/* harmony export */   ScoutSearchFail: () => (/* binding */ ScoutSearchFail),
/* harmony export */   ScoutSearchSuccess: () => (/* binding */ ScoutSearchSuccess),
/* harmony export */   UpdateScoutFail: () => (/* binding */ UpdateScoutFail),
/* harmony export */   UpdateScoutSuccess: () => (/* binding */ UpdateScoutSuccess),
/* harmony export */   UserScoutCardsFail: () => (/* binding */ UserScoutCardsFail),
/* harmony export */   UserScoutCardsSuccess: () => (/* binding */ UserScoutCardsSuccess)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 6270);

//#region Create
const ReqCreateScout = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Scout Search Page] ReqCreateScout', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const CreateScoutFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqCreateScout] CreateScoutFail');
const CreateScoutSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqCreateScout] CreateScoutSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
//#endregion
//#region Read
const ReqScoutSearch = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Market Search Page] ReqScoutSearch', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const ScoutSearchFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqScoutSearch] ScoutSearchFail');
const ScoutSearchSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqScoutSearch] ScoutSearchSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const ReqFineTunedScoutSearch = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Fine-Tune Page] ReqFineTunedScoutSearch', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const FineTunedScoutSearchFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqFineTunedScoutSearch] FineTunedScoutSearchFail');
const FineTunedScoutSearchSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqFineTunedScoutSearch] FineTunedScoutSearchSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const ReqScoutFormData = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Create/Edit Market] ReqScoutFormData', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const ScoutFormDataFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqScoutFormData] ScoutFormDataFail');
const ScoutFormDataSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqScoutFormData] ScoutFormDataSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const ReqUserScoutCards = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Create/Edit Market] ReqUserScoutCards');
const UserScoutCardsFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqUserScoutCards] UserScoutCardsFail');
const UserScoutCardsSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqUserScoutCards] UserScoutCardsSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
//#endregion
//#region Update
const ReqUpdateScout = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Edit Market Page] ReqUpdateScout', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const UpdateScoutFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqUpdateScout] UpdateScoutFail');
const UpdateScoutSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqUpdateScout] UpdateScoutSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
//#endregion
//#region Delete
const ReqDeleteScout = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Edit Market Page] ReqDeleteScout', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const DeleteScoutFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqDeleteScout] DeleteScoutSuccess');
const DeleteScoutSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqDeleteScout] DeleteScoutSuccess', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
//#endregion
// #region Never Fail
const ReqUpdateSearchValues = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Browse The Market Page] ReqUpdateSearchValues', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// #endregion
// #region Clear All Scouts
const ClearAllScouts = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ Broker Dashboard ] [NF] ClearAllScouts');
// #endregion

/***/ }),

/***/ 3071:
/*!***********************************************************!*\
  !*** ./src/app/core/ngrx/entities/scout/scout.effects.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MarketEffects: () => (/* binding */ MarketEffects)
/* harmony export */ });
/* harmony import */ var src_app_core_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/api/api.service */ 7588);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/effects */ 1575);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 1891);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 1527);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 2607);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 2389);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 3839);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/helpers/index.actions */ 5626);
/* harmony import */ var src_app_core_ngrx_reducers_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/ngrx/reducers/index */ 7032);
/* harmony import */ var src_app_core_helpers_snackbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/helpers/snackbar */ 2179);
/* harmony import */ var src_app_core_services_scout_scout_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/scout/scout.service */ 7748);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! . */ 8512);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/snack-bar */ 9409);

















class MarketEffects {
  //#endregion
  //#region Helpers
  generateFineTunedScoutCriteria(searchInfo, searchCriteria) {
    const fineTunedSearchCriteria = {
      id: searchCriteria.id,
      creatorType: searchCriteria.creatorType,
      scoutType: searchCriteria.scoutType,
      crop: searchCriteria.crop,
      inSouthAfrica: searchCriteria.inSouthAfrica,
      googlePlaceId: searchCriteria.googlePlaceId,
      town: searchCriteria.town,
      location: searchCriteria.location,
      radius: searchCriteria.radius,
      isPublic: searchCriteria.isPublic,
      exFarm: searchInfo.exFarm,
      hasLots: searchInfo.hasLots,
      rating: searchInfo.rating
    };
    return fineTunedSearchCriteria;
  }
  checkForDuplicateScouts(scout, scoutCards) {
    const duplicateExists = scoutCards.some(scoutCard => {
      return scoutCard.scoutType === scout.scoutType && scoutCard.town === scout.town && scoutCard.crop.id === scout.crop.id;
    });
    if (duplicateExists) throw new Error('Duplicate Scout Card Found In Database.');
  }
  //#endregion
  constructor(actions$, api, store, scoutService, snackbar) {
    this.actions$ = actions$;
    this.api = api;
    this.store = store;
    this.scoutService = scoutService;
    this.snackbar = snackbar;
    //#region Create
    // #region ReqCreateScout
    this.ReqCreateScout$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.ofType)(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_1__.scoutActions.ReqCreateScout), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(payload => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_9__.select)(src_app_core_ngrx_reducers_index__WEBPACK_IMPORTED_MODULE_2__.authSelectors.getUserEntities), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(entities => {
        return this.api.getEntityById(entities[0].id);
      })), this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_9__.select)(___WEBPACK_IMPORTED_MODULE_5__.scoutSelectors.getSearchCriteria), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.take)(1)), this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_9__.select)(___WEBPACK_IMPORTED_MODULE_5__.scoutSelectors.getFineTune), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.take)(1)), this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_9__.select)(___WEBPACK_IMPORTED_MODULE_5__.scoutSelectors.getAllScoutCards), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.take)(1))]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(([entity, scout, fineTune, scoutCards]) => {
        const scoutAndFineTune = {
          scout: {
            ...scout,
            isPublic: payload.isPublic,
            tradingEntityId: entity.tradingEntities[0].id
          },
          fineTune: fineTune
        };
        this.checkForDuplicateScouts(scout, scoutCards);
        return this.api.createScout(scoutAndFineTune);
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.mergeMap)(scout => {
        return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_1__.scoutActions.CreateScoutSuccess({
          scout
        })];
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.catchError)(error => {
        console.log('ReqCreateMarket: ', error.message);
        if (error.message === 'Duplicate Scout Card Found In Database.') {
          this.snackbar.open('A Duplicate Scout Was Found In Database.', 'CLOSE', src_app_core_helpers_snackbar__WEBPACK_IMPORTED_MODULE_3__.errorConfig);
        } else {
          this.snackbar.open('We were unable to create a Scout from your search criteria. Please try again.', 'CLOSE', src_app_core_helpers_snackbar__WEBPACK_IMPORTED_MODULE_3__.errorConfig);
        }
        return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_1__.scoutActions.CreateScoutFail()];
      }));
    })));
    // #endregion
    //#endregion
    //#region Read
    // #region ReqSearchMarket
    this.ReqSearchScout$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.ofType)(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_1__.scoutActions.ReqScoutSearch), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(payload => {
      return this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_9__.select)(src_app_core_ngrx_reducers_index__WEBPACK_IMPORTED_MODULE_2__.authSelectors.getUserEntities), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(entities => {
        if (entities[0]) {
          return this.api.getEntityById(entities[0].id);
        }
        return [null];
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(entity => {
        return this.api.getScoutSearchResults({
          ...payload.scout,
          tradingEntityId: entity?.tradingEntities[0].id || 0
        });
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.mergeMap)(searchResult => {
        return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_1__.scoutActions.ScoutSearchSuccess({
          scoutSearch: searchResult
        })];
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.catchError)(error => {
        console.log('ReqSearchMarket: ', error.message);
        this.snackbar.open('There was an issue retrieving results for the current search criteria.', 'CLOSE', src_app_core_helpers_snackbar__WEBPACK_IMPORTED_MODULE_3__.errorConfig);
        return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_1__.scoutActions.ScoutSearchFail()];
      }));
    })));
    // #endregion
    // #region Fine-Tune Scout Search
    this.ReqSearchFineTunedScout$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.ofType)(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_1__.scoutActions.ReqFineTunedScoutSearch), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(payload => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.of)(payload).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(() => {
        return this.store.select(___WEBPACK_IMPORTED_MODULE_5__.scoutSelectors.getSearchCriteria);
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.mergeMap)(searchCriteria => {
        const fineTunedSearchCriteria = this.generateFineTunedScoutCriteria({
          ...payload.searchInfo
        }, searchCriteria);
        return this.api.getFineTunedScoutSearchResults(fineTunedSearchCriteria);
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.mergeMap)(searchResult => {
        return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_1__.scoutActions.FineTunedScoutSearchSuccess({
          scoutSearch: searchResult
        })];
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.catchError)(error => {
        console.log('ReqSearchFineTunedScout: ', error.message);
        this.snackbar.open('There was an issue retrieving results for the current search criteria.', 'CLOSE', src_app_core_helpers_snackbar__WEBPACK_IMPORTED_MODULE_3__.errorConfig);
        return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_1__.scoutActions.FineTunedScoutSearchFail()];
      }));
    })));
    // #endregion
    // #region ReqScoutFormData
    this.ReqScoutFormData$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.ofType)(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_1__.scoutActions.ReqScoutFormData), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.mergeMap)(payload => {
      return this.scoutService.getScoutEditData(payload.scoutId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.mergeMap)(([scoutAndFineTune, crops, unitsOfMeasure]) => {
        return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_1__.scoutActions.ScoutFormDataSuccess({
          scoutAndFineTune,
          crops,
          unitsOfMeasure
        })];
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.catchError)(error => {
        console.log('ReqMarketFormData: ', error.message);
        return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_1__.scoutActions.ScoutFormDataFail()];
      }));
    })));
    // #endregion
    // #region ReqUserScoutCards
    this.ReqUserScoutCards$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.ofType)(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_1__.scoutActions.ReqUserScoutCards), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(payload => {
      return this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_9__.select)(src_app_core_ngrx_reducers_index__WEBPACK_IMPORTED_MODULE_2__.authSelectors.getUserEntities), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(entities => {
        return this.api.getEntityById(entities[0].id);
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(entity => {
        const tradingEntityId = entity.tradingEntities[0].id;
        return this.api.getUserScoutCards(tradingEntityId);
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(scoutCards => {
        return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_1__.scoutActions.UserScoutCardsSuccess({
          scoutCards
        })];
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.catchError)(error => {
        console.log('ReqUserScoutCards: ', error.message);
        return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_1__.scoutActions.UserScoutCardsFail()];
      }));
    })));
    // #endregion
    //#endregion
    //#region Update
    // #region ReqUpdateScout
    this.ReqUpdateScout$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.ofType)(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_1__.scoutActions.ReqUpdateScout), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(payload => {
      const scoutAndFineTuneChanges = {
        ...payload.scoutAndFineTune
      };
      return this.api.updateScout(scoutAndFineTuneChanges).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(scout => {
        return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_1__.scoutActions.UpdateScoutSuccess({
          scout
        })];
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.catchError)(error => {
        console.log('ReqUpdateMarket: ', error.message);
        return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_1__.scoutActions.UpdateScoutFail()];
      }));
    })));
    // #endregion
    //#endregion
    //#region Delete
    this.ReqDeleteScout$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.ofType)(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_1__.scoutActions.ReqDeleteScout), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.mergeMap)(payload => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.of)(payload).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.mergeMap)(({
        scoutId,
        clientUid
      }) => {
        return this.api.deleteScout(scoutId, clientUid);
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.mergeMap)(({
        id
      }) => {
        this.snackbar.open('Successfully Deleted The Scout.', 'CLOSE', src_app_core_helpers_snackbar__WEBPACK_IMPORTED_MODULE_3__.successConfig);
        return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_1__.scoutActions.DeleteScoutSuccess({
          scoutId: id
        })];
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.catchError)(error => {
        console.log('ReqDeleteScout: ', error.message);
        this.snackbar.open('An error occurred when deleting the Scout.', 'CLOSE', src_app_core_helpers_snackbar__WEBPACK_IMPORTED_MODULE_3__.errorConfig);
        return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_1__.scoutActions.DeleteScoutFail()];
      }));
    })));
  }
  static #_ = this.ɵfac = function MarketEffects_Factory(t) {
    return new (t || MarketEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](src_app_core_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_9__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](src_app_core_services_scout_scout_service__WEBPACK_IMPORTED_MODULE_4__.ScoutService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__.MatSnackBar));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjectable"]({
    token: MarketEffects,
    factory: MarketEffects.ɵfac
  });
}

/***/ }),

/***/ 5110:
/*!***********************************************************!*\
  !*** ./src/app/core/ngrx/entities/scout/scout.reducer.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   adapter: () => (/* binding */ adapter),
/* harmony export */   initialState: () => (/* binding */ initialState),
/* harmony export */   reducer: () => (/* binding */ reducer),
/* harmony export */   scoutFeatureKey: () => (/* binding */ scoutFeatureKey),
/* harmony export */   selectScoutId: () => (/* binding */ selectScoutId)
/* harmony export */ });
/* harmony import */ var _authState_auth_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../authState/auth.actions */ 6189);
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/entity */ 8825);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _scout_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scout.actions */ 7993);




const scoutFeatureKey = 'scout';
const adapter = (0,_ngrx_entity__WEBPACK_IMPORTED_MODULE_2__.createEntityAdapter)({
  selectId: selectScoutId
});
function selectScoutId(scout) {
  return scout.id;
}
const initialState = adapter.getInitialState({
  ids: [],
  entities: {},
  searchResult: null,
  searchValues: null,
  currentScout: null,
  fineTune: null
});
const reducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_scout_actions__WEBPACK_IMPORTED_MODULE_1__.ScoutSearchSuccess, _scout_actions__WEBPACK_IMPORTED_MODULE_1__.FineTunedScoutSearchSuccess, (state, action) => {
  return {
    ...state,
    searchResult: action.scoutSearch
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_scout_actions__WEBPACK_IMPORTED_MODULE_1__.ReqScoutSearch, _scout_actions__WEBPACK_IMPORTED_MODULE_1__.ReqUpdateSearchValues, (state, action) => {
  return {
    ...state,
    searchValues: action.scout
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_scout_actions__WEBPACK_IMPORTED_MODULE_1__.CreateScoutSuccess, _scout_actions__WEBPACK_IMPORTED_MODULE_1__.UpdateScoutSuccess, (state, action) => {
  if (action.scout) {
    const newState = adapter.upsertOne(action.scout, state);
    return {
      ...newState,
      searchResult: null,
      fineTune: null
    };
  } else {
    return state;
  }
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_scout_actions__WEBPACK_IMPORTED_MODULE_1__.ScoutFormDataSuccess, (state, action) => {
  if (action.scoutAndFineTune) {
    return {
      ...state,
      currentScout: action.scoutAndFineTune.scout,
      fineTune: action.scoutAndFineTune.fineTune
    };
  } else {
    return state;
  }
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_scout_actions__WEBPACK_IMPORTED_MODULE_1__.UserScoutCardsSuccess, (state, action) => {
  if (action.scoutCards) {
    const newState = adapter.upsertMany(action.scoutCards, state);
    return {
      ...newState,
      searchResult: null,
      fineTune: null
    };
  } else {
    return state;
  }
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_scout_actions__WEBPACK_IMPORTED_MODULE_1__.DeleteScoutSuccess, (state, action) => {
  const newState = adapter.removeOne(action.scoutId, state);
  return {
    ...newState,
    currentScout: null,
    fineTune: null
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_scout_actions__WEBPACK_IMPORTED_MODULE_1__.ReqFineTunedScoutSearch, (state, action) => {
  return {
    ...state,
    fineTune: action.searchInfo
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.on)(_authState_auth_actions__WEBPACK_IMPORTED_MODULE_0__.ReqLogoutAction, _scout_actions__WEBPACK_IMPORTED_MODULE_1__.ClearAllScouts, () => {
  return initialState;
}));

/***/ }),

/***/ 6427:
/*!*************************************************************!*\
  !*** ./src/app/core/ngrx/entities/scout/scout.selectors.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAllOrderedScoutCards: () => (/* binding */ getAllOrderedScoutCards),
/* harmony export */   getAllScoutCards: () => (/* binding */ getAllScoutCards),
/* harmony export */   getCurrentFullScout: () => (/* binding */ getCurrentFullScout),
/* harmony export */   getFineTune: () => (/* binding */ getFineTune),
/* harmony export */   getScoutCardEntities: () => (/* binding */ getScoutCardEntities),
/* harmony export */   getScoutCardIds: () => (/* binding */ getScoutCardIds),
/* harmony export */   getSearchCriteria: () => (/* binding */ getSearchCriteria),
/* harmony export */   getSearchResults: () => (/* binding */ getSearchResults),
/* harmony export */   getTotalScoutCards: () => (/* binding */ getTotalScoutCards),
/* harmony export */   selectScoutState: () => (/* binding */ selectScoutState)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _scout_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scout.reducer */ 5110);


const selectScoutState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createFeatureSelector)(_scout_reducer__WEBPACK_IMPORTED_MODULE_0__.scoutFeatureKey);
const {
  selectIds: getScoutCardIds,
  selectEntities: getScoutCardEntities,
  selectAll: getAllScoutCards,
  selectTotal: getTotalScoutCards
} = _scout_reducer__WEBPACK_IMPORTED_MODULE_0__.adapter.getSelectors(selectScoutState);
const getSearchResults = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(selectScoutState, scoutState => {
  return scoutState.searchResult || null;
});
const getSearchCriteria = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(selectScoutState, scoutState => {
  return scoutState.searchValues || null;
});
const getCurrentFullScout = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(selectScoutState, scoutState => {
  return scoutState.currentScout || null;
});
const getFineTune = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(selectScoutState, scoutState => {
  return scoutState.fineTune;
});
const getAllOrderedScoutCards = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(getAllScoutCards, scoutCards => {
  const orderedScoutCards = scoutCards.sort((first, second) => second.createdDate.getTime() - first.createdDate.getTime());
  return orderedScoutCards;
});

/***/ }),

/***/ 2447:
/*!**********************************************!*\
  !*** ./src/app/core/ngrx/helperFunctions.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addLoading: () => (/* binding */ addLoading),
/* harmony export */   getStateData: () => (/* binding */ getStateData),
/* harmony export */   removeLoading: () => (/* binding */ removeLoading),
/* harmony export */   saveStateData: () => (/* binding */ saveStateData)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 7178);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

// #region NGRX helpers
/**
 *  @summary Used in the ngrx reducers
 *   Removes loading for the action flow from the loading dictionary
 */
function removeLoading(state, payload) {
  try {
    const newState = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(state);
    delete newState['dictLoading'][payload.executedTime];
    return {
      ...newState
    };
  } catch {
    return {
      ...state,
      dictLoading: {}
    };
  }
}
/**
 *  @summary Removes loading for the action flow from the loading dictionary
 */
function addLoading(state, payload) {
  try {
    const newState = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(state);
    newState['dictLoading'][payload.executedTime] = payload.type;
    return {
      ...newState
    };
  } catch {
    return {
      ...state,
      dictLoading: {
        [payload.executedTime]: payload.type
      }
    };
  }
}
/**
 *
 * @param keyToSave  The location to save the data in the local storage
 * @param state The state which will be saved.
 * @param properties An array of of the properties to save from state. Nested properties can be retrieved through
 * by adding the . syntax ['nested.property']. if no properties are provided the entire state will be saved
 *
 * @summary this function will be used to save needed state values to local storage. These values will later
 *  be needed to hydrate state.
 */
function saveStateData(keyToSave, state, propertiesToSave) {
  if (propertiesToSave) {
    const dataToSave = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.pick)(state, propertiesToSave);
    localStorage.setItem(keyToSave, JSON.stringify(dataToSave));
  } else {
    localStorage.setItem(keyToSave, JSON.stringify(state));
  }
}
function getStateData(keyToGet) {
  return JSON.parse(localStorage.getItem(keyToGet));
}
// #endregion

/***/ }),

/***/ 2723:
/*!******************************************!*\
  !*** ./src/app/core/ngrx/ngrx.module.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NGRXModule: () => (/* binding */ NGRXModule)
/* harmony export */ });
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/snack-bar */ 9409);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers */ 7032);
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngrx/store-devtools */ 448);
/* harmony import */ var _app_state_app_state_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-state/app-state.actions */ 4651);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngrx/effects */ 1575);
/* harmony import */ var _authState_auth_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authState/auth.effects */ 2124);
/* harmony import */ var _app_state_app_state_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-state/app-state.effects */ 5308);
/* harmony import */ var _entities_delivery_points_delivery_points_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./entities/delivery-points/delivery-points.effects */ 7506);
/* harmony import */ var _entities_scout_scout_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./entities/scout/scout.effects */ 3071);
/* harmony import */ var _brokers_brokers_effects_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./brokers/brokers-effects.service */ 6382);
/* harmony import */ var _crop_crop_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./crop/crop.effects */ 5614);
/* harmony import */ var _entities_notifications_notifications_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./entities/notifications/notifications.effects */ 6335);







//#region Effects












//#endregion
class NGRXModule {
  static #_ = this.ɵfac = function NGRXModule_Factory(t) {
    return new (t || NGRXModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
    type: NGRXModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
    providers: [{
      provide: _angular_core__WEBPACK_IMPORTED_MODULE_10__.APP_INITIALIZER,
      useFactory: store => {
        return () => {
          store.dispatch((0,_app_state_app_state_actions__WEBPACK_IMPORTED_MODULE_2__.ReqCheckAuthorization)({
            executedTime: Date.now()
          }));
        };
      },
      multi: true,
      deps: [_ngrx_store__WEBPACK_IMPORTED_MODULE_11__.Store]
    }],
    imports: [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__.MatSnackBarModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_11__.StoreModule.forRoot(_reducers__WEBPACK_IMPORTED_MODULE_1__.reducers, {
      metaReducers: _reducers__WEBPACK_IMPORTED_MODULE_1__.metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_13__.StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production
    }), _ngrx_effects__WEBPACK_IMPORTED_MODULE_14__.EffectsModule.forRoot([_authState_auth_effects__WEBPACK_IMPORTED_MODULE_3__.AuthEffects, _app_state_app_state_effects__WEBPACK_IMPORTED_MODULE_4__.AppStateEffects, _entities_delivery_points_delivery_points_effects__WEBPACK_IMPORTED_MODULE_5__.DeliveryPointsEffects, _entities_scout_scout_effects__WEBPACK_IMPORTED_MODULE_6__.MarketEffects, _crop_crop_effects__WEBPACK_IMPORTED_MODULE_8__.CropEffects, _entities_notifications_notifications_effects__WEBPACK_IMPORTED_MODULE_9__.NotificationsEffects, _brokers_brokers_effects_service__WEBPACK_IMPORTED_MODULE_7__.BrokersEffects]), _ngrx_store__WEBPACK_IMPORTED_MODULE_11__.StoreModule, _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_13__.StoreDevtoolsModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_14__.EffectsModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](NGRXModule, {
    imports: [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__.MatSnackBarModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_11__.StoreRootModule, _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_13__.StoreDevtoolsModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_14__.EffectsRootModule],
    exports: [_ngrx_store__WEBPACK_IMPORTED_MODULE_11__.StoreModule, _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_13__.StoreDevtoolsModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_14__.EffectsModule]
  });
})();

/***/ }),

/***/ 2356:
/*!********************************************!*\
  !*** ./src/app/core/ngrx/paygate/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   paygateActions: () => (/* reexport module object */ _paygate_actions__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _paygate_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paygate.actions */ 3171);



/***/ }),

/***/ 3171:
/*!******************************************************!*\
  !*** ./src/app/core/ngrx/paygate/paygate.actions.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReqPaySubs: () => (/* binding */ ReqPaySubs),
/* harmony export */   ReqPaySubsFail: () => (/* binding */ ReqPaySubsFail),
/* harmony export */   ReqPaySubsSuccess: () => (/* binding */ ReqPaySubsSuccess)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 6270);

// #region ReqPaySubs
const ReqPaySubs = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Subscription modal] ReqPaySubs', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const ReqPaySubsFail = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqPaySubs] ReqPaySubsFail');
const ReqPaySubsSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[ReqPaySubs] ReqPaySubsSuccess');
//#endregion

/***/ }),

/***/ 7032:
/*!*********************************************!*\
  !*** ./src/app/core/ngrx/reducers/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   authSelectors: () => (/* binding */ authSelectors),
/* harmony export */   deliveryPointsSelectors: () => (/* binding */ deliveryPointsSelectors),
/* harmony export */   getAppState: () => (/* binding */ getAppState),
/* harmony export */   getAuthState: () => (/* binding */ getAuthState),
/* harmony export */   getDeliveryPointState: () => (/* binding */ getDeliveryPointState),
/* harmony export */   getScoutFormData: () => (/* binding */ getScoutFormData),
/* harmony export */   marketSelectors: () => (/* binding */ marketSelectors),
/* harmony export */   metaReducers: () => (/* binding */ metaReducers),
/* harmony export */   reducers: () => (/* binding */ reducers)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _authState_auth_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authState/auth.reducer */ 6086);
/* harmony import */ var _app_state_app_state_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-state/app-state.reducer */ 1383);
/* harmony import */ var _entities_scout_scout_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../entities/scout/scout.reducer */ 5110);
/* harmony import */ var _entities_delivery_points_delivery_points_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../entities/delivery-points/delivery-points.reducer */ 7704);
/* harmony import */ var _crop_crop_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../crop/crop.reducer */ 9589);
/* harmony import */ var _entities_notifications_notifications_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../entities/notifications/notifications.reducer */ 6974);
/* harmony import */ var _brokers_brokers_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../brokers/brokers.reducer */ 1893);
/* harmony import */ var _entities_delivery_points_delivery_points_selectors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../entities/delivery-points/delivery-points.selectors */ 6070);
/* harmony import */ var _entities_scout_scout_selectors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../entities/scout/scout.selectors */ 6427);
/* harmony import */ var _authState_auth_selectors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../authState/auth.selectors */ 6646);
/* harmony import */ var _crop_crop_selectors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../crop/crop.selectors */ 1923);













const reducers = {
  [_authState_auth_reducer__WEBPACK_IMPORTED_MODULE_1__.authFeatureKey]: _authState_auth_reducer__WEBPACK_IMPORTED_MODULE_1__.reducer,
  [_app_state_app_state_reducer__WEBPACK_IMPORTED_MODULE_2__.appStateFeatureKey]: _app_state_app_state_reducer__WEBPACK_IMPORTED_MODULE_2__.reducer,
  [_entities_delivery_points_delivery_points_reducer__WEBPACK_IMPORTED_MODULE_4__.deliveryPointsFeatureKey]: _entities_delivery_points_delivery_points_reducer__WEBPACK_IMPORTED_MODULE_4__.reducer,
  [_entities_scout_scout_reducer__WEBPACK_IMPORTED_MODULE_3__.scoutFeatureKey]: _entities_scout_scout_reducer__WEBPACK_IMPORTED_MODULE_3__.reducer,
  [_crop_crop_reducer__WEBPACK_IMPORTED_MODULE_5__.cropFeatureKey]: _crop_crop_reducer__WEBPACK_IMPORTED_MODULE_5__.reducer,
  [_entities_notifications_notifications_reducer__WEBPACK_IMPORTED_MODULE_6__.notificationsFeatureKey]: _entities_notifications_notifications_reducer__WEBPACK_IMPORTED_MODULE_6__.reducer,
  [_brokers_brokers_reducer__WEBPACK_IMPORTED_MODULE_7__.brokersFeatureKey]: _brokers_brokers_reducer__WEBPACK_IMPORTED_MODULE_7__.reducer
};
const metaReducers = !src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production ? [] : [];
// #region Selectors
// #region Feature Selectors
const getAppState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_12__.createFeatureSelector)('appState');
const getAuthState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_12__.createFeatureSelector)(_authState_auth_reducer__WEBPACK_IMPORTED_MODULE_1__.authFeatureKey);
const getDeliveryPointState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_12__.createFeatureSelector)(_entities_delivery_points_delivery_points_reducer__WEBPACK_IMPORTED_MODULE_4__.deliveryPointsFeatureKey);
// #endregion
//#endregion
// #region App State
//#endregion
// #region Auth State
//#endregion
// #region Create/Edit Market
const getScoutFormData = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_12__.createSelector)(_entities_scout_scout_selectors__WEBPACK_IMPORTED_MODULE_9__.getScoutCardEntities, getAppState, _crop_crop_selectors__WEBPACK_IMPORTED_MODULE_11__.selectCropState, (scoutDictionary, appState, cropState, props) => {
  try {
    const scout = props.scoutId ? scoutDictionary[props.scoutId] : null;
    const crops = cropState.crops;
    const unitsOfMeasure = appState.unitsOfMeasure;
    return {
      scout: scout,
      crops,
      unitsOfMeasure
    };
  } catch (error) {
    return null;
  }
});
//#endregion
const authSelectors = _authState_auth_selectors__WEBPACK_IMPORTED_MODULE_10__;
const deliveryPointsSelectors = _entities_delivery_points_delivery_points_selectors__WEBPACK_IMPORTED_MODULE_8__;
const marketSelectors = _entities_scout_scout_selectors__WEBPACK_IMPORTED_MODULE_9__;

/***/ }),

/***/ 7588:
/*!**************************************************!*\
  !*** ./src/app/core/services/api/api.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApiService: () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var _helpers_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../helpers/constants */ 9487);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 3738);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 9736);
/* harmony import */ var _helpers_helperFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/helperFunctions */ 1468);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/compat/auth */ 7509);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 3159);











const API = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.API;
class ApiService {
  constructor(http, afAuth, afs) {
    this.http = http;
    this.afAuth = afAuth;
    this.afs = afs;
    this.baseHeaders = {
      firebaseToken: null,
      Authorization: 'Bearer HhnIC9a99hqp7aW3Vx_Rx_43RcDLoWIxxjw8Ehs-Iqpeg2IktY6UYuMNmGGzGdq4ouao0MV0gAIF6kTRaa7zE2CX8GEAEZC9y8PaktdYCUisNWu_aMeO5D4sO5bHMxvZ-9TtIJuSyuPmlve-lsUaGUwhxE-fIGwt2n-igeyZsxuZVtjqUSRitE4u8rtVIJfdlmPhnmvgvWWEr-Gtf5HcmwxI1JU_TTnRc4bTRI6QnU2p4CRa73-ssLB9JBuIKHSEFkoNY8ZlDxUq6a8c_voqdA86Fi0_VefF5aJhVhSnwZi322L4E0YQZNUOMGJGIYhPL45s_V8bsMLU8DIDqS0HUdXB_9cooBGmVMXPqbvBxP21jbBbi37zB3OkiqnE6rOQKpcT-sQrvNrSdE8esnxHrphnyBs1uKGCfSMZHOjQdPHb4PBqcQTc7l97hO0__OSR2__GQ-OVRQ9RvcnQcYRgFu5ulQ5S0gTsDOMihapj4aoe9xA1jHm_6JkmJerXtHzsYTd_jtQps-kjoxugFsRv8BiqLUszkB7Eqd5QjzQ6m6U'
    };
    this.afAuth.idToken.subscribe(token => {
      this.baseHeaders.firebaseToken = token ? token : '';
    });
  }
  //#region AUTH
  getUser(clientUid = null) {
    if (clientUid) {
      return this.http.get(`${API}/auth/login`, {
        headers: this.baseHeaders,
        params: {
          clientUid
        }
      });
    }
    return this.http.get(`${API}/auth/login`, {
      headers: this.baseHeaders
    });
  }
  registerUser(email, phoneNumber) {
    return this.http.post(`${API}/auth/register`, {
      email,
      phoneNumber
    }, {
      headers: this.baseHeaders
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(sqlUser => {
      return this.afs.doc(`Users/${sqlUser.skuduId}`).update({
        matchUser: true,
        verification: _helpers_constants__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_VERIFICATION
      });
    }));
  }
  deleteAccountRequest(user) {
    return this.http.post(`${API}/auth/delete`, {
      ...user
    }, {
      headers: this.baseHeaders
    });
  }
  getEntityById(id) {
    return this.http.get(`${API}/entity`, {
      headers: this.baseHeaders,
      params: {
        id: id.toString()
      }
    });
  }
  getEntitysDeliveryPoints(entityId) {
    return this.http.get(`${API}/delivery-points/entity`, {
      headers: this.baseHeaders,
      params: {
        id: entityId.toString()
      }
    });
  }
  saveAdditionalEntityDetails(additionalDetails) {
    return this.http.post(`${API}/entity/equity-info`, {
      ...additionalDetails
    }, {
      headers: this.baseHeaders
    });
  }
  getAdditionalEntityDetails(id) {
    return this.http.get(`${API}/entity/equity-info`, {
      headers: this.baseHeaders,
      params: {
        id: id.toString()
      }
    });
  }
  //#endregion
  //#region DELIVERY MANAGEMENT PAGE
  getPublicDeliveryPoints() {
    return this.http.get(`${API}/delivery-points/is-public`, {
      headers: this.baseHeaders
    });
  }
  createDeliveryPoint(deliveryPoint, clientUid) {
    delete deliveryPoint.id;
    return this.http.post(`${API}/delivery-points/create`, {
      ...deliveryPoint
    }, {
      headers: this.baseHeaders,
      params: {
        clientUid: clientUid
      }
    });
  }
  updateDeliveryPoint(deliveryPoint) {
    return this.http.post(`${API}/delivery-points/update`, {
      ...deliveryPoint
    }, {
      headers: this.baseHeaders
    });
  }
  deleteDeliveryPoint(deliveryPointId) {
    return this.http.post(`${API}/delivery-points/delete`, {
      id: deliveryPointId
    }, {
      headers: this.baseHeaders
    });
  }
  getLocationTypes() {
    return this.http.get(`${API}/location-types/all`, {
      headers: this.baseHeaders
    });
  }
  //#endregion
  //#region APP
  getAllCrops() {
    return this.http.get(`${API}/crops/crop-categories`, {
      headers: this.baseHeaders
    });
  }
  getUnitOfMeasure() {
    return this.http.get(`${API}/unitsOfMeasure/all`, {
      headers: this.baseHeaders
    });
  }
  updateUser(detailsToUpdate) {
    return this.http.post(`${API}/user/update`, {
      ...detailsToUpdate
    }, {
      headers: this.baseHeaders
    });
  }
  //#endregion
  //#region SCOUTS
  createScout(scoutAndFineTune) {
    return this.http.post(`${API}/scout`, {
      scout: scoutAndFineTune.scout,
      fineTune: scoutAndFineTune.fineTune
    }, {
      headers: this.baseHeaders
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(scoutCard => (0,_helpers_helperFunctions__WEBPACK_IMPORTED_MODULE_2__.dateStringToDate)(scoutCard)));
  }
  getScoutSearchResults(scoutSearch) {
    return this.http.post(`${API}/scout/search`, {
      ...scoutSearch
    }, {
      headers: this.baseHeaders
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(searchReturn => {
      return {
        ...searchReturn
      };
    }));
  }
  getFineTunedScoutSearchResults(scoutSearch) {
    return this.http.post(`${API}/scout/fine-tune`, {
      ...scoutSearch
    }, {
      headers: this.baseHeaders
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(searchReturn => {
      return {
        ...searchReturn
      };
    }));
  }
  getScoutById(scoutId) {
    return this.http.get(`${API}/scout/full`, {
      headers: this.baseHeaders,
      params: {
        id: scoutId.toString()
      }
    });
  }
  getScoutCardById(scoutId) {
    return this.http.get(`${API}/scout`, {
      headers: this.baseHeaders,
      params: {
        id: scoutId.toString()
      }
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(scoutCard => (0,_helpers_helperFunctions__WEBPACK_IMPORTED_MODULE_2__.dateStringToDate)(scoutCard)));
  }
  getUserScoutCards(tradingEntityId) {
    return this.http.get(`${API}/scout`, {
      headers: this.baseHeaders,
      params: {
        tradingEntityId: tradingEntityId.toString()
      }
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(scoutCards => (0,_helpers_helperFunctions__WEBPACK_IMPORTED_MODULE_2__.dateStringToDate)(scoutCards)));
  }
  updateScout(scoutAndFineTune) {
    return this.http.post(`${API}/scout/update`, {
      scout: scoutAndFineTune.scout,
      fineTune: scoutAndFineTune.fineTune
    }, {
      headers: this.baseHeaders
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(scoutCard => (0,_helpers_helperFunctions__WEBPACK_IMPORTED_MODULE_2__.dateStringToDate)(scoutCard)));
  }
  deleteScout(scoutId, clientUid = null) {
    const params = clientUid ? {
      clientUid
    } : {};
    return this.http.post(`${API}/scout/delete`, {
      id: scoutId
    }, {
      headers: this.baseHeaders,
      params: {
        ...params
      }
    });
  }
  //#endregion
  //#region LOTS
  createLot(lot, clientUid = null) {
    const params = clientUid ? {
      clientUid
    } : {};
    return this.http.post(`${API}/lot`, {
      ...lot
    }, {
      headers: this.baseHeaders,
      params: {
        ...params
      }
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(lotCard => (0,_helpers_helperFunctions__WEBPACK_IMPORTED_MODULE_2__.dateStringToDate)(lotCard)));
  }
  getLotById(lotId) {
    return this.http.get(`${API}/lot/full`, {
      headers: this.baseHeaders,
      params: {
        id: lotId.toString()
      }
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(lotCard => (0,_helpers_helperFunctions__WEBPACK_IMPORTED_MODULE_2__.dateStringToDate)(lotCard)));
  }
  getLotCardById(lotId) {
    return this.http.get(`${API}/lot`, {
      headers: this.baseHeaders,
      params: {
        id: lotId.toString()
      }
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(lotCard => (0,_helpers_helperFunctions__WEBPACK_IMPORTED_MODULE_2__.dateStringToDate)(lotCard)));
  }
  updateLot(changes, clientUid = null) {
    const params = clientUid ? {
      clientUid
    } : {};
    return this.http.post(`${API}/lot/update`, {
      ...changes
    }, {
      headers: this.baseHeaders,
      params: {
        ...params
      }
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(lotCard => (0,_helpers_helperFunctions__WEBPACK_IMPORTED_MODULE_2__.dateStringToDate)(lotCard)));
  }
  privatiseLots(lotIds) {
    return this.http.post(`${API}/lot/privatise-lots`, lotIds, {
      headers: this.baseHeaders
    });
  }
  getUserLotCards(tradingEntityId) {
    return this.http.get(`${API}/lot`, {
      headers: this.baseHeaders,
      params: {
        tradingEntityId: tradingEntityId.toString()
      }
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(lotCards => {
      const convertedLotCards = (0,_helpers_helperFunctions__WEBPACK_IMPORTED_MODULE_2__.dateStringToDate)(lotCards);
      return convertedLotCards;
    }));
  }
  deleteLot(lotId, clientUid = null) {
    const params = clientUid ? {
      clientUid
    } : {};
    return this.http.post(`${API}/lot/delete`, {
      id: lotId
    }, {
      headers: this.baseHeaders,
      params: {
        ...params
      }
    });
  }
  //#endregion
  //#region LOT MATCHES
  createLotMatch(lotMatch) {
    return this.http.post(`${API}/match`, {
      ...lotMatch
    }, {
      headers: this.baseHeaders
    });
  }
  getLotMatches(lotId, radius = 50) {
    return this.http.get(`${API}/match`, {
      headers: this.baseHeaders,
      params: {
        lotId: lotId.toString(),
        radius: radius?.toString() || null
      }
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(lotMatches => {
      return lotMatches.map(lotMatch => {
        return {
          ...lotMatch,
          buyerDetails: (0,_helpers_helperFunctions__WEBPACK_IMPORTED_MODULE_2__.dateStringToDate)(lotMatch.buyerDetails),
          sellerDetails: (0,_helpers_helperFunctions__WEBPACK_IMPORTED_MODULE_2__.dateStringToDate)(lotMatch.sellerDetails)
        };
      });
    }));
  }
  getLotMatchIterations(lotMatchId, clientUid = null) {
    const params = clientUid ? {
      id: lotMatchId.toString(),
      clientUid: clientUid
    } : {
      id: lotMatchId.toString()
    };
    return this.http.get(`${API}/match/iterations`, {
      headers: this.baseHeaders,
      params: {
        ...params
      }
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(lotMatchIterations => {
      return lotMatchIterations.map(lotMatchIteration => {
        return {
          ...(0,_helpers_helperFunctions__WEBPACK_IMPORTED_MODULE_2__.dateStringToDate)(lotMatchIteration),
          buyerDetails: (0,_helpers_helperFunctions__WEBPACK_IMPORTED_MODULE_2__.dateStringToDate)(lotMatchIteration.buyerDetails),
          sellerDetails: (0,_helpers_helperFunctions__WEBPACK_IMPORTED_MODULE_2__.dateStringToDate)(lotMatchIteration.sellerDetails)
        };
      });
    }));
  }
  updateLotMatch(lotMatch) {
    return this.http.post(`${API}/match/update`, {
      ...lotMatch
    }, {
      headers: this.baseHeaders
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(lotMatchIteration => {
      return {
        ...(0,_helpers_helperFunctions__WEBPACK_IMPORTED_MODULE_2__.dateStringToDate)(lotMatchIteration),
        buyerDetails: (0,_helpers_helperFunctions__WEBPACK_IMPORTED_MODULE_2__.dateStringToDate)(lotMatchIteration.buyerDetails),
        sellerDetails: (0,_helpers_helperFunctions__WEBPACK_IMPORTED_MODULE_2__.dateStringToDate)(lotMatchIteration.sellerDetails)
      };
    }));
  }
  getHasBroker(lotIds) {
    return this.http.get(`${API}/match/hasBroker`, {
      headers: this.baseHeaders,
      params: {
        lotIds: lotIds.toString()
      }
    });
  }
  sendIntroductionEmail(lotMatchId) {
    return this.http.post(`${API}/match/introduction-email`, {
      lotMatchId
    }, {
      headers: this.baseHeaders
    });
  }
  //#endregion
  // #region NEGOTIATIONS
  getUserNegotiationCards(tradingEntityId, clientUid = null) {
    const params = clientUid ? {
      tradingEntityId: tradingEntityId.toString(),
      clientUid
    } : {
      tradingEntityId: tradingEntityId.toString()
    };
    return this.http.get(`${API}/negotiation`, {
      headers: this.baseHeaders,
      params: {
        ...params
      }
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(negotiationCards => {
      const convertedNegotiationCards = (0,_helpers_helperFunctions__WEBPACK_IMPORTED_MODULE_2__.dateStringToDate)(negotiationCards);
      return convertedNegotiationCards;
    }));
  }
  completeNegotiation(lotMatch, clientHasBroker, counterPartyHasBroker) {
    return this.http.post(`${API}/match/complete`, {
      ...lotMatch
    }, {
      headers: this.baseHeaders,
      params: {
        clientHasBroker: clientHasBroker.toString(),
        counterPartyHasBroker: counterPartyHasBroker.toString()
      }
    });
  }
  declineNegotiation(lotMatch) {
    return this.http.post(`${API}/match/decline`, {
      ...lotMatch
    }, {
      headers: this.baseHeaders
    });
  }
  clearNegotiation(lotMatch, requestedBy) {
    return this.http.post(`${API}/match/clear`, {
      ...lotMatch
    }, {
      headers: this.baseHeaders,
      params: {
        requestedBy: requestedBy
      }
    });
  }
  getAvailableMatchedIds(lotMatchId, clientUid = null) {
    const params = clientUid ? {
      lotMatchId: lotMatchId.toString(),
      clientUid: clientUid
    } : {
      lotMatchId: lotMatchId.toString()
    };
    return this.http.get(`${API}/match/lot-match-ids`, {
      headers: this.baseHeaders,
      params: {
        ...params
      }
    });
  }
  // #endregion
  // #region FORM DATA
  getCropCategories() {
    return this.http.get(`${API}/form-options/crop-categories`, {
      headers: this.baseHeaders
    });
  }
  getCropGrades(cropId) {
    return this.http.get(`${API}/form-options/grades`, {
      headers: this.baseHeaders,
      params: {
        cropId: cropId.toString()
      }
    });
  }
  getCropPackaging(cropId) {
    return this.http.get(`${API}/form-options/packaging`, {
      headers: this.baseHeaders,
      params: {
        cropId: cropId.toString()
      }
    });
  }
  getIncoTerms() {
    return this.http.get(`${API}/form-options/inco-terms`, {
      headers: this.baseHeaders
    });
  }
  getPaymentOptions() {
    return this.http.get(`${API}/form-options/payment-terms`, {
      headers: this.baseHeaders
    });
  }
  getCropMonths(cropId, exchangeId) {
    return this.http.get(`${API}/form-options/months`, {
      headers: this.baseHeaders,
      params: {
        cropId: cropId.toString(),
        exchangeId: exchangeId.toString()
      }
    });
  }
  // #endregion
  // #region ANALYTICS
  getAnalytics() {
    return this.http.get(`${API}/analytics/all`, {
      headers: this.baseHeaders
    });
  }
  getLotsInDateRange(dateRange) {
    return this.http.post(`${API}/analytics/lots`, {
      ...dateRange
    }, {
      headers: this.baseHeaders
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(lots => (0,_helpers_helperFunctions__WEBPACK_IMPORTED_MODULE_2__.dateStringToDate)(lots)));
  }
  // #endregion
  //#region VERIFICATION
  sendVerificationFormEmail() {
    return this.http.get(`${API}/verification/email`, {
      headers: this.baseHeaders
    });
  }
  //#endregion
  //#region BROWSE THE MARKET
  getMarketLotCards(marketFilters) {
    return this.http.post(`${API}/market/filteredLots`, {
      ...marketFilters
    }, {
      headers: this.baseHeaders
    });
  }
  getMarketScoutCards(marketFilters) {
    return this.http.post(`${API}/market/filteredScouts`, {
      ...marketFilters
    }, {
      headers: this.baseHeaders
    });
  }
  //#endregion
  // #region BROKERS
  sendPairingNotification(fromBroker, newRequest, brokerUid, clientUid) {
    return this.http.post(`${API}/broker/pairingNotification`, {
      fromBroker: fromBroker,
      newRequest,
      clientUid,
      brokerUid: brokerUid
    }, {
      headers: this.baseHeaders
    });
  }
  static #_ = this.ɵfac = function ApiService_Factory(t) {
    return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_7__.AngularFireAuth), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_8__.AngularFirestore));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: ApiService,
    factory: ApiService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 4964:
/*!****************************************************!*\
  !*** ./src/app/core/services/auth/auth.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var C_Users_Developer_Desktop_Dev_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../api/api.service */ 7588);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 1891);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 9736);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 6360);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 1527);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 3839);
/* harmony import */ var _core_helpers_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/helpers/constants */ 9487);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/core */ 8626);
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/compat/app */ 1953);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 3159);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/compat/auth */ 7509);















class AuthService {
  constructor(router, afs, afAuth, api) {
    this.router = router;
    this.afs = afs;
    this.afAuth = afAuth;
    this.api = api;
  }
  getUser(uid, actionByAgent = false) {
    const documentSnapshot = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(this.afs.doc(`Users/${uid}`).ref);
    return documentSnapshot.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(ref => {
      return ref.get();
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(doc => {
      if (doc.exists) {
        const user = doc.data();
        if (user.matchUser) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.combineLatest)([(0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(user), actionByAgent ? this.api.getUser(uid) : this.api.getUser()]);
        } else {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.combineLatest)([(0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(user), this.api.registerUser(user.email, user.phone)]);
        }
      } else {
        throw new Error('Null User');
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(([user, sqlUser]) => {
      if (user) {
        return {
          ...user,
          verification: user.verification ?? _core_helpers_constants__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_VERIFICATION,
          hasBrowsedMarket: user.hasBrowsedMarket ? user.hasBrowsedMarket : false,
          SQL_id: sqlUser.id,
          entities: sqlUser.entities,
          hasB_BBEE: sqlUser.hasB_BBEE
        };
      } else {
        return null;
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.retry)(5));
  }
  getAuthorization() {
    return this.afAuth.authState.pipe();
  }
  emailLogin(email, password) {
    var _this = this;
    return (0,C_Users_Developer_Desktop_Dev_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const userCredentials = yield _this.afAuth.signInWithEmailAndPassword(email, password);
        return userCredentials;
      } catch (error) {
        console.log('emailLogin: ', error);
        throw error.code;
      }
    })();
  }
  providerLogin() {
    var _this2 = this;
    return (0,C_Users_Developer_Desktop_Dev_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const provider = new firebase_compat_app__WEBPACK_IMPORTED_MODULE_4__["default"].auth.GoogleAuthProvider();
        const firebaseUser = yield _this2.afAuth.signInWithPopup(provider);
        const user = _this2.userDataHelper(firebaseUser);
        if (firebaseUser.additionalUserInfo.isNewUser) {
          yield _this2.updateUserData(user);
        }
      } catch (error) {
        console.log('providerLogin', {
          error
        });
        throw error.code ? error.code : error.message;
      }
    })();
  }
  nativeProviderLogin() {
    var _this3 = this;
    return (0,C_Users_Developer_Desktop_Dev_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const googleUser = yield _capacitor_core__WEBPACK_IMPORTED_MODULE_3__.Plugins.GoogleAuth.signIn();
        const credential = firebase_compat_app__WEBPACK_IMPORTED_MODULE_4__["default"].auth.GoogleAuthProvider.credential(googleUser.authentication.idToken);
        const firebaseUser = yield _this3.afAuth.signInWithCredential(credential);
        const user = _this3.userDataHelper(firebaseUser);
        yield _this3.nativeCreateUser(user);
      } catch (error) {
        console.log('nativeProviderLogin', {
          error
        });
        throw error.code ? error.code : error.message;
      }
    })();
  }
  emailSignUp(email, password, signUpData) {
    var _this4 = this;
    return (0,C_Users_Developer_Desktop_Dev_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const userCred = yield _this4.afAuth.createUserWithEmailAndPassword(email, password);
        let data = {
          uid: userCred.user.uid,
          email: email,
          firstname: signUpData.name,
          lastname: signUpData.surname,
          phone: signUpData.phone,
          location: signUpData.location,
          token: null
        };
        if (signUpData.grainSAId) {
          data.grainSA = {
            grainSAId: signUpData.grainSAId,
            isVerified: false
          };
        }
        yield _this4.createUser(data, data.uid);
        return {
          user: data
        };
      } catch (error) {
        console.log('emailSignUp', {
          error
        });
        throw error.code ? error.code : error.message;
      }
    })();
  }
  createUser(data, uid) {
    var _this5 = this;
    return (0,C_Users_Developer_Desktop_Dev_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const userCol = yield _this5.afs.collection('/Users', ref => ref.where('email', '==', data.email.toLowerCase()).where('archived', '==', 0)).get().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.take)(1)).toPromise();
        const doesExist = !userCol.empty;
        if (!doesExist) {
          const userRef = _this5.afs.doc(`Users/${uid}`);
          data.archived = 0;
          data.createdAt = Date.now();
          data.phone = data.phone;
          data.location = data.location;
          data.updatedAt = Date.now();
          data.email = data.email.toLocaleLowerCase();
          if (data.grainSA) data.grainSA = {
            grainSAId: data.grainSA.grainSAId,
            isVerified: data.grainSA.isVerified
          };
          userRef.set(data); // Creates the document for the first time user on the first login.
        } else {
          const userData = {
            ...data,
            archived: 0,
            uid: uid,
            email: data.email.toLocaleLowerCase()
          };
          const newUserRef = _this5.afs.doc(`Users/${uid}`);
          yield newUserRef.set(userData).then(() => {
            userCol.forEach(doc => {
              const oldUserRef = doc.ref;
              oldUserRef.update({
                archived: 1
              });
            });
          });
        }
        return 'Success';
      } catch (error) {
        console.log('createUser', {
          error
        });
        throw error;
      }
    })();
  }
  nativeCreateUser(data) {
    var _this6 = this;
    return (0,C_Users_Developer_Desktop_Dev_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const userRef = _this6.afs.doc(`Users/${data.uid}`);
        const doesExist = yield _this6.checkIfRefExists(userRef);
        if (!doesExist) {
          userRef.set(data);
        }
      } catch (error) {
        console.log('nativeCreateUser', error);
        return Promise.reject('fail');
      }
    })();
  }
  updateUserData(data) {
    var _this7 = this;
    return (0,C_Users_Developer_Desktop_Dev_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const userRef = _this7.afs.doc(`Users/${data.uid}`);
        const doesExist = yield _this7.checkIfRefExists(userRef);
        if (!doesExist) {
          userRef.set(data);
        } else {
          userRef.update({
            ...data,
            updatedAt: Date.now()
          });
        }
        return 'success';
      } catch (error) {
        console.log('updateUserData', error);
        return Promise.reject('fail');
      }
    })();
  }
  verifyUsers(usersToBeVerified) {
    var _this8 = this;
    return (0,C_Users_Developer_Desktop_Dev_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let failedUsersList = usersToBeVerified.map(user => user.fullName);
      let totalUsersToUpdate = usersToBeVerified.length;
      try {
        for (let i = 0; i < usersToBeVerified.length; i++) {
          const failedUserName = yield _this8.updateVerification(usersToBeVerified[i]);
          if (failedUserName !== null) {
            failedUsersList = failedUsersList.filter(fullName => fullName !== failedUserName);
          }
        }
        const singularOrPlural = totalUsersToUpdate === 1 ? '' : 's';
        const usersToRetry = failedUsersList.join(', ');
        return failedUsersList.length === 0 ? `Successfully Verified ${totalUsersToUpdate} User${singularOrPlural}.` : `Failed to verify ${failedUsersList.length} of ${totalUsersToUpdate}. Please retry for the following users: ${usersToRetry}`;
      } catch (error) {
        console.log('Verify Users Error: ', error);
        const usersToRetry = failedUsersList.join(', ');
        return Promise.reject(`Failed to verify ${failedUsersList.length} of ${totalUsersToUpdate}. Please retry for the following users: ${usersToRetry}`);
      }
    })();
  }
  updateVerification(userToBeVerified) {
    var _this9 = this;
    return (0,C_Users_Developer_Desktop_Dev_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const userRef = _this9.afs.doc(`Users/${userToBeVerified.uid}`);
      const doesExist = yield _this9.checkIfRefExists(userRef);
      if (doesExist) {
        yield userRef.update({
          verification: userToBeVerified.verification
        });
        return userToBeVerified.fullName;
      }
      return null;
    })();
  }
  getUsersForVerification() {
    return this.afs.collection('Users', userRef => userRef.where('matchUser', '==', true)).valueChanges();
  }
  checkIfRefExists(ref) {
    return (0,C_Users_Developer_Desktop_Dev_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const snap = yield ref.get().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.take)(1)).toPromise();
      return snap.exists ? true : false;
    })();
  }
  resetPassword(email) {
    return this.afAuth.sendPasswordResetEmail(email);
  }
  logout() {
    var _this10 = this;
    return (0,C_Users_Developer_Desktop_Dev_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this10.afAuth.signOut();
      _this10.router.navigate([_core_helpers_constants__WEBPACK_IMPORTED_MODULE_2__.SIGNIN_ROUTE]);
    })();
  }
  userDataHelper(firebaseUser) {
    return {
      firstname: firebaseUser.user.displayName,
      email: firebaseUser.user.email,
      uid: firebaseUser.user.uid,
      archived: 0,
      lastname: '',
      createdAt: Date.now(),
      updatedAt: Date.now(),
      location: '',
      matchUser: !firebaseUser.additionalUserInfo.isNewUser,
      phone: firebaseUser.user.phoneNumber || ''
    };
  }
  static #_ = this.ɵfac = function AuthService_Factory(t) {
    return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_13__.AngularFirestore), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_14__.AngularFireAuth), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_api_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjectable"]({
    token: AuthService,
    factory: AuthService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 250:
/*!**********************************************************!*\
  !*** ./src/app/core/services/brokers/brokers.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrokersService: () => (/* binding */ BrokersService)
/* harmony export */ });
/* harmony import */ var C_Users_Developer_Desktop_Dev_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 3159);




class BrokersService {
  constructor(afs) {
    this.afs = afs;
  }
  getBrokers() {
    return this.afs.collection('Users', userRef => userRef.where('isBroker', '==', true)).valueChanges();
  }
  getClientByEmail(email) {
    return this.afs.collection('Users', userRef => userRef.where('email', '==', email)).valueChanges();
  }
  getPendingBrokerRequests(brokerUid) {
    return this.afs.collection('BrokerRequests', userRef => userRef.where('brokerUid', '==', brokerUid).where('acceptedRequest', '==', false)).valueChanges();
  }
  getAcceptedBrokerRequests(brokerUid) {
    return this.afs.collection('BrokerRequests', userRef => userRef.where('brokerUid', '==', brokerUid).where('acceptedRequest', '==', true)).valueChanges();
  }
  getBrokerRequest(brokerUid, clientUid) {
    return this.afs.collection('BrokerRequests', userRef => userRef.where('clientUid', '==', clientUid)).valueChanges();
  }
  getClients(clientIds) {
    return this.afs.collection('Users', userRef => userRef.where('uid', 'in', clientIds)).valueChanges();
  }
  getClientBrokerRequests(uid) {
    return this.afs.collection('BrokerRequests', brokerRequestsRef => brokerRequestsRef.where('clientUid', '==', uid)).valueChanges();
  }
  createRequest(brokerUid, clientUid, sentByBroker) {
    try {
      this.afs.doc(`BrokerRequests/${brokerUid}-${clientUid}`).set({
        acceptedRequest: false,
        brokerUid: brokerUid,
        clientUid: clientUid,
        expiryDate: 0,
        sentByBroker: sentByBroker
      });
      return 'Success';
    } catch (error) {
      console.log('createBrokerRequest', {
        error
      });
      throw error;
    }
  }
  deleteRequest(brokerUid, clientUid) {
    try {
      this.afs.doc(`BrokerRequests/${brokerUid}-${clientUid}`).delete();
      return 'Success';
    } catch (error) {
      console.log('createBrokerRequest', {
        error
      });
      throw error;
    }
  }
  acceptRequest(brokerUid, clientUid) {
    try {
      this.afs.doc(`BrokerRequests/${brokerUid}-${clientUid}`).update({
        acceptedRequest: true,
        expiryDate: new Date().setFullYear(new Date().getFullYear() + 1),
        brokerAdminRole: true
      });
      return 'Success';
    } catch (error) {
      console.log('createBrokerRequest', {
        error
      });
      throw error;
    }
  }
  toggleBrokerAdminRole(brokerUid, clientUid, adminRole) {
    try {
      return this.afs.doc(`BrokerRequests/${brokerUid}-${clientUid}`).update({
        brokerAdminRole: adminRole
      });
    } catch (error) {
      console.log('toggleBrokerAdminRole', {
        error
      });
      throw error;
    }
  }
  createNegotiationDocument(lotMatchId, sellerEmail, buyerEmail, sellerPaid, buyerPaid) {
    var _this = this;
    return (0,C_Users_Developer_Desktop_Dev_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _this.afs.collection(`BrokerNegotiations`).add({
          lotMatchId: lotMatchId,
          sellerEmail: sellerEmail,
          buyerEmail: buyerEmail,
          sellerPaid: sellerPaid,
          buyerPaid: buyerPaid,
          emailSent: false
        });
        return 'Success';
      } catch (error) {
        console.log('createBrokerNegotiationDocument', {
          error
        });
        throw error;
      }
    })();
  }
  updateBrokerNegotiationDocument(brokerNegotiation) {
    try {
      this.afs.collection('BrokerNegotiations', brokerNegotiationRef => brokerNegotiationRef.where('lotMatchId', '==', brokerNegotiation.lotMatchId)).get().subscribe(brokerNegotiations => {
        brokerNegotiations.forEach(document => {
          document.ref.update({
            ...brokerNegotiation
          });
        });
      });
      return 'Success';
    } catch (error) {
      console.log('updateBrokerNegotiationDocument: ', {
        error
      });
      throw error;
    }
  }
  getBrokerNegotiations(lotMatchIds) {
    return this.afs.collection('BrokerNegotiations', brokerNegotiationRef => brokerNegotiationRef.where('lotMatchId', 'in', lotMatchIds)).valueChanges();
  }
  updateBrokerNegotiationEmailStatus(lotMatchId) {
    try {
      this.afs.collection('BrokerNegotiations', brokerNegotiationRef => brokerNegotiationRef.where('lotMatchId', '==', lotMatchId)).get().subscribe(brokerNegotiations => {
        brokerNegotiations.forEach(brokerNegotiation => {
          brokerNegotiation.ref.update({
            emailSent: true
          });
        });
      });
      return 'Success';
    } catch (error) {
      console.log('updateBrokerRequest', {
        error
      });
      throw error;
    }
  }
  getGeocodedAddresses(locations) {
    var _this2 = this;
    return (0,C_Users_Developer_Desktop_Dev_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.geocoder = new google.maps.Geocoder();
      var coordsArray = [];
      for (let i = 0; i < locations.length; i++) {
        yield _this2.geocoder.geocode({
          address: locations[i]
        }, (results, status) => {
          if (status == google.maps.GeocoderStatus.OK) {
            let coords = {
              lat: results[0].geometry.location.lat(),
              lng: results[0].geometry.location.lng()
            };
            coordsArray = [...coordsArray, coords];
          } else {
            console.log('Error: ', results, ' & Status: ', status);
            let coords = {
              lat: 0,
              lng: 0
            };
            coordsArray = [...coordsArray, coords];
          }
        });
      }
      return coordsArray;
    })();
  }
  static #_ = this.ɵfac = function BrokersService_Factory(t) {
    return new (t || BrokersService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_2__.AngularFirestore));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: BrokersService,
    factory: BrokersService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 8157:
/*!****************************************************!*\
  !*** ./src/app/core/services/crop/crop.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CropService: () => (/* binding */ CropService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 3839);
/* harmony import */ var src_app_core_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/api/api.service */ 7588);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);




class CropService {
  constructor(api) {
    this.api = api;
  }
  getCropMonthsAndGrades(cropId, exchangeId) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.combineLatest)([this.api.getCropMonths(cropId, exchangeId), this.api.getCropGrades(cropId)]);
  }
  static #_ = this.ɵfac = function CropService_Factory(t) {
    return new (t || CropService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_core_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: CropService,
    factory: CropService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 570:
/*!**************************************************************************!*\
  !*** ./src/app/core/services/delivery-points/delivery-points.service.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeliveryPointsService: () => (/* binding */ DeliveryPointsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 3839);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 9736);
/* harmony import */ var _models_queryModels__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/queryModels */ 1417);
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/api.service */ 7588);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);






class DeliveryPointsService {
  constructor(api) {
    this.api = api;
  }
  getEntityUsersDeliveryPoints(entityUsers) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.combineLatest)([...entityUsers.map(entityUser => {
      return this.api.getEntitysDeliveryPoints(entityUser.id);
    })]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(nestedDeliveryPoints => {
      return nestedDeliveryPoints.reduce((acc, deliveryPoints) => {
        acc = acc.concat(deliveryPoints);
        return acc;
      }, []);
    }));
  }
  static #_ = this.ɵfac = function DeliveryPointsService_Factory(t) {
    return new (t || DeliveryPointsService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_api_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: DeliveryPointsService,
    factory: DeliveryPointsService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 7012:
/*!**********************************************************************!*\
  !*** ./src/app/core/services/notifications/notifications.service.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationsService: () => (/* binding */ NotificationsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_fire_compat_messaging__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/compat/messaging */ 3986);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 3159);






class NotificationsService {
  constructor(afMessaging, afStore) {
    this.afMessaging = afMessaging;
    this.afStore = afStore;
    this._isListenerActive = false;
  }
  getCloudMessagingPermissionStatus() {
    return this.afMessaging.getToken;
  }
  addDeviceTokenToUserDocument(user, newDeviceToken) {
    if (!user.deviceTokens || !user.deviceTokens.includes(newDeviceToken)) {
      let deviceTokens = user.deviceTokens ? [...user.deviceTokens, newDeviceToken] : [newDeviceToken];
      this.afStore.doc(`Users/${user.uid}`).update({
        deviceTokens
      });
    }
  }
  activateNotificationListener() {
    if (!this._isListenerActive) {
      this._isListenerActive = true;
      return this.afMessaging.messages;
    } else {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(null);
    }
  }
  getUserNotifications(uid) {
    return this.afStore.collection('Notifications', notificationsRef => notificationsRef.where('userId', '==', uid).where('seen', '==', false)).valueChanges();
  }
  getClientsNotifications(uids) {
    return this.afStore.collection('Notifications', notificationsRef => notificationsRef.where('userId', 'in', uids).where('seenByAgent', '==', false)).valueChanges();
  }
  toggleNotificationStatus(uids, toggleForAgent = false) {
    const data = toggleForAgent ? {
      seenByAgent: true
    } : {
      seen: true
    };
    return Promise.all(uids.map(uid => {
      return this.afStore.doc(`Notifications/${uid}`).update({
        ...data
      });
    }));
  }
  static #_ = this.ɵfac = function NotificationsService_Factory(t) {
    return new (t || NotificationsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_compat_messaging__WEBPACK_IMPORTED_MODULE_2__.AngularFireMessaging), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_3__.AngularFirestore));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: NotificationsService,
    factory: NotificationsService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 7748:
/*!******************************************************!*\
  !*** ./src/app/core/services/scout/scout.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScoutService: () => (/* binding */ ScoutService)
/* harmony export */ });
/* harmony import */ var src_app_core_models_queryModels__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/models/queryModels */ 1417);
/* harmony import */ var src_app_core_services_api_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/api/api.service */ 7588);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 3839);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);





class ScoutService {
  constructor(api) {
    this.api = api;
  }
  getScoutEditData(scoutId) {
    if (scoutId) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.combineLatest)([this.api.getScoutById(scoutId), this.api.getAllCrops(), this.api.getUnitOfMeasure()]);
    } else {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.combineLatest)([(0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(null), this.api.getAllCrops(), this.api.getUnitOfMeasure()]);
    }
  }
  static #_ = this.ɵfac = function ScoutService_Factory(t) {
    return new (t || ScoutService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](src_app_core_services_api_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: ScoutService,
    factory: ScoutService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 3231:
/*!********************************************************************!*\
  !*** ./src/app/core/services/subscription/subscription.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SubscriptionService: () => (/* binding */ SubscriptionService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);


class SubscriptionService {
  constructor() {
    this.unsubscribeComponent$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.unsubscribe$ = this.unsubscribeComponent$.asObservable();
  }
  static #_ = this.ɵfac = function SubscriptionService_Factory(t) {
    return new (t || SubscriptionService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: SubscriptionService,
    factory: SubscriptionService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 2243:
/*!***********************************************************!*\
  !*** ./src/app/features/dashboard/dashboard.selectors.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appSelectors: () => (/* binding */ appSelectors),
/* harmony export */   authSelectors: () => (/* binding */ authSelectors),
/* harmony export */   deliveryPointsSelectors: () => (/* binding */ deliveryPointsSelectors),
/* harmony export */   getAppState: () => (/* binding */ getAppState),
/* harmony export */   getAuthState: () => (/* binding */ getAuthState),
/* harmony export */   getDeliveryPointState: () => (/* binding */ getDeliveryPointState),
/* harmony export */   lotSelectors: () => (/* binding */ lotSelectors),
/* harmony export */   marketSelectors: () => (/* binding */ marketSelectors),
/* harmony export */   matchSelectors: () => (/* binding */ matchSelectors),
/* harmony export */   negotiationSelector: () => (/* binding */ negotiationSelector),
/* harmony export */   notificationSelectors: () => (/* binding */ notificationSelectors),
/* harmony export */   reducers: () => (/* binding */ reducers)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _core_ngrx_app_state_app_state_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/ngrx/app-state/app-state.reducer */ 1383);
/* harmony import */ var _core_ngrx_authState_auth_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/ngrx/authState/auth.reducer */ 6086);
/* harmony import */ var _core_ngrx_entities_scout_scout_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/ngrx/entities/scout/scout.reducer */ 5110);
/* harmony import */ var _core_ngrx_entities_delivery_points_delivery_points_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/ngrx/entities/delivery-points/delivery-points.reducer */ 7704);
/* harmony import */ var _core_ngrx_entities_lot_lot_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/ngrx/entities/lot/lot.reducer */ 6415);
/* harmony import */ var _core_ngrx_entities_match_match_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/ngrx/entities/match/match.reducer */ 6998);
/* harmony import */ var _core_ngrx_crop_crop_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/ngrx/crop/crop.reducer */ 9589);
/* harmony import */ var _core_ngrx_entities_negotiations_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/ngrx/entities/negotiations/index */ 9602);
/* harmony import */ var _core_ngrx_app_state_app_state_selectors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/ngrx/app-state/app-state.selectors */ 5391);
/* harmony import */ var _core_ngrx_entities_delivery_points_delivery_points_selectors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/ngrx/entities/delivery-points/delivery-points.selectors */ 6070);
/* harmony import */ var _core_ngrx_entities_lot_lot_selectors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/ngrx/entities/lot/lot.selectors */ 5014);
/* harmony import */ var _core_ngrx_entities_match_match_selectors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/ngrx/entities/match/match.selectors */ 809);
/* harmony import */ var _core_ngrx_entities_scout_scout_selectors__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../core/ngrx/entities/scout/scout.selectors */ 6427);
/* harmony import */ var _core_ngrx_authState_auth_selectors__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../core/ngrx/authState/auth.selectors */ 6646);
/* harmony import */ var _core_ngrx_entities_notifications_notifications_selectors__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../core/ngrx/entities/notifications/notifications.selectors */ 4178);

















const reducers = {
  [_core_ngrx_app_state_app_state_reducer__WEBPACK_IMPORTED_MODULE_0__.appStateFeatureKey]: _core_ngrx_app_state_app_state_reducer__WEBPACK_IMPORTED_MODULE_0__.reducer,
  [_core_ngrx_authState_auth_reducer__WEBPACK_IMPORTED_MODULE_1__.authFeatureKey]: _core_ngrx_authState_auth_reducer__WEBPACK_IMPORTED_MODULE_1__.reducer,
  [_core_ngrx_app_state_app_state_reducer__WEBPACK_IMPORTED_MODULE_0__.appStateFeatureKey]: _core_ngrx_app_state_app_state_reducer__WEBPACK_IMPORTED_MODULE_0__.reducer,
  [_core_ngrx_entities_delivery_points_delivery_points_reducer__WEBPACK_IMPORTED_MODULE_3__.deliveryPointsFeatureKey]: _core_ngrx_entities_delivery_points_delivery_points_reducer__WEBPACK_IMPORTED_MODULE_3__.reducer,
  [_core_ngrx_entities_scout_scout_reducer__WEBPACK_IMPORTED_MODULE_2__.scoutFeatureKey]: _core_ngrx_entities_scout_scout_reducer__WEBPACK_IMPORTED_MODULE_2__.reducer,
  [_core_ngrx_entities_lot_lot_reducer__WEBPACK_IMPORTED_MODULE_4__.lotFeatureKey]: _core_ngrx_entities_lot_lot_reducer__WEBPACK_IMPORTED_MODULE_4__.reducer,
  [_core_ngrx_entities_match_match_reducer__WEBPACK_IMPORTED_MODULE_5__.matchFeatureKey]: _core_ngrx_entities_match_match_reducer__WEBPACK_IMPORTED_MODULE_5__.reducer,
  [_core_ngrx_crop_crop_reducer__WEBPACK_IMPORTED_MODULE_6__.cropFeatureKey]: _core_ngrx_crop_crop_reducer__WEBPACK_IMPORTED_MODULE_6__.reducer,
  [_core_ngrx_entities_negotiations_index__WEBPACK_IMPORTED_MODULE_7__.negotiationFeatureKey]: _core_ngrx_entities_negotiations_index__WEBPACK_IMPORTED_MODULE_7__.negotiationReducer
};
// #region Feature Selectors
const getAppState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_15__.createFeatureSelector)('appState');
const getAuthState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_15__.createFeatureSelector)(_core_ngrx_authState_auth_reducer__WEBPACK_IMPORTED_MODULE_1__.authFeatureKey);
const getDeliveryPointState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_15__.createFeatureSelector)(_core_ngrx_entities_delivery_points_delivery_points_reducer__WEBPACK_IMPORTED_MODULE_3__.deliveryPointsFeatureKey);
// #endregion
const appSelectors = _core_ngrx_app_state_app_state_selectors__WEBPACK_IMPORTED_MODULE_8__;
const authSelectors = _core_ngrx_authState_auth_selectors__WEBPACK_IMPORTED_MODULE_13__;
const deliveryPointsSelectors = _core_ngrx_entities_delivery_points_delivery_points_selectors__WEBPACK_IMPORTED_MODULE_9__;
const marketSelectors = _core_ngrx_entities_scout_scout_selectors__WEBPACK_IMPORTED_MODULE_12__;
const lotSelectors = _core_ngrx_entities_lot_lot_selectors__WEBPACK_IMPORTED_MODULE_10__;
const matchSelectors = _core_ngrx_entities_match_match_selectors__WEBPACK_IMPORTED_MODULE_11__;
const negotiationSelector = _core_ngrx_entities_negotiations_index__WEBPACK_IMPORTED_MODULE_7__.negotiationSelectors;
const notificationSelectors = _core_ngrx_entities_notifications_notifications_selectors__WEBPACK_IMPORTED_MODULE_14__;

/***/ }),

/***/ 2975:
/*!*******************************************************!*\
  !*** ./src/app/features/landing/landing.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LandingComponent: () => (/* binding */ LandingComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 1527);
/* harmony import */ var _core_helpers_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../core/helpers/constants */ 9487);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/legacy-button */ 8654);







function LandingComponent_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LandingComponent_button_14_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.handleNavigateCreateScout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Skip Tutorial ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class LandingComponent {
  constructor(route, router) {
    this.route = route;
    this.router = router;
    this.fromSupport = false;
  }
  ngOnInit() {
    this.route.queryParams.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1)).subscribe(({
      fromSupport
    }) => {
      if (fromSupport === 'true') this.fromSupport = true;
    });
  }
  handleNavigateToTransactionalRisk() {
    this.router.navigate([_core_helpers_constants__WEBPACK_IMPORTED_MODULE_0__.TRANSACTIONAL_RISK_ROUTE], {
      queryParams: {
        fromSupport: this.fromSupport
      }
    });
  }
  handleNavigateCreateScout() {
    this.router.navigate([_core_helpers_constants__WEBPACK_IMPORTED_MODULE_0__.SCOUT_CREATE_ROUTE]);
  }
  static #_ = this.ɵfac = function LandingComponent_Factory(t) {
    return new (t || LandingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: LandingComponent,
    selectors: [["app-landing"]],
    decls: 15,
    vars: 1,
    consts: [[1, "g-app-dimensions"], [1, "l-landing-container"], [1, "l-landing-content"], ["src", "assets/images/MX-landing.svg", "alt", "Match Exchange", 1, "l-img"], [1, "g-text-h1-dark", "mb-4"], [1, "g-text-p-dark", "mb-3"], ["mat-flat-button", "", 1, "g-primary-button", "mb-2", 3, "click"], ["mat-flat-button", "", "class", "g-secondary-button", 3, "click", 4, "ngIf"], ["mat-flat-button", "", 1, "g-secondary-button", 3, "click"]],
    template: function LandingComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "What is Match Exchange?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Match Exchange is the best way for farmers to sell their crop, deal directly with buyers and shorten the chain. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "For the buyers, MX is the shortest path to farmers.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Unlocking new markets for farmers and many more suppliers for buyers.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LandingComponent_Template_button_click_12_listener() {
          return ctx.handleNavigateToTransactionalRisk();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Let's get started ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, LandingComponent_button_14_Template, 2, 0, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.fromSupport);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_5__.MatLegacyButton],
    styles: [".l-landing-container[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  background-color: #ffffff;\n  padding: 16px;\n  overflow: auto;\n}\n\n.l-landing-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.l-img[_ngcontent-%COMP%] {\n  height: 220px;\n  margin-bottom: 24px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQytCZTtFRDlCZixhQUFBO0VBQ0EsY0FBQTtBQURKOztBQUlBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBREo7O0FBSUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFESiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzJztcclxuXHJcbi5sLWxhbmRpbmctY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3I7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi5sLWxhbmRpbmctY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ubC1pbWcge1xyXG4gICAgaGVpZ2h0OiAyMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbn1cclxuIiwiLy8gVGV4dFxyXG4kYXBwLWZvbnQ6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuJGFwcC1pbnB1dC1mb250OiAnTXVsaXNoJywgc2Fucy1zZXJpZjtcclxuJGFwcC1mb250LWJsYWNrOiAjMzQzNDM0O1xyXG4kYXBwLXRleHQtZ3JleTogIzcwNzA3MDtcclxuJGFwcC1mb250LWlucHV0LXBsYWNlaG9sZGVyOiByZ2JhKDMwLCA0OCwgMzcsIDAuNTYpO1xyXG4kYXBwLWZvcm0taW5mby1jb2xvcjogI2FmYWZhZjtcclxuXHJcbi8vIENvbG9yc1xyXG4kYXBwLWJnLWNvbG9yOiAjZjlmOWZjO1xyXG4kYXBwLWJ1eWluZy1yZWQ6ICNlNzZmNTE7XHJcbiRhcHAtc2VsbGluZy1ncmVlbjogIzdmYTk5NTtcclxuJGFwcC1pbnB1dC1iZy1jb2xvcjogI2U2ZTZlNjtcclxuJGFwcC1ib3R0b20tbmF2LWl0ZW0tYmc6ICNlNWVmZTk7XHJcbiRhcHAtdGFicy1tYXJrZXRwbGFjZS1ncmVlbjogIzI4NWQ2MDtcclxuJGFwcC10YWJzLW5lZ290aWF0aW9ucy1ibHVlOiAjNGY5ZWJkO1xyXG4kYXBwLW5vdGlmaWNhdGlvbi1yZWQ6ICNhNTNhNGE7XHJcblxyXG4vLyBHcmFkaWVudHNcclxuJGFwcC1zZWxsaW5nLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjOThiNGE3LCAjNGE2ZTVlKTtcclxuJGFwcC1idXlpbmctZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICNkZjhhNzUsICNhMjUzM2YpO1xyXG4kYXBwLXNlbGxpbmctY2FyZC1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgIzg1YWU5YiwgIzczOWU4YSk7XHJcbiRhcHAtYnV5aW5nLWNhcmQtZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICRhcHAtYnV5aW5nLXJlZCwgI2M3NWQ0Myk7XHJcblxyXG4vLyBCdXR0b25zXHJcbiRhcHAtcHJpbWFyeS1idXR0b24tYmctY29sb3I6ICMzMWEwNWY7XHJcbiRhcHAtc2Vjb25kYXJ5LWJ1dHRvbi1iZy1jb2xvcjogI2U1ZTVlNTtcclxuJGFwcC1kZWxldGUtYnV0dG9uLXJlZDogI2QzNDU1YjtcclxuXHJcbi8vIE90aGVyXHJcbiRhcHAtYm9yZGVyLXJhZGl1czogOHB4O1xyXG4kYXBwLWJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDgpICFpbXBvcnRhbnQ7XHJcblxyXG4vLyAjcmVnaW9uIE1hdGNoIEV4Y2hhbmdlXHJcblxyXG4vLyAjcmVnaW9uIENvbG9yc1xyXG5cclxuJGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiRiYWNrZ3JvdW5kLWNvbG9yLWdyZXk6ICNmNWY1ZjU7XHJcbiR0ZXh0LWRhcms6ICM0MDQwNDA7XHJcbiR0ZXh0LXBsYWNlaG9sZGVyOiAjOGM4YzhjO1xyXG4kcHJpbWFyeS1jb2xvcjogIzQwN2VmODtcclxuJHNlY29uZGFyeS1jb2xvcjogI2U1ZWRmZDtcclxuJG1lZGl1bS1ibHVlOiAjOGQ5ZWM1O1xyXG4kcHJpbWFyeS1ncmVlbjogIzFjYWY3ZTtcclxuJHNlY29uZGFyeS1ncmVlbjogI2U3ZjdmMDtcclxuJHByaW1hcnktcmVkOiAjZDIzMDNkO1xyXG4kc2Vjb25kYXJ5LXJlZDogI2Y3ZThlNztcclxuJGlucHV0LWJvcmRlcjogI2UyZThmMDtcclxuJGVycm9yLW1lc3NhZ2U6ICNiMTE1MGE7XHJcbiRkaXNhYmxlZC1jb2xvcjogI2NiY2JjYjtcclxuXHJcbi8vICNlbmRyZWdpb25cclxuXHJcbi8vICNyZWdpb24gVGV4dFxyXG5cclxuJHRleHQtZm9udDogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4kZm9udC13ZWlnaHQtYm9sZDogNzAwO1xyXG4kZm9udC13ZWlnaHQtc2VtaS1ib2xkOiA2MDA7XHJcbiRmb250LXdlaWdodC1yZWd1bGFyOiA1MDA7XHJcbiRmb250LXdlaWdodC1saWdodDogNDAwO1xyXG5cclxuLy8gI2VuZHJlZ2lvblxyXG5cclxuLy8gI3JlZ2lvbiBCdXR0b25zXHJcblxyXG4kYnV0dG9uLWZvbnQtd2VpZ2h0OiA2MDA7XHJcblxyXG4vLyAjZW5kcmVnaW9uXHJcblxyXG4vLyAjcmVnaW9uIE90aGVyXHJcblxyXG4kYm9yZGVyLXJhZGl1czogNHB4O1xyXG5cclxuLy8gI2VuZHJlZ2lvblxyXG5cclxuLy8gI2VuZHJlZ2lvblxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 6649:
/*!*****************************************************************!*\
  !*** ./src/app/features/notification/notification.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationComponent: () => (/* binding */ NotificationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 274);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 4520);
/* harmony import */ var src_app_core_ngrx_entities_notifications_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/ngrx/entities/notifications/index */ 4624);
/* harmony import */ var src_app_core_ngrx_authState_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/ngrx/authState/index */ 395);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ 8626);
/* harmony import */ var _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/push-notifications */ 9436);
/* harmony import */ var src_app_core_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/notifications/notifications.service */ 7012);
/* harmony import */ var _core_ngrx_brokers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/ngrx/brokers */ 1199);












class NotificationComponent {
  constructor(store, notificationsService) {
    this.store = store;
    this.notificationsService = notificationsService;
    this.currentNotification = {};
    this.isWeb = false;
    this.permissionStatusHasBeenDispatched = false;
    this.notificationListenerIsActive = false;
    this.showNotification = false;
    this.destroyed$ = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
  }
  ngOnInit() {
    this.selectClientHelper();
    this.isWeb = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__.Capacitor.getPlatform() === 'web';
    if (this.isWeb) {
      this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.select)(src_app_core_ngrx_entities_notifications_index__WEBPACK_IMPORTED_MODULE_0__.notificationSelectors.getPermissionStatus), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroyed$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.filter)(permissionStatus => {
        return permissionStatus !== null;
      })).subscribe(permissionStatus => {
        if (permissionStatus) {
          this.getCurrentNotificationHelper();
          this.store.dispatch(src_app_core_ngrx_entities_notifications_index__WEBPACK_IMPORTED_MODULE_0__.notificationActions.ReqActivateNotificationListener());
        }
      });
    }
  }
  ngOnDestroy() {
    this.destroyed$.next();
  }
  getCurrentNotificationHelper() {
    if (!this.notificationListenerIsActive) {
      this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.select)(src_app_core_ngrx_entities_notifications_index__WEBPACK_IMPORTED_MODULE_0__.notificationSelectors.getCurrentNotification), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroyed$)).subscribe(notification => {
        if (notification && Object.keys(notification).length) {
          this.currentNotification = notification;
          this.showNotification = true;
        }
      });
      this.notificationListenerIsActive = true;
    }
  }
  activateMobileNotificationsHelper(user) {
    _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_3__.PushNotifications.requestPermissions().then(permissionStatus => {
      permissionStatus.receive === 'granted' && _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_3__.PushNotifications.register();
    });
    _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_3__.PushNotifications.addListener('registration', token => {
      this.notificationsService.addDeviceTokenToUserDocument(user, token.value);
      this.getCurrentNotificationHelper();
    });
    _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_3__.PushNotifications.addListener('pushNotificationReceived', notification => {
      const {
        title,
        body
      } = notification;
      this.store.dispatch(src_app_core_ngrx_entities_notifications_index__WEBPACK_IMPORTED_MODULE_0__.notificationActions.ReqUpdateCurrentNotification({
        notification: {
          title,
          body
        }
      }));
    });
  }
  fetchUserNotificationsHelper() {
    this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.select)(src_app_core_ngrx_authState_index__WEBPACK_IMPORTED_MODULE_1__.authSelectors.getUser), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroyed$)).subscribe(user => {
      const userOfInterest = this.client ? this.client : user;
      if (userOfInterest) {
        if (!this.permissionStatusHasBeenDispatched) {
          this.isWeb ? this.store.dispatch(src_app_core_ngrx_entities_notifications_index__WEBPACK_IMPORTED_MODULE_0__.notificationActions.ReqCloudMessagingPermissionStatus()) : this.activateMobileNotificationsHelper(userOfInterest);
          this.permissionStatusHasBeenDispatched = true;
        }
        this.client ? userOfInterest.deviceTokens && this.store.dispatch(src_app_core_ngrx_entities_notifications_index__WEBPACK_IMPORTED_MODULE_0__.notificationActions.ReqClientNotifications({
          clientUid: userOfInterest.uid
        })) : userOfInterest.deviceTokens && this.store.dispatch(src_app_core_ngrx_entities_notifications_index__WEBPACK_IMPORTED_MODULE_0__.notificationActions.ReqUserNotifications());
      }
    });
  }
  selectClientHelper() {
    this.store.select(_core_ngrx_brokers__WEBPACK_IMPORTED_MODULE_5__.brokersSelectors.getCurrentClient).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroyed$)).subscribe(client => {
      this.client = client;
      this.fetchUserNotificationsHelper();
    });
  }
  handleCloseNotification() {
    this.showNotification = false;
  }
  static #_ = this.ɵfac = function NotificationComponent_Factory(t) {
    return new (t || NotificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_4__.NotificationsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: NotificationComponent,
    selectors: [["app-notification"]],
    decls: 11,
    vars: 4,
    consts: [[1, "l-container"], [1, "l-icon-container"], ["src", "./assets/icons/MX-small-logo.svg", "alt", "Match", 1, "l-icon"], [1, "l-content"], [1, "g-text-h2", "l-text-left"], [1, "g-text-p", "l-text-left", "mt-2"], [1, "l-close-container", 3, "click"], ["src", "./assets/icons/close-icon-dark.svg", "alt", "Black close icon", 1, "l-close-icon"]],
    template: function NotificationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 3)(4, "h2", 4)(5, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NotificationComponent_Template_div_click_9_listener() {
          return ctx.handleCloseNotification();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("l-show-notification", ctx.showNotification);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.currentNotification.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.currentNotification.body);
      }
    },
    styles: [".l-container[_ngcontent-%COMP%] {\n  position: absolute;\n  width: calc(100% - 32px);\n  height: 120px;\n  top: -120px;\n  left: 16px;\n  display: flex;\n  align-items: center;\n  border-radius: 8px;\n  background-color: #ffffff;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08) !important;\n  opacity: 0;\n  z-index: 3;\n  transition: 0.3s ease-in-out;\n}\n\n.l-show-notification[_ngcontent-%COMP%] {\n  opacity: 1;\n  top: 16px;\n}\n\n.l-icon-container[_ngcontent-%COMP%] {\n  width: 20%;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.l-icon[_ngcontent-%COMP%] {\n  width: 50%;\n  height: auto;\n}\n\n.l-content[_ngcontent-%COMP%] {\n  width: 80%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 16px 0;\n}\n\n.l-text-left[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.l-close-container[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.l-close-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n\n@media screen and (min-width: 576px) {\n  .l-container[_ngcontent-%COMP%] {\n    width: 544px;\n    left: calc((100% - 576px) / 2 + 16px);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkNvQmdCO0VEbkJoQix5QkFBQTtFQUNBLG9EQ21CYTtFRGxCYixVQUFBO0VBQ0EsVUFBQTtFQUNBLDRCQUFBO0FBREo7O0FBSUE7RUFDSSxVQUFBO0VBQ0EsU0FBQTtBQURKOztBQUlBO0VBQ0ksVUFBQTtFQUNBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQURKOztBQUlBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7QUFESjs7QUFJQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBREo7O0FBSUE7RUFDSSxnQkFBQTtBQURKOztBQUlBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQURKOztBQUlBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFESjs7QUFNQTtFQUNJO0lBQ0ksWUFBQTtJQUNBLHFDQUFBO0VBSE47QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3NyYy92YXJpYWJsZXMuc2Nzcyc7XHJcblxyXG4ubC1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMycHgpO1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIHRvcDogLTEyMHB4O1xyXG4gICAgbGVmdDogMTZweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogJGFwcC1ib3JkZXItcmFkaXVzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGJveC1zaGFkb3c6ICRhcHAtYm94LXNoYWRvdztcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB6LWluZGV4OiAzO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmwtc2hvdy1ub3RpZmljYXRpb24ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRvcDogMTZweDtcclxufVxyXG5cclxuLmwtaWNvbi1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubC1pY29uIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5sLWNvbnRlbnQge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxNnB4IDA7XHJcbn1cclxuXHJcbi5sLXRleHQtbGVmdCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4ubC1jbG9zZS1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubC1jbG9zZS1pY29uIHtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4vLyAjcmVnaW9uIFJlc3BvbnNpdmUgTWVkaWEgUXVlcmllc1xyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTc2cHgpIHtcclxuICAgIC5sLWNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDU0NHB4O1xyXG4gICAgICAgIGxlZnQ6IGNhbGMoKCgxMDAlIC0gNTc2cHgpIC8gMikgKyAxNnB4KTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gI2VuZHJlZ2lvblxyXG4iLCIvLyBUZXh0XHJcbiRhcHAtZm9udDogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4kYXBwLWlucHV0LWZvbnQ6ICdNdWxpc2gnLCBzYW5zLXNlcmlmO1xyXG4kYXBwLWZvbnQtYmxhY2s6ICMzNDM0MzQ7XHJcbiRhcHAtdGV4dC1ncmV5OiAjNzA3MDcwO1xyXG4kYXBwLWZvbnQtaW5wdXQtcGxhY2Vob2xkZXI6IHJnYmEoMzAsIDQ4LCAzNywgMC41Nik7XHJcbiRhcHAtZm9ybS1pbmZvLWNvbG9yOiAjYWZhZmFmO1xyXG5cclxuLy8gQ29sb3JzXHJcbiRhcHAtYmctY29sb3I6ICNmOWY5ZmM7XHJcbiRhcHAtYnV5aW5nLXJlZDogI2U3NmY1MTtcclxuJGFwcC1zZWxsaW5nLWdyZWVuOiAjN2ZhOTk1O1xyXG4kYXBwLWlucHV0LWJnLWNvbG9yOiAjZTZlNmU2O1xyXG4kYXBwLWJvdHRvbS1uYXYtaXRlbS1iZzogI2U1ZWZlOTtcclxuJGFwcC10YWJzLW1hcmtldHBsYWNlLWdyZWVuOiAjMjg1ZDYwO1xyXG4kYXBwLXRhYnMtbmVnb3RpYXRpb25zLWJsdWU6ICM0ZjllYmQ7XHJcbiRhcHAtbm90aWZpY2F0aW9uLXJlZDogI2E1M2E0YTtcclxuXHJcbi8vIEdyYWRpZW50c1xyXG4kYXBwLXNlbGxpbmctZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICM5OGI0YTcsICM0YTZlNWUpO1xyXG4kYXBwLWJ1eWluZy1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgI2RmOGE3NSwgI2EyNTMzZik7XHJcbiRhcHAtc2VsbGluZy1jYXJkLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjODVhZTliLCAjNzM5ZThhKTtcclxuJGFwcC1idXlpbmctY2FyZC1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgJGFwcC1idXlpbmctcmVkLCAjYzc1ZDQzKTtcclxuXHJcbi8vIEJ1dHRvbnNcclxuJGFwcC1wcmltYXJ5LWJ1dHRvbi1iZy1jb2xvcjogIzMxYTA1ZjtcclxuJGFwcC1zZWNvbmRhcnktYnV0dG9uLWJnLWNvbG9yOiAjZTVlNWU1O1xyXG4kYXBwLWRlbGV0ZS1idXR0b24tcmVkOiAjZDM0NTViO1xyXG5cclxuLy8gT3RoZXJcclxuJGFwcC1ib3JkZXItcmFkaXVzOiA4cHg7XHJcbiRhcHAtYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wOCkgIWltcG9ydGFudDtcclxuXHJcbi8vICNyZWdpb24gTWF0Y2ggRXhjaGFuZ2VcclxuXHJcbi8vICNyZWdpb24gQ29sb3JzXHJcblxyXG4kYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuJGJhY2tncm91bmQtY29sb3ItZ3JleTogI2Y1ZjVmNTtcclxuJHRleHQtZGFyazogIzQwNDA0MDtcclxuJHRleHQtcGxhY2Vob2xkZXI6ICM4YzhjOGM7XHJcbiRwcmltYXJ5LWNvbG9yOiAjNDA3ZWY4O1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjZTVlZGZkO1xyXG4kbWVkaXVtLWJsdWU6ICM4ZDllYzU7XHJcbiRwcmltYXJ5LWdyZWVuOiAjMWNhZjdlO1xyXG4kc2Vjb25kYXJ5LWdyZWVuOiAjZTdmN2YwO1xyXG4kcHJpbWFyeS1yZWQ6ICNkMjMwM2Q7XHJcbiRzZWNvbmRhcnktcmVkOiAjZjdlOGU3O1xyXG4kaW5wdXQtYm9yZGVyOiAjZTJlOGYwO1xyXG4kZXJyb3ItbWVzc2FnZTogI2IxMTUwYTtcclxuJGRpc2FibGVkLWNvbG9yOiAjY2JjYmNiO1xyXG5cclxuLy8gI2VuZHJlZ2lvblxyXG5cclxuLy8gI3JlZ2lvbiBUZXh0XHJcblxyXG4kdGV4dC1mb250OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiRmb250LXdlaWdodC1ib2xkOiA3MDA7XHJcbiRmb250LXdlaWdodC1zZW1pLWJvbGQ6IDYwMDtcclxuJGZvbnQtd2VpZ2h0LXJlZ3VsYXI6IDUwMDtcclxuJGZvbnQtd2VpZ2h0LWxpZ2h0OiA0MDA7XHJcblxyXG4vLyAjZW5kcmVnaW9uXHJcblxyXG4vLyAjcmVnaW9uIEJ1dHRvbnNcclxuXHJcbiRidXR0b24tZm9udC13ZWlnaHQ6IDYwMDtcclxuXHJcbi8vICNlbmRyZWdpb25cclxuXHJcbi8vICNyZWdpb24gT3RoZXJcclxuXHJcbiRib3JkZXItcmFkaXVzOiA0cHg7XHJcblxyXG4vLyAjZW5kcmVnaW9uXHJcblxyXG4vLyAjZW5kcmVnaW9uXHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 6861:
/*!*****************************************************************************************************!*\
  !*** ./src/app/features/shared/components/additional-info-modal/additional-info-modal.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdditionalInfoModalComponent: () => (/* binding */ AdditionalInfoModalComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_helpers_snackbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/helpers/snackbar */ 2179);
/* harmony import */ var src_app_core_models_queryModels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/models/queryModels */ 1417);
/* harmony import */ var src_app_core_helpers_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/helpers/constants */ 9487);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/legacy-dialog */ 1035);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ 9409);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/legacy-button */ 8654);
/* harmony import */ var _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/legacy-select */ 2198);
/* harmony import */ var _angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/legacy-core */ 773);













function AdditionalInfoModalComponent_mat_option_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 20);
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
class AdditionalInfoModalComponent {
  constructor(dialogRef, snackbar) {
    this.dialogRef = dialogRef;
    this.snackbar = snackbar;
    this.additionalEntityDetails = new src_app_core_models_queryModels__WEBPACK_IMPORTED_MODULE_1__.AdditionalEntityDetailsClass();
    this.ratingData = src_app_core_helpers_constants__WEBPACK_IMPORTED_MODULE_2__.ratingData;
  }
  ngOnInit() {}
  handleToggleExFarm(option) {
    option !== this.additionalEntityDetails.exFarm && (this.additionalEntityDetails.exFarm = option);
  }
  validateEmail(email) {
    return src_app_core_helpers_constants__WEBPACK_IMPORTED_MODULE_2__.emailRegex.test(String(email).toLowerCase());
  }
  handleSaveDetails(email) {
    const isEmail = this.validateEmail(email);
    if (!(this.additionalEntityDetails.legalEntityName.length < 2) && isEmail) {
      this.dialogRef.close(this.additionalEntityDetails);
    } else {
      this.additionalEntityDetails.legalEntityName.length < 2 ? this.snackbar.open('Please enter a valid Entity name.', 'CLOSE', src_app_core_helpers_snackbar__WEBPACK_IMPORTED_MODULE_0__.errorConfig) : this.snackbar.open('Please enter a valid Email', 'CLOSE', src_app_core_helpers_snackbar__WEBPACK_IMPORTED_MODULE_0__.errorConfig);
    }
  }
  static #_ = this.ɵfac = function AdditionalInfoModalComponent_Factory(t) {
    return new (t || AdditionalInfoModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_4__.MatLegacyDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__.MatSnackBar));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: AdditionalInfoModalComponent,
    selectors: [["app-additional-info-modal"]],
    decls: 31,
    vars: 10,
    consts: [[1, "l-container"], [1, "g-text-h2-dark", "mb-3"], [1, "l-content-holder"], [1, "g-text-input-container"], ["src", "../../../assets/icons/user-blue-icon.svg", "alt", "", 1, "g-input-text-icon"], ["type", "text", "name", "fullName", "placeholder", "Legal Entity Name", "required", "", "maxlength", "30", 1, "g-input-text", 3, "ngModel", "ngModelChange"], [1, "g-text-input-container", "mt-3"], ["src", "../../../assets/icons/mail-icon.svg", "alt", "", 1, "g-input-text-icon"], ["type", "email", "placeholder", "Entity Email", "name", "email", "required", "", 1, "g-input-text", 3, "ngModel", "ngModelChange"], [1, "g-form-label", "mt-3"], [1, "l-toggle-container"], [1, "l-option", 3, "click"], ["src", "./assets/icons/unselected-icon.svg", "alt", "selected-icon", 1, "l-icon", 3, "src"], ["alt", "selected-icon", 1, "l-icon", 3, "src"], ["name", "bbbeeRating", 1, "g-form-select", "l-select", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "d-flex", "align-items-start"], ["src", "./assets/icons/info-icon.svg", "alt", "info-icon-grey", 1, "g-form-info-icon", "mt-1"], [1, "g-text-p-small-grey"], ["mat-flat-button", "", 1, "g-primary-button", "mb-3", 3, "click"], [3, "value"]],
    template: function AdditionalInfoModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Just a few more important details");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "form")(4, "div", 2)(5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AdditionalInfoModalComponent_Template_input_ngModelChange_7_listener($event) {
          return ctx.additionalEntityDetails.legalEntityName = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AdditionalInfoModalComponent_Template_input_ngModelChange_10_listener($event) {
          return ctx.additionalEntityDetails.email = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "form")(12, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Do you have the ability to deliver Ex-Farm?");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 10)(15, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdditionalInfoModalComponent_Template_button_click_15_listener() {
          return ctx.handleToggleExFarm(true);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, " Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdditionalInfoModalComponent_Template_button_click_18_listener() {
          return ctx.handleToggleExFarm(false);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, " No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Scout for farmers that have a B-BBEE rating better than:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "mat-select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AdditionalInfoModalComponent_Template_mat_select_ngModelChange_23_listener($event) {
          return ctx.additionalEntityDetails.bbbeeRating = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, AdditionalInfoModalComponent_mat_option_24_Template, 2, 2, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, " If your turnover is less than R10 Million, you can choose level 4. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdditionalInfoModalComponent_Template_button_click_29_listener() {
          return ctx.handleSaveDetails(ctx.additionalEntityDetails.email);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, " Save Details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.additionalEntityDetails.legalEntityName);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.additionalEntityDetails.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("l-active", ctx.additionalEntityDetails.exFarm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx.additionalEntityDetails.exFarm ? "./assets/icons/selected-blue-icon.svg" : "./assets/icons/unselected-icon.svg", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("l-active", !ctx.additionalEntityDetails.exFarm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", !ctx.additionalEntityDetails.exFarm ? "./assets/icons/selected-blue-icon.svg" : "./assets/icons/unselected-icon.svg", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.additionalEntityDetails.bbbeeRating);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.ratingData);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_8__.MatLegacyButton, _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_9__.MatLegacySelect, _angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_10__.MatLegacyOption],
    styles: [".l-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 70vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #ffffff;\n  padding: 0 16px;\n}\n\n.l-toggle-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.l-option[_ngcontent-%COMP%] {\n  width: 47%;\n  height: 56px;\n  display: flex;\n  justify-content: space-between;\n  padding: 0 16px;\n  align-items: center;\n  font-size: 16px;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 500;\n  letter-spacing: normal;\n  line-height: 21px;\n  color: #404040;\n  border-radius: 4px;\n  background-color: #ffffff;\n  position: relative;\n  border: 1px solid #e2e8f0;\n  cursor: pointer;\n  outline: none !important;\n  transition: 0.1s ease-in-out;\n}\n\n.l-active[_ngcontent-%COMP%] {\n  border: 1px solid #407ef8;\n}\n\n.l-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 16px;\n  width: 20px;\n  height: 20px;\n}\n\n.l-select[_ngcontent-%COMP%] {\n  border: 1px solid #e2e8f0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvc2hhcmVkL2NvbXBvbmVudHMvYWRkaXRpb25hbC1pbmZvLW1vZGFsL2FkZGl0aW9uYWwtaW5mby1tb2RhbC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkM2QmU7RUQ1QmYsZUFBQTtBQURKOztBQUlBO0VBQ0ksV0FBQTtFQUNBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQURKOztBQUlBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EscUNDNEJRO0VEM0JSLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNDT1E7RUROUixrQkN1Q1k7RUR0Q1oseUJDR2U7RURGZixrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7QUFESjs7QUFJQTtFQUNJLHlCQUFBO0FBREo7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQURKOztBQUlBO0VBQ0kseUJBQUE7QUFESiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3NyYy92YXJpYWJsZXMuc2Nzcyc7XHJcblxyXG4ubC1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDcwdmg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcclxuICAgIHBhZGRpbmc6IDAgMTZweDtcclxufVxyXG5cclxuLmwtdG9nZ2xlLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmwtb3B0aW9uIHtcclxuICAgIHdpZHRoOiA0NyU7XHJcbiAgICBoZWlnaHQ6IDU2cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogMCAxNnB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtZmFtaWx5OiAkdGV4dC1mb250O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICAgIGNvbG9yOiAkdGV4dC1kYXJrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICRpbnB1dC1ib3JkZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjFzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4ubC1hY3RpdmUge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgJHByaW1hcnktY29sb3I7XHJcbn1cclxuXHJcbi5sLWljb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDE2cHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxufVxyXG5cclxuLmwtc2VsZWN0IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICRpbnB1dC1ib3JkZXI7XHJcbn1cclxuIiwiLy8gVGV4dFxyXG4kYXBwLWZvbnQ6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuJGFwcC1pbnB1dC1mb250OiAnTXVsaXNoJywgc2Fucy1zZXJpZjtcclxuJGFwcC1mb250LWJsYWNrOiAjMzQzNDM0O1xyXG4kYXBwLXRleHQtZ3JleTogIzcwNzA3MDtcclxuJGFwcC1mb250LWlucHV0LXBsYWNlaG9sZGVyOiByZ2JhKDMwLCA0OCwgMzcsIDAuNTYpO1xyXG4kYXBwLWZvcm0taW5mby1jb2xvcjogI2FmYWZhZjtcclxuXHJcbi8vIENvbG9yc1xyXG4kYXBwLWJnLWNvbG9yOiAjZjlmOWZjO1xyXG4kYXBwLWJ1eWluZy1yZWQ6ICNlNzZmNTE7XHJcbiRhcHAtc2VsbGluZy1ncmVlbjogIzdmYTk5NTtcclxuJGFwcC1pbnB1dC1iZy1jb2xvcjogI2U2ZTZlNjtcclxuJGFwcC1ib3R0b20tbmF2LWl0ZW0tYmc6ICNlNWVmZTk7XHJcbiRhcHAtdGFicy1tYXJrZXRwbGFjZS1ncmVlbjogIzI4NWQ2MDtcclxuJGFwcC10YWJzLW5lZ290aWF0aW9ucy1ibHVlOiAjNGY5ZWJkO1xyXG4kYXBwLW5vdGlmaWNhdGlvbi1yZWQ6ICNhNTNhNGE7XHJcblxyXG4vLyBHcmFkaWVudHNcclxuJGFwcC1zZWxsaW5nLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjOThiNGE3LCAjNGE2ZTVlKTtcclxuJGFwcC1idXlpbmctZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICNkZjhhNzUsICNhMjUzM2YpO1xyXG4kYXBwLXNlbGxpbmctY2FyZC1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgIzg1YWU5YiwgIzczOWU4YSk7XHJcbiRhcHAtYnV5aW5nLWNhcmQtZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICRhcHAtYnV5aW5nLXJlZCwgI2M3NWQ0Myk7XHJcblxyXG4vLyBCdXR0b25zXHJcbiRhcHAtcHJpbWFyeS1idXR0b24tYmctY29sb3I6ICMzMWEwNWY7XHJcbiRhcHAtc2Vjb25kYXJ5LWJ1dHRvbi1iZy1jb2xvcjogI2U1ZTVlNTtcclxuJGFwcC1kZWxldGUtYnV0dG9uLXJlZDogI2QzNDU1YjtcclxuXHJcbi8vIE90aGVyXHJcbiRhcHAtYm9yZGVyLXJhZGl1czogOHB4O1xyXG4kYXBwLWJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDgpICFpbXBvcnRhbnQ7XHJcblxyXG4vLyAjcmVnaW9uIE1hdGNoIEV4Y2hhbmdlXHJcblxyXG4vLyAjcmVnaW9uIENvbG9yc1xyXG5cclxuJGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiRiYWNrZ3JvdW5kLWNvbG9yLWdyZXk6ICNmNWY1ZjU7XHJcbiR0ZXh0LWRhcms6ICM0MDQwNDA7XHJcbiR0ZXh0LXBsYWNlaG9sZGVyOiAjOGM4YzhjO1xyXG4kcHJpbWFyeS1jb2xvcjogIzQwN2VmODtcclxuJHNlY29uZGFyeS1jb2xvcjogI2U1ZWRmZDtcclxuJG1lZGl1bS1ibHVlOiAjOGQ5ZWM1O1xyXG4kcHJpbWFyeS1ncmVlbjogIzFjYWY3ZTtcclxuJHNlY29uZGFyeS1ncmVlbjogI2U3ZjdmMDtcclxuJHByaW1hcnktcmVkOiAjZDIzMDNkO1xyXG4kc2Vjb25kYXJ5LXJlZDogI2Y3ZThlNztcclxuJGlucHV0LWJvcmRlcjogI2UyZThmMDtcclxuJGVycm9yLW1lc3NhZ2U6ICNiMTE1MGE7XHJcbiRkaXNhYmxlZC1jb2xvcjogI2NiY2JjYjtcclxuXHJcbi8vICNlbmRyZWdpb25cclxuXHJcbi8vICNyZWdpb24gVGV4dFxyXG5cclxuJHRleHQtZm9udDogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4kZm9udC13ZWlnaHQtYm9sZDogNzAwO1xyXG4kZm9udC13ZWlnaHQtc2VtaS1ib2xkOiA2MDA7XHJcbiRmb250LXdlaWdodC1yZWd1bGFyOiA1MDA7XHJcbiRmb250LXdlaWdodC1saWdodDogNDAwO1xyXG5cclxuLy8gI2VuZHJlZ2lvblxyXG5cclxuLy8gI3JlZ2lvbiBCdXR0b25zXHJcblxyXG4kYnV0dG9uLWZvbnQtd2VpZ2h0OiA2MDA7XHJcblxyXG4vLyAjZW5kcmVnaW9uXHJcblxyXG4vLyAjcmVnaW9uIE90aGVyXHJcblxyXG4kYm9yZGVyLXJhZGl1czogNHB4O1xyXG5cclxuLy8gI2VuZHJlZ2lvblxyXG5cclxuLy8gI2VuZHJlZ2lvblxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 1374:
/*!*********************************************************************************************************************!*\
  !*** ./src/app/features/shared/components/category-info-modal/category-info-modal/category-info-modal.component.ts ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategoryInfoModalComponent: () => (/* binding */ CategoryInfoModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/legacy-dialog */ 1035);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 1527);
/* harmony import */ var src_app_core_ngrx_crop_crop_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/ngrx/crop/crop.selectors */ 1923);
/* harmony import */ var src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/helpers/index.actions */ 5626);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ 1575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_legacy_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/legacy-progress-spinner */ 3401);












function CategoryInfoModalComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "mat-progress-spinner", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("diameter", 40);
  }
}
function CategoryInfoModalComponent_ng_template_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const crop_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](crop_r4.name);
  }
}
function CategoryInfoModalComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CategoryInfoModalComponent_ng_template_8_div_1_Template, 4, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.crops);
  }
}
class CategoryInfoModalComponent {
  constructor(dialogRef, data, actions$, store) {
    this.dialogRef = dialogRef;
    this.data = data;
    this.actions$ = actions$;
    this.store = store;
    this.isDataLoading = true;
  }
  ngOnInit() {
    this.store.dispatch(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_1__.cropActions.ReqAllCrops());
    this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_1__.cropActions.AllCropsSuccess), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1)).subscribe(() => {
      this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.select)(src_app_core_ngrx_crop_crop_selectors__WEBPACK_IMPORTED_MODULE_0__.selectCropByCategoryId, this.data.categoryId), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1)).subscribe(crops => {
        this.crops = crops;
        this.isDataLoading = false;
      });
    });
  }
  handleClose() {
    this.dialogRef.close();
  }
  static #_ = this.ɵfac = function CategoryInfoModalComponent_Factory(t) {
    return new (t || CategoryInfoModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_6__.MatLegacyDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_6__.MAT_LEGACY_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: CategoryInfoModalComponent,
    selectors: [["app-category-info-modal"]],
    decls: 12,
    vars: 4,
    consts: [[1, "l-container"], [1, "l-header"], ["src", "./assets/icons/close-icon-dark.svg", "alt", "close", 1, "l-close-icon", 3, "click"], ["alt", "icon", 1, "l-icon", 3, "src"], [1, "g-text-h1-dark", "mb-3"], ["class", "l-loading-container", 4, "ngIf", "ngIfElse"], ["showCategories", ""], [1, "g-primary-button", "my-2", 3, "click"], [1, "l-loading-container"], ["mode", "indeterminate", 1, "g-mat-progress-spinner-blue", 3, "diameter"], [1, "l-content-container"], ["class", "l-content g-text-p-dark", 4, "ngFor", "ngForOf"], [1, "l-content", "g-text-p-dark"], ["src", "./assets/icons/crop-icon-blue.svg", "alt", "crop-icon", 1, "l-crop-bullet-icon"]],
    template: function CategoryInfoModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CategoryInfoModalComponent_Template_img_click_2_listener() {
          return ctx.handleClose();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h1", 4)(5, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, CategoryInfoModalComponent_div_7_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, CategoryInfoModalComponent_ng_template_8_Template, 2, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CategoryInfoModalComponent_Template_button_click_10_listener() {
          return ctx.handleClose();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Okay, got it!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx.data.iconSource, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.data.categoryName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isDataLoading)("ngIfElse", _r1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_legacy_progress_spinner__WEBPACK_IMPORTED_MODULE_8__.MatLegacyProgressSpinner],
    styles: [".l-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 70vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.l-header[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.l-close-icon[_ngcontent-%COMP%] {\n  width: 18px;\n  height: auto;\n  position: absolute;\n  top: 0;\n  right: 0;\n  cursor: pointer;\n}\n\n.l-content[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  text-align: left;\n}\n\n.l-icon[_ngcontent-%COMP%] {\n  height: 56px;\n  width: 56px;\n  margin-bottom: 16px;\n}\n\n.l-crop-bullet-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  margin-right: 10px;\n}\n\n.l-content-container[_ngcontent-%COMP%] {\n  height: 65%;\n  overflow: scroll;\n  margin-bottom: 16px;\n  padding: 6px 16px;\n  box-shadow: 0px 4px 2px -2px #f5f5f5;\n}\n\n.l-loading-container[_ngcontent-%COMP%] {\n  height: 65%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvc2hhcmVkL2NvbXBvbmVudHMvY2F0ZWdvcnktaW5mby1tb2RhbC9jYXRlZ29yeS1pbmZvLW1vZGFsL2NhdGVnb3J5LWluZm8tbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FBREo7O0FBSUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQURKOztBQUlBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtBQURKOztBQUlBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQURKOztBQUlBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQURKOztBQUlBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQURKOztBQUlBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9DQUFBO0FBREo7O0FBSUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFESiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3NyYy92YXJpYWJsZXMuc2Nzcyc7XHJcblxyXG4ubC1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDcwdmg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmwtaGVhZGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubC1jbG9zZS1pY29uIHtcclxuICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5sLWNvbnRlbnQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLmwtaWNvbiB7XHJcbiAgICBoZWlnaHQ6IDU2cHg7XHJcbiAgICB3aWR0aDogNTZweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbn1cclxuXHJcbi5sLWNyb3AtYnVsbGV0LWljb24ge1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5sLWNvbnRlbnQtY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogNjUlO1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICBwYWRkaW5nOiA2cHggMTZweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggMnB4IC0ycHggJGJhY2tncm91bmQtY29sb3ItZ3JleTtcclxufVxyXG5cclxuLmwtbG9hZGluZy1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiA2NSU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 1939:
/*!*****************************************************************************************!*\
  !*** ./src/app/features/shared/components/document-viewer/document-viewer.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DocumentViewerComponent: () => (/* binding */ DocumentViewerComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 1527);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-extended-pdf-viewer */ 393);







function DocumentViewerComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function DocumentViewerComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Empty PDF");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class DocumentViewerComponent {
  constructor(router, route, location) {
    this.router = router;
    this.route = route;
    this.location = location;
    this.pdfViewerReady = false;
  }
  ngOnInit() {
    this.route.params.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1)).subscribe(({
      name
    }) => {
      name ? this.pdfUrl = `./assets/files/${name}` : this.handleClose();
    });
  }
  handlePDFLoadFailEvent(exception) {
    if (exception.name === 'InvalidPDFException') {
      window.open(this.pdfUrl);
      this.handleClose();
    }
  }
  handlePDFLoadingEvent(event) {
    this.pdfPageCount = event.pagesCount;
    this.pdfViewerReady = event.pagesCount > 0;
  }
  handleClose() {
    this.location.back();
  }
  static #_ = this.ɵfac = function DocumentViewerComponent_Factory(t) {
    return new (t || DocumentViewerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.Location));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: DocumentViewerComponent,
    selectors: [["app-document-viewer"]],
    decls: 7,
    vars: 10,
    consts: [[1, "l-main-container"], [1, "py-3", "px-4", "g-clickable", "l-header-container"], ["src", "../../../../assets/icons/black-arrow-back.svg", "alt", "arrow", "height", "15px;", 3, "click"], ["class", "d-flex flex-wrap flex-column h-100 w-100 justify-content-center align-content-center", 4, "ngIf"], ["class", "d-flex h-100 w-100 justify-content-center", 4, "ngIf"], [3, "src", "useBrowserLocale", "mobileFriendlyZoom", "showSecondaryToolbarButton", "showToolbar", "showDownloadButton", "pdfLoadingFailed", "pagesLoaded"], [1, "d-flex", "flex-wrap", "flex-column", "h-100", "w-100", "justify-content-center", "align-content-center"], ["role", "status", 1, "spinner-border"], [1, "d-flex", "h-100", "w-100", "justify-content-center"]],
    template: function DocumentViewerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DocumentViewerComponent_Template_img_click_2_listener() {
          return ctx.handleClose();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DocumentViewerComponent_div_3_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DocumentViewerComponent_div_4_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div")(6, "ngx-extended-pdf-viewer", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pdfLoadingFailed", function DocumentViewerComponent_Template_ngx_extended_pdf_viewer_pdfLoadingFailed_6_listener($event) {
          return ctx.handlePDFLoadFailEvent($event);
        })("pagesLoaded", function DocumentViewerComponent_Template_ngx_extended_pdf_viewer_pagesLoaded_6_listener($event) {
          return ctx.handlePDFLoadingEvent($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.pdfViewerReady);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pdfPageCount === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("d-none", !ctx.pdfViewerReady);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.pdfUrl)("useBrowserLocale", true)("mobileFriendlyZoom", "150%")("showSecondaryToolbarButton", false)("showToolbar", false)("showDownloadButton", false);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_4__.NgxExtendedPdfViewerComponent],
    styles: [".l-main-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n}\n\n.l-header-container[_ngcontent-%COMP%] {\n  height: -moz-fit-content;\n  height: fit-content;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvc2hhcmVkL2NvbXBvbmVudHMvZG9jdW1lbnQtdmlld2VyL2RvY3VtZW50LXZpZXdlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLHdCQUFBO0VBQUEsbUJBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5sLW1haW4tY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLmwtaGVhZGVyLWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 7068:
/*!***************************************************************************************!*\
  !*** ./src/app/features/shared/components/grain-sa-modal/grain-sa-modal.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GrainSaModalComponent: () => (/* binding */ GrainSaModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/legacy-dialog */ 1035);
/* harmony import */ var src_app_core_helpers_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/helpers/constants */ 9487);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);







function GrainSaModalComponent_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GrainSaModalComponent_button_16_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.handleNavigateToSubscriptions());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Go to Subscriptions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class GrainSaModalComponent {
  constructor(dialogRef, router, data) {
    this.dialogRef = dialogRef;
    this.router = router;
    this.data = data;
  }
  ngOnInit() {}
  handleClose() {
    this.dialogRef.close();
  }
  handleNavigateToSubscriptions() {
    this.dialogRef.close();
    this.router.navigate([src_app_core_helpers_constants__WEBPACK_IMPORTED_MODULE_0__.VERIFICATION_ROUTE]);
  }
  static #_ = this.ɵfac = function GrainSaModalComponent_Factory(t) {
    return new (t || GrainSaModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_2__.MatLegacyDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_LEGACY_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: GrainSaModalComponent,
    selectors: [["app-grain-sa-modal"]],
    decls: 17,
    vars: 1,
    consts: [[1, "l-container"], [1, "l-header"], ["src", "./assets/icons/close-icon-dark.svg", "alt", "close", 1, "l-close-icon", 3, "click"], ["src", "../../../assets/icons/grainSA-icon.svg", "alt", "Grain SA icon", 1, "l-icon"], [1, "g-text-h1-dark"], [1, "l-content", "g-text-p-dark"], [1, "mt-2"], ["src", "./assets/icons/green-tick.svg", 1, "mx-1"], [1, "g-primary-button", 3, "click"], ["class", "g-secondary-button mt-2", 3, "click", 4, "ngIf"], [1, "g-secondary-button", "mt-2", 3, "click"]],
    template: function GrainSaModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GrainSaModalComponent_Template_img_click_2_listener() {
          return ctx.handleClose();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1", 4)(5, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Grain SA");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5)(8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Use your Grain SA membership number and get a years' free Grain SA verification type. Input your membership number and after we verify your number you can purchase the Grain SA verification and get access to all of MX's premium features. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " You will see a green tick ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " when MX has confirmed your membership. You can then purchase the Grain SA verification. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GrainSaModalComponent_Template_button_click_14_listener() {
          return ctx.handleClose();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Okay, got it!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, GrainSaModalComponent_button_16_Template, 2, 0, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data.showSubscription);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf],
    styles: [".l-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0 16px;\n}\n\n.l-header[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.l-close-icon[_ngcontent-%COMP%] {\n  width: 18px;\n  height: auto;\n  position: absolute;\n  top: 0;\n  right: 0;\n  cursor: pointer;\n}\n\n.l-content[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 24px 0;\n  text-align: left;\n}\n\n.l-icon[_ngcontent-%COMP%] {\n  height: 56px;\n  width: 56px;\n  margin-bottom: 16px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvc2hhcmVkL2NvbXBvbmVudHMvZ3JhaW4tc2EtbW9kYWwvZ3JhaW4tc2EtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQURKOztBQUlBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFJQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7QUFESjs7QUFJQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFESjs7QUFJQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFESiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3NyYy92YXJpYWJsZXMuc2Nzcyc7XHJcblxyXG4ubC1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwIDE2cHg7XHJcbn1cclxuXHJcbi5sLWhlYWRlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmwtY2xvc2UtaWNvbiB7XHJcbiAgICB3aWR0aDogMThweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubC1jb250ZW50IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAyNHB4IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4ubC1pY29uIHtcclxuICAgIGhlaWdodDogNTZweDtcclxuICAgIHdpZHRoOiA1NnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 2220:
/*!*****************************************************************************************!*\
  !*** ./src/app/features/shared/components/loading-spinner/loading-spinner.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoadingSpinnerComponent: () => (/* binding */ LoadingSpinnerComponent),
/* harmony export */   LoadingSpinnerModule: () => (/* binding */ LoadingSpinnerModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);


class LoadingSpinnerComponent {
  constructor() {
    this.loading = false;
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function LoadingSpinnerComponent_Factory(t) {
    return new (t || LoadingSpinnerComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: LoadingSpinnerComponent,
    selectors: [["app-loading-spinner"]],
    inputs: {
      loading: "loading"
    },
    decls: 7,
    vars: 0,
    consts: [["id", "nb-global-spinner", 1, "spinner"], [1, "blob", "blob-0"], [1, "blob", "blob-1"], [1, "blob", "blob-2"], [1, "blob", "blob-3"], [1, "blob", "blob-4"], [1, "blob", "blob-5"]],
    template: function LoadingSpinnerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.spinner[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1003;\n  background: rgba(255, 255, 255, 0.8);\n  overflow: hidden;\n}\n\n.spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\n  display: block;\n  position: relative;\n  left: 50%;\n  top: 50%;\n  width: 150px;\n  height: 150px;\n  margin: -75px 0 0 -75px;\n  border-radius: 50%;\n  box-shadow: 0 3px 3px 0 #407ef8;\n  transform: translate3d(0, 0, 0);\n  animation: _ngcontent-%COMP%_spin 2s linear infinite;\n}\n\n.spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child:after, .spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child:before {\n  content: \"\";\n  position: absolute;\n  border-radius: 50%;\n}\n\n.spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child:before {\n  top: 5px;\n  left: 5px;\n  right: 5px;\n  bottom: 5px;\n  box-shadow: 0 3px 3px 0 rgb(81, 179, 236);\n  animation: _ngcontent-%COMP%_spin 3s linear infinite;\n}\n\n.spinner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child:after {\n  top: 15px;\n  left: 15px;\n  right: 15px;\n  bottom: 15px;\n  box-shadow: 0 3px 3px 0 #e5edfd;\n  animation: _ngcontent-%COMP%_spin 1.5s linear infinite;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvc2hhcmVkL2NvbXBvbmVudHMvbG9hZGluZy1zcGlubmVyL2xvYWRpbmctc3Bpbm5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQkE7RUFDSTtJQUNJLG9CQUFBO0VBQ047RUFDRTtJQUNJLHlCQUFBO0VBQ047QUFDRjtBQUNBO0VBQ0ksZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUNBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0NBQUE7QUFFSjs7QUFBQTs7RUFFSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUdKOztBQURBO0VBQ0ksUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHlDQUFBO0VBRUEsa0NBQUE7QUFJSjs7QUFGQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwrQkFBQTtFQUNBLG9DQUFBO0FBS0oiLCJzb3VyY2VzQ29udGVudCI6WyJALXdlYmtpdC1rZXlmcmFtZXMgc3BpbiB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgfVxyXG59XHJcbkAtbW96LWtleWZyYW1lcyBzcGluIHtcclxuICAgIDAlIHtcclxuICAgICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDApO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgfVxyXG59XHJcbkBrZXlmcmFtZXMgc3BpbiB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgfVxyXG59XHJcbi5zcGlubmVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHotaW5kZXg6IDEwMDM7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5zcGlubmVyIGRpdjpmaXJzdC1jaGlsZCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIG1hcmdpbjogLTc1cHggMCAwIC03NXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggM3B4IDAgIzQwN2VmODtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgICBhbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xyXG59XHJcbi5zcGlubmVyIGRpdjpmaXJzdC1jaGlsZDphZnRlcixcclxuLnNwaW5uZXIgZGl2OmZpcnN0LWNoaWxkOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4uc3Bpbm5lciBkaXY6Zmlyc3QtY2hpbGQ6YmVmb3JlIHtcclxuICAgIHRvcDogNXB4O1xyXG4gICAgbGVmdDogNXB4O1xyXG4gICAgcmlnaHQ6IDVweDtcclxuICAgIGJvdHRvbTogNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggM3B4IDAgcmdiKDgxLCAxNzksIDIzNik7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAzcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICBhbmltYXRpb246IHNwaW4gM3MgbGluZWFyIGluZmluaXRlO1xyXG59XHJcbi5zcGlubmVyIGRpdjpmaXJzdC1jaGlsZDphZnRlciB7XHJcbiAgICB0b3A6IDE1cHg7XHJcbiAgICBsZWZ0OiAxNXB4O1xyXG4gICAgcmlnaHQ6IDE1cHg7XHJcbiAgICBib3R0b206IDE1cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCAzcHggMCAjZTVlZGZkO1xyXG4gICAgYW5pbWF0aW9uOiBzcGluIDEuNXMgbGluZWFyIGluZmluaXRlO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}
class LoadingSpinnerModule {
  static #_ = this.ɵfac = function LoadingSpinnerModule_Factory(t) {
    return new (t || LoadingSpinnerModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: LoadingSpinnerModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoadingSpinnerModule, {
    declarations: [LoadingSpinnerComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
    exports: [LoadingSpinnerComponent]
  });
})();

/***/ }),

/***/ 9839:
/*!*************************************************************************************************!*\
  !*** ./src/app/features/shared/components/payment-check-modal/payment-check-modal.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaymentCheckModalComponent: () => (/* binding */ PaymentCheckModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/legacy-dialog */ 1035);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/legacy-button */ 8654);






class PaymentCheckModalComponent {
  constructor(dialogRef, domSanitizer, data) {
    this.dialogRef = dialogRef;
    this.domSanitizer = domSanitizer;
    this.data = data;
    this.commission = 0;
  }
  ngOnInit() {
    this.commission = this.data.metricTons ? this.data.metricTons * 3 : 0;
    console.log(this.data);
    this.prepareFeedbackMessage();
  }
  prepareFeedbackMessage() {
    if (this.data.paymentStepReady && this.data.currentUserSubmitted && this.data.counterPartySubmitted) {
      this.feedbackMessage = `
          <p class="d-flex">
            The commission made by the agent to be payed to MX is R${this.commission}
          </p>

          <h2 class="g-text-h2-dark">
            Bank Account Details
          </h2>

          <p class="d-flex flex-row text-left">
            Rekeningnaam/Account Name: MATCHMX (PTY) LTD <br>
            ABSA-rekeningnommer/ABSA Account Number: 4090190760 <br>
            Rekeningtipe/Account Type: Current (Tjek) <br>
            Takkode/Branch Code: 632005 <br>
          </p>`;
    } else if (!this.data.paymentStepReady && this.data.currentUserSubmitted && !this.data.counterPartySubmitted) {
      this.feedbackMessage = `
          <p>
            This negotiation is pending submission from the Counter Party.
            Payment for Broker services will be due when the Counter Party submits the Match.
          </p>
           `;
    } else if (!this.data.paymentStepReady && !this.data.currentUserSubmitted && this.data.counterPartySubmitted) {
      this.feedbackMessage = `
          <p>
            This negotiation is pending because you have not yet submitted the Match.
            Payment for Broker services will be due once you have submitted the Match.
          </p>`;
    } else if (this.data.paymentComplete) {
      this.feedbackMessage = `
          <p>
            This negotiation has now been closed and is considered complete.
            Payment for Broker services has been completed.
          </p>`;
    }
  }
  handleCloseModal() {
    this.dialogRef.close();
  }
  static #_ = this.ɵfac = function PaymentCheckModalComponent_Factory(t) {
    return new (t || PaymentCheckModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_1__.MatLegacyDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_LEGACY_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: PaymentCheckModalComponent,
    selectors: [["app-payment-check-modal"]],
    decls: 10,
    vars: 2,
    consts: [["mat-dialog-content", "", 1, "d-flex", "flex-column"], [1, "d-flex", "flex-row", "justify-content-end", 3, "click"], ["src", "assets/icons/close-icon-dark.svg", "alt", "close"], [1, "d-flex", "flex-column"], [1, "g-text-h1-dark", "mb-3", "w-100"], [1, "g-text-p-dark", "w-100", "text-center", 3, "innerHTML"], ["mat-flat-button", "", 1, "g-primary-button", "mt-0", 3, "mat-dialog-close"]],
    template: function PaymentCheckModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaymentCheckModalComponent_Template_div_click_1_listener() {
          return ctx.handleCloseModal();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3)(4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Broker Payment Check ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3)(8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Proceed ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.domSanitizer.bypassSecurityTrustHtml(ctx.feedbackMessage), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
      }
    },
    dependencies: [_angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_1__.MatLegacyDialogClose, _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_1__.MatLegacyDialogContent, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_3__.MatLegacyButton],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 1370:
/*!*************************************************************************************!*\
  !*** ./src/app/features/shared/components/refresh-modal/refresh-modal.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RefreshModalComponent: () => (/* binding */ RefreshModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/legacy-dialog */ 1035);
/* harmony import */ var _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/legacy-button */ 8654);




class RefreshModalComponent {
  constructor(dialogRef) {
    this.dialogRef = dialogRef;
  }
  ngOnInit() {}
  handleCloseModal() {
    this.dialogRef.close();
  }
  static #_ = this.ɵfac = function RefreshModalComponent_Factory(t) {
    return new (t || RefreshModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_1__.MatLegacyDialogRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: RefreshModalComponent,
    selectors: [["app-refresh-modal"]],
    decls: 11,
    vars: 0,
    consts: [[1, "l-container"], [1, "l-modal"], [1, "g-text-h2"], [1, "g-text-p", "my-4", "mx-2"], ["mat-flat-button", "", 1, "w-100", "g-primary-button", 3, "click"]],
    template: function RefreshModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2", 2)(3, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Match Exchange Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Match Exchange just got better and will now refresh. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "We apologise for any inconvenience. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RefreshModalComponent_Template_button_click_9_listener() {
          return ctx.handleCloseModal();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
    },
    dependencies: [_angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_2__.MatLegacyButton],
    styles: [".l-container[_ngcontent-%COMP%] {\n  width: 100vw;\n  max-width: 576px;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.l-modal[_ngcontent-%COMP%] {\n  width: 90%;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 24px;\n  border-radius: 4px;\n  background-color: #ffffff;\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvc2hhcmVkL2NvbXBvbmVudHMvcmVmcmVzaC1tb2RhbC9yZWZyZXNoLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFJQTtFQUNJLFVBQUE7RUFDQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLDhIQUFBO0FBREoiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzcmMvdmFyaWFibGVzLnNjc3MnO1xyXG5cclxuLmwtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIG1heC13aWR0aDogNTc2cHg7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sLW1vZGFsIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMjRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMTFweCAxNXB4IC03cHggcmdiKDAgMCAwIC8gMjAlKSwgMHB4IDI0cHggMzhweCAzcHggcmdiKDAgMCAwIC8gMTQlKSxcclxuICAgICAgICAwcHggOXB4IDQ2cHggOHB4IHJnYigwIDAgMCAvIDEyJSk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 4231:
/*!***********************************************************************************!*\
  !*** ./src/app/features/shared/components/success-page/success-page.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SuccessPageComponent: () => (/* binding */ SuccessPageComponent)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var src_app_features_dashboard_dashboard_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/features/dashboard/dashboard.selectors */ 2243);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 1527);
/* harmony import */ var src_app_core_helpers_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/helpers/constants */ 9487);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/legacy-button */ 8654);
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-lottie */ 9809);












function SuccessPageComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h1", 9)(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Great!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h1", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Let's get serious");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
}
function SuccessPageComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1", 9)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Congratulations!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h1", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "You have a Match!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h2", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Your Match has been notified of this.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function SuccessPageComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13)(1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SuccessPageComponent_div_8_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r6.handleRouteToNegotiation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Let's Negotiate ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SuccessPageComponent_div_8_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r8.handleContinueSwiping());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Continue swiping");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function SuccessPageComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SuccessPageComponent_ng_template_9_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r9.handleNavigateToNegotiationCard());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r5.hasOpposingPartySubmitted ? "View in completed negotiations" : "View in negotiating room", " ");
  }
}
class SuccessPageComponent {
  constructor(route, router, location, store) {
    this.route = route;
    this.router = router;
    this.location = location;
    this.store = store;
    this.hasOpposingPartySubmitted = false;
    this.options = {
      path: './assets/images/success-lottie.json',
      loop: false
    };
  }
  ngOnInit() {
    this.route.params.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1)).subscribe(({
      id
    }) => {
      if (id) {
        this.lotMatchId = id;
      }
    });
    this.route.queryParams.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1)).subscribe(({
      hasOpposingPartySubmitted
    }) => {
      if (hasOpposingPartySubmitted) {
        this.hasOpposingPartySubmitted = true;
      }
    });
  }
  handleRouteToNegotiation() {
    this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.select)(src_app_features_dashboard_dashboard_selectors__WEBPACK_IMPORTED_MODULE_0__.matchSelectors.getNewMatchId), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1)).subscribe(lotMatchId => {
      if (lotMatchId) {
        this.router.navigate([`${src_app_core_helpers_constants__WEBPACK_IMPORTED_MODULE_1__.NEGOTIATION_EDIT_ROUTE}/${lotMatchId}`], {
          queryParams: {
            fromSuccess: true
          }
        });
      }
    });
  }
  handleContinueSwiping() {
    this.location.back();
  }
  handleNavigateToNegotiationCard() {
    this.hasOpposingPartySubmitted ? this.router.navigate([src_app_core_helpers_constants__WEBPACK_IMPORTED_MODULE_1__.NEGOTIATIONS_COMPLETED_ROUTE], {
      queryParams: {
        fromSuccess: true
      }
    }) : this.router.navigate([src_app_core_helpers_constants__WEBPACK_IMPORTED_MODULE_1__.NEGOTIATING_ROOM_ROUTE]);
  }
  static #_ = this.ɵfac = function SuccessPageComponent_Factory(t) {
    return new (t || SuccessPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: SuccessPageComponent,
    selectors: [["app-success-page"]],
    decls: 11,
    vars: 5,
    consts: [[1, "g-app-dimensions"], [1, "l-container"], [1, "l-content"], [1, "l-image", 3, "options"], [1, "l-success-text"], [4, "ngIf", "ngIfElse"], ["showSkuduMatchText", ""], ["class", "l-negotiations", 4, "ngIf", "ngIfElse"], ["showNegotiatingButton", ""], [1, "g-text-h1-dark", "mb-2"], [1, "g-text-h1-dark"], [1, "g-text-h1-dark", "mb-4"], [1, "g-text-h2"], [1, "l-negotiations"], ["mat-flat-button", "", 1, "g-primary-button", "mt-4", 3, "click"], [1, "g-secondary-button", "mt-3", 3, "click"]],
    template: function SuccessPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "ng-lottie", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, SuccessPageComponent_ng_container_5_Template, 6, 0, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, SuccessPageComponent_ng_template_6_Template, 7, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, SuccessPageComponent_div_8_Template, 5, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, SuccessPageComponent_ng_template_9_Template, 2, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](7);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.lotMatchId)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.lotMatchId)("ngIfElse", _r4);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_7__.MatLegacyButton, ngx_lottie__WEBPACK_IMPORTED_MODULE_8__.LottieComponent],
    styles: [".l-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #ffffff;\n  padding: 16px;\n}\n\n.l-content[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  display: flex;\n  padding: 0 16px;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.l-success-text[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 16px;\n}\n\n.l-negotiations[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.l-image[_ngcontent-%COMP%] {\n  width: 85%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvc2hhcmVkL2NvbXBvbmVudHMvc3VjY2Vzcy1wYWdlL3N1Y2Nlc3MtcGFnZS5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJDMkJlO0VEMUJmLGFBQUE7QUFESjs7QUFJQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQURKOztBQUlBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQURKOztBQUlBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBREo7O0FBR0E7RUFDSSxVQUFBO0FBQUoiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzcmMvdmFyaWFibGVzLnNjc3MnO1xyXG5cclxuLmwtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3I7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG59XHJcblxyXG4ubC1jb250ZW50IHtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubC1zdWNjZXNzLXRleHQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxufVxyXG5cclxuLmwtbmVnb3RpYXRpb25zIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5sLWltYWdlIHtcclxuICAgIHdpZHRoOiA4NSU7XHJcbn1cclxuIiwiLy8gVGV4dFxyXG4kYXBwLWZvbnQ6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuJGFwcC1pbnB1dC1mb250OiAnTXVsaXNoJywgc2Fucy1zZXJpZjtcclxuJGFwcC1mb250LWJsYWNrOiAjMzQzNDM0O1xyXG4kYXBwLXRleHQtZ3JleTogIzcwNzA3MDtcclxuJGFwcC1mb250LWlucHV0LXBsYWNlaG9sZGVyOiByZ2JhKDMwLCA0OCwgMzcsIDAuNTYpO1xyXG4kYXBwLWZvcm0taW5mby1jb2xvcjogI2FmYWZhZjtcclxuXHJcbi8vIENvbG9yc1xyXG4kYXBwLWJnLWNvbG9yOiAjZjlmOWZjO1xyXG4kYXBwLWJ1eWluZy1yZWQ6ICNlNzZmNTE7XHJcbiRhcHAtc2VsbGluZy1ncmVlbjogIzdmYTk5NTtcclxuJGFwcC1pbnB1dC1iZy1jb2xvcjogI2U2ZTZlNjtcclxuJGFwcC1ib3R0b20tbmF2LWl0ZW0tYmc6ICNlNWVmZTk7XHJcbiRhcHAtdGFicy1tYXJrZXRwbGFjZS1ncmVlbjogIzI4NWQ2MDtcclxuJGFwcC10YWJzLW5lZ290aWF0aW9ucy1ibHVlOiAjNGY5ZWJkO1xyXG4kYXBwLW5vdGlmaWNhdGlvbi1yZWQ6ICNhNTNhNGE7XHJcblxyXG4vLyBHcmFkaWVudHNcclxuJGFwcC1zZWxsaW5nLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjOThiNGE3LCAjNGE2ZTVlKTtcclxuJGFwcC1idXlpbmctZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICNkZjhhNzUsICNhMjUzM2YpO1xyXG4kYXBwLXNlbGxpbmctY2FyZC1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgIzg1YWU5YiwgIzczOWU4YSk7XHJcbiRhcHAtYnV5aW5nLWNhcmQtZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICRhcHAtYnV5aW5nLXJlZCwgI2M3NWQ0Myk7XHJcblxyXG4vLyBCdXR0b25zXHJcbiRhcHAtcHJpbWFyeS1idXR0b24tYmctY29sb3I6ICMzMWEwNWY7XHJcbiRhcHAtc2Vjb25kYXJ5LWJ1dHRvbi1iZy1jb2xvcjogI2U1ZTVlNTtcclxuJGFwcC1kZWxldGUtYnV0dG9uLXJlZDogI2QzNDU1YjtcclxuXHJcbi8vIE90aGVyXHJcbiRhcHAtYm9yZGVyLXJhZGl1czogOHB4O1xyXG4kYXBwLWJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDgpICFpbXBvcnRhbnQ7XHJcblxyXG4vLyAjcmVnaW9uIE1hdGNoIEV4Y2hhbmdlXHJcblxyXG4vLyAjcmVnaW9uIENvbG9yc1xyXG5cclxuJGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiRiYWNrZ3JvdW5kLWNvbG9yLWdyZXk6ICNmNWY1ZjU7XHJcbiR0ZXh0LWRhcms6ICM0MDQwNDA7XHJcbiR0ZXh0LXBsYWNlaG9sZGVyOiAjOGM4YzhjO1xyXG4kcHJpbWFyeS1jb2xvcjogIzQwN2VmODtcclxuJHNlY29uZGFyeS1jb2xvcjogI2U1ZWRmZDtcclxuJG1lZGl1bS1ibHVlOiAjOGQ5ZWM1O1xyXG4kcHJpbWFyeS1ncmVlbjogIzFjYWY3ZTtcclxuJHNlY29uZGFyeS1ncmVlbjogI2U3ZjdmMDtcclxuJHByaW1hcnktcmVkOiAjZDIzMDNkO1xyXG4kc2Vjb25kYXJ5LXJlZDogI2Y3ZThlNztcclxuJGlucHV0LWJvcmRlcjogI2UyZThmMDtcclxuJGVycm9yLW1lc3NhZ2U6ICNiMTE1MGE7XHJcbiRkaXNhYmxlZC1jb2xvcjogI2NiY2JjYjtcclxuXHJcbi8vICNlbmRyZWdpb25cclxuXHJcbi8vICNyZWdpb24gVGV4dFxyXG5cclxuJHRleHQtZm9udDogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4kZm9udC13ZWlnaHQtYm9sZDogNzAwO1xyXG4kZm9udC13ZWlnaHQtc2VtaS1ib2xkOiA2MDA7XHJcbiRmb250LXdlaWdodC1yZWd1bGFyOiA1MDA7XHJcbiRmb250LXdlaWdodC1saWdodDogNDAwO1xyXG5cclxuLy8gI2VuZHJlZ2lvblxyXG5cclxuLy8gI3JlZ2lvbiBCdXR0b25zXHJcblxyXG4kYnV0dG9uLWZvbnQtd2VpZ2h0OiA2MDA7XHJcblxyXG4vLyAjZW5kcmVnaW9uXHJcblxyXG4vLyAjcmVnaW9uIE90aGVyXHJcblxyXG4kYm9yZGVyLXJhZGl1czogNHB4O1xyXG5cclxuLy8gI2VuZHJlZ2lvblxyXG5cclxuLy8gI2VuZHJlZ2lvblxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 3728:
/*!*******************************************************!*\
  !*** ./src/app/features/shared/firebase.module.ts.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FirebaseModule: () => (/* binding */ FirebaseModule)
/* harmony export */ });
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 3159);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/compat/auth */ 7509);
/* harmony import */ var _angular_fire_compat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/compat */ 289);
/* harmony import */ var _angular_fire_compat_analytics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/compat/analytics */ 9543);
/* harmony import */ var _angular_fire_compat_functions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/compat/functions */ 8584);
/* harmony import */ var _angular_fire_compat_messaging__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/compat/messaging */ 3986);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);










class FirebaseModule {
  static #_ = this.ɵfac = function FirebaseModule_Factory(t) {
    return new (t || FirebaseModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: FirebaseModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    providers: [_angular_fire_compat_analytics__WEBPACK_IMPORTED_MODULE_2__.UserTrackingService],
    imports: [_angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_3__.AngularFireAuthModule, _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_4__.AngularFirestoreModule, _angular_fire_compat_analytics__WEBPACK_IMPORTED_MODULE_2__.AngularFireAnalyticsModule, _angular_fire_compat__WEBPACK_IMPORTED_MODULE_5__.AngularFireModule.initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.firebase), _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_4__.AngularFirestoreModule.enablePersistence(), _angular_fire_compat_functions__WEBPACK_IMPORTED_MODULE_6__.AngularFireFunctionsModule, _angular_fire_compat_messaging__WEBPACK_IMPORTED_MODULE_7__.AngularFireMessagingModule, _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_3__.AngularFireAuthModule, _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_4__.AngularFirestoreModule, _angular_fire_compat_analytics__WEBPACK_IMPORTED_MODULE_2__.AngularFireAnalyticsModule, _angular_fire_compat_functions__WEBPACK_IMPORTED_MODULE_6__.AngularFireFunctionsModule, _angular_fire_compat_messaging__WEBPACK_IMPORTED_MODULE_7__.AngularFireMessagingModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FirebaseModule, {
    imports: [_angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_3__.AngularFireAuthModule, _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_4__.AngularFirestoreModule, _angular_fire_compat_analytics__WEBPACK_IMPORTED_MODULE_2__.AngularFireAnalyticsModule, _angular_fire_compat__WEBPACK_IMPORTED_MODULE_5__.AngularFireModule, _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_4__.AngularFirestoreModule, _angular_fire_compat_functions__WEBPACK_IMPORTED_MODULE_6__.AngularFireFunctionsModule, _angular_fire_compat_messaging__WEBPACK_IMPORTED_MODULE_7__.AngularFireMessagingModule],
    exports: [_angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_3__.AngularFireAuthModule, _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_4__.AngularFirestoreModule, _angular_fire_compat_analytics__WEBPACK_IMPORTED_MODULE_2__.AngularFireAnalyticsModule, _angular_fire_compat_functions__WEBPACK_IMPORTED_MODULE_6__.AngularFireFunctionsModule, _angular_fire_compat_messaging__WEBPACK_IMPORTED_MODULE_7__.AngularFireMessagingModule]
  });
})();

/***/ }),

/***/ 2703:
/*!***********************************************************!*\
  !*** ./src/app/features/subscribe/subscribe.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SubscribeComponent: () => (/* binding */ SubscribeComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_helpers_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/helpers/constants */ 9487);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 1527);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/legacy-button */ 8654);







function SubscribeComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const verification_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r0.subscribeContent[verification_r1].source, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", ctx_r0.subscribeContent[verification_r1].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.subscribeContent[verification_r1].name);
  }
}
class SubscribeComponent {
  constructor(route, router) {
    this.route = route;
    this.router = router;
    this.fromSupport = false;
    this.subscribeContent = src_app_core_helpers_constants__WEBPACK_IMPORTED_MODULE_0__.verificationTypes;
    this.verificationOrder = [4, 1, 3, 2, 5];
  }
  ngOnInit() {
    this.route.queryParams.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1)).subscribe(({
      fromSupport
    }) => {
      if (fromSupport === 'true') this.fromSupport = true;
    });
  }
  handleNavigateCreateScout() {
    this.router.navigate([this.fromSupport ? src_app_core_helpers_constants__WEBPACK_IMPORTED_MODULE_0__.SUPPORT_ROUTE : src_app_core_helpers_constants__WEBPACK_IMPORTED_MODULE_0__.SCOUT_CREATE_ROUTE]);
  }
  static #_ = this.ɵfac = function SubscribeComponent_Factory(t) {
    return new (t || SubscribeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: SubscribeComponent,
    selectors: [["app-subscribe"]],
    decls: 12,
    vars: 1,
    consts: [[1, "g-app-dimensions"], [1, "l-container"], [1, "l-content", "l-fade-in"], [1, "g-text-h1-dark", "mb-4", "mt-3"], [1, "g-text-p-dark", "mb-3"], [1, "g-text-p-dark", "mb-4"], ["class", "l-verification-row ml-3 my-3", 4, "ngFor", "ngForOf"], ["mat-flat-button", "", 1, "g-primary-button", 3, "click"], [1, "l-verification-row", "ml-3", "my-3"], [1, "l-img", 3, "src", "alt"], [1, "g-text-p-dark", "l-verification-text", "pl-5"]],
    template: function SubscribeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Subscribe to be Verified");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Raise your profile and enjoy multiple benefits.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Subscribe as a:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, SubscribeComponent_div_9_Template, 4, 3, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SubscribeComponent_Template_button_click_10_listener() {
          return ctx.handleNavigateCreateScout();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.verificationOrder);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_5__.MatLegacyButton],
    styles: [".l-container[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  background-color: #ffffff;\n  padding: 16px;\n  overflow: auto;\n}\n\n.l-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.l-img[_ngcontent-%COMP%] {\n  max-height: 36px;\n}\n\n.l-verification-row[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.l-verification-text[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  text-align: left;\n}\n\n.l-fade-in[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.5s;\n}\n\n@keyframes _ngcontent-%COMP%_fadeIn {\n  0% {\n    left: 30%;\n    opacity: 0.2;\n  }\n  100% {\n    left: 0;\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvc3Vic2NyaWJlL3N1YnNjcmliZS5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkMrQmU7RUQ5QmYsYUFBQTtFQUNBLGNBQUE7QUFESjs7QUFJQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQURKOztBQUlBO0VBQ0ksZ0JBQUE7QUFESjs7QUFJQTtFQUNJLGFBQUE7QUFESjs7QUFJQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBREo7O0FBSUE7RUFDSSxzQkFBQTtBQURKOztBQUlBO0VBQ0k7SUFDSSxTQUFBO0lBQ0EsWUFBQTtFQUROO0VBR0U7SUFDSSxPQUFBO0lBQ0EsVUFBQTtFQUROO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzcmMvdmFyaWFibGVzLnNjc3MnO1xyXG5cclxuLmwtY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3I7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi5sLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmwtaW1nIHtcclxuICAgIG1heC1oZWlnaHQ6IDM2cHg7XHJcbn1cclxuXHJcbi5sLXZlcmlmaWNhdGlvbi1yb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmwtdmVyaWZpY2F0aW9uLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5sLWZhZGUtaW4ge1xyXG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gMC41cztcclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlSW4ge1xyXG4gICAgMCUge1xyXG4gICAgICAgIGxlZnQ6IDMwJTtcclxuICAgICAgICBvcGFjaXR5OiAwLjI7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gVGV4dFxyXG4kYXBwLWZvbnQ6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuJGFwcC1pbnB1dC1mb250OiAnTXVsaXNoJywgc2Fucy1zZXJpZjtcclxuJGFwcC1mb250LWJsYWNrOiAjMzQzNDM0O1xyXG4kYXBwLXRleHQtZ3JleTogIzcwNzA3MDtcclxuJGFwcC1mb250LWlucHV0LXBsYWNlaG9sZGVyOiByZ2JhKDMwLCA0OCwgMzcsIDAuNTYpO1xyXG4kYXBwLWZvcm0taW5mby1jb2xvcjogI2FmYWZhZjtcclxuXHJcbi8vIENvbG9yc1xyXG4kYXBwLWJnLWNvbG9yOiAjZjlmOWZjO1xyXG4kYXBwLWJ1eWluZy1yZWQ6ICNlNzZmNTE7XHJcbiRhcHAtc2VsbGluZy1ncmVlbjogIzdmYTk5NTtcclxuJGFwcC1pbnB1dC1iZy1jb2xvcjogI2U2ZTZlNjtcclxuJGFwcC1ib3R0b20tbmF2LWl0ZW0tYmc6ICNlNWVmZTk7XHJcbiRhcHAtdGFicy1tYXJrZXRwbGFjZS1ncmVlbjogIzI4NWQ2MDtcclxuJGFwcC10YWJzLW5lZ290aWF0aW9ucy1ibHVlOiAjNGY5ZWJkO1xyXG4kYXBwLW5vdGlmaWNhdGlvbi1yZWQ6ICNhNTNhNGE7XHJcblxyXG4vLyBHcmFkaWVudHNcclxuJGFwcC1zZWxsaW5nLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjOThiNGE3LCAjNGE2ZTVlKTtcclxuJGFwcC1idXlpbmctZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICNkZjhhNzUsICNhMjUzM2YpO1xyXG4kYXBwLXNlbGxpbmctY2FyZC1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgIzg1YWU5YiwgIzczOWU4YSk7XHJcbiRhcHAtYnV5aW5nLWNhcmQtZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICRhcHAtYnV5aW5nLXJlZCwgI2M3NWQ0Myk7XHJcblxyXG4vLyBCdXR0b25zXHJcbiRhcHAtcHJpbWFyeS1idXR0b24tYmctY29sb3I6ICMzMWEwNWY7XHJcbiRhcHAtc2Vjb25kYXJ5LWJ1dHRvbi1iZy1jb2xvcjogI2U1ZTVlNTtcclxuJGFwcC1kZWxldGUtYnV0dG9uLXJlZDogI2QzNDU1YjtcclxuXHJcbi8vIE90aGVyXHJcbiRhcHAtYm9yZGVyLXJhZGl1czogOHB4O1xyXG4kYXBwLWJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDgpICFpbXBvcnRhbnQ7XHJcblxyXG4vLyAjcmVnaW9uIE1hdGNoIEV4Y2hhbmdlXHJcblxyXG4vLyAjcmVnaW9uIENvbG9yc1xyXG5cclxuJGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiRiYWNrZ3JvdW5kLWNvbG9yLWdyZXk6ICNmNWY1ZjU7XHJcbiR0ZXh0LWRhcms6ICM0MDQwNDA7XHJcbiR0ZXh0LXBsYWNlaG9sZGVyOiAjOGM4YzhjO1xyXG4kcHJpbWFyeS1jb2xvcjogIzQwN2VmODtcclxuJHNlY29uZGFyeS1jb2xvcjogI2U1ZWRmZDtcclxuJG1lZGl1bS1ibHVlOiAjOGQ5ZWM1O1xyXG4kcHJpbWFyeS1ncmVlbjogIzFjYWY3ZTtcclxuJHNlY29uZGFyeS1ncmVlbjogI2U3ZjdmMDtcclxuJHByaW1hcnktcmVkOiAjZDIzMDNkO1xyXG4kc2Vjb25kYXJ5LXJlZDogI2Y3ZThlNztcclxuJGlucHV0LWJvcmRlcjogI2UyZThmMDtcclxuJGVycm9yLW1lc3NhZ2U6ICNiMTE1MGE7XHJcbiRkaXNhYmxlZC1jb2xvcjogI2NiY2JjYjtcclxuXHJcbi8vICNlbmRyZWdpb25cclxuXHJcbi8vICNyZWdpb24gVGV4dFxyXG5cclxuJHRleHQtZm9udDogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4kZm9udC13ZWlnaHQtYm9sZDogNzAwO1xyXG4kZm9udC13ZWlnaHQtc2VtaS1ib2xkOiA2MDA7XHJcbiRmb250LXdlaWdodC1yZWd1bGFyOiA1MDA7XHJcbiRmb250LXdlaWdodC1saWdodDogNDAwO1xyXG5cclxuLy8gI2VuZHJlZ2lvblxyXG5cclxuLy8gI3JlZ2lvbiBCdXR0b25zXHJcblxyXG4kYnV0dG9uLWZvbnQtd2VpZ2h0OiA2MDA7XHJcblxyXG4vLyAjZW5kcmVnaW9uXHJcblxyXG4vLyAjcmVnaW9uIE90aGVyXHJcblxyXG4kYm9yZGVyLXJhZGl1czogNHB4O1xyXG5cclxuLy8gI2VuZHJlZ2lvblxyXG5cclxuLy8gI2VuZHJlZ2lvblxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 6496:
/*!*******************************************************************************!*\
  !*** ./src/app/features/transactional-risks/transactional-risks.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TransactionalRisksComponent: () => (/* binding */ TransactionalRisksComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 1527);
/* harmony import */ var _core_helpers_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../core/helpers/constants */ 9487);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/legacy-button */ 8654);






function TransactionalRisksComponent_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TransactionalRisksComponent_button_17_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.handleNavigateCreateScout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Skip Tutorial ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class TransactionalRisksComponent {
  constructor(route, router) {
    this.route = route;
    this.router = router;
    this.fromSupport = false;
  }
  ngOnInit() {
    this.route.queryParams.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1)).subscribe(({
      fromSupport
    }) => {
      if (fromSupport === 'true') this.fromSupport = true;
    });
  }
  handleNavigateToOnboarding() {
    this.router.navigate([_core_helpers_constants__WEBPACK_IMPORTED_MODULE_0__.ONBOARDING_ROUTE], {
      queryParams: {
        fromSupport: this.fromSupport
      }
    });
  }
  handleNavigateCreateScout() {
    this.router.navigate([_core_helpers_constants__WEBPACK_IMPORTED_MODULE_0__.SCOUT_CREATE_ROUTE]);
  }
  static #_ = this.ɵfac = function TransactionalRisksComponent_Factory(t) {
    return new (t || TransactionalRisksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: TransactionalRisksComponent,
    selectors: [["app-transactional-risks"]],
    decls: 18,
    vars: 1,
    consts: [[1, "g-app-dimensions"], [1, "l-container"], [1, "l-content", "l-fade-in"], [1, "g-text-h1-dark", "mb-4"], [1, "g-text-p-dark", "mb-3"], [1, "g-text-p-dark"], ["src", "assets/images/connect-buyers-sellers.svg", "alt", "Buyers & Sellers", 1, "l-img", "my-4"], ["src", "assets/images/price-discovery.svg", "alt", "Discovery", 1, "l-img", "my-4"], ["mat-flat-button", "", 1, "g-primary-button", "my-2", 3, "click"], ["mat-flat-button", "", "class", "g-secondary-button", 3, "click", 4, "nfIf"], ["mat-flat-button", "", 1, "g-secondary-button", 3, "click"]],
    template: function TransactionalRisksComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "No Transactional Risk");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "There is no transactional risk for either buyers or sellers.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "MX solves the two most important problems in the marketplace.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Firstly, connecting buyers and sellers with similar needs.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Secondly, MX facilitates price discovery between buyers and sellers.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TransactionalRisksComponent_Template_button_click_15_listener() {
          return ctx.handleNavigateToOnboarding();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, TransactionalRisksComponent_button_17_Template, 2, 0, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nfIf", !ctx.fromSupport);
      }
    },
    dependencies: [_angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_4__.MatLegacyButton],
    styles: [".l-container[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  background-color: #ffffff;\n  padding: 16px;\n  overflow: auto;\n}\n\n.l-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.l-img[_ngcontent-%COMP%] {\n  max-height: 64px;\n  display: flex;\n  justify-content: center;\n}\n\n.l-fade-in[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.5s;\n}\n\n@keyframes _ngcontent-%COMP%_fadeIn {\n  0% {\n    left: 30%;\n    opacity: 0.2;\n  }\n  100% {\n    left: 0;\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvdHJhbnNhY3Rpb25hbC1yaXNrcy90cmFuc2FjdGlvbmFsLXJpc2tzLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQytCZTtFRDlCZixhQUFBO0VBQ0EsY0FBQTtBQURKOztBQUlBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBREo7O0FBSUE7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQURKOztBQUlBO0VBQ0ksc0JBQUE7QUFESjs7QUFJQTtFQUNJO0lBQ0ksU0FBQTtJQUNBLFlBQUE7RUFETjtFQUdFO0lBQ0ksT0FBQTtJQUNBLFVBQUE7RUFETjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vdmFyaWFibGVzLnNjc3MnO1xyXG5cclxuLmwtY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3I7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi5sLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmwtaW1nIHtcclxuICAgIG1heC1oZWlnaHQ6IDY0cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sLWZhZGUtaW4ge1xyXG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gMC41cztcclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlSW4ge1xyXG4gICAgMCUge1xyXG4gICAgICAgIGxlZnQ6IDMwJTtcclxuICAgICAgICBvcGFjaXR5OiAwLjI7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gVGV4dFxyXG4kYXBwLWZvbnQ6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuJGFwcC1pbnB1dC1mb250OiAnTXVsaXNoJywgc2Fucy1zZXJpZjtcclxuJGFwcC1mb250LWJsYWNrOiAjMzQzNDM0O1xyXG4kYXBwLXRleHQtZ3JleTogIzcwNzA3MDtcclxuJGFwcC1mb250LWlucHV0LXBsYWNlaG9sZGVyOiByZ2JhKDMwLCA0OCwgMzcsIDAuNTYpO1xyXG4kYXBwLWZvcm0taW5mby1jb2xvcjogI2FmYWZhZjtcclxuXHJcbi8vIENvbG9yc1xyXG4kYXBwLWJnLWNvbG9yOiAjZjlmOWZjO1xyXG4kYXBwLWJ1eWluZy1yZWQ6ICNlNzZmNTE7XHJcbiRhcHAtc2VsbGluZy1ncmVlbjogIzdmYTk5NTtcclxuJGFwcC1pbnB1dC1iZy1jb2xvcjogI2U2ZTZlNjtcclxuJGFwcC1ib3R0b20tbmF2LWl0ZW0tYmc6ICNlNWVmZTk7XHJcbiRhcHAtdGFicy1tYXJrZXRwbGFjZS1ncmVlbjogIzI4NWQ2MDtcclxuJGFwcC10YWJzLW5lZ290aWF0aW9ucy1ibHVlOiAjNGY5ZWJkO1xyXG4kYXBwLW5vdGlmaWNhdGlvbi1yZWQ6ICNhNTNhNGE7XHJcblxyXG4vLyBHcmFkaWVudHNcclxuJGFwcC1zZWxsaW5nLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjOThiNGE3LCAjNGE2ZTVlKTtcclxuJGFwcC1idXlpbmctZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICNkZjhhNzUsICNhMjUzM2YpO1xyXG4kYXBwLXNlbGxpbmctY2FyZC1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgIzg1YWU5YiwgIzczOWU4YSk7XHJcbiRhcHAtYnV5aW5nLWNhcmQtZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICRhcHAtYnV5aW5nLXJlZCwgI2M3NWQ0Myk7XHJcblxyXG4vLyBCdXR0b25zXHJcbiRhcHAtcHJpbWFyeS1idXR0b24tYmctY29sb3I6ICMzMWEwNWY7XHJcbiRhcHAtc2Vjb25kYXJ5LWJ1dHRvbi1iZy1jb2xvcjogI2U1ZTVlNTtcclxuJGFwcC1kZWxldGUtYnV0dG9uLXJlZDogI2QzNDU1YjtcclxuXHJcbi8vIE90aGVyXHJcbiRhcHAtYm9yZGVyLXJhZGl1czogOHB4O1xyXG4kYXBwLWJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDgpICFpbXBvcnRhbnQ7XHJcblxyXG4vLyAjcmVnaW9uIE1hdGNoIEV4Y2hhbmdlXHJcblxyXG4vLyAjcmVnaW9uIENvbG9yc1xyXG5cclxuJGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiRiYWNrZ3JvdW5kLWNvbG9yLWdyZXk6ICNmNWY1ZjU7XHJcbiR0ZXh0LWRhcms6ICM0MDQwNDA7XHJcbiR0ZXh0LXBsYWNlaG9sZGVyOiAjOGM4YzhjO1xyXG4kcHJpbWFyeS1jb2xvcjogIzQwN2VmODtcclxuJHNlY29uZGFyeS1jb2xvcjogI2U1ZWRmZDtcclxuJG1lZGl1bS1ibHVlOiAjOGQ5ZWM1O1xyXG4kcHJpbWFyeS1ncmVlbjogIzFjYWY3ZTtcclxuJHNlY29uZGFyeS1ncmVlbjogI2U3ZjdmMDtcclxuJHByaW1hcnktcmVkOiAjZDIzMDNkO1xyXG4kc2Vjb25kYXJ5LXJlZDogI2Y3ZThlNztcclxuJGlucHV0LWJvcmRlcjogI2UyZThmMDtcclxuJGVycm9yLW1lc3NhZ2U6ICNiMTE1MGE7XHJcbiRkaXNhYmxlZC1jb2xvcjogI2NiY2JjYjtcclxuXHJcbi8vICNlbmRyZWdpb25cclxuXHJcbi8vICNyZWdpb24gVGV4dFxyXG5cclxuJHRleHQtZm9udDogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4kZm9udC13ZWlnaHQtYm9sZDogNzAwO1xyXG4kZm9udC13ZWlnaHQtc2VtaS1ib2xkOiA2MDA7XHJcbiRmb250LXdlaWdodC1yZWd1bGFyOiA1MDA7XHJcbiRmb250LXdlaWdodC1saWdodDogNDAwO1xyXG5cclxuLy8gI2VuZHJlZ2lvblxyXG5cclxuLy8gI3JlZ2lvbiBCdXR0b25zXHJcblxyXG4kYnV0dG9uLWZvbnQtd2VpZ2h0OiA2MDA7XHJcblxyXG4vLyAjZW5kcmVnaW9uXHJcblxyXG4vLyAjcmVnaW9uIE90aGVyXHJcblxyXG4kYm9yZGVyLXJhZGl1czogNHB4O1xyXG5cclxuLy8gI2VuZHJlZ2lvblxyXG5cclxuLy8gI2VuZHJlZ2lvblxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 7337:
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
//#region Test Environment
const environment = {
  production: true,
  firebase: {
    apiKey: 'AIzaSyBxK92jQdfceClVqvHJur6D2181Z-1YWk0',
    authDomain: 'skudutest.firebaseapp.com',
    databaseURL: 'https://skudutest.firebaseio.com',
    projectId: 'skudutest',
    storageBucket: 'skudutest.appspot.com',
    messagingSenderId: '519714862029',
    appId: '1:519714862029:web:058a9979c6cafed6',
    measurementId: 'G-15C38FLYMS'
  },
  LOGO: '../../../assets/images/logofont.PNG',
  API: 'https://testapi.matchmx.com:50785/api',
  LOCALHOST_API: 'https://localhost:44366/api',
  STANDARD_QUALITY_ID: 0,
  DEFAULT_PACKAGING_ID: 1,
  DEFAULT_UOM_ID: 1,
  DEFAULT_PAYMENT_ID: 6,
  ROUGHAGE_BALES_CROP_IDS: [19, 20, 21, 22, 23, 25, 26, 27, 28, 93, 94, 95, 96, 97, 98, 99, 115, 116, 124],
  STRAW_CROP_IDS: [19, 20, 22, 26, 28],
  HAY_CROP_IDS: [21, 23, 25, 27],
  STRAW_HAY_INCO_TERM_IDS: [1, 6],
  ROUGHAGE_BALES_INCO_TERM_IDS: [1, 3],
  STRAW_HAY_UNIT_OF_MEASURE_IDS: [1, 5],
  CROP_CATEGORIES: [9, 10, 11, 13, 17]
};
//#endregion
// #region Live Environment
// export const environment = {
//     production: true,
//     firebase: {
//         apiKey: 'AIzaSyAPz_4c60V_PBTnACgcWOz2nVPKpyN8DT8',
//         authDomain: 'skudumain.firebaseapp.com',
//         databaseURL: 'https://skudumain.firebaseio.com',
//         projectId: 'skudumain',
//         storageBucket: 'skudumain.appspot.com',
//         messagingSenderId: '663811423141',
//         appId: '1:663811423141:web:5ddbed1a59e7a99b2f064c',
//     },
//     LOGO: '../../../assets/images/logofont.PNG',
//     API: 'https://api.matchmx.com:50685/api',
//     STANDARD_QUALITY_ID: 0,
//     DEFAULT_PACKAGING_ID: 1,
//     DEFAULT_UOM_ID: 1,
//     DEFAULT_PAYMENT_ID: 6,
//     STRAW_CROP_IDS: [19, 20, 22, 26, 28],
//     HAY_CROP_IDS: [21, 23, 25, 27],
//     STRAW_HAY_INCO_TERM_IDS: [1, 6],
//     STRAW_HAY_UNIT_OF_MEASURE_IDS: [1, 5],
//     CROP_CATEGORIES: [9, 10, 11, 13],
// };
//#endregion

/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// #region Test Environment
const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBxK92jQdfceClVqvHJur6D2181Z-1YWk0',
    authDomain: 'skudutest.firebaseapp.com',
    databaseURL: 'https://skudutest.firebaseio.com',
    projectId: 'skudutest',
    storageBucket: 'skudutest.appspot.com',
    messagingSenderId: '519714862029',
    appId: '1:519714862029:web:058a9979c6cafed6',
    measurementId: 'G-15C38FLYMS'
  },
  LOGO: '../../../assets/images/logofont.PNG',
  API: 'https://testapi.matchmx.com:50785/api',
  LOCALHOST_API: 'https://localhost:44366/api',
  STANDARD_QUALITY_ID: 0,
  DEFAULT_PACKAGING_ID: 1,
  DEFAULT_UOM_ID: 1,
  DEFAULT_PAYMENT_ID: 6,
  ROUGHAGE_BALES_CROP_IDS: [19, 20, 21, 22, 23, 25, 26, 27, 28, 93, 94, 95, 96, 97, 98, 99, 115, 116, 124],
  STRAW_CROP_IDS: [19, 20, 22, 26, 28],
  HAY_CROP_IDS: [21, 23, 25, 27],
  STRAW_HAY_INCO_TERM_IDS: [1, 6],
  ROUGHAGE_BALES_INCO_TERM_IDS: [1, 3],
  STRAW_HAY_UNIT_OF_MEASURE_IDS: [1, 5],
  CROP_CATEGORIES: [9, 10, 11, 13, 17]
};
// #endregion
// =================================== NB =================================== //
// The below Live environment should be used only when attempting to serve a
// a local version of the app that points to the Live Server & DB,
// and should only be used STRICTLY for testing whether or not a build of the
// app in it's current state will work whilst pointing to the Live server & DB.
// PROCEED WITH CAUTION, and realise that your interactions with the app
// locally will alter the clients Live DB.
// GitLense is watching you...
// ========================================================================== //
// #region Live Environment
// export const environment = {
//     production: true,
//     firebase: {
//         apiKey: 'AIzaSyAPz_4c60V_PBTnACgcWOz2nVPKpyN8DT8',
//         authDomain: 'skudumain.firebaseapp.com',
//         databaseURL: 'https://skudumain.firebaseio.com',
//         projectId: 'skudumain',
//         storageBucket: 'skudumain.appspot.com',
//         messagingSenderId: '663811423141',
//         appId: '1:663811423141:web:5ddbed1a59e7a99b2f064c',
//     },
//     LOGO: '../../../assets/images/logofont.PNG',
//     API: 'https://api.matchmx.com:50685/api',
//     STANDARD_QUALITY_ID: 0,
//     DEFAULT_PACKAGING_ID: 1,
//     DEFAULT_UOM_ID: 1,
//     DEFAULT_PAYMENT_ID: 6,
//     STRAW_CROP_IDS: [19, 20, 22, 26, 28],
//     HAY_CROP_IDS: [21, 23, 25, 27],
//     STRAW_HAY_INCO_TERM_IDS: [1, 6],
//     STRAW_HAY_UNIT_OF_MEASURE_IDS: [1, 5],
//     CROP_CATEGORIES: [9, 10, 11, 13],
// };
// #endregion

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 553);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map