import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedTutorialComponent } from './detailed-tutorial.component';

describe('DetailedTutorialComponent', () => {
  let component: DetailedTutorialComponent;
  let fixture: ComponentFixture<DetailedTutorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailedTutorialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
