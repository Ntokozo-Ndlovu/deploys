import { ScoutAndFineTune, Crop } from './../../../models/queryModels';
import { createAction, props } from '@ngrx/store';
import { Scout, FineTune, IdName } from 'src/app/core/models/queryModels';
import { ScoutSearchResult, ScoutCard } from 'src/app/core/models/viewModels';

//#region Create
export const ReqCreateScout = createAction('[Scout Search Page] ReqCreateScout', props<{ isPublic: boolean }>());
export const CreateScoutFail = createAction('[ReqCreateScout] CreateScoutFail');
export const CreateScoutSuccess = createAction('[ReqCreateScout] CreateScoutSuccess', props<{ scout: ScoutCard }>());
//#endregion

//#region Read
export const ReqScoutSearch = createAction('[Market Search Page] ReqScoutSearch', props<{ scout: Scout }>());
export const ScoutSearchFail = createAction('[ReqScoutSearch] ScoutSearchFail');
export const ScoutSearchSuccess = createAction(
    '[ReqScoutSearch] ScoutSearchSuccess',
    props<{ scoutSearch: ScoutSearchResult }>(),
);

export const ReqFineTunedScoutSearch = createAction(
    '[Fine-Tune Page] ReqFineTunedScoutSearch',
    props<{ searchInfo: FineTune }>(),
);
export const FineTunedScoutSearchFail = createAction('[ReqFineTunedScoutSearch] FineTunedScoutSearchFail');
export const FineTunedScoutSearchSuccess = createAction(
    '[ReqFineTunedScoutSearch] FineTunedScoutSearchSuccess',
    props<{ scoutSearch: ScoutSearchResult }>(),
);

export const ReqScoutFormData = createAction('[Create/Edit Market] ReqScoutFormData', props<{ scoutId?: number }>());
export const ScoutFormDataFail = createAction('[ReqScoutFormData] ScoutFormDataFail');
export const ScoutFormDataSuccess = createAction(
    '[ReqScoutFormData] ScoutFormDataSuccess',
    props<{ scoutAndFineTune: ScoutAndFineTune; crops: Crop[]; unitsOfMeasure: IdName[] }>(),
);

export const ReqUserScoutCards = createAction('[Create/Edit Market] ReqUserScoutCards');
export const UserScoutCardsFail = createAction('[ReqUserScoutCards] UserScoutCardsFail');
export const UserScoutCardsSuccess = createAction(
    '[ReqUserScoutCards] UserScoutCardsSuccess',
    props<{ scoutCards: ScoutCard[] }>(),
);

//#endregion

//#region Update
export const ReqUpdateScout = createAction(
    '[Edit Market Page] ReqUpdateScout',
    props<{ scoutAndFineTune: ScoutAndFineTune }>(),
);
export const UpdateScoutFail = createAction('[ReqUpdateScout] UpdateScoutFail');
export const UpdateScoutSuccess = createAction('[ReqUpdateScout] UpdateScoutSuccess', props<{ scout: ScoutCard }>());
//#endregion

//#region Delete
export const ReqDeleteScout = createAction(
    '[Edit Market Page] ReqDeleteScout',
    props<{ scoutId: number; clientUid?: string }>(),
);
export const DeleteScoutFail = createAction('[ReqDeleteScout] DeleteScoutSuccess');
export const DeleteScoutSuccess = createAction('[ReqDeleteScout] DeleteScoutSuccess', props<{ scoutId: number }>());
//#endregion

// #region Never Fail
export const ReqUpdateSearchValues = createAction(
    '[Browse The Market Page] ReqUpdateSearchValues',
    props<{ scout: Scout }>(),
);
// #endregion

// #region Clear All Scouts

export const ClearAllScouts = createAction('[ Broker Dashboard ] [NF] ClearAllScouts');

// #endregion
