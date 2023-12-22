import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NegotiationsComponent } from './negotiations.component';

describe('NegotiationsComponent', () => {
  let component: NegotiationsComponent;
  let fixture: ComponentFixture<NegotiationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NegotiationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NegotiationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
