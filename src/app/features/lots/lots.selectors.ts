import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromAppState from '../../core/ngrx/app-state/app-state.reducer';
import * as fromCrop from '../../core/ngrx/crop/crop.reducer';

import * as _appSelectors from '../../core/ngrx/app-state/app-state.selectors';
import * as _lotSelectors from '../../core/ngrx/entities/lot/lot.selectors';
import * as _cropSelectors from '../../core/ngrx/crop/crop.selectors';
import * as _deliveryPointSelectors from '../../core/ngrx/entities/delivery-points/delivery-points.selectors';
import * as _matchSelectors from 'src/app/core/ngrx/entities/match/match.selectors';

import { DeliveryPoint, IdName, Lot, PriceType } from 'src/app/core/models/queryModels';

import { cloneDeep } from 'lodash';

export interface State {
    [fromAppState.appStateFeatureKey]: fromAppState.State;
}

export const getAppState = createFeatureSelector<State, fromAppState.State>('appState');

export const appSelectors = _appSelectors;
export const lotSelectors = _lotSelectors;
export const deliveryPointSelectors = _deliveryPointSelectors;
export const matchSelectors = _matchSelectors;

export const getLotFormData = createSelector(
    _lotSelectors.getCurrentLot,
    getAppState,
    _cropSelectors.selectCropState,
    _deliveryPointSelectors.getAllDeliveryPoints,
    (lot: Lot, appState: fromAppState.State, cropState: fromCrop.State, deliveryPoints: DeliveryPoint[]) => {
        try {
            lot = cloneDeep(lot);
            deliveryPoints = cloneDeep(deliveryPoints);
            const crops = cropState.crops || [];
            const paymentTerms = appState.paymentTerms.filter((paymentTerm) => paymentTerm.id === 6) || [];
            const priceTypes: PriceType[] = [
                { id: 1, name: 'Basis' },
                { id: 2, name: 'Fixed Price' },
            ];
            const safexMonths: IdName[] = appState.months || [];

            return {
                lot,
                crops,
                paymentTerms,
                priceTypes,
                safexMonths,
                deliveryPoints,
            };
        } catch (error) {
            return null;
        }
    },
);
