import { LotMatchService } from './../../../services/lotMatch/lot-match.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store, select } from '@ngrx/store';
import { ApiService } from 'src/app/core/services/api/api.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { switchMap, mergeMap, catchError, take } from 'rxjs/operators';

import { matchActions } from 'src/app/core/helpers/index.actions';
import * as fromRoot from 'src/app/core/ngrx/reducers/index';

import * as snackBarConfigs from '../../../helpers/snackbar';

@Injectable()
export class MatchEffects {
    // #region CREATE
    // #region ReqCreateLotMatch
    ReqCreateLotMatch$ = createEffect(() =>
        this.actions$.pipe(
            ofType(matchActions.ReqCreateLotMatch),
            mergeMap((payload) => {
                return this.api.createLotMatch(payload.lotMatch).pipe(
                    mergeMap(({ id }) => {
                        return [matchActions.CreateLotMatchSuccess({ id })];
                    }),
                    catchError((error) => {
                        console.log('ReqCreateLotMatch: ', error.message);
                        this.snackbar.open(
                            'An Error Occurred When Attempting To Create A Negotiation. Please try reload the page.',
                            'CLOSE',
                            snackBarConfigs.errorConfig,
                        );
                        return [matchActions.CreateLotMatchFail()];
                    }),
                );
            }),
        ),
    );
    // #endregion

    // #region ReqLotFormData
    ReqLotFormData$ = createEffect(() =>
        this.actions$.pipe(
            ofType(matchActions.ReqLotMatchFormData),
            mergeMap((payload) => {
                return this.store.pipe(
                    select(fromRoot.authSelectors.getUserEntities),
                    take(1),
                    switchMap((entities) => {
                        return this.lotMatchService
                            .getLotMatchFormData(payload.lotMatchId, entities[0].id, payload.clientUid)
                            .pipe(
                                mergeMap(
                                    ([
                                        lotMatchIterations,
                                        deliveryPoints,
                                        publicDeliveryPoints,
                                        crops,
                                        incoTerms,
                                        paymentOptions,
                                        unitsOfMeasure,
                                    ]) => {
                                        return [
                                            matchActions.LotMatchFormDataSuccess({
                                                lotMatchIterations,
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
                                    console.log('ReqLotMatchFormData: ', error.message);
                                    this.snackbar.open(
                                        'There was an error when attempting to submit your match. Please refresh the page and try again.',
                                        'CLOSE',
                                        snackBarConfigs.notificationConfig,
                                    );
                                    return [matchActions.LotMatchFormDataFail()];
                                }),
                            );
                    }),
                );
            }),
        ),
    );
    // #endregion

    // #endregion

    // #region READ
    // #region ReqLoadLotMatches
    ReqLoadLotMatches$ = createEffect(() =>
        this.actions$.pipe(
            ofType(matchActions.ReqLoadLotMatches),
            mergeMap((payload) => {
                return this.api.getLotMatches(payload.lotId, payload.radius).pipe(
                    mergeMap((lotMatches) => {
                        return [matchActions.LoadLotMatchesSuccess({ matches: lotMatches })];
                    }),
                    catchError((error) => {
                        console.log('ReqLoadLotMatches: ', error.message);
                        return [matchActions.LoadLotMatchesFail()];
                    }),
                );
            }),
        ),
    );
    // #endregion

    // #region ReqLotHasBrokerCheck
    ReqLotHasBrokerCheck$ = createEffect(() =>
        this.actions$.pipe(
            ofType(matchActions.ReqLotHasBrokerCheck),
            mergeMap((payload) => {
                return this.api.getHasBroker(payload.lotIds).pipe(
                    mergeMap((hasBroker) => {
                        return [matchActions.ReqLotHasBrokerCheckSuccess(hasBroker)];
                    }),
                    catchError((error) => {
                        console.log('ReqLotHasBrokerCheck: ', error.message);
                        return [matchActions.ReqLotHasBrokerCheckFail()];
                    }),
                );
            }),
        ),
    );
    // #endregion

    // #endregion

    // #region UPDATE
    ReqUpdateLotMatch$ = createEffect(() =>
        this.actions$.pipe(
            ofType(matchActions.ReqUpdateLotMatch),
            mergeMap((payload) => {
                return this.api.updateLotMatch(payload.lotMatch).pipe(
                    mergeMap((lotMatchIteration) => {
                        return [matchActions.UpdateLotMatchSuccess({ lotMatchIteration })];
                    }),
                    catchError((error) => {
                        console.log('ReqUpdateLotMatch: ', error.message);
                        this.snackbar.open(
                            'An Error Occurred When Attempting To Update The Negotiation. Please try reload the page.',
                            'CLOSE',
                            snackBarConfigs.errorConfig,
                        );
                        return [matchActions.UpdateLotMatchFail()];
                    }),
                );
            }),
        ),
    );
    // #endregion

    // #region DELETE

    // #endregion

    constructor(
        private actions$: Actions,
        private api: ApiService,
        private store: Store<fromRoot.State>,
        private lotMatchService: LotMatchService,
        private snackbar: MatSnackBar,
    ) {}
}
