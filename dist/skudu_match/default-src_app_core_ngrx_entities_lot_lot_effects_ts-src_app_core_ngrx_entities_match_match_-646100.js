"use strict";
(self["webpackChunkskudu_match"] = self["webpackChunkskudu_match"] || []).push([["default-src_app_core_ngrx_entities_lot_lot_effects_ts-src_app_core_ngrx_entities_match_match_-646100"],{

/***/ 4542:
/*!*******************************************************!*\
  !*** ./src/app/core/ngrx/entities/lot/lot.effects.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LotEffects: () => (/* binding */ LotEffects)
/* harmony export */ });
/* harmony import */ var _services_lot_lot_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../services/lot/lot.service */ 8321);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var src_app_core_services_api_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/api/api.service */ 7588);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ 1575);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 1891);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 1527);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 2607);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 2389);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/helpers/index.actions */ 5626);
/* harmony import */ var src_app_core_ngrx_reducers_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/ngrx/reducers/index */ 7032);
/* harmony import */ var _helpers_snackbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../helpers/snackbar */ 2179);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/snack-bar */ 9409);
















class LotEffects {
  //#endregion
  constructor(actions$, api, store, lotService, snackbar) {
    this.actions$ = actions$;
    this.api = api;
    this.store = store;
    this.lotService = lotService;
    this.snackbar = snackbar;
    // #region CREATE
    // #region ReqCreateLot
    this.ReqCreateLot$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.lotActions.ReqCreateLot), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(payload => {
      const clientUid = payload.clientUid ? payload.clientUid : null;
      return this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.select)(src_app_core_ngrx_reducers_index__WEBPACK_IMPORTED_MODULE_3__.authSelectors.getUserEntities), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(entities => {
        return this.api.getEntityById(entities[0].id);
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(entity => {
        const lot = {
          ...payload.lot,
          tradingEntityId: entity.tradingEntities[0].id
        };
        return this.api.createLot(lot, clientUid);
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.mergeMap)(lot => {
        this.snackbar.open('Successfully Created The Lot', 'CLOSE', _helpers_snackbar__WEBPACK_IMPORTED_MODULE_4__.notificationConfig);
        return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.lotActions.CreateLotSuccess({
          lot
        })];
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.catchError)(error => {
        console.log('ReqCreateLot: ', error.message);
        this.snackbar.open('An Error Occurred When Attempting To Create The Lot', 'CLOSE', _helpers_snackbar__WEBPACK_IMPORTED_MODULE_4__.errorConfig);
        return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.lotActions.CreateLotFail()];
      }));
    })));
    // #endregion
    // #endregion
    // #region READ
    // #region ReqUserLots
    this.ReqUserLots$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.lotActions.ReqUserLots), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.mergeMap)(payload => {
      return this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.select)(src_app_core_ngrx_reducers_index__WEBPACK_IMPORTED_MODULE_3__.authSelectors.getUserEntities), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(entities => {
        return this.api.getEntityById(entities[0].id);
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(entity => {
        const tradingEntityId = entity.tradingEntities[0].id;
        return this.api.getUserLotCards(tradingEntityId);
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(lotCards => {
        return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.lotActions.UserLotsSuccess({
          lotCards
        })];
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.catchError)(error => {
        console.log('ReqUserLots: ', error.message);
        return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.lotActions.UserLotsFail()];
      }));
    })));
    // #endregion
    // #region ReqLotFormData
    this.ReqLotFormData$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.lotActions.ReqLotFormData), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.mergeMap)(payload => {
      return this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.select)(src_app_core_ngrx_reducers_index__WEBPACK_IMPORTED_MODULE_3__.authSelectors.getUserEntities), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(entities => {
        return this.lotService.getLotFormData(payload.lotId, entities[0].id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.mergeMap)(([lot, deliveryPoints, publicDeliveryPoints, crops, incoTerms, paymentOptions, unitsOfMeasure]) => {
          return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.lotActions.LotFormDataSuccess({
            lot,
            deliveryPoints: [...deliveryPoints, ...publicDeliveryPoints],
            crops,
            incoTerms,
            paymentOptions,
            unitsOfMeasure
          })];
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.catchError)(error => {
          console.log('ReqLotFormData: ', error.message);
          return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.lotActions.LotFormDataFail()];
        }));
      }));
    })));
    // #endregion
    // #endregion
    // #region UPDATE
    // #region ReqUpdateLot
    this.ReqUpdateLot$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.lotActions.ReqUpdateLot), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(({
      lot,
      clientUid
    }) => {
      const lotChanges = {
        ...lot
      };
      return this.api.updateLot(lotChanges, clientUid);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(lot => {
      this.snackbar.open('Successfully Updated The Lot', 'CLOSE', _helpers_snackbar__WEBPACK_IMPORTED_MODULE_4__.successConfig);
      return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.lotActions.UpdateLotSuccess({
        lot
      })];
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.catchError)(error => {
      console.log('ReqUpdateLot: ', error.message);
      this.snackbar.open('An Error Occurred When Attempting To Update The Lot', 'CLOSE', _helpers_snackbar__WEBPACK_IMPORTED_MODULE_4__.errorConfig);
      return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.lotActions.UpdateLotFail()];
    })));
    // #endregion
    // #endregion
    // #region PRIVATISE LOTS
    this.ReqPrivatiseLots$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.lotActions.ReqPrivatiseLots), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(({
      lotIds
    }) => {
      return this.api.privatiseLots(lotIds).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(() => {
        return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.lotActions.PrivatiseLotsSuccess()];
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.catchError)(error => {
        console.log('ReqPrivatiseLots: ', error.message);
        this.snackbar.open('Oh Snap, something went wrong while trying to privatise the lots.', 'CLOSE', _helpers_snackbar__WEBPACK_IMPORTED_MODULE_4__.errorConfig);
        return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.lotActions.PrivatiseLotsFail()];
      }));
    })));
    //#endregion
    //#region DELETE
    this.ReqDeleteLot$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.lotActions.ReqDeleteLot), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.mergeMap)(payload => {
      const clientUid = payload.clientUid ? payload.clientUid : null;
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(payload).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.mergeMap)(({
        lotId
      }) => {
        return this.api.deleteLot(lotId, clientUid);
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.mergeMap)(({
        id: lotId
      }) => {
        this.snackbar.open('Successfully Deleted The Lot.', 'CLOSE', _helpers_snackbar__WEBPACK_IMPORTED_MODULE_4__.successConfig);
        return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.lotActions.DeleteLotSuccess({
          lotId
        })];
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.catchError)(error => {
        console.log('ReqDeleteLot: ', error.message);
        this.snackbar.open('The update operation was cancelled. Deleting is not available for a Lot with open negotiations.', 'CLOSE', _helpers_snackbar__WEBPACK_IMPORTED_MODULE_4__.errorConfig);
        return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.lotActions.DeleteLotFail()];
      }));
    })));
  }
  static #_ = this.ɵfac = function LotEffects_Factory(t) {
    return new (t || LotEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](src_app_core_services_api_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_services_lot_lot_service__WEBPACK_IMPORTED_MODULE_0__.LotService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__.MatSnackBar));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjectable"]({
    token: LotEffects,
    factory: LotEffects.ɵfac
  });
}

/***/ }),

/***/ 1833:
/*!***********************************************************!*\
  !*** ./src/app/core/ngrx/entities/match/match.effects.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MatchEffects: () => (/* binding */ MatchEffects)
/* harmony export */ });
/* harmony import */ var _services_lotMatch_lot_match_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../services/lotMatch/lot-match.service */ 9751);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var src_app_core_services_api_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/api/api.service */ 7588);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ 1575);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 2607);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 2389);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 1527);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 1891);
/* harmony import */ var src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/helpers/index.actions */ 5626);
/* harmony import */ var src_app_core_ngrx_reducers_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/ngrx/reducers/index */ 7032);
/* harmony import */ var _helpers_snackbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../helpers/snackbar */ 2179);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/snack-bar */ 9409);















class MatchEffects {
  // #endregion
  // #region DELETE
  // #endregion
  constructor(actions$, api, store, lotMatchService, snackbar) {
    this.actions$ = actions$;
    this.api = api;
    this.store = store;
    this.lotMatchService = lotMatchService;
    this.snackbar = snackbar;
    // #region CREATE
    // #region ReqCreateLotMatch
    this.ReqCreateLotMatch$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.matchActions.ReqCreateLotMatch), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.mergeMap)(payload => {
      return this.api.createLotMatch(payload.lotMatch).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.mergeMap)(({
        id
      }) => {
        return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.matchActions.CreateLotMatchSuccess({
          id
        })];
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(error => {
        console.log('ReqCreateLotMatch: ', error.message);
        this.snackbar.open('An Error Occurred When Attempting To Create A Negotiation. Please try reload the page.', 'CLOSE', _helpers_snackbar__WEBPACK_IMPORTED_MODULE_4__.errorConfig);
        return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.matchActions.CreateLotMatchFail()];
      }));
    })));
    // #endregion
    // #region ReqLotFormData
    this.ReqLotFormData$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.matchActions.ReqLotMatchFormData), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.mergeMap)(payload => {
      return this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.select)(src_app_core_ngrx_reducers_index__WEBPACK_IMPORTED_MODULE_3__.authSelectors.getUserEntities), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.switchMap)(entities => {
        return this.lotMatchService.getLotMatchFormData(payload.lotMatchId, entities[0].id, payload.clientUid).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.mergeMap)(([lotMatchIterations, deliveryPoints, publicDeliveryPoints, crops, incoTerms, paymentOptions, unitsOfMeasure]) => {
          return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.matchActions.LotMatchFormDataSuccess({
            lotMatchIterations,
            deliveryPoints: [...deliveryPoints, ...publicDeliveryPoints],
            crops,
            incoTerms,
            paymentOptions,
            unitsOfMeasure
          })];
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(error => {
          console.log('ReqLotMatchFormData: ', error.message);
          this.snackbar.open('There was an error when attempting to submit your match. Please refresh the page and try again.', 'CLOSE', _helpers_snackbar__WEBPACK_IMPORTED_MODULE_4__.notificationConfig);
          return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.matchActions.LotMatchFormDataFail()];
        }));
      }));
    })));
    // #endregion
    // #endregion
    // #region READ
    // #region ReqLoadLotMatches
    this.ReqLoadLotMatches$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.matchActions.ReqLoadLotMatches), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.mergeMap)(payload => {
      return this.api.getLotMatches(payload.lotId, payload.radius).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.mergeMap)(lotMatches => {
        return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.matchActions.LoadLotMatchesSuccess({
          matches: lotMatches
        })];
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(error => {
        console.log('ReqLoadLotMatches: ', error.message);
        return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.matchActions.LoadLotMatchesFail()];
      }));
    })));
    // #endregion
    // #region ReqLotHasBrokerCheck
    this.ReqLotHasBrokerCheck$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.matchActions.ReqLotHasBrokerCheck), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.mergeMap)(payload => {
      return this.api.getHasBroker(payload.lotIds).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.mergeMap)(hasBroker => {
        return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.matchActions.ReqLotHasBrokerCheckSuccess(hasBroker)];
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(error => {
        console.log('ReqLotHasBrokerCheck: ', error.message);
        return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.matchActions.ReqLotHasBrokerCheckFail()];
      }));
    })));
    // #endregion
    // #endregion
    // #region UPDATE
    this.ReqUpdateLotMatch$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.matchActions.ReqUpdateLotMatch), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.mergeMap)(payload => {
      return this.api.updateLotMatch(payload.lotMatch).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.mergeMap)(lotMatchIteration => {
        return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.matchActions.UpdateLotMatchSuccess({
          lotMatchIteration
        })];
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(error => {
        console.log('ReqUpdateLotMatch: ', error.message);
        this.snackbar.open('An Error Occurred When Attempting To Update The Negotiation. Please try reload the page.', 'CLOSE', _helpers_snackbar__WEBPACK_IMPORTED_MODULE_4__.errorConfig);
        return [src_app_core_helpers_index_actions__WEBPACK_IMPORTED_MODULE_2__.matchActions.UpdateLotMatchFail()];
      }));
    })));
  }
  static #_ = this.ɵfac = function MatchEffects_Factory(t) {
    return new (t || MatchEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](src_app_core_services_api_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_8__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_services_lotMatch_lot_match_service__WEBPACK_IMPORTED_MODULE_0__.LotMatchService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__.MatSnackBar));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjectable"]({
    token: MatchEffects,
    factory: MatchEffects.ɵfac
  });
}

/***/ }),

/***/ 9751:
/*!*************************************************************!*\
  !*** ./src/app/core/services/lotMatch/lot-match.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LotMatchService: () => (/* binding */ LotMatchService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 9736);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 1527);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 3839);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var src_app_core_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/api/api.service */ 7588);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);





class LotMatchService {
  constructor(api) {
    this.api = api;
  }
  getLotMatchFormData(lotMatchId, entityId, clientUid = null) {
    if (lotMatchId) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.combineLatest)([(0,rxjs__WEBPACK_IMPORTED_MODULE_1__.combineLatest)([this.api.getLotMatchIterations(lotMatchId, clientUid), this.api.getEntitysDeliveryPoints(entityId), this.api.getPublicDeliveryPoints(), this.api.getAllCrops()]), (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.combineLatest)([this.api.getIncoTerms(), this.api.getPaymentOptions(), this.api.getUnitOfMeasure()])]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(([[lotMatchIterations, entityDeliveryPoints, publicDeliverPoints, crops], [incoTerms, paymentOptions, unitsOfMeasure]]) => {
        return [lotMatchIterations, entityDeliveryPoints, publicDeliverPoints, crops, incoTerms, paymentOptions, unitsOfMeasure];
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1));
    } else {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.combineLatest)([(0,rxjs__WEBPACK_IMPORTED_MODULE_1__.combineLatest)([(0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(null), this.api.getEntitysDeliveryPoints(entityId), this.api.getPublicDeliveryPoints(), this.api.getAllCrops()]), (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.combineLatest)([this.api.getIncoTerms(), this.api.getPaymentOptions(), this.api.getUnitOfMeasure()])]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(([[lotMatchIterations, entityDeliveryPoints, publicDeliverPoints, crops], [incoTerms, paymentOptions, unitsOfMeasure]]) => {
        return [lotMatchIterations, entityDeliveryPoints, publicDeliverPoints, crops, incoTerms, paymentOptions, unitsOfMeasure];
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1));
    }
  }
  static #_ = this.ɵfac = function LotMatchService_Factory(t) {
    return new (t || LotMatchService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_core_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: LotMatchService,
    factory: LotMatchService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 8321:
/*!**************************************************!*\
  !*** ./src/app/core/services/lot/lot.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LotService: () => (/* binding */ LotService)
/* harmony export */ });
/* harmony import */ var src_app_core_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/api/api.service */ 7588);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 3839);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 9736);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 1527);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);





class LotService {
  constructor(api) {
    this.api = api;
  }
  getLotFormData(lotId, entityId) {
    if (lotId) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.combineLatest)([(0,rxjs__WEBPACK_IMPORTED_MODULE_1__.combineLatest)([this.api.getLotById(lotId), this.api.getEntitysDeliveryPoints(entityId), this.api.getPublicDeliveryPoints(), this.api.getAllCrops()]), (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.combineLatest)([this.api.getIncoTerms(), this.api.getPaymentOptions(), this.api.getUnitOfMeasure()])]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(([[lot, entityDeliveryPoints, publicDeliverPoints, crops], [incoTerms, paymentOptions, unitsOfMeasure]]) => {
        return [lot, entityDeliveryPoints, publicDeliverPoints, crops, incoTerms, paymentOptions, unitsOfMeasure];
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1));
    } else {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.combineLatest)([(0,rxjs__WEBPACK_IMPORTED_MODULE_1__.combineLatest)([(0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(null), this.api.getEntitysDeliveryPoints(entityId), this.api.getPublicDeliveryPoints(), this.api.getAllCrops()]), (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.combineLatest)([this.api.getIncoTerms(), this.api.getPaymentOptions(), this.api.getUnitOfMeasure()])]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(([[lot, entityDeliveryPoints, publicDeliverPoints, crops], [incoTerms, paymentOptions, unitsOfMeasure]]) => {
        return [lot, entityDeliveryPoints, publicDeliverPoints, crops, incoTerms, paymentOptions, unitsOfMeasure];
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1));
    }
  }
  static #_ = this.ɵfac = function LotService_Factory(t) {
    return new (t || LotService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_core_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: LotService,
    factory: LotService.ɵfac,
    providedIn: 'root'
  });
}

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

/***/ }),

/***/ 2523:
/*!*****************************************************************************************!*\
  !*** ./src/app/features/shared/components/step-info-modal/step-info-modal.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StepInfoModalComponent: () => (/* binding */ StepInfoModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/legacy-dialog */ 1035);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);



class StepInfoModalComponent {
  constructor(dialogRef, data) {
    this.dialogRef = dialogRef;
    this.data = data;
  }
  ngOnInit() {}
  handleClose() {
    this.dialogRef.close();
  }
  static #_ = this.ɵfac = function StepInfoModalComponent_Factory(t) {
    return new (t || StepInfoModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_1__.MatLegacyDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_legacy_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_LEGACY_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: StepInfoModalComponent,
    selectors: [["app-step-info-modal"]],
    decls: 11,
    vars: 3,
    consts: [[1, "l-container"], [1, "l-header"], ["src", "./assets/icons/close-icon-dark.svg", "alt", "close", 1, "l-close-icon", 3, "click"], ["alt", "icon", 1, "l-icon", 3, "src"], [1, "g-text-h1-dark"], [1, "l-content", "g-text-p-dark"], [3, "innerHTML"], [1, "g-primary-button", 3, "click"]],
    template: function StepInfoModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StepInfoModalComponent_Template_img_click_2_listener() {
          return ctx.handleClose();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4)(5, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StepInfoModalComponent_Template_button_click_9_listener() {
          return ctx.handleClose();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Okay, got it!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.data.stepInfo == null ? null : ctx.data.stepInfo.iconPath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.stepInfo == null ? null : ctx.data.stepInfo.heading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.data.stepInfo == null ? null : ctx.data.stepInfo.body, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    },
    styles: [".l-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0 16px;\n}\n\n.l-header[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.l-close-icon[_ngcontent-%COMP%] {\n  width: 18px;\n  height: auto;\n  position: absolute;\n  top: 0;\n  right: 0;\n  cursor: pointer;\n}\n\n.l-content[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 24px 0;\n  text-align: left;\n}\n\n.l-icon[_ngcontent-%COMP%] {\n  height: 56px;\n  width: 56px;\n  margin-bottom: 16px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvc2hhcmVkL2NvbXBvbmVudHMvc3RlcC1pbmZvLW1vZGFsL3N0ZXAtaW5mby1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FBREo7O0FBSUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQURKOztBQUlBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtBQURKOztBQUlBO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQURKOztBQUlBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQURKIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3JjL3ZhcmlhYmxlcy5zY3NzJztcclxuXHJcbi5sLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDAgMTZweDtcclxufVxyXG5cclxuLmwtaGVhZGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubC1jbG9zZS1pY29uIHtcclxuICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5sLWNvbnRlbnQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDI0cHggMDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5sLWljb24ge1xyXG4gICAgaGVpZ2h0OiA1NnB4O1xyXG4gICAgd2lkdGg6IDU2cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 4612:
/*!***********************************************************************************************!*\
  !*** ./src/app/features/shared/components/verification-badge/verification-badge.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VerificationBadgeComponent: () => (/* binding */ VerificationBadgeComponent),
/* harmony export */   VerificationBadgeModule: () => (/* binding */ VerificationBadgeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);



class VerificationBadgeComponent {
  constructor() {
    this.verificationTypes = {};
    this.isOwn = false;
    this.verificationId = 6;
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function VerificationBadgeComponent_Factory(t) {
    return new (t || VerificationBadgeComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: VerificationBadgeComponent,
    selectors: [["app-verification-badge"]],
    inputs: {
      verificationTypes: "verificationTypes",
      isOwn: "isOwn",
      verificationId: "verificationId"
    },
    decls: 7,
    vars: 3,
    consts: [[1, "l-container", "g-fade-in"], [1, "g-text-h2"], [1, "l-img-container"], ["alt", "verification-icon", 1, "l-img", 3, "src"], [1, "g-text-p", "g-text-grey"]],
    template: function VerificationBadgeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", !ctx.isOwn ? "Counterparty " : "", "Verification:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.verificationTypes[ctx.verificationId].source, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.verificationTypes[ctx.verificationId].name);
      }
    },
    styles: [".l-container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 16px;\n  background-color: #ffffff;\n  border-radius: 4px;\n}\n\n.l-img-container[_ngcontent-%COMP%] {\n  width: 48px;\n  margin: 16px auto;\n}\n\n.l-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvc2hhcmVkL2NvbXBvbmVudHMvdmVyaWZpY2F0aW9uLWJhZGdlL3ZlcmlmaWNhdGlvbi1iYWRnZS5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkNrRVk7QURuRWhCOztBQUlBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0FBREo7O0FBSUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQURKIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3JjL3ZhcmlhYmxlcy5zY3NzJztcclxuXHJcbi5sLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbn1cclxuXHJcbi5sLWltZy1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDQ4cHg7XHJcbiAgICBtYXJnaW46IDE2cHggYXV0bztcclxufVxyXG5cclxuLmwtaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcbiIsIi8vIFRleHRcclxuJGFwcC1mb250OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiRhcHAtaW5wdXQtZm9udDogJ011bGlzaCcsIHNhbnMtc2VyaWY7XHJcbiRhcHAtZm9udC1ibGFjazogIzM0MzQzNDtcclxuJGFwcC10ZXh0LWdyZXk6ICM3MDcwNzA7XHJcbiRhcHAtZm9udC1pbnB1dC1wbGFjZWhvbGRlcjogcmdiYSgzMCwgNDgsIDM3LCAwLjU2KTtcclxuJGFwcC1mb3JtLWluZm8tY29sb3I6ICNhZmFmYWY7XHJcblxyXG4vLyBDb2xvcnNcclxuJGFwcC1iZy1jb2xvcjogI2Y5ZjlmYztcclxuJGFwcC1idXlpbmctcmVkOiAjZTc2ZjUxO1xyXG4kYXBwLXNlbGxpbmctZ3JlZW46ICM3ZmE5OTU7XHJcbiRhcHAtaW5wdXQtYmctY29sb3I6ICNlNmU2ZTY7XHJcbiRhcHAtYm90dG9tLW5hdi1pdGVtLWJnOiAjZTVlZmU5O1xyXG4kYXBwLXRhYnMtbWFya2V0cGxhY2UtZ3JlZW46ICMyODVkNjA7XHJcbiRhcHAtdGFicy1uZWdvdGlhdGlvbnMtYmx1ZTogIzRmOWViZDtcclxuJGFwcC1ub3RpZmljYXRpb24tcmVkOiAjYTUzYTRhO1xyXG5cclxuLy8gR3JhZGllbnRzXHJcbiRhcHAtc2VsbGluZy1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgIzk4YjRhNywgIzRhNmU1ZSk7XHJcbiRhcHAtYnV5aW5nLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjZGY4YTc1LCAjYTI1MzNmKTtcclxuJGFwcC1zZWxsaW5nLWNhcmQtZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICM4NWFlOWIsICM3MzllOGEpO1xyXG4kYXBwLWJ1eWluZy1jYXJkLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAkYXBwLWJ1eWluZy1yZWQsICNjNzVkNDMpO1xyXG5cclxuLy8gQnV0dG9uc1xyXG4kYXBwLXByaW1hcnktYnV0dG9uLWJnLWNvbG9yOiAjMzFhMDVmO1xyXG4kYXBwLXNlY29uZGFyeS1idXR0b24tYmctY29sb3I6ICNlNWU1ZTU7XHJcbiRhcHAtZGVsZXRlLWJ1dHRvbi1yZWQ6ICNkMzQ1NWI7XHJcblxyXG4vLyBPdGhlclxyXG4kYXBwLWJvcmRlci1yYWRpdXM6IDhweDtcclxuJGFwcC1ib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjA4KSAhaW1wb3J0YW50O1xyXG5cclxuLy8gI3JlZ2lvbiBNYXRjaCBFeGNoYW5nZVxyXG5cclxuLy8gI3JlZ2lvbiBDb2xvcnNcclxuXHJcbiRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4kYmFja2dyb3VuZC1jb2xvci1ncmV5OiAjZjVmNWY1O1xyXG4kdGV4dC1kYXJrOiAjNDA0MDQwO1xyXG4kdGV4dC1wbGFjZWhvbGRlcjogIzhjOGM4YztcclxuJHByaW1hcnktY29sb3I6ICM0MDdlZjg7XHJcbiRzZWNvbmRhcnktY29sb3I6ICNlNWVkZmQ7XHJcbiRtZWRpdW0tYmx1ZTogIzhkOWVjNTtcclxuJHByaW1hcnktZ3JlZW46ICMxY2FmN2U7XHJcbiRzZWNvbmRhcnktZ3JlZW46ICNlN2Y3ZjA7XHJcbiRwcmltYXJ5LXJlZDogI2QyMzAzZDtcclxuJHNlY29uZGFyeS1yZWQ6ICNmN2U4ZTc7XHJcbiRpbnB1dC1ib3JkZXI6ICNlMmU4ZjA7XHJcbiRlcnJvci1tZXNzYWdlOiAjYjExNTBhO1xyXG4kZGlzYWJsZWQtY29sb3I6ICNjYmNiY2I7XHJcblxyXG4vLyAjZW5kcmVnaW9uXHJcblxyXG4vLyAjcmVnaW9uIFRleHRcclxuXHJcbiR0ZXh0LWZvbnQ6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuJGZvbnQtd2VpZ2h0LWJvbGQ6IDcwMDtcclxuJGZvbnQtd2VpZ2h0LXNlbWktYm9sZDogNjAwO1xyXG4kZm9udC13ZWlnaHQtcmVndWxhcjogNTAwO1xyXG4kZm9udC13ZWlnaHQtbGlnaHQ6IDQwMDtcclxuXHJcbi8vICNlbmRyZWdpb25cclxuXHJcbi8vICNyZWdpb24gQnV0dG9uc1xyXG5cclxuJGJ1dHRvbi1mb250LXdlaWdodDogNjAwO1xyXG5cclxuLy8gI2VuZHJlZ2lvblxyXG5cclxuLy8gI3JlZ2lvbiBPdGhlclxyXG5cclxuJGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHJcbi8vICNlbmRyZWdpb25cclxuXHJcbi8vICNlbmRyZWdpb25cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}
class VerificationBadgeModule {
  static #_ = this.ɵfac = function VerificationBadgeModule_Factory(t) {
    return new (t || VerificationBadgeModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: VerificationBadgeModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](VerificationBadgeModule, {
    declarations: [VerificationBadgeComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
    exports: [VerificationBadgeComponent]
  });
})();

/***/ })

}]);
//# sourceMappingURL=default-src_app_core_ngrx_entities_lot_lot_effects_ts-src_app_core_ngrx_entities_match_match_-646100.js.map