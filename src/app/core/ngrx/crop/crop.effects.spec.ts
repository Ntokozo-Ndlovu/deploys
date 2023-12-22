import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CropEffects } from './crop.effects';

describe('CropEffects', () => {
  let actions$: Observable<any>;
  let effects: CropEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CropEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(CropEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
