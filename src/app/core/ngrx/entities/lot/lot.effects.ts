import { Lot } from 'src/app/core/models/queryModels';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LotService } from './../../../services/lot/lot.service';
import { Store, select } from '@ngrx/store';
import { ApiService } from 'src/app/core/services/api/api.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { switchMap, mergeMap, catchError, take } from 'rxjs/operators';
import { of } from 'rxjs';

import * as actions from 'src/app/core/helpers/index.actions';
import * as fromRoot from 'src/app/core/ngrx/reducers/index';
import * as snackBarConfigs from '../../../helpers/snackbar';

@Injectable()
export class LotEffects {
    // #region CREATE
    // #region ReqCreateLot
    ReqCreateLot$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.lotActions.ReqCreateLot),
            switchMap((payload) => {
                const clientUid = payload.clientUid ? payload.clientUid : null;
                return this.store.pipe(
                    select(fromRoot.authSelectors.getUserEntities),
                    take(1),
                    switchMap((entities) => {
                        return this.api.getEntityById(entities[0].id);
                    }),
                    switchMap((entity) => {
                        const lot: Lot = { ...payload.lot, tradingEntityId: entity.tradingEntities[0].id };
                        return this.api.createLot(lot, clientUid);
                    }),
                    mergeMap((lot) => {
                        this.snackbar.open('Successfully Created The Lot', 'CLOSE', snackBarConfigs.notificationConfig);
                        return [actions.lotActions.CreateLotSuccess({ lot })];
                    }),
                    catchError((error) => {
                        console.log('ReqCreateLot: ', error.message);
                        this.snackbar.open(
                            'An Error Occurred When Attempting To Create The Lot',
                            'CLOSE',
                            snackBarConfigs.errorConfig,
                        );
                        return [actions.lotActions.CreateLotFail()];
                    }),
                );
            }),
        ),
    );
    // #endregion
    // #endregion

    // #region READ

    // #region ReqUserLots
    ReqUserLots$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.lotActions.ReqUserLots),
            mergeMap((payload) => {
                return this.store.pipe(
                    select(fromRoot.authSelectors.getUserEntities),
                    take(1),
                    switchMap((entities) => {
                        return this.api.getEntityById(entities[0].id);
                    }),
                    switchMap((entity) => {
                        const tradingEntityId = entity.tradingEntities[0].id;

                        return this.api.getUserLotCards(tradingEntityId);
                    }),
                    switchMap((lotCards) => {
                        return [actions.lotActions.UserLotsSuccess({ lotCards })];
                    }),
                    catchError((error) => {
                        console.log('ReqUserLots: ', error.message);
                        return [actions.lotActions.UserLotsFail()];
                    }),
                );
            }),
        ),
    );
    // #endregion

    // #region ReqLotFormData
    ReqLotFormData$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.lotActions.ReqLotFormData),
            mergeMap((payload) => {
                return this.store.pipe(
                    select(fromRoot.authSelectors.getUserEntities),
                    take(1),
                    switchMap((entities) => {
                        return this.lotService.getLotFormData(payload.lotId, entities[0].id).pipe(
                            mergeMap(
                                ([
                                    lot,
                                    deliveryPoints,
                                    publicDeliveryPoints,
                                    crops,
                                    incoTerms,
                                    paymentOptions,
                                    unitsOfMeasure,
                                ]) => {
                                    return [
                                        actions.lotActions.LotFormDataSuccess({
                                            lot,
                                            deliveryPoints: [...deliveryPoints, ...publicDeliveryPoints],
                                            crops,
                                            incoTerms,
                                            paymentOptions,
                                            unitsOfMeasure,
                                        }),
                                    ];
                                },
                            ),
                            catchError((error) => {
                                console.log('ReqLotFormData: ', error.message);
                                return [actions.lotActions.LotFormDataFail()];
                            }),
                        );
                    }),
                );
            }),
        ),
    );
    // #endregion
    // #endregion

    // #region UPDATE
    // #region ReqUpdateLot
    ReqUpdateLot$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.lotActions.ReqUpdateLot),
            switchMap(({ lot, clientUid }) => {
                const lotChanges = {
                    ...lot,
                };
                return this.api.updateLot(lotChanges, clientUid);
            }),
            switchMap((lot) => {
                this.snackbar.open('Successfully Updated The Lot', 'CLOSE', snackBarConfigs.successConfig);
                return [actions.lotActions.UpdateLotSuccess({ lot })];
            }),
            catchError((error) => {
                console.log('ReqUpdateLot: ', error.message);
                this.snackbar.open(
                    'An Error Occurred When Attempting To Update The Lot',
                    'CLOSE',
                    snackBarConfigs.errorConfig,
                );
                return [actions.lotActions.UpdateLotFail()];
            }),
        ),
    );
    // #endregion
    // #endregion

    // #region PRIVATISE LOTS
    ReqPrivatiseLots$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.lotActions.ReqPrivatiseLots),
            switchMap(({ lotIds }) => {
                return this.api.privatiseLots(lotIds).pipe(
                    switchMap(() => {
                        return [actions.lotActions.PrivatiseLotsSuccess()];
                    }),
                    catchError((error) => {
                        console.log('ReqPrivatiseLots: ', error.message);
                        this.snackbar.open(
                            'Oh Snap, something went wrong while trying to privatise the lots.',
                            'CLOSE',
                            snackBarConfigs.errorConfig,
                        );
                        return [actions.lotActions.PrivatiseLotsFail()];
                    }),
                );
            }),
        ),
    );
    //#endregion

    //#region DELETE
    ReqDeleteLot$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.lotActions.ReqDeleteLot),
            mergeMap((payload) => {
                const clientUid = payload.clientUid ? payload.clientUid : null;
                return of(payload).pipe(
                    mergeMap(({ lotId }) => {
                        return this.api.deleteLot(lotId, clientUid);
                    }),
                    mergeMap(({ id: lotId }) => {
                        this.snackbar.open('Successfully Deleted The Lot.', 'CLOSE', snackBarConfigs.successConfig);
                        return [actions.lotActions.DeleteLotSuccess({ lotId })];
                    }),
                    catchError((error) => {
                        console.log('ReqDeleteLot: ', error.message);
                        this.snackbar.open(
                            'The update operation was cancelled. Deleting is not available for a Lot with open negotiations.',
                            'CLOSE',
                            snackBarConfigs.errorConfig,
                        );
                        return [actions.lotActions.DeleteLotFail()];
                    }),
                );
            }),
        ),
    );
    //#endregion

    constructor(
        private actions$: Actions,
        private api: ApiService,
        private store: Store<fromRoot.State>,
        private lotService: LotService,
        private snackbar: MatSnackBar,
    ) {}
}
