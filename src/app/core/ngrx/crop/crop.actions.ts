import { Crop } from './../../models/queryModels';
import { createAction, props } from '@ngrx/store';
import { IdName } from '../../models/queryModels';

//#region Read

// #region ReqAllCrops
export const ReqAllCrops = createAction('[Market Page] ReqAllCrops');
export const AllCropsFail = createAction('[ReqAllCrops] AllCropsFail');
export const AllCropsSuccess = createAction('[ReqAllCrops] AllCropsSuccess', props<{ crops: Crop[] }>());
// #endregion

// #region ReqCropCategories
export const ReqCropCategories = createAction('[Form Page] ReqCropCategories');
export const ReqCropCategoriesFail = createAction('[ReqCropCategories] ReqCropCategoriesFail');
export const ReqCropCategoriesSuccess = createAction(
    '[ReqCropCategories] ReqCropCategoriesSuccess',
    props<{ cropCategories: IdName[] }>(),
);
// #endregion

// #region ReqCropGrades
export const ReqCropGrades = createAction('[Create Lot Page] ReqCropGrades', props<{ cropId: number }>());
export const CropGradesFail = createAction('[ReqCropGrades] CropGradesFail');
export const CropGradesSuccess = createAction('[ReqCropGrades] CropGradesSuccess', props<{ grades: IdName[] }>());
// #endregion

// #region ReqCropMonths
export const ReqCropMonths = createAction(
    '[Create Lot Page] ReqCropMonths',
    props<{ cropId: number; exchangeId: number }>(),
);
export const CropMonthsFail = createAction('[ReqCropMonths] CropMonthsFail');
export const CropMonthsSuccess = createAction('[ReqCropMonths] CropMonthsSuccess', props<{ safexMonths: IdName[] }>());
// #endregion

// #region ReqCropMonthsAndGrades
export const ReqCropMonthsAndGrades = createAction(
    '[Create Lot Page] ReqCropMonthsAndGrades',
    props<{ cropId: number; exchangeId: number }>(),
);
export const CropMonthsAndGradesFail = createAction('[ReqCropMonthsAndGrades] CropMonthsAndGradesFail');
export const CropMonthsAndGradesSuccess = createAction(
    '[ReqCropMonthsAndGrades] CropMonthsAndGradesSuccess',
    props<{ safexMonths: IdName[]; grades: IdName[] }>(),
);
// #endregion

// #region ReqCropPackaging
export const ReqCropPackaging = createAction('[Create Lot Page] ReqCropPackaging', props<{ cropId: number }>());
export const CropPackagingFail = createAction('[ReqCropPackaging] CropPackagingFail');
export const CropPackagingSuccess = createAction(
    '[ReqCropPackaging] CropPackagingSuccess',
    props<{ cropPackaging: IdName[] }>(),
);
// #endregion

// #endregion
