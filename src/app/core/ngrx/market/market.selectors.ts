import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromMarket from './market.reducer';

export const selectMarketState = createFeatureSelector<fromMarket.State>(fromMarket.marketFeatureKey);

export const getLotCards = createSelector(selectMarketState, (state) => {
    return state.lots;
});
export const getScoutCards = createSelector(selectMarketState, (state) => {
    return state.scouts;
});
export const getCurrentSessionFilters = createSelector(selectMarketState, (state) => {
    return state.currentSessionFilters;
});
