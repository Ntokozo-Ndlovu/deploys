import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryInfoModalComponent } from './category-info-modal.component';

describe('CategoryInfoModalComponent', () => {
  let component: CategoryInfoModalComponent;
  let fixture: ComponentFixture<CategoryInfoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryInfoModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryInfoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
