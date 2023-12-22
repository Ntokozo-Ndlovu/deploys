import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromScout from './scout.reducer';

export const selectScoutState = createFeatureSelector<fromScout.State>(fromScout.scoutFeatureKey);

export const {
    selectIds: getScoutCardIds,
    selectEntities: getScoutCardEntities,
    selectAll: getAllScoutCards,
    selectTotal: getTotalScoutCards,
} = fromScout.adapter.getSelectors(selectScoutState);

export const getSearchResults = createSelector(selectScoutState, (scoutState) => {
    return scoutState.searchResult || null;
});

export const getSearchCriteria = createSelector(selectScoutState, (scoutState) => {
    return scoutState.searchValues || null;
});

export const getCurrentFullScout = createSelector(selectScoutState, (scoutState) => {
    return scoutState.currentScout || null;
});

export const getFineTune = createSelector(selectScoutState, (scoutState) => {
    return scoutState.fineTune;
});

export const getAllOrderedScoutCards = createSelector(getAllScoutCards, (scoutCards) => {
    const orderedScoutCards = scoutCards.sort(
        (first, second) => second.createdDate.getTime() - first.createdDate.getTime(),
    );

    return orderedScoutCards;
});
