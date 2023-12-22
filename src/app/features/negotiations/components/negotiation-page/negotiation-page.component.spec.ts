import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NegotiationPageComponent } from './negotiation-page.component';

describe('NegotiationPageComponent', () => {
  let component: NegotiationPageComponent;
  let fixture: ComponentFixture<NegotiationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NegotiationPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NegotiationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
