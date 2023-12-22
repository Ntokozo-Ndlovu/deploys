import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionalRisksComponent } from './transactional-risks.component';

describe('TransactionalRisksComponent', () => {
  let component: TransactionalRisksComponent;
  let fixture: ComponentFixture<TransactionalRisksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionalRisksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionalRisksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
