import { Crop } from './../../../models/queryModels';
import { ScoutCard } from './../../../models/viewModels';
import { LotCard } from 'src/app/core/models/viewModels';
import { IdName, Lot, DeliveryPoint } from 'src/app/core/models/queryModels';
import { createAction, props } from '@ngrx/store';

//#region Create
export const ReqCreateLot = createAction('[Lot Search Page] ReqCreateLot', props<{ lot: Lot; clientUid?: string }>());
export const CreateLotFail = createAction('[ReqCreateLot] CreateLotFail');
export const CreateLotSuccess = createAction('[ReqCreateLot] CreateLotSuccess', props<{ lot: LotCard }>());
//#endregion

//#region Read
export const ReqLotFormData = createAction('[Create/Edit Lot] ReqLotFormData', props<{ lotId?: number }>());
export const LotFormDataFail = createAction('[ReqLotFormData] LotFormDataFail');
export const LotFormDataSuccess = createAction(
    '[ReqLotFormData] LotFormDataSuccess',
    props<{
        lot: Lot;
        deliveryPoints: DeliveryPoint[];
        crops: Crop[];
        incoTerms: IdName[];
        paymentOptions: IdName[];
        unitsOfMeasure: IdName[];
    }>(),
);
//#endregion
export const ReqUserLots = createAction('[Lot Dashboard] ReqUserLots');
export const UserLotsFail = createAction('[ReqUserLots] UserLotsFail');
export const UserLotsSuccess = createAction('[ReqUserLots] UserLotsSuccess', props<{ lotCards: LotCard[] }>());

//#region Update
export const ReqUpdateLot = createAction('[Edit Lot Page] ReqUpdateLot', props<{ lot: Lot; clientUid?: string }>());
export const UpdateLotFail = createAction('[ReqUpdateLot] UpdateLotFail');
export const UpdateLotSuccess = createAction('[ReqUpdateLot] UpdateLotSuccess', props<{ lot: LotCard }>());
//#endregion

// #region Privatise
export const ReqPrivatiseLots = createAction('[Lot Component] ReqPrivatiseLots', props<{ lotIds: number[] }>());
export const PrivatiseLotsFail = createAction('[ReqPrivatiseLots] PrivatiseLotsFail');
export const PrivatiseLotsSuccess = createAction('[ReqPrivatiseLots] PrivatiseLotsSuccess');
//#endregion

// #region Delete
export const ReqDeleteLot = createAction(
    '[Edit Lot Page] ReqDeleteLot',
    props<{ lotId: number; clientUid?: string }>(),
);
export const DeleteLotFail = createAction('[ReqDeleteLot] DeleteLotFail');
export const DeleteLotSuccess = createAction('[ReqDeleteLot] DeleteLotSuccess', props<{ lotId: number }>());
// #endregion

// #region Never Fail Actions
export const ReqSaveLotFormData = createAction('[Create Lot Page] [NF] ReqSaveLotFormData', props<{ lot: Lot }>());
export const LinkCurrentScoutToLot = createAction(
    '[Scout Dashboard] [NF] LinkCurrentScoutToLot',
    props<{ scout: ScoutCard }>(),
);
// #endregion

// #region Clear All Lots
export const ClearAllLots = createAction('[ Broker Dashboard ] [NF] ClearAllLots');
// #endregion
