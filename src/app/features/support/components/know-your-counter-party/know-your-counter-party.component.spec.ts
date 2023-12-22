import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowYourCounterPartyComponent } from './know-your-counter-party.component';

describe('KnowYourCounterPartyComponent', () => {
  let component: KnowYourCounterPartyComponent;
  let fixture: ComponentFixture<KnowYourCounterPartyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnowYourCounterPartyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowYourCounterPartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
