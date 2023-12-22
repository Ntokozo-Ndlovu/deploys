import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpiredLotPeriodModalComponent } from './expired-lot-period-modal.component';

describe('ExpiredLotPeriodModalComponent', () => {
  let component: ExpiredLotPeriodModalComponent;
  let fixture: ComponentFixture<ExpiredLotPeriodModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpiredLotPeriodModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpiredLotPeriodModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
