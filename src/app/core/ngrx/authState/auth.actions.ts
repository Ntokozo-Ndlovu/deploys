import { UserVerification, Verification } from './../../models/queryModels';
import { AdditionalEntityDetail, UserWithEntities, User, Entity } from 'src/app/core/models/queryModels';
import { createAction, props } from '@ngrx/store';
import { SignUpData } from '../../models/viewModels';

// #region Email Login
export const ReqEmailLogin = createAction(
    '[Login Page] ReqEmailLogin',
    props<{ email: string; password: string; executedTime: number }>(),
);
export const EmailLoginSuccess = createAction(
    '[ReqEmailLogin] [SCU] EmailLoginSuccess',
    props<{ executedTime: number }>(),
);
export const EmailLoginFail = createAction('[ReqEmailLogin] EmailLoginFail', props<{ executedTime: number }>());

// #endregion

// #region Email registration
export const ReqEmailRegister = createAction(
    '[Register Page] ReqEmailRegister',
    props<{ email: string; password: string; signUpData: SignUpData; executedTime: number }>(),
);
export const EmailRegisterSuccess = createAction(
    '[ReqEmailRegister] EmailRegisterSuccess',
    props<{ executedTime: number }>(),
);
export const EmailRegistrationFail = createAction(
    '[ReqEmailRegistration] EmailRegistrationFail',
    props<{ executedTime: number }>(),
);

export const SaveAdditionalEntityDetails = createAction(
    '[Additional Info Modal] SaveAdditionalEntityDetails',
    props<{ additionalEntityDetails: AdditionalEntityDetail }>(),
);
export const SaveAdditionalEntityDetailsSuccess = createAction(
    '[Additional Info Modal] SaveAdditionalEntityDetailsSuccess',
);
export const SaveAdditionalEntityDetailsFail = createAction('[Additional Info Modal] SaveAdditionalEntityDetailsFail');

// #endregion

// #region Provider Sign In
export const ReqProviderSignIn = createAction(
    '[Register Page] ReqProviderSignIn',
    props<{ executedTime: number; platform: string }>(),
);
export const ProviderSignInFail = createAction(
    '[ReqProviderSignIn] ProviderSignInFail',
    props<{ executedTime: number }>(),
);
export const ProviderSignInSuccess = createAction(
    '[ReqProviderSignIn] ProviderSignInSuccess',
    props<{ executedTime: number }>(),
);

// #endregion

// #region ReqPasswordReset
export const ReqPasswordReset = createAction('[Login Page] [NF] ReqPasswordReset', props<{ email: string }>());
// #endregion

//#region UpdateUserFromInit
export const UpdateUserFromInit = createAction(
    '[ReqLinkUser] [SCU] UpdateUserFromInit',
    props<{ user: UserWithEntities; executedTime: number }>(),
);
//#endregion

//#region ReqUpdateUserDetails
export const ReqUpdateUserDetails = createAction(
    '[User Tab / Verification Page] ReqUpdateUserDetails',
    props<{ user: User; updateSQL?: boolean }>(),
);
export const ReqUpdateUserDetailsFail = createAction('[ReqUpdateUserDetails] ReqUpdateUserDetailsFail');
export const ReqUpdateUserDetailsSuccess = createAction(
    '[ReqUpdateUserDetails] ReqUpdateUserDetailsSuccess',
    props<{ user: User }>(),
);
//#endregion

// #region ReqSubscriptionStatus
export const ReqSubscriptionStatus = createAction('[GetUserFromAuthorizationSuccess] [NF] ReqSubscriptionStatus');
//#endregion

//#region ReqUpdateUserVerificationStatus
export const ReqUpdateUserVerificationStatus = createAction(
    '[Admin] ReqUpdateUserVerificationStatus',
    props<{ userVerifications: UserVerification[]; showSnackBar: boolean }>(),
);
export const ReqUpdateUserVerificationStatusFail = createAction(
    '[ReqUpdateUserVerificationStatus] ReqUpdateUserVerificationStatusFail',
);
export const ReqUpdateUserVerificationStatusSuccess = createAction(
    '[ReqUpdateUserVerificationStatus] ReqUpdateUserVerificationStatusSuccess',
    props<{ verification: Verification }>(),
);
//#endregion

// #region ReqGetUserFromAuthorization
export const ReqGetUserFromAuthorization = createAction(
    '[ReqCheckAuthorization] [SCU] ReqGetUserFromAuthorization',
    props<{ uid: string }>(),
);
export const GetUserFromAuthorizationFail = createAction('[ReqGetUserFromAuthorization] GetUserFromAuthorizationFail');
export const GetUserFromAuthorizationSuccess = createAction(
    '[ReqGetUserFromAuthorization] GetUserFromAuthorizationSuccess',
    props<{ user: UserWithEntities }>(),
);
//#endregion

// #region ReqEntityDisplayInfo
export const ReqEntityDisplayInfo = createAction('[Profile Page] ReqEntityDisplayInfo');
export const EntityDisplayInfoFail = createAction('[ReqEntityDisplayInfo] EntityDisplayInfoFail');
export const EntityDisplayInfoSuccess = createAction(
    '[ReqEntityDisplayInfo] EntityDisplayInfoSuccess',
    props<{ additionalEntityDetails: AdditionalEntityDetail }>(),
);

// #endregion

// #region ReqEntityDisplayInfo
export const ReqUpdateEntityInfo = createAction(
    '[Profile Page] ReqUpdateEntityInfo',
    props<{ additionalEntityDetails: AdditionalEntityDetail }>(),
);
export const UpdateEntityInfoFail = createAction('[ReqUpdateEntityInfo] UpdateEntityInfoFail');
export const UpdateEntityInfoSuccess = createAction(
    '[ReqUpdateEntityInfo] UpdateEntityInfoSuccess',
    props<{ additionalEntityDetails: AdditionalEntityDetail }>(),
);
// #endregion

// #region ReqDeleteAccountEmail
export const ReqDeleteAccountEmail = createAction('[Profile Page] ReqDeleteAccountEmail', props<{ user: User }>());
export const ReqDeleteAccountEmailFail = createAction('[ReqDeleteAccountEmail] ReqDeleteAccountEmailFail');
export const ReqDeleteAccountEmailSuccess = createAction('[ReqDeleteAccountEmail] ReqDeleteAccountEmailSuccess');
// #endregion

// #region Get Client Entities
export const ReqGetClientEntities = createAction(
    '[ Lot Component ] ReqGetClientEntities',
    props<{ clientUid: string }>(),
);
export const ReqGetClientEntitiesFail = createAction('[ ReqGetClientEntities ] ReqGetClientEntitiesFail');
export const ReqGetClientEntitiesSuccess = createAction(
    '[ ReqGetClientEntities ] ReqGetClientEntitiesSuccess',
    props<{ user: UserWithEntities }>(),
);
// #endregion

// #region Clear Client Entity
export const ClearClientEntities = createAction('[Broker Dashboard] [NF] ClearClientEntity');
// #endregion

// #region Logout
export const ReqLogoutAction = createAction('[Any] [NF] Logout');

export const ClearState = createAction('[ALL] ClearState');
// #endregion
