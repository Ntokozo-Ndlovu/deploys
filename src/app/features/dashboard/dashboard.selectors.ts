import { cloneDeep } from 'lodash';
import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromApp from '../../core/ngrx/app-state/app-state.reducer';
import * as fromAuth from '../../core/ngrx/authState/auth.reducer';
import * as fromAppState from '../../core/ngrx/app-state/app-state.reducer';
import * as fromScout from '../../core/ngrx/entities/scout/scout.reducer';
import * as fromDeliveryPoints from '../../core/ngrx/entities/delivery-points/delivery-points.reducer';
import * as fromLot from '../../core/ngrx/entities/lot/lot.reducer';
import * as fromMatch from '../../core/ngrx/entities/match/match.reducer';
import * as fromCrop from '../../core/ngrx/crop/crop.reducer';
import * as fromNegotiation from '../../core/ngrx/entities/negotiations/index';

import * as _appSelectors from '../../core/ngrx/app-state/app-state.selectors';
import * as _deliveryPointsSelectors from '../../core/ngrx/entities/delivery-points/delivery-points.selectors';
import * as _lotSelectors from '../../core/ngrx/entities/lot/lot.selectors';
import * as _matchSelectors from '../../core/ngrx/entities/match/match.selectors';
import * as _scoutSelectors from '../../core/ngrx/entities/scout/scout.selectors';
import * as _authSelectors from '../../core/ngrx/authState/auth.selectors';
import * as _cropSelectors from '../../core/ngrx/crop/crop.selectors';
import * as _notificationSelectors from '../../core/ngrx/entities/notifications/notifications.selectors';
import { Lot, DeliveryPoint, IdName } from 'src/app/core/models/queryModels';
import { PriceType, SafexMonth } from 'src/app/core/models/queryModels';

export interface State {
    [fromApp.appStateFeatureKey]: fromApp.State;
    [fromAuth.authFeatureKey]: fromAuth.State;
    [fromAppState.appStateFeatureKey]: fromAppState.State;
    [fromDeliveryPoints.deliveryPointsFeatureKey]: fromDeliveryPoints.State;
    [fromScout.scoutFeatureKey]: fromScout.State;
    [fromLot.lotFeatureKey]: fromLot.State;
    [fromMatch.matchFeatureKey]: fromMatch.State;
    [fromCrop.cropFeatureKey]: fromCrop.State;
    [fromNegotiation.negotiationFeatureKey]: fromNegotiation.negotiationState;
}

export const reducers: ActionReducerMap<State> = {
    [fromApp.appStateFeatureKey]: fromApp.reducer,
    [fromAuth.authFeatureKey]: fromAuth.reducer,
    [fromAppState.appStateFeatureKey]: fromAppState.reducer,
    [fromDeliveryPoints.deliveryPointsFeatureKey]: fromDeliveryPoints.reducer,
    [fromScout.scoutFeatureKey]: fromScout.reducer,
    [fromLot.lotFeatureKey]: fromLot.reducer,
    [fromMatch.matchFeatureKey]: fromMatch.reducer,
    [fromCrop.cropFeatureKey]: fromCrop.reducer,
    [fromNegotiation.negotiationFeatureKey]: fromNegotiation.negotiationReducer,
};

// #region Feature Selectors
export const getAppState = createFeatureSelector<State, fromAppState.State>('appState');
export const getAuthState = createFeatureSelector<State, fromAuth.State>(fromAuth.authFeatureKey);
export const getDeliveryPointState = createFeatureSelector<State, fromDeliveryPoints.State>(
    fromDeliveryPoints.deliveryPointsFeatureKey,
);
// #endregion

export const appSelectors = _appSelectors;
export const authSelectors = _authSelectors;
export const deliveryPointsSelectors = _deliveryPointsSelectors;
export const marketSelectors = _scoutSelectors;
export const lotSelectors = _lotSelectors;
export const matchSelectors = _matchSelectors;
export const negotiationSelector = fromNegotiation.negotiationSelectors;
export const notificationSelectors = _notificationSelectors;
