import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { take, takeUntil } from 'rxjs/operators';
import { PROFILE_ROUTE } from '../../../../core/helpers/constants';
import * as fromNotifications from 'src/app/core/ngrx/entities/notifications/index';
import { Notification, NotificationCounts } from 'src/app/core/models/viewModels';
import { Dictionary } from '@ngrx/entity';
import { authActions } from '../../../../core/ngrx/authState';
import { brokersSelectors } from '../../../../core/ngrx/brokers';
import { Client, User } from '../../../../core/models/queryModels';
import * as actions from '../../../../core/helpers/index.actions';
import { authSelectors } from '../../../../core/ngrx/reducers';
import { Actions, ofType } from '@ngrx/effects';

@Component({
    selector: 'app-broker-main-nav',
    templateUrl: './broker-main-nav.html',
    styleUrls: ['./broker-main-nav.scss'],
})
export class BrokerMainNavComponent implements OnInit {
    notificationCounts: NotificationCounts = {
        total: null,
        profile: null,
        negotiations: null,
        completedNegotiations: null,
        brokerRequest: null,
    };
    notifications: Dictionary<Notification[]> = {};

    showNotificationDropDown: boolean = false;
    animateNotificationDropDownOut: boolean = false;

    user: User;

    @Output() $handleNotificationNavigate: EventEmitter<number> = new EventEmitter();

    private destroyed$ = new EventEmitter();

    constructor(private router: Router, private store: Store, private actions$: Actions) {}

    ngOnInit(): void {
        this.getUserHelper();
        this.store
            .pipe(select(fromNotifications.notificationSelectors.getNotificationCounts), takeUntil(this.destroyed$))
            .subscribe((notificationCounts: NotificationCounts) => {
                this.notificationCounts = notificationCounts;
            });

        this.store
            .pipe(
                select(fromNotifications.notificationSelectors.getNotificationsForDropDown),
                takeUntil(this.destroyed$),
            )
            .subscribe((notifications: Dictionary<Notification[]>) => {
                this.notifications = notifications;
            });

        this.store.dispatch(fromNotifications.notificationActions.ReqUserNotifications());
    }

    handleRouteToProfile(): void {
        this.actions$
            .pipe(
                ofType(authActions.GetUserFromAuthorizationSuccess, authActions.GetUserFromAuthorizationFail),
                take(1),
            )
            .subscribe((action) => {
                if (action.type === authActions.GetUserFromAuthorizationSuccess.type) {
                    this.router.navigate([PROFILE_ROUTE], { queryParams: { tabIndex: 2 } });
                }
            });
        this.store.dispatch(authActions.ReqGetUserFromAuthorization({ uid: this.user.uid }));
    }

    handleShowNotificationDropDown() {
        this.showNotificationDropDown = true;
    }

    handleRemoveNotificationDropDown() {
        this.animateNotificationDropDownOut = true;
        setTimeout(() => {
            this.showNotificationDropDown = false;
            this.animateNotificationDropDownOut = false;
        }, 300);
    }

    handleNotificationNavigate(tabIndex: number) {
        this.handleRemoveNotificationDropDown();
        this.$handleNotificationNavigate.emit(tabIndex);
    }

    getUserHelper(): void {
        this.store
            .select(authSelectors.getUser)
            .pipe(takeUntil(this.destroyed$))
            .subscribe((user: User) => {
                this.user = user;
            });
    }
}
