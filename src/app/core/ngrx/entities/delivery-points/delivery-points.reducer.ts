import { ReqLogoutAction } from './../../authState/auth.actions';
import { LotFormDataSuccess } from './../lot/lot.actions';
import { createEntityAdapter, Dictionary, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { DeliveryPoint, IdName } from 'src/app/core/models/queryModels';
import { addLoading, removeLoading } from '../../helperFunctions';
import * as DeliveryPointsActions from './delivery-points.actions';
import { LotMatchFormDataSuccess } from '../match/match.actions';

export const deliveryPointsFeatureKey = 'deliveryPoints';

export interface State extends EntityState<DeliveryPoint> {
    dictLoading: Dictionary<string>;
    locationTypes: IdName[];
    regions: string[];
}

export const adapter: EntityAdapter<DeliveryPoint> = createEntityAdapter({
    selectId: selectDeliveryPointId,
});

export function selectDeliveryPointId(deliveryPoint: DeliveryPoint): number {
    return deliveryPoint.id;
}

export const initialState: State = adapter.getInitialState<State>({
    ids: [],
    entities: {},
    locationTypes: [],
    regions: ['Default'],
    dictLoading: {},
});

export const reducer = createReducer(
    initialState,

    on(
        DeliveryPointsActions.ReqManagementData,
        DeliveryPointsActions.ReqDeleteDeliveryPoint,
        DeliveryPointsActions.ReqUpdateDeliveryPoint,
        DeliveryPointsActions.ReqCreateDeliveryPoint,
        DeliveryPointsActions.ReqPublicDeliveryPoints,
        DeliveryPointsActions.ReqEntityDeliveryPoints,
        (state, payload) => {
            return addLoading(state, payload);
        },
    ),
    on(
        DeliveryPointsActions.ManagementDataFail,
        DeliveryPointsActions.DeleteDeliveryPointFail,
        DeliveryPointsActions.UpdateDeliveryPointFail,
        DeliveryPointsActions.CreateDeliveryPointFail,
        DeliveryPointsActions.PublicDeliveryPointsFail,
        DeliveryPointsActions.EntityDeliveryPointsFail,
        (state, payload) => {
            return removeLoading(state, payload);
        },
    ),
    on(
        DeliveryPointsActions.PublicDeliveryPointsSuccess,
        DeliveryPointsActions.EntityDeliveryPointsSuccess,
        (state, payload) => {
            let newState = adapter.removeAll(state);
            newState = adapter.upsertMany(payload.deliveryPoints, newState);
            return removeLoading(newState, payload);
        },
    ),
    on(
        DeliveryPointsActions.CreateDeliveryPointSuccess,
        DeliveryPointsActions.UpdateDeliveryPointSuccess,
        (state, payload) => {
            const newState = adapter.upsertOne(payload.deliveryPoint, state);
            return removeLoading(newState, payload);
        },
    ),
    on(DeliveryPointsActions.DeleteDeliveryPointSuccess, (state, payload) => {
        const newState = adapter.removeOne(payload.id, state);
        return removeLoading(newState, payload);
    }),
    on(DeliveryPointsActions.ManagementDataSuccess, (state, payload) => {
        const newState = {
            ...adapter.upsertMany(payload.deliveryPoints, state),
            locationTypes: payload.locationTypes,
            regions: payload.regions,
        };
        return removeLoading(newState, payload);
    }),
    on(LotFormDataSuccess, LotMatchFormDataSuccess, (state, payload) => {
        const newState = adapter.upsertMany(payload.deliveryPoints, state);
        return newState;
    }),
    on(ReqLogoutAction, () => {
        return initialState;
    }),
);
