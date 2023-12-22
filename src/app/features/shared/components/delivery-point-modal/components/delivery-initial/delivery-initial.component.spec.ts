import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryInitialComponent } from './delivery-initial.component';

describe('DeliveryInitialComponent', () => {
  let component: DeliveryInitialComponent;
  let fixture: ComponentFixture<DeliveryInitialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryInitialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryInitialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
