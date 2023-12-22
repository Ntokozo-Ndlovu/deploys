import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { DeliveryPointsEffects } from './delivery-points.effects';

describe('DeliveryPointsEffects', () => {
  let actions$: Observable<any>;
  let effects: DeliveryPointsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DeliveryPointsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(DeliveryPointsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
