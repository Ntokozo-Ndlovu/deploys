import * as fromMarket from './scout.reducer';
import { selectScoutState } from './scout.selectors';

describe('Market Selectors', () => {
    it('should select the feature state', () => {
        const result = selectScoutState({
            [fromMarket.scoutFeatureKey]: {},
        });

        expect(result).toEqual({});
    });
});
