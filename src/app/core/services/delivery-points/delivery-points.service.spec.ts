import { TestBed } from '@angular/core/testing';

import { DeliveryPointsService } from './delivery-points.service';

describe('DeliveryPointsService', () => {
  let service: DeliveryPointsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeliveryPointsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
