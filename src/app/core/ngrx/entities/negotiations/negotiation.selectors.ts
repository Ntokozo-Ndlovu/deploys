import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromNegotiation from './negotiation.reducer';

export const selectNegotiationState = createFeatureSelector<fromNegotiation.State>(
    fromNegotiation.negotiationFeatureKey,
);

export const {
    selectIds: getNegotiationCardIds,
    selectEntities: getNegotiationCardEntities,
    selectAll: getAllNegotiationCards,
    selectTotal: getTotalNegotiationCards,
} = fromNegotiation.adapter.getSelectors(selectNegotiationState);

export const getAllOrderedNegotiationCards = createSelector(
    getAllNegotiationCards,
    selectNegotiationState,
    (negotiationCards, state) => {
        const orderedNegotiationCards = [...negotiationCards, ...state.completedNegotiations].sort(
            (first, second) => second.createdDate.getTime() - first.createdDate.getTime(),
        );

        return orderedNegotiationCards;
    },
);

export const getLotMatchIds = createSelector(selectNegotiationState, (negotiationState) => {
    return negotiationState.lotMatchIds;
});
