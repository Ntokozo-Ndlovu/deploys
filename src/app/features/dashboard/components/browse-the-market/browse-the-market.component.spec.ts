import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseTheMarketComponent } from './browse-the-market.component';

describe('BrowseTheMarketComponent', () => {
  let component: BrowseTheMarketComponent;
  let fixture: ComponentFixture<BrowseTheMarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowseTheMarketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseTheMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
