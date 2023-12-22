import { Store } from '@ngrx/store';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { notificationActions } from 'src/app/core/helpers/index.actions';
import { catchError, switchMap, mergeMap } from 'rxjs/operators';
import * as fromRoot from 'src/app/core/ngrx/reducers/index';
import { NotificationsService } from 'src/app/core/services/notifications/notifications.service';
import { combineLatest, of } from 'rxjs';

@Injectable()
export class NotificationsEffects {
    // #region ReqCloudMessagingPermissionStatus
    ReqCloudMessagingPermissionStatus$ = createEffect(() =>
        this.actions$.pipe(
            ofType(notificationActions.ReqCloudMessagingPermissionStatus),
            mergeMap(() => {
                return this.store.select(fromRoot.authSelectors.getUser).pipe(
                    mergeMap((user) => {
                        return combineLatest([of(user), this.notificationService.getCloudMessagingPermissionStatus()]);
                    }),
                    mergeMap(([user, deviceToken]) => {
                        if (deviceToken) {
                            this.notificationService.addDeviceTokenToUserDocument(user, deviceToken);
                        }
                        return [
                            notificationActions.CloudMessagingPermissionStatusSuccess({
                                permissionStatus: Boolean(deviceToken),
                            }),
                        ];
                    }),
                    catchError((error) => {
                        console.log('ReqCloudMessagingPermissionStatus: ', error.message);
                        return [notificationActions.CloudMessagingPermissionStatusFail()];
                    }),
                );
            }),
        ),
    );
    // #endregion

    // #region ReqActivateNotificationListener
    ReqActivateNotificationListener$ = createEffect(() =>
        this.actions$.pipe(
            ofType(notificationActions.ReqActivateNotificationListener),
            mergeMap(() => {
                return this.notificationService.activateNotificationListener();
            }),
            mergeMap((fireBaseNotification) => {
                if (fireBaseNotification.notification) {
                    const { title, body } = fireBaseNotification.notification;
                    return [
                        notificationActions.ReqUpdateCurrentNotification({
                            notification: { title, body },
                        }),
                    ];
                }
            }),
            catchError((error) => {
                console.log('ReqActivateNotificationListener: ', error.message);
                return [notificationActions.ActivateNotificationListenerFail()];
            }),
        ),
    );
    // #endregion

    // #region ReqUserNotifications
    ReqUserNotifications$ = createEffect(() =>
        this.actions$.pipe(
            ofType(notificationActions.ReqUserNotifications),
            mergeMap(() => {
                return this.store.select(fromRoot.authSelectors.getUser).pipe(
                    mergeMap((user) => {
                        return this.notificationService.getUserNotifications(user.uid);
                    }),
                    switchMap((userNotifications) => {
                        return [notificationActions.UserNotificationsSuccess({ userNotifications })];
                    }),
                    catchError((error) => {
                        console.log('ReqUserNotifications: ', error.message);
                        return [notificationActions.UserNotificationsFail()];
                    }),
                );
            }),
        ),
    );
    // #endregion

    // #region ReqClientNotifications
    ReqClientNotifications$ = createEffect(() =>
        this.actions$.pipe(
            ofType(notificationActions.ReqClientNotifications),
            mergeMap((payload) => {
                return this.notificationService.getClientsNotifications([payload.clientUid]).pipe(
                    switchMap((clientNotifications) => {
                        return [notificationActions.ClientNotificationsSuccess({ clientNotifications })];
                    }),
                    catchError((error) => {
                        console.log('ReqClientNotifications: ', error.message);
                        return [notificationActions.ClientNotificationsFail()];
                    }),
                );
            }),
        ),
    );
    // #endregion

    // #region ReqToggleNotificationStatus
    ReqToggleNotificationStatus$ = createEffect(() =>
        this.actions$.pipe(
            ofType(notificationActions.ReqToggleNotificationStatus),
            mergeMap((payload) => {
                return this.notificationService.toggleNotificationStatus(
                    payload.notificationUids,
                    payload.toggleForAgent,
                );
            }),
            mergeMap(() => {
                return [notificationActions.ToggleNotificationStatusSuccess()];
            }),
            catchError((error) => {
                console.log('ReqToggleNotificationStatus: ', error.message);
                return [notificationActions.ToggleNotificationStatusFail()];
            }),
        ),
    );
    // #endregion

    constructor(
        private actions$: Actions,
        private notificationService: NotificationsService,
        private store: Store<fromRoot.State>,
    ) {}
}
