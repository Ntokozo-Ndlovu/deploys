import { ReqLogoutAction } from './../../authState/auth.actions';
import { ScoutCard, ScoutSearchResult } from './../../../models/viewModels';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import * as ScoutActions from './scout.actions';
import { Scout, FineTune } from 'src/app/core/models/queryModels';

export const scoutFeatureKey = 'scout';

export interface State extends EntityState<ScoutCard> {
    searchResult: ScoutSearchResult;
    searchValues: Scout;
    currentScout: Scout;
    fineTune: FineTune;
}

export const adapter: EntityAdapter<ScoutCard> = createEntityAdapter({
    selectId: selectScoutId,
});

export function selectScoutId(scout: ScoutCard): number {
    return scout.id;
}

export const initialState: State = adapter.getInitialState<State>({
    ids: [],
    entities: {},
    searchResult: null,
    searchValues: null,
    currentScout: null,
    fineTune: null,
});

export const reducer = createReducer(
    initialState,
    on(ScoutActions.ScoutSearchSuccess, ScoutActions.FineTunedScoutSearchSuccess, (state, action) => {
        return { ...state, searchResult: action.scoutSearch };
    }),
    on(ScoutActions.ReqScoutSearch, ScoutActions.ReqUpdateSearchValues, (state, action) => {
        return { ...state, searchValues: action.scout };
    }),
    on(ScoutActions.CreateScoutSuccess, ScoutActions.UpdateScoutSuccess, (state, action) => {
        if (action.scout) {
            const newState = adapter.upsertOne(action.scout, state);
            return { ...newState, searchResult: null, fineTune: null };
        } else {
            return state;
        }
    }),
    on(ScoutActions.ScoutFormDataSuccess, (state, action) => {
        if (action.scoutAndFineTune) {
            return {
                ...state,
                currentScout: action.scoutAndFineTune.scout,
                fineTune: action.scoutAndFineTune.fineTune,
            };
        } else {
            return state;
        }
    }),
    on(ScoutActions.UserScoutCardsSuccess, (state, action) => {
        if (action.scoutCards) {
            const newState = adapter.upsertMany(action.scoutCards, state);
            return { ...newState, searchResult: null, fineTune: null };
        } else {
            return state;
        }
    }),
    on(ScoutActions.DeleteScoutSuccess, (state, action) => {
        const newState = adapter.removeOne(action.scoutId, state);
        return { ...newState, currentScout: null, fineTune: null };
    }),
    on(ScoutActions.ReqFineTunedScoutSearch, (state, action) => {
        return { ...state, fineTune: action.searchInfo };
    }),
    on(ReqLogoutAction, ScoutActions.ClearAllScouts, () => {
        return initialState;
    }),
);
