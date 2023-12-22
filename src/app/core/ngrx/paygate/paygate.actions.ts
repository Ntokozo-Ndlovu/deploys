import { createAction, props } from '@ngrx/store';
import { Transaction } from '../../models/queryModels';

// #region ReqPaySubs
export const ReqPaySubs = createAction('[Subscription modal] ReqPaySubs', props<{ transaction: Transaction }>());
export const ReqPaySubsFail = createAction('[ReqPaySubs] ReqPaySubsFail');
export const ReqPaySubsSuccess = createAction('[ReqPaySubs] ReqPaySubsSuccess');
//#endregion
