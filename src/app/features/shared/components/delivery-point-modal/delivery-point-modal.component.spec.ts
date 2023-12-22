import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryPointModalComponent } from './delivery-point-modal.component';

describe('DeliveryPointModalComponent', () => {
  let component: DeliveryPointModalComponent;
  let fixture: ComponentFixture<DeliveryPointModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryPointModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryPointModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
