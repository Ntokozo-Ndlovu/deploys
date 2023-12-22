import { IdName, PriceType } from './../../models/queryModels';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromApp from './app-state.reducer';
import { environment } from 'src/environments/environment.prod';

export const selectAppState = createFeatureSelector<fromApp.State>(fromApp.appStateFeatureKey);

export const getCropPackaging = createSelector(selectAppState, (appState) => {
    return appState.cropPackaging || [];
});

export const getCropGrades = createSelector(selectAppState, (appSate) => {
    return appSate.cropGrades.length
        ? appSate.cropGrades
        : [
              {
                  id: 0,
                  name: 'Standard',
              },
          ];
});

export const getFormData = createSelector(selectAppState, (appState) => {
    const unitsOfMeasure: IdName[] = appState.unitsOfMeasure || [];
    const incoTerms: IdName[] = appState.incoTerms || [];
    const packaging: IdName[] = appState.packaging || [];
    const paymentTerms: IdName[] = appState.paymentTerms || [];
    const priceTypes: IdName[] = appState.priceTypes || [];
    const safexMonths: IdName[] = appState.months || [];

    return { unitsOfMeasure, incoTerms, packaging, paymentTerms, priceTypes, safexMonths };
});

export const getIncoTermsByCropId = createSelector(
    selectAppState,
    (appState: fromApp.State, props: { cropId: number }) => {
        const roughageBales: number[] = [...environment.ROUGHAGE_BALES_CROP_IDS];
        if (props.cropId) {
            return roughageBales.includes(props.cropId)
                ? appState.incoTerms.filter((incoTerm) =>
                      environment.ROUGHAGE_BALES_INCO_TERM_IDS.includes(incoTerm.id),
                  )
                : appState.incoTerms;
        } else {
            return appState.incoTerms || [];
        }
    },
);

export const getUnitsOfMeasureByCropId = createSelector(
    selectAppState,
    (appState: fromApp.State, props: { cropId: number }) => {
        const filterCropIds: number[] = [...environment.STRAW_CROP_IDS, ...environment.HAY_CROP_IDS];
        if (filterCropIds.includes(props.cropId)) {
            return appState.unitsOfMeasure.filter((unitOfMeasure) =>
                environment.STRAW_HAY_UNIT_OF_MEASURE_IDS.includes(unitOfMeasure.id),
            );
        } else {
            return (
                appState.unitsOfMeasure.filter((unitOfMeasure) => unitOfMeasure.id === environment.DEFAULT_UOM_ID) || []
            );
        }
    },
);

export const getUsers = createSelector(selectAppState, (appState) => {
    return appState.users;
});
