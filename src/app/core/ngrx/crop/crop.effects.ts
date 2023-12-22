import { CropService } from './../../services/crop/crop.service';
import { ApiService } from 'src/app/core/services/api/api.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, concatMap, mergeMap, switchMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

import * as actions from 'src/app/core/helpers/index.actions';

@Injectable()
export class CropEffects {
    // #region ReqAllCrops
    ReqAllCrops$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.cropActions.ReqAllCrops),
            switchMap(() => {
                return this.api.getAllCrops().pipe(
                    mergeMap((crops) => {
                        return [actions.cropActions.AllCropsSuccess({ crops })];
                    }),
                    catchError((error) => {
                        console.log('ReqAllCrops: ', error.message);
                        return [actions.cropActions.AllCropsFail()];
                    }),
                );
            }),
        ),
    );

    // endregion
    // #region ReqAllCrops
    ReqCropCategories$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.cropActions.ReqCropCategories),
            switchMap(() => {
                return this.api.getCropCategories().pipe(
                    mergeMap((cropCategories) => {
                        return [actions.cropActions.ReqCropCategoriesSuccess({ cropCategories })];
                    }),
                    catchError((error) => {
                        console.log('ReqCropCategories: ', error.message);
                        return [actions.cropActions.ReqCropCategoriesFail()];
                    }),
                );
            }),
        ),
    );

    // endregion

    // #region ReqCropGrades
    ReqCropGrades$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.cropActions.ReqCropGrades),
            switchMap((payload) => {
                return this.api.getCropGrades(payload.cropId).pipe(
                    mergeMap((grades) => {
                        return [actions.cropActions.CropGradesSuccess({ grades })];
                    }),
                    catchError((error) => {
                        console.log('ReqCropGrades: ', error.message);
                        return [actions.cropActions.CropGradesFail()];
                    }),
                );
            }),
        ),
    );
    // #endregion

    // #region ReqCropMonths
    ReqCropMonths$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.cropActions.ReqCropMonths),
            switchMap((payload) => {
                return this.api.getCropMonths(payload.cropId, payload.exchangeId).pipe(
                    mergeMap((safexMonths) => {
                        return [actions.cropActions.CropMonthsSuccess({ safexMonths })];
                    }),
                    catchError((error) => {
                        console.log('ReqCropMonths: ', error.message);
                        return [actions.cropActions.CropMonthsFail()];
                    }),
                );
            }),
        ),
    );
    // #endregion

    // #region ReqCropMonthsAndGrades
    ReqCropMonthsAndGrades$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.cropActions.ReqCropMonthsAndGrades),
            switchMap((payload) => {
                return this.cropService.getCropMonthsAndGrades(payload.cropId, payload.exchangeId).pipe(
                    mergeMap(([safexMonths, grades]) => {
                        return [actions.cropActions.CropMonthsAndGradesSuccess({ safexMonths, grades })];
                    }),
                    catchError((error) => {
                        console.log('ReqCropMonthsAndGrades: ', error.message);
                        return [actions.cropActions.CropMonthsAndGradesFail()];
                    }),
                );
            }),
        ),
    );
    // #endregion

    // #region ReqCropPackaging
    ReqCropPackaging$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.cropActions.ReqCropPackaging),
            switchMap((payload) => {
                return this.api.getCropPackaging(payload.cropId).pipe(
                    mergeMap((cropPackaging) => {
                        return [actions.cropActions.CropPackagingSuccess({ cropPackaging })];
                    }),
                    catchError((error) => {
                        console.log('ReqCropPackaging: ', error.message);
                        return [actions.cropActions.CropPackagingFail()];
                    }),
                );
            }),
        ),
    );
    // #endregion

    constructor(private actions$: Actions, private api: ApiService, private cropService: CropService) {}
}
