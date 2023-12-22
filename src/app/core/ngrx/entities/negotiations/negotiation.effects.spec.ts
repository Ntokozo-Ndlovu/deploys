import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { NegotiationEffects } from './negotiation.effects';

describe('negotiationEffects', () => {
    let actions$: Observable<any>;
    let effects: NegotiationEffects;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [NegotiationEffects, provideMockActions(() => actions$)],
        });

        effects = TestBed.inject(NegotiationEffects);
    });

    it('should be created', () => {
        expect(effects).toBeTruthy();
    });
});
