import { Crop } from './../models/queryModels';
import { LotMatchIteration } from './../models/viewModels';
import { IdName, Lot, DeliveryPoint } from 'src/app/core/models/queryModels';
export type GetLotFormDataResponse = [Lot, DeliveryPoint[], DeliveryPoint[], Crop[], IdName[], IdName[], IdName[]];
export type GetLotMatchFormDataResponse = [
    LotMatchIteration[],
    DeliveryPoint[],
    DeliveryPoint[],
    Crop[],
    IdName[],
    IdName[],
    IdName[],
];
