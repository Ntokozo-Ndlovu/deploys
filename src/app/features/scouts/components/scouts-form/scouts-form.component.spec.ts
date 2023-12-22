import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoutsFormComponent } from './scouts-form.component';

describe('ScoutsFormComponent', () => {
  let component: ScoutsFormComponent;
  let fixture: ComponentFixture<ScoutsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoutsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoutsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
