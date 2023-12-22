import * as fromDeliveryPoints from './delivery-points.reducer';
import { selectDeliveryPointsState } from './delivery-points.selectors';

describe('DeliveryPoints Selectors', () => {
  it('should select the feature state', () => {
    const result = selectDeliveryPointsState({
      [fromDeliveryPoints.deliveryPointsFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
