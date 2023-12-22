import * as fromCrop from './crop.reducer';
import { selectCropState } from './crop.selectors';

describe('Crop Selectors', () => {
  it('should select the feature state', () => {
    const result = selectCropState({
      [fromCrop.cropFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
