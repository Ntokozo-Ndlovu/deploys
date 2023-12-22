import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Dictionary } from '@ngrx/entity';
import {
    BROKERS_ROUTE,
    NEGOTIATION_EDIT_ROUTE,
    NEGOTIATION_VIEW_ROUTE,
    PROFILE_ROUTE,
} from 'src/app/core/helpers/constants';
import { Notification } from 'src/app/core/models/viewModels';
import { Store } from '@ngrx/store';
import * as fromNotifications from 'src/app/core/ngrx/entities/notifications/index';

@Component({
    selector: 'app-notification-dropdown',
    templateUrl: './notification-dropdown.component.html',
    styleUrls: ['./notification-dropdown.component.scss'],
})
export class NotificationDropdownComponent implements OnInit {
    // #region Notifications

    @Input() isAgent: boolean = false;
    @Input() get notifications(): Dictionary<Notification[]> {
        return this._notifications;
    }
    set notifications(value: Dictionary<Notification[]>) {
        this._notifications = value;
        this.notificationTypes = Object.keys(this._notifications);
        this.doNotificationsExistHelper();
    }
    @Output() $handleNotificationNavigate: EventEmitter<number> = new EventEmitter();

    _notifications: Dictionary<Notification[]> = {};
    notificationTypes: string[] = [];

    // #endregion

    // #region Incomplete User Profile Items

    @Input() incompleteUserProfileItems: string[] = [];

    // #endegion

    notificationsExist: boolean = false;

    constructor(private router: Router, private store: Store<fromNotifications.State>) {}

    ngOnInit(): void {
        this.doNotificationsExistHelper();
    }

    handleNavigateToNotification(notification: Notification): void {
        const queryParams = { notificationUids: [notification.uid] };
        if (notification.senderUid) {
            if (!this.isAgent) {
                this.handleClearNotification(queryParams.notificationUids[0]);
                this.router.navigate([`${BROKERS_ROUTE}`], { queryParams });
            } else {
                this.$handleNotificationNavigate.emit(notification.newRequest ? 1 : 0);
                this.handleClearNotification(queryParams.notificationUids[0]);
            }
        } else {
            const { lotStatus, lotMatchId } = notification;
            if (lotStatus === 'declined') {
                return;
            }
            this.router.navigate(
                [`${lotStatus === 'complete' ? NEGOTIATION_VIEW_ROUTE : NEGOTIATION_EDIT_ROUTE}/${lotMatchId}`],
                { queryParams },
            );
        }
    }

    handleClearAllNotifications() {
        if (this.notificationsExist) {
            let notificationUids: string[] = [];
            for (let i = 0; i < this.notificationTypes.length; i++) {
                notificationUids.push(
                    ...this._notifications[this.notificationTypes[i]].map((notification) => notification.uid),
                );
            }

            this.store.dispatch(
                fromNotifications.notificationActions.ReqToggleNotificationStatus({ notificationUids }),
            );
        }
    }

    handleNavigateToProfile(): void {
        this.router.navigate([PROFILE_ROUTE], { queryParams: { tabIndex: 2 } });
    }

    handleClearNotification(notificationUid: string) {
        this.store.dispatch(
            fromNotifications.notificationActions.ReqToggleNotificationStatus({ notificationUids: [notificationUid] }),
        );
    }

    doNotificationsExistHelper(): boolean {
        return (this.notificationsExist =
            Object.values(this._notifications).some((notificationType) => notificationType.length) ||
            Boolean(this.incompleteUserProfileItems.length));
    }
}
