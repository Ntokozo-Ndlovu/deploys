import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuplicateScoutModalComponent } from './duplicate-scout-modal.component';

describe('DuplicateScoutModalComponent', () => {
  let component: DuplicateScoutModalComponent;
  let fixture: ComponentFixture<DuplicateScoutModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuplicateScoutModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DuplicateScoutModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
