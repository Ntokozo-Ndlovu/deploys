import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterTheMarketModalComponent } from './filter-the-market-modal.component';

describe('FilterTheMarketModalComponent', () => {
  let component: FilterTheMarketModalComponent;
  let fixture: ComponentFixture<FilterTheMarketModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterTheMarketModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterTheMarketModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
