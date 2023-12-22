import { ReqLogoutAction } from './../../authState/auth.actions';
import { LotMatchIteration } from './../../../models/viewModels';
import { LotMatch } from '../../../models/viewModels';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import * as matchActions from './match.actions';

export const matchFeatureKey = 'match';

export interface State extends EntityState<LotMatchIteration> {
    currentMatches: LotMatch[];
    matchId: number;
}

export const adapter: EntityAdapter<LotMatchIteration> = createEntityAdapter({});

export const initialState: State = adapter.getInitialState<State>({
    ids: [],
    entities: {},
    currentMatches: [],
    matchId: null,
});

export const reducer = createReducer(
    initialState,
    on(matchActions.LoadLotMatchesSuccess, (state, payload) => {
        return { ...state, currentMatches: payload.matches };
    }),
    on(matchActions.LotMatchFormDataSuccess, (state, action) => {
        let newState = adapter.removeAll(state);
        newState = adapter.upsertMany(action.lotMatchIterations, newState);
        return newState;
    }),
    on(matchActions.UpdateLotMatchSuccess, (state, action) => {
        const newState = adapter.upsertOne(action.lotMatchIteration, state);
        return newState;
    }),
    on(matchActions.CreateLotMatchSuccess, (state, action) => {
        return { ...state, matchId: action.id };
    }),
    on(ReqLogoutAction, () => {
        return initialState;
    }),
);
