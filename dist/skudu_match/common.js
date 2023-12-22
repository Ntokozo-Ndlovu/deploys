"use strict";
(self["webpackChunkskudu_match"] = self["webpackChunkskudu_match"] || []).push([["common"],{

/***/ 8999:
/*!************************************************************************!*\
  !*** ./src/app/core/ngrx/entities/negotiations/negotiation.effects.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NegotiationEffects: () => (/* binding */ NegotiationEffects)
/* harmony export */ });
/* harmony import */ var _helpers_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../helpers/constants */ 9487);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ 6270);
/* harmony import */ var src_app_core_services_api_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/api/api.service */ 7588);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ 1575);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 2607);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 1527);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 1891);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 2389);
/* harmony import */ var _negotiations_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../negotiations/index */ 9602);
/* harmony import */ var src_app_core_ngrx_reducers_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/ngrx/reducers/index */ 7032);
/* harmony import */ var _helpers_snackbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../helpers/snackbar */ 2179);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/snack-bar */ 9409);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 7947);
















class NegotiationEffects {
  // #endregion
  // #endregion
  //#region DELETE
  //#endregion
  constructor(actions$, api, store, snackbar, router) {
    this.actions$ = actions$;
    this.api = api;
    this.store = store;
    this.snackbar = snackbar;
    this.router = router;
    // #region CREATE
    // #endregion
    // #region READ
    // #region ReqUserNegotiations
    this.ReqUserNegotiations$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(_negotiations_index__WEBPACK_IMPORTED_MODULE_2__.negotiationActions.ReqUserNegotiationCards), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.mergeMap)(payload => {
      const clientUid = payload.clientUid;
      return this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.select)(src_app_core_ngrx_reducers_index__WEBPACK_IMPORTED_MODULE_3__.authSelectors.getUserEntities), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(entities => {
        return this.api.getEntityById(entities[0].id);
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(entity => {
        const tradingEntityId = entity.tradingEntities[0].id;
        return this.api.getUserNegotiationCards(tradingEntityId, clientUid);
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(negotiationCards => {
        const activeNegotiationCards = negotiationCards.filter(card => !card.isCompleted);
        const completedNegotiationCards = negotiationCards.filter(card => card.isCompleted);
        return [_negotiations_index__WEBPACK_IMPORTED_MODULE_2__.negotiationActions.UserNegotiationCardsSuccess({
          activeNegotiationCards,
          completedNegotiationCards
        })];
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.catchError)(error => {
        console.log('ReqUserNegotiations: ', error.message);
        return [_negotiations_index__WEBPACK_IMPORTED_MODULE_2__.negotiationActions.UserNegotiationCardsFail()];
      }));
    })));
    // #endregion
    // #region ReqGetAvailableMatchIds
    this.ReqGetAvailableMatchIds$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(_negotiations_index__WEBPACK_IMPORTED_MODULE_2__.negotiationActions.ReqGetAvailableMatchIds), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(payload => {
      return this.api.getAvailableMatchedIds(payload.lotMatchId, payload.clientUid).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.mergeMap)(lotMatchIds => {
        return [_negotiations_index__WEBPACK_IMPORTED_MODULE_2__.negotiationActions.GetAvailableMatchIdsSuccess({
          lotMatchIds
        })];
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.catchError)(error => {
        console.log('ReqGetAvailableMatchIds: ', error.message);
        return [_negotiations_index__WEBPACK_IMPORTED_MODULE_2__.negotiationActions.GetAvailableMatchIdsFail()];
      }));
    })));
    // #endregion
    // #region ReqLatestLotMatchIteration
    this.ReqLatestLotMatchIteration$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(_negotiations_index__WEBPACK_IMPORTED_MODULE_2__.negotiationActions.ReqLatestLotMatchIteration), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.mergeMap)(payload => {
      return this.api.getLotMatchIterations(payload.lotMatchId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.mergeMap)(lotMatchIterations => {
        const latestMatch = lotMatchIterations.splice(-1)[0];
        return [_negotiations_index__WEBPACK_IMPORTED_MODULE_2__.negotiationActions.LatestLotMatchIterationSuccess({
          latestMatch
        })];
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.catchError)(error => {
        console.log('ReqLatestLotMatchIteration: ', error.message);
        this.snackbar.open('There was an error when attempting to fetch the match. Please refresh the page and try again.', 'CLOSE', _helpers_snackbar__WEBPACK_IMPORTED_MODULE_4__.notificationConfig);
        return [_negotiations_index__WEBPACK_IMPORTED_MODULE_2__.negotiationActions.LatestLotMatchIterationFail()];
      }));
    })));
    // #endregion
    // #endregion
    // #region UPDATE
    // #region ReqCompleteNegotiation
    this.ReqCompleteNegotiation$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(_negotiations_index__WEBPACK_IMPORTED_MODULE_2__.negotiationActions.ReqCompleteNegotiation), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.mergeMap)(payload => {
      return this.api.completeNegotiation(payload.lotMatch, payload.clientHasBroker, payload.counterPartyHasBroker).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.mergeMap)(() => {
        return [_negotiations_index__WEBPACK_IMPORTED_MODULE_2__.negotiationActions.CompleteNegotiationSuccess()];
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.catchError)(error => {
        console.log('ReqCompleteNegotiation: ', error.message);
        this.snackbar.open('The Negotiation details seem to have changed. Please refresh for latest match values or check your completed Negotiations. ', 'CLOSE', _helpers_snackbar__WEBPACK_IMPORTED_MODULE_4__.notificationConfig);
        return [_negotiations_index__WEBPACK_IMPORTED_MODULE_2__.negotiationActions.CompleteNegotiationFail()];
      }));
    })));
    // #endregion
    // #region ReqDeclineNegotiation
    this.ReqDeclineNegotiation$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(_negotiations_index__WEBPACK_IMPORTED_MODULE_2__.negotiationActions.ReqDeclineNegotiation), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.mergeMap)(payload => {
      return this.api.declineNegotiation(payload.lotMatch).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.mergeMap)(() => {
        this.snackbar.open('Negotiation Declined Successfully', 'CLOSE', _helpers_snackbar__WEBPACK_IMPORTED_MODULE_4__.notificationConfig);
        const updatedActiveNegotiationIds = payload.activeNegotiationIds.filter(activeNegotiationId => activeNegotiationId !== payload.lotMatch.id);
        if (updatedActiveNegotiationIds.length === 0) this.router.navigate([_helpers_constants__WEBPACK_IMPORTED_MODULE_0__.NEGOTIATING_ROOM_ROUTE]);
        return [_negotiations_index__WEBPACK_IMPORTED_MODULE_2__.negotiationActions.DeclineNegotiationSuccess({
          activeNegotiationIds: updatedActiveNegotiationIds
        }), _negotiations_index__WEBPACK_IMPORTED_MODULE_2__.negotiationActions.GetAvailableMatchIdsSuccess({
          lotMatchIds: updatedActiveNegotiationIds
        })];
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.catchError)(error => {
        console.log('ReqDeclineNegotiation: ', error.message);
        this.snackbar.open('Failed To Decline Negotiation. Please Try Again', 'CLOSE', _helpers_snackbar__WEBPACK_IMPORTED_MODULE_4__.notificationConfig);
        return [_negotiations_index__WEBPACK_IMPORTED_MODULE_2__.negotiationActions.DeclineNegotiationFail()];
      }));
    })));
    // #endregion
    // #region ReqClearNegotiation
    this.ReqClearNegotiation$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(_negotiations_index__WEBPACK_IMPORTED_MODULE_2__.negotiationActions.ReqClearNegotiation), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.mergeMap)(payload => {
      return this.api.clearNegotiation(payload.lotMatch, payload.requestedBy).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.mergeMap)(() => {
        return [_negotiations_index__WEBPACK_IMPORTED_MODULE_2__.negotiationActions.ClearNegotiationSuccess()];
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.catchError)(error => {
        console.log('ReqCompleteNegotiation: ', error.message);
        this.snackbar.open('Failed to send Email, please try again', 'CLOSE', _helpers_snackbar__WEBPACK_IMPORTED_MODULE_4__.notificationConfig);
        return [_negotiations_index__WEBPACK_IMPORTED_MODULE_2__.negotiationActions.ClearNegotiationFail()];
      }));
    })));
  }
  static #_ = this.ɵfac = function NegotiationEffects_Factory(t) {
    return new (t || NegotiationEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](src_app_core_services_api_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjectable"]({
    token: NegotiationEffects,
    factory: NegotiationEffects.ɵfac
  });
}

/***/ })

}]);
//# sourceMappingURL=common.js.map