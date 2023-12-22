import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LotMatchPageComponent } from './lot-match-page.component';

describe('LotMatchPageComponent', () => {
  let component: LotMatchPageComponent;
  let fixture: ComponentFixture<LotMatchPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LotMatchPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LotMatchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
