import { NegotiationCard, LotMatch, LotMatchIteration } from 'src/app/core/models/viewModels';
import { createAction, props } from '@ngrx/store';

//#region Create
//#endregion

//#region Read
// #region ReqNegotiationCards
export const ReqUserNegotiationCards = createAction(
    '[Negotiation Dashboard] ReqUserNegotiationCards',
    props<{ clientUid?: string }>(),
);
export const UserNegotiationCardsFail = createAction('[ReqUserNegotiationCards] UserNegotiationCardsFail');
export const UserNegotiationCardsSuccess = createAction(
    '[ReqUserNegotiationCards] UserNegotiationsCardsSuccess',
    props<{ activeNegotiationCards: NegotiationCard[]; completedNegotiationCards: NegotiationCard[] }>(),
);
//====================================================================================================
export const ReqGetAvailableMatchIds = createAction(
    '[Negotiation Page] ReqGetAvailableMatchIds',
    props<{ lotMatchId: number; clientUid?: string }>(),
);
export const GetAvailableMatchIdsSuccess = createAction(
    '[ReqGetAvailableMatchIds] GetAvailableMatchIdsSuccess',
    props<{ lotMatchIds: number[] }>(),
);
export const GetAvailableMatchIdsFail = createAction('[ReqGetAvailableMatchIds] GetAvailableMatchIdsFail');
// #endregion
// #region ReqLatestLotMatchIteration
export const ReqLatestLotMatchIteration = createAction(
    '[Clearing Email Page] ReqLotMatchIteration',
    props<{ lotMatchId: number }>(),
);
export const LatestLotMatchIterationFail = createAction('[ReqLatestLotMatchIteration] LatestLotMatchIterationFail');
export const LatestLotMatchIterationSuccess = createAction(
    '[ReqLatestLotMatchIteration] LatestLotMatchIterationSuccess',
    props<{
        latestMatch: LotMatchIteration;
    }>(),
);
//#endregion

//#region Update
// #region ReqCompleteNegotiation
export const ReqCompleteNegotiation = createAction(
    '[Negotiation Dashboard] ReqCompleteNegotiation',
    props<{ lotMatch: LotMatch; clientHasBroker: boolean; counterPartyHasBroker: boolean }>(),
);
export const CompleteNegotiationFail = createAction('[ReqCompleteNegotiation] CompleteNegotiationFail');
export const CompleteNegotiationSuccess = createAction('[ReqCompleteNegotiation] NegotiationsCardsSuccess');
// #endregion
// #region ReqClearNegotiation
export const ReqClearNegotiation = createAction(
    '[Clearing Email Modal] ReqClearNegotiation',
    props<{ lotMatch: LotMatch; requestedBy: string }>(),
);
export const ClearNegotiationFail = createAction('[ReqClearNegotiation] ClearNegotiationFail');
export const ClearNegotiationSuccess = createAction('[ReqClearNegotiation] ClearNegotiationSuccess');
// #endregion
// #region ReqDeclineNegotiation
export const ReqDeclineNegotiation = createAction(
    '[Negotiation Dashboard] ReqDeclineNegotiation',
    props<{ lotMatch: LotMatch; activeNegotiationIds: number[] }>(),
);
export const DeclineNegotiationFail = createAction('[ReqDeclineNegotiation] DeclineNegotiationFail');
export const DeclineNegotiationSuccess = createAction(
    '[ReqDeclineNegotiation] DeclineNegotiationSuccess',
    props<{ activeNegotiationIds: number[] }>(),
);
// #endregion
//#endregion

// #region Delete
// #endregion

// #region Never Fail Actions

// #endregion
