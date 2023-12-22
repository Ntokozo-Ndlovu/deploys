import { Lot, User } from 'src/app/core/models/queryModels';
import { Analytics, DateRange } from './../../models/queryModels';
import { Action, createAction, props } from '@ngrx/store';

//#region Create

//#endregion

//#region Read

// #region Link the user state to firebase
export const ReqCheckAuthorization = createAction(
    '[App Start Up] ReqCheckAuthorization',
    props<{ executedTime: number }>(),
);
export const CheckAuthorizationFail = createAction(
    '[ReqCheckAuthorization] CheckAuthorizationFail',
    props<{ executedTime: number }>(),
);
export const CheckAuthorizationSuccess = createAction(
    '[ReqCheckAuthorization] [SCU] CheckAuthorizationSuccess',
    props<{ executedTime: number }>(),
);

//#endregion

//#endregion

//#region Update
export const ReqToggleIsLoading = createAction('[App] ReqToggleIsLoading', props<{ flag: boolean }>());

//#endregion

//#region Delete

//#endregion

// #region App Level Actions
// #region ReqGetAnalytics
export const ReqGetAnalytics = createAction('[Profile] ReqGetAnalytics');
export const GetAnalyticsFail = createAction('[ReqGetAnalytics] GetAnalyticsFail');
export const GetAnalyticsSuccess = createAction(
    '[ReqGetAnalytics] GetAnalyticsSuccess',
    props<{ analytics: Analytics }>(),
);
// #endregion
// #region ReqGetLotsInDateRange
export const ReqGetLotsInDateRange = createAction('[Profile] ReqGetLotsInDateRange', props<{ dateRange: DateRange }>());
export const GetLotsInDateRangeFail = createAction('[ReqGetLotsInDateRange] GetLotsInDateRangeFail');
export const GetLotsInDateRangeSuccess = createAction('[ReqGetLotsInDateRange] GetLotsInDateRangeSuccess');
// #endregion
// #endregion

//#region ReqGetUsersForVerification
export const ReqGetUsersForVerification = createAction('[Admin] ReqGetUsersForVerification');
export const ReqGetUsersForVerificationFail = createAction(
    '[ReqGetUsersForVerification] ReqGetUsersForVerificationFail',
);
export const ReqGetUsersForVerificationSuccess = createAction(
    '[ReqGetUsersForVerification] ReqGetUsersForVerificationSuccess',
    props<{ users: User[] }>(),
);
//#endregion

//#region ReqEmailVerificationForm
export const ReqEmailVerificationForm = createAction('[Verification] ReqEmailVerificationForm');
export const ReqEmailVerificationFormFail = createAction('[ReqEmailVerificationForm] ReqEmailVerificationFormFail');
export const ReqEmailVerificationFormSuccess = createAction(
    '[ReqEmailVerificationForm] ReqEmailVerificationFormSuccess',
);
//#endregion
