import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromLot from './lot.reducer';

export const selectLotState = createFeatureSelector<fromLot.State>(fromLot.lotFeatureKey);

export const {
    selectIds: getLotCardIds,
    selectEntities: getLotCardEntities,
    selectAll: getAllLotCards,
    selectTotal: getTotalLotCards,
} = fromLot.adapter.getSelectors(selectLotState);

export const getCurrentLot = createSelector(selectLotState, (lotState) => {
    const currentLot = lotState.currentLot;
    return currentLot || null;
});

export const getAllOrderedLotCards = createSelector(getAllLotCards, (lotCards) => {
    const orderedLotCards = lotCards.sort(
        (first, second) => second.createdDate.getTime() - first.createdDate.getTime(),
    );

    return orderedLotCards;
});

export const getLinkedScout = createSelector(selectLotState, (lotState) => {
    const linkedScout = lotState.linkedScout;
    return linkedScout;
});
