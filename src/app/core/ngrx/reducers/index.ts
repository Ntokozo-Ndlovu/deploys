import { Crop } from './../../models/queryModels';
import { ScoutCard } from './../../models/viewModels';
import { DeliveryPoint, IdName } from 'src/app/core/models/queryModels';
import { Dictionary } from '@ngrx/entity';
import { ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import * as fromAuth from '../authState/auth.reducer';
import * as fromAppState from '../app-state/app-state.reducer';
import * as fromScout from '../entities/scout/scout.reducer';
import * as fromDeliveryPoints from '../entities/delivery-points/delivery-points.reducer';
import * as fromCrop from '../crop/crop.reducer';
import * as fromNotifications from '../entities/notifications/notifications.reducer';
import * as fromAgents from '../brokers/brokers.reducer';

import * as _deliveryPointsSelectors from '../entities/delivery-points/delivery-points.selectors';
import * as _scoutSelectors from '../entities/scout/scout.selectors';
import * as _authSelectors from '../authState/auth.selectors';
import * as _cropSelectors from '../crop/crop.selectors';

export interface State {
    [fromAuth.authFeatureKey]: fromAuth.State;
    [fromAppState.appStateFeatureKey]: fromAppState.State;
    [fromDeliveryPoints.deliveryPointsFeatureKey]: fromDeliveryPoints.State;
    [fromScout.scoutFeatureKey]: fromScout.State;
    [fromCrop.cropFeatureKey]: fromCrop.State;
    [fromNotifications.notificationsFeatureKey]: fromNotifications.State;
    [fromAgents.brokersFeatureKey]: fromAgents.State;
}

export const reducers: ActionReducerMap<State> = {
    [fromAuth.authFeatureKey]: fromAuth.reducer,
    [fromAppState.appStateFeatureKey]: fromAppState.reducer,
    [fromDeliveryPoints.deliveryPointsFeatureKey]: fromDeliveryPoints.reducer,
    [fromScout.scoutFeatureKey]: fromScout.reducer,
    [fromCrop.cropFeatureKey]: fromCrop.reducer,
    [fromNotifications.notificationsFeatureKey]: fromNotifications.reducer,
    [fromAgents.brokersFeatureKey]: fromAgents.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

// #region Selectors

// #region Feature Selectors
export const getAppState = createFeatureSelector<State, fromAppState.State>('appState');
export const getAuthState = createFeatureSelector<State, fromAuth.State>(fromAuth.authFeatureKey);
export const getDeliveryPointState = createFeatureSelector<State, fromDeliveryPoints.State>(
    fromDeliveryPoints.deliveryPointsFeatureKey,
);
// #endregion

//#endregion

// #region App State
//#endregion

// #region Auth State

//#endregion

// #region Create/Edit Market

export const getScoutFormData = createSelector(
    _scoutSelectors.getScoutCardEntities,
    getAppState,
    _cropSelectors.selectCropState,
    (
        scoutDictionary: Dictionary<ScoutCard>,
        appState: fromAppState.State,
        cropState: fromCrop.State,
        props: { scoutId: number },
    ): { scout: ScoutCard; crops: Crop[]; unitsOfMeasure: IdName[] } => {
        try {
            const scout = props.scoutId ? scoutDictionary[props.scoutId] : null;
            const crops = cropState.crops;
            const unitsOfMeasure = appState.unitsOfMeasure;
            return { scout: scout, crops, unitsOfMeasure };
        } catch (error) {
            return null;
        }
    },
);

//#endregion

export const authSelectors = _authSelectors;
export const deliveryPointsSelectors = _deliveryPointsSelectors;
export const marketSelectors = _scoutSelectors;
