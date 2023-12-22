import { ScoutCard } from 'src/app/core/models/viewModels';
import { FineTunedScout, ScoutAndFineTune } from './../../../models/queryModels';
import { Scout, FineTune } from 'src/app/core/models/queryModels';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from 'src/app/core/services/api/api.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { switchMap, mergeMap, catchError, take } from 'rxjs/operators';
import { of, combineLatest } from 'rxjs';

import * as actions from 'src/app/core/helpers/index.actions';
import * as fromRoot from 'src/app/core/ngrx/reducers/index';
import * as snackBarConfigs from 'src/app/core/helpers/snackbar';

import { ScoutService } from 'src/app/core/services/scout/scout.service';
import { Store, select } from '@ngrx/store';
import { scoutSelectors } from '.';

@Injectable()
export class MarketEffects {
    //#region Create
    // #region ReqCreateScout
    ReqCreateScout$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.scoutActions.ReqCreateScout),
            switchMap((payload) => {
                return combineLatest([
                    this.store.pipe(
                        select(fromRoot.authSelectors.getUserEntities),
                        take(1),
                        switchMap((entities) => {
                            return this.api.getEntityById(entities[0].id);
                        }),
                    ),
                    this.store.pipe(select(scoutSelectors.getSearchCriteria), take(1)),
                    this.store.pipe(select(scoutSelectors.getFineTune), take(1)),
                    this.store.pipe(select(scoutSelectors.getAllScoutCards), take(1)),
                ]).pipe(
                    switchMap(([entity, scout, fineTune, scoutCards]) => {
                        const scoutAndFineTune: ScoutAndFineTune = {
                            scout: {
                                ...scout,
                                isPublic: payload.isPublic,
                                tradingEntityId: entity.tradingEntities[0].id,
                            },
                            fineTune: fineTune,
                        };
                        this.checkForDuplicateScouts(scout, scoutCards);
                        return this.api.createScout(scoutAndFineTune);
                    }),
                    mergeMap((scout) => {
                        return [actions.scoutActions.CreateScoutSuccess({ scout })];
                    }),
                    catchError((error) => {
                        console.log('ReqCreateMarket: ', error.message);
                        if (error.message === 'Duplicate Scout Card Found In Database.') {
                            this.snackbar.open(
                                'A Duplicate Scout Was Found In Database.',
                                'CLOSE',
                                snackBarConfigs.errorConfig,
                            );
                        } else {
                            this.snackbar.open(
                                'We were unable to create a Scout from your search criteria. Please try again.',
                                'CLOSE',
                                snackBarConfigs.errorConfig,
                            );
                        }

                        return [actions.scoutActions.CreateScoutFail()];
                    }),
                );
            }),
        ),
    );

    // #endregion
    //#endregion

    //#region Read

    // #region ReqSearchMarket
    ReqSearchScout$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.scoutActions.ReqScoutSearch),
            switchMap((payload) => {
                return this.store.pipe(
                    select(fromRoot.authSelectors.getUserEntities),
                    take(1),
                    switchMap((entities) => {
                        if (entities[0]) {
                            return this.api.getEntityById(entities[0].id);
                        }
                        return [null];
                    }),
                    switchMap((entity) => {
                        return this.api.getScoutSearchResults({
                            ...payload.scout,
                            tradingEntityId: entity?.tradingEntities[0].id || 0,
                        });
                    }),
                    mergeMap((searchResult) => {
                        return [actions.scoutActions.ScoutSearchSuccess({ scoutSearch: searchResult })];
                    }),
                    catchError((error) => {
                        console.log('ReqSearchMarket: ', error.message);
                        this.snackbar.open(
                            'There was an issue retrieving results for the current search criteria.',
                            'CLOSE',
                            snackBarConfigs.errorConfig,
                        );
                        return [actions.scoutActions.ScoutSearchFail()];
                    }),
                );
            }),
        ),
    );
    // #endregion

    // #region Fine-Tune Scout Search
    ReqSearchFineTunedScout$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.scoutActions.ReqFineTunedScoutSearch),
            switchMap((payload) => {
                return of(payload).pipe(
                    switchMap(() => {
                        return this.store.select(scoutSelectors.getSearchCriteria);
                    }),
                    mergeMap((searchCriteria) => {
                        const fineTunedSearchCriteria: FineTunedScout = this.generateFineTunedScoutCriteria(
                            { ...payload.searchInfo },
                            searchCriteria,
                        );
                        return this.api.getFineTunedScoutSearchResults(fineTunedSearchCriteria);
                    }),
                    mergeMap((searchResult) => {
                        return [actions.scoutActions.FineTunedScoutSearchSuccess({ scoutSearch: searchResult })];
                    }),
                    catchError((error) => {
                        console.log('ReqSearchFineTunedScout: ', error.message);
                        this.snackbar.open(
                            'There was an issue retrieving results for the current search criteria.',
                            'CLOSE',
                            snackBarConfigs.errorConfig,
                        );
                        return [actions.scoutActions.FineTunedScoutSearchFail()];
                    }),
                );
            }),
        ),
    );
    // #endregion

    // #region ReqScoutFormData
    ReqScoutFormData$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.scoutActions.ReqScoutFormData),
            mergeMap((payload) => {
                return this.scoutService.getScoutEditData(payload.scoutId).pipe(
                    mergeMap(([scoutAndFineTune, crops, unitsOfMeasure]) => {
                        return [actions.scoutActions.ScoutFormDataSuccess({ scoutAndFineTune, crops, unitsOfMeasure })];
                    }),
                    catchError((error) => {
                        console.log('ReqMarketFormData: ', error.message);
                        return [actions.scoutActions.ScoutFormDataFail()];
                    }),
                );
            }),
        ),
    );
    // #endregion

    // #region ReqUserScoutCards
    ReqUserScoutCards$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.scoutActions.ReqUserScoutCards),
            switchMap((payload) => {
                return this.store.pipe(
                    select(fromRoot.authSelectors.getUserEntities),
                    take(1),
                    switchMap((entities) => {
                        return this.api.getEntityById(entities[0].id);
                    }),
                    switchMap((entity) => {
                        const tradingEntityId = entity.tradingEntities[0].id;

                        return this.api.getUserScoutCards(tradingEntityId);
                    }),
                    switchMap((scoutCards) => {
                        return [actions.scoutActions.UserScoutCardsSuccess({ scoutCards })];
                    }),
                    catchError((error) => {
                        console.log('ReqUserScoutCards: ', error.message);
                        return [actions.scoutActions.UserScoutCardsFail()];
                    }),
                );
            }),
        ),
    );
    // #endregion

    //#endregion

    //#region Update
    // #region ReqUpdateScout
    ReqUpdateScout$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.scoutActions.ReqUpdateScout),
            switchMap((payload) => {
                const scoutAndFineTuneChanges = {
                    ...payload.scoutAndFineTune,
                };
                return this.api.updateScout(scoutAndFineTuneChanges).pipe(
                    switchMap((scout) => {
                        return [actions.scoutActions.UpdateScoutSuccess({ scout })];
                    }),
                    catchError((error) => {
                        console.log('ReqUpdateMarket: ', error.message);
                        return [actions.scoutActions.UpdateScoutFail()];
                    }),
                );
            }),
        ),
    );
    // #endregion
    //#endregion

    //#region Delete
    ReqDeleteScout$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.scoutActions.ReqDeleteScout),
            mergeMap((payload) => {
                return of(payload).pipe(
                    mergeMap(({ scoutId, clientUid }) => {
                        return this.api.deleteScout(scoutId, clientUid);
                    }),
                    mergeMap(({ id }) => {
                        this.snackbar.open('Successfully Deleted The Scout.', 'CLOSE', snackBarConfigs.successConfig);
                        return [actions.scoutActions.DeleteScoutSuccess({ scoutId: id })];
                    }),
                    catchError((error) => {
                        console.log('ReqDeleteScout: ', error.message);
                        this.snackbar.open(
                            'An error occurred when deleting the Scout.',
                            'CLOSE',
                            snackBarConfigs.errorConfig,
                        );
                        return [actions.scoutActions.DeleteScoutFail()];
                    }),
                );
            }),
        ),
    );
    //#endregion

    //#region Helpers
    generateFineTunedScoutCriteria(searchInfo: FineTune, searchCriteria: Scout) {
        const fineTunedSearchCriteria: FineTunedScout = {
            id: searchCriteria.id,
            creatorType: searchCriteria.creatorType,
            scoutType: searchCriteria.scoutType,
            crop: searchCriteria.crop,
            inSouthAfrica: searchCriteria.inSouthAfrica,
            googlePlaceId: searchCriteria.googlePlaceId,
            town: searchCriteria.town,
            location: searchCriteria.location,
            radius: searchCriteria.radius,
            isPublic: searchCriteria.isPublic,
            exFarm: searchInfo.exFarm,
            hasLots: searchInfo.hasLots,
            rating: searchInfo.rating,
        };
        return fineTunedSearchCriteria;
    }

    checkForDuplicateScouts(scout: Scout, scoutCards: ScoutCard[]) {
        const duplicateExists: boolean = scoutCards.some((scoutCard) => {
            return (
                scoutCard.scoutType === scout.scoutType &&
                scoutCard.town === scout.town &&
                scoutCard.crop.id === scout.crop.id
            );
        });
        if (duplicateExists) throw new Error('Duplicate Scout Card Found In Database.');
    }
    //#endregion

    constructor(
        private actions$: Actions,
        private api: ApiService,
        private store: Store<fromRoot.State>,
        private scoutService: ScoutService,
        private snackbar: MatSnackBar,
    ) {}
}
