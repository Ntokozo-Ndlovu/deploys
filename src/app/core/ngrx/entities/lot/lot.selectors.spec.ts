import * as fromLot from './lot.reducer';
import { selectLotState } from './lot.selectors';

describe('Lot Selectors', () => {
  it('should select the feature state', () => {
    const result = selectLotState({
      [fromLot.lotFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
