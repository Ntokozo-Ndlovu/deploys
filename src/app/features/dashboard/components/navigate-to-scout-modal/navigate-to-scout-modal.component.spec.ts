import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigateToScoutModalComponent } from './navigate-to-scout-modal.component';

describe('NavigateToScoutModalComponent', () => {
  let component: NavigateToScoutModalComponent;
  let fixture: ComponentFixture<NavigateToScoutModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigateToScoutModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigateToScoutModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
