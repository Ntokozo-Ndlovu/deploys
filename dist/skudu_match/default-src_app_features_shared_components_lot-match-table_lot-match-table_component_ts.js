"use strict";
(self["webpackChunkskudu_match"] = self["webpackChunkskudu_match"] || []).push([["default-src_app_features_shared_components_lot-match-table_lot-match-table_component_ts"],{

/***/ 6150:
/*!*************************************************************************************************************!*\
  !*** ./src/app/features/negotiations/components/negotiation-edit-modal/negotiation-edit-modal.component.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NegotiationEditModalComponent: () => (/* binding */ NegotiationEditModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/legacy-dialog */ 1035);
/* harmony import */ var src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/helpers/index.actions */ 5626);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/effects */ 1575);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 1527);
/* harmony import */ var src_app_core_helpers_snackbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/helpers/snackbar */ 2179);
/* harmony import */ var src_app_core_helpers_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/helpers/constants */ 9487);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var _googlemaps_js_api_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @googlemaps/js-api-loader */ 8914);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/snack-bar */ 9409);
/* harmony import */ var _angular_material_legacy_autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/legacy-autocomplete */ 2718);
/* harmony import */ var _angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/legacy-core */ 773);
/* harmony import */ var _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/legacy-form-field */ 4352);
/* harmony import */ var _angular_material_legacy_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/legacy-progress-spinner */ 3401);
/* harmony import */ var _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/legacy-select */ 2198);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/datepicker */ 2226);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/stepper */ 6272);
/* harmony import */ var _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/legacy-button */ 8654);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/google-maps */ 8684);





























const _c0 = ["PriceMatStepper"];
const _c1 = ["PositionMatStepper"];
function NegotiationEditModalComponent_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
  }
}
function NegotiationEditModalComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, NegotiationEditModalComponent_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r7);
  }
}
function NegotiationEditModalComponent_ng_container_3_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
  }
}
function NegotiationEditModalComponent_ng_container_3_mat_option_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const filteredDeliveryPoint_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", filteredDeliveryPoint_r34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", filteredDeliveryPoint_r34.name, " ");
  }
}
const _c2 = function (a0, a1) {
  return {
    lat: a0,
    lng: a1
  };
};
const _c3 = function () {
  return {
    mapTypeId: "hybrid",
    gestureHandling: "cooperative"
  };
};
const _c4 = function (a0) {
  return {
    icon: a0
  };
};
function NegotiationEditModalComponent_ng_container_3_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 37)(1, "google-map", 38)(2, "map-marker", 39)(3, "map-info-window", null, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "map-marker", 41)(7, "map-info-window", null, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("center", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](11, _c2, ctx_r28.markers[0] == null ? null : ctx_r28.markers[0].location.lat, ctx_r28.markers[0] == null ? null : ctx_r28.markers[0].location.lng))("options", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](14, _c3))("fitBounds", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("position", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](15, _c2, ctx_r28.markers[0] == null ? null : ctx_r28.markers[0].location.lat, ctx_r28.markers[0] == null ? null : ctx_r28.markers[0].location.lng))("options", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](18, _c4, ctx_r28.isSeller ? ctx_r28.sellerIconUrl : ctx_r28.buyerIconUrl))("agmFitBounds", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r28.markers[0], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("center", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](20, _c2, ctx_r28.markers[1] == null ? null : ctx_r28.markers[1].location.lat, ctx_r28.markers[1] == null ? null : ctx_r28.markers[1].location.lng))("options", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](23, _c4, ctx_r28.isSeller ? ctx_r28.buyerIconUrl : ctx_r28.sellerIconUrl))("agmFitBounds", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r28.markers[1], " ");
  }
}
function NegotiationEditModalComponent_ng_container_3_mat_option_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const incoTerm_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", incoTerm_r37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](incoTerm_r37.name);
  }
}
function NegotiationEditModalComponent_ng_container_3_ng_container_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "mat-progress-spinner", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("diameter", 30);
  }
}
function NegotiationEditModalComponent_ng_container_3_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0, " Save ");
  }
}
function NegotiationEditModalComponent_ng_container_3_button_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NegotiationEditModalComponent_ng_container_3_button_33_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r39);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r38.handleMatchItem(ctx_r38.matchItem));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Match ", ctx_r33.matchItem, " ");
  }
}
function NegotiationEditModalComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 12)(2, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NegotiationEditModalComponent_ng_container_3_Template_img_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r41);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r40.handleCancelModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-horizontal-stepper", 15, 16)(7, "mat-step");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, NegotiationEditModalComponent_ng_container_3_ng_container_8_Template, 1, 0, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "mat-step")(10, "div", 17)(11, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Enter a new location ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 19)(14, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function NegotiationEditModalComponent_ng_container_3_Template_input_ngModelChange_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r41);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r42.searchTerm = $event);
    })("ngModelChange", function NegotiationEditModalComponent_ng_container_3_Template_input_ngModelChange_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r41);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r43.handleSearchTermChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "mat-autocomplete", 23, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("optionSelected", function NegotiationEditModalComponent_ng_container_3_Template_mat_autocomplete_optionSelected_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r41);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r44.handleSelectDeliveryPoint($event.option.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, NegotiationEditModalComponent_ng_container_3_mat_option_19_Template, 2, 2, "mat-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, NegotiationEditModalComponent_ng_container_3_div_20_Template, 10, 25, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](21, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div")(23, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "INCO Term ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 28)(26, "mat-select", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function NegotiationEditModalComponent_ng_container_3_Template_mat_select_ngModelChange_26_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r41);
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r45.lotDetails.incoTerm = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, NegotiationEditModalComponent_ng_container_3_mat_option_27_Template, 2, 2, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 31)(29, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NegotiationEditModalComponent_ng_container_3_Template_button_click_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r41);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r46.handleCloseModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, NegotiationEditModalComponent_ng_container_3_ng_container_30_Template, 2, 1, "ng-container", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, NegotiationEditModalComponent_ng_container_3_ng_template_31_Template, 1, 0, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, NegotiationEditModalComponent_ng_container_3_button_33_Template, 2, 1, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](18);
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](32);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass.l-header-extended", ctx_r1.isPrice || ctx_r1.isPosition);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Edit ", ctx_r1.matchItem, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r1.searchTerm)("matAutocomplete", _r26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.filteredDeliveryPoints);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](21, 17, ctx_r1.apiLoaded));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r1.lotDetails.incoTerm)("compareWith", ctx_r1.compareSelectionsHelper);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.incoTerms);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("w-100", ctx_r1.isMatch || ctx_r1.isPrice || ctx_r1.isPosition);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("w-100", ctx_r1.isPrice || ctx_r1.isPosition);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.isActionLoading)("ngIfElse", _r31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.isMatch);
  }
}
function NegotiationEditModalComponent_ng_container_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
  }
}
function NegotiationEditModalComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, NegotiationEditModalComponent_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r7);
  }
}
function NegotiationEditModalComponent_ng_container_5_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
  }
}
function NegotiationEditModalComponent_ng_container_5_ng_container_15_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NegotiationEditModalComponent_ng_container_5_ng_container_15_div_1_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r61);
      const priceType_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r59.handleTogglePrice(priceType_r57));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const priceType_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("l-active", ctx_r58.lotDetails.priceType.id === priceType_r57.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", priceType_r57.name, " ");
  }
}
function NegotiationEditModalComponent_ng_container_5_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, NegotiationEditModalComponent_ng_container_5_ng_container_15_div_1_Template, 2, 3, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const priceType_r57 = ctx.$implicit;
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx_r50.safexMonths == null ? null : ctx_r50.safexMonths.length) || priceType_r57.id === 2);
  }
}
function NegotiationEditModalComponent_ng_container_5_div_16_p_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r63.isSeller ? "Buyer Month - " + (ctx_r63.oppLotDetails.month == null ? null : ctx_r63.oppLotDetails.month.name) : "Seller Month - " + (ctx_r63.oppLotDetails.month == null ? null : ctx_r63.oppLotDetails.month.name), " ");
  }
}
function NegotiationEditModalComponent_ng_container_5_div_16_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" The ", ctx_r65.isSeller ? "Buyer" : "Seller", " has selected a fixed price. ");
  }
}
function NegotiationEditModalComponent_ng_container_5_div_16_mat_option_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const month_r67 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", month_r67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", month_r67 == null ? null : month_r67.name, " ");
  }
}
function NegotiationEditModalComponent_ng_container_5_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 65)(1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, NegotiationEditModalComponent_ng_container_5_div_16_p_3_Template, 2, 1, "p", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, NegotiationEditModalComponent_ng_container_5_div_16_ng_template_4_Template, 2, 1, "ng-template", null, 69, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 70)(7, "mat-select", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function NegotiationEditModalComponent_ng_container_5_div_16_Template_mat_select_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r69);
      const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r68.lotDetails.month = $event);
    })("selectionChange", function NegotiationEditModalComponent_ng_container_5_div_16_Template_mat_select_selectionChange_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r69);
      const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r70.handleCropChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "h2", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, NegotiationEditModalComponent_ng_container_5_div_16_mat_option_9_Template, 2, 2, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 73)(11, "div", 50)(12, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NegotiationEditModalComponent_ng_container_5_div_16_Template_div_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r69);
      const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r71.handleToggleSafexOption("PLUS"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, " SAFEX PLUS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NegotiationEditModalComponent_ng_container_5_div_16_Template_div_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r69);
      const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r72.handleToggleSafexOption("MINUS"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, " SAFEX MINUS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](5);
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r51.oppLotDetails.priceType.id === 1)("ngIfElse", _r64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r51.lotDetails.month)("compareWith", ctx_r51.compareSelectionsHelper);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r51.safexMonths);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("l-active", ctx_r51.lotDetails.exchangeValue === "PLUS");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("l-active", ctx_r51.lotDetails.exchangeValue === "MINUS");
  }
}
function NegotiationEditModalComponent_ng_container_5_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 74)(1, "p", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Enter a price greater than 0.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function NegotiationEditModalComponent_ng_container_5_ng_container_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "mat-progress-spinner", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("diameter", 30);
  }
}
function NegotiationEditModalComponent_ng_container_5_ng_template_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0, " Save ");
  }
}
function NegotiationEditModalComponent_ng_container_5_button_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NegotiationEditModalComponent_ng_container_5_button_37_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r74);
      const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r73.handleMatchItem(ctx_r73.matchItem));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Match ", ctx_r56.matchItem, " ");
  }
}
function NegotiationEditModalComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 45)(2, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NegotiationEditModalComponent_ng_container_5_Template_img_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r76);
      const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r75.handleCancelModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-horizontal-stepper", 46, 47)(7, "mat-step");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, NegotiationEditModalComponent_ng_container_5_ng_container_8_Template, 1, 0, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "mat-step")(10, "div", 17)(11, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Price Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 49)(14, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, NegotiationEditModalComponent_ng_container_5_ng_container_15_Template, 2, 1, "ng-container", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, NegotiationEditModalComponent_ng_container_5_div_16_Template, 16, 9, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 53)(18, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 49)(21, "div", 54)(22, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function NegotiationEditModalComponent_ng_container_5_Template_input_ngModelChange_22_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r76);
      const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r77.lotDetails.price = $event);
    })("ngModelChange", function NegotiationEditModalComponent_ng_container_5_Template_input_ngModelChange_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r76);
      const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r78.handleShowPriceHint(ctx_r78.lotDetails));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "img", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "p", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "ZAR");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, NegotiationEditModalComponent_ng_container_5_div_27_Template, 3, 0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](29, "img", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 31)(33, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NegotiationEditModalComponent_ng_container_5_Template_button_click_33_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r76);
      const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r79.handleCloseModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, NegotiationEditModalComponent_ng_container_5_ng_container_34_Template, 2, 1, "ng-container", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](35, NegotiationEditModalComponent_ng_container_5_ng_template_35_Template, 1, 0, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](37, NegotiationEditModalComponent_ng_container_5_button_37_Template, 2, 1, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](36);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r3.isPrice || ctx_r3.isPosition ? "l-header-extended" : "l-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Edit ", ctx_r3.getCorrectMatchItemNameHelper(ctx_r3.matchItem), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mb-3", ctx_r3.lotDetails.priceType.id === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r3.priceTypes);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.lotDetails.priceType.id === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r3.lotDetails.priceType.id === 1 ? "Basis" : null, " Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r3.lotDetails.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.showPriceHint);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r3.isSeller ? "Buyer - " + ctx_r3.lotMatch.buyerDetails.priceType.name + " " + ctx_r3.basisValue + " R" + ctx_r3.lotMatch.buyerDetails.price : "Seller - " + ctx_r3.lotMatch.sellerDetails.priceType.name + " " + ctx_r3.basisValue + " R" + ctx_r3.lotMatch.sellerDetails.price, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("w-100", ctx_r3.isMatch || ctx_r3.isPrice || ctx_r3.isPosition);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("w-100", ctx_r3.isPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.isActionLoading)("ngIfElse", _r54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r3.isMatch);
  }
}
function NegotiationEditModalComponent_ng_container_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
  }
}
function NegotiationEditModalComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, NegotiationEditModalComponent_ng_container_6_ng_container_1_Template, 1, 0, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r7);
  }
}
function NegotiationEditModalComponent_ng_container_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
  }
}
function NegotiationEditModalComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, NegotiationEditModalComponent_ng_container_7_ng_container_1_Template, 1, 0, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r7);
  }
}
function NegotiationEditModalComponent_ng_container_8_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
  }
}
function NegotiationEditModalComponent_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, NegotiationEditModalComponent_ng_container_8_ng_container_1_Template, 1, 0, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r7);
  }
}
function NegotiationEditModalComponent_ng_template_9_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 90)(1, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NegotiationEditModalComponent_ng_template_9_div_0_Template_img_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r100);
      const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r99.handleCancelModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Edit ", ctx_r83.matchItem === "Product" ? ctx_r83.matchItem + " Packaging" : ctx_r83.matchItem, "");
  }
}
function NegotiationEditModalComponent_ng_template_9_h2_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h2", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r84.secondOpposingValue);
  }
}
function NegotiationEditModalComponent_ng_template_9_img_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 92);
  }
}
function NegotiationEditModalComponent_ng_template_9_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 93);
  }
}
function NegotiationEditModalComponent_ng_template_9_ng_container_21_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
  }
}
function NegotiationEditModalComponent_ng_template_9_ng_container_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, NegotiationEditModalComponent_ng_template_9_ng_container_21_ng_container_1_Template, 1, 0, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r9);
  }
}
function NegotiationEditModalComponent_ng_template_9_ng_container_22_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
  }
}
function NegotiationEditModalComponent_ng_template_9_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, NegotiationEditModalComponent_ng_template_9_ng_container_22_ng_container_1_Template, 1, 0, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r11);
  }
}
function NegotiationEditModalComponent_ng_template_9_ng_container_23_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
  }
}
function NegotiationEditModalComponent_ng_template_9_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, NegotiationEditModalComponent_ng_template_9_ng_container_23_ng_container_1_Template, 1, 0, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r13);
  }
}
function NegotiationEditModalComponent_ng_template_9_ng_container_24_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
  }
}
function NegotiationEditModalComponent_ng_template_9_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, NegotiationEditModalComponent_ng_template_9_ng_container_24_ng_container_1_Template, 1, 0, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r15);
  }
}
function NegotiationEditModalComponent_ng_template_9_ng_container_25_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
  }
}
function NegotiationEditModalComponent_ng_template_9_ng_container_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, NegotiationEditModalComponent_ng_template_9_ng_container_25_ng_container_1_Template, 1, 0, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r17);
  }
}
function NegotiationEditModalComponent_ng_template_9_ng_container_26_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
  }
}
function NegotiationEditModalComponent_ng_template_9_ng_container_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, NegotiationEditModalComponent_ng_template_9_ng_container_26_ng_container_1_Template, 1, 0, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r19);
  }
}
function NegotiationEditModalComponent_ng_template_9_ng_container_27_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
  }
}
function NegotiationEditModalComponent_ng_template_9_ng_container_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, NegotiationEditModalComponent_ng_template_9_ng_container_27_ng_container_1_Template, 1, 0, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r21);
  }
}
function NegotiationEditModalComponent_ng_template_9_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r95.infoBoxText, " ");
  }
}
function NegotiationEditModalComponent_ng_template_9_button_30_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "mat-progress-spinner", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("diameter", 30);
  }
}
function NegotiationEditModalComponent_ng_template_9_button_30_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0, " Save ");
  }
}
function NegotiationEditModalComponent_ng_template_9_button_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r112 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NegotiationEditModalComponent_ng_template_9_button_30_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r112);
      const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r111.handleCloseModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, NegotiationEditModalComponent_ng_template_9_button_30_ng_container_1_Template, 2, 1, "ng-container", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, NegotiationEditModalComponent_ng_template_9_button_30_ng_template_2_Template, 1, 0, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r109 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);
    const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("w-100", ctx_r96.isPrice || ctx_r96.isPosition)("g-btn-disabled", !ctx_r96.isFormValidHelper());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx_r96.isFormValidHelper());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r96.isActionLoading)("ngIfElse", _r109);
  }
}
function NegotiationEditModalComponent_ng_template_9_button_31_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "mat-progress-spinner", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("diameter", 30);
  }
}
function NegotiationEditModalComponent_ng_template_9_button_31_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0, " Save ");
  }
}
function NegotiationEditModalComponent_ng_template_9_button_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r117 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NegotiationEditModalComponent_ng_template_9_button_31_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r117);
      const ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r116.handleClosePeriodModal({
        dateFrom: ctx_r116.lotDetails.dateFrom,
        dateTo: ctx_r116.lotDetails.dateTo
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, NegotiationEditModalComponent_ng_template_9_button_31_ng_container_1_Template, 2, 1, "ng-container", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, NegotiationEditModalComponent_ng_template_9_button_31_ng_template_2_Template, 1, 0, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r114 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);
    const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("g-btn-disabled", !ctx_r97.isFormValidHelper());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx_r97.isFormValidHelper());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r97.isActionLoading)("ngIfElse", _r114);
  }
}
function NegotiationEditModalComponent_ng_template_9_button_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r119 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NegotiationEditModalComponent_ng_template_9_button_32_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r119);
      const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r118.handleMatchItem(ctx_r118.matchItem));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Match ", ctx_r98.getCorrectMatchItemNameHelper(ctx_r98.matchItem), " ");
  }
}
const _c5 = function (a0) {
  return {
    "justify-content-start": a0
  };
};
function NegotiationEditModalComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, NegotiationEditModalComponent_ng_template_9_div_0_Template, 4, 1, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 77)(2, "div", 78)(3, "div", 79)(4, "p", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 81)(7, "h2", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, NegotiationEditModalComponent_ng_template_9_h2_9_Template, 2, 1, "h2", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, NegotiationEditModalComponent_ng_template_9_img_12_Template, 1, 0, "img", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, NegotiationEditModalComponent_ng_template_9_ng_template_13_Template, 1, 0, "ng-template", null, 86, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 78)(17, "div", 79)(18, "p", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](20, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, NegotiationEditModalComponent_ng_template_9_ng_container_21_Template, 2, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, NegotiationEditModalComponent_ng_template_9_ng_container_22_Template, 2, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, NegotiationEditModalComponent_ng_template_9_ng_container_23_Template, 2, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, NegotiationEditModalComponent_ng_template_9_ng_container_24_Template, 2, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, NegotiationEditModalComponent_ng_template_9_ng_container_25_Template, 2, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, NegotiationEditModalComponent_ng_template_9_ng_container_26_Template, 2, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, NegotiationEditModalComponent_ng_template_9_ng_container_27_Template, 2, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, NegotiationEditModalComponent_ng_template_9_div_28_Template, 4, 1, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, NegotiationEditModalComponent_ng_template_9_button_30_Template, 4, 7, "button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, NegotiationEditModalComponent_ng_template_9_button_31_Template, 4, 5, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, NegotiationEditModalComponent_ng_template_9_button_32_Template, 2, 1, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](14);
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r8.isPrice && !ctx_r8.isPosition);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r8.isPrice || ctx_r8.isPosition ? "l-content-extended" : "l-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r8.isSeller ? "l-buyer-bg" : "l-seller-bg");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r8.isSeller ? "l-buyer-text" : "l-seller-text");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" The ", ctx_r8.isSeller ? "Buyer" : "Seller", " chose ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](27, _c5, ctx_r8.secondOpposingValue));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r8.opposingValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r8.secondOpposingValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r8.isMatch)("ngIfElse", _r86);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r8.isSeller ? "l-seller-bg" : "l-buyer-bg");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r8.isSeller ? "l-seller-text" : "l-buyer-text");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Your current ", ctx_r8.matchItem === "Product" ? ctx_r8.matchItem.toLocaleLowerCase() + " packaging" : ctx_r8.matchItem.toLocaleLowerCase(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitch", ctx_r8.matchItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "Position");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "Period");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "ContractPrice");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "Payment");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "Quality");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r8.isMatch);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("w-100", ctx_r8.isMatch || ctx_r8.isPrice || ctx_r8.isPosition);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r8.matchItem !== "Period");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r8.matchItem === "Period");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r8.isMatch);
  }
}
function NegotiationEditModalComponent_ng_template_11_mat_option_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const packaging_r121 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", packaging_r121);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](packaging_r121.name);
  }
}
function NegotiationEditModalComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r123 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 28)(1, "mat-select", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function NegotiationEditModalComponent_ng_template_11_Template_mat_select_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r123);
      const ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r122.lotDetails.packaging = $event);
    })("selectionChange", function NegotiationEditModalComponent_ng_template_11_Template_mat_select_selectionChange_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r123);
      const ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r124.handleProductChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, NegotiationEditModalComponent_ng_template_11_mat_option_2_Template, 2, 2, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r10.lotDetails.packaging)("compareWith", ctx_r10.compareSelectionsHelper);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r10.packaging);
  }
}
function NegotiationEditModalComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r126 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NegotiationEditModalComponent_ng_template_13_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r126);
      const ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r125.handleChangePositionStep());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "input", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function NegotiationEditModalComponent_ng_template_13_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r126);
      const ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r127.lotDetails.deliveryPoint.name = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r12.lotDetails.deliveryPoint.name)("readOnly", true);
  }
}
function NegotiationEditModalComponent_ng_template_15_mat_error_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Invalid Period: Start Date Should Be Before End Date AND End Date Should Be After Today's Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function NegotiationEditModalComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r132 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 53)(1, "div", 101)(2, "div", 102)(3, "label", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Period Start");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NegotiationEditModalComponent_ng_template_15_Template_div_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r132);
      const _r128 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](8);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r128.open());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "input", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function NegotiationEditModalComponent_ng_template_15_Template_input_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r132);
      const ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r133.lotDetails.dateFrom = $event);
    })("dateChange", function NegotiationEditModalComponent_ng_template_15_Template_input_dateChange_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r132);
      const ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r134.handlePeriodChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "mat-datepicker", 106, 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NegotiationEditModalComponent_ng_template_15_Template_div_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r132);
      const _r129 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](15);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r129.open());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "label", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Period End");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 49)(13, "input", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function NegotiationEditModalComponent_ng_template_15_Template_input_ngModelChange_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r132);
      const ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r136.lotDetails.dateTo = $event);
    })("dateChange", function NegotiationEditModalComponent_ng_template_15_Template_input_dateChange_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r132);
      const ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r137.handlePeriodChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "mat-datepicker", 110, 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, NegotiationEditModalComponent_ng_template_15_mat_error_16_Template, 2, 0, "mat-error", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r128 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](8);
    const _r129 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](15);
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r14.lotDetails.dateFrom)("matDatepicker", _r128);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r14.lotDetails.dateTo)("matDatepicker", _r129);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("startAt", ctx_r14.lotDetails.dateFrom);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r14.isPeriodValid);
  }
}
function NegotiationEditModalComponent_ng_template_17_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function NegotiationEditModalComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r140 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NegotiationEditModalComponent_ng_template_17_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r140);
      const ctx_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r139.handleChangePriceStep());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, NegotiationEditModalComponent_ng_template_17_p_1_Template, 2, 0, "p", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "input", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function NegotiationEditModalComponent_ng_template_17_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r140);
      const ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r141.lotDetails.price = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r16.lotDetails.priceType.id === 1 && ctx_r16.lotDetails.exchangeValue === "MINUS");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r16.lotDetails.price);
  }
}
function NegotiationEditModalComponent_ng_template_19_mat_option_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 120)(1, "h2", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const paymentTerm_r143 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", paymentTerm_r143);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", paymentTerm_r143.name, " ");
  }
}
function NegotiationEditModalComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r145 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 28)(1, "mat-select", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function NegotiationEditModalComponent_ng_template_19_Template_mat_select_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r145);
      const ctx_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r144.lotDetails.payment = $event);
    })("selectionChange", function NegotiationEditModalComponent_ng_template_19_Template_mat_select_selectionChange_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r145);
      const ctx_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r146.handlePaymentChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h2", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, NegotiationEditModalComponent_ng_template_19_mat_option_3_Template, 3, 2, "mat-option", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r18.lotDetails.payment)("compareWith", ctx_r18.compareSelectionsHelper);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r18.paymentTerms);
  }
}
function NegotiationEditModalComponent_ng_template_21_mat_option_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const unitOfMeasure_r149 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", unitOfMeasure_r149);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](unitOfMeasure_r149.name);
  }
}
function NegotiationEditModalComponent_ng_template_21_mat_error_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Invalid Quantity: Quantity Must Be Less Than Or Equal To 1000000 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function NegotiationEditModalComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r151 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 121)(1, "div", 122)(2, "input", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function NegotiationEditModalComponent_ng_template_21_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r151);
      const ctx_r150 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r150.lotDetails.quantity = $event);
    })("keyup", function NegotiationEditModalComponent_ng_template_21_Template_input_keyup_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r151);
      const ctx_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r152.handleQuantityChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 124)(4, "mat-select", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function NegotiationEditModalComponent_ng_template_21_Template_mat_select_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r151);
      const ctx_r153 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r153.lotDetails.unitOfMeasure = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, NegotiationEditModalComponent_ng_template_21_mat_option_5_Template, 2, 2, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, NegotiationEditModalComponent_ng_template_21_mat_error_6_Template, 2, 0, "mat-error", 112);
  }
  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r20.lotDetails.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r20.lotDetails.unitOfMeasure)("compareWith", ctx_r20.compareSelectionsHelper);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r20.unitsOfMeasure);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r20.isQuantityValid);
  }
}
function NegotiationEditModalComponent_ng_template_23_mat_option_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const cropGrade_r155 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", cropGrade_r155);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](cropGrade_r155.name);
  }
}
function NegotiationEditModalComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r157 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 28)(1, "mat-select", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function NegotiationEditModalComponent_ng_template_23_Template_mat_select_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r157);
      const ctx_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r156.lotDetails.grade = $event);
    })("selectionChange", function NegotiationEditModalComponent_ng_template_23_Template_mat_select_selectionChange_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r157);
      const ctx_r158 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r158.handleQualityChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, NegotiationEditModalComponent_ng_template_23_mat_option_2_Template, 2, 2, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r22.lotDetails.grade)("compareWith", ctx_r22.compareSelectionsHelper);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r22.cropGrades);
  }
}
class NegotiationEditModalComponent {
  constructor(loader, dialogRef, data, store, snackbar, actions$) {
    this.loader = loader;
    this.dialogRef = dialogRef;
    this.data = data;
    this.store = store;
    this.snackbar = snackbar;
    this.actions$ = actions$;
    this.sellerIconUrl = src_app_core_helpers_constants__WEBPACK_IMPORTED_MODULE_2__.sellerDeliveryPointIcon;
    this.buyerIconUrl = src_app_core_helpers_constants__WEBPACK_IMPORTED_MODULE_2__.buyerDeliveryPointIcon;
    this.packaging = [];
    this.paymentTerms = [];
    this.unitsOfMeasure = [];
    this.cropGrades = [];
    this.priceTypes = [];
    this.safexMonths = [];
    this.secondOpposingValue = null;
    this.isMatch = false;
    this.isPrice = false;
    this.isPosition = false;
    this.showPriceHint = false;
    this.isFullMatch = false;
    this.monthIndex = 0;
    this.incoTerms = [];
    this.isActionLoading = false;
    this.basisValue = '';
    this.isQuantityValid = true;
    this.isPeriodValid = true;
    this.markers = [];
    this.options = {
      types: ['(regions)']
    };
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
    this.matchItem = this.data.matchItem;
    this.isPrice = this.matchItem.split(/(?=[A-Z])/).join('-') === 'Contract-Price';
    this.isPosition = this.matchItem === 'Position';
    this.lotMatch = this.data.lotMatch;
    this.packaging = this.data.formData.packaging;
    this.paymentTerms = this.data.formData.paymentTerms;
    this.unitsOfMeasure = this.data.formData.unitsOfMeasure;
    this.priceTypes = this.data.formData.priceTypes;
    this.safexMonths = this.data.formData.safexMonths;
    this.cropGrades = this.data.formData.cropGrades;
    this.incoTerms = this.data.formData.incoTerms;
    this.publicDeliveryPoints = this.data.formData.deliveryPoints;
    this.isSeller = this.lotMatch.userType === 'Sell';
    if (this.lotMatch.userType === 'Sell') {
      this.lotDetails = this.lotMatch.sellerDetails;
      this.oppLotDetails = this.lotMatch.buyerDetails;
    } else {
      this.lotDetails = this.lotMatch.buyerDetails;
      this.oppLotDetails = this.lotMatch.sellerDetails;
    }
    this.locationType = this.lotDetails.deliveryPoint.locationType;
    if (!this.data.formData.safexMonths.length) {
      this.lotDetails.month = null;
      this.oppLotDetails.month = null;
      this.handleTogglePrice(this.data.formData.priceTypes[1]);
    }
    this.oldDeliveryPoint = this.lotDetails.deliveryPoint;
    this.oldPeriod = {
      from: this.lotDetails.dateFrom,
      to: this.lotDetails.dateTo
    };
    this.handleUpdateMarkers();
    this[`getOpposing${this.matchItem.split('-').join('')}Helper`]();
    this[`is${this.matchItem.split('-').join('')}MatchHelper`]();
    if (this.oppLotDetails?.exchangeValue === 'PLUS') {
      this.basisValue = '+';
    }
    if (this.oppLotDetails?.exchangeValue === 'MINUS') {
      this.basisValue = '-';
    }
    if (this.oppLotDetails?.exchangeValue === 'PLUS' && this.oppLotDetails.priceType.name === 'Fixed Price') {
      this.basisValue = ' ';
    }
    this.infoBoxText = this.getInfoBoxTextHelper(this.matchItem.split('-').join(''));
  }
  //#region Handlers
  handleTogglePrice(priceType) {
    if (priceType.id === 2) {
      this.lotDetails.month = null;
      this.lotDetails.exchangeValue = 'PLUS';
    } else {
      this.handleToggleSafexOption('MINUS');
      this.monthIndex = 0;
      this.lotDetails.month = this.safexMonths[this.monthIndex];
    }
    if (this.lotDetails.priceType !== priceType) this.lotDetails.priceType = priceType;
    this.isMatch = this.lotDetails.priceType === this.oppLotDetails.priceType;
  }
  handleToggleSafexOption(option) {
    this.lotDetails.exchangeValue = option;
  }
  handleChangePriceStep() {
    this.priceMatStepper.next();
  }
  handleChangePositionStep() {
    this.positionMatStepper.next();
  }
  handleShowPriceHint(userLot) {
    this.showPriceHint = this.lotDetails.price === 0 && !this.showPriceHint;
    this.isMatch = userLot.price === this.oppLotDetails.price;
  }
  handleCropChange() {
    this.store.dispatch(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_0__.cropActions.ReqCropMonthsAndGrades({
      cropId: this.lotDetails.crop.id,
      exchangeId: this.lotDetails.exchange.id
    }));
  }
  handleLocationSelection($event) {
    this.lotDetails.deliveryPoint.town = $event.formatted_address;
    this.lotDetails.deliveryPoint.googlePlaceId = $event.place_id;
    this.lotDetails.deliveryPoint.location.lat = $event.geometry.location.lat();
    this.lotDetails.deliveryPoint.location.lng = $event.geometry.location.lng();
  }
  handleSearchTermChange(searchTerm) {
    this.isMatch = searchTerm === this.oppLotDetails.deliveryPoint.town;
    if (typeof searchTerm === 'string') {
      this.filteredDeliveryPoints = this.publicDeliveryPoints.filter(filtered => {
        return filtered.name.toLocaleLowerCase().includes(this.searchTerm.toLocaleLowerCase());
      });
    }
  }
  handleSelectDeliveryPoint(deliveryPoint) {
    this.lotDetails.deliveryPoint = deliveryPoint;
    this.selectedDeliveryPointId = deliveryPoint.id;
    this.searchTerm = deliveryPoint.name;
    this.handleUpdateMarkers();
  }
  handleSearchIconClick() {
    this.searchTerm = '';
    this.selectedDeliveryPointId = null;
    this.handleUpdateMarkers();
  }
  handleMatchDeliveryPoint(oppDeliveryPoint) {
    this.lotDetails.deliveryPoint = oppDeliveryPoint;
    this.lotDetails.incoTerm = this.oppLotDetails.incoTerm;
    this.handleUpdateMatchMarkers();
  }
  handleMatchItem(matchItem) {
    this.isMatch = true;
    if (matchItem === 'Product') {
      this.lotDetails.packaging = this.oppLotDetails.packaging;
    }
    if (matchItem === 'ContractPrice') {
      this.lotDetails.price = this.oppLotDetails.price;
      this.lotDetails.month = this.oppLotDetails.month;
      this.lotDetails.exchange = this.oppLotDetails.exchange;
      this.lotDetails.exchangeValue = this.oppLotDetails.exchangeValue;
      this.lotDetails.priceType = this.oppLotDetails.priceType;
    }
    if (matchItem === 'Payment') {
      this.lotDetails.payment = this.oppLotDetails.payment;
    }
    if (matchItem === 'Quantity') {
      this.lotDetails.quantity = this.oppLotDetails.quantity;
      this.lotDetails.unitOfMeasure = this.oppLotDetails.unitOfMeasure;
      this.handleQuantityChange();
    }
    if (matchItem === 'Quality') {
      this.lotDetails.grade = this.oppLotDetails.grade;
    }
    if (matchItem === 'Period') {
      this.lotDetails.dateFrom = this.oppLotDetails.dateFrom;
      this.lotDetails.dateTo = this.oppLotDetails.dateTo;
      this.handlePeriodChange();
    }
    if (matchItem === 'Position') {
      this.handleMatchDeliveryPoint(this.oppLotDetails.deliveryPoint);
    }
  }
  handleCloseModal() {
    if (this.isFormValidHelper()) {
      this.handleUpdateMarkers();
      if (!this.isMatchPeriod && this.matchItem === 'Period') {
        this.transformDateToUtcHelper(this.lotDetails.dateFrom);
        this.transformDateToUtcHelper(this.lotDetails.dateTo);
      }
      if (this.lotMatch.userType === 'Sell') {
        this.lotMatch.sellerDetails = this.lotDetails;
        this.lotMatch.buyerDetails = this.oppLotDetails;
      } else {
        this.lotMatch.buyerDetails = this.lotDetails;
        this.lotMatch.sellerDetails = this.oppLotDetails;
      }
      this.handleSaveIteration();
      this.dialogRef.close(this.lotMatch);
    }
  }
  handleSaveIteration() {
    this.isActionLoading = true;
    const lotMatch = this.lotMatch;
    this.store.dispatch(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_0__.matchActions.ReqUpdateLotMatch({
      lotMatch: lotMatch
    }));
    this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.ofType)(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_0__.matchActions.UpdateLotMatchSuccess, src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_0__.matchActions.UpdateLotMatchFail), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.take)(1)).subscribe(() => {
      this.isActionLoading = false;
      this.dialogRef.close(this.lotMatch);
    });
  }
  handleCancelModal() {
    this.dialogRef.close(null);
  }
  handleClosePeriodModal(period) {
    if (period.dateFrom === null || period.dateTo === null) {
      this.snackbar.open('Enter a valid date range', 'CLOSE', src_app_core_helpers_snackbar__WEBPACK_IMPORTED_MODULE_1__.errorConfig);
    } else {
      this.handleCloseModal();
    }
  }
  handleUpdateMarkers() {
    this.markers = [this.lotDetails.deliveryPoint, this.oppLotDetails.deliveryPoint];
  }
  handleUpdateMatchMarkers() {
    this.markers = [this.oppLotDetails.deliveryPoint];
  }
  handlePeriodChange() {
    this.isPeriodValid = this.lotDetails.dateFrom < this.lotDetails.dateTo && new Date() < this.lotDetails.dateTo;
    this.isMatch = this.getShortDateHelper(this.lotMatch.sellerDetails.dateFrom) === this.getShortDateHelper(this.lotMatch.buyerDetails.dateFrom) && this.getShortDateHelper(this.lotMatch.sellerDetails.dateTo) === this.getShortDateHelper(this.lotMatch.buyerDetails.dateTo);
  }
  handleQuantityChange() {
    this.isQuantityValid = this.lotDetails.quantity <= 1000000;
    this.isMatch = this.lotDetails.quantity === this.oppLotDetails.quantity;
  }
  handleQualityChange() {
    this.isMatch = this.lotDetails.grade?.id === this.oppLotDetails.grade?.id;
  }
  handlePaymentChange() {
    this.isMatch = this.lotDetails.payment?.id === this.oppLotDetails.payment?.id;
  }
  handleProductChange() {
    this.isMatch = this.lotDetails.packaging?.id === this.oppLotDetails.packaging?.id;
  }
  //#endregion
  //#region  getOpposingValues
  getOpposingProductHelper() {
    this.opposingValue = this.oppLotDetails.packaging ? this.oppLotDetails.packaging.name : 'No packaging chosen';
  }
  getOpposingPositionHelper() {
    this.opposingValue = this.oppLotDetails.deliveryPoint.name;
  }
  getOpposingPeriodHelper() {
    this.isSeller ? this.opposingValue = this.getShortDateHelper(this.lotMatch.buyerDetails.dateFrom) + ' - ' + this.getShortDateHelper(this.lotMatch.buyerDetails.dateTo) : this.opposingValue = this.getShortDateHelper(this.lotMatch.sellerDetails.dateFrom) + ' - ' + this.getShortDateHelper(this.lotMatch.sellerDetails.dateTo);
  }
  getOpposingPaymentHelper() {
    this.opposingValue = this.oppLotDetails.payment.name;
  }
  getOpposingQuantityHelper() {
    this.opposingValue = this.oppLotDetails.quantity;
    this.secondOpposingValue = this.oppLotDetails.unitOfMeasure.name;
  }
  getOpposingQualityHelper() {
    this.opposingValue = this.oppLotDetails.grade.name;
  }
  getOpposingContractPriceHelper() {
    this.oppLotDetails.priceType.id === 1 && this.oppLotDetails.exchangeValue === 'MINUS' ? this.opposingValue = `-${this.oppLotDetails.price}` : this.opposingValue = this.oppLotDetails.price;
  }
  //#endregion
  //#region isMatch Helpers
  isProductMatchHelper() {
    this.isMatch = this.lotMatch.sellerDetails.packaging?.id === this.lotMatch.buyerDetails.packaging?.id;
  }
  isPositionMatchHelper() {
    this.isMatch = this.lotMatch.sellerDetails.deliveryPoint.id === this.lotMatch.buyerDetails.deliveryPoint.id && this.lotMatch.sellerDetails.incoTerm.id === this.lotMatch.buyerDetails.incoTerm.id;
  }
  isPeriodMatchHelper() {
    this.isMatch = this.getShortDateHelper(this.lotMatch.sellerDetails.dateFrom) === this.getShortDateHelper(this.lotMatch.buyerDetails.dateFrom) && this.getShortDateHelper(this.lotMatch.sellerDetails.dateTo) === this.getShortDateHelper(this.lotMatch.buyerDetails.dateTo);
  }
  isPaymentMatchHelper() {
    this.isMatch = this.lotMatch.sellerDetails.payment.id === this.lotMatch.buyerDetails.payment.id;
  }
  isQuantityMatchHelper() {
    this.isMatch = this.lotMatch.sellerDetails.quantity === this.lotMatch.buyerDetails.quantity && this.lotMatch.sellerDetails.unitOfMeasure.id === this.lotMatch.buyerDetails.unitOfMeasure.id;
  }
  isQualityMatchHelper() {
    this.isMatch = this.lotMatch.sellerDetails.grade.id === this.lotMatch.buyerDetails.grade.id;
  }
  isContractPriceMatchHelper() {
    this.isMatch = this.lotMatch.sellerDetails.price === this.lotMatch.buyerDetails.price && this.lotMatch.sellerDetails.priceType.id === this.lotMatch.buyerDetails.priceType.id && this.lotMatch.sellerDetails.exchange.id === this.lotMatch.buyerDetails.exchange.id && this.lotMatch.sellerDetails.exchangeValue === this.lotMatch.buyerDetails.exchangeValue && this.lotMatch.sellerDetails.month?.id === this.lotMatch.buyerDetails.month?.id;
  }
  //#endregion
  compareSelectionsHelper(selection1, selection2) {
    return selection1.id === selection2?.id;
  }
  isFormValidHelper() {
    if (this.matchItem === 'Quantity') return this.isQuantityValid;else if (this.matchItem === 'Period') return this.isPeriodValid;else return true;
  }
  getInfoBoxTextHelper(matchItem) {
    const finalMatchItem = matchItem === 'Quantity' ? 'quantities' : matchItem === 'Quality' ? 'qualities' : matchItem === 'Position' ? 'positions (or INCO terms)' : matchItem === 'Product' ? 'product packaging' : matchItem.toLowerCase() + 's';
    return `The ${finalMatchItem} do not match`;
  }
  transformDateToUtcHelper(date) {
    let newDate = date;
    newDate.setHours(10);
    return newDate;
  }
  getShortDateHelper(date) {
    return (0,_angular_common__WEBPACK_IMPORTED_MODULE_8__.formatDate)(date, 'dd/MM/yyyy', 'en-ZA');
  }
  getCorrectMatchItemNameHelper(value) {
    return value.split(/(?=[A-Z])/).join(' ');
  }
  static #_ = this.ɵfac = function NegotiationEditModalComponent_Factory(t) {
    return new (t || NegotiationEditModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_googlemaps_js_api_loader__WEBPACK_IMPORTED_MODULE_3__.Loader), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_9__.MatLegacyDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_9__.MAT_LEGACY_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_10__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.Actions));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: NegotiationEditModalComponent,
    selectors: [["app-negotiation-edit-modal"]],
    viewQuery: function NegotiationEditModalComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.priceMatStepper = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.positionMatStepper = _t.first);
      }
    },
    decls: 25,
    vars: 8,
    consts: [[1, "l-container"], [3, "ngSwitch"], [4, "ngSwitchCase"], ["Default", ""], ["Product", ""], ["Position", ""], ["Period", ""], ["ContractPrice", ""], ["Payment", ""], ["Quantity", ""], ["Quality", ""], [4, "ngTemplateOutlet"], [1, "l-header", 3, "ngClass.l-header-extended"], [1, "g-text-h2-dark"], ["src", "./assets/icons/close-icon-dark.svg", "alt", "close", 1, "l-close-icon", 3, "click"], [1, "g-stepper-hide-header"], ["PositionMatStepper", ""], [1, "p-3"], [1, "g-text-h2", "mb-2"], [1, "l-search-container"], [1, "g-text-input-container", "l-no-border"], ["src", "./assets/icons/search-icon-grey.svg", "alt", "search-icon", 1, "g-input-text-icon"], ["name", "search", "type", "text", "placeholder", "Search Location", 1, "g-input-text", 3, "ngModel", "matAutocomplete", "ngModelChange"], [1, "g-mat-autocomplete", 3, "optionSelected"], ["auto", "matAutocomplete"], ["class", "g-mat-option-text", 3, "value", 4, "ngFor", "ngForOf"], ["class", "l-map-container my-2", 4, "ngIf"], [1, "g-text-h2", "my-2"], [1, "l-choice-content"], ["name", "incoTerm", 1, "g-text-h2", "l-choice-text", 3, "ngModel", "compareWith", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "l-save-holder"], ["mat-flat-button", "", 1, "g-primary-button", "l-save-button", 3, "click"], [4, "ngIf", "ngIfElse"], ["showLoadingSpinnerSubmit", ""], ["class", "l-match-button g-primary-button ml-2", 3, "click", 4, "ngIf"], [1, "g-mat-option-text", 3, "value"], [1, "l-map-container", "my-2"], [1, "g-delivery-form-map", 3, "center", "options", "fitBounds"], [3, "position", "options", "agmFitBounds"], ["infoWindow", ""], [3, "center", "options", "agmFitBounds"], [3, "value"], ["mode", "indeterminate", 1, "g-mat-progress-spinner-white", 3, "diameter"], [1, "l-match-button", "g-primary-button", "ml-2", 3, "click"], [1, "l-header", 3, "ngClass"], [1, "g-stepper-hide-header", "l-no-padding"], ["PriceMatStepper", ""], [1, "g-text-label", "mb-2"], [1, "l-input-container"], [1, "l-general-toggle-container"], [4, "ngFor", "ngForOf"], ["class", "l-basis-price-container g-fade-in", 4, "ngIf"], [1, "l-input-group"], [1, "l-price-input"], ["type", "number", "name", "price", 1, "g-form-input", "l-price-padding", 3, "ngModel", "ngModelChange"], [1, "l-price-p"], ["src", "./assets/icons/contract-price-icon-grey.svg", "alt", "", 1, "l-input-icon", "pr-2"], [1, "g-text-input", "m-0"], ["class", "l-info-container-payment g-fade-in", 4, "ngIf"], [1, "l-info-container"], ["src", "./assets/icons/info-icon-grey.svg", "alt", "info-icon-grey", 1, "g-form-info-icon", "mt-1"], [1, "g-text-p-small-grey", "m-0"], ["class", "l-general-toggle", 3, "l-active", "click", 4, "ngIf"], [1, "l-general-toggle", 3, "click"], [1, "l-basis-price-container", "g-fade-in"], [1, "l-info-container", "mb-2"], ["src", "./assets/icons/info-icon-black.svg", "alt", "info-icon-grey", 1, "g-form-info-icon", "mt-1"], ["class", "g-text-p-small-grey m-0", 4, "ngIf", "ngIfElse"], ["showAlternateText", ""], [1, "l-input-container", "mt-3", "mb-2"], ["name", "month", "required", "", 1, "g-form-select", 3, "ngModel", "compareWith", "ngModelChange", "selectionChange"], [1, "g-text-h2", "text-left"], [1, "l-input-container", "mb-3"], [1, "l-info-container-payment", "g-fade-in"], [1, "g-text-p-small-grey", "l-red", "m-0"], ["class", "l-header", "class", "l-header", 4, "ngIf"], [1, "l-content", 3, "ngClass"], [1, "w-100"], [1, "l-choice-header", 3, "ngClass"], [1, "g-text-p", 3, "ngClass"], [1, "l-choice-content", 3, "ngClass"], ["class", "g-text-h2 text-left ml-2", 4, "ngIf"], [1, "l-separator"], [1, "l-separator-line"], ["class", "l-no-match-icon", "src", "./assets/icons/no-match-icon.svg", "alt", "no-match", 4, "ngIf", "ngIfElse"], ["showMatchIcon", ""], ["class", "l-info-container", 4, "ngIf"], ["mat-flat-button", "", "class", "g-primary-button l-save-button", 3, "w-100", "g-btn-disabled", "disabled", "click", 4, "ngIf"], ["mat-flat-button", "", "class", "g-primary-button", 3, "g-btn-disabled", "disabled", "click", 4, "ngIf"], [1, "l-header"], [1, "g-text-h2", "text-left", "ml-2"], ["src", "./assets/icons/no-match-icon.svg", "alt", "no-match", 1, "l-no-match-icon"], ["src", "./assets/icons/blue-tick-icon.svg", "alt", "match", 1, "l-match-icon"], ["mat-flat-button", "", 1, "g-primary-button", "l-save-button", 3, "disabled", "click"], ["mode", "indeterminate", 1, "g-mat-progress-spinner-white", "d-flex", "justify-content-centre", 3, "diameter"], ["mat-flat-button", "", 1, "g-primary-button", 3, "disabled", "click"], ["name", "packaging", "placeholder", "No packaging selected", "required", "", 1, "g-text-h2", "g-mat-select-placeholder", "l-choice-text", 3, "ngModel", "compareWith", "ngModelChange", "selectionChange"], [1, "l-choice-content", 3, "click"], ["type", "text", "name", "position", 1, "g-text-h2", "text-left", "l-no-border", 3, "ngModel", "readOnly", "ngModelChange"], [1, "l-choice-icon", "g-text-p"], [1, "w-100", "d-flex", "justify-content-between", "align-items-end", "mt-2"], [1, "l-double-input-left-period"], [1, "g-form-label"], [1, "l-input-container", 3, "click"], ["name", "dateFrom", 1, "g-form-input", "l-choice-content", 3, "ngModel", "matDatepicker", "ngModelChange", "dateChange"], ["startView", "year"], ["pickerStart", ""], [1, "h-100", "l-double-input-right-period", "justify-content-end", 3, "click"], ["name", "dateTo", 1, "g-form-input", "l-choice-content", 3, "ngModel", "matDatepicker", "ngModelChange", "dateChange"], ["startView", "year", 3, "startAt"], ["pickerEnd", ""], ["class", "l-error-text", 4, "ngIf"], [1, "l-error-text"], [1, "l-choice-content", "w-100", 3, "click"], ["class", "g-text-p m-0", 4, "ngIf"], ["type", "number", "name", "price", "required", "", "disabled", "true", 1, "l-quantity", "g-text-h2", "text-left", 3, "ngModel", "ngModelChange"], [1, "g-text-p", "m-0"], ["name", "payment Term", "required", "", 1, "g-text-h2", "text-left", 3, "ngModel", "compareWith", "ngModelChange", "selectionChange"], ["class", "g-text-h2 text-left", 3, "value", 4, "ngFor", "ngForOf"], [1, "g-text-h2", "text-left", 3, "value"], [1, "l-quantity-holder"], [1, "l-choice-quantity"], ["type", "number", "name", "quantity", "required", "", 1, "l-quantity", "g-text-h2", "text-left", 3, "ngModel", "ngModelChange", "keyup"], [1, "l-choice-measure"], ["name", "packaging", "required", "", 1, "g-text-h2", "l-choice-text", 3, "ngModel", "compareWith", "ngModelChange"], ["name", "prod quality", "required", "", 1, "g-text-h2", "l-choice-text", 3, "ngModel", "compareWith", "ngModelChange", "selectionChange"]],
    template: function NegotiationEditModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, NegotiationEditModalComponent_ng_container_2_Template, 2, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, NegotiationEditModalComponent_ng_container_3_Template, 34, 19, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, NegotiationEditModalComponent_ng_container_4_Template, 2, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, NegotiationEditModalComponent_ng_container_5_Template, 38, 18, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, NegotiationEditModalComponent_ng_container_6_Template, 2, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, NegotiationEditModalComponent_ng_container_7_Template, 2, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, NegotiationEditModalComponent_ng_container_8_Template, 2, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, NegotiationEditModalComponent_ng_template_9_Template, 33, 29, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, NegotiationEditModalComponent_ng_template_11_Template, 3, 3, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, NegotiationEditModalComponent_ng_template_13_Template, 4, 2, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, NegotiationEditModalComponent_ng_template_15_Template, 17, 6, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, NegotiationEditModalComponent_ng_template_17_Template, 5, 2, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, NegotiationEditModalComponent_ng_template_19_Template, 4, 3, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, NegotiationEditModalComponent_ng_template_21_Template, 7, 5, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, NegotiationEditModalComponent_ng_template_23_Template, 3, 3, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitch", ctx.matchItem);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "Position");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "Period");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "ContractPrice");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "Payment");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "Quality");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgSwitchCase, _angular_material_legacy_autocomplete__WEBPACK_IMPORTED_MODULE_12__.MatLegacyAutocomplete, _angular_material_legacy_autocomplete__WEBPACK_IMPORTED_MODULE_12__.MatLegacyAutocompleteTrigger, _angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_13__.MatLegacyOption, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_14__.MatLegacyError, _angular_material_legacy_progress_spinner__WEBPACK_IMPORTED_MODULE_15__.MatLegacyProgressSpinner, _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_16__.MatLegacySelect, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepickerInput, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__.MatStep, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__.MatStepper, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_19__.MatLegacyButton, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgModel, _angular_google_maps__WEBPACK_IMPORTED_MODULE_21__.GoogleMap, _angular_google_maps__WEBPACK_IMPORTED_MODULE_21__.MapInfoWindow, _angular_google_maps__WEBPACK_IMPORTED_MODULE_21__.MapMarker, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe],
    styles: [".l-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #f5f5f5 !important;\n  padding-bottom: 16px;\n}\n\n.l-header[_ngcontent-%COMP%], .l-header-extended[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 56px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #ffffff;\n}\n\n.l-header-extended[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n\n.l-close-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 16px;\n  width: 18px;\n  height: auto;\n}\n\n.l-save-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.l-content[_ngcontent-%COMP%], .l-content-extended[_ngcontent-%COMP%] {\n  width: 100%;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 16px;\n}\n\n.l-content-extended[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n\n.l-choice-header[_ngcontent-%COMP%] {\n  height: 40px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0 16px;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n}\n\n.l-seller-bg[_ngcontent-%COMP%] {\n  background-color: #e7f7f0;\n}\n\n.l-buyer-bg[_ngcontent-%COMP%] {\n  background-color: #f7e8e7;\n}\n\n.l-buyer-text[_ngcontent-%COMP%] {\n  color: #d2303d;\n  text-align: left;\n}\n\n.l-seller-text[_ngcontent-%COMP%] {\n  color: #1caf7e;\n  text-align: left;\n}\n\n.l-choice-content[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 56px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 16px;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n  background-color: #ffffff;\n}\n\n.l-choice-text[_ngcontent-%COMP%] {\n  height: auto;\n  text-align: left;\n}\n\n.l-no-padding[_ngcontent-%COMP%] {\n  padding: 0px !important;\n}\n\n.l-search-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.l-no-border[_ngcontent-%COMP%] {\n  outline: none;\n  border: none !important;\n  background-color: transparent;\n}\n\n.mat-stepper-horizontal[_ngcontent-%COMP%] {\n  background-color: #f5f5f5 !important;\n}\n\n.mat-date-range-input-inner[_ngcontent-%COMP%] {\n  text-align: start;\n}\n\n.l-error-text[_ngcontent-%COMP%] {\n  font-size: small;\n  font-weight: 500;\n}\n\n.l-choice-icon[_ngcontent-%COMP%] {\n  width: auto;\n  height: auto;\n  color: #407ef8;\n}\n\n.l-period-icon[_ngcontent-%COMP%] {\n  background-color: #f9f9fc !important;\n}\n\n.l-separator[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 51px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.l-separator-line[_ngcontent-%COMP%] {\n  width: 1px;\n  margin-left: -1px;\n  flex: 1;\n  border: 1px dashed #343434;\n}\n\n.l-no-match-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: auto;\n}\n\n.l-match-icon[_ngcontent-%COMP%] {\n  width: 30px;\n  height: auto;\n}\n\n.l-info-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: flex;\n  align-items: flex-start;\n  margin-top: 8px;\n}\n\n.l-quantity-holder[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.l-quantity[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border: none;\n  width: 100%;\n  outline: none;\n}\n\n.l-alter-width[_ngcontent-%COMP%], .l-alter-width-mat-fields[_ngcontent-%COMP%] {\n  width: calc(100% - 48px);\n}\n\n.l-alter-width-mat-fields[_ngcontent-%COMP%] {\n  margin-left: 9px;\n}\n\n.l-choice-quantity[_ngcontent-%COMP%] {\n  width: 65%;\n  height: 56px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 16px;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n  background-color: #ffffff;\n}\n\n.l-choice-measure[_ngcontent-%COMP%] {\n  width: 30%;\n  height: 56px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 16px;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n  background-color: #ffffff;\n}\n\n.l-map-container[_ngcontent-%COMP%] {\n  overflow: hidden;\n  border-radius: 4px;\n}\n\n.l-input[_ngcontent-%COMP%] {\n  width: calc(100% - 48px);\n  height: 41px;\n  padding-left: 20px;\n  border: none;\n  border-top-left-radius: 8px;\n  border-bottom-left-radius: 8px;\n  background-color: #ffffff;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08) !important;\n  outline: none;\n}\n\n.l-input[_ngcontent-%COMP%]::-webkit-input-placeholder, .l-input[_ngcontent-%COMP%]::-moz-placeholder {\n  color: rgba(30, 48, 37, 0.56) !important;\n}\n\n.l-input-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: flex;\n  justify-content: space-between;\n}\n\n.l-input-icon-holder[_ngcontent-%COMP%] {\n  width: 39px;\n  min-height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #e6e6e6;\n  border-radius: 8px;\n}\n\n.l-input-icon-holder[_ngcontent-%COMP%] {\n  width: 39px;\n  min-height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #e6e6e6;\n  border-radius: 8px;\n}\n\n.l-double-input-left[_ngcontent-%COMP%], .l-double-input-left-period[_ngcontent-%COMP%], .l-double-input-right[_ngcontent-%COMP%], .l-double-input-right-period[_ngcontent-%COMP%] {\n  height: -moz-fit-content;\n  height: fit-content;\n  display: flex;\n  flex-direction: column;\n}\n\n.l-double-input-left[_ngcontent-%COMP%] {\n  width: 58.5%;\n}\n\n.l-double-input-left-period[_ngcontent-%COMP%] {\n  width: 50%;\n  margin-right: 8px;\n}\n\n.l-double-input-right[_ngcontent-%COMP%] {\n  width: 37.5%;\n}\n\n.l-double-input-right-period[_ngcontent-%COMP%] {\n  width: 50%;\n  margin-left: 8px;\n}\n\n.l-basis-price-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.l-black[_ngcontent-%COMP%] {\n  color: #000000;\n}\n\n.l-month-toggle-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 24px 0;\n}\n\n.l-chevron-img[_ngcontent-%COMP%] {\n  width: 12px;\n  height: auto;\n}\n\n.l-month[_ngcontent-%COMP%] {\n  width: 45%;\n  height: 39px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  align-items: center;\n  font-family: \"Mulish\", sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  color: #343434;\n  background: #e6e6e6;\n  border-radius: 8px;\n}\n\n.l-price-input[_ngcontent-%COMP%] {\n  position: relative;\n  width: calc(100% - 48px);\n  height: -moz-fit-content;\n  height: fit-content;\n  width: 100%;\n}\n\n.l-price-padding[_ngcontent-%COMP%] {\n  padding-left: 80px;\n}\n\n.l-price-p[_ngcontent-%COMP%] {\n  display: flex;\n  position: absolute;\n  margin: 0;\n  left: 10px;\n  top: 16px;\n}\n\n.l-general-toggle-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: flex;\n  justify-content: space-between;\n}\n\n.l-active[_ngcontent-%COMP%] {\n  background-color: #407ef8 !important;\n  color: #ffffff !important;\n}\n\n.l-active-match[_ngcontent-%COMP%] {\n  background-color: #4f9ebd !important;\n  color: #ffffff !important;\n}\n\n.l-general-toggle[_ngcontent-%COMP%], .l-align-left-toggle[_ngcontent-%COMP%] {\n  width: 48.5%;\n  height: 56px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  color: #404040;\n  border-radius: 4px;\n  background-color: #e6e6e6;\n  transition: 0.1s ease-in-out;\n}\n\n.l-match-button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #ffffff;\n  color: #407ef8;\n  border: solid 1px #407ef8;\n  width: 100%;\n}\n\n.l-align-left-toggle[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  padding: 16px;\n}\n\n.l-save-holder[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  padding: 0 16px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvbmVnb3RpYXRpb25zL2NvbXBvbmVudHMvbmVnb3RpYXRpb24tZWRpdC1tb2RhbC9uZWdvdGlhdGlvbi1lZGl0LW1vZGFsLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksV0FBQTtFQUNBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0Esb0JBQUE7QUFESjs7QUFJQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQ2tCZTtBRG5CbkI7O0FBSUE7RUFFSSxzQkFBQTtBQUZKOztBQUtBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFGSjs7QUFLQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBRko7O0FBS0E7RUFDSSxXQUFBO0VBQ0Esd0JBQUE7RUFBQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUZKOztBQUtBO0VBRUksc0JBQUE7QUFISjs7QUFNQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSwyQkNZWTtFRFhaLDRCQ1dZO0FEZGhCOztBQUtBO0VBQ0kseUJDbkJjO0FEaUJsQjs7QUFJQTtFQUNJLHlCQ3BCWTtBRG1CaEI7O0FBSUE7RUFDSSxjQ3pCVTtFRDBCVixnQkFBQTtBQURKOztBQUlBO0VBQ0ksY0NoQ1k7RURpQ1osZ0JBQUE7QUFESjs7QUFJQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsOEJDZlk7RURnQlosK0JDaEJZO0VEaUJaLHlCQ3BEZTtBRG1EbkI7O0FBSUE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUFESjs7QUFJQTtFQUNJLHVCQUFBO0FBREo7O0FBSUE7RUFDSSxXQUFBO0FBREo7O0FBSUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtBQURKOztBQUlBO0VBQ0ksb0NBQUE7QUFESjs7QUFJQTtFQUNJLGlCQUFBO0FBREo7O0FBR0E7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FBQUo7O0FBR0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNDckZZO0FEcUZoQjs7QUFFQTtFQUNJLG9DQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxPQUFBO0VBQ0EsMEJBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksNkJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTs7RUFFSSx3QkFBQTtBQUNKOztBQUNBO0VBQ0ksZ0JBQUE7QUFFSjs7QUFDQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsOEJDekhZO0VEMEhaLCtCQzFIWTtFRDJIWix5QkM5SmU7QURnS25COztBQUNBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSw4QkNySVk7RURzSVosK0JDdElZO0VEdUlaLHlCQzFLZTtBRDRLbkI7O0FBQ0E7RUFDSSxnQkFBQTtFQUNBLGtCQzVJWTtBRDhJaEI7O0FBQ0E7RUFDSSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSwyQkM5TGdCO0VEK0xoQiw4QkMvTGdCO0VEZ01oQix5QkFBQTtFQUNBLG9EQ2hNYTtFRGlNYixhQUFBO0FBRUo7O0FBQUE7O0VBRUksd0NBQUE7QUFHSjs7QUFBQTtFQUNJLFdBQUE7RUFDQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FBR0o7O0FBQUE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQ3hPaUI7RUR5T2pCLGtCQ3ZOZ0I7QUQwTnBCOztBQUFBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkNsUGlCO0VEbVBqQixrQkNqT2dCO0FEb09wQjs7QUFBQTs7OztFQUlJLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFHSjs7QUFEQTtFQUNJLFlBQUE7QUFJSjs7QUFGQTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtBQUtKOztBQUhBO0VBQ0ksWUFBQTtBQU1KOztBQUpBO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0FBT0o7O0FBSkE7RUFDSSxXQUFBO0VBQ0Esd0JBQUE7RUFBQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBT0o7O0FBSkE7RUFDSSxjQUFBO0FBT0o7O0FBSkE7RUFDSSxXQUFBO0VBQ0Esd0JBQUE7RUFBQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQU9KOztBQUpBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFPSjs7QUFKQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlDQ3hUYTtFRHlUYixlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQzFUYTtFRDJUYixtQkNsVGlCO0VEbVRqQixrQkNqU2dCO0FEd1NwQjs7QUFKQTtFQUNJLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsV0FBQTtBQU9KOztBQUpBO0VBQ0ksa0JBQUE7QUFPSjs7QUFKQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQU9KOztBQUpBO0VBQ0ksV0FBQTtFQUNBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUFPSjs7QUFKQTtFQUNJLG9DQUFBO0VBQ0EseUJBQUE7QUFPSjs7QUFKQTtFQUNJLG9DQUFBO0VBQ0EseUJBQUE7QUFPSjs7QUFKQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQ0NwVFE7RURxVFIsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0N4VVE7RUR5VVIsa0JDeFNZO0VEeVNaLHlCQ3JXaUI7RURzV2pCLDRCQUFBO0FBT0o7O0FBSkE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQ3BWZTtFRHFWZixjQ2pWWTtFRGtWWix5QkFBQTtFQUNBLFdBQUE7QUFPSjs7QUFKQTtFQUVJLDhCQUFBO0VBQ0EsYUFBQTtBQU1KOztBQUhBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQU1KIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3JjL3ZhcmlhYmxlcy5zY3NzJztcclxuXHJcbi5sLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvci1ncmV5ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcclxufVxyXG5cclxuLmwtaGVhZGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1NnB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yO1xyXG59XHJcblxyXG4ubC1oZWFkZXItZXh0ZW5kZWQge1xyXG4gICAgQGV4dGVuZCAubC1oZWFkZXI7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubC1jbG9zZS1pY29uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxNnB4O1xyXG4gICAgd2lkdGg6IDE4cHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5sLXNhdmUtYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sLWNvbnRlbnQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTZweDtcclxufVxyXG5cclxuLmwtY29udGVudC1leHRlbmRlZCB7XHJcbiAgICBAZXh0ZW5kIC5sLWNvbnRlbnQ7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubC1jaG9pY2UtaGVhZGVyIHtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxufVxyXG4ubC1zZWxsZXItYmcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1ncmVlbjtcclxufVxyXG4ubC1idXllci1iZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LXJlZDtcclxufVxyXG5cclxuLmwtYnV5ZXItdGV4dCB7XHJcbiAgICBjb2xvcjogJHByaW1hcnktcmVkO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLmwtc2VsbGVyLXRleHQge1xyXG4gICAgY29sb3I6ICRwcmltYXJ5LWdyZWVuO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLmwtY2hvaWNlLWNvbnRlbnQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDU2cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDAgMTZweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3I7XHJcbn1cclxuXHJcbi5sLWNob2ljZS10ZXh0IHtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5sLW5vLXBhZGRpbmcge1xyXG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sLXNlYXJjaC1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5sLW5vLWJvcmRlciB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLm1hdC1zdGVwcGVyLWhvcml6b250YWwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3ItZ3JleSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWF0LWRhdGUtcmFuZ2UtaW5wdXQtaW5uZXIge1xyXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbn1cclxuLmwtZXJyb3ItdGV4dCB7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLmwtY2hvaWNlLWljb24ge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XHJcbn1cclxuLmwtcGVyaW9kLWljb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGFwcC1iZy1jb2xvciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubC1zZXBhcmF0b3Ige1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUxcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sLXNlcGFyYXRvci1saW5lIHtcclxuICAgIHdpZHRoOiAxcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTFweDtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgJGFwcC1mb250LWJsYWNrO1xyXG59XHJcblxyXG4ubC1uby1tYXRjaC1pY29uIHtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4ubC1tYXRjaC1pY29uIHtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4ubC1pbmZvLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbn1cclxuXHJcbi5sLXF1YW50aXR5LWhvbGRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmwtcXVhbnRpdHkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5sLWFsdGVyLXdpZHRoLFxyXG4ubC1hbHRlci13aWR0aC1tYXQtZmllbGRzIHtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0OHB4KTtcclxufVxyXG4ubC1hbHRlci13aWR0aC1tYXQtZmllbGRzIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA5cHg7XHJcbn1cclxuXHJcbi5sLWNob2ljZS1xdWFudGl0eSB7XHJcbiAgICB3aWR0aDogNjUlO1xyXG4gICAgaGVpZ2h0OiA1NnB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yO1xyXG59XHJcblxyXG4ubC1jaG9pY2UtbWVhc3VyZSB7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgaGVpZ2h0OiA1NnB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yO1xyXG59XHJcblxyXG4ubC1tYXAtY29udGFpbmVyIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxufVxyXG5cclxuLmwtaW5wdXQge1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQ4cHgpO1xyXG4gICAgaGVpZ2h0OiA0MXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogJGFwcC1ib3JkZXItcmFkaXVzO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJGFwcC1ib3JkZXItcmFkaXVzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGJveC1zaGFkb3c6ICRhcHAtYm94LXNoYWRvdztcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuLmwtaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIsXHJcbi5sLWlucHV0OjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAkYXBwLWZvbnQtaW5wdXQtcGxhY2Vob2xkZXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmwtaW5wdXQtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5sLWlucHV0LWljb24taG9sZGVyIHtcclxuICAgIHdpZHRoOiAzOXB4O1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXBwLWlucHV0LWJnLWNvbG9yO1xyXG4gICAgYm9yZGVyLXJhZGl1czogJGFwcC1ib3JkZXItcmFkaXVzO1xyXG59XHJcblxyXG4ubC1pbnB1dC1pY29uLWhvbGRlciB7XHJcbiAgICB3aWR0aDogMzlweDtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGFwcC1pbnB1dC1iZy1jb2xvcjtcclxuICAgIGJvcmRlci1yYWRpdXM6ICRhcHAtYm9yZGVyLXJhZGl1cztcclxufVxyXG5cclxuLmwtZG91YmxlLWlucHV0LWxlZnQsXHJcbi5sLWRvdWJsZS1pbnB1dC1sZWZ0LXBlcmlvZCxcclxuLmwtZG91YmxlLWlucHV0LXJpZ2h0LFxyXG4ubC1kb3VibGUtaW5wdXQtcmlnaHQtcGVyaW9kIHtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG4ubC1kb3VibGUtaW5wdXQtbGVmdCB7XHJcbiAgICB3aWR0aDogNTguNSU7XHJcbn1cclxuLmwtZG91YmxlLWlucHV0LWxlZnQtcGVyaW9kIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxufVxyXG4ubC1kb3VibGUtaW5wdXQtcmlnaHQge1xyXG4gICAgd2lkdGg6IDM3LjUlO1xyXG59XHJcbi5sLWRvdWJsZS1pbnB1dC1yaWdodC1wZXJpb2Qge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbn1cclxuXHJcbi5sLWJhc2lzLXByaWNlLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sLWJsYWNrIHtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcblxyXG4ubC1tb250aC10b2dnbGUtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAyNHB4IDA7XHJcbn1cclxuXHJcbi5sLWNoZXZyb24taW1nIHtcclxuICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4ubC1tb250aCB7XHJcbiAgICB3aWR0aDogNDUlO1xyXG4gICAgaGVpZ2h0OiAzOXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogJGFwcC1pbnB1dC1mb250O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAkYXBwLWZvbnQtYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kOiAkYXBwLWlucHV0LWJnLWNvbG9yO1xyXG4gICAgYm9yZGVyLXJhZGl1czogJGFwcC1ib3JkZXItcmFkaXVzO1xyXG59XHJcblxyXG4ubC1wcmljZS1pbnB1dCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNDhweCk7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5sLXByaWNlLXBhZGRpbmcge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA4MHB4O1xyXG59XHJcblxyXG4ubC1wcmljZS1wIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBsZWZ0OiAxMHB4O1xyXG4gICAgdG9wOiAxNnB4O1xyXG59XHJcblxyXG4ubC1nZW5lcmFsLXRvZ2dsZS1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmwtYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubC1hY3RpdmUtbWF0Y2gge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGFwcC10YWJzLW5lZ290aWF0aW9ucy1ibHVlICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubC1nZW5lcmFsLXRvZ2dsZSB7XHJcbiAgICB3aWR0aDogNDguNSU7XHJcbiAgICBoZWlnaHQ6IDU2cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICR0ZXh0LWZvbnQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICR0ZXh0LWRhcms7XHJcbiAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRhcHAtaW5wdXQtYmctY29sb3I7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjFzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4ubC1tYXRjaC1idXR0b24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggJHByaW1hcnktY29sb3I7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmwtYWxpZ24tbGVmdC10b2dnbGUge1xyXG4gICAgQGV4dGVuZC5sLWdlbmVyYWwtdG9nZ2xlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogMTZweDtcclxufVxyXG5cclxuLmwtc2F2ZS1ob2xkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMCAxNnB4O1xyXG59XHJcbiIsIi8vIFRleHRcclxuJGFwcC1mb250OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiRhcHAtaW5wdXQtZm9udDogJ011bGlzaCcsIHNhbnMtc2VyaWY7XHJcbiRhcHAtZm9udC1ibGFjazogIzM0MzQzNDtcclxuJGFwcC10ZXh0LWdyZXk6ICM3MDcwNzA7XHJcbiRhcHAtZm9udC1pbnB1dC1wbGFjZWhvbGRlcjogcmdiYSgzMCwgNDgsIDM3LCAwLjU2KTtcclxuJGFwcC1mb3JtLWluZm8tY29sb3I6ICNhZmFmYWY7XHJcblxyXG4vLyBDb2xvcnNcclxuJGFwcC1iZy1jb2xvcjogI2Y5ZjlmYztcclxuJGFwcC1idXlpbmctcmVkOiAjZTc2ZjUxO1xyXG4kYXBwLXNlbGxpbmctZ3JlZW46ICM3ZmE5OTU7XHJcbiRhcHAtaW5wdXQtYmctY29sb3I6ICNlNmU2ZTY7XHJcbiRhcHAtYm90dG9tLW5hdi1pdGVtLWJnOiAjZTVlZmU5O1xyXG4kYXBwLXRhYnMtbWFya2V0cGxhY2UtZ3JlZW46ICMyODVkNjA7XHJcbiRhcHAtdGFicy1uZWdvdGlhdGlvbnMtYmx1ZTogIzRmOWViZDtcclxuJGFwcC1ub3RpZmljYXRpb24tcmVkOiAjYTUzYTRhO1xyXG5cclxuLy8gR3JhZGllbnRzXHJcbiRhcHAtc2VsbGluZy1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgIzk4YjRhNywgIzRhNmU1ZSk7XHJcbiRhcHAtYnV5aW5nLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjZGY4YTc1LCAjYTI1MzNmKTtcclxuJGFwcC1zZWxsaW5nLWNhcmQtZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICM4NWFlOWIsICM3MzllOGEpO1xyXG4kYXBwLWJ1eWluZy1jYXJkLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAkYXBwLWJ1eWluZy1yZWQsICNjNzVkNDMpO1xyXG5cclxuLy8gQnV0dG9uc1xyXG4kYXBwLXByaW1hcnktYnV0dG9uLWJnLWNvbG9yOiAjMzFhMDVmO1xyXG4kYXBwLXNlY29uZGFyeS1idXR0b24tYmctY29sb3I6ICNlNWU1ZTU7XHJcbiRhcHAtZGVsZXRlLWJ1dHRvbi1yZWQ6ICNkMzQ1NWI7XHJcblxyXG4vLyBPdGhlclxyXG4kYXBwLWJvcmRlci1yYWRpdXM6IDhweDtcclxuJGFwcC1ib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjA4KSAhaW1wb3J0YW50O1xyXG5cclxuLy8gI3JlZ2lvbiBNYXRjaCBFeGNoYW5nZVxyXG5cclxuLy8gI3JlZ2lvbiBDb2xvcnNcclxuXHJcbiRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4kYmFja2dyb3VuZC1jb2xvci1ncmV5OiAjZjVmNWY1O1xyXG4kdGV4dC1kYXJrOiAjNDA0MDQwO1xyXG4kdGV4dC1wbGFjZWhvbGRlcjogIzhjOGM4YztcclxuJHByaW1hcnktY29sb3I6ICM0MDdlZjg7XHJcbiRzZWNvbmRhcnktY29sb3I6ICNlNWVkZmQ7XHJcbiRtZWRpdW0tYmx1ZTogIzhkOWVjNTtcclxuJHByaW1hcnktZ3JlZW46ICMxY2FmN2U7XHJcbiRzZWNvbmRhcnktZ3JlZW46ICNlN2Y3ZjA7XHJcbiRwcmltYXJ5LXJlZDogI2QyMzAzZDtcclxuJHNlY29uZGFyeS1yZWQ6ICNmN2U4ZTc7XHJcbiRpbnB1dC1ib3JkZXI6ICNlMmU4ZjA7XHJcbiRlcnJvci1tZXNzYWdlOiAjYjExNTBhO1xyXG4kZGlzYWJsZWQtY29sb3I6ICNjYmNiY2I7XHJcblxyXG4vLyAjZW5kcmVnaW9uXHJcblxyXG4vLyAjcmVnaW9uIFRleHRcclxuXHJcbiR0ZXh0LWZvbnQ6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuJGZvbnQtd2VpZ2h0LWJvbGQ6IDcwMDtcclxuJGZvbnQtd2VpZ2h0LXNlbWktYm9sZDogNjAwO1xyXG4kZm9udC13ZWlnaHQtcmVndWxhcjogNTAwO1xyXG4kZm9udC13ZWlnaHQtbGlnaHQ6IDQwMDtcclxuXHJcbi8vICNlbmRyZWdpb25cclxuXHJcbi8vICNyZWdpb24gQnV0dG9uc1xyXG5cclxuJGJ1dHRvbi1mb250LXdlaWdodDogNjAwO1xyXG5cclxuLy8gI2VuZHJlZ2lvblxyXG5cclxuLy8gI3JlZ2lvbiBPdGhlclxyXG5cclxuJGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHJcbi8vICNlbmRyZWdpb25cclxuXHJcbi8vICNlbmRyZWdpb25cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3967:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/features/negotiations/components/negotiation-update-modal/negotiation-update-modal.component.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NegotiationUpdateModalComponent: () => (/* binding */ NegotiationUpdateModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/legacy-dialog */ 1035);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);




function NegotiationUpdateModalComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please resubmit your Match after we sync you with the counterparty to ensure the details are up-to-date! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function NegotiationUpdateModalComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please sync all your completed negotiations to ensure the details are up-to-date! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class NegotiationUpdateModalComponent {
  constructor(dialogRef, data) {
    this.dialogRef = dialogRef;
    this.data = data;
  }
  ngOnInit() {}
  handleCloseDialog() {
    this.dialogRef.close();
    window.location.reload();
  }
  static #_ = this.ɵfac = function NegotiationUpdateModalComponent_Factory(t) {
    return new (t || NegotiationUpdateModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_1__.MatLegacyDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_LEGACY_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NegotiationUpdateModalComponent,
    selectors: [["app-negotiation-update-modal"]],
    decls: 8,
    vars: 2,
    consts: [[1, "l-container"], [1, "g-text-h2-dark", "mb-3"], ["class", "g-text-p-dark mb-3", 4, "ngIf", "ngIfElse"], ["showCompletePageMessage", ""], [1, "g-primary-button", 3, "click"], [1, "g-text-p-dark", "mb-3"]],
    template: function NegotiationUpdateModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sync up with your Counterparty:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NegotiationUpdateModalComponent_div_3_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NegotiationUpdateModalComponent_ng_template_4_Template, 2, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NegotiationUpdateModalComponent_Template_button_click_6_listener() {
          return ctx.handleCloseDialog();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Accept");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.data.completePage)("ngIfElse", _r1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
    styles: [".l-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding: 16px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvbmVnb3RpYXRpb25zL2NvbXBvbmVudHMvbmVnb3RpYXRpb24tdXBkYXRlLW1vZGFsL25lZ290aWF0aW9uLXVwZGF0ZS1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FBREoiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzcmMvdmFyaWFibGVzLnNjc3MnO1xyXG5cclxuLmwtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZzogMTZweDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 4323:
/*!*****************************************************************!*\
  !*** ./src/app/features/negotiations/negotiations.selectors.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   authSelectors: () => (/* binding */ authSelectors),
/* harmony export */   deliveryPointsSelectors: () => (/* binding */ deliveryPointsSelectors),
/* harmony export */   getAppState: () => (/* binding */ getAppState),
/* harmony export */   getAuthState: () => (/* binding */ getAuthState),
/* harmony export */   getDeliveryPointState: () => (/* binding */ getDeliveryPointState),
/* harmony export */   getLotMatchFormData: () => (/* binding */ getLotMatchFormData),
/* harmony export */   lotSelectors: () => (/* binding */ lotSelectors),
/* harmony export */   marketSelectors: () => (/* binding */ marketSelectors),
/* harmony export */   matchSelectors: () => (/* binding */ matchSelectors),
/* harmony export */   reducers: () => (/* binding */ reducers)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 7178);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var _core_ngrx_authState_auth_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/ngrx/authState/auth.reducer */ 6086);
/* harmony import */ var _core_ngrx_app_state_app_state_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/ngrx/app-state/app-state.reducer */ 1383);
/* harmony import */ var _core_ngrx_entities_scout_scout_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/ngrx/entities/scout/scout.reducer */ 5110);
/* harmony import */ var _core_ngrx_entities_delivery_points_delivery_points_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/ngrx/entities/delivery-points/delivery-points.reducer */ 7704);
/* harmony import */ var _core_ngrx_entities_lot_lot_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/ngrx/entities/lot/lot.reducer */ 6415);
/* harmony import */ var _core_ngrx_entities_match_match_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/ngrx/entities/match/match.reducer */ 6998);
/* harmony import */ var _core_ngrx_crop_crop_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/ngrx/crop/crop.reducer */ 9589);
/* harmony import */ var _core_ngrx_entities_delivery_points_delivery_points_selectors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/ngrx/entities/delivery-points/delivery-points.selectors */ 6070);
/* harmony import */ var _core_ngrx_entities_lot_lot_selectors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/ngrx/entities/lot/lot.selectors */ 5014);
/* harmony import */ var _core_ngrx_entities_match_match_selectors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/ngrx/entities/match/match.selectors */ 809);
/* harmony import */ var _core_ngrx_entities_scout_scout_selectors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/ngrx/entities/scout/scout.selectors */ 6427);
/* harmony import */ var _core_ngrx_authState_auth_selectors__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../core/ngrx/authState/auth.selectors */ 6646);
/* harmony import */ var _core_ngrx_crop_crop_selectors__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../core/ngrx/crop/crop.selectors */ 1923);















const reducers = {
  [_core_ngrx_authState_auth_reducer__WEBPACK_IMPORTED_MODULE_1__.authFeatureKey]: _core_ngrx_authState_auth_reducer__WEBPACK_IMPORTED_MODULE_1__.reducer,
  [_core_ngrx_app_state_app_state_reducer__WEBPACK_IMPORTED_MODULE_2__.appStateFeatureKey]: _core_ngrx_app_state_app_state_reducer__WEBPACK_IMPORTED_MODULE_2__.reducer,
  [_core_ngrx_entities_delivery_points_delivery_points_reducer__WEBPACK_IMPORTED_MODULE_4__.deliveryPointsFeatureKey]: _core_ngrx_entities_delivery_points_delivery_points_reducer__WEBPACK_IMPORTED_MODULE_4__.reducer,
  [_core_ngrx_entities_scout_scout_reducer__WEBPACK_IMPORTED_MODULE_3__.scoutFeatureKey]: _core_ngrx_entities_scout_scout_reducer__WEBPACK_IMPORTED_MODULE_3__.reducer,
  [_core_ngrx_entities_lot_lot_reducer__WEBPACK_IMPORTED_MODULE_5__.lotFeatureKey]: _core_ngrx_entities_lot_lot_reducer__WEBPACK_IMPORTED_MODULE_5__.reducer,
  [_core_ngrx_entities_match_match_reducer__WEBPACK_IMPORTED_MODULE_6__.matchFeatureKey]: _core_ngrx_entities_match_match_reducer__WEBPACK_IMPORTED_MODULE_6__.reducer,
  [_core_ngrx_crop_crop_reducer__WEBPACK_IMPORTED_MODULE_7__.cropFeatureKey]: _core_ngrx_crop_crop_reducer__WEBPACK_IMPORTED_MODULE_7__.reducer
};
// #region Feature Selectors
const getAppState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_14__.createFeatureSelector)('appState');
const getAuthState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_14__.createFeatureSelector)(_core_ngrx_authState_auth_reducer__WEBPACK_IMPORTED_MODULE_1__.authFeatureKey);
const getDeliveryPointState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_14__.createFeatureSelector)(_core_ngrx_entities_delivery_points_delivery_points_reducer__WEBPACK_IMPORTED_MODULE_4__.deliveryPointsFeatureKey);
// #endregion
const authSelectors = _core_ngrx_authState_auth_selectors__WEBPACK_IMPORTED_MODULE_12__;
const deliveryPointsSelectors = _core_ngrx_entities_delivery_points_delivery_points_selectors__WEBPACK_IMPORTED_MODULE_8__;
const marketSelectors = _core_ngrx_entities_scout_scout_selectors__WEBPACK_IMPORTED_MODULE_11__;
const lotSelectors = _core_ngrx_entities_lot_lot_selectors__WEBPACK_IMPORTED_MODULE_9__;
const matchSelectors = _core_ngrx_entities_match_match_selectors__WEBPACK_IMPORTED_MODULE_10__;
const getLotMatchFormData = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_14__.createSelector)(_core_ngrx_entities_match_match_selectors__WEBPACK_IMPORTED_MODULE_10__.getAllMatchIterations, getAppState, _core_ngrx_crop_crop_selectors__WEBPACK_IMPORTED_MODULE_13__.selectCropState, _core_ngrx_entities_delivery_points_delivery_points_selectors__WEBPACK_IMPORTED_MODULE_8__.getAllDeliveryPoints, (lotMatchIterations, appState, cropState, deliveryPoints) => {
  try {
    lotMatchIterations = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(lotMatchIterations);
    lotMatchIterations = lotMatchIterations.sort((a, b) => {
      return b?.iterationCount - a?.iterationCount;
    });
    deliveryPoints = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(deliveryPoints);
    const crops = cropState.crops || [];
    const paymentTerms = appState.paymentTerms.filter(paymentTerm => paymentTerm.id === 6) || [];
    const cropGrades = appState.cropGrades || [];
    const priceTypes = [{
      id: 1,
      name: 'Basis'
    }, {
      id: 2,
      name: 'Fixed Price'
    }];
    const safexMonths = appState.months || [];
    return {
      lotMatchIterations,
      crops,
      paymentTerms,
      priceTypes,
      safexMonths,
      deliveryPoints,
      cropGrades
    };
  } catch (error) {
    return null;
  }
});

/***/ }),

/***/ 5127:
/*!*****************************************************************************************!*\
  !*** ./src/app/features/shared/components/lot-match-table/lot-match-table.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LotMatchTableComponent: () => (/* binding */ LotMatchTableComponent),
/* harmony export */   LotMatchTableModule: () => (/* binding */ LotMatchTableModule)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngrx/effects */ 1575);
/* harmony import */ var _negotiations_components_negotiation_update_modal_negotiation_update_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../negotiations/components/negotiation-update-modal/negotiation-update-modal.component */ 3967);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ 7178);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/stepper */ 6272);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var src_app_features_negotiations_components_negotiation_edit_modal_negotiation_edit_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/features/negotiations/components/negotiation-edit-modal/negotiation-edit-modal.component */ 6150);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 1527);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 274);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 4520);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/helpers/index.actions */ 5626);
/* harmony import */ var src_app_features_negotiations_negotiations_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/features/negotiations/negotiations.selectors */ 4323);
/* harmony import */ var src_app_core_ngrx_app_state_app_state_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/ngrx/app-state/app-state.selectors */ 5391);
/* harmony import */ var src_app_core_helpers_snackbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/helpers/snackbar */ 2179);
/* harmony import */ var _angular_material_legacy_progress_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/legacy-progress-spinner */ 3401);
/* harmony import */ var src_app_core_helpers_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/helpers/constants */ 9487);
/* harmony import */ var _step_info_modal_step_info_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../step-info-modal/step-info-modal.component */ 2523);
/* harmony import */ var _core_ngrx_brokers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../core/ngrx/brokers */ 1199);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/legacy-dialog */ 1035);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/snack-bar */ 9409);




























function LotMatchTableComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LotMatchTableComponent_span_5_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r2.handleOpenAgentModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "BROKER");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function LotMatchTableComponent_div_7_ng_container_6_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 17)(1, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r14.isSeller ? "Buyer wants " + ctx_r14.buyerProduct : "Seller wants " + ctx_r14.sellerProduct, " ");
  }
}
function LotMatchTableComponent_div_7_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "h2", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, LotMatchTableComponent_div_7_ng_container_6_div_3_Template, 3, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r5.isSeller ? ctx_r5.sellerProduct : ctx_r5.buyerProduct, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r5.isMatch["Product"]);
  }
}
function LotMatchTableComponent_div_7_ng_container_7_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 17)(1, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r15.isSeller ? ctx_r15.buyerDeliveryPoint : ctx_r15.sellerDeliveryPoint, " ");
  }
}
function LotMatchTableComponent_div_7_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "h2", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, LotMatchTableComponent_div_7_ng_container_7_div_3_Template, 3, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r6.isSeller ? ctx_r6._lotMatch.sellerDetails.incoTerm.name + " - " + ctx_r6.usableSellerDeliveryPointName : ctx_r6._lotMatch.buyerDetails.incoTerm.name + " - " + ctx_r6.usableBuyerDeliveryPointName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r6.isMatch["Position"]);
  }
}
function LotMatchTableComponent_div_7_ng_container_8_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 17)(1, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r16.isSeller ? "Buyer wants " + _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](3, 1, ctx_r16._lotMatch.buyerDetails.dateFrom, "d/MM/yy") + " - " + _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](4, 4, ctx_r16._lotMatch.buyerDetails.dateTo, "d/MM/yy") : "Seller wants " + _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](5, 7, ctx_r16._lotMatch.sellerDetails.dateFrom, "d/MM/yy") + " - " + _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](6, 10, ctx_r16._lotMatch.sellerDetails.dateTo, "d/MM/yy"), " ");
  }
}
function LotMatchTableComponent_div_7_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "h2", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, LotMatchTableComponent_div_7_ng_container_8_div_7_Template, 7, 13, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r7.isSeller ? _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](3, 2, ctx_r7._lotMatch.sellerDetails.dateFrom, "d/MM/yy") + " - " + _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](4, 5, ctx_r7._lotMatch.sellerDetails.dateTo, "d/MM/yy") : _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](5, 8, ctx_r7._lotMatch.buyerDetails.dateFrom, "d/MM/yy") + " - " + _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](6, 11, ctx_r7._lotMatch.buyerDetails.dateTo, "d/MM/yy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r7.isMatch["Period"]);
  }
}
function LotMatchTableComponent_div_7_ng_container_9_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 17)(1, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r17.isSeller ? "Buyer wants " + ctx_r17.buyerPrice : "Seller wants " + ctx_r17.sellerPrice, " ");
  }
}
function LotMatchTableComponent_div_7_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "h2", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, LotMatchTableComponent_div_7_ng_container_9_div_3_Template, 3, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r8.isSeller ? ctx_r8.sellerPrice : ctx_r8.buyerPrice, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r8.isMatch["ContractPrice"]);
  }
}
function LotMatchTableComponent_div_7_ng_container_10_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 17)(1, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r18.isSeller ? "Buyer wants " + ctx_r18._lotMatch.buyerDetails.payment.name : "Seller wants " + ctx_r18._lotMatch.sellerDetails.payment.name, " ");
  }
}
function LotMatchTableComponent_div_7_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "h2", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, LotMatchTableComponent_div_7_ng_container_10_div_3_Template, 3, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r9.isSeller ? ctx_r9._lotMatch.sellerDetails.payment.name : ctx_r9._lotMatch.buyerDetails.payment.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r9.isMatch["Payment"]);
  }
}
function LotMatchTableComponent_div_7_ng_container_11_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 17)(1, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r19.isSeller ? "Buyer wants " + ctx_r19._lotMatch.buyerDetails.quantity + " " + ctx_r19._lotMatch.buyerDetails.unitOfMeasure.name : "Seller wants " + ctx_r19._lotMatch.sellerDetails.quantity + " " + ctx_r19._lotMatch.sellerDetails.unitOfMeasure.name, " ");
  }
}
function LotMatchTableComponent_div_7_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "h2", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, LotMatchTableComponent_div_7_ng_container_11_div_3_Template, 3, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r10.isSeller ? ctx_r10._lotMatch.sellerDetails.quantity + " " + ctx_r10._lotMatch.sellerDetails.unitOfMeasure.name : ctx_r10._lotMatch.buyerDetails.quantity + " " + ctx_r10._lotMatch.buyerDetails.unitOfMeasure.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r10.isMatch["Quantity"]);
  }
}
function LotMatchTableComponent_div_7_ng_container_12_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 17)(1, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r20.isSeller ? "Buyer wants " + ctx_r20.buyerGrade : "Seller wants " + ctx_r20.sellerGrade, " ");
  }
}
function LotMatchTableComponent_div_7_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "h2", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, LotMatchTableComponent_div_7_ng_container_12_div_3_Template, 3, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r11.isSeller ? ctx_r11.sellerGrade : ctx_r11.buyerGrade, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r11.isMatch["Quality"]);
  }
}
function LotMatchTableComponent_div_7_div_13_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function LotMatchTableComponent_div_7_div_13_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "mat-progress-spinner", 24);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("diameter", 16);
  }
}
function LotMatchTableComponent_div_7_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, LotMatchTableComponent_div_7_div_13_span_1_Template, 2, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, LotMatchTableComponent_div_7_div_13_ng_template_2_Template, 1, 1, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](3);
    const matchItem_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r12.isMatchItemLoading[matchItem_r4.split("-").join("")])("ngIfElse", _r22);
  }
}
function LotMatchTableComponent_div_7_div_14_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " MATCH ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function LotMatchTableComponent_div_7_div_14_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "mat-progress-spinner", 24);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("diameter", 16);
  }
}
function LotMatchTableComponent_div_7_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, LotMatchTableComponent_div_7_div_14_span_1_Template, 2, 0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, LotMatchTableComponent_div_7_div_14_ng_template_2_Template, 1, 1, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](3);
    const matchItem_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r13.isMatchItemLoading[matchItem_r4.split("-").join("")])("ngIfElse", _r26);
  }
}
function LotMatchTableComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LotMatchTableComponent_div_7_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r30);
      const matchItem_r4 = restoredCtx.$implicit;
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r29.handleOpenEditModal(matchItem_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 10)(3, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](5, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, LotMatchTableComponent_div_7_ng_container_6_Template, 4, 2, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, LotMatchTableComponent_div_7_ng_container_7_Template, 4, 2, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, LotMatchTableComponent_div_7_ng_container_8_Template, 8, 14, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, LotMatchTableComponent_div_7_ng_container_9_Template, 4, 2, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](10, LotMatchTableComponent_div_7_ng_container_10_Template, 4, 2, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](11, LotMatchTableComponent_div_7_ng_container_11_Template, 4, 2, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](12, LotMatchTableComponent_div_7_ng_container_12_Template, 4, 2, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](13, LotMatchTableComponent_div_7_div_13_Template, 4, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](14, LotMatchTableComponent_div_7_div_14_Template, 4, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const matchItem_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", "./assets/icons/" + ctx_r1.getCorrectIconNameHelper(matchItem_r4).toLowerCase() + "-icon-grey.svg", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r1.getCorrectMatchItemNameHelper(matchItem_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngSwitch", matchItem_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngSwitchCase", "Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngSwitchCase", "Position");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngSwitchCase", "Period");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngSwitchCase", "ContractPrice");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngSwitchCase", "Payment");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngSwitchCase", "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngSwitchCase", "Quality");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.isNegotiation && !ctx_r1.isLocked && !ctx_r1.isComplete && !ctx_r1.isPending && matchItem_r4 !== "Payment" && !ctx_r1.isMatch[matchItem_r4]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.isMatch[matchItem_r4]);
  }
}
class LotMatchTableComponent {
  get lotMatch() {
    return this._lotMatch;
  }
  set lotMatch(value) {
    const {
      sellerDetails,
      buyerDetails
    } = value;
    if (value.userType === 'Sell') {
      this.isSeller = true;
    }
    this.isMatch.Product = this.isProductMatchHelper(value);
    this.isMatch.Position = sellerDetails.deliveryPoint.id === buyerDetails.deliveryPoint.id && sellerDetails.incoTerm.id === buyerDetails.incoTerm.id;
    this.isMatch.Period = this.getShortDateHelper(sellerDetails.dateFrom) === this.getShortDateHelper(buyerDetails.dateFrom) && this.getShortDateHelper(sellerDetails.dateTo) === this.getShortDateHelper(buyerDetails.dateTo);
    this.isMatch.ContractPrice = sellerDetails.price === buyerDetails.price && sellerDetails.priceType.id === buyerDetails.priceType.id && sellerDetails.exchange.id === buyerDetails.exchange.id && sellerDetails.exchangeValue === buyerDetails.exchangeValue && sellerDetails.month?.id === buyerDetails.month?.id;
    this.isMatch.Payment = sellerDetails.payment.id === buyerDetails.payment.id;
    this.isMatch.Quantity = sellerDetails.quantity === buyerDetails.quantity && sellerDetails.unitOfMeasure.id === buyerDetails.unitOfMeasure.id;
    this.isMatch.Quality = sellerDetails.grade?.id === buyerDetails.grade?.id;
    this._lotMatch = value;
    this.getFullMatchHelper();
    this.sellerProduct = this.constructProductValueHelper(sellerDetails);
    this.buyerProduct = this.constructProductValueHelper(buyerDetails);
    this.sellerDeliveryPoint = this.constructPositionValueHelper(sellerDetails);
    this.buyerDeliveryPoint = this.constructPositionValueHelper(buyerDetails);
    this.sellerPrice = this.constructPriceValueHelper(sellerDetails);
    this.buyerPrice = this.constructPriceValueHelper(buyerDetails);
    this.sellerGrade = sellerDetails.grade ? sellerDetails.grade.name : 'Standard';
    this.buyerGrade = buyerDetails.grade ? buyerDetails.grade.name : 'Standard';
    this.usableSellerDeliveryPointName = sellerDetails.deliveryPoint.name.length > 20 ? this.formatTextHelper(sellerDetails.deliveryPoint.name, 20) : sellerDetails.deliveryPoint.name;
    this.usableBuyerDeliveryPointName = buyerDetails.deliveryPoint.name.length > 20 ? this.formatTextHelper(buyerDetails.deliveryPoint.name, 20) : buyerDetails.deliveryPoint.name;
  }
  constructor(route, dialog, store, snackbar, actions$) {
    this.route = route;
    this.dialog = dialog;
    this.store = store;
    this.snackbar = snackbar;
    this.actions$ = actions$;
    this.isNegotiation = false;
    this.isLocked = false;
    this.isPending = false;
    this.hasAgent = false;
    this.$isFullMatchEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
    this.matchItems = src_app_core_helpers_constants__WEBPACK_IMPORTED_MODULE_7__.matchItems;
    this.isSeller = false;
    this.formData = {};
    this.isUpdate = false;
    this.isFullMatch = false;
    this.isQualityLocked = false;
    this.isPaymentLocked = false;
    this.usableSellerDeliveryPointName = '';
    this.usableBuyerDeliveryPointName = '';
    this.grades = [];
    this.paymentTerms = [];
    this.matchIterations = [];
    this.itterationInitialID = 0;
    this.itterationCurrentID = 0;
    this.BASIS_PRICE_ID = 1;
    this.SAFEX_EXCHANGE = 'MINUS';
    this.isComplete = false;
    this.isLotMatchEditable = true;
    this.isMatch = {
      Product: false,
      Position: false,
      Period: false,
      ContractPrice: false,
      Payment: false,
      Quantity: false,
      Quality: false
    };
    this.isMatchItemLoading = {
      Product: false,
      Position: false,
      Period: false,
      ContractPrice: false,
      Payment: false,
      Quantity: false,
      Quality: false
    };
    this.destroyed$ = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
  }
  ngOnInit() {
    this.fetchClientInfoHelper();
    this.route.url.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1)).subscribe(() => {
      if (this.route.snapshot.url[0].path === 'view') {
        this.isComplete = true;
      }
    });
    if (this.isNegotiation) {
      this.store.dispatch(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_3__.matchActions.ReqLotMatchFormData({
        lotMatchId: this._lotMatch.id,
        clientUid: this.clientUid
      }));
    }
    this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_12__.select)(src_app_features_negotiations_negotiations_selectors__WEBPACK_IMPORTED_MODULE_4__.getLotMatchFormData), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroyed$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.filter)(x => !!x.lotMatchIterations[0]), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1)).subscribe(({
      lotMatchIterations
    }) => {
      this.store.dispatch(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_3__.cropActions.ReqCropMonthsAndGrades({
        cropId: lotMatchIterations[0].buyerDetails.crop.id,
        exchangeId: lotMatchIterations[0].buyerDetails.exchange.id || 1
      }));
      this.itterationInitialID = this.isSeller ? lotMatchIterations[0].buyerDetails.id : lotMatchIterations[0].sellerDetails.id;
    });
    this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_12__.select)(src_app_features_negotiations_negotiations_selectors__WEBPACK_IMPORTED_MODULE_4__.getLotMatchFormData), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroyed$)).subscribe(({
      priceTypes,
      safexMonths,
      crops,
      deliveryPoints,
      paymentTerms,
      lotMatchIterations,
      cropGrades
    }) => {
      this.formData = {
        ...this.formData,
        priceTypes,
        safexMonths,
        crops,
        deliveryPoints,
        paymentTerms,
        cropGrades
      };
      this.grades = cropGrades;
      this.paymentTerms = paymentTerms;
      this.grades.length > 1 ? this.isQualityLocked = false : this.isQualityLocked = true;
      this.paymentTerms.length > 1 ? this.isPaymentLocked = false : this.isPaymentLocked = true;
      this.matchIterations.length = 0;
      this.matchIterations.push(...lotMatchIterations);
    });
    this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_12__.select)(src_app_core_ngrx_app_state_app_state_selectors__WEBPACK_IMPORTED_MODULE_5__.getCropPackaging), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroyed$)).subscribe(packaging => {
      this.formData['packaging'] = packaging;
    });
    this.store.dispatch(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_3__.cropActions.ReqCropPackaging({
      cropId: this._lotMatch.sellerDetails.crop.id
    }));
    this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_12__.select)(src_app_core_ngrx_app_state_app_state_selectors__WEBPACK_IMPORTED_MODULE_5__.getIncoTermsByCropId, {
      cropId: this.isSeller ? this._lotMatch.sellerDetails.crop.id : this._lotMatch.buyerDetails.crop.id
    })).subscribe(incoTerms => {
      this.formData['incoTerms'] = incoTerms;
    });
    this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_12__.select)(src_app_core_ngrx_app_state_app_state_selectors__WEBPACK_IMPORTED_MODULE_5__.getUnitsOfMeasureByCropId, {
      cropId: this.isSeller ? this._lotMatch.sellerDetails.crop.id : this._lotMatch.buyerDetails.crop.id
    })).subscribe(unitsOfMeasure => {
      this.formData['unitsOfMeasure'] = unitsOfMeasure;
    });
  }
  ngOnDestroy() {
    this.destroyed$.next();
  }
  handleCheckIsNotSilo(deliveryPoint) {
    return deliveryPoint.locationType?.id !== 8;
  }
  handleOpenUpdateModal() {
    this.dialog.open(_negotiations_components_negotiation_update_modal_negotiation_update_modal_component__WEBPACK_IMPORTED_MODULE_0__.NegotiationUpdateModalComponent, {});
  }
  handleOpenEditModal(matchItem) {
    if (!this.isComplete && this.isNegotiation && this.isModalAlreadyOpeningHelper()) {
      if (this.isLocked) {
        this.snackbar.open('The match is locked. Please try again later.', 'CLOSE', src_app_core_helpers_snackbar__WEBPACK_IMPORTED_MODULE_6__.notificationConfig);
      } else if (this.isPending) {
        this.snackbar.open('The match is pending. The terms are no longer changeable.', 'CLOSE', src_app_core_helpers_snackbar__WEBPACK_IMPORTED_MODULE_6__.notificationConfig);
      } else {
        this.isMatchItemLoading[matchItem] = true;
        this.store.dispatch(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_3__.matchActions.ReqLotMatchFormData({
          lotMatchId: this._lotMatch.id,
          clientUid: this.clientUid
        }));
        this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_15__.ofType)(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_3__.matchActions.LotMatchFormDataSuccess), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1)).subscribe(({
          lotMatchIterations
        }) => {
          this.itterationCurrentID = this.isSeller ? lotMatchIterations[lotMatchIterations.length - 1].buyerDetails.id : lotMatchIterations[lotMatchIterations.length - 1].sellerDetails.id;
          this.store.dispatch(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_3__.cropActions.ReqCropMonthsAndGrades({
            cropId: lotMatchIterations[0].buyerDetails.crop.id,
            exchangeId: lotMatchIterations[0].buyerDetails.exchange.id || 1
          }));
          this.handleOpenModalCheck(matchItem);
          this.isMatchItemLoading[matchItem] = false;
        });
      }
    }
  }
  handleOpenModalCheck(matchItem) {
    if (this.itterationCurrentID > this.itterationInitialID) {
      this.handleOpenUpdateModal();
    } else {
      if (this.isQualityLocked && matchItem === 'Quality' || this.isPaymentLocked && matchItem === 'Payment') {
        this.snackbar.open('No selection available', 'CLOSE', src_app_core_helpers_snackbar__WEBPACK_IMPORTED_MODULE_6__.notificationConfig);
      } else {
        if (this.isNegotiation && !this.isComplete) {
          const dialogRef = this.dialog.open(src_app_features_negotiations_components_negotiation_edit_modal_negotiation_edit_modal_component__WEBPACK_IMPORTED_MODULE_2__.NegotiationEditModalComponent, {
            data: {
              matchItem: matchItem,
              lotMatch: (0,lodash__WEBPACK_IMPORTED_MODULE_1__.cloneDeep)(this.lotMatch),
              formData: this.formData,
              qualities: this.qualities
            },
            panelClass: 'g-modal-scroll-container'
          });
          dialogRef.afterClosed().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1)).subscribe(data => {
            if (data) {
              this.lotMatch = data;
            }
            this.getFullMatchHelper(data);
          });
        }
      }
    }
  }
  handleOpenAgentModal() {
    this.dialog.open(_step_info_modal_step_info_modal_component__WEBPACK_IMPORTED_MODULE_8__.StepInfoModalComponent, {
      panelClass: 'g-modal-container',
      data: {
        stepInfo: src_app_core_helpers_constants__WEBPACK_IMPORTED_MODULE_7__.STEP_INFO_DATA['brokers']
      }
    });
  }
  isProductMatchHelper(lotMatch) {
    if (lotMatch.completedDate === undefined || lotMatch.completedDate === null) {
      return lotMatch.sellerDetails.packaging?.id === lotMatch.buyerDetails.packaging?.id;
    } else {
      return true;
    }
  }
  constructProductValueHelper(userDetails) {
    return `${userDetails.crop.name} - ${userDetails.packaging !== null ? userDetails.packaging.name : 'No packaging set'}`;
  }
  constructPositionValueHelper(userDetails) {
    return this.handleCheckIsNotSilo(userDetails.deliveryPoint) ? `${userDetails.incoTerm.name} - ${userDetails.deliveryPoint.town}` : `${userDetails.incoTerm.name} - ${userDetails.deliveryPoint.name}`;
  }
  constructPriceValueHelper(userDetails) {
    if (userDetails.priceType.id === this.BASIS_PRICE_ID) {
      return `Basis ${userDetails.month.name.substring(0, 3)} ${userDetails.exchangeValue === this.SAFEX_EXCHANGE ? '-' : '+'}R${userDetails.price}`;
    } else {
      return `R${userDetails.price}`;
    }
  }
  getFullMatchHelper(value) {
    this.isFullMatch = Object.values(this.isMatch).every(property => property);
    const submitData = {
      isFullMatch: this.isFullMatch,
      lotMatch: this.lotMatch
    };
    this.$isFullMatchEvent.emit(submitData);
  }
  isModalAlreadyOpeningHelper() {
    return Object.values(this.isMatchItemLoading).every(matchItem => !matchItem);
  }
  getShortDateHelper(date) {
    return (0,_angular_common__WEBPACK_IMPORTED_MODULE_16__.formatDate)(date, 'shortDate', 'en-ZA');
  }
  formatTextHelper(text, formattedLength) {
    return `${text.slice(0, formattedLength)}...`;
  }
  getCorrectIconNameHelper(value) {
    return value.split(/(?=[A-Z])/).join('-');
  }
  getCorrectMatchItemNameHelper(value) {
    return value.split(/(?=[A-Z])/).join(' ');
  }
  fetchClientInfoHelper() {
    this.store.select(_core_ngrx_brokers__WEBPACK_IMPORTED_MODULE_9__.brokersSelectors.getCurrentClient).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroyed$)).subscribe(client => {
      this.clientUid = client ? client.uid : null;
    });
  }
  static #_ = this.ɵfac = function LotMatchTableComponent_Factory(t) {
    return new (t || LotMatchTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_17__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_18__.MatLegacyDialog), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_12__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_15__.Actions));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
    type: LotMatchTableComponent,
    selectors: [["app-lot-match-table"]],
    inputs: {
      isNegotiation: "isNegotiation",
      isLocked: "isLocked",
      isPending: "isPending",
      hasAgent: "hasAgent",
      lotMatch: "lotMatch"
    },
    outputs: {
      $isFullMatchEvent: "$isFullMatchEvent"
    },
    decls: 8,
    vars: 5,
    consts: [[1, "l-container", "g-fade-in"], [1, "l-card"], [1, "l-header", 3, "ngClass"], [1, "g-text-h2-dark", 3, "ngClass"], ["class", "l-agent-tag", 3, "click", 4, "ngIf"], [1, "l-content"], ["class", "l-row", 3, "click", 4, "ngFor", "ngForOf"], [1, "l-agent-tag", 3, "click"], [1, "l-row", 3, "click"], ["alt", "location-icon", 3, "src"], [1, "l-item-container"], [1, "g-text-p-small-grey", "mb-1"], [3, "ngSwitch"], [4, "ngSwitchCase"], ["class", "l-match-edit", 4, "ngIf"], [1, "l-match-item"], ["class", "l-info-container", 4, "ngIf"], [1, "l-info-container"], [1, "g-form-info-p", "l-info-text"], [1, "g-form-info-p", "l-info-text", "text-truncate"], [1, "l-match-edit"], ["class", "l-edit", 4, "ngIf", "ngIfElse"], ["showSpinner", ""], [1, "l-edit"], ["mode", "indeterminate", 1, "g-mat-progress-spinner-blue", 3, "diameter"], ["class", "l-match", 4, "ngIf", "ngIfElse"], [1, "l-match"]],
    template: function LotMatchTableComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, LotMatchTableComponent_span_5_Template, 2, 0, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, LotMatchTableComponent_div_7_Template, 15, 12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", ctx.isSeller ? "l-banner-sell" : "l-banner-buy");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngClass", ctx.isSeller ? "l-sell-text" : "l-buy-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" You Are ", ctx._lotMatch.userType + "ing", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.hasAgent);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.matchItems);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgSwitchCase, _angular_material_legacy_progress_spinner__WEBPACK_IMPORTED_MODULE_20__.MatLegacyProgressSpinner, _angular_common__WEBPACK_IMPORTED_MODULE_16__.DatePipe],
    styles: [".l-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: -moz-fit-content;\n  height: fit-content;\n  background-color: transparent;\n}\n\n.l-card[_ngcontent-%COMP%] {\n  width: 100%;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: flex;\n  flex-direction: column;\n  background-color: #ffffff;\n  border-radius: 4px;\n}\n\n.l-header[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 6px 8px 16px;\n  border-radius: 4px 4px 0px 0px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n}\n\n.l-banner-sell[_ngcontent-%COMP%] {\n  background-color: #e7f7f0;\n}\n\n.l-banner-buy[_ngcontent-%COMP%] {\n  background-color: #f7e8e7;\n}\n\n.l-buy-text[_ngcontent-%COMP%] {\n  color: #d2303d;\n  text-align: left;\n}\n\n.l-sell-text[_ngcontent-%COMP%] {\n  color: #1caf7e;\n  text-align: left;\n}\n\n.l-content[_ngcontent-%COMP%] {\n  width: 100%;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\n.l-row[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: flex;\n  align-items: center;\n  padding: 8px 16px;\n}\n\n.l-item-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding-right: 8px;\n  margin-left: 16px;\n}\n\n.l-match-item[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-family: \"Montserrat\", sans-serif;\n  color: #404040;\n  font-size: 16px;\n  text-align: left;\n}\n\n.l-info-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: flex;\n  align-items: flex-start;\n  margin-top: 2px;\n}\n\n.l-info-text[_ngcontent-%COMP%] {\n  color: #b1150a !important;\n  font-weight: 600;\n  max-width: 180px;\n  margin: 0;\n}\n\n.l-edit[_ngcontent-%COMP%] {\n  pointer-events: none !important;\n  color: #d2303d;\n  font-weight: 500;\n  text-decoration: underline;\n}\n\n.l-match[_ngcontent-%COMP%] {\n  pointer-events: none !important;\n  color: #407ef8;\n  font-weight: 500;\n}\n\n.l-match-edit[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n\n.l-agent-tag[_ngcontent-%COMP%] {\n  padding: 8px 16px 8px 16px;\n  border-radius: 4px;\n  height: 28px;\n  width: 62px;\n  background: rgba(54, 89, 166, 0.1);\n  color: #407ef8;\n  margin-left: auto;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvc2hhcmVkL2NvbXBvbmVudHMvbG90LW1hdGNoLXRhYmxlL2xvdC1tYXRjaC10YWJsZS5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFdBQUE7RUFDQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsNkJBQUE7QUFESjs7QUFJQTtFQUNJLFdBQUE7RUFDQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkMwRFk7QUQzRGhCOztBQUlBO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBREo7O0FBSUE7RUFDSSx5QkNrQmM7QURuQmxCOztBQUlBO0VBQ0kseUJDZ0JZO0FEakJoQjs7QUFJQTtFQUNJLGNDV1U7RURWVixnQkFBQTtBQURKOztBQUlBO0VBQ0ksY0NJWTtFREhaLGdCQUFBO0FBREo7O0FBSUE7RUFDSSxXQUFBO0VBQ0Esd0JBQUE7RUFBQSxtQkFBQTtBQURKOztBQUlBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7RUFBQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBREo7O0FBSUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBREo7O0FBSUE7RUFDSSxnQkNSb0I7RURTcEIscUNDWFE7RURZUixjQzdCUTtFRDhCUixlQUFBO0VBQ0EsZ0JBQUE7QUFESjs7QUFJQTtFQUNJLFdBQUE7RUFDQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQURKOztBQUlBO0VBQ0kseUJBQUE7RUFDQSxnQkN6Qm9CO0VEMEJwQixnQkFBQTtFQUNBLFNBQUE7QUFESjs7QUFJQTtFQUNJLCtCQUFBO0VBQ0EsY0M1Q1U7RUQ2Q1YsZ0JDaENrQjtFRGlDbEIsMEJBQUE7QUFESjs7QUFJQTtFQUNJLCtCQUFBO0VBQ0EsY0N4RFk7RUR5RFosZ0JDdkNrQjtBRHNDdEI7O0FBSUE7RUFDSSxpQkFBQTtBQURKOztBQUlBO0VBQ0ksMEJBQUE7RUFDQSxrQkNuQ1k7RURvQ1osWUFBQTtFQUNBLFdBQUE7RUFDQSxrQ0FBQTtFQUNBLGNDdEVZO0VEdUVaLGlCQUFBO0VBQ0EsZ0JDeERlO0VEeURmLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQURKIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3JjL3ZhcmlhYmxlcy5zY3NzJztcclxuXHJcbi5sLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmwtY2FyZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxufVxyXG5cclxuLmwtaGVhZGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogOHB4IDZweCA4cHggMTZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzICRib3JkZXItcmFkaXVzIDBweCAwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmwtYmFubmVyLXNlbGwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1ncmVlbjtcclxufVxyXG5cclxuLmwtYmFubmVyLWJ1eSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LXJlZDtcclxufVxyXG5cclxuLmwtYnV5LXRleHQge1xyXG4gICAgY29sb3I6ICRwcmltYXJ5LXJlZDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5sLXNlbGwtdGV4dCB7XHJcbiAgICBjb2xvcjogJHByaW1hcnktZ3JlZW47XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4ubC1jb250ZW50IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxufVxyXG5cclxuLmwtcm93IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogOHB4IDE2cHg7XHJcbn1cclxuXHJcbi5sLWl0ZW0tY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZy1yaWdodDogOHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbn1cclxuXHJcbi5sLW1hdGNoLWl0ZW0ge1xyXG4gICAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodC1zZW1pLWJvbGQ7XHJcbiAgICBmb250LWZhbWlseTogJHRleHQtZm9udDtcclxuICAgIGNvbG9yOiAkdGV4dC1kYXJrO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLmwtaW5mby1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgbWFyZ2luLXRvcDogMnB4O1xyXG59XHJcblxyXG4ubC1pbmZvLXRleHQge1xyXG4gICAgY29sb3I6ICRlcnJvci1tZXNzYWdlICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LXNlbWktYm9sZDtcclxuICAgIG1heC13aWR0aDogMTgwcHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5sLWVkaXQge1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAkcHJpbWFyeS1yZWQ7XHJcbiAgICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LXJlZ3VsYXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLmwtbWF0Y2gge1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuICAgIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQtcmVndWxhcjtcclxufVxyXG5cclxuLmwtbWF0Y2gtZWRpdCB7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG5cclxuLmwtYWdlbnQtdGFnIHtcclxuICAgIHBhZGRpbmc6IDhweCAxNnB4IDhweCAxNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICB3aWR0aDogNjJweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoNTQsIDg5LCAxNjYsIDAuMSk7XHJcbiAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQtYm9sZDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuIiwiLy8gVGV4dFxyXG4kYXBwLWZvbnQ6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuJGFwcC1pbnB1dC1mb250OiAnTXVsaXNoJywgc2Fucy1zZXJpZjtcclxuJGFwcC1mb250LWJsYWNrOiAjMzQzNDM0O1xyXG4kYXBwLXRleHQtZ3JleTogIzcwNzA3MDtcclxuJGFwcC1mb250LWlucHV0LXBsYWNlaG9sZGVyOiByZ2JhKDMwLCA0OCwgMzcsIDAuNTYpO1xyXG4kYXBwLWZvcm0taW5mby1jb2xvcjogI2FmYWZhZjtcclxuXHJcbi8vIENvbG9yc1xyXG4kYXBwLWJnLWNvbG9yOiAjZjlmOWZjO1xyXG4kYXBwLWJ1eWluZy1yZWQ6ICNlNzZmNTE7XHJcbiRhcHAtc2VsbGluZy1ncmVlbjogIzdmYTk5NTtcclxuJGFwcC1pbnB1dC1iZy1jb2xvcjogI2U2ZTZlNjtcclxuJGFwcC1ib3R0b20tbmF2LWl0ZW0tYmc6ICNlNWVmZTk7XHJcbiRhcHAtdGFicy1tYXJrZXRwbGFjZS1ncmVlbjogIzI4NWQ2MDtcclxuJGFwcC10YWJzLW5lZ290aWF0aW9ucy1ibHVlOiAjNGY5ZWJkO1xyXG4kYXBwLW5vdGlmaWNhdGlvbi1yZWQ6ICNhNTNhNGE7XHJcblxyXG4vLyBHcmFkaWVudHNcclxuJGFwcC1zZWxsaW5nLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjOThiNGE3LCAjNGE2ZTVlKTtcclxuJGFwcC1idXlpbmctZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICNkZjhhNzUsICNhMjUzM2YpO1xyXG4kYXBwLXNlbGxpbmctY2FyZC1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgIzg1YWU5YiwgIzczOWU4YSk7XHJcbiRhcHAtYnV5aW5nLWNhcmQtZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICRhcHAtYnV5aW5nLXJlZCwgI2M3NWQ0Myk7XHJcblxyXG4vLyBCdXR0b25zXHJcbiRhcHAtcHJpbWFyeS1idXR0b24tYmctY29sb3I6ICMzMWEwNWY7XHJcbiRhcHAtc2Vjb25kYXJ5LWJ1dHRvbi1iZy1jb2xvcjogI2U1ZTVlNTtcclxuJGFwcC1kZWxldGUtYnV0dG9uLXJlZDogI2QzNDU1YjtcclxuXHJcbi8vIE90aGVyXHJcbiRhcHAtYm9yZGVyLXJhZGl1czogOHB4O1xyXG4kYXBwLWJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDgpICFpbXBvcnRhbnQ7XHJcblxyXG4vLyAjcmVnaW9uIE1hdGNoIEV4Y2hhbmdlXHJcblxyXG4vLyAjcmVnaW9uIENvbG9yc1xyXG5cclxuJGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiRiYWNrZ3JvdW5kLWNvbG9yLWdyZXk6ICNmNWY1ZjU7XHJcbiR0ZXh0LWRhcms6ICM0MDQwNDA7XHJcbiR0ZXh0LXBsYWNlaG9sZGVyOiAjOGM4YzhjO1xyXG4kcHJpbWFyeS1jb2xvcjogIzQwN2VmODtcclxuJHNlY29uZGFyeS1jb2xvcjogI2U1ZWRmZDtcclxuJG1lZGl1bS1ibHVlOiAjOGQ5ZWM1O1xyXG4kcHJpbWFyeS1ncmVlbjogIzFjYWY3ZTtcclxuJHNlY29uZGFyeS1ncmVlbjogI2U3ZjdmMDtcclxuJHByaW1hcnktcmVkOiAjZDIzMDNkO1xyXG4kc2Vjb25kYXJ5LXJlZDogI2Y3ZThlNztcclxuJGlucHV0LWJvcmRlcjogI2UyZThmMDtcclxuJGVycm9yLW1lc3NhZ2U6ICNiMTE1MGE7XHJcbiRkaXNhYmxlZC1jb2xvcjogI2NiY2JjYjtcclxuXHJcbi8vICNlbmRyZWdpb25cclxuXHJcbi8vICNyZWdpb24gVGV4dFxyXG5cclxuJHRleHQtZm9udDogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4kZm9udC13ZWlnaHQtYm9sZDogNzAwO1xyXG4kZm9udC13ZWlnaHQtc2VtaS1ib2xkOiA2MDA7XHJcbiRmb250LXdlaWdodC1yZWd1bGFyOiA1MDA7XHJcbiRmb250LXdlaWdodC1saWdodDogNDAwO1xyXG5cclxuLy8gI2VuZHJlZ2lvblxyXG5cclxuLy8gI3JlZ2lvbiBCdXR0b25zXHJcblxyXG4kYnV0dG9uLWZvbnQtd2VpZ2h0OiA2MDA7XHJcblxyXG4vLyAjZW5kcmVnaW9uXHJcblxyXG4vLyAjcmVnaW9uIE90aGVyXHJcblxyXG4kYm9yZGVyLXJhZGl1czogNHB4O1xyXG5cclxuLy8gI2VuZHJlZ2lvblxyXG5cclxuLy8gI2VuZHJlZ2lvblxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}
class LotMatchTableModule {
  static #_ = this.ɵfac = function LotMatchTableModule_Factory(t) {
    return new (t || LotMatchTableModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
    type: LotMatchTableModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_21__.MatStepperModule, _angular_material_legacy_progress_spinner__WEBPACK_IMPORTED_MODULE_20__.MatLegacyProgressSpinnerModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](LotMatchTableModule, {
    declarations: [LotMatchTableComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_21__.MatStepperModule, _angular_material_legacy_progress_spinner__WEBPACK_IMPORTED_MODULE_20__.MatLegacyProgressSpinnerModule],
    exports: [LotMatchTableComponent]
  });
})();

/***/ })

}]);
//# sourceMappingURL=default-src_app_features_shared_components_lot-match-table_lot-match-table_component_ts.js.map