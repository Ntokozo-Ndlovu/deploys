import { ReqLogoutAction } from './../../authState/auth.actions';
import { NegotiationCard } from 'src/app/core/models/viewModels';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

import * as negotiationActions from '../negotiations/negotiation.actions';

export const negotiationFeatureKey = 'negotiation';

export interface State extends EntityState<NegotiationCard> {
    completedNegotiations: NegotiationCard[];
    lotMatchIds: number[];
}

function getLocalStorageLotMatchIds() {
    const localStorageValue = localStorage.getItem('lotMatchIds');
    const lotMatchIds = localStorageValue === 'undefined' ? null : JSON.parse(localStorageValue);
    return lotMatchIds ? lotMatchIds : [];
}

export const adapter: EntityAdapter<NegotiationCard> = createEntityAdapter({});

export const initialState: State = adapter.getInitialState<State>({
    ids: [],
    entities: {},
    completedNegotiations: [],
    lotMatchIds: getLocalStorageLotMatchIds(),
});

export const reducer = createReducer(
    initialState,
    on(negotiationActions.UserNegotiationCardsSuccess, (state, action) => {
        let newState = adapter.removeAll(state);
        newState = {
            ...adapter.upsertMany(action.activeNegotiationCards, newState),
            completedNegotiations: action.completedNegotiationCards,
        };

        return newState;
    }),
    on(negotiationActions.GetAvailableMatchIdsSuccess, (state, action) => {
        const newState = {
            ...state,
            lotMatchIds: action.lotMatchIds,
        };
        localStorage.setItem('lotMatchIds', JSON.stringify(action.lotMatchIds));
        return newState;
    }),
    on(ReqLogoutAction, () => {
        return initialState;
    }),
);
