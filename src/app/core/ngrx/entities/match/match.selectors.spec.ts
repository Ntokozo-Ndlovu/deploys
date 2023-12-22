import { selectMatchState } from './match.selectors';
import * as fromMatch from './match.reducer';
describe('Match Selectors', () => {
    it('should select the feature state', () => {
        const result = selectMatchState({
            [fromMatch.matchFeatureKey]: {},
        });
        expect(result).toEqual({});
    });
});
