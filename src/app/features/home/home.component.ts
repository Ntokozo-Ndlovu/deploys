import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { BROKER_DASHBOARD_ROUTE, HOME_CARDS_DATA, PROFILE_ROUTE, STEP_INFO_DATA } from 'src/app/core/helpers/constants';
import { HomeCard, Notification, NotificationCounts } from 'src/app/core/models/viewModels';
import { takeUntil } from 'rxjs/operators';
import { Dictionary } from '@ngrx/entity';
import { StepInfoModalComponent } from '../shared/components/step-info-modal/step-info-modal.component';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { User } from 'src/app/core/models/queryModels';
import { PremiumFeatureModalComponent } from '../premium-feature-modal/premium-feature-modal.component';
import { Purchases } from '@awesome-cordova-plugins/purchases/ngx';

import * as fromAuth from 'src/app/core/ngrx/authState/index';
import * as fromBrokers from 'src/app/core/ngrx/brokers/index';
import * as fromNotifications from 'src/app/core/ngrx/entities/notifications/index';
import { UpdateInfoModalComponent } from '../dashboard/components/agents/components/update-info-modal/update-info-modal.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
    cards: Dictionary<HomeCard> = HOME_CARDS_DATA;

    notificationCounts: NotificationCounts = {
        total: 0,
        profile: 0,
        negotiations: 0,
        completedNegotiations: 0,
        brokerRequest: 0,
    };
    notifications: Dictionary<Notification[]> = {};
    incompleteUserProfileItems: string[] = [];

    showNotificationDropDown: boolean = false;
    animateNotificationDropDownOut: boolean = false;

    userIsVerified: boolean = false;

    user: User;

    destroyed$: EventEmitter<void> = new EventEmitter<void>();

    constructor(
        private router: Router,
        private store: Store<fromNotifications.State>,
        private dialog: MatDialog,
        private purchases: Purchases,
    ) {}

    ngOnInit(): void {
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

        this.store
            .pipe(
                select(fromNotifications.notificationSelectors.getIncompleteUserProfileItems),
                takeUntil(this.destroyed$),
            )
            .subscribe((incompleteUserProfileItems) => {
                this.incompleteUserProfileItems = incompleteUserProfileItems;
            });

        this.store.dispatch(fromNotifications.notificationActions.ReqUserNotifications());

        this.store
            .pipe(select(fromAuth.authSelectors.getUser), takeUntil(this.destroyed$))
            .subscribe((user: User | undefined) => {
                if (user) {
                    this.user = user;
                    this.userIsVerified = user.verification.id !== 6;
                    this.store.dispatch(fromBrokers.brokersActions.ReqBrokersAndDistance_Shared({ user: this.user }));
                    this.store.dispatch(
                        fromBrokers.brokersActions.ReqClientBrokerRequests_Client({ uid: this.user.uid }),
                    );

                    if (this.user.isBroker) {
                        this.router.navigate([BROKER_DASHBOARD_ROUTE]);
                    }
                }
            });
    }

    ngOnDestroy(): void {
        this.destroyed$.next();
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

    handleNavigate(route: string) {
        if (route === '/clearing') {
            if (this.userIsVerified) {
                this.router.navigate([route]);
            } else {
                this.dialog.open(PremiumFeatureModalComponent, {
                    panelClass: 'g-modal-container',
                    autoFocus: false,
                    data: {
                        featurePhrase: 'Safety and peace of mind.',
                        subscribeText:
                            'Subscribe to MX and let us help you clear your trade in the safest way possible.',
                    },
                });
            }
        }
        if (route === '/dashboard/brokers') {
            if (!this.user.location || !this.user.phone) {
                this.dialog.open(UpdateInfoModalComponent, {
                    panelClass: 'g-modal-container-sm-padding',
                    data: { user: this.user },
                });
            } else {
                const brokerNotificationUids = this.notifications.brokers.map((notification) => notification.uid);
                const queryParams = { notificationUids: brokerNotificationUids };
                this.router.navigate([route], { queryParams });
            }
        } else {
            this.router.navigate([route]);
        }
    }

    handleInfoModal(stepKey: string, e: Event): void {
        e.stopPropagation();
        this.dialog.open(StepInfoModalComponent, {
            panelClass: 'g-modal-container',
            data: {
                stepInfo: STEP_INFO_DATA[stepKey],
            },
        });
    }

    handleRouteToProfile() {
        this.router.navigate([PROFILE_ROUTE]);
    }

    handleOrder() {
        return 0;
    }
}
