import { cloneDeep } from 'lodash';
import { Lot } from 'src/app/core/models/queryModels';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from 'src/app/core/services/api/api.service';
import { AuthService } from '../../services/auth/auth.service';
import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';

import { mergeMap, catchError, switchMap, repeat } from 'rxjs/operators';
import * as actions from 'src/app/core/helpers/index.actions';
import * as fromRoot from 'src/app/core/ngrx/reducers/index';
import { Store } from '@ngrx/store';

import * as snackbarConfigs from '../../helpers/snackbar';
import { downloadFile } from '../../helpers/helperFunctions';

import * as snackBarConfigs from '../../helpers/snackbar';
@Injectable()
export class AppStateEffects {
    //#region Create

    //#endregion

    //#region Read

    // #region ReqLinkUser
    ReqCheckAuthorization$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.appActions.ReqCheckAuthorization),
            mergeMap((payload) => {
                return this.authService.getAuthorization().pipe(
                    mergeMap((firebaseUser) => {
                        if (firebaseUser) {
                            this.store.dispatch(
                                actions.authActions.ReqGetUserFromAuthorization({ uid: firebaseUser.uid }),
                            );
                            return this.actions$.pipe(
                                ofType(
                                    actions.authActions.GetUserFromAuthorizationSuccess,
                                    actions.authActions.GetUserFromAuthorizationFail,
                                ),
                                switchMap((storeAction) => {
                                    if (storeAction.type === actions.authActions.GetUserFromAuthorizationSuccess.type) {
                                        return [
                                            actions.appActions.CheckAuthorizationSuccess({
                                                executedTime: payload.executedTime,
                                            }),
                                            actions.appActions.ReqToggleIsLoading({ flag: false }),
                                        ];
                                    } else {
                                        throw new Error('failed to retrieve user information');
                                    }
                                }),
                            );
                        } else {
                            return [
                                actions.appActions.CheckAuthorizationFail({ executedTime: payload.executedTime }),
                                actions.appActions.ReqToggleIsLoading({ flag: false }),
                            ];
                        }
                    }),
                    catchError((error) => {
                        console.log('ReqLinkUser: ', error.message);
                        this.authService.logout();
                        return [
                            actions.appActions.CheckAuthorizationFail({ executedTime: payload.executedTime }),
                            actions.appActions.ReqToggleIsLoading({ flag: false }),
                        ];
                    }),
                    repeat(),
                );
            }),
        ),
    );
    // #endregion

    // #endregion

    //#region Update

    //#endregion

    //#region Delete

    //#endregion

    // #region App Level Effects
    // #region ReqGetAnalytics
    ReqGetAnalytics$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.appActions.ReqGetAnalytics),
            switchMap(() => {
                return this.api.getAnalytics().pipe(
                    mergeMap((apiResponse) => {
                        return [actions.appActions.GetAnalyticsSuccess({ analytics: apiResponse })];
                    }),
                    catchError((error) => {
                        console.log('ReqGetAnalytics: ', error.message);
                        this.snackbar.open('Failed to get Analytics', 'CLOSE', snackbarConfigs.errorConfig);
                        return [actions.appActions.GetAnalyticsFail()];
                    }),
                );
            }),
        ),
    );
    // #endregion
    //#region ReqGetLotsInDateRange
    ReqGetLotsInDateRange$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.appActions.ReqGetLotsInDateRange),
            switchMap(({ dateRange }) => {
                return this.api.getLotsInDateRange(dateRange).pipe(
                    mergeMap((apiResponse) => {
                        return this.generateAndDownloadCSVLots(apiResponse);
                    }),
                    mergeMap(() => {
                        return [actions.appActions.GetLotsInDateRangeSuccess()];
                    }),
                    catchError((error) => {
                        console.log('ReqGetLotsInDateRange: ', error.message);
                        this.snackbar.open('Failed to get Lots', 'CLOSE', snackbarConfigs.errorConfig);
                        return [actions.appActions.GetLotsInDateRangeFail()];
                    }),
                );
            }),
        ),
    );
    // #endregion
    // #endregion

    //#region ReqGetUsersForVerification
    ReqGetUsersForVerification$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.appActions.ReqGetUsersForVerification),
            switchMap(() => {
                return this.authService.getUsersForVerification().pipe(
                    mergeMap((users) => {
                        return [actions.appActions.ReqGetUsersForVerificationSuccess({ users })];
                    }),
                    catchError((error) => {
                        console.log('ReqUpdateUserVerificationStatus: ', error);
                        this.snackbar.open(error, 'CLOSE', snackBarConfigs.errorConfig);
                        return [actions.appActions.ReqGetUsersForVerificationFail()];
                    }),
                );
            }),
        ),
    );
    //#endregion
    //#region ReqEmailVerificationForm
    ReqEmailVerificationFormSuccess$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.appActions.ReqEmailVerificationForm),
            switchMap(() => {
                return this.api.sendVerificationFormEmail().pipe(
                    mergeMap(() => {
                        this.snackbar.open(
                            'Successfully Emailed Verification Form',
                            'CLOSE',
                            snackBarConfigs.successConfig,
                        );
                        return [actions.appActions.ReqEmailVerificationFormSuccess()];
                    }),
                    catchError((error) => {
                        console.log('ReqEmailVerificationFormSuccess: ', error);
                        this.snackbar.open(error, 'CLOSE', snackBarConfigs.errorConfig);
                        return [actions.appActions.ReqEmailVerificationFormFail()];
                    }),
                );
            }),
        ),
    );
    //#endregion

    //#region Helper Functions
    generateAndDownloadCSVLots(apiResponse: Lot[]): string {
        const lots: any = apiResponse.map((lot) => {
            delete lot.id;
            return {
                Name: lot.lotName || '',
                Type: lot.lotType || '',
                Crop: lot.crop?.name || '',
                PriceType: lot.priceType?.name || '',
                Month: lot.month?.name || '',
                FromDate: lot.dateFrom.toLocaleDateString() || '',
                ToDate: lot.dateTo.toLocaleDateString() || '',
                IncoTerm: lot.incoTerm?.name || '',
                DeliveryPoint: lot.deliveryPoint?.name || '',
                Quality: lot.quality?.name || '',
                Quantity: lot.quantity || '',
                Price: lot.price || '',
                PaymentTerm: lot.paymentTerm?.name || '',
                IsPublic: lot.isPublic || '',
                ScoutId: lot.scoutId || '',
                Exchange: lot.exchange?.name || '',
                UnitOfMeasure: lot.quantityMeasure?.name || '',
                SafexOption: lot.safexOption || '',
                TradingEntityId: lot.tradingEntityId || '',
                Packaging: lot.packaging?.name || '',
            };
        });
        downloadFile(lots);
        return 'Download Started';
    }
    //#endregion

    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private store: Store<fromRoot.State>,
        private api: ApiService,
        private snackbar: MatSnackBar,
    ) {}
}
