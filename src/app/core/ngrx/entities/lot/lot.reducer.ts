import { ReqLogoutAction } from './../../authState/auth.actions';
import { ScoutCard } from './../../../models/viewModels';
import { LotCard } from 'src/app/core/models/viewModels';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Lot } from 'src/app/core/models/queryModels';

import * as lotActions from './lot.actions';
import { ClearAllLots } from './lot.actions';

export const lotFeatureKey = 'lot';

export interface State extends EntityState<LotCard> {
    currentLot: Lot;
    linkedScout: ScoutCard;
}

export const adapter: EntityAdapter<LotCard> = createEntityAdapter({});

export const initialState: State = adapter.getInitialState<State>({
    ids: [],
    entities: {},
    currentLot: null,
    linkedScout: null,
});

export const reducer = createReducer(
    initialState,
    on(lotActions.CreateLotSuccess, lotActions.UpdateLotSuccess, (state, action) => {
        if (action.lot) {
            const newState = adapter.upsertOne(action.lot, { ...state, currentLot: null });
            return newState;
        } else {
            return state;
        }
    }),
    on(lotActions.LotFormDataSuccess, (state, action) => {
        return { ...state, currentLot: action.lot };
    }),
    on(lotActions.UserLotsSuccess, (state, action) => {
        const newState = adapter.upsertMany(action.lotCards, state);

        return newState;
    }),
    on(lotActions.ReqSaveLotFormData, (state, action) => {
        return { ...state, currentLot: action.lot };
    }),
    on(lotActions.DeleteLotSuccess, (state, action) => {
        const newState = adapter.removeOne(action.lotId, state);
        return { ...newState, currentLot: null };
    }),
    on(lotActions.LinkCurrentScoutToLot, (state, action) => {
        const newState = { ...state, linkedScout: action.scout, currentLot: null };
        return newState;
    }),
    on(ReqLogoutAction, ClearAllLots, () => {
        return initialState;
    }),
);
