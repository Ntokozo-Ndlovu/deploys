import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentCheckModalComponent } from './payment-check-modal.component';

describe('PaymentCheckModalComponent', () => {
  let component: PaymentCheckModalComponent;
  let fixture: ComponentFixture<PaymentCheckModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentCheckModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentCheckModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
