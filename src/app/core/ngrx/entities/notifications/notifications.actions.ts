import { createAction, props } from '@ngrx/store';
import { CurrentNotification, Notification } from 'src/app/core/models/viewModels';

//#region ReqCloudMessagingPermissionStatus
export const ReqCloudMessagingPermissionStatus = createAction('[Lots Page] ReqCloudMessagingPermissionStatus');
export const CloudMessagingPermissionStatusFail = createAction(
    '[ReqCloudMessagingPermissionStatus] CloudMessagingPermissionFail',
);
export const CloudMessagingPermissionStatusSuccess = createAction(
    '[ReqCloudMessagingPermissionStatus] CloudMessagingPermissionStatusSuccess',
    props<{ permissionStatus: boolean }>(),
);
//#endregion

//#region ReqActivateNotificationListener
export const ReqActivateNotificationListener = createAction('[Notification] ReqActivateNotificationListener');
export const ActivateNotificationListenerFail = createAction(
    '[ReqActivateNotificationListener] ActivateNotificationListenerFail',
);
export const ActivateNotificationListenerSuccess = createAction(
    '[ReqActivateNotificationListener] ActivateNotificationListenerSuccess',
);
//#endregion

// #region ReqUserNotifications
export const ReqUserNotifications = createAction('[Notification] ReqUserNotifications');
export const UserNotificationsFail = createAction('[ReqUserNotifications] UserNotificationsFail');
export const UserNotificationsSuccess = createAction(
    '[ReqUserNotifications] UserNotificationsSuccess',
    props<{ userNotifications: Notification[] }>(),
);
// #endregion

// #region ReqClientNotifications
export const ReqClientNotifications = createAction(
    '[Notification] ReqClientNotifications',
    props<{ clientUid: string }>(),
);
export const ClientNotificationsFail = createAction('[ReqClientNotifications] ClientNotificationsFail');
export const ClientNotificationsSuccess = createAction(
    '[ReqClientNotifications] ClientNotificationsSuccess',
    props<{ clientNotifications: Notification[] }>(),
);
// #endregion

// #region ReqToggleNotificationStatus
export const ReqToggleNotificationStatus = createAction(
    '[Negotiation Page] ReqToggleNotificationStatus',
    props<{ notificationUids: string[]; toggleForAgent?: boolean }>(),
);
export const ToggleNotificationStatusFail = createAction('[ReqToggleNotificationStatus] ToggleNotificationStatusFail');
export const ToggleNotificationStatusSuccess = createAction(
    '[ReqToggleNotificationStatus] ToggleNotificationStatusSuccess',
);
// #endregion

// #region Never Fail Actions
export const ReqUpdateCloudMessagingPermissionStatus = createAction(
    '[Notification | Lots Page] [NF] ReqUpdateCloudMessagingPermissionStatus',
    props<{ permissionStatus: boolean }>(),
);
export const ReqUpdateCurrentNotification = createAction(
    '[Notification] [NF] [SCU] ReqUpdateCurrentNotification',
    props<{ notification: CurrentNotification }>(),
);
// #endregion

// #region Clear Notifications
export const ClearNotifications = createAction('[ Agent dashboard ] ClearNotifications');
// #endregion
