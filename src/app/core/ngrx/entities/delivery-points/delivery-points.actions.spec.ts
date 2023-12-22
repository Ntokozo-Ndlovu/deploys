import * as fromDeliveryPoints from './delivery-points.actions';

describe('loadDeliveryPointss', () => {
    it('should return an action', () => {
        expect(fromDeliveryPoints.loadDeliveryPoints().type).toBe('[DeliveryPoints] Load DeliveryPointss');
    });
});
