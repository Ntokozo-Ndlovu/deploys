import { NEGOTIATING_ROOM_ROUTE, NEGOTIATION_EDIT_ROUTE } from './../../../helpers/constants';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store, select } from '@ngrx/store';
import { ApiService } from 'src/app/core/services/api/api.service';
import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';

import { switchMap, mergeMap, catchError, take } from 'rxjs/operators';

import { negotiationActions } from '../negotiations/index';
import * as fromRoot from 'src/app/core/ngrx/reducers/index';
import * as snackBarConfigs from '../../../helpers/snackbar';

@Injectable()
export class NegotiationEffects {
    // #region CREATE
    // #endregion

    // #region READ
    // #region ReqUserNegotiations
    ReqUserNegotiations$ = createEffect(() =>
        this.actions$.pipe(
            ofType(negotiationActions.ReqUserNegotiationCards),
            mergeMap((payload) => {
                const clientUid = payload.clientUid;
                return this.store.pipe(
                    select(fromRoot.authSelectors.getUserEntities),
                    take(1),
                    switchMap((entities) => {
                        return this.api.getEntityById(entities[0].id);
                    }),
                    switchMap((entity) => {
                        const tradingEntityId = entity.tradingEntities[0].id;
                        return this.api.getUserNegotiationCards(tradingEntityId, clientUid);
                    }),
                    switchMap((negotiationCards) => {
                        const activeNegotiationCards = negotiationCards.filter((card) => !card.isCompleted);
                        const completedNegotiationCards = negotiationCards.filter((card) => card.isCompleted);

                        return [
                            negotiationActions.UserNegotiationCardsSuccess({
                                activeNegotiationCards,
                                completedNegotiationCards,
                            }),
                        ];
                    }),
                    catchError((error) => {
                        console.log('ReqUserNegotiations: ', error.message);
                        return [negotiationActions.UserNegotiationCardsFail()];
                    }),
                );
            }),
        ),
    );
    // #endregion

    // #region ReqGetAvailableMatchIds
    ReqGetAvailableMatchIds$ = createEffect(() =>
        this.actions$.pipe(
            ofType(negotiationActions.ReqGetAvailableMatchIds),
            switchMap((payload) => {
                return this.api.getAvailableMatchedIds(payload.lotMatchId, payload.clientUid).pipe(
                    mergeMap((lotMatchIds) => {
                        return [negotiationActions.GetAvailableMatchIdsSuccess({ lotMatchIds })];
                    }),
                    catchError((error) => {
                        console.log('ReqGetAvailableMatchIds: ', error.message);
                        return [negotiationActions.GetAvailableMatchIdsFail()];
                    }),
                );
            }),
        ),
    );
    // #endregion
    // #region ReqLatestLotMatchIteration
    ReqLatestLotMatchIteration$ = createEffect(() =>
        this.actions$.pipe(
            ofType(negotiationActions.ReqLatestLotMatchIteration),
            mergeMap((payload) => {
                return this.api.getLotMatchIterations(payload.lotMatchId).pipe(
                    mergeMap((lotMatchIterations) => {
                        const latestMatch = lotMatchIterations.splice(-1)[0];
                        return [
                            negotiationActions.LatestLotMatchIterationSuccess({
                                latestMatch,
                            }),
                        ];
                    }),
                    catchError((error) => {
                        console.log('ReqLatestLotMatchIteration: ', error.message);
                        this.snackbar.open(
                            'There was an error when attempting to fetch the match. Please refresh the page and try again.',
                            'CLOSE',
                            snackBarConfigs.notificationConfig,
                        );
                        return [negotiationActions.LatestLotMatchIterationFail()];
                    }),
                );
            }),
        ),
    );
    // #endregion
    // #endregion

    // #region UPDATE
    // #region ReqCompleteNegotiation
    ReqCompleteNegotiation$ = createEffect(() =>
        this.actions$.pipe(
            ofType(negotiationActions.ReqCompleteNegotiation),
            mergeMap((payload) => {
                return this.api
                    .completeNegotiation(payload.lotMatch, payload.clientHasBroker, payload.counterPartyHasBroker)
                    .pipe(
                        mergeMap(() => {
                            return [negotiationActions.CompleteNegotiationSuccess()];
                        }),
                        catchError((error) => {
                            console.log('ReqCompleteNegotiation: ', error.message);
                            this.snackbar.open(
                                'The Negotiation details seem to have changed. Please refresh for latest match values or check your completed Negotiations. ',
                                'CLOSE',
                                snackBarConfigs.notificationConfig,
                            );
                            return [negotiationActions.CompleteNegotiationFail()];
                        }),
                    );
            }),
        ),
    );
    // #endregion
    // #region ReqDeclineNegotiation
    ReqDeclineNegotiation$ = createEffect(() =>
        this.actions$.pipe(
            ofType(negotiationActions.ReqDeclineNegotiation),
            mergeMap((payload) => {
                return this.api.declineNegotiation(payload.lotMatch).pipe(
                    mergeMap(() => {
                        this.snackbar.open(
                            'Negotiation Declined Successfully',
                            'CLOSE',
                            snackBarConfigs.notificationConfig,
                        );
                        const updatedActiveNegotiationIds = payload.activeNegotiationIds.filter(
                            (activeNegotiationId) => activeNegotiationId !== payload.lotMatch.id,
                        );
                        if (updatedActiveNegotiationIds.length === 0) this.router.navigate([NEGOTIATING_ROOM_ROUTE]);
                        return [
                            negotiationActions.DeclineNegotiationSuccess({
                                activeNegotiationIds: updatedActiveNegotiationIds,
                            }),
                            negotiationActions.GetAvailableMatchIdsSuccess({
                                lotMatchIds: updatedActiveNegotiationIds,
                            }),
                        ];
                    }),
                    catchError((error) => {
                        console.log('ReqDeclineNegotiation: ', error.message);
                        this.snackbar.open(
                            'Failed To Decline Negotiation. Please Try Again',
                            'CLOSE',
                            snackBarConfigs.notificationConfig,
                        );
                        return [negotiationActions.DeclineNegotiationFail()];
                    }),
                );
            }),
        ),
    );
    // #endregion
    // #region ReqClearNegotiation
    ReqClearNegotiation$ = createEffect(() =>
        this.actions$.pipe(
            ofType(negotiationActions.ReqClearNegotiation),
            mergeMap((payload) => {
                return this.api.clearNegotiation(payload.lotMatch, payload.requestedBy).pipe(
                    mergeMap(() => {
                        return [negotiationActions.ClearNegotiationSuccess()];
                    }),
                    catchError((error) => {
                        console.log('ReqCompleteNegotiation: ', error.message);
                        this.snackbar.open(
                            'Failed to send Email, please try again',
                            'CLOSE',
                            snackBarConfigs.notificationConfig,
                        );
                        return [negotiationActions.ClearNegotiationFail()];
                    }),
                );
            }),
        ),
    );
    // #endregion
    // #endregion

    //#region DELETE
    //#endregion

    constructor(
        private actions$: Actions,
        private api: ApiService,
        private store: Store<fromRoot.State>,
        private snackbar: MatSnackBar,
        private router: Router,
    ) {}
}
