import { environment } from 'src/environments/environment';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCrop from './crop.reducer';

export const selectCropState = createFeatureSelector<fromCrop.State>(fromCrop.cropFeatureKey);
export const selectCropByCategoryId = createSelector(selectCropState, (cropState, categoryId: number) => {
    return cropState.crops.filter((crop) => crop.cropCategoryId == categoryId);
});
export const selectCropByCategories = createSelector(selectCropState, (cropState) => {
    return cropState.cropCategories;
});
