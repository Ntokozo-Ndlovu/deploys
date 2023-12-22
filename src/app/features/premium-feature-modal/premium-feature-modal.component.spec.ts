import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumFeatureModalComponent } from './premium-feature-modal.component';

describe('PremiumFeatureModalComponent', () => {
  let component: PremiumFeatureModalComponent;
  let fixture: ComponentFixture<PremiumFeatureModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PremiumFeatureModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PremiumFeatureModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
