import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketLotCardComponent } from './market-lot-card.component';

describe('MarketLotCardComponent', () => {
  let component: MarketLotCardComponent;
  let fixture: ComponentFixture<MarketLotCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketLotCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketLotCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
