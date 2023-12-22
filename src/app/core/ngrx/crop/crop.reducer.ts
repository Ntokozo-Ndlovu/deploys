import { Crop } from './../../models/queryModels';
import { ReqLogoutAction } from './../authState/auth.actions';
import { LotMatchFormDataSuccess } from './../entities/match/match.actions';
import { LotFormDataSuccess } from './../entities/lot/lot.actions';
import { IdName } from 'src/app/core/models/queryModels';
import { Action, createReducer, on } from '@ngrx/store';
import * as actions from './crop.actions';
import { ScoutFormDataSuccess } from '../entities/scout/scout.actions';
import { Dictionary } from '@ngrx/entity';

export const cropFeatureKey = 'crop';

export interface State {
    crops: Crop[];
    cropCategories: IdName[];
    exchanges: IdName[];
}

export const initialState: State = {
    crops: [],
    cropCategories: [],
    exchanges: [],
};

export const reducer = createReducer(
    initialState,
    on(
        LotFormDataSuccess,
        ScoutFormDataSuccess,
        actions.AllCropsSuccess,
        LotMatchFormDataSuccess,
        (state, { ...payload }) => {
            return { ...state, crops: payload.crops };
        },
    ),
    on(actions.ReqCropCategoriesSuccess, (state, { ...payload }) => {
        return { ...state, cropCategories: payload.cropCategories };
    }),
    on(ReqLogoutAction, () => {
        return initialState;
    }),
);
