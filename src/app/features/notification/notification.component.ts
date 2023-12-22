import { Component, EventEmitter, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter, takeUntil } from 'rxjs/operators';
import * as fromNotifications from 'src/app/core/ngrx/entities/notifications/index';
import * as fromAuth from 'src/app/core/ngrx/authState/index';
import { CurrentNotification } from 'src/app/core/models/viewModels';
import { Client, User } from 'src/app/core/models/queryModels';
import { Capacitor } from '@capacitor/core';
import { PushNotifications } from '@capacitor/push-notifications';
import { NotificationsService } from 'src/app/core/services/notifications/notifications.service';
import { brokersSelectors } from '../../core/ngrx/brokers';

@Component({
    selector: 'app-notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit {
    currentNotification: CurrentNotification = {} as CurrentNotification;

    isWeb: boolean = false;
    permissionStatusHasBeenDispatched: boolean = false;
    notificationListenerIsActive: boolean = false;
    showNotification: boolean = false;
    client: Client;

    destroyed$: EventEmitter<void> = new EventEmitter<void>();

    constructor(private store: Store<fromNotifications.State>, private notificationsService: NotificationsService) {}

    ngOnInit(): void {
        this.selectClientHelper();

        this.isWeb = Capacitor.getPlatform() === 'web';

        if (this.isWeb) {
            this.store
                .pipe(
                    select(fromNotifications.notificationSelectors.getPermissionStatus),
                    takeUntil(this.destroyed$),
                    filter((permissionStatus) => {
                        return permissionStatus !== null;
                    }),
                )
                .subscribe((permissionStatus) => {
                    if (permissionStatus) {
                        this.getCurrentNotificationHelper();
                        this.store.dispatch(fromNotifications.notificationActions.ReqActivateNotificationListener());
                    }
                });
        }
    }

    ngOnDestroy(): void {
        this.destroyed$.next();
    }

    getCurrentNotificationHelper(): void {
        if (!this.notificationListenerIsActive) {
            this.store
                .pipe(
                    select(fromNotifications.notificationSelectors.getCurrentNotification),
                    takeUntil(this.destroyed$),
                )
                .subscribe((notification) => {
                    if (notification && Object.keys(notification).length) {
                        this.currentNotification = notification;
                        this.showNotification = true;
                    }
                });
            this.notificationListenerIsActive = true;
        }
    }

    activateMobileNotificationsHelper(user: User): void {
        PushNotifications.requestPermissions().then((permissionStatus) => {
            permissionStatus.receive === 'granted' && PushNotifications.register();
        });
        PushNotifications.addListener('registration', (token) => {
            this.notificationsService.addDeviceTokenToUserDocument(user, token.value);
            this.getCurrentNotificationHelper();
        });
        PushNotifications.addListener('pushNotificationReceived', (notification) => {
            const { title, body } = notification;
            this.store.dispatch(
                fromNotifications.notificationActions.ReqUpdateCurrentNotification({
                    notification: { title, body },
                }),
            );
        });
    }

    fetchUserNotificationsHelper(): void {
        this.store.pipe(select(fromAuth.authSelectors.getUser), takeUntil(this.destroyed$)).subscribe((user: User) => {
            const userOfInterest: User | Client = this.client ? this.client : user;

            if (userOfInterest) {
                if (!this.permissionStatusHasBeenDispatched) {
                    this.isWeb
                        ? this.store.dispatch(fromNotifications.notificationActions.ReqCloudMessagingPermissionStatus())
                        : this.activateMobileNotificationsHelper(userOfInterest);
                    this.permissionStatusHasBeenDispatched = true;
                }

                this.client
                    ? userOfInterest.deviceTokens &&
                      this.store.dispatch(
                          fromNotifications.notificationActions.ReqClientNotifications({
                              clientUid: userOfInterest.uid,
                          }),
                      )
                    : userOfInterest.deviceTokens &&
                      this.store.dispatch(fromNotifications.notificationActions.ReqUserNotifications());
            }
        });
    }

    selectClientHelper(): void {
        this.store
            .select(brokersSelectors.getCurrentClient)
            .pipe(takeUntil(this.destroyed$))
            .subscribe((client: Client) => {
                this.client = client;
                this.fetchUserNotificationsHelper();
            });
    }

    handleCloseNotification(): void {
        this.showNotification = false;
    }
}
