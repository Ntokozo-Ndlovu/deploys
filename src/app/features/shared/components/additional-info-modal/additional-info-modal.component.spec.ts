import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalInfoModalComponent } from './additional-info-modal.component';

describe('AdditionalInfoModalComponent', () => {
  let component: AdditionalInfoModalComponent;
  let fixture: ComponentFixture<AdditionalInfoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionalInfoModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalInfoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
