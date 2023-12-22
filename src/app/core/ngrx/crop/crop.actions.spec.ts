import * as fromCrop from './crop.actions';

describe('loadCrops', () => {
  it('should return an action', () => {
    expect(fromCrop.loadCrops().type).toBe('[Crop] Load Crops');
  });
});
