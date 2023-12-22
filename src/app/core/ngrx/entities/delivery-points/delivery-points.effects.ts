import { cloneDeep } from 'lodash';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, take, switchMap } from 'rxjs/operators';
import { combineLatest } from 'rxjs';

import * as actions from 'src/app/core/helpers/index.actions';
import * as fromRoot from 'src/app/core/ngrx/reducers/index';
import * as snackBarConfigs from 'src/app/core/helpers/snackbar';

import { DeliveryPointsService } from 'src/app/core/services/delivery-points/delivery-points.service';
import { DeliveryPoint } from 'src/app/core/models/queryModels';
import { ApiService } from 'src/app/core/services/api/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { select, Store } from '@ngrx/store';
import { PROFILE_ROUTE } from './../../../../core/helpers/constants';

@Injectable()
export class DeliveryPointsEffects {
    //#region Create
    // #region ReqCreateDeliveryPoint
    ReqCreateDeliveryPoint$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.deliveryPointActions.ReqCreateDeliveryPoint),
            switchMap((payload) => {
                return this.api.createDeliveryPoint(cloneDeep(payload.deliveryPoint), payload.clientUid).pipe(
                    concatMap((deliveryPoint) => {
                        return [
                            actions.deliveryPointActions.CreateDeliveryPointSuccess({
                                deliveryPoint,
                                executedTime: payload.executedTime,
                            }),
                        ];
                    }),
                    catchError((error) => {
                        console.log('ReqCreateDeliveryPoint: ', error.message);
                        this.snackbar.open(
                            'We were unable to create the desired delivery point. Please ensure all information is accurate and try again.',
                            'CLOSE',
                            snackBarConfigs.errorConfig,
                        );
                        return [
                            actions.deliveryPointActions.CreateDeliveryPointFail({
                                executedTime: payload.executedTime,
                            }),
                        ];
                    }),
                );
            }),
        ),
    );
    // #endregion
    //#endregion

    //#region Read
    // #region ReqPublicDeliveryPoints
    ReqPublicDeliveryPoints$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(actions.deliveryPointActions.ReqPublicDeliveryPoints),
            switchMap((payload) => {
                return this.api.getPublicDeliveryPoints().pipe(
                    concatMap((deliveryPoints: DeliveryPoint[]) => [
                        actions.deliveryPointActions.PublicDeliveryPointsSuccess({
                            deliveryPoints,
                            executedTime: payload.executedTime,
                        }),
                    ]),
                    catchError((error) => {
                        console.log('ReqPublicDeliveryPoints', error.message);
                        this.snackbar.open(error.message, 'CLOSE', snackBarConfigs.errorConfig);
                        return [
                            actions.deliveryPointActions.PublicDeliveryPointsFail({
                                executedTime: payload.executedTime,
                            }),
                        ];
                    }),
                );
            }),
        );
    });
    //#endregion
    // #region ReqEntityDeliveryPoints
    ReqEntityDeliveryPoints$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(actions.deliveryPointActions.ReqEntityDeliveryPoints),
            switchMap((payload) => {
                return this.store.pipe(
                    select(fromRoot.authSelectors.getUserEntities),
                    take(1),
                    concatMap((entities) => {
                        return this.deliveryPointService.getEntityUsersDeliveryPoints(entities).pipe(
                            concatMap((deliveryPoints: DeliveryPoint[]) => [
                                actions.deliveryPointActions.EntityDeliveryPointsSuccess({
                                    deliveryPoints,
                                    executedTime: payload.executedTime,
                                }),
                            ]),
                            catchError((error) => {
                                console.log('ReqEntityDeliveryPoints', error.message);
                                this.snackbar.open(error.message, 'CLOSE', snackBarConfigs.errorConfig);
                                return [
                                    actions.deliveryPointActions.EntityDeliveryPointsFail({
                                        executedTime: payload.executedTime,
                                    }),
                                ];
                            }),
                        );
                    }),
                );
            }),
        );
    });

    //#endregion
    // #region ReqManagementData
    ReqManagementData$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.deliveryPointActions.ReqManagementData),
            switchMap((payload) => {
                return this.store.pipe(
                    select(fromRoot.authSelectors.getUserEntities),
                    concatMap((entities) => {
                        return combineLatest([
                            this.deliveryPointService.getEntityUsersDeliveryPoints(entities),
                            this.api.getPublicDeliveryPoints(),
                            this.api.getLocationTypes(),
                        ]);
                    }),
                    concatMap(([deliveryPoints, publicDeliveryPoints, locationTypes]) => [
                        actions.deliveryPointActions.ManagementDataSuccess({
                            deliveryPoints: [...deliveryPoints, ...publicDeliveryPoints],
                            locationTypes,
                            regions: ['Default'],
                            executedTime: payload.executedTime,
                        }),
                    ]),
                    catchError((error) => {
                        console.log('ReqEntityDeliveryPoints', error.message);
                        this.snackbar.open(error.message, 'CLOSE', snackBarConfigs.errorConfig);
                        return [
                            actions.deliveryPointActions.ManagementDataFail({
                                executedTime: payload.executedTime,
                            }),
                        ];
                    }),
                );
            }),
        ),
    );
    // #endregion
    //#endregion

    //#region Update
    // #region ReqUpdateDeliveryPoint
    ReqUpdateDeliveryPoint$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.deliveryPointActions.ReqUpdateDeliveryPoint),
            switchMap((payload) => {
                return this.api.updateDeliveryPoint(payload.deliveryPoint).pipe(
                    concatMap((deliveryPoint) => {
                        if (deliveryPoint.isPublic) {
                            throw new Error('Updating of public delivery points is not allowed.');
                        }
                        this.router.navigate([PROFILE_ROUTE], { queryParams: { tabIndex: 1 } });
                        return [
                            actions.deliveryPointActions.UpdateDeliveryPointSuccess({
                                deliveryPoint,
                                executedTime: payload.executedTime,
                            }),
                        ];
                    }),
                    catchError((error) => {
                        console.log('ReqUpdateDeliveryPoint: ', error.message);
                        this.snackbar.open(
                            'We were unable to Update the desired delivery point. Please ensure all information is accurate and you are working with a private delivery point.',
                            'CLOSE',
                            snackBarConfigs.errorConfig,
                        );
                        return [
                            actions.deliveryPointActions.UpdateDeliveryPointFail({
                                executedTime: payload.executedTime,
                            }),
                        ];
                    }),
                );
            }),
        ),
    );
    // #endregion

    //#endregion

    //#region Delete
    ReqDeleteDeliveryPoint$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.deliveryPointActions.ReqDeleteDeliveryPoint),
            switchMap((payload) => {
                return this.api.deleteDeliveryPoint(payload.id).pipe(
                    concatMap(({ id }) => {
                        return [
                            actions.deliveryPointActions.DeleteDeliveryPointSuccess({
                                id,
                                executedTime: payload.executedTime,
                            }),
                        ];
                    }),
                    catchError((error) => {
                        console.log('ReqDeleteDeliveryPoint: ', error.message);
                        this.snackbar.open(
                            'We were unable to Delete the desired delivery point. Please ensure you are working with a private delivery point.',
                            'CLOSE',
                            snackBarConfigs.errorConfig,
                        );
                        return [
                            actions.deliveryPointActions.DeleteDeliveryPointFail({
                                executedTime: payload.executedTime,
                            }),
                        ];
                    }),
                );
            }),
        ),
    );
    //#endregion

    constructor(
        private api: ApiService,
        private actions$: Actions,
        private snackbar: MatSnackBar,
        private router: Router,
        private store: Store<fromRoot.State>,
        private deliveryPointService: DeliveryPointsService,
    ) {}
}
