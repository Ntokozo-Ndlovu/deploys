import { TestBed } from '@angular/core/testing';

import { LotMatchService } from './lot-match.service';

describe('LotMatchService', () => {
  let service: LotMatchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LotMatchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
