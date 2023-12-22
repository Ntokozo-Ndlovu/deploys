import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LotMatchTableComponent } from './lot-match-table.component';

describe('LotMatchTableComponent', () => {
  let component: LotMatchTableComponent;
  let fixture: ComponentFixture<LotMatchTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LotMatchTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LotMatchTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
