import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoutsEditFormComponent } from './scouts-edit-form.component';

describe('ScoutsEditFormComponent', () => {
  let component: ScoutsEditFormComponent;
  let fixture: ComponentFixture<ScoutsEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoutsEditFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoutsEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
