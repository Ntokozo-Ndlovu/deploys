import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NegotiationUpdateModalComponent } from './negotiation-update-modal.component';

describe('NegotiationUpdateModalComponent', () => {
  let component: NegotiationUpdateModalComponent;
  let fixture: ComponentFixture<NegotiationUpdateModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NegotiationUpdateModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NegotiationUpdateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
