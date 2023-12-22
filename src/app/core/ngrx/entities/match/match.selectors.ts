import { createFeatureSelector, createSelector } from '@ngrx/store';
import { cloneDeep } from 'lodash';
import * as fromMatch from './match.reducer';

export const selectMatchState = createFeatureSelector<fromMatch.State>(fromMatch.matchFeatureKey);

export const {
    selectIds: getMatchIterationsIds,
    selectEntities: getMatchIterationsEntities,
    selectAll: getAllMatchIterations,
    selectTotal: getTotalMatchIterations,
} = fromMatch.adapter.getSelectors(selectMatchState);

export const getCurrentLotMatches = createSelector(selectMatchState, (state) => {
    let availableMatches = state.currentMatches || [];

    if (availableMatches.length > 0) {
        availableMatches = cloneDeep(availableMatches);
        availableMatches = availableMatches.reverse();
    }
    return availableMatches;
});

export const getNewMatchId = createSelector(selectMatchState, (state) => {
    const matchId = state.matchId || null;
    return matchId;
});
