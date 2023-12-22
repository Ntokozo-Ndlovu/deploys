import { LotMatchIteration } from './../../core/models/viewModels';
import { cloneDeep } from 'lodash';
import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromAuth from '../../core/ngrx/authState/auth.reducer';
import * as fromAppState from '../../core/ngrx/app-state/app-state.reducer';
import * as fromScout from '../../core/ngrx/entities/scout/scout.reducer';
import * as fromDeliveryPoints from '../../core/ngrx/entities/delivery-points/delivery-points.reducer';
import * as fromLot from '../../core/ngrx/entities/lot/lot.reducer';
import * as fromMatch from '../../core/ngrx/entities/match/match.reducer';
import * as fromCrop from '../../core/ngrx/crop/crop.reducer';

import * as _deliveryPointsSelectors from '../../core/ngrx/entities/delivery-points/delivery-points.selectors';
import * as _lotSelectors from '../../core/ngrx/entities/lot/lot.selectors';
import * as _matchSelectors from '../../core/ngrx/entities/match/match.selectors';
import * as _scoutSelectors from '../../core/ngrx/entities/scout/scout.selectors';
import * as _authSelectors from '../../core/ngrx/authState/auth.selectors';
import * as _cropSelectors from '../../core/ngrx/crop/crop.selectors';
import { Lot, DeliveryPoint, IdName } from 'src/app/core/models/queryModels';
import { PriceType, SafexMonth } from 'src/app/core/models/queryModels';

export interface State {
    [fromAuth.authFeatureKey]: fromAuth.State;
    [fromAppState.appStateFeatureKey]: fromAppState.State;
    [fromDeliveryPoints.deliveryPointsFeatureKey]: fromDeliveryPoints.State;
    [fromScout.scoutFeatureKey]: fromScout.State;
    [fromLot.lotFeatureKey]: fromLot.State;
    [fromMatch.matchFeatureKey]: fromMatch.State;
    [fromCrop.cropFeatureKey]: fromCrop.State;
}

export const reducers: ActionReducerMap<State> = {
    [fromAuth.authFeatureKey]: fromAuth.reducer,
    [fromAppState.appStateFeatureKey]: fromAppState.reducer,
    [fromDeliveryPoints.deliveryPointsFeatureKey]: fromDeliveryPoints.reducer,
    [fromScout.scoutFeatureKey]: fromScout.reducer,
    [fromLot.lotFeatureKey]: fromLot.reducer,
    [fromMatch.matchFeatureKey]: fromMatch.reducer,
    [fromCrop.cropFeatureKey]: fromCrop.reducer,
};

// #region Feature Selectors
export const getAppState = createFeatureSelector<State, fromAppState.State>('appState');
export const getAuthState = createFeatureSelector<State, fromAuth.State>(fromAuth.authFeatureKey);
export const getDeliveryPointState = createFeatureSelector<State, fromDeliveryPoints.State>(
    fromDeliveryPoints.deliveryPointsFeatureKey,
);
// #endregion

export const authSelectors = _authSelectors;
export const deliveryPointsSelectors = _deliveryPointsSelectors;
export const marketSelectors = _scoutSelectors;
export const lotSelectors = _lotSelectors;
export const matchSelectors = _matchSelectors;

export const getLotMatchFormData = createSelector(
    _matchSelectors.getAllMatchIterations,
    getAppState,
    _cropSelectors.selectCropState,
    _deliveryPointsSelectors.getAllDeliveryPoints,
    (
        lotMatchIterations: LotMatchIteration[],
        appState: fromAppState.State,
        cropState: fromCrop.State,
        deliveryPoints: DeliveryPoint[],
    ) => {
        try {
            lotMatchIterations = cloneDeep(lotMatchIterations);

            lotMatchIterations = lotMatchIterations.sort((a, b) => {
                return b?.iterationCount - a?.iterationCount;
            });
            deliveryPoints = cloneDeep(deliveryPoints);
            const crops = cropState.crops || [];
            const paymentTerms = appState.paymentTerms.filter((paymentTerm) => paymentTerm.id === 6) || [];
            const cropGrades = appState.cropGrades || [];
            const priceTypes: PriceType[] = [
                { id: 1, name: 'Basis' },
                { id: 2, name: 'Fixed Price' },
            ];
            const safexMonths: IdName[] = appState.months || [];

            return {
                lotMatchIterations,
                crops,
                paymentTerms,
                priceTypes,
                safexMonths,
                deliveryPoints,
                cropGrades,
            };
        } catch (error) {
            return null;
        }
    },
);
