"use strict";
(self["webpackChunkskudu_match"] = self["webpackChunkskudu_match"] || []).push([["src_app_features_broker-dashboard_broker-dashboard_module_ts"],{

/***/ 9817:
/*!******************************************************************************!*\
  !*** ./src/app/features/broker-dashboard/broker-dashboard-routing.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrokerDashboardRoutingModule: () => (/* binding */ BrokerDashboardRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _broker_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./broker-dashboard.component */ 1434);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);




const routes = [{
  path: '',
  component: _broker_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.BrokerDashboardComponent
}];
class BrokerDashboardRoutingModule {
  static #_ = this.ɵfac = function BrokerDashboardRoutingModule_Factory(t) {
    return new (t || BrokerDashboardRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: BrokerDashboardRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BrokerDashboardRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 1434:
/*!*************************************************************************!*\
  !*** ./src/app/features/broker-dashboard/broker-dashboard.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrokerDashboardComponent: () => (/* binding */ BrokerDashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _components_add_new_client_modal_add_new_client_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/add-new-client-modal/add-new-client-modal.component */ 7279);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngrx/effects */ 1575);
/* harmony import */ var _core_ngrx_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/ngrx/reducers */ 7032);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 274);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 1527);
/* harmony import */ var _core_ngrx_brokers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/ngrx/brokers */ 1199);
/* harmony import */ var _core_helpers_snackbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/helpers/snackbar */ 2179);
/* harmony import */ var _core_helpers_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/helpers/constants */ 9487);
/* harmony import */ var _components_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/confirmation-modal/confirmation-modal.component */ 7625);
/* harmony import */ var _core_ngrx_authState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/ngrx/authState */ 395);
/* harmony import */ var _core_ngrx_entities_lot__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/ngrx/entities/lot */ 7230);
/* harmony import */ var _core_ngrx_entities_notifications__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/ngrx/entities/notifications */ 4624);
/* harmony import */ var _core_ngrx_entities_scout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/ngrx/entities/scout */ 8512);
/* harmony import */ var _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/legacy-dialog */ 1035);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/snack-bar */ 9409);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/legacy-button */ 8654);
/* harmony import */ var _shared_components_broker_info_card_broker_info_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/components/broker-info-card/broker-info-card.component */ 8000);
/* harmony import */ var _components_broker_main_nav_broker_main_nav_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/broker-main-nav/broker-main-nav.component */ 6176);
/* harmony import */ var _components_broker_toolbar_broker_toolbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/broker-toolbar/broker-toolbar.component */ 2701);




























function BrokerDashboardComponent_div_4_div_1_div_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const client_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r7.clientNotificationsCount[client_r6.uid], " ");
  }
}
function BrokerDashboardComponent_div_4_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "app-broker-info-card", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "div", 11)(3, "div", 12)(4, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function BrokerDashboardComponent_div_4_div_1_div_1_Template_button_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r10);
      const client_r6 = restoredCtx.$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r9.handleViewLots(client_r6.uid));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5, " View Client ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](6, BrokerDashboardComponent_div_4_div_1_div_1_div_6_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function BrokerDashboardComponent_div_4_div_1_div_1_Template_button_click_7_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r10);
      const client_r6 = restoredCtx.$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r11.handleOpenDeleteClientConfirmation(client_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](8, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const client_r6 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("data", client_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r5.clientNotificationsCount[client_r6.uid]);
  }
}
function BrokerDashboardComponent_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, BrokerDashboardComponent_div_4_div_1_div_1_Template, 9, 2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r2.filteredActiveClients);
  }
}
function BrokerDashboardComponent_div_4_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " You currently have no active clients ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function BrokerDashboardComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, BrokerDashboardComponent_div_4_div_1_Template, 2, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, BrokerDashboardComponent_div_4_ng_template_2_Template, 2, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](3);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r0.filteredActiveClients.length)("ngIfElse", _r3);
  }
}
function BrokerDashboardComponent_div_5_div_1_div_1_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function BrokerDashboardComponent_div_5_div_1_div_1_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r22);
      const client_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r20.handleViewRequest(client_r16));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " View ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function BrokerDashboardComponent_div_5_div_1_div_1_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function BrokerDashboardComponent_div_5_div_1_div_1_ng_template_4_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r25);
      const client_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r23.handleCancelRequest(client_r16));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function BrokerDashboardComponent_div_5_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "app-broker-info-card", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](3, BrokerDashboardComponent_div_5_div_1_div_1_button_3_Template, 2, 0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](4, BrokerDashboardComponent_div_5_div_1_div_1_ng_template_4_Template, 2, 0, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const client_r16 = ctx.$implicit;
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](5);
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("data", client_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r15.pendingRequestsByBroker.includes(client_r16.uid))("ngIfElse", _r18);
  }
}
function BrokerDashboardComponent_div_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, BrokerDashboardComponent_div_5_div_1_div_1_Template, 6, 3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r12.filteredPendingClients);
  }
}
function BrokerDashboardComponent_div_5_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " You currently have no Pending Client Requests ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function BrokerDashboardComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, BrokerDashboardComponent_div_5_div_1_Template, 2, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, BrokerDashboardComponent_div_5_ng_template_2_Template, 2, 0, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](3);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.filteredPendingClients.length)("ngIfElse", _r13);
  }
}
class BrokerDashboardComponent {
  constructor(dialog, actions$, store, snackbar, router) {
    this.dialog = dialog;
    this.actions$ = actions$;
    this.store = store;
    this.snackbar = snackbar;
    this.router = router;
    this.tabIndex = 0;
    this.destroyed$ = new _angular_core__WEBPACK_IMPORTED_MODULE_13__.EventEmitter();
  }
  // #region Life Cycle Hooks
  ngOnInit() {
    this.fetchBrokerInfoHelper();
    this.selectActiveClientsList();
    this.selectPendingClientsList();
    this.selectPendingRequests();
    this.selectAcceptedRequests();
    this.clearClientObject();
    this.clearBrokerRequest();
    this.clearClientEntities();
    this.clearAllLots();
    this.clearAllScouts();
    this.selectClientsNotificationsCount();
    this.clearNotificationsHelper();
  }
  ngOnDestroy() {
    this.destroyed$.emit(true);
  }
  // #endregion
  clearClientObject() {
    this.store.dispatch(_core_ngrx_brokers__WEBPACK_IMPORTED_MODULE_2__.brokersActions.ClearClientObject_Broker());
  }
  clearBrokerRequest() {
    this.store.dispatch(_core_ngrx_brokers__WEBPACK_IMPORTED_MODULE_2__.brokersActions.ClearBrokerRequest());
  }
  clearClientEntities() {
    this.store.dispatch(_core_ngrx_authState__WEBPACK_IMPORTED_MODULE_6__.authActions.ClearClientEntities());
  }
  clearAllLots() {
    this.store.dispatch(_core_ngrx_entities_lot__WEBPACK_IMPORTED_MODULE_7__.lotActions.ClearAllLots());
  }
  clearAllScouts() {
    this.store.dispatch(_core_ngrx_entities_scout__WEBPACK_IMPORTED_MODULE_9__.scoutActions.ClearAllScouts());
  }
  selectPendingClientsList() {
    this.store.select(_core_ngrx_brokers__WEBPACK_IMPORTED_MODULE_2__.brokersSelectors.getPendingClients).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.takeUntil)(this.destroyed$)).subscribe(pendingClients => {
      this.pendingClients = pendingClients;
      this.filteredPendingClients = pendingClients;
    });
  }
  selectPendingRequests() {
    this.store.select(_core_ngrx_brokers__WEBPACK_IMPORTED_MODULE_2__.brokersSelectors.getPendingRequests).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.takeUntil)(this.destroyed$)).subscribe(pendingRequests => {
      this.pendingRequests = pendingRequests.map(request => request.clientUid);
      this.pendingRequestsByBroker = pendingRequests.filter(request => request.sentByBroker).map(request => request.clientUid);
      this.pendingRequests.length ? this.fetchPendingClientRequests() : this.store.dispatch(_core_ngrx_brokers__WEBPACK_IMPORTED_MODULE_2__.brokersActions.ResetPendingClientsState());
    });
  }
  selectAcceptedRequests() {
    this.store.select(_core_ngrx_brokers__WEBPACK_IMPORTED_MODULE_2__.brokersSelectors.getAcceptedRequests).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.takeUntil)(this.destroyed$)).subscribe(acceptedRequests => {
      this.acceptedRequests = acceptedRequests.map(request => request.clientUid);
      if (this.acceptedRequests.length) {
        this.fetchActiveClientsNotifications();
        this.fetchActiveClientsList();
      } else {
        this.store.dispatch(_core_ngrx_brokers__WEBPACK_IMPORTED_MODULE_2__.brokersActions.ResetActiveClientsState());
      }
    });
  }
  selectActiveClientsList() {
    this.store.select(_core_ngrx_brokers__WEBPACK_IMPORTED_MODULE_2__.brokersSelectors.getActiveClients).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.takeUntil)(this.destroyed$)).subscribe(activeClients => {
      this.activeClients = activeClients;
      this.filteredActiveClients = activeClients;
    });
  }
  selectClientsNotificationsCount() {
    this.store.select(_core_ngrx_brokers__WEBPACK_IMPORTED_MODULE_2__.brokersSelectors.getClientNotificationsCount).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.takeUntil)(this.destroyed$)).subscribe(clientNotificationsCount => {
      this.clientNotificationsCount = clientNotificationsCount;
    });
  }
  fetchActiveClientsNotifications() {
    if (this.acceptedRequests.length > 10) {
      const chuckSize = 10;
      for (let i = 0; i < this.acceptedRequests.length; i += chuckSize) {
        const smallerAcceptedRequestsIdsArray = this.acceptedRequests.slice(i, i + chuckSize);
        this.store.dispatch(_core_ngrx_brokers__WEBPACK_IMPORTED_MODULE_2__.brokersActions.ReqClientsNotifications({
          clientsUids: smallerAcceptedRequestsIdsArray
        }));
      }
    } else {
      this.store.dispatch(_core_ngrx_brokers__WEBPACK_IMPORTED_MODULE_2__.brokersActions.ReqClientsNotifications({
        clientsUids: this.acceptedRequests
      }));
    }
  }
  fetchBrokerInfoHelper() {
    this.store.select(_core_ngrx_reducers__WEBPACK_IMPORTED_MODULE_1__.authSelectors.getUser).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.takeUntil)(this.destroyed$)).subscribe(broker => {
      this.broker = broker;
      this.fetchPendingRequests();
      this.fetchAcceptedRequests();
    });
  }
  clearNotificationsHelper() {
    this.store.dispatch(_core_ngrx_entities_notifications__WEBPACK_IMPORTED_MODULE_8__.notificationActions.ClearNotifications());
  }
  fetchActiveClientsList() {
    if (this.acceptedRequests.length > 10) {
      const chuckSize = 10;
      for (let i = 0; i < this.acceptedRequests.length; i += chuckSize) {
        const smallerAcceptedRequestsIdsArray = this.acceptedRequests.slice(i, i + chuckSize);
        this.store.dispatch(_core_ngrx_brokers__WEBPACK_IMPORTED_MODULE_2__.brokersActions.ReqGetActiveClients_Broker({
          clientIds: smallerAcceptedRequestsIdsArray
        }));
      }
    } else {
      this.store.dispatch(_core_ngrx_brokers__WEBPACK_IMPORTED_MODULE_2__.brokersActions.ReqGetActiveClients_Broker({
        clientIds: this.acceptedRequests
      }));
    }
  }
  fetchPendingClientRequests() {
    if (this.pendingRequests.length > 10) {
      const chuckSize = 10;
      for (let i = 0; i < this.pendingRequests.length; i += chuckSize) {
        const smallerPendingRequestsIdsArray = this.pendingRequests.slice(i, i + chuckSize);
        this.store.dispatch(_core_ngrx_brokers__WEBPACK_IMPORTED_MODULE_2__.brokersActions.ReqGetPendingClients_Broker({
          clientIds: smallerPendingRequestsIdsArray
        }));
      }
    } else {
      this.store.dispatch(_core_ngrx_brokers__WEBPACK_IMPORTED_MODULE_2__.brokersActions.ReqGetPendingClients_Broker({
        clientIds: this.pendingRequests
      }));
    }
  }
  fetchPendingRequests() {
    this.store.dispatch(_core_ngrx_brokers__WEBPACK_IMPORTED_MODULE_2__.brokersActions.ReqPendingBrokerRequests_Broker({
      brokerUid: this.broker.uid
    }));
  }
  fetchAcceptedRequests() {
    this.store.dispatch(_core_ngrx_brokers__WEBPACK_IMPORTED_MODULE_2__.brokersActions.ReqAcceptedBrokerRequests_Broker({
      brokerUid: this.broker.uid
    }));
  }
  acceptRequest(clientUid) {
    this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_15__.ofType)(_core_ngrx_brokers__WEBPACK_IMPORTED_MODULE_2__.brokersActions.ReqAcceptRequest_SharedSuccess, _core_ngrx_brokers__WEBPACK_IMPORTED_MODULE_2__.brokersActions.ReqAcceptRequest_SharedFail), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.take)(1)).subscribe(action => {
      if (action.type === _core_ngrx_brokers__WEBPACK_IMPORTED_MODULE_2__.brokersActions.ReqAcceptRequest_SharedSuccess.type) {
        this.snackbar.open('Client request has been accepted successfully.', 'CLOSE', _core_helpers_snackbar__WEBPACK_IMPORTED_MODULE_3__.successConfig);
        this.store.dispatch(_core_ngrx_brokers__WEBPACK_IMPORTED_MODULE_2__.brokersActions.ReqSendPairingNotification_Shared({
          fromBroker: true,
          newRequest: false,
          brokerUid: this.broker.uid,
          clientUid: clientUid
        }));
      } else {
        this.snackbar.open('Something went wrong while trying to accept client request, Please try again.', 'CLOSE', _core_helpers_snackbar__WEBPACK_IMPORTED_MODULE_3__.errorConfig);
      }
    });
    this.store.dispatch(_core_ngrx_brokers__WEBPACK_IMPORTED_MODULE_2__.brokersActions.ReqAcceptRequest_Shared({
      brokerUid: this.broker.uid,
      clientUid
    }));
  }
  declineRequest(clientUid) {
    this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_15__.ofType)(_core_ngrx_brokers__WEBPACK_IMPORTED_MODULE_2__.brokersActions.ReqDeleteRequest_SharedSuccess, _core_ngrx_brokers__WEBPACK_IMPORTED_MODULE_2__.brokersActions.ReqDeleteRequest_SharedFail), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.take)(1)).subscribe(action => {
      if (action.type === _core_ngrx_brokers__WEBPACK_IMPORTED_MODULE_2__.brokersActions.ReqDeleteRequest_SharedSuccess.type) {
        this.snackbar.open('Client request has been declined successfully.', 'CLOSE', _core_helpers_snackbar__WEBPACK_IMPORTED_MODULE_3__.successConfig);
      } else {
        this.snackbar.open('Something went wrong while trying to decline client request, Please try again.', 'CLOSE', _core_helpers_snackbar__WEBPACK_IMPORTED_MODULE_3__.errorConfig);
      }
    });
    this.store.dispatch(_core_ngrx_brokers__WEBPACK_IMPORTED_MODULE_2__.brokersActions.ReqDeleteRequest_Shared({
      brokerUid: this.broker.uid,
      clientUid
    }));
  }
  removeClient(clientUid) {
    this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_15__.ofType)(_core_ngrx_brokers__WEBPACK_IMPORTED_MODULE_2__.brokersActions.ReqDeleteRequest_SharedSuccess, _core_ngrx_brokers__WEBPACK_IMPORTED_MODULE_2__.brokersActions.ReqDeleteRequest_SharedFail), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.take)(1)).subscribe(action => {
      if (action.type === _core_ngrx_brokers__WEBPACK_IMPORTED_MODULE_2__.brokersActions.ReqDeleteRequest_SharedSuccess.type) {
        this.snackbar.open('Client has been removed successfully.', 'CLOSE', _core_helpers_snackbar__WEBPACK_IMPORTED_MODULE_3__.successConfig);
      } else {
        this.snackbar.open('Something went wrong while trying to remove the client , Please try again.', 'CLOSE', _core_helpers_snackbar__WEBPACK_IMPORTED_MODULE_3__.errorConfig);
      }
    });
    this.store.dispatch(_core_ngrx_brokers__WEBPACK_IMPORTED_MODULE_2__.brokersActions.ReqDeleteRequest_Shared({
      brokerUid: this.broker.uid,
      clientUid
    }));
  }
  handleClientSearch(searchPhrase) {
    searchPhrase = searchPhrase.toLowerCase();
    if (this.tabIndex === 0) {
      this.filteredActiveClients = this.filterClientsHelper(this.activeClients, searchPhrase);
    } else {
      this.filteredPendingClients = this.filterClientsHelper(this.pendingClients, searchPhrase);
    }
  }
  handleGetToggleOption(index) {
    this.tabIndex = index;
  }
  handleAddNewClient() {
    this.dialog.open(_components_add_new_client_modal_add_new_client_modal_component__WEBPACK_IMPORTED_MODULE_0__.AddNewClientModalComponent, {
      panelClass: 'g-modal-container'
    });
  }
  handleViewLots(clientUid) {
    const client = this.activeClients.filter(clientObj => clientObj.uid === clientUid).pop();
    this.store.dispatch(_core_ngrx_brokers__WEBPACK_IMPORTED_MODULE_2__.brokersActions.PopulateClientObject({
      client
    }));
    this.store.dispatch(_core_ngrx_brokers__WEBPACK_IMPORTED_MODULE_2__.brokersActions.ReqGetBrokerRequest({
      brokerUid: this.broker.uid,
      clientUid: clientUid
    }));
    this.router.navigate([_core_helpers_constants__WEBPACK_IMPORTED_MODULE_4__.LOTS_ROUTE]);
  }
  filterClientsHelper(clientsList, searchPhrase) {
    return clientsList.filter(({
      firstname,
      lastname,
      email
    }) => firstname.toLowerCase().includes(searchPhrase) || lastname.toLowerCase().includes(searchPhrase) || email.toLowerCase().includes(searchPhrase));
  }
  // #region Confirmation Modals/Dialogs
  handleViewRequest(client) {
    const dialogRef = this.dialog.open(_components_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_5__.ConfirmationModalComponent, {
      panelClass: 'g-modal-container',
      data: {
        header: 'Accept Request?',
        subHeader: 'The following user would like you to be their broker for their lots! ',
        clientData: client,
        confirmButton: 'Accept Request',
        declineButton: 'Decline Request'
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.acceptRequest(client.uid);
      } else if (result === false) {
        this.declineRequest(client.uid);
      }
    });
  }
  handleCancelRequest(client) {
    const dialogRef = this.dialog.open(_components_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_5__.ConfirmationModalComponent, {
      panelClass: 'g-modal-container',
      data: {
        header: 'Pending Request',
        subHeader: 'This request is awaiting acceptance from the MX User.' + ' You may cancel this request before they have accepted.',
        clientData: client,
        confirmButton: 'Keep Request',
        declineButton: 'Cancel Request'
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === false) {
        this.declineRequest(client.uid);
      }
    });
  }
  handleOpenDeleteClientConfirmation(client) {
    const dialogRef = this.dialog.open(_components_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_5__.ConfirmationModalComponent, {
      panelClass: 'g-modal-container',
      data: {
        header: 'Are You Sure?',
        subHeader: 'Are you sure you want to remove this client?' + ' The contractual agreement period is not concluded. This cannot be undone.',
        clientData: client,
        confirmButton: 'Keep Client',
        declineButton: 'Remove Client'
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === false) {
        this.removeClient(client.uid);
      }
    });
  }
  static #_ = this.ɵfac = function BrokerDashboardComponent_Factory(t) {
    return new (t || BrokerDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_17__.MatLegacyDialog), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_15__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_18__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_20__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
    type: BrokerDashboardComponent,
    selectors: [["app-broker-dashboard"]],
    decls: 6,
    vars: 3,
    consts: [[1, "d-flex", "flex-column", "g-app-dimensions"], [1, "l-header-container", "d-flex", "flex-column", "g-fade-in"], [3, "$handleNotificationNavigate"], [3, "tabIndex", "$searchInputEvent", "$changeToggleEvent", "$addNewClientEvent"], ["class", "l-list-container d-flex flex-column", 4, "ngIf"], [1, "l-list-container", "d-flex", "flex-column"], [4, "ngIf", "ngIfElse"], ["noActiveClients", ""], ["class", "l-card-container", 4, "ngFor", "ngForOf"], [1, "l-card-container"], [3, "data"], [1, "d-flex", "flex-column"], [1, "l-buttons", "d-flex", "flex-row"], ["mat-flat-button", "", 1, "g-secondary-button", "l-secondary-button", "mt-0", 3, "click"], ["class", "l-btn-red-dot", 4, "ngIf"], ["mat-flat-button", "", 1, "g-secondary-button", "mt-0", "w-auto", 3, "click"], ["src", "assets/icons/delete-icon-black.svg", "alt", "delete"], [1, "l-btn-red-dot"], [1, "d-flex", "flex-column", "g-text-h1-dark", "justify-content-center", "align-content-center", "h-50", "p-2"], ["noPendingClients", ""], ["mat-flat-button", "", "class", "g-primary-button mt-0", 3, "click", 4, "ngIf", "ngIfElse"], ["showOutGoingRequest", ""], ["mat-flat-button", "", 1, "g-primary-button", "mt-0", 3, "click"], ["mat-flat-button", "", 1, "g-secondary-button", "mt-0", 3, "click"]],
    template: function BrokerDashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "app-broker-main-nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("$handleNotificationNavigate", function BrokerDashboardComponent_Template_app_broker_main_nav__handleNotificationNavigate_2_listener($event) {
          return ctx.handleGetToggleOption($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "app-broker-toolbar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("$searchInputEvent", function BrokerDashboardComponent_Template_app_broker_toolbar__searchInputEvent_3_listener($event) {
          return ctx.handleClientSearch($event);
        })("$changeToggleEvent", function BrokerDashboardComponent_Template_app_broker_toolbar__changeToggleEvent_3_listener($event) {
          return ctx.handleGetToggleOption($event);
        })("$addNewClientEvent", function BrokerDashboardComponent_Template_app_broker_toolbar__addNewClientEvent_3_listener() {
          return ctx.handleAddNewClient();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](4, BrokerDashboardComponent_div_4_Template, 4, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](5, BrokerDashboardComponent_div_5_Template, 4, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("tabIndex", ctx.tabIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.tabIndex === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.tabIndex === 1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_22__.MatLegacyButton, _shared_components_broker_info_card_broker_info_card_component__WEBPACK_IMPORTED_MODULE_10__.BrokerInfoCardComponent, _components_broker_main_nav_broker_main_nav_component__WEBPACK_IMPORTED_MODULE_11__.BrokerMainNavComponent, _components_broker_toolbar_broker_toolbar_component__WEBPACK_IMPORTED_MODULE_12__.BrokerToolbarComponent],
    styles: [".l-header-container[_ngcontent-%COMP%] {\n  background: #f9f9fc;\n  height: -moz-fit-content;\n  height: fit-content;\n  z-index: 1;\n}\n\n.l-card-container[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  padding: 12px;\n  border-radius: 4px;\n  margin: 8px 16px;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\n.l-list-container[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  margin: 0 auto;\n  max-width: 576px;\n  overflow-y: scroll !important;\n  background: #f9f9fc;\n}\n\n.l-buttons[_ngcontent-%COMP%] {\n  gap: 10px;\n}\n\n.l-delete[_ngcontent-%COMP%] {\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.l-secondary-button[_ngcontent-%COMP%] {\n  padding: 0 !important;\n}\n\n.l-btn-red-dot[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 3px;\n  right: 3px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 20px;\n  height: 20px;\n  border: none;\n  border-radius: 50%;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 12px;\n  font-weight: 700;\n  letter-spacing: normal;\n  color: #e5e5e5;\n  background-color: #d3455b;\n  outline: none !important;\n  transition: ease-in-out 0.3s;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvYnJva2VyLWRhc2hib2FyZC9icm9rZXItZGFzaGJvYXJkLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxtQkNNYTtFRExiLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxVQUFBO0FBREY7O0FBSUE7RUFDRSx5QkM0QmlCO0VEM0JqQixhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQUEsbUJBQUE7QUFERjs7QUFJQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkNiYTtBRFlmOztBQUlBO0VBQ0UsU0FBQTtBQURGOztBQUlBO0VBQ0UsdUJBQUE7RUFBQSxrQkFBQTtBQURGOztBQUlBO0VBQ0UscUJBQUE7QUFERjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0MzQjhCO0VENEI5Qix5QkMzQnNCO0VENEJ0Qix3QkFBQTtFQUNBLDRCQUFBO0FBREYiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzcmMvdmFyaWFibGVzLnNjc3MnO1xyXG5cclxuLmwtaGVhZGVyLWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZDogJGFwcC1iZy1jb2xvcjtcclxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5sLWNhcmQtY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcclxuICBwYWRkaW5nOiAxMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBtYXJnaW46IDhweCAxNnB4O1xyXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbn1cclxuXHJcbi5sLWxpc3QtY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWF4LXdpZHRoOiA1NzZweDtcclxuICBvdmVyZmxvdy15OiBzY3JvbGwgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiAkYXBwLWJnLWNvbG9yO1xyXG59XHJcblxyXG4ubC1idXR0b25zIHtcclxuICBnYXA6IDEwcHg7XHJcbn1cclxuXHJcbi5sLWRlbGV0ZSB7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG59XHJcblxyXG4ubC1zZWNvbmRhcnktYnV0dG9uIHtcclxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sLWJ0bi1yZWQtZG90IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAzcHg7XHJcbiAgcmlnaHQ6IDNweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICBjb2xvcjogJGFwcC1zZWNvbmRhcnktYnV0dG9uLWJnLWNvbG9yO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcHAtZGVsZXRlLWJ1dHRvbi1yZWQ7XHJcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IDAuM3M7XHJcbn1cclxuXHJcblxyXG4iLCIvLyBUZXh0XHJcbiRhcHAtZm9udDogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4kYXBwLWlucHV0LWZvbnQ6ICdNdWxpc2gnLCBzYW5zLXNlcmlmO1xyXG4kYXBwLWZvbnQtYmxhY2s6ICMzNDM0MzQ7XHJcbiRhcHAtdGV4dC1ncmV5OiAjNzA3MDcwO1xyXG4kYXBwLWZvbnQtaW5wdXQtcGxhY2Vob2xkZXI6IHJnYmEoMzAsIDQ4LCAzNywgMC41Nik7XHJcbiRhcHAtZm9ybS1pbmZvLWNvbG9yOiAjYWZhZmFmO1xyXG5cclxuLy8gQ29sb3JzXHJcbiRhcHAtYmctY29sb3I6ICNmOWY5ZmM7XHJcbiRhcHAtYnV5aW5nLXJlZDogI2U3NmY1MTtcclxuJGFwcC1zZWxsaW5nLWdyZWVuOiAjN2ZhOTk1O1xyXG4kYXBwLWlucHV0LWJnLWNvbG9yOiAjZTZlNmU2O1xyXG4kYXBwLWJvdHRvbS1uYXYtaXRlbS1iZzogI2U1ZWZlOTtcclxuJGFwcC10YWJzLW1hcmtldHBsYWNlLWdyZWVuOiAjMjg1ZDYwO1xyXG4kYXBwLXRhYnMtbmVnb3RpYXRpb25zLWJsdWU6ICM0ZjllYmQ7XHJcbiRhcHAtbm90aWZpY2F0aW9uLXJlZDogI2E1M2E0YTtcclxuXHJcbi8vIEdyYWRpZW50c1xyXG4kYXBwLXNlbGxpbmctZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICM5OGI0YTcsICM0YTZlNWUpO1xyXG4kYXBwLWJ1eWluZy1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgI2RmOGE3NSwgI2EyNTMzZik7XHJcbiRhcHAtc2VsbGluZy1jYXJkLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjODVhZTliLCAjNzM5ZThhKTtcclxuJGFwcC1idXlpbmctY2FyZC1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgJGFwcC1idXlpbmctcmVkLCAjYzc1ZDQzKTtcclxuXHJcbi8vIEJ1dHRvbnNcclxuJGFwcC1wcmltYXJ5LWJ1dHRvbi1iZy1jb2xvcjogIzMxYTA1ZjtcclxuJGFwcC1zZWNvbmRhcnktYnV0dG9uLWJnLWNvbG9yOiAjZTVlNWU1O1xyXG4kYXBwLWRlbGV0ZS1idXR0b24tcmVkOiAjZDM0NTViO1xyXG5cclxuLy8gT3RoZXJcclxuJGFwcC1ib3JkZXItcmFkaXVzOiA4cHg7XHJcbiRhcHAtYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wOCkgIWltcG9ydGFudDtcclxuXHJcbi8vICNyZWdpb24gTWF0Y2ggRXhjaGFuZ2VcclxuXHJcbi8vICNyZWdpb24gQ29sb3JzXHJcblxyXG4kYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuJGJhY2tncm91bmQtY29sb3ItZ3JleTogI2Y1ZjVmNTtcclxuJHRleHQtZGFyazogIzQwNDA0MDtcclxuJHRleHQtcGxhY2Vob2xkZXI6ICM4YzhjOGM7XHJcbiRwcmltYXJ5LWNvbG9yOiAjNDA3ZWY4O1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjZTVlZGZkO1xyXG4kbWVkaXVtLWJsdWU6ICM4ZDllYzU7XHJcbiRwcmltYXJ5LWdyZWVuOiAjMWNhZjdlO1xyXG4kc2Vjb25kYXJ5LWdyZWVuOiAjZTdmN2YwO1xyXG4kcHJpbWFyeS1yZWQ6ICNkMjMwM2Q7XHJcbiRzZWNvbmRhcnktcmVkOiAjZjdlOGU3O1xyXG4kaW5wdXQtYm9yZGVyOiAjZTJlOGYwO1xyXG4kZXJyb3ItbWVzc2FnZTogI2IxMTUwYTtcclxuJGRpc2FibGVkLWNvbG9yOiAjY2JjYmNiO1xyXG5cclxuLy8gI2VuZHJlZ2lvblxyXG5cclxuLy8gI3JlZ2lvbiBUZXh0XHJcblxyXG4kdGV4dC1mb250OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiRmb250LXdlaWdodC1ib2xkOiA3MDA7XHJcbiRmb250LXdlaWdodC1zZW1pLWJvbGQ6IDYwMDtcclxuJGZvbnQtd2VpZ2h0LXJlZ3VsYXI6IDUwMDtcclxuJGZvbnQtd2VpZ2h0LWxpZ2h0OiA0MDA7XHJcblxyXG4vLyAjZW5kcmVnaW9uXHJcblxyXG4vLyAjcmVnaW9uIEJ1dHRvbnNcclxuXHJcbiRidXR0b24tZm9udC13ZWlnaHQ6IDYwMDtcclxuXHJcbi8vICNlbmRyZWdpb25cclxuXHJcbi8vICNyZWdpb24gT3RoZXJcclxuXHJcbiRib3JkZXItcmFkaXVzOiA0cHg7XHJcblxyXG4vLyAjZW5kcmVnaW9uXHJcblxyXG4vLyAjZW5kcmVnaW9uXHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 6602:
/*!**********************************************************************!*\
  !*** ./src/app/features/broker-dashboard/broker-dashboard.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrokerDashboardModule: () => (/* binding */ BrokerDashboardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _broker_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./broker-dashboard.component */ 1434);
/* harmony import */ var _broker_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./broker-dashboard-routing.module */ 9817);
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../home/home.module */ 425);
/* harmony import */ var _components_broker_main_nav_broker_main_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/broker-main-nav/broker-main-nav.component */ 6176);
/* harmony import */ var _components_broker_toolbar_broker_toolbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/broker-toolbar/broker-toolbar.component */ 2701);
/* harmony import */ var _shared_angular_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/angular-material.module */ 9702);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _components_add_new_client_modal_add_new_client_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/add-new-client-modal/add-new-client-modal.component */ 7279);
/* harmony import */ var _components_request_sent_modal_request_sent_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/request-sent-modal/request-sent-modal.component */ 2192);
/* harmony import */ var _shared_components_broker_info_card_broker_info_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/components/broker-info-card/broker-info-card.component */ 8000);
/* harmony import */ var _components_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/confirmation-modal/confirmation-modal.component */ 7625);
/* harmony import */ var _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/legacy-dialog */ 1035);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 1699);














class BrokerDashboardModule {
  static #_ = this.ɵfac = function BrokerDashboardModule_Factory(t) {
    return new (t || BrokerDashboardModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
    type: BrokerDashboardModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _shared_angular_material_module__WEBPACK_IMPORTED_MODULE_5__.AngularMaterialModule, _broker_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_1__.BrokerDashboardRoutingModule, _home_home_module__WEBPACK_IMPORTED_MODULE_2__.HomeModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _shared_components_broker_info_card_broker_info_card_component__WEBPACK_IMPORTED_MODULE_8__.BrokerInfoCardModule, _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_13__.MatLegacyDialogModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](BrokerDashboardModule, {
    declarations: [_broker_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.BrokerDashboardComponent, _components_broker_main_nav_broker_main_nav_component__WEBPACK_IMPORTED_MODULE_3__.BrokerMainNavComponent, _components_broker_toolbar_broker_toolbar_component__WEBPACK_IMPORTED_MODULE_4__.BrokerToolbarComponent, _components_add_new_client_modal_add_new_client_modal_component__WEBPACK_IMPORTED_MODULE_6__.AddNewClientModalComponent, _components_request_sent_modal_request_sent_modal_component__WEBPACK_IMPORTED_MODULE_7__.RequestSentModalComponent, _components_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_9__.ConfirmationModalComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _shared_angular_material_module__WEBPACK_IMPORTED_MODULE_5__.AngularMaterialModule, _broker_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_1__.BrokerDashboardRoutingModule, _home_home_module__WEBPACK_IMPORTED_MODULE_2__.HomeModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _shared_components_broker_info_card_broker_info_card_component__WEBPACK_IMPORTED_MODULE_8__.BrokerInfoCardModule, _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_13__.MatLegacyDialogModule]
  });
})();

/***/ }),

/***/ 7279:
/*!*************************************************************************************************************!*\
  !*** ./src/app/features/broker-dashboard/components/add-new-client-modal/add-new-client-modal.component.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddNewClientModalComponent: () => (/* binding */ AddNewClientModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _core_helpers_snackbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/helpers/snackbar */ 2179);
/* harmony import */ var _request_sent_modal_request_sent_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../request-sent-modal/request-sent-modal.component */ 2192);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/effects */ 1575);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 274);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 1527);
/* harmony import */ var _core_ngrx_brokers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/ngrx/brokers */ 1199);
/* harmony import */ var _core_ngrx_reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/ngrx/reducers */ 7032);
/* harmony import */ var _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/legacy-dialog */ 1035);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ 9409);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_legacy_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/legacy-progress-spinner */ 3401);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 8849);


















function AddNewClientModalComponent_mat_progress_spinner_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "mat-progress-spinner", 11);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("diameter", 30);
  }
}
function AddNewClientModalComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0, "Send Request");
  }
}
class AddNewClientModalComponent {
  constructor(dialogRef, snackbar, dialog, actions$, store) {
    this.dialogRef = dialogRef;
    this.snackbar = snackbar;
    this.dialog = dialog;
    this.actions$ = actions$;
    this.store = store;
    this.destroyed$ = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
  }
  // #region Life Cycle Hooks
  ngOnInit() {
    this.selectClient();
    this.selectBroker();
    this.selectActiveClientsList();
    this.selectPendingRequests();
  }
  ngOnDestroy() {
    this.destroyed$.emit(true);
  }
  // #endregion
  selectClient() {
    this.store.select(_core_ngrx_brokers__WEBPACK_IMPORTED_MODULE_2__.brokersSelectors.getCurrentClient).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroyed$)).subscribe(client => {
      this.client = client;
    });
  }
  selectBroker() {
    this.store.select(_core_ngrx_reducers__WEBPACK_IMPORTED_MODULE_3__.authSelectors.getUser).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroyed$)).subscribe(broker => {
      this.broker = broker;
    });
  }
  selectActiveClientsList() {
    this.store.select(_core_ngrx_brokers__WEBPACK_IMPORTED_MODULE_2__.brokersSelectors.getActiveClients).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroyed$)).subscribe(activeClients => {
      this.activeClients = activeClients.map(client => client.uid);
    });
  }
  selectPendingRequests() {
    this.store.select(_core_ngrx_brokers__WEBPACK_IMPORTED_MODULE_2__.brokersSelectors.getPendingRequests).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroyed$)).subscribe(pendingRequests => {
      this.pendingRequestsByBroker = pendingRequests.map(request => request.sentByBroker ? request.clientUid : null);
      this.pendingRequestsByClient = pendingRequests.map(request => !request.sentByBroker ? request.clientUid : null);
    });
  }
  handleCloseModal() {
    this.dialogRef.close();
  }
  handleValidateClientEmail() {
    this.emailValidationLoading = true;
    this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.ofType)(_core_ngrx_brokers__WEBPACK_IMPORTED_MODULE_2__.brokersActions.ReqCheckIfClientExists_BrokerSuccess, _core_ngrx_brokers__WEBPACK_IMPORTED_MODULE_2__.brokersActions.ReqCheckIfClientExists_BrokerFail), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.take)(1)).subscribe(action => {
      if (action.type === _core_ngrx_brokers__WEBPACK_IMPORTED_MODULE_2__.brokersActions.ReqCheckIfClientExists_BrokerSuccess.type) {
        this.dialogRef.close(this.clientEmail);
        this.checkIfClientHasBroker();
      } else {
        this.emailValidationLoading = false;
        this.snackbar.open('The client email provided does not exist on our system, please enter a valid client email', 'CLOSE', _core_helpers_snackbar__WEBPACK_IMPORTED_MODULE_0__.errorConfig);
      }
    });
    this.store.dispatch(_core_ngrx_brokers__WEBPACK_IMPORTED_MODULE_2__.brokersActions.ReqCheckIfClientExists_Broker({
      email: this.clientEmail
    }));
  }
  checkIfClientHasBroker() {
    this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.ofType)(_core_ngrx_brokers__WEBPACK_IMPORTED_MODULE_2__.brokersActions.ReqCheckIfClientHasBrokerSuccess, _core_ngrx_brokers__WEBPACK_IMPORTED_MODULE_2__.brokersActions.ReqCheckIfClientHasBrokerFail), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.take)(1)).subscribe(action => {
      if (action.type === _core_ngrx_brokers__WEBPACK_IMPORTED_MODULE_2__.brokersActions.ReqCheckIfClientHasBrokerSuccess.type) {
        if (action.result) {
          this.activeClients.includes(this.client.uid) ? this.snackbar.open('You have already been paired with the client, please try another client', 'CLOSE', _core_helpers_snackbar__WEBPACK_IMPORTED_MODULE_0__.errorConfig) : this.snackbar.open('The client already has a Broker, please try another client or contact support if you think this is a mistake', 'CLOSE', _core_helpers_snackbar__WEBPACK_IMPORTED_MODULE_0__.errorConfig);
          this.store.dispatch(_core_ngrx_brokers__WEBPACK_IMPORTED_MODULE_2__.brokersActions.ClearClientObject_Broker());
        } else {
          this.checkPendingRequest();
        }
      }
    });
    this.store.dispatch(_core_ngrx_brokers__WEBPACK_IMPORTED_MODULE_2__.brokersActions.ReqCheckIfClientHasBroker({
      clientId: this.client.uid
    }));
  }
  checkPendingRequest() {
    if (this.pendingRequestsByClient.includes(this.client.uid)) {
      this.snackbar.open('The client has already sent you a request', 'CLOSE', _core_helpers_snackbar__WEBPACK_IMPORTED_MODULE_0__.errorConfig);
    } else if (this.pendingRequestsByBroker.includes(this.client.uid)) {
      this.snackbar.open('You have already sent the client a request', 'CLOSE', _core_helpers_snackbar__WEBPACK_IMPORTED_MODULE_0__.errorConfig);
    } else {
      this.sendClientRequest();
    }
  }
  sendClientRequest() {
    this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.ofType)(_core_ngrx_brokers__WEBPACK_IMPORTED_MODULE_2__.brokersActions.ReqCreateRequest_SharedSuccess, _core_ngrx_brokers__WEBPACK_IMPORTED_MODULE_2__.brokersActions.ReqCreateRequest_SharedFail), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.take)(1)).subscribe(action => {
      if (action.type === _core_ngrx_brokers__WEBPACK_IMPORTED_MODULE_2__.brokersActions.ReqCreateRequest_SharedSuccess.type) {
        this.store.dispatch(_core_ngrx_brokers__WEBPACK_IMPORTED_MODULE_2__.brokersActions.ReqSendPairingNotification_Shared({
          fromBroker: true,
          newRequest: true,
          brokerUid: action.brokerUid,
          clientUid: action.clientUid
        }));
        this.dialog.open(_request_sent_modal_request_sent_modal_component__WEBPACK_IMPORTED_MODULE_1__.RequestSentModalComponent, {
          panelClass: 'g-modal-container'
        });
      } else {
        this.emailValidationLoading = false;
        this.snackbar.open('Something went wrong while trying to send the request, please try again', 'CLOSE', _core_helpers_snackbar__WEBPACK_IMPORTED_MODULE_0__.errorConfig);
      }
    });
    this.store.dispatch(_core_ngrx_brokers__WEBPACK_IMPORTED_MODULE_2__.brokersActions.ReqCreateRequest_Shared({
      brokerUid: this.broker.uid,
      clientUid: this.client.uid,
      sentByBroker: true
    }));
    this.store.dispatch(_core_ngrx_brokers__WEBPACK_IMPORTED_MODULE_2__.brokersActions.ClearClientObject_Broker());
  }
  static #_ = this.ɵfac = function AddNewClientModalComponent_Factory(t) {
    return new (t || AddNewClientModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_8__.MatLegacyDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_8__.MatLegacyDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_10__.Store));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: AddNewClientModalComponent,
    selectors: [["app-add-new-client-modal"]],
    decls: 17,
    vars: 7,
    consts: [[1, "d-flex", "flex-column"], [1, "d-flex", "flex-row", "justify-content-end", "w-100"], ["src", "./assets/icons/close-icon-dark.svg", "alt", "close", 1, "g-modal-close-icon", 3, "click"], [1, "g-text-h1-dark", "mb-3", "w-100"], [1, "g-text-p-dark"], [1, "g-text-input-container"], ["pattern", "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$", "type", "text", "name", "email", "placeholder", "Client Email", "required", "", 1, "g-input-text-no-icon", 3, "ngModel", "disabled", "ngModelChange"], ["email", "ngModel"], [1, "g-primary-button", "my-2", 3, "disabled", "click"], ["class", "g-mat-progress-spinner-white mx-auto", "mode", "indeterminate", 3, "diameter", 4, "ngIf", "ngIfElse"], ["showButtonText", ""], ["mode", "indeterminate", 1, "g-mat-progress-spinner-white", "mx-auto", 3, "diameter"]],
    template: function AddNewClientModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 0)(2, "div", 1)(3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddNewClientModalComponent_Template_img_click_3_listener() {
          return ctx.handleCloseModal();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h1", 3)(5, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Client Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 4)(8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " Please enter the client's email to send them a pairing request. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 5)(11, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AddNewClientModalComponent_Template_input_ngModelChange_11_listener($event) {
          return ctx.clientEmail = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddNewClientModalComponent_Template_button_click_13_listener() {
          return ctx.handleValidateClientEmail();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, AddNewClientModalComponent_mat_progress_spinner_14_Template, 1, 1, "mat-progress-spinner", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, AddNewClientModalComponent_ng_template_15_Template, 1, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](12);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.clientEmail)("disabled", ctx.emailValidationLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("g-disabled-button", (_r0.errors == null ? null : _r0.errors.pattern) || _r0.pristine);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", (_r0.errors == null ? null : _r0.errors.pattern) || _r0.pristine || ctx.emailValidationLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.emailValidationLoading)("ngIfElse", _r2);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_material_legacy_progress_spinner__WEBPACK_IMPORTED_MODULE_12__.MatLegacyProgressSpinner, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6176:
/*!***************************************************************************************************!*\
  !*** ./src/app/features/broker-dashboard/components/broker-main-nav/broker-main-nav.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrokerMainNavComponent: () => (/* binding */ BrokerMainNavComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 274);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 1527);
/* harmony import */ var _core_helpers_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/helpers/constants */ 9487);
/* harmony import */ var src_app_core_ngrx_entities_notifications_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/ngrx/entities/notifications/index */ 4624);
/* harmony import */ var _core_ngrx_authState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/ngrx/authState */ 395);
/* harmony import */ var _core_models_queryModels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/models/queryModels */ 1417);
/* harmony import */ var _core_ngrx_reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/ngrx/reducers */ 7032);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/effects */ 1575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _home_components_notification_dropdown_notification_dropdown_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../home/components/notification-dropdown/notification-dropdown.component */ 1962);
















function BrokerMainNavComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BrokerMainNavComponent_div_0_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.handleRemoveNotificationDropDown());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 9)(2, "app-notification-dropdown", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("$handleNotificationNavigate", function BrokerMainNavComponent_div_0_Template_app_notification_dropdown__handleNotificationNavigate_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r4.handleNotificationNavigate($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("l-hide-notification-dropdown-container", ctx_r0.animateNotificationDropDownOut);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("notifications", ctx_r0.notifications)("isAgent", true);
  }
}
function BrokerMainNavComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.notificationCounts.total);
  }
}
class BrokerMainNavComponent {
  constructor(router, store, actions$) {
    this.router = router;
    this.store = store;
    this.actions$ = actions$;
    this.notificationCounts = {
      total: null,
      profile: null,
      negotiations: null,
      completedNegotiations: null,
      brokerRequest: null
    };
    this.notifications = {};
    this.showNotificationDropDown = false;
    this.animateNotificationDropDownOut = false;
    this.$handleNotificationNavigate = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.destroyed$ = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
  }
  ngOnInit() {
    this.getUserHelper();
    this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.select)(src_app_core_ngrx_entities_notifications_index__WEBPACK_IMPORTED_MODULE_1__.notificationSelectors.getNotificationCounts), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroyed$)).subscribe(notificationCounts => {
      this.notificationCounts = notificationCounts;
    });
    this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.select)(src_app_core_ngrx_entities_notifications_index__WEBPACK_IMPORTED_MODULE_1__.notificationSelectors.getNotificationsForDropDown), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroyed$)).subscribe(notifications => {
      this.notifications = notifications;
    });
    this.store.dispatch(src_app_core_ngrx_entities_notifications_index__WEBPACK_IMPORTED_MODULE_1__.notificationActions.ReqUserNotifications());
  }
  handleRouteToProfile() {
    this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_9__.ofType)(_core_ngrx_authState__WEBPACK_IMPORTED_MODULE_2__.authActions.GetUserFromAuthorizationSuccess, _core_ngrx_authState__WEBPACK_IMPORTED_MODULE_2__.authActions.GetUserFromAuthorizationFail), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.take)(1)).subscribe(action => {
      if (action.type === _core_ngrx_authState__WEBPACK_IMPORTED_MODULE_2__.authActions.GetUserFromAuthorizationSuccess.type) {
        this.router.navigate([_core_helpers_constants__WEBPACK_IMPORTED_MODULE_0__.PROFILE_ROUTE], {
          queryParams: {
            tabIndex: 2
          }
        });
      }
    });
    this.store.dispatch(_core_ngrx_authState__WEBPACK_IMPORTED_MODULE_2__.authActions.ReqGetUserFromAuthorization({
      uid: this.user.uid
    }));
  }
  handleShowNotificationDropDown() {
    this.showNotificationDropDown = true;
  }
  handleRemoveNotificationDropDown() {
    this.animateNotificationDropDownOut = true;
    setTimeout(() => {
      this.showNotificationDropDown = false;
      this.animateNotificationDropDownOut = false;
    }, 300);
  }
  handleNotificationNavigate(tabIndex) {
    this.handleRemoveNotificationDropDown();
    this.$handleNotificationNavigate.emit(tabIndex);
  }
  getUserHelper() {
    this.store.select(_core_ngrx_reducers__WEBPACK_IMPORTED_MODULE_4__.authSelectors.getUser).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroyed$)).subscribe(user => {
      this.user = user;
    });
  }
  static #_ = this.ɵfac = function BrokerMainNavComponent_Factory(t) {
    return new (t || BrokerMainNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_9__.Actions));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: BrokerMainNavComponent,
    selectors: [["app-broker-main-nav"]],
    outputs: {
      $handleNotificationNavigate: "$handleNotificationNavigate"
    },
    decls: 8,
    vars: 2,
    consts: [["class", "l-notification-dropdown-container", 3, "l-hide-notification-dropdown-container", "click", 4, "ngIf"], [1, "l-header"], ["role", "button", 1, "l-notification-container", 3, "click"], ["src", "./assets/icons/bell-blue-icon.svg", "alt", "Blue bell"], ["class", "g-notification-dot-protrude", 4, "ngIf"], ["role", "button", 1, "l-header-img-container"], ["src", "./assets/images/MX-logo-full.svg", "alt", "MX Match Logo", 1, "l-header-img"], ["src", "./assets/icons/user-blue-icon.svg", "alt", "User Icon", "role", "button", 1, "l-profile-img", 3, "click"], [1, "l-notification-dropdown-container", 3, "click"], [1, "g-fade-in-top"], [3, "notifications", "isAgent", "$handleNotificationNavigate"], [1, "g-notification-dot-protrude"]],
    template: function BrokerMainNavComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, BrokerMainNavComponent_div_0_Template, 3, 4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BrokerMainNavComponent_Template_div_click_2_listener() {
          return ctx.handleShowNotificationDropDown();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, BrokerMainNavComponent_div_4_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BrokerMainNavComponent_Template_img_click_7_listener() {
          return ctx.handleRouteToProfile();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showNotificationDropDown);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.notificationCounts.total);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _home_components_notification_dropdown_notification_dropdown_component__WEBPACK_IMPORTED_MODULE_5__.NotificationDropdownComponent],
    styles: [".l-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background-color: #f9f9fc;\n  overflow: auto;\n}\n\n.l-notification-dropdown-container[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  padding: 62px 16px 0 16px;\n  background-color: rgba(0, 0, 0, 0.2);\n  z-index: 3;\n  opacity: 1;\n  transition: 0.3s ease-in-out;\n}\n\n.l-hide-notification-dropdown-container[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.l-header[_ngcontent-%COMP%] {\n  width: 100%;\n  height: -moz-fit-content;\n  height: fit-content;\n  padding: 16px;\n  background-color: #ffffff;\n  display: flex;\n  align-items: center;\n}\n\n.l-header-img-container[_ngcontent-%COMP%] {\n  width: 120px;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin: 0 auto;\n}\n\n.l-header-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n}\n\n.l-notification-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.l-profile-img[_ngcontent-%COMP%] {\n  width: 24px;\n  height: auto;\n}\n\n.l-cards-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: -moz-fit-content;\n  height: fit-content;\n  padding: 16px;\n}\n\n.l-card[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 96px;\n  display: flex;\n  background-color: #ffffff;\n  margin-top: 16px;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n.l-card[_ngcontent-%COMP%]:first-child {\n  margin: 0;\n}\n\n.l-card-img-container[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 25px;\n  margin-left: 34px;\n}\n\n.l-card-img[_ngcontent-%COMP%] {\n  height: 24px;\n  width: 24px;\n}\n\n.l-card-title-container[_ngcontent-%COMP%] {\n  width: calc(100% - 140px);\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n}\n\n.l-info-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 4px;\n  right: 4px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL3ZhcmlhYmxlcy5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9mZWF0dXJlcy9icm9rZXItZGFzaGJvYXJkL2NvbXBvbmVudHMvYnJva2VyLW1haW4tbmF2L2Jyb2tlci1tYWluLW5hdi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQ0dXO0VERlgsY0FBQTtBRURKOztBRklBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EseUJBQUE7RUFDQSxvQ0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsNEJBQUE7QUVESjs7QUZHQTtFQUNJLFVBQUE7QUVBSjs7QUZHQTtFQUNJLFdBQUE7RUFDQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQ09lO0VETmYsYUFBQTtFQUNBLG1CQUFBO0FFQUo7O0FGR0E7RUFDSSxZQUFBO0VBQ0Esd0JBQUE7RUFBQSxtQkFBQTtFQUNBLGNBQUE7QUVBSjs7QUZHQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FFQUo7O0FGR0E7RUFDSSxrQkFBQTtBRUFKOztBRkdBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUVBSjs7QUZHQTtFQUNJLFdBQUE7RUFDQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsYUFBQTtBRUFKOztBRkdBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkM3QmU7RUQ4QmYsZ0JBQUE7RUFDQSxrQkNJWTtFREhaLGVBQUE7QUVBSjs7QUZFQTtFQUNJLFNBQUE7QUVDSjs7QUZFQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUVDSjs7QUZFQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FFQ0o7O0FGRUE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0FFQ0o7O0FGRUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FFQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzcmMvdmFyaWFibGVzLnNjc3MnO1xyXG5cclxuLmwtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGFwcC1iZy1jb2xvcjtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4ubC1ub3RpZmljYXRpb24tZHJvcGRvd24tY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHBhZGRpbmc6IDYycHggMTZweCAwIDE2cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICB6LWluZGV4OiAzO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XHJcbn1cclxuLmwtaGlkZS1ub3RpZmljYXRpb24tZHJvcGRvd24tY29udGFpbmVyIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5sLWhlYWRlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3I7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmwtaGVhZGVyLWltZy1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4ubC1oZWFkZXItaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4ubC1ub3RpZmljYXRpb24tY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmwtcHJvZmlsZS1pbWcge1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5sLWNhcmRzLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG59XHJcblxyXG4ubC1jYXJkIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA5NnB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5sLWNhcmQ6Zmlyc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4ubC1jYXJkLWltZy1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1yaWdodDogMjVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzNHB4O1xyXG59XHJcblxyXG4ubC1jYXJkLWltZyB7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICB3aWR0aDogMjRweDtcclxufVxyXG5cclxuLmwtY2FyZC10aXRsZS1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDE0MHB4KTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmwtaW5mby1pY29uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNHB4O1xyXG4gICAgcmlnaHQ6IDRweDtcclxufVxyXG4iLCIvLyBUZXh0XHJcbiRhcHAtZm9udDogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4kYXBwLWlucHV0LWZvbnQ6ICdNdWxpc2gnLCBzYW5zLXNlcmlmO1xyXG4kYXBwLWZvbnQtYmxhY2s6ICMzNDM0MzQ7XHJcbiRhcHAtdGV4dC1ncmV5OiAjNzA3MDcwO1xyXG4kYXBwLWZvbnQtaW5wdXQtcGxhY2Vob2xkZXI6IHJnYmEoMzAsIDQ4LCAzNywgMC41Nik7XHJcbiRhcHAtZm9ybS1pbmZvLWNvbG9yOiAjYWZhZmFmO1xyXG5cclxuLy8gQ29sb3JzXHJcbiRhcHAtYmctY29sb3I6ICNmOWY5ZmM7XHJcbiRhcHAtYnV5aW5nLXJlZDogI2U3NmY1MTtcclxuJGFwcC1zZWxsaW5nLWdyZWVuOiAjN2ZhOTk1O1xyXG4kYXBwLWlucHV0LWJnLWNvbG9yOiAjZTZlNmU2O1xyXG4kYXBwLWJvdHRvbS1uYXYtaXRlbS1iZzogI2U1ZWZlOTtcclxuJGFwcC10YWJzLW1hcmtldHBsYWNlLWdyZWVuOiAjMjg1ZDYwO1xyXG4kYXBwLXRhYnMtbmVnb3RpYXRpb25zLWJsdWU6ICM0ZjllYmQ7XHJcbiRhcHAtbm90aWZpY2F0aW9uLXJlZDogI2E1M2E0YTtcclxuXHJcbi8vIEdyYWRpZW50c1xyXG4kYXBwLXNlbGxpbmctZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICM5OGI0YTcsICM0YTZlNWUpO1xyXG4kYXBwLWJ1eWluZy1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgI2RmOGE3NSwgI2EyNTMzZik7XHJcbiRhcHAtc2VsbGluZy1jYXJkLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjODVhZTliLCAjNzM5ZThhKTtcclxuJGFwcC1idXlpbmctY2FyZC1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgJGFwcC1idXlpbmctcmVkLCAjYzc1ZDQzKTtcclxuXHJcbi8vIEJ1dHRvbnNcclxuJGFwcC1wcmltYXJ5LWJ1dHRvbi1iZy1jb2xvcjogIzMxYTA1ZjtcclxuJGFwcC1zZWNvbmRhcnktYnV0dG9uLWJnLWNvbG9yOiAjZTVlNWU1O1xyXG4kYXBwLWRlbGV0ZS1idXR0b24tcmVkOiAjZDM0NTViO1xyXG5cclxuLy8gT3RoZXJcclxuJGFwcC1ib3JkZXItcmFkaXVzOiA4cHg7XHJcbiRhcHAtYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wOCkgIWltcG9ydGFudDtcclxuXHJcbi8vICNyZWdpb24gTWF0Y2ggRXhjaGFuZ2VcclxuXHJcbi8vICNyZWdpb24gQ29sb3JzXHJcblxyXG4kYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuJGJhY2tncm91bmQtY29sb3ItZ3JleTogI2Y1ZjVmNTtcclxuJHRleHQtZGFyazogIzQwNDA0MDtcclxuJHRleHQtcGxhY2Vob2xkZXI6ICM4YzhjOGM7XHJcbiRwcmltYXJ5LWNvbG9yOiAjNDA3ZWY4O1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjZTVlZGZkO1xyXG4kbWVkaXVtLWJsdWU6ICM4ZDllYzU7XHJcbiRwcmltYXJ5LWdyZWVuOiAjMWNhZjdlO1xyXG4kc2Vjb25kYXJ5LWdyZWVuOiAjZTdmN2YwO1xyXG4kcHJpbWFyeS1yZWQ6ICNkMjMwM2Q7XHJcbiRzZWNvbmRhcnktcmVkOiAjZjdlOGU3O1xyXG4kaW5wdXQtYm9yZGVyOiAjZTJlOGYwO1xyXG4kZXJyb3ItbWVzc2FnZTogI2IxMTUwYTtcclxuJGRpc2FibGVkLWNvbG9yOiAjY2JjYmNiO1xyXG5cclxuLy8gI2VuZHJlZ2lvblxyXG5cclxuLy8gI3JlZ2lvbiBUZXh0XHJcblxyXG4kdGV4dC1mb250OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiRmb250LXdlaWdodC1ib2xkOiA3MDA7XHJcbiRmb250LXdlaWdodC1zZW1pLWJvbGQ6IDYwMDtcclxuJGZvbnQtd2VpZ2h0LXJlZ3VsYXI6IDUwMDtcclxuJGZvbnQtd2VpZ2h0LWxpZ2h0OiA0MDA7XHJcblxyXG4vLyAjZW5kcmVnaW9uXHJcblxyXG4vLyAjcmVnaW9uIEJ1dHRvbnNcclxuXHJcbiRidXR0b24tZm9udC13ZWlnaHQ6IDYwMDtcclxuXHJcbi8vICNlbmRyZWdpb25cclxuXHJcbi8vICNyZWdpb24gT3RoZXJcclxuXHJcbiRib3JkZXItcmFkaXVzOiA0cHg7XHJcblxyXG4vLyAjZW5kcmVnaW9uXHJcblxyXG4vLyAjZW5kcmVnaW9uXHJcbiIsIi5sLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmYztcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5sLW5vdGlmaWNhdGlvbi1kcm9wZG93bi1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcGFkZGluZzogNjJweCAxNnB4IDAgMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB6LWluZGV4OiAzO1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xufVxuXG4ubC1oaWRlLW5vdGlmaWNhdGlvbi1kcm9wZG93bi1jb250YWluZXIge1xuICBvcGFjaXR5OiAwO1xufVxuXG4ubC1oZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgcGFkZGluZzogMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmwtaGVhZGVyLWltZy1jb250YWluZXIge1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4ubC1oZWFkZXItaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLmwtbm90aWZpY2F0aW9uLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmwtcHJvZmlsZS1pbWcge1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4ubC1jYXJkcy1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgcGFkZGluZzogMTZweDtcbn1cblxuLmwtY2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5sLWNhcmQ6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW46IDA7XG59XG5cbi5sLWNhcmQtaW1nLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogMjVweDtcbiAgbWFyZ2luLWxlZnQ6IDM0cHg7XG59XG5cbi5sLWNhcmQtaW1nIHtcbiAgaGVpZ2h0OiAyNHB4O1xuICB3aWR0aDogMjRweDtcbn1cblxuLmwtY2FyZC10aXRsZS1jb250YWluZXIge1xuICB3aWR0aDogY2FsYygxMDAlIC0gMTQwcHgpO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmwtaW5mby1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDRweDtcbiAgcmlnaHQ6IDRweDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 2701:
/*!*************************************************************************************************!*\
  !*** ./src/app/features/broker-dashboard/components/broker-toolbar/broker-toolbar.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrokerToolbarComponent: () => (/* binding */ BrokerToolbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_material_legacy_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/legacy-tabs */ 3101);
/* harmony import */ var _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/legacy-button */ 8654);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);





class BrokerToolbarComponent {
  get tabIndex() {
    return this._tabIndex;
  }
  set tabIndex(value) {
    this._tabIndex = value;
  }
  constructor() {
    this.$changeToggleEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.$searchInputEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.$addNewClientEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this._tabIndex = 0;
  }
  ngOnInit() {}
  handleSearchInput() {
    this.$searchInputEvent.emit(this.searchInput.toLowerCase());
  }
  handleChangeToggle(newToggle) {
    this.tabIndex = newToggle;
    this.$changeToggleEvent.emit(newToggle);
  }
  handleAddNewClient() {
    this.$addNewClientEvent.emit();
  }
  static #_ = this.ɵfac = function BrokerToolbarComponent_Factory(t) {
    return new (t || BrokerToolbarComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: BrokerToolbarComponent,
    selectors: [["app-broker-toolbar"]],
    inputs: {
      tabIndex: "tabIndex"
    },
    outputs: {
      $changeToggleEvent: "$changeToggleEvent",
      $searchInputEvent: "$searchInputEvent",
      $addNewClientEvent: "$addNewClientEvent"
    },
    decls: 11,
    vars: 2,
    consts: [[1, "l-container"], [1, "l-search-container"], [1, "g-text-input-container"], ["src", "./assets/icons/search-grey-icon.svg", "alt", "search-icon", 1, "g-input-text-icon"], ["name", "search", "type", "text", "placeholder", "Search client name", 1, "g-input-text", 3, "ngModel", "ngModelChange"], ["mat-align-tabs", "center", 1, "g-mat-tabs-dashboard", 3, "selectedIndex", "selectedTabChange", "selectedIndexChange"], ["label", "Clients"], ["label", "Pending"], [1, "l-content"], ["mat-flat-button", "", 1, "g-primary-button", "my-3", 3, "click"]],
    template: function BrokerToolbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BrokerToolbarComponent_Template_input_ngModelChange_4_listener($event) {
          return ctx.searchInput = $event;
        })("ngModelChange", function BrokerToolbarComponent_Template_input_ngModelChange_4_listener() {
          return ctx.handleSearchInput();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-tab-group", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedTabChange", function BrokerToolbarComponent_Template_mat_tab_group_selectedTabChange_5_listener($event) {
          return ctx.handleChangeToggle($event.index);
        })("selectedIndexChange", function BrokerToolbarComponent_Template_mat_tab_group_selectedIndexChange_5_listener($event) {
          return ctx.tabIndex = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mat-tab", 6)(7, "mat-tab", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8)(9, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BrokerToolbarComponent_Template_button_click_9_listener() {
          return ctx.handleAddNewClient();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Add New Client");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedIndex", ctx.tabIndex);
      }
    },
    dependencies: [_angular_material_legacy_tabs__WEBPACK_IMPORTED_MODULE_1__.MatLegacyTabGroup, _angular_material_legacy_tabs__WEBPACK_IMPORTED_MODULE_1__.MatLegacyTab, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_2__.MatLegacyButton, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel],
    styles: [".l-container[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  background-color: #ffffff;\n}\n\n.l-content[_ngcontent-%COMP%] {\n  width: 100%;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding: 0 16px;\n  background-color: #f5f5f5;\n}\n\n.l-search-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0px 16px 0px;\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.l-info-icon-img[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n\n.l-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 12px auto 0 auto;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvZGFzaGJvYXJkL2NvbXBvbmVudHMvZGFzaGJvYXJkLWhlYWRlci9kYXNoYm9hcmQtaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL3ZhcmlhYmxlcy5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9mZWF0dXJlcy9icm9rZXItZGFzaGJvYXJkL2NvbXBvbmVudHMvYnJva2VyLXRvb2xiYXIvYnJva2VyLXRvb2xiYXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EseUJDZ0NlO0FDakNuQjs7QUZJQTtFQUNJLFdBQUE7RUFDQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJDdUJvQjtBQ3hCeEI7O0FGSUE7RUFDSSxXQUFBO0VBQ0EscUJBQUE7QUVESjs7QUZJQTtFQUNJLGFBQUE7QUVESjs7QUZJQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FFREo7O0FGSUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtBRURKIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3JjL3ZhcmlhYmxlcy5zY3NzJztcclxuXHJcbi5sLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3I7XHJcbn1cclxuXHJcbi5sLWNvbnRlbnQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIHBhZGRpbmc6IDAgMTZweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yLWdyZXk7XHJcbn1cclxuXHJcbi5sLXNlYXJjaC1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwcHggMTZweCAwcHg7XHJcbn1cclxuXHJcbmlucHV0OmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5sLWluZm8taWNvbi1pbWcge1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5sLWluZm8ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMTJweCBhdXRvIDAgYXV0bztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iLCIvLyBUZXh0XHJcbiRhcHAtZm9udDogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4kYXBwLWlucHV0LWZvbnQ6ICdNdWxpc2gnLCBzYW5zLXNlcmlmO1xyXG4kYXBwLWZvbnQtYmxhY2s6ICMzNDM0MzQ7XHJcbiRhcHAtdGV4dC1ncmV5OiAjNzA3MDcwO1xyXG4kYXBwLWZvbnQtaW5wdXQtcGxhY2Vob2xkZXI6IHJnYmEoMzAsIDQ4LCAzNywgMC41Nik7XHJcbiRhcHAtZm9ybS1pbmZvLWNvbG9yOiAjYWZhZmFmO1xyXG5cclxuLy8gQ29sb3JzXHJcbiRhcHAtYmctY29sb3I6ICNmOWY5ZmM7XHJcbiRhcHAtYnV5aW5nLXJlZDogI2U3NmY1MTtcclxuJGFwcC1zZWxsaW5nLWdyZWVuOiAjN2ZhOTk1O1xyXG4kYXBwLWlucHV0LWJnLWNvbG9yOiAjZTZlNmU2O1xyXG4kYXBwLWJvdHRvbS1uYXYtaXRlbS1iZzogI2U1ZWZlOTtcclxuJGFwcC10YWJzLW1hcmtldHBsYWNlLWdyZWVuOiAjMjg1ZDYwO1xyXG4kYXBwLXRhYnMtbmVnb3RpYXRpb25zLWJsdWU6ICM0ZjllYmQ7XHJcbiRhcHAtbm90aWZpY2F0aW9uLXJlZDogI2E1M2E0YTtcclxuXHJcbi8vIEdyYWRpZW50c1xyXG4kYXBwLXNlbGxpbmctZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICM5OGI0YTcsICM0YTZlNWUpO1xyXG4kYXBwLWJ1eWluZy1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgI2RmOGE3NSwgI2EyNTMzZik7XHJcbiRhcHAtc2VsbGluZy1jYXJkLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjODVhZTliLCAjNzM5ZThhKTtcclxuJGFwcC1idXlpbmctY2FyZC1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgJGFwcC1idXlpbmctcmVkLCAjYzc1ZDQzKTtcclxuXHJcbi8vIEJ1dHRvbnNcclxuJGFwcC1wcmltYXJ5LWJ1dHRvbi1iZy1jb2xvcjogIzMxYTA1ZjtcclxuJGFwcC1zZWNvbmRhcnktYnV0dG9uLWJnLWNvbG9yOiAjZTVlNWU1O1xyXG4kYXBwLWRlbGV0ZS1idXR0b24tcmVkOiAjZDM0NTViO1xyXG5cclxuLy8gT3RoZXJcclxuJGFwcC1ib3JkZXItcmFkaXVzOiA4cHg7XHJcbiRhcHAtYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wOCkgIWltcG9ydGFudDtcclxuXHJcbi8vICNyZWdpb24gTWF0Y2ggRXhjaGFuZ2VcclxuXHJcbi8vICNyZWdpb24gQ29sb3JzXHJcblxyXG4kYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuJGJhY2tncm91bmQtY29sb3ItZ3JleTogI2Y1ZjVmNTtcclxuJHRleHQtZGFyazogIzQwNDA0MDtcclxuJHRleHQtcGxhY2Vob2xkZXI6ICM4YzhjOGM7XHJcbiRwcmltYXJ5LWNvbG9yOiAjNDA3ZWY4O1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjZTVlZGZkO1xyXG4kbWVkaXVtLWJsdWU6ICM4ZDllYzU7XHJcbiRwcmltYXJ5LWdyZWVuOiAjMWNhZjdlO1xyXG4kc2Vjb25kYXJ5LWdyZWVuOiAjZTdmN2YwO1xyXG4kcHJpbWFyeS1yZWQ6ICNkMjMwM2Q7XHJcbiRzZWNvbmRhcnktcmVkOiAjZjdlOGU3O1xyXG4kaW5wdXQtYm9yZGVyOiAjZTJlOGYwO1xyXG4kZXJyb3ItbWVzc2FnZTogI2IxMTUwYTtcclxuJGRpc2FibGVkLWNvbG9yOiAjY2JjYmNiO1xyXG5cclxuLy8gI2VuZHJlZ2lvblxyXG5cclxuLy8gI3JlZ2lvbiBUZXh0XHJcblxyXG4kdGV4dC1mb250OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiRmb250LXdlaWdodC1ib2xkOiA3MDA7XHJcbiRmb250LXdlaWdodC1zZW1pLWJvbGQ6IDYwMDtcclxuJGZvbnQtd2VpZ2h0LXJlZ3VsYXI6IDUwMDtcclxuJGZvbnQtd2VpZ2h0LWxpZ2h0OiA0MDA7XHJcblxyXG4vLyAjZW5kcmVnaW9uXHJcblxyXG4vLyAjcmVnaW9uIEJ1dHRvbnNcclxuXHJcbiRidXR0b24tZm9udC13ZWlnaHQ6IDYwMDtcclxuXHJcbi8vICNlbmRyZWdpb25cclxuXHJcbi8vICNyZWdpb24gT3RoZXJcclxuXHJcbiRib3JkZXItcmFkaXVzOiA0cHg7XHJcblxyXG4vLyAjZW5kcmVnaW9uXHJcblxyXG4vLyAjZW5kcmVnaW9uXHJcbiIsIi5sLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuLmwtY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgcGFkZGluZzogMCAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xufVxuXG4ubC1zZWFyY2gtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDBweCAxNnB4IDBweDtcbn1cblxuaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4ubC1pbmZvLWljb24taW1nIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbn1cblxuLmwtaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IDEycHggYXV0byAwIGF1dG87XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 2192:
/*!*********************************************************************************************************!*\
  !*** ./src/app/features/broker-dashboard/components/request-sent-modal/request-sent-modal.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RequestSentModalComponent: () => (/* binding */ RequestSentModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/legacy-dialog */ 1035);



class RequestSentModalComponent {
  constructor(dialogRef) {
    this.dialogRef = dialogRef;
  }
  handleCloseModal() {
    this.dialogRef.close();
  }
  static #_ = this.ɵfac = function RequestSentModalComponent_Factory(t) {
    return new (t || RequestSentModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_1__.MatLegacyDialogRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: RequestSentModalComponent,
    selectors: [["app-request-sent-modal"]],
    decls: 12,
    vars: 0,
    consts: [[1, "d-flex", "flex-column"], [1, "d-flex", "flex-row", "justify-content-end", "w-100"], ["src", "./assets/icons/close-icon-dark.svg", "alt", "close", 1, "l-close-icon", 3, "click"], [1, "g-text-h1-dark", "mb-3", "w-100"], [1, "g-text-p-dark"], [1, "g-primary-button", "my-2", 3, "click"]],
    template: function RequestSentModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 0)(2, "div", 1)(3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RequestSentModalComponent_Template_img_click_3_listener() {
          return ctx.handleCloseModal();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 3)(5, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Request Sent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4)(8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Your request has been successfully sent. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RequestSentModalComponent_Template_button_click_10_listener() {
          return ctx.handleCloseModal();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Continue ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
    },
    styles: [".l-close-icon[_ngcontent-%COMP%] {\n  width: 18px;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvYnJva2VyLWRhc2hib2FyZC9jb21wb25lbnRzL3JlcXVlc3Qtc2VudC1tb2RhbC9yZXF1ZXN0LXNlbnQtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmwtY2xvc2UtaWNvbiB7XHJcbiAgd2lkdGg6IDE4cHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_features_broker-dashboard_broker-dashboard_module_ts.js.map