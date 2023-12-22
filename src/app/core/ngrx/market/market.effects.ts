import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { ApiService } from 'src/app/core/services/api/api.service';
import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';

import { switchMap, mergeMap, catchError, take } from 'rxjs/operators';

import { marketActions } from './index';
import * as fromRoot from 'src/app/core/ngrx/reducers/index';
import { from } from 'rxjs';

@Injectable()
export class MarketEffects {
    // #region CREATE
    // #endregion

    // #region READ
    // #region ReqMarketLotCards
    ReqMarketLotCards$ = createEffect(() =>
        this.actions$.pipe(
            ofType(marketActions.ReqMarketLotCards),
            mergeMap((payload) => {
                return this.api.getMarketLotCards(payload.marketFilters).pipe(
                    take(1),
                    switchMap((lots) => {
                        return [
                            marketActions.MarketLotCardsSuccess({
                                lots,
                            }),
                        ];
                    }),
                    catchError((error) => {
                        console.log('ReqMarketLotCards: ', error.message);
                        return [marketActions.MarketLotCardsFail()];
                    }),
                );
            }),
        ),
    );
    // #endregion
    // #region ReqMarketScoutCards
    ReqMarketScoutCards$ = createEffect(() =>
        this.actions$.pipe(
            ofType(marketActions.ReqMarketScoutCards),
            mergeMap((payload) => {
                return from(this.api.getMarketScoutCards(payload.marketFilters)).pipe(
                    take(1),
                    switchMap((scouts) => {
                        return [
                            marketActions.MarketScoutCardsSuccess({
                                scouts,
                            }),
                        ];
                    }),
                    catchError((error) => {
                        console.log('ReqMarketScoutCards: ', error.message);
                        return [marketActions.MarketScoutCardsFail()];
                    }),
                );
            }),
        ),
    );
    // #endregion

    // #region UPDATE
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
