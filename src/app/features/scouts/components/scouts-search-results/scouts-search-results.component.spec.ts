import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoutsSearchResultsComponent } from './scouts-search-results.component';

describe('ScoutsSearchResultsComponent', () => {
  let component: ScoutsSearchResultsComponent;
  let fixture: ComponentFixture<ScoutsSearchResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoutsSearchResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoutsSearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
