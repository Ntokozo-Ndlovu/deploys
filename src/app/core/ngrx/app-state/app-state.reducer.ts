import { ReqLogoutAction } from './../authState/auth.actions';
import { LotMatchFormDataSuccess } from './../entities/match/match.actions';
import { PriceType, User } from 'src/app/core/models/queryModels';
import {
    CropGradesSuccess,
    CropMonthsSuccess,
    CropMonthsAndGradesSuccess,
    CropPackagingSuccess,
} from './../crop/crop.actions';
import { LotFormDataSuccess } from './../entities/lot/lot.actions';
import { createReducer, Action, on } from '@ngrx/store';
import { Dictionary } from '@ngrx/entity';
import * as actions from './app-state.actions';
import * as authActions from '../authState/auth.actions';
import { ClearState } from '../authState/auth.actions';
import { addLoading, removeLoading } from '../helperFunctions';
import { IdName } from '../../models/queryModels';
import { ScoutFormDataSuccess } from '../entities/scout/scout.actions';

export const appStateFeatureKey = 'appState';

export interface State {
    initialLogin: boolean;
    isLoading: boolean;
    persist?: boolean;
    dictLoading: Dictionary<string>;

    unitsOfMeasure: IdName[];
    incoTerms: IdName[];
    priceTypes: PriceType[];
    paymentTerms: IdName[];
    packaging: IdName[];
    cropPackaging: IdName[];
    cropGrades: IdName[];
    months: IdName[];

    users: User[];
}

export const initialState: State = {
    initialLogin: false,
    persist: true,
    isLoading: false,
    dictLoading: {},

    unitsOfMeasure: [],
    incoTerms: [],
    priceTypes: [
        { id: 1, name: 'Basis' },
        { id: 2, name: 'Fixed Price' },
    ],
    paymentTerms: [],
    packaging: [],
    cropGrades: [],
    cropPackaging: [],
    months: [],

    users: [],
};

const appStateReducer = createReducer(
    initialState,
    on(actions.ReqToggleIsLoading, (state, { ...payload }) => {
        return { ...state, isLoading: payload.flag };
    }),
    on(authActions.ReqEmailLogin, authActions.ReqEmailRegister, authActions.ReqProviderSignIn, (state) => {
        return { ...state, isLoading: true };
    }),
    on(
        authActions.EmailLoginFail,
        authActions.ProviderSignInFail,
        authActions.EmailRegistrationFail,
        authActions.EmailLoginSuccess,
        authActions.ProviderSignInSuccess,
        authActions.EmailRegisterSuccess,
        (state) => {
            return { ...state, isLoading: false };
        },
    ),
    on(actions.ReqCheckAuthorization, (state, { ...payload }) => {
        return addLoading({ ...state, persist: true }, payload);
    }),
    on(actions.CheckAuthorizationSuccess, actions.CheckAuthorizationFail, (state, { ...payload }) => {
        return removeLoading({ ...state, persist: false }, payload);
    }),
    on(ScoutFormDataSuccess, (state, payload) => {
        return { ...state, unitsOfMeasure: payload.unitsOfMeasure };
    }),
    on(LotFormDataSuccess, LotMatchFormDataSuccess, (state, payload) => {
        return {
            ...state,
            unitsOfMeasure: payload.unitsOfMeasure,
            incoTerms: payload.incoTerms,
            paymentTerms: payload.paymentOptions,
        };
    }),
    on(CropGradesSuccess, (state, payload) => {
        return { ...state, cropGrades: payload.grades };
    }),
    on(CropMonthsSuccess, (state, payload) => {
        return { ...state, months: payload.safexMonths };
    }),
    on(CropMonthsAndGradesSuccess, (state, payload) => {
        return { ...state, months: payload.safexMonths, cropGrades: payload.grades };
    }),
    on(CropPackagingSuccess, (state, payload) => {
        return { ...state, cropPackaging: payload.cropPackaging };
    }),
    on(actions.ReqGetUsersForVerificationSuccess, (state, payload) => {
        return { ...state, users: payload.users };
    }),
    on(ClearState, ReqLogoutAction, () => {
        return { ...initialState, persist: false };
    }),
);

export function reducer(state = initialState, action: Action): State {
    return appStateReducer(state, action);
}
