import { createAction, props } from '@ngrx/store';
import { DeliveryPoint, IdName } from 'src/app/core/models/queryModels';

//#region Create
export const ReqCreateDeliveryPoint = createAction(
    '[DeliveryPointSetup] ReqCreateDeliveryPoint',
    props<{ deliveryPoint: DeliveryPoint; clientUid: string; executedTime: number }>(),
);
export const CreateDeliveryPointFail = createAction(
    '[ReqCreateDeliveryPoint] CreateDeliveryPointFail',
    props<{ executedTime: number }>(),
);
export const CreateDeliveryPointSuccess = createAction(
    '[ReqCreateDeliveryPoint] CreateDeliveryPointSuccess',
    props<{ deliveryPoint: DeliveryPoint; executedTime: number }>(),
);
//#endregion

//#region Read
export const ReqPublicDeliveryPoints = createAction(
    '[DeliveryPointSetup] ReqPublicDeliveryPoints',
    props<{ executedTime: number }>(),
);
export const PublicDeliveryPointsSuccess = createAction(
    '[ReqPublicDeliveryPoints] PublicDeliveryPointsSuccess',
    props<{ deliveryPoints: DeliveryPoint[]; executedTime: number }>(),
);
export const PublicDeliveryPointsFail = createAction(
    '[ReqPublicDeliveryPoints] PublicDeliveryPointsFail',
    props<{ executedTime: number }>(),
);

export const ReqEntityDeliveryPoints = createAction(
    '[DeliveryPointSetup] ReqEntityDeliveryPoints',
    props<{ executedTime: number }>(),
);
export const EntityDeliveryPointsSuccess = createAction(
    '[ReqEntityDeliveryPoints] EntityDeliveryPointsSuccess',
    props<{ deliveryPoints: DeliveryPoint[]; executedTime: number }>(),
);
export const EntityDeliveryPointsFail = createAction(
    '[ReqEntityDeliveryPoints] EntityDeliveryPointsFail',
    props<{ executedTime: number }>(),
);

export const ReqManagementData = createAction(
    '[DeliveryPointManagement] ReqManagementData',
    props<{ executedTime: number }>(),
);
export const ManagementDataFail = createAction(
    '[ReqManagementData] ManagementDataFail',
    props<{ executedTime: number }>(),
);
export const ManagementDataSuccess = createAction(
    '[ReqManagementData] ManagementDataSuccess',
    props<{ deliveryPoints: DeliveryPoint[]; regions: string[]; locationTypes: IdName[]; executedTime: number }>(),
);
//#endregion
//#region Update
export const ReqUpdateDeliveryPoint = createAction(
    '[DeliveryPointSetup] ReqUpdateDeliveryPoint',
    props<{ deliveryPoint: DeliveryPoint; executedTime: number }>(),
);
export const UpdateDeliveryPointFail = createAction(
    '[ReqUpdateDeliveryPoint] UpdateDeliveryPointFail',
    props<{ executedTime: number }>(),
);
export const UpdateDeliveryPointSuccess = createAction(
    '[ReqUpdateDeliveryPoint] UpdateDeliveryPointSuccess',
    props<{ deliveryPoint: DeliveryPoint; executedTime: number }>(),
);
//#endregion
//#region Delete
export const ReqDeleteDeliveryPoint = createAction(
    '[DeliveryPointManagement] ReqDeleteDeliveryPoint',
    props<{ id: number; executedTime: number }>(),
);
export const DeleteDeliveryPointFail = createAction(
    '[ReqDeleteDeliveryPoint] DeleteDeliveryPointFail',
    props<{ executedTime: number }>(),
);
export const DeleteDeliveryPointSuccess = createAction(
    '[ReqDeleteDeliveryPoint] DeleteDeliveryPointSuccess',
    props<{ id: number; executedTime: number }>(),
);
//#endregion
