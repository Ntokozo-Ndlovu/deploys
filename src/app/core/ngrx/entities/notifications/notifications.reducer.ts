import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as notificationsActions from './notifications.actions';
import { CurrentNotification, Notification } from 'src/app/core/models/viewModels';
import { retry } from 'rxjs/operators';

export const notificationsFeatureKey = 'notifications';

export interface State extends EntityState<Notification> {
    permissionStatus: boolean | null;
    currentNotification: CurrentNotification | null;
}

export const adapter: EntityAdapter<Notification> = createEntityAdapter<Notification>({
    selectId: (model: Notification) => model.uid,
});

export const initialState: State = adapter.getInitialState({
    ids: [],
    entities: {},
    permissionStatus: null,
    currentNotification: null,
});

export const reducer = createReducer(
    initialState,
    on(notificationsActions.CloudMessagingPermissionStatusSuccess, (state, action) => {
        return { ...state, permissionStatus: action.permissionStatus };
    }),
    on(notificationsActions.ReqUpdateCloudMessagingPermissionStatus, (state, action) => {
        return { ...state, permissionStatus: action.permissionStatus };
    }),
    on(notificationsActions.ReqUpdateCurrentNotification, (state, action) => {
        return { ...state, currentNotification: action.notification };
    }),
    on(notificationsActions.UserNotificationsSuccess, (state, action) => {
        const newState = adapter.setAll(action.userNotifications, state);

        return newState;
    }),
    on(notificationsActions.ClientNotificationsSuccess, (state, action) => {
        const newState = adapter.setAll(action.clientNotifications, state);

        return newState;
    }),
    on(notificationsActions.ClearNotifications, () => {
        return initialState;
    }),
);
