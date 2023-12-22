import { cloneDeep } from 'lodash';
import { ApiService } from 'src/app/core/services/api/api.service';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { AdditionalEntityDetail } from './../../models/queryModels';
import { AdditionalInfoModalComponent } from './../../../features/shared/components/additional-info-modal/additional-info-modal.component';
import { SubscriptionService } from '../../services/subscription/subscription.service';
import { Injectable } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import * as actions from 'src/app/core/helpers/index.actions';
import { of, combineLatest, EMPTY, from } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as fromRoot from '../reducers/index';
import { mergeMap, catchError, switchMap, takeUntil, take, tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as snackBarConfigs from '../../helpers/snackbar';
import { Capacitor } from '@capacitor/core';
import { Purchases } from '@awesome-cordova-plugins/purchases/ngx';
import {
    matchRCIdentifierToVerificationIdHelper,
    transformSingleUsersForVerificationHelper,
} from 'src/app/core/helpers/helperFunctions';

@Injectable()
export class AuthEffects {
    // #region ReqEmailLogin
    ReqEmailLogin$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.authActions.ReqEmailLogin),
            mergeMap(({ email, password, executedTime }) => {
                return from(this.authService.emailLogin(email, password)).pipe(
                    take(1),
                    mergeMap(() => {
                        return [actions.authActions.EmailLoginSuccess({ executedTime })];
                    }),
                    catchError((error) => {
                        this.snackbar.open(this.constructErrorMessage(error), 'CLOSE', snackBarConfigs.errorConfig);
                        console.log('ReqEmailLogin: ', error);
                        return [actions.authActions.EmailLoginFail({ executedTime })];
                    }),
                );
            }),
        ),
    );
    // #endregion
    // #region ReqProviderSignIn
    ReqProviderSignIn$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.authActions.ReqProviderSignIn),
            mergeMap(({ executedTime, platform }) => {
                return (
                    platform === 'web'
                        ? from(this.authService.providerLogin())
                        : from(this.authService.nativeProviderLogin())
                ).pipe(
                    take(1),
                    mergeMap(() => {
                        return [actions.authActions.ProviderSignInSuccess({ executedTime })];
                    }),
                    catchError((error) => {
                        this.snackbar.open(this.constructErrorMessage(error), 'CLOSE', snackBarConfigs.errorConfig);
                        console.log('ReqProviderSignIn: ', error);
                        return [actions.authActions.ProviderSignInFail({ executedTime })];
                    }),
                );
            }),
        ),
    );
    // #endregion

    // #region Registration
    ReqEmailRegister$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.authActions.ReqEmailRegister),
            mergeMap(({ executedTime, email, password, signUpData }) => {
                return from(this.authService.emailSignUp(email, password, signUpData)).pipe(
                    take(1),
                    mergeMap(() => {
                        return [actions.authActions.EmailRegisterSuccess({ executedTime })];
                    }),
                    catchError((error) => {
                        console.log('ReqEmailRegister: ', error);
                        this.snackbar.open(this.constructErrorMessage(error), 'CLOSE', snackBarConfigs.errorConfig);
                        return [actions.authActions.EmailRegistrationFail({ executedTime })];
                    }),
                );
            }),
        ),
    );
    // #endregion

    // #region ReqPasswordReset
    ReqPasswordReset = createEffect(
        () =>
            this.actions$.pipe(
                ofType(actions.authActions.ReqPasswordReset),
                mergeMap((payload) => {
                    return combineLatest([this.authService.resetPassword(payload.email), of(payload)]);
                }),
                switchMap(([, _payload]) => {
                    this.snackbar.open(
                        `Successfully sent password reset email to ${_payload.email}.`,
                        'CLOSE',
                        snackBarConfigs.successConfig,
                    );
                    return EMPTY;
                }),
                catchError((error) => {
                    console.log('ReqPasswordReset: ', error.message);
                    return EMPTY;
                }),
            ),
        { dispatch: false },
    );
    // #endregion

    // #region ReqLogoutAction
    ReqLogoutAction$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.authActions.ReqLogoutAction),
            mergeMap((payload) => {
                return of(payload).pipe(
                    mergeMap((_payload) => {
                        return this.authService.logout();
                    }),
                    mergeMap(() => {
                        this.subService.unsubscribeComponent$.next();
                        localStorage.clear();
                        return of('disposable').pipe(
                            switchMap(() => {
                                return [actions.authActions.ClearState()];
                            }),
                        );
                    }),
                    catchError((error) => {
                        console.log('ReqLogoutAction: ', error.message);
                        return [];
                    }),
                );
            }),
        ),
    );
    // #endregion

    // #region ReqGetUserFromAuthorization
    ReqGetUserFromAuthorization$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.authActions.ReqGetUserFromAuthorization),
            mergeMap((payload) => {
                return this.authService.getUser(payload.uid).pipe(
                    mergeMap((user) => {
                        return [actions.authActions.GetUserFromAuthorizationSuccess({ user })];
                    }),
                    catchError((error) => {
                        console.log('ReqGetUserFromAuthorization: ', error.message);
                        return [actions.authActions.GetUserFromAuthorizationFail()];
                    }),
                );
            }),
        ),
    );
    // #endregion

    // #region ReqGetUserFromAuthorization
    ReqGetClientEntities$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.authActions.ReqGetClientEntities),
            mergeMap((payload) => {
                return this.authService.getUser(payload.clientUid, true).pipe(
                    mergeMap((user) => {
                        return [actions.authActions.ReqGetClientEntitiesSuccess({ user })];
                    }),
                    catchError((error) => {
                        console.log('ReqGetClientEntitiesFail: ', error.message);
                        return [actions.authActions.ReqGetClientEntitiesFail()];
                    }),
                );
            }),
        ),
    );
    // #endregion

    // #region saveAdditionalEntityDetails
    saveAdditionalEntityDetails$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.authActions.GetUserFromAuthorizationSuccess),
            mergeMap((user) => {
                return this.store.pipe(
                    select(fromRoot.authSelectors.getUserEntities),
                    take(1),
                    switchMap((entities) => {
                        return this.api.getEntityById(entities[0].id);
                    }),
                    switchMap((entity) => {
                        return combineLatest([of(user), of(entity.id)]);
                    }),
                );
            }),
            mergeMap(([{ user }, entityId]) => {
                if (!user.hasB_BBEE) {
                    const dialogRef = this.dialog.open<AdditionalInfoModalComponent, null, AdditionalEntityDetail>(
                        AdditionalInfoModalComponent,
                        { disableClose: true, panelClass: 'g-modal-container' },
                    );
                    return combineLatest([dialogRef.afterClosed(), of(entityId)]);
                } else {
                    return combineLatest([of(null as AdditionalEntityDetail), of(null as number)]);
                }
            }),
            mergeMap(([additionalDetails, entityId]) => {
                if (additionalDetails && entityId) {
                    const additionalEntityDetails = this.generateAdditionalDetailsWithTradingEntity(
                        additionalDetails,
                        entityId,
                    );
                    return this.api.saveAdditionalEntityDetails(additionalEntityDetails);
                }
                return of(null);
            }),
            mergeMap((authResult) => {
                if (authResult) {
                    this.snackbar.open('Successfully Saved Equity Information', 'CLOSE', snackBarConfigs.successConfig);
                    return [actions.authActions.SaveAdditionalEntityDetailsSuccess()];
                }
                return [actions.authActions.SaveAdditionalEntityDetailsSuccess()];
            }),
            catchError((error) => {
                console.log('saveAdditionalEntityDetails: ', error.message);
                this.snackbar.open(
                    'An Error Occurred When Attempting To Save Equity Information',
                    'CLOSE',
                    snackBarConfigs.errorConfig,
                );
                return [actions.authActions.SaveAdditionalEntityDetailsFail()];
            }),
        ),
    );
    // #endregion

    // #region ReqSubscriptionStatus
    ReqSubscriptionStatus$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(actions.authActions.GetUserFromAuthorizationSuccess),
                mergeMap((user) => {
                    if (Capacitor.getPlatform() !== 'web') {
                        if (user.user.verification?.verificationExpires) {
                            this.purchases.logIn(user.user.uid).then(
                                ({ customerInfo, created }) => {
                                    if (!created) {
                                        let latestExpiryDate = customerInfo.latestExpirationDate;
                                        if (new Date(latestExpiryDate) > new Date()) {
                                            const verificationId = matchRCIdentifierToVerificationIdHelper(
                                                customerInfo?.activeSubscriptions[0],
                                            );
                                            this.store.dispatch(
                                                actions.authActions.ReqUpdateUserVerificationStatus({
                                                    userVerifications: [
                                                        transformSingleUsersForVerificationHelper(
                                                            verificationId,
                                                            user.user,
                                                            new Date(latestExpiryDate).getTime(),
                                                        ),
                                                    ],
                                                    showSnackBar: false,
                                                }),
                                            );
                                        } else {
                                            this.store.dispatch(
                                                actions.authActions.ReqUpdateUserVerificationStatus({
                                                    userVerifications: [
                                                        transformSingleUsersForVerificationHelper(6, user.user, null),
                                                    ],
                                                    showSnackBar: false,
                                                }),
                                            );
                                        }
                                    }
                                },
                                (error) => {
                                    this.snackbar.open(
                                        'An Error occurred updating your verification status.',
                                        'CLOSE',
                                        snackBarConfigs.errorConfig,
                                    );
                                    console.log('RevenueCat Subscription Check Error: ', error);
                                },
                            );
                        }
                    }
                    return EMPTY;
                }),
                catchError((error) => {
                    console.log('ReqSubscriptionStatus: ', error.message);
                    this.snackbar.open(
                        'An Error Occurred When Attempting To check verification status',
                        'CLOSE',
                        snackBarConfigs.errorConfig,
                    );
                    return EMPTY;
                }),
            ),
        { dispatch: false },
    );
    // #endregion

    // #region ReqEntityDisplayInfo
    ReqEntityDisplayInfo$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.authActions.ReqEntityDisplayInfo),
            switchMap(() => {
                return this.store.pipe(
                    select(fromRoot.authSelectors.getUserEntities),
                    take(1),
                    switchMap((entities) => {
                        return this.api.getAdditionalEntityDetails(entities[0].id);
                    }),
                    switchMap((additionalEntityDetails) => {
                        return [actions.authActions.EntityDisplayInfoSuccess({ additionalEntityDetails })];
                    }),
                    catchError((error) => {
                        console.log({ ReqEntityDisplayInfo: error });
                        return [actions.authActions.EntityDisplayInfoFail()];
                    }),
                );
            }),
        ),
    );
    // #endregion

    // #region ReqUpdateEntityInfo
    ReqUpdateEntityInfo$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.authActions.ReqUpdateEntityInfo),
            switchMap((payload) => {
                return this.api.saveAdditionalEntityDetails(payload.additionalEntityDetails).pipe(
                    switchMap((additionalEntityDetail) => {
                        this.snackbar.open(
                            'Successfully Updated Entity Information',
                            'CLOSE',
                            snackBarConfigs.successConfig,
                        );
                        return [
                            actions.authActions.UpdateEntityInfoSuccess({
                                additionalEntityDetails: additionalEntityDetail,
                            }),
                        ];
                    }),
                    catchError((error) => {
                        console.log('ReqUpdateEntityInfo: ', error.message);
                        this.snackbar.open(
                            'An Error Occurred When Attempting To Update Equity Information',
                            'CLOSE',
                            snackBarConfigs.errorConfig,
                        );
                        return [actions.authActions.UpdateEntityInfoFail()];
                    }),
                );
            }),
        ),
    );
    // #endregion

    //#region ReqUpdateUserVerificationStatus
    ReqUpdateUserVerificationStatus$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.authActions.ReqUpdateUserVerificationStatus),
            switchMap(({ userVerifications, showSnackBar }) => {
                return [
                    {
                        verifyResponse: this.authService.verifyUsers(userVerifications),
                        userVerification: userVerifications,
                        showSnackBar: showSnackBar,
                    },
                ];
            }),
            switchMap((verificationResponse) => {
                verificationResponse.verifyResponse.then((response) => {
                    if (verificationResponse.showSnackBar) {
                        const failed: boolean = response.includes('Failed');
                        this.snackbar.open(
                            response,
                            'CLOSE',
                            failed ? snackBarConfigs.errorConfig : snackBarConfigs.successConfig,
                        );
                    }
                });

                return [
                    actions.authActions.ReqUpdateUserVerificationStatusSuccess({
                        verification: verificationResponse.userVerification[0].verification,
                    }),
                ];
            }),
            catchError((error) => {
                console.log('ReqUpdateUserVerificationStatus: ', error);
                this.snackbar.open(error, 'CLOSE', snackBarConfigs.errorConfig);
                return [actions.authActions.ReqUpdateUserVerificationStatusFail()];
            }),
        ),
    );
    //#endregion

    //#region ReqUpdateUserDetails
    ReqUpdateUserDetails$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.authActions.ReqUpdateUserDetails),
            switchMap(({ user, updateSQL }) => {
                return of(this.authService.updateUserData(user)).pipe(
                    switchMap((res) => {
                        if (!updateSQL) return res;
                        return this.api.updateUser({ uid: user.uid, phoneNumber: user.phone, email: user.email });
                    }),
                    switchMap(() => {
                        if (updateSQL)
                            this.snackbar.open(
                                'Successfully Updated User Details',
                                'CLOSE',
                                snackBarConfigs.successConfig,
                            );
                        return [actions.authActions.ReqUpdateUserDetailsSuccess({ user })];
                    }),
                    catchError((error) => {
                        console.log('ReqUpdateUserDetails: ', error);
                        if (updateSQL)
                            this.snackbar.open('Failed To Update User Details', 'CLOSE', snackBarConfigs.errorConfig);
                        return [actions.authActions.ReqUpdateUserDetailsFail()];
                    }),
                );
            }),
        ),
    );
    //#endregion

    //#region ReqDeleteAccountEmail
    ReqDeleteAccountEmail$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.authActions.ReqDeleteAccountEmail),
            switchMap(({ user }) => {
                return this.api.deleteAccountRequest(user).pipe(
                    mergeMap(() => {
                        this.snackbar.open('Account Deletion Email sent.', 'CLOSE', snackBarConfigs.successConfig);
                        return [actions.authActions.ReqDeleteAccountEmailSuccess()];
                    }),
                    catchError((error) => {
                        console.log('ReqDeleteAccountEmail: ', error.message);
                        this.snackbar.open(
                            'Failed To send deletion email, please try again.',
                            'CLOSE',
                            snackBarConfigs.errorConfig,
                        );
                        return [actions.authActions.ReqDeleteAccountEmailFail()];
                    }),
                );
            }),
        ),
    );
    //#endregion

    // #region Helper Functions

    generateAdditionalDetailsWithTradingEntity(additionalDetails: AdditionalEntityDetail, entityId: number) {
        const additionalDetailsWithTradingEntity: AdditionalEntityDetail = {
            legalEntityName: additionalDetails.legalEntityName,
            exFarm: additionalDetails.exFarm,
            bbbeeRating: +additionalDetails.bbbeeRating,
            entityId: entityId,
            email: additionalDetails.email,
        };
        return additionalDetailsWithTradingEntity;
    }

    constructErrorMessage(code: string) {
        let message = '';

        switch (code) {
            case 'auth/email-already-exists':
            case 'auth/email-already-in-use':
                message = 'The provided email is already in use. Please sign in or reset your password.';

                break;
            case 'auth/wrong-password':
                message = 'The email or password is incorrect. Please try again.';

                break;
            case 'auth/popup-closed-by-user':
                message = 'Login has been cancelled by the user.';
                break;
            case 'auth/popup-blocked':
                message = 'The login popup has been blocked. Please allow popups to continue.';
                break;
            case 'auth/cancelled-popup-request':
                message = 'The login request has been cancelled.';
                break;
            case 'auth/timeout':
                message = 'The action took too long. Please check your network connection and try again.';
                break;
            case 'auth/account-exists-with-different-credential':
                message = 'This account already exists in our system.';
                break;
            case 'auth/too-many-requests':
                message = 'Too many incorrect attempts have been made. Please try again in 1 minute.';
                break;
            case 'auth/invalid-email':
                message = 'Please provide a full valid email address.';
                break;
            case 'auth/user-not-found':
                message = 'There is no user with the provided credentials.';
                break;
            case 'auth/user-disabled':
                message = 'This user account has been disabled by the developers.';
                break;
            case 'auth/signed-in':
                message = 'Please log out to register a new account.';
                break;
            case 'auth/operation-not-allowed':
                message = 'This feature has not been enabled yet. Please use one of the other methods to login.';
                break;
            default:
                console.log({ code });
                if (code.length < 15) {
                    message = 'We ran into an authentication error.\nPlease try again.';
                } else {
                    message = 'An unexpected error has occurred and your action was cancelled. Please try again. ';
                }
                break;
        }

        return message;
    }
    // #endregion

    constructor(
        private actions$: Actions,
        private snackbar: MatSnackBar,
        private authService: AuthService,
        private store: Store<fromRoot.State>,
        private subService: SubscriptionService,
        private api: ApiService,
        private dialog: MatDialog,
        private purchases: Purchases,
    ) {}
}
