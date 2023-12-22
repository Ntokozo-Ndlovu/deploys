"use strict";
(self["webpackChunkskudu_match"] = self["webpackChunkskudu_match"] || []).push([["default-src_app_features_shared_components_delivery-point-modal_delivery-point-modal_component_ts"],{

/***/ 7015:
/*!*********************************************************************************************************************!*\
  !*** ./src/app/features/shared/components/delivery-point-modal/components/delivery-form/delivery-form.component.ts ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeliveryFormComponent: () => (/* binding */ DeliveryFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_core_models_queryModels__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/models/queryModels */ 1417);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 1527);
/* harmony import */ var src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/helpers/index.actions */ 5626);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/effects */ 1575);
/* harmony import */ var _confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../confirmation-modal/confirmation-modal.component */ 9510);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var _googlemaps_js_api_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @googlemaps/js-api-loader */ 8914);
/* harmony import */ var _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/legacy-dialog */ 1035);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_material_legacy_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/legacy-progress-spinner */ 3401);
/* harmony import */ var _angular_magic_ngx_gp_autocomplete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular-magic/ngx-gp-autocomplete */ 4711);
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/google-maps */ 8684);




















function DeliveryFormComponent_div_0_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 15)(1, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Delivery points cannot be edited. To change a delivery point, you need to create a new one. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function DeliveryFormComponent_div_0_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 17)(1, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Delivery Point Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 19)(4, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function DeliveryFormComponent_div_0_div_9_Template_input_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r15.deliveryPoint.name = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 21)(6, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " Name your own delivery point so that you may easily recognise it later. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r3.deliveryPoint.name);
  }
}
function DeliveryFormComponent_div_0_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 23)(1, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Delivery Point Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 19)(4, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function DeliveryFormComponent_div_0_ng_template_10_Template_input_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r17.deliveryPoint.name = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r5.deliveryPoint.name);
  }
}
function DeliveryFormComponent_div_0_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 17)(1, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Nearest Town");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 19)(4, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function DeliveryFormComponent_div_0_div_12_Template_input_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r19.deliveryPoint.town = $event);
    })("onAddressChange", function DeliveryFormComponent_div_0_div_12_Template_input_onAddressChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r21.handleLocationSelection($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r6.deliveryPoint.town)("options", ctx_r6.options);
  }
}
function DeliveryFormComponent_div_0_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 17)(1, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Nearest Town");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 19)(4, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function DeliveryFormComponent_div_0_ng_template_13_Template_input_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r22.deliveryPoint.town = $event);
    })("onAddressChange", function DeliveryFormComponent_div_0_ng_template_13_Template_input_onAddressChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r24.handleLocationSelection($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r8.deliveryPoint.town)("options", ctx_r8.options);
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
const _c2 = function (a1) {
  return {
    draggable: true,
    opacity: a1
  };
};
function DeliveryFormComponent_div_0_div_15_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 28)(1, "google-map", 29)(2, "map-marker", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("dragend", function DeliveryFormComponent_div_0_div_15_div_3_Template_map_marker_dragend_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r26.handleDragEnd($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("zoom", ctx_r25.zoom)("center", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](5, _c0, ctx_r25.deliveryPoint.location.lat, ctx_r25.deliveryPoint.location.lng))("options", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](8, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("position", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](9, _c0, ctx_r25.deliveryPoint.location.lat, ctx_r25.deliveryPoint.location.lng))("options", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](12, _c2, ctx_r25.markerVisibility));
  }
}
function DeliveryFormComponent_div_0_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 17)(1, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, DeliveryFormComponent_div_0_div_15_div_3_Template, 3, 14, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 1, ctx_r9.apiLoaded));
  }
}
const _c3 = function (a1) {
  return {
    draggable: false,
    opacity: a1
  };
};
function DeliveryFormComponent_div_0_ng_template_16_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 28)(1, "google-map", 29)(2, "map-marker", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("dragend", function DeliveryFormComponent_div_0_ng_template_16_div_3_Template_map_marker_dragend_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r30);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r29.handleDragEnd($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("zoom", ctx_r28.zoom)("center", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](5, _c0, ctx_r28.deliveryPoint.location.lat, ctx_r28.deliveryPoint.location.lng))("options", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](8, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("position", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](9, _c0, ctx_r28.deliveryPoint.location.lat, ctx_r28.deliveryPoint.location.lng))("options", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](12, _c3, ctx_r28.markerVisibility));
  }
}
function DeliveryFormComponent_div_0_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 17)(1, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, DeliveryFormComponent_div_0_ng_template_16_div_3_Template, 3, 14, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 1, ctx_r11.apiLoaded));
  }
}
function DeliveryFormComponent_div_0_button_18_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "mat-progress-spinner", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("diameter", 30);
  }
}
function DeliveryFormComponent_div_0_button_18_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0, " Save Delivery Point ");
  }
}
function DeliveryFormComponent_div_0_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DeliveryFormComponent_div_0_button_18_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r35);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](8);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r34.handleCreateDeliveryPoint(_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, DeliveryFormComponent_div_0_button_18_ng_container_1_Template, 2, 1, "ng-container", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, DeliveryFormComponent_div_0_button_18_ng_template_2_Template, 1, 0, "ng-template", null, 33, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](8);
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("g-btn-disabled", _r2.invalid || !ctx_r12.deliveryPoint.googlePlaceId);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", _r2.invalid || !ctx_r12.deliveryPoint.googlePlaceId);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r12.isLoading)("ngIfElse", _r32);
  }
}
function DeliveryFormComponent_div_0_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DeliveryFormComponent_div_0_ng_template_19_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r37);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r36.handleDeleteDeliveryPoint());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Delete Delivery Point ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function DeliveryFormComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DeliveryFormComponent_div_0_Template_img_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r39);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r38.handleBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h2", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, DeliveryFormComponent_div_0_div_6_Template, 3, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "form", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, DeliveryFormComponent_div_0_div_9_Template, 8, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, DeliveryFormComponent_div_0_ng_template_10_Template, 5, 1, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, DeliveryFormComponent_div_0_div_12_Template, 5, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, DeliveryFormComponent_div_0_ng_template_13_Template, 5, 2, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, DeliveryFormComponent_div_0_div_15_Template, 5, 3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, DeliveryFormComponent_div_0_ng_template_16_Template, 5, 3, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, DeliveryFormComponent_div_0_button_18_Template, 4, 5, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, DeliveryFormComponent_div_0_ng_template_19_Template, 2, 0, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](11);
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](14);
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](17);
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](20);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.isView ? "View Delivery Point" : "Create Delivery Point");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.isView);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r0.isView)("ngIfElse", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r0.isView)("ngIfElse", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r0.isView)("ngIfElse", _r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r0.showDeleteButton)("ngIfElse", _r13);
  }
}
class DeliveryFormComponent {
  constructor(loader, dialog, store, actions$) {
    this.loader = loader;
    this.dialog = dialog;
    this.store = store;
    this.actions$ = actions$;
    this.isLoading = false;
    this.$closeModalEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.$toggleIsCreateOwnEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.$createDeliveryPointEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.options = {
      types: ['(regions)']
    };
    this.zoom = 4;
    this.markerVisibility = 0;
    this.showDeleteButton = false;
    this.apiLoaded = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(false);
  }
  ngOnInit() {
    this.loader.importLibrary('maps').then(({
      Map
    }) => {
      this.apiLoaded?.next(true);
    }).catch(e => {
      // do something
    });
    if (this.deliveryPoint) {
      this.showDeleteButton = true;
      this.markerVisibility = 100;
      this.zoom = 12.5;
    } else {
      this.deliveryPoint = new src_app_core_models_queryModels__WEBPACK_IMPORTED_MODULE_0__.DeliveryPointClass();
    }
  }
  handleBack() {
    if (this.showInitial && !this.fromProfile) {
      this.$toggleIsCreateOwnEvent.emit();
      return;
    }
    this.$closeModalEvent.emit();
  }
  handleLocationSelection($event) {
    this.deliveryPoint.town = $event.formatted_address;
    this.deliveryPoint.googlePlaceId = $event.place_id;
    this.deliveryPoint.location.lat = $event.geometry.location.lat();
    this.deliveryPoint.location.lng = $event.geometry.location.lng();
    this.zoom = 12.5;
    this.markerVisibility = 100;
  }
  handleDragEnd($event) {
    this.deliveryPoint.location.lat = $event.latLng.lat();
    this.deliveryPoint.location.lng = $event.latLng.lng();
  }
  handleCreateDeliveryPoint(deliveryForm) {
    if (deliveryForm.valid && this.deliveryPoint.town && this.deliveryPoint.googlePlaceId) {
      this.deliveryPoint.town = this.deliveryPoint.town.split(',')[0];
      this.$createDeliveryPointEvent.emit(this.deliveryPoint);
    }
  }
  handleDeleteDeliveryPoint() {
    const dialogRef = this.dialog.open(_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_2__.ConfirmationModalComponent, {
      data: {
        currentAction: 'delete',
        currentItem: 'Delivery Point'
      },
      panelClass: 'g-modal-container'
    });
    dialogRef.afterClosed().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe(shouldDispatch => {
      this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_7__.ofType)(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_1__.deliveryPointActions.DeleteDeliveryPointSuccess), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe(() => {
        this.handleBack();
      });
      if (shouldDispatch) {
        this.store.dispatch(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_1__.deliveryPointActions.ReqDeleteDeliveryPoint({
          id: this.deliveryPoint.id,
          executedTime: Date.now()
        }));
      }
    });
  }
  static #_ = this.ɵfac = function DeliveryFormComponent_Factory(t) {
    return new (t || DeliveryFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_googlemaps_js_api_loader__WEBPACK_IMPORTED_MODULE_3__.Loader), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_8__.MatLegacyDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_9__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_7__.Actions));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: DeliveryFormComponent,
    selectors: [["app-delivery-form"]],
    inputs: {
      isLoading: "isLoading",
      isView: "isView",
      showInitial: "showInitial",
      fromProfile: "fromProfile",
      deliveryPoint: "deliveryPoint"
    },
    outputs: {
      $closeModalEvent: "$closeModalEvent",
      $toggleIsCreateOwnEvent: "$toggleIsCreateOwnEvent",
      $createDeliveryPointEvent: "$createDeliveryPointEvent"
    },
    decls: 1,
    vars: 1,
    consts: [["class", "l-container g-fade-in-right", 4, "ngIf"], [1, "l-container", "g-fade-in-right"], [1, "l-header"], ["src", "./assets/icons/back-arrow-icon.svg", "alt", "back-arrow-icon", 1, "l-back-icon", 3, "click"], [1, "g-text-h2-dark", "pt-3"], [1, "l-content"], ["class", "l-info-container", 4, "ngIf"], ["autocomplete", "off", 1, "d-flex", "flex-column"], ["deliveryForm", "ngForm"], ["class", "g-form-input-group mt-3", 4, "ngIf", "ngIfElse"], ["disabledNameInput", ""], ["disabledTownInput", ""], ["disabledMap", ""], ["mat-flat-button", "", "class", "g-primary-button my-3", 3, "g-btn-disabled", "disabled", "click", 4, "ngIf", "ngIfElse"], ["showDelete", ""], [1, "l-info-container"], [1, "g-form-info-p", "m-0"], [1, "g-form-input-group", "mt-3"], [1, "g-form-label"], [1, "g-text-input-container"], ["type", "text", "name", "name", "autocomplete", "no", "required", "", 1, "g-input-text-no-icon", 3, "ngModel", "ngModelChange"], [1, "d-flex", "flex-row", "mt-1"], [1, "g-form-info-p", "mb-0"], [1, "g-form-input-group"], ["type", "text", "name", "name", "autocomplete", "no", "required", "", "disabled", "", 1, "g-input-text-no-icon", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "town", "ngx-gp-autocomplete", "", "placeholder", "", "autocomplete", "off", "required", "", 1, "g-input-text-no-icon", 3, "ngModel", "options", "ngModelChange", "onAddressChange"], ["type", "text", "name", "town", "ngx-gp-autocomplete", "", "placeholder", "", "autocomplete", "off", "required", "", "disabled", "", 1, "g-input-text-no-icon", 3, "ngModel", "options", "ngModelChange", "onAddressChange"], ["class", "l-map-holder", 4, "ngIf"], [1, "l-map-holder"], [1, "g-delivery-form-map", 3, "zoom", "center", "options"], [3, "position", "options", "dragend"], ["mat-flat-button", "", 1, "g-primary-button", "my-3", 3, "disabled", "click"], [4, "ngIf", "ngIfElse"], ["showText", ""], ["mode", "indeterminate", 1, "g-mat-progress-spinner-white", "mx-auto", 3, "diameter"], ["mat-flat-button", "", 1, "g-secondary-button", "mt-3", 3, "click"]],
    template: function DeliveryFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, DeliveryFormComponent_div_0_Template, 21, 10, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.deliveryPoint);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgForm, _angular_material_legacy_progress_spinner__WEBPACK_IMPORTED_MODULE_12__.MatLegacyProgressSpinner, _angular_magic_ngx_gp_autocomplete__WEBPACK_IMPORTED_MODULE_13__.NgxGpAutocompleteDirective, _angular_google_maps__WEBPACK_IMPORTED_MODULE_14__.GoogleMap, _angular_google_maps__WEBPACK_IMPORTED_MODULE_14__.MapMarker, _angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe],
    styles: [".l-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-color: #f5f5f5;\n  overflow-y: auto;\n}\n\n.l-content[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0 auto;\n  padding: 0 16px;\n}\n\n.l-header[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  min-height: 56px;\n  background-color: white;\n}\n\n.l-back-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 16px;\n  top: 20px;\n  width: 20.24px;\n  height: 13.5px;\n}\n\n.l-map-holder[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.l-info-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: flex;\n  align-items: flex-start;\n  margin: 16px 0 8px 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvc2hhcmVkL2NvbXBvbmVudHMvZGVsaXZlcnktcG9pbnQtbW9kYWwvY29tcG9uZW50cy9kZWxpdmVyeS1mb3JtL2RlbGl2ZXJ5LWZvcm0uY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQ2lDb0I7RURoQ3BCLGdCQUFBO0FBREo7O0FBSUE7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFESjs7QUFJQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFESjs7QUFJQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQURKOztBQUlBO0VBQ0ksa0JDeUNZO0VEeENaLGdCQUFBO0FBREo7O0FBSUE7RUFDSSxXQUFBO0VBQ0Esd0JBQUE7RUFBQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0FBREoiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzcmMvdmFyaWFibGVzLnNjc3MnO1xyXG5cclxuLmwtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3ItZ3JleTtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbi5sLWNvbnRlbnQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmc6IDAgMTZweDtcclxufVxyXG5cclxuLmwtaGVhZGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogNTZweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubC1iYWNrLWljb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMTZweDtcclxuICAgIHRvcDogMjBweDtcclxuICAgIHdpZHRoOiAyMC4yNHB4O1xyXG4gICAgaGVpZ2h0OiAxMy41cHg7XHJcbn1cclxuXHJcbi5sLW1hcC1ob2xkZXIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ubC1pbmZvLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBtYXJnaW46IDE2cHggMCA4cHggMDtcclxufVxyXG4iLCIvLyBUZXh0XHJcbiRhcHAtZm9udDogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4kYXBwLWlucHV0LWZvbnQ6ICdNdWxpc2gnLCBzYW5zLXNlcmlmO1xyXG4kYXBwLWZvbnQtYmxhY2s6ICMzNDM0MzQ7XHJcbiRhcHAtdGV4dC1ncmV5OiAjNzA3MDcwO1xyXG4kYXBwLWZvbnQtaW5wdXQtcGxhY2Vob2xkZXI6IHJnYmEoMzAsIDQ4LCAzNywgMC41Nik7XHJcbiRhcHAtZm9ybS1pbmZvLWNvbG9yOiAjYWZhZmFmO1xyXG5cclxuLy8gQ29sb3JzXHJcbiRhcHAtYmctY29sb3I6ICNmOWY5ZmM7XHJcbiRhcHAtYnV5aW5nLXJlZDogI2U3NmY1MTtcclxuJGFwcC1zZWxsaW5nLWdyZWVuOiAjN2ZhOTk1O1xyXG4kYXBwLWlucHV0LWJnLWNvbG9yOiAjZTZlNmU2O1xyXG4kYXBwLWJvdHRvbS1uYXYtaXRlbS1iZzogI2U1ZWZlOTtcclxuJGFwcC10YWJzLW1hcmtldHBsYWNlLWdyZWVuOiAjMjg1ZDYwO1xyXG4kYXBwLXRhYnMtbmVnb3RpYXRpb25zLWJsdWU6ICM0ZjllYmQ7XHJcbiRhcHAtbm90aWZpY2F0aW9uLXJlZDogI2E1M2E0YTtcclxuXHJcbi8vIEdyYWRpZW50c1xyXG4kYXBwLXNlbGxpbmctZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICM5OGI0YTcsICM0YTZlNWUpO1xyXG4kYXBwLWJ1eWluZy1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgI2RmOGE3NSwgI2EyNTMzZik7XHJcbiRhcHAtc2VsbGluZy1jYXJkLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjODVhZTliLCAjNzM5ZThhKTtcclxuJGFwcC1idXlpbmctY2FyZC1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgJGFwcC1idXlpbmctcmVkLCAjYzc1ZDQzKTtcclxuXHJcbi8vIEJ1dHRvbnNcclxuJGFwcC1wcmltYXJ5LWJ1dHRvbi1iZy1jb2xvcjogIzMxYTA1ZjtcclxuJGFwcC1zZWNvbmRhcnktYnV0dG9uLWJnLWNvbG9yOiAjZTVlNWU1O1xyXG4kYXBwLWRlbGV0ZS1idXR0b24tcmVkOiAjZDM0NTViO1xyXG5cclxuLy8gT3RoZXJcclxuJGFwcC1ib3JkZXItcmFkaXVzOiA4cHg7XHJcbiRhcHAtYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wOCkgIWltcG9ydGFudDtcclxuXHJcbi8vICNyZWdpb24gTWF0Y2ggRXhjaGFuZ2VcclxuXHJcbi8vICNyZWdpb24gQ29sb3JzXHJcblxyXG4kYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuJGJhY2tncm91bmQtY29sb3ItZ3JleTogI2Y1ZjVmNTtcclxuJHRleHQtZGFyazogIzQwNDA0MDtcclxuJHRleHQtcGxhY2Vob2xkZXI6ICM4YzhjOGM7XHJcbiRwcmltYXJ5LWNvbG9yOiAjNDA3ZWY4O1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjZTVlZGZkO1xyXG4kbWVkaXVtLWJsdWU6ICM4ZDllYzU7XHJcbiRwcmltYXJ5LWdyZWVuOiAjMWNhZjdlO1xyXG4kc2Vjb25kYXJ5LWdyZWVuOiAjZTdmN2YwO1xyXG4kcHJpbWFyeS1yZWQ6ICNkMjMwM2Q7XHJcbiRzZWNvbmRhcnktcmVkOiAjZjdlOGU3O1xyXG4kaW5wdXQtYm9yZGVyOiAjZTJlOGYwO1xyXG4kZXJyb3ItbWVzc2FnZTogI2IxMTUwYTtcclxuJGRpc2FibGVkLWNvbG9yOiAjY2JjYmNiO1xyXG5cclxuLy8gI2VuZHJlZ2lvblxyXG5cclxuLy8gI3JlZ2lvbiBUZXh0XHJcblxyXG4kdGV4dC1mb250OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiRmb250LXdlaWdodC1ib2xkOiA3MDA7XHJcbiRmb250LXdlaWdodC1zZW1pLWJvbGQ6IDYwMDtcclxuJGZvbnQtd2VpZ2h0LXJlZ3VsYXI6IDUwMDtcclxuJGZvbnQtd2VpZ2h0LWxpZ2h0OiA0MDA7XHJcblxyXG4vLyAjZW5kcmVnaW9uXHJcblxyXG4vLyAjcmVnaW9uIEJ1dHRvbnNcclxuXHJcbiRidXR0b24tZm9udC13ZWlnaHQ6IDYwMDtcclxuXHJcbi8vICNlbmRyZWdpb25cclxuXHJcbi8vICNyZWdpb24gT3RoZXJcclxuXHJcbiRib3JkZXItcmFkaXVzOiA0cHg7XHJcblxyXG4vLyAjZW5kcmVnaW9uXHJcblxyXG4vLyAjZW5kcmVnaW9uXHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 118:
/*!***************************************************************************************************************************!*\
  !*** ./src/app/features/shared/components/delivery-point-modal/components/delivery-initial/delivery-initial.component.ts ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeliveryInitialComponent: () => (/* binding */ DeliveryInitialComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_material_legacy_autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/legacy-autocomplete */ 2718);
/* harmony import */ var _angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/legacy-core */ 773);
/* harmony import */ var _angular_material_legacy_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/legacy-checkbox */ 1612);










function DeliveryInitialComponent_div_11_mat_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const filteredDeliveryPoint_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", filteredDeliveryPoint_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", filteredDeliveryPoint_r6.name, " ");
  }
}
function DeliveryInitialComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13)(1, "label", 14)(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Public delivery points");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 15)(5, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DeliveryInitialComponent_div_11_Template_input_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r7.searchTerm = $event);
    })("ngModelChange", function DeliveryInitialComponent_div_11_Template_input_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r9.handleSearchTermChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-autocomplete", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function DeliveryInitialComponent_div_11_Template_mat_autocomplete_optionSelected_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r10.handleSelectDeliveryPoint($event.option.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DeliveryInitialComponent_div_11_mat_option_8_Template, 2, 2, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 20)(10, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeliveryInitialComponent_div_11_Template_img_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r11.handleSearchIconClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " If your nearest Silo or Mill is not listed, please create the delivery point below. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.searchTerm)("matAutocomplete", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.filteredDeliveryPoints);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", !ctx_r0.searchTerm || ctx_r0.searchTerm === "" ? "./assets/icons/search-white-icon.svg" : "./assets/icons/close-icon.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
function DeliveryInitialComponent_div_14_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 27)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "OR");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function DeliveryInitialComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DeliveryInitialComponent_div_14_p_1_Template, 3, 0, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeliveryInitialComponent_div_14_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r13.handleToggleIsCreateOwn());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Create own delivery point ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.publicDeliveryPoints.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("g-btn-disabled", ctx_r1.searchTerm && ctx_r1.searchTerm !== "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.searchTerm && ctx_r1.searchTerm !== "");
  }
}
function DeliveryInitialComponent_ng_template_15_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeliveryInitialComponent_ng_template_15_div_8_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);
      const userDeliveryPoint_r16 = restoredCtx.$implicit;
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r17.handleSelectUserDeliveryPoint(userDeliveryPoint_r16));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-checkbox", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const userDeliveryPoint_r16 = ctx.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](userDeliveryPoint_r16.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r15.selectedDeliveryPointId === userDeliveryPoint_r16.id);
  }
}
function DeliveryInitialComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28)(1, "p", 29)(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "My delivery points");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeliveryInitialComponent_ng_template_15_Template_div_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r19.handleToggleIsCreateOwn());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Create new delivery point");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DeliveryInitialComponent_ng_template_15_div_8_Template, 4, 2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r3.publicDeliveryPoints.length ? "mt-4" : "mt-3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.userDeliveryPoints);
  }
}
const _c0 = function (a0, a1) {
  return {
    "g-primary-button": a0,
    "g-disabled-button": a1
  };
};
class DeliveryInitialComponent {
  constructor(router, location) {
    this.router = router;
    this.location = location;
    this.publicDeliveryPoints = [];
    this.userDeliveryPoints = [];
    this.$closeModalEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.$toggleIsCreateOwnEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.searchTerm = '';
    this.filteredDeliveryPoints = [];
    this.selectedDeliveryPointId = null;
  }
  ngOnInit() {
    this.filteredDeliveryPoints = this.publicDeliveryPoints;
  }
  handleSaveAndCloseModal() {
    this.$closeModalEvent.emit(this.selectedDeliveryPointId);
  }
  handleToggleIsCreateOwn() {
    this.$toggleIsCreateOwnEvent.emit();
  }
  handleSearchTermChange(searchTerm) {
    if (typeof searchTerm === 'string') {
      this.filteredDeliveryPoints = this.publicDeliveryPoints.filter(filtered => {
        return filtered.name.toLocaleLowerCase().includes(this.searchTerm.toLocaleLowerCase());
      });
    }
  }
  handleSearchIconClick() {
    this.searchTerm = '';
    this.selectedDeliveryPointId = null;
  }
  handleSelectDeliveryPoint(deliveryPoint) {
    this.selectedDeliveryPointId = deliveryPoint.id;
    this.searchTerm = deliveryPoint.name;
  }
  handleSelectUserDeliveryPoint(deliveryPoint) {
    this.selectedDeliveryPointId = this.selectedDeliveryPointId === deliveryPoint.id ? null : deliveryPoint.id;
  }
  static #_ = this.ɵfac = function DeliveryInitialComponent_Factory(t) {
    return new (t || DeliveryInitialComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.Location));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: DeliveryInitialComponent,
    selectors: [["app-delivery-initial"]],
    inputs: {
      publicDeliveryPoints: "publicDeliveryPoints",
      userDeliveryPoints: "userDeliveryPoints"
    },
    outputs: {
      $closeModalEvent: "$closeModalEvent",
      $toggleIsCreateOwnEvent: "$toggleIsCreateOwnEvent"
    },
    decls: 17,
    vars: 9,
    consts: [[1, "l-container", "g-fade-in"], [1, "l-header-container"], [1, "l-header"], ["src", "./assets/icons/back-arrow-icon.svg", "alt", "back-arrow-icon", 1, "l-back-icon", 3, "click"], [1, "g-text-h2-dark"], [1, "d-flex", "flex-row", "m-3"], ["src", "./assets/icons/info-icon-grey.svg", "alt", "info-icon-grey", 1, "g-form-info-icon", "mt-1"], [1, "g-form-info-p", "mb-0"], [1, "l-content"], ["class", "w-100 mt-3", 4, "ngIf"], ["mat-flat-button", "", 1, "mt-3", 3, "disabled", "ngClass", "click"], ["class", "w-100 mt-4", 4, "ngIf", "ngIfElse"], ["showMyDeliveryPoints", ""], [1, "w-100", "mt-3"], [1, "g-text-h2-dark", "mb-3"], [1, "d-flex", "flex-row"], ["type", "text", "placeholder", "Search by Silo, Mills or Farms.", 1, "l-input", "g-text-input", 3, "ngModel", "matAutocomplete", "ngModelChange"], [1, "g-mat-autocomplete", 3, "optionSelected"], ["auto", "matAutocomplete"], ["class", "g-mat-option-text", 3, "value", 4, "ngFor", "ngForOf"], [1, "l-search-container"], ["alt", "search-white-icon", 1, "l-search-icon", 3, "src", "click"], [1, "d-flex", "flex-row", "m-1"], [1, "g-mat-option-text", 3, "value"], [1, "w-100", "mt-4"], ["class", "g-text-p mb-4", 4, "ngIf"], ["mat-flat-button", "", 1, "w-100", "g-primary-button", 3, "disabled", "click"], [1, "g-text-p", "mb-4"], [1, "w-100", 3, "ngClass"], [1, "g-text-h2-dark", "text-left", "mb-3"], [1, "l-user-delivery-point", "l-primary-bg", 3, "click"], [1, "g-text-p", "text-white"], ["src", "./assets/icons/plus-icon-white.svg", "alt", "plus-icon", 1, "l-existing-icon"], ["class", "l-user-delivery-point", 3, "click", 4, "ngFor", "ngForOf"], [1, "l-user-delivery-point", 3, "click"], [1, "g-text-p", "l-delivery-name"], ["disabled", "", 1, "g-mat-checkbox", 3, "checked"]],
    template: function DeliveryInitialComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeliveryInitialComponent_Template_img_click_3_listener() {
          return ctx.handleSaveAndCloseModal();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Delivery Point Setup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, DeliveryInitialComponent_div_11_Template, 15, 4, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeliveryInitialComponent_Template_button_click_12_listener() {
          return ctx.handleSaveAndCloseModal();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Save Selected Delivery Point ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DeliveryInitialComponent_div_14_Template, 4, 4, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, DeliveryInitialComponent_ng_template_15_Template, 9, 2, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", !ctx.publicDeliveryPoints.length && !ctx.userDeliveryPoints.length ? "You haven't created any Delivery Point's yet. Create your own delivery point by clicking the button below." : "Select a Delivery Point option as part of the process of creating a New Lot.", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.publicDeliveryPoints.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.selectedDeliveryPointId)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c0, ctx.selectedDeliveryPointId, !ctx.selectedDeliveryPointId));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.userDeliveryPoints.length)("ngIfElse", _r2);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_material_legacy_autocomplete__WEBPACK_IMPORTED_MODULE_4__.MatLegacyAutocomplete, _angular_material_legacy_autocomplete__WEBPACK_IMPORTED_MODULE_4__.MatLegacyAutocompleteTrigger, _angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_5__.MatLegacyOption, _angular_material_legacy_checkbox__WEBPACK_IMPORTED_MODULE_6__.MatLegacyCheckbox],
    styles: [".l-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  padding-bottom: 16px;\n  background-color: #f5f5f5;\n  overflow: auto;\n}\n\n.l-header[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  min-height: 56px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: white;\n}\n\n.l-back-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 16px;\n  width: 20.24px;\n  height: 13.5px;\n}\n\n.l-content[_ngcontent-%COMP%] {\n  width: 100%;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin: 0 auto;\n  padding: 0 16px;\n}\n\n.l-input[_ngcontent-%COMP%] {\n  width: calc(100% - 48px);\n  height: 56px;\n  padding-left: 20px;\n  border: none;\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n  background-color: #ffffff;\n  outline: none;\n}\n\n.l-input[_ngcontent-%COMP%]::-webkit-input-placeholder, .l-input[_ngcontent-%COMP%]::-moz-placeholder {\n  color: #8c8c8c !important;\n}\n\n.l-search-container[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 56px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n  background-color: #407ef8;\n}\n\n.l-search-icon[_ngcontent-%COMP%] {\n  width: 20.5px;\n  height: 20.5px;\n}\n\n.l-user-delivery-point[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 56px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 4px;\n  padding: 0 24px;\n  border-radius: 4px;\n  background-color: #ffffff;\n}\n\n.l-primary-bg[_ngcontent-%COMP%] {\n  background-color: #407ef8 !important;\n}\n\n.l-existing-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n\n.l-delivery-name[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvc2hhcmVkL2NvbXBvbmVudHMvZGVsaXZlcnktcG9pbnQtbW9kYWwvY29tcG9uZW50cy9kZWxpdmVyeS1pbml0aWFsL2RlbGl2ZXJ5LWluaXRpYWwuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EseUJDZ0NvQjtFRC9CcEIsY0FBQTtBQURKOztBQUlBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBREo7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQURKOztBQUlBO0VBQ0ksV0FBQTtFQUNBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQURKOztBQUlBO0VBQ0ksd0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsMkJDaUNZO0VEaENaLDhCQ2dDWTtFRC9CWix5QkFBQTtFQUNBLGFBQUE7QUFESjs7QUFHQTs7RUFFSSx5QkFBQTtBQUFKOztBQUdBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQ2lCWTtFRGhCWiwrQkNnQlk7RURmWix5QkNoQlk7QURnQmhCOztBQUdBO0VBQ0ksYUFBQTtFQUNBLGNBQUE7QUFBSjs7QUFHQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkNEWTtFREVaLHlCQUFBO0FBQUo7O0FBR0E7RUFDSSxvQ0FBQTtBQUFKOztBQUdBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFBSjs7QUFHQTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQUFKIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3JjL3ZhcmlhYmxlcy5zY3NzJztcclxuXHJcbi5sLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3ItZ3JleTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4ubC1oZWFkZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiA1NnB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubC1iYWNrLWljb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMTZweDtcclxuICAgIHdpZHRoOiAyMC4yNHB4O1xyXG4gICAgaGVpZ2h0OiAxMy41cHg7XHJcbn1cclxuXHJcbi5sLWNvbnRlbnQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nOiAwIDE2cHg7XHJcbn1cclxuXHJcbi5sLWlucHV0IHtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0OHB4KTtcclxuICAgIGhlaWdodDogNTZweDtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG4ubC1pbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcixcclxuLmwtaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICR0ZXh0LXBsYWNlaG9sZGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sLXNlYXJjaC1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDQ4cHg7XHJcbiAgICBoZWlnaHQ6IDU2cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XHJcbn1cclxuXHJcbi5sLXNlYXJjaC1pY29uIHtcclxuICAgIHdpZHRoOiAyMC41cHg7XHJcbiAgICBoZWlnaHQ6IDIwLjVweDtcclxufVxyXG5cclxuLmwtdXNlci1kZWxpdmVyeS1wb2ludCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNTZweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgcGFkZGluZzogMCAyNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4ubC1wcmltYXJ5LWJnIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sLWV4aXN0aW5nLWljb24ge1xyXG4gICAgd2lkdGg6IDE2cHg7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbn1cclxuXHJcbi5sLWRlbGl2ZXJ5LW5hbWUge1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG4iLCIvLyBUZXh0XHJcbiRhcHAtZm9udDogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4kYXBwLWlucHV0LWZvbnQ6ICdNdWxpc2gnLCBzYW5zLXNlcmlmO1xyXG4kYXBwLWZvbnQtYmxhY2s6ICMzNDM0MzQ7XHJcbiRhcHAtdGV4dC1ncmV5OiAjNzA3MDcwO1xyXG4kYXBwLWZvbnQtaW5wdXQtcGxhY2Vob2xkZXI6IHJnYmEoMzAsIDQ4LCAzNywgMC41Nik7XHJcbiRhcHAtZm9ybS1pbmZvLWNvbG9yOiAjYWZhZmFmO1xyXG5cclxuLy8gQ29sb3JzXHJcbiRhcHAtYmctY29sb3I6ICNmOWY5ZmM7XHJcbiRhcHAtYnV5aW5nLXJlZDogI2U3NmY1MTtcclxuJGFwcC1zZWxsaW5nLWdyZWVuOiAjN2ZhOTk1O1xyXG4kYXBwLWlucHV0LWJnLWNvbG9yOiAjZTZlNmU2O1xyXG4kYXBwLWJvdHRvbS1uYXYtaXRlbS1iZzogI2U1ZWZlOTtcclxuJGFwcC10YWJzLW1hcmtldHBsYWNlLWdyZWVuOiAjMjg1ZDYwO1xyXG4kYXBwLXRhYnMtbmVnb3RpYXRpb25zLWJsdWU6ICM0ZjllYmQ7XHJcbiRhcHAtbm90aWZpY2F0aW9uLXJlZDogI2E1M2E0YTtcclxuXHJcbi8vIEdyYWRpZW50c1xyXG4kYXBwLXNlbGxpbmctZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICM5OGI0YTcsICM0YTZlNWUpO1xyXG4kYXBwLWJ1eWluZy1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgI2RmOGE3NSwgI2EyNTMzZik7XHJcbiRhcHAtc2VsbGluZy1jYXJkLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjODVhZTliLCAjNzM5ZThhKTtcclxuJGFwcC1idXlpbmctY2FyZC1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgJGFwcC1idXlpbmctcmVkLCAjYzc1ZDQzKTtcclxuXHJcbi8vIEJ1dHRvbnNcclxuJGFwcC1wcmltYXJ5LWJ1dHRvbi1iZy1jb2xvcjogIzMxYTA1ZjtcclxuJGFwcC1zZWNvbmRhcnktYnV0dG9uLWJnLWNvbG9yOiAjZTVlNWU1O1xyXG4kYXBwLWRlbGV0ZS1idXR0b24tcmVkOiAjZDM0NTViO1xyXG5cclxuLy8gT3RoZXJcclxuJGFwcC1ib3JkZXItcmFkaXVzOiA4cHg7XHJcbiRhcHAtYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wOCkgIWltcG9ydGFudDtcclxuXHJcbi8vICNyZWdpb24gTWF0Y2ggRXhjaGFuZ2VcclxuXHJcbi8vICNyZWdpb24gQ29sb3JzXHJcblxyXG4kYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuJGJhY2tncm91bmQtY29sb3ItZ3JleTogI2Y1ZjVmNTtcclxuJHRleHQtZGFyazogIzQwNDA0MDtcclxuJHRleHQtcGxhY2Vob2xkZXI6ICM4YzhjOGM7XHJcbiRwcmltYXJ5LWNvbG9yOiAjNDA3ZWY4O1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjZTVlZGZkO1xyXG4kbWVkaXVtLWJsdWU6ICM4ZDllYzU7XHJcbiRwcmltYXJ5LWdyZWVuOiAjMWNhZjdlO1xyXG4kc2Vjb25kYXJ5LWdyZWVuOiAjZTdmN2YwO1xyXG4kcHJpbWFyeS1yZWQ6ICNkMjMwM2Q7XHJcbiRzZWNvbmRhcnktcmVkOiAjZjdlOGU3O1xyXG4kaW5wdXQtYm9yZGVyOiAjZTJlOGYwO1xyXG4kZXJyb3ItbWVzc2FnZTogI2IxMTUwYTtcclxuJGRpc2FibGVkLWNvbG9yOiAjY2JjYmNiO1xyXG5cclxuLy8gI2VuZHJlZ2lvblxyXG5cclxuLy8gI3JlZ2lvbiBUZXh0XHJcblxyXG4kdGV4dC1mb250OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiRmb250LXdlaWdodC1ib2xkOiA3MDA7XHJcbiRmb250LXdlaWdodC1zZW1pLWJvbGQ6IDYwMDtcclxuJGZvbnQtd2VpZ2h0LXJlZ3VsYXI6IDUwMDtcclxuJGZvbnQtd2VpZ2h0LWxpZ2h0OiA0MDA7XHJcblxyXG4vLyAjZW5kcmVnaW9uXHJcblxyXG4vLyAjcmVnaW9uIEJ1dHRvbnNcclxuXHJcbiRidXR0b24tZm9udC13ZWlnaHQ6IDYwMDtcclxuXHJcbi8vICNlbmRyZWdpb25cclxuXHJcbi8vICNyZWdpb24gT3RoZXJcclxuXHJcbiRib3JkZXItcmFkaXVzOiA0cHg7XHJcblxyXG4vLyAjZW5kcmVnaW9uXHJcblxyXG4vLyAjZW5kcmVnaW9uXHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 6201:
/*!***************************************************************************************************!*\
  !*** ./src/app/features/shared/components/delivery-point-modal/delivery-point-modal.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeliveryPointModalComponent: () => (/* binding */ DeliveryPointModalComponent),
/* harmony export */   DeliveryPointModule: () => (/* binding */ DeliveryPointModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/legacy-dialog */ 1035);
/* harmony import */ var src_app_core_ngrx_reducers_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/ngrx/reducers/index */ 7032);
/* harmony import */ var src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/helpers/index.actions */ 5626);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/effects */ 1575);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 1527);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 274);
/* harmony import */ var src_app_core_ngrx_entities_delivery_points_delivery_points_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/ngrx/entities/delivery-points/delivery-points.actions */ 1246);
/* harmony import */ var _components_delivery_initial_delivery_initial_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/delivery-initial/delivery-initial.component */ 118);
/* harmony import */ var _components_delivery_form_delivery_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/delivery-form/delivery-form.component */ 7015);
/* harmony import */ var _angular_material_legacy_autocomplete__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/legacy-autocomplete */ 2718);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_material_legacy_progress_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/legacy-progress-spinner */ 3401);
/* harmony import */ var _angular_material_legacy_checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/legacy-checkbox */ 1612);
/* harmony import */ var _core_ngrx_brokers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/ngrx/brokers */ 1199);
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/google-maps */ 8684);
/* harmony import */ var _angular_magic_ngx_gp_autocomplete__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular-magic/ngx-gp-autocomplete */ 4711);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 7947);













//import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
//import { AgmCoreModule } from '@diegomvh/agm-core';












const _c0 = function () {
  return [];
};
function DeliveryPointModalComponent_app_delivery_initial_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-delivery-initial", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("$closeModalEvent", function DeliveryPointModalComponent_app_delivery_initial_1_Template_app_delivery_initial__closeModalEvent_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r3.handleCloseModal($event));
    })("$toggleIsCreateOwnEvent", function DeliveryPointModalComponent_app_delivery_initial_1_Template_app_delivery_initial__toggleIsCreateOwnEvent_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r5.handleToggleIsCreateOwn());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("publicDeliveryPoints", ctx_r0.hidePublicDeliveryPoints ? _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](2, _c0) : ctx_r0.publicDeliveryPoints)("userDeliveryPoints", ctx_r0.userDeliveryPoints);
  }
}
function DeliveryPointModalComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-delivery-form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("$closeModalEvent", function DeliveryPointModalComponent_ng_template_2_Template_app_delivery_form__closeModalEvent_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r6.handleCloseModal($event));
    })("$toggleIsCreateOwnEvent", function DeliveryPointModalComponent_ng_template_2_Template_app_delivery_form__toggleIsCreateOwnEvent_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r8.handleToggleIsCreateOwn());
    })("$createDeliveryPointEvent", function DeliveryPointModalComponent_ng_template_2_Template_app_delivery_form__createDeliveryPointEvent_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r9.handleCreateDeliveryPoint($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("isLoading", ctx_r2.isLoading)("isView", ctx_r2.isView)("showInitial", ctx_r2.showInitial)("fromProfile", ctx_r2.fromProfile)("deliveryPoint", ctx_r2.viewableDeliveryPoint);
  }
}
class DeliveryPointModalComponent {
  constructor(route, router, store, actions$, dialogRef, data) {
    this.route = route;
    this.router = router;
    this.store = store;
    this.actions$ = actions$;
    this.dialogRef = dialogRef;
    this.data = data;
    this.hidePublicDeliveryPoints = false;
    this.isCreateOwn = false;
    this.showInitial = true;
    this.fromProfile = false;
    this.isLoading = true;
    this.destroyed$ = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.deliveryPointId = this.data.deliveryPointId;
    this.showInitial = this.data.showInitial;
    this.isView = this.data.isView;
    this.fromProfile = this.data.fromProfile;
    this.hidePublicDeliveryPoints = this.data.hidePublicDeliveryPoints;
  }
  ngOnInit() {
    this.selectClient();
    this.route.queryParams.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.take)(1)).subscribe(params => {
      this.isCreateOwn = params.isCreateOwn === 'true';
    });
    this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.select)(src_app_core_ngrx_reducers_index__WEBPACK_IMPORTED_MODULE_0__.deliveryPointsSelectors.getManageDeliveryPointDetails), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroyed$)).subscribe(({
      userDeliveryPoints,
      publicDeliveryPoints
    }) => {
      this.userDeliveryPoints = userDeliveryPoints;
      this.publicDeliveryPoints = publicDeliveryPoints;
      if (this.deliveryPointId) {
        this.viewableDeliveryPoint = this.userDeliveryPoints.find(deliveryPoint => deliveryPoint.id === this.deliveryPointId);
      }
      if (userDeliveryPoints.length) this.showInitial = true;
      this.isLoading = false;
    });
    if (!this.userDeliveryPoints?.length || !this.publicDeliveryPoints?.length) {
      this.store.dispatch(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_1__.deliveryPointActions.ReqManagementData({
        executedTime: Date.now()
      }));
    }
  }
  ngOnDestroy() {
    this.destroyed$.next();
  }
  handleCloseModal(selectedDeliveryPointId) {
    this.dialogRef.close(selectedDeliveryPointId);
  }
  handleToggleIsCreateOwn() {
    this.isCreateOwn = !this.isCreateOwn;
    this.updateQueryParamsHelper();
  }
  handleCreateDeliveryPoint(deliveryPointData) {
    this.isLoading = true;
    const clientUid = this.client ? this.client.uid : '';
    this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_10__.ofType)(src_app_core_ngrx_entities_delivery_points_delivery_points_actions__WEBPACK_IMPORTED_MODULE_2__.CreateDeliveryPointSuccess), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.take)(1)).subscribe(payload => {
      if (payload) {
        this.handleCloseModal(payload.deliveryPoint.id);
        this.handleToggleIsCreateOwn();
        this.isLoading = false;
      }
    });
    this.store.dispatch(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_1__.deliveryPointActions.ReqCreateDeliveryPoint({
      deliveryPoint: deliveryPointData,
      executedTime: Date.now(),
      clientUid: clientUid
    }));
  }
  updateQueryParamsHelper() {
    let queryParams = this.isCreateOwn ? {
      isCreateOwn: this.isCreateOwn
    } : {};
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams,
      replaceUrl: true
    });
  }
  selectClient() {
    this.store.select(_core_ngrx_brokers__WEBPACK_IMPORTED_MODULE_5__.brokersSelectors.getCurrentClient).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroyed$)).subscribe(client => {
      this.client = client;
    });
  }
  static #_ = this.ɵfac = function DeliveryPointModalComponent_Factory(t) {
    return new (t || DeliveryPointModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_10__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_12__.MatLegacyDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_12__.MAT_LEGACY_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: DeliveryPointModalComponent,
    selectors: [["app-delivery-point-modal"]],
    decls: 4,
    vars: 2,
    consts: [[1, "l-container"], [3, "publicDeliveryPoints", "userDeliveryPoints", "$closeModalEvent", "$toggleIsCreateOwnEvent", 4, "ngIf", "ngIfElse"], ["deliveryForm", ""], [3, "publicDeliveryPoints", "userDeliveryPoints", "$closeModalEvent", "$toggleIsCreateOwnEvent"], [3, "isLoading", "isView", "showInitial", "fromProfile", "deliveryPoint", "$closeModalEvent", "$toggleIsCreateOwnEvent", "$createDeliveryPointEvent"]],
    template: function DeliveryPointModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, DeliveryPointModalComponent_app_delivery_initial_1_Template, 1, 3, "app-delivery-initial", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, DeliveryPointModalComponent_ng_template_2_Template, 1, 5, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showInitial && !ctx.isCreateOwn)("ngIfElse", _r1);
      }
    },
    dependencies: function () {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _components_delivery_initial_delivery_initial_component__WEBPACK_IMPORTED_MODULE_3__.DeliveryInitialComponent, _components_delivery_form_delivery_form_component__WEBPACK_IMPORTED_MODULE_4__.DeliveryFormComponent];
    },
    styles: [".l-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvc2hhcmVkL2NvbXBvbmVudHMvZGVsaXZlcnktcG9pbnQtbW9kYWwvZGVsaXZlcnktcG9pbnQtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLmwtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}
class DeliveryPointModule {
  static #_ = this.ɵfac = function DeliveryPointModule_Factory(t) {
    return new (t || DeliveryPointModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: DeliveryPointModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_material_legacy_autocomplete__WEBPACK_IMPORTED_MODULE_15__.MatLegacyAutocompleteModule, _angular_material_legacy_progress_spinner__WEBPACK_IMPORTED_MODULE_16__.MatLegacyProgressSpinnerModule, _angular_material_legacy_checkbox__WEBPACK_IMPORTED_MODULE_17__.MatLegacyCheckboxModule,
    // GooglePlaceModule,
    _angular_magic_ngx_gp_autocomplete__WEBPACK_IMPORTED_MODULE_18__.NgxGpAutocompleteModule, _angular_google_maps__WEBPACK_IMPORTED_MODULE_19__.GoogleMapsModule
    /*
    AgmCoreModule.forRoot({
        apiKey: 'AIzaSyAPz_4c60V_PBTnACgcWOz2nVPKpyN8DT8',
    }),*/]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](DeliveryPointModule, {
    declarations: [DeliveryPointModalComponent, _components_delivery_initial_delivery_initial_component__WEBPACK_IMPORTED_MODULE_3__.DeliveryInitialComponent, _components_delivery_form_delivery_form_component__WEBPACK_IMPORTED_MODULE_4__.DeliveryFormComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_material_legacy_autocomplete__WEBPACK_IMPORTED_MODULE_15__.MatLegacyAutocompleteModule, _angular_material_legacy_progress_spinner__WEBPACK_IMPORTED_MODULE_16__.MatLegacyProgressSpinnerModule, _angular_material_legacy_checkbox__WEBPACK_IMPORTED_MODULE_17__.MatLegacyCheckboxModule,
    // GooglePlaceModule,
    _angular_magic_ngx_gp_autocomplete__WEBPACK_IMPORTED_MODULE_18__.NgxGpAutocompleteModule, _angular_google_maps__WEBPACK_IMPORTED_MODULE_19__.GoogleMapsModule
    /*
    AgmCoreModule.forRoot({
        apiKey: 'AIzaSyAPz_4c60V_PBTnACgcWOz2nVPKpyN8DT8',
    }),*/],
    exports: [DeliveryPointModalComponent, _components_delivery_initial_delivery_initial_component__WEBPACK_IMPORTED_MODULE_3__.DeliveryInitialComponent, _components_delivery_form_delivery_form_component__WEBPACK_IMPORTED_MODULE_4__.DeliveryFormComponent]
  });
})();

/***/ })

}]);
//# sourceMappingURL=default-src_app_features_shared_components_delivery-point-modal_delivery-point-modal_component_ts.js.map