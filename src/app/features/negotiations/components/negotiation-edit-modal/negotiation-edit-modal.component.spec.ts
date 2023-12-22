import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NegotiationEditModalComponent } from './negotiation-edit-modal.component';

describe('NegotiationEditModalComponent', () => {
  let component: NegotiationEditModalComponent;
  let fixture: ComponentFixture<NegotiationEditModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NegotiationEditModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NegotiationEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
