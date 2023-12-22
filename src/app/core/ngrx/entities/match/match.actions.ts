import { Crop } from './../../../models/queryModels';
import { DeliveryPoint, IdName } from 'src/app/core/models/queryModels';
import { LotMatch, LotMatchIteration } from './../../../models/viewModels';
import { createAction, props } from '@ngrx/store';

// #region CREATE
export const ReqCreateLotMatch = createAction('[Lot Match Page] ReqCreateLotMatch', props<{ lotMatch: LotMatch }>());
export const CreateLotMatchFail = createAction('[ReqCreateLotMatch] CreateLotMatchFail');
export const CreateLotMatchSuccess = createAction('[ReqCreateLotMatch] CreateLotMatchSuccess', props<{ id: number }>());

// #endregion

// #region READ
export const ReqLoadLotMatches = createAction(
    '[Lot Match Page] ReqLoadLotMatches',
    props<{ lotId: number; radius?: number }>(),
);
export const LoadLotMatchesFail = createAction('[ReqLoadLotMatches] LoadLotMatchesFail');
export const LoadLotMatchesSuccess = createAction(
    '[ReqLoadLotMatches] LoadLotMatchesSuccess',
    props<{ matches: LotMatch[] }>(),
);

export const ReqLotMatchFormData = createAction(
    '[Negotiation Page] ReqLotMatchFormData',
    props<{ lotMatchId: number; clientUid?: string }>(),
);
export const LotMatchFormDataFail = createAction('[ReqLotMatchFormData] LotMatchFormDataFail');
export const LotMatchFormDataSuccess = createAction(
    '[ReqLotMatchFormData] LotMatchFormDataSuccess',
    props<{
        lotMatchIterations: LotMatchIteration[];
        deliveryPoints: DeliveryPoint[];
        crops: Crop[];
        incoTerms: IdName[];
        paymentOptions: IdName[];
        unitsOfMeasure: IdName[];
    }>(),
);

export const ReqLotHasBrokerCheck = createAction(
    '[Lot Match Table] ReqLotHasBrokerCheck',
    props<{ lotIds: number[] }>(),
);
export const ReqLotHasBrokerCheckFail = createAction('[ReqLotHasBrokerCheck] ReqLotHasBrokerCheckFail');
export const ReqLotHasBrokerCheckSuccess = createAction(
    '[ReqLotHasBrokerCheck] ReqLotHasBrokerCheckSuccess',
    props<{ [key: string]: boolean }>(),
);

// #endregion

// #region UPDATE
export const ReqUpdateLotMatch = createAction('[Negotiation Page] ReqUpdateLotMatch', props<{ lotMatch: LotMatch }>());
export const UpdateLotMatchFail = createAction('[ReqUpdateLotMatch] UpdateLotMatchFail');
export const UpdateLotMatchSuccess = createAction(
    '[ReqUpdateLotMatch] UpdateLotMatchSuccess',
    props<{ lotMatchIteration: LotMatchIteration }>(),
);
// #endregion

// #region DELETE

// #endregion
