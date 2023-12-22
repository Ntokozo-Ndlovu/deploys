import { createFeatureSelector, createSelector } from '@ngrx/store';
import { User } from '../../models/queryModels';
import * as fromAuth from './auth.reducer';

export const getAuthState = createFeatureSelector<fromAuth.State>(fromAuth.authFeatureKey);

// #region getUser

export const getUser = createSelector(getAuthState, (authState) => {
    return authState?.user;
});

// #endregion

// #region getUserEntities

export const getUserEntities = createSelector(getAuthState, (authState) => {
    return authState?.entities || [];
});

// #endregion

// #region getAdditionalEntityDetails

export const getAdditionalEntityDetails = createSelector(getAuthState, (authState) => {
    return authState?.additionalEntityDetails || null;
});

// #endregion
