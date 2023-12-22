import { DeliveryPoint } from 'src/app/core/models/queryModels';
import { Dictionary } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromDeliveryPoints from './delivery-points.reducer';

export const getDeliveryPointState = createFeatureSelector<fromDeliveryPoints.State>(
    fromDeliveryPoints.deliveryPointsFeatureKey,
);

export const {
    selectIds: getDeliveryPointIds,
    selectEntities: getDeliveryPointEntities,
    selectAll: getAllDeliveryPoints,
    selectTotal: getTotalDeliveryPoints,
} = fromDeliveryPoints.adapter.getSelectors(getDeliveryPointState);

// For the delivery Point management page
export const getManageDeliveryPointDetails = createSelector(getDeliveryPointState, (deliveryPointState) => {
    const allDeliveryPoints = Object.values(deliveryPointState.entities);

    const userDeliveryPoints = allDeliveryPoints.filter((deliveryPoint) => !deliveryPoint.isPublic);
    const publicDeliveryPoints = allDeliveryPoints.filter((deliveryPoint) => deliveryPoint.isPublic);
    const locationTypes = deliveryPointState.locationTypes;
    const regions = deliveryPointState.regions;

    return {
        userDeliveryPoints,
        publicDeliveryPoints,
        locationTypes,
        regions,
    };
});

export const getSetupDeliveryPointDetails = createSelector(getDeliveryPointState, (deliveryPointState) => {
    const deliveryPoints = Object.values(deliveryPointState.entities);
    const locationTypes = deliveryPointState.locationTypes;
    const regions = deliveryPointState.regions;

    return {
        deliveryPoints,
        locationTypes,
        regions,
    };
});
export const getDeliveryPointById = createSelector(
    getDeliveryPointEntities,
    (deliveryPointMap: Dictionary<DeliveryPoint>, props: { id: number }) => {
        const deliveryPoint = deliveryPointMap[props.id] || null;
        return deliveryPoint;
    },
);
