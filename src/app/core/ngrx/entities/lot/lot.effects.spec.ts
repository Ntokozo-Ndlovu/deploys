import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { LotEffects } from './lot.effects';

describe('LotEffects', () => {
  let actions$: Observable<any>;
  let effects: LotEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LotEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(LotEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
