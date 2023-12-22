import * as fromNegotiation from './negotiation.reducer';
import { selectNegotiationState } from './negotiation.selectors';

describe('Negotiation Selectors', () => {
    it('should select the feature state', () => {
        const result = selectNegotiationState({
            [fromNegotiation.negotiationFeatureKey]: {},
        });

        expect(result).toEqual({});
    });
});
