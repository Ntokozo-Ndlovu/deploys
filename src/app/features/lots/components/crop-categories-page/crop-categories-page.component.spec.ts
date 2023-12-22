import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CropCategoriesPageComponent } from './crop-categories-page.component';

describe('CropCategoriesPageComponent', () => {
  let component: CropCategoriesPageComponent;
  let fixture: ComponentFixture<CropCategoriesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CropCategoriesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CropCategoriesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
