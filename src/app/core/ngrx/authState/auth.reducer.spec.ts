import { Dictionary } from '@ngrx/entity';
import * as authActions from './auth.actions';
import { User } from '../../models/queryModels';
import { Action, createReducer, on } from '@ngrx/store';
import { getStateData, addLoading, removeLoading, saveStateData } from '../helperFunctions';

export const authFeatureKey = 'auth';

export interface State {
    user?: User;
    dictLoading: Dictionary<string>;
}

const initialState: State = getInitialState();

function getInitialState() {
    const initState = getStateData<State>(authFeatureKey);

    return initState ? { ...initState, dictLoading: {} } : null;
}

const authReducer = createReducer(
    initialState,
    on(
        authActions.ReqEmailLogin,
        authActions.ReqEmailRegister,
        authActions.ReqProviderSignIn,
        (state, { ...payload }) => {
            return addLoading<State>(state, payload);
        },
    ),
    on(
        authActions.EmailLoginSuccess,
        authActions.EmailRegisterSuccess,
        authActions.ProviderSignInSuccess,
        (state, { ...payload }) => {
            let newState = removeLoading(state, payload);
            newState = { ...newState, user: payload.user };
            saveStateData(authFeatureKey, newState, ['user']);
            return newState;
        },
    ),
    on(
        authActions.EmailLoginFail,
        authActions.ProviderSignInFail,
        authActions.EmailRegistrationFail,
        (state, { ...payload }) => {
            return removeLoading(state, payload);
        },
    ),
    on(authActions.ReqLogoutAction, () => {
        return null;
    }),
);

export function reducer(state = initialState, action: Action): State {
    return authReducer(state, action);
}
