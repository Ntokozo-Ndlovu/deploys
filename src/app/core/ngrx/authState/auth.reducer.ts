import { AdditionalEntityDetail, User, Entity } from './../../models/queryModels';
import { cloneDeep } from 'lodash';
import { Dictionary } from '@ngrx/entity';
import * as actions from './auth.actions';
import { Action, createReducer, on } from '@ngrx/store';
import { getStateData, addLoading, removeLoading, saveStateData } from '../helperFunctions';

export const authFeatureKey = 'auth';

export interface State {
    user?: User;
    entities?: Entity[];
    additionalEntityDetails: AdditionalEntityDetail;
    dictLoading: Dictionary<string>;
}

const initialState: State = getInitialState();

function getInitialState() {
    const initState = getStateData<State>(authFeatureKey);

    return initState;
}

const authReducer = createReducer(
    initialState,
    on(actions.ReqEmailLogin, actions.ReqEmailRegister, actions.ReqProviderSignIn, (state, { ...payload }) => {
        return addLoading<State>(state, payload);
    }),
    on(actions.UpdateUserFromInit, actions.GetUserFromAuthorizationSuccess, (state, { ...payload }) => {
        const { entities, ...user } = payload.user;
        let newState = { ...state, user, entities };
        return cloneDeep(newState);
    }),
    on(actions.ReqUpdateUserDetailsSuccess, (state, { ...payload }) => {
        const user = payload.user;
        return { ...state, user };
    }),
    on(actions.ReqUpdateUserVerificationStatusSuccess, (state, { ...payload }) => {
        let userCopy = cloneDeep(state.user);
        const user = { ...userCopy, verification: payload.verification };
        return { ...state, user };
    }),
    on(
        actions.EmailLoginSuccess,
        actions.EmailRegisterSuccess,
        actions.ProviderSignInSuccess,
        (state, { ...payload }) => {
            let newState = removeLoading(state, payload);
            return newState;
        },
    ),
    on(actions.EntityDisplayInfoSuccess, actions.UpdateEntityInfoSuccess, (state, { ...payload }) => {
        return { ...state, additionalEntityDetails: payload.additionalEntityDetails };
    }),
    on(actions.EmailRegistrationFail, actions.ProviderSignInFail, actions.EmailLoginFail, (state, { ...payload }) => {
        return removeLoading(state, payload);
    }),
    on(actions.ReqLogoutAction, () => {
        return initialState;
    }),
    on(actions.ReqGetClientEntitiesSuccess, (state, { ...payload }) => {
        return { ...state, entities: payload.user.entities };
    }),
    on(actions.ClearClientEntities, (state) => {
        return { ...state, entities: [] };
    }),
);

export function reducer(state = initialState, action: Action): State {
    return authReducer(state, action);
}
