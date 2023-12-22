import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepInfoModalComponent } from './step-info-modal.component';

describe('StepInfoModalComponent', () => {
  let component: StepInfoModalComponent;
  let fixture: ComponentFixture<StepInfoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepInfoModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepInfoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
