import { MarketFilters } from '../../models/queryModels';
import { MarketLotCard, ScoutCard } from 'src/app/core/models/viewModels';
import { createAction, props } from '@ngrx/store';

//#region Create
//#endregion

//#region Read
// #region ReqMarketLotCards
export const ReqMarketLotCards = createAction(
    '[Browse Market Dashboard] ReqMarketLotCards',
    props<{ marketFilters: MarketFilters }>(),
);
export const MarketLotCardsFail = createAction('[ReqMarketLotCards] MarketLotCardsFail');
export const MarketLotCardsSuccess = createAction(
    '[ReqMarketLotCards] MarketLotsCardsSuccess',
    props<{ lots: MarketLotCard[] }>(),
);
//#endregion
// #region ReqMarketScoutCards
export const ReqMarketScoutCards = createAction(
    '[Browse Market Dashboard] ReqMarketScoutCards',
    props<{ marketFilters: MarketFilters }>(),
);
export const MarketScoutCardsFail = createAction('[ReqMarketScoutCards] MarketScoutCardsFail');
export const MarketScoutCardsSuccess = createAction(
    '[ReqMarketScoutCards] MarketScoutsCardsSuccess',
    props<{ scouts: ScoutCard[] }>(),
);
//#endregion
//#endregion

//#region Update
//#endregion

// #region Delete
// #endregion

// #region Never Fail Actions
// #region SetCurrentSessionFilters
export const SetCurrentSessionFilters = createAction(
    '[Browse Market Dashboard] [NF] ReqMarketScoutCards',
    props<{ currentSessionFilters: MarketFilters }>(),
);
//#endregion
// #endregion
