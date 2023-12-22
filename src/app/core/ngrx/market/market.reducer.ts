import { MarketLotCard, ScoutCard } from '../../models/viewModels';
import { MarketFilters } from '../../models/queryModels';
import { ReqLogoutAction } from '../authState/auth.actions';
import { createReducer, on } from '@ngrx/store';

import * as marketActions from '../market/market.actions';

export const marketFeatureKey = 'market';

export interface State {
    lots: MarketLotCard[];
    scouts: ScoutCard[];
    currentSessionFilters: MarketFilters;
}

export const initialState: State = {
    lots: null,
    scouts: null,
    currentSessionFilters: null,
};

export const reducer = createReducer(
    initialState,
    on(marketActions.MarketLotCardsSuccess, (state, action) => {
        return { ...state, lots: action.lots };
    }),
    on(marketActions.MarketScoutCardsSuccess, (state, action) => {
        return { ...state, scouts: action.scouts };
    }),
    on(marketActions.SetCurrentSessionFilters, (state, action) => {
        return { ...state, currentSessionFilters: action.currentSessionFilters };
    }),
    on(ReqLogoutAction, () => {
        return initialState;
    }),
);
