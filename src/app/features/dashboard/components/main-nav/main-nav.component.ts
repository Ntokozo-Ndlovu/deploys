import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import * as fromNotifications from 'src/app/core/ngrx/entities/notifications/index';
import { filter, take, takeUntil } from 'rxjs/operators';
import { iconDetails, PROFILE_ROUTE } from 'src/app/core/helpers/constants';
import { iconDetailData, NavigationItem, NotificationCounts } from 'src/app/core/models/viewModels';
import { brokersSelectors } from '../../../../core/ngrx/brokers';
import { Client, User } from '../../../../core/models/queryModels';
import { authSelectors } from '../../dashboard.selectors';
import { ConfirmationModalService } from '../../../../core/services/confirmation-modal/confirmation-modal.service';
import { isProfileCompleteHelper } from '../../../../core/helpers/helperFunctions';
@Component({
    selector: 'app-main-nav',
    templateUrl: './main-nav.component.html',
    styleUrls: ['./main-nav.component.scss'],
})
export class MainNavComponent implements OnInit, OnDestroy {
    activeRoute: string = 'scouts';
    iconDetails: { [key: string]: iconDetailData } = iconDetails;

    notificationCounts: NotificationCounts = {
        total: null,
        profile: null,
        negotiations: null,
        completedNegotiations: null,
    };

    matRippleColor: string = '#e5e9ef';
    client: Client;
    user: User;
    hideNav = false;

    destroyed$: EventEmitter<void> = new EventEmitter<void>();

    constructor(
        private router: Router,
        private store: Store<fromNotifications.State>,
        private confirmModalService: ConfirmationModalService,
    ) {
        router.events
            .pipe(
                filter((e): e is NavigationEnd => e instanceof NavigationEnd),
                takeUntil(this.destroyed$),
            )
            .subscribe((val) => {
                const activeRouteFromUrl: string = val['url'].split('/').pop() || '';
                if (activeRouteFromUrl !== this.activeRoute) {
                    this.activeRoute = activeRouteFromUrl;
                }
            });
    }

    ngOnInit(): void {
        this.selectClientHelper();
        this.selectUserHelper();
    }

    ngOnDestroy(): void {
        this.destroyed$.next();
    }

    getUserNotificationsCountHelper(): void {
        this.store
            .pipe(select(fromNotifications.notificationSelectors.getNotificationCounts), takeUntil(this.destroyed$))
            .subscribe((notificationCounts: NotificationCounts) => {
                if (notificationCounts.total) {
                    this.notificationCounts = notificationCounts;
                }
            });

        const clientUid = this.client ? this.client.uid : null;
        this.client
            ? this.store.dispatch(fromNotifications.notificationActions.ReqClientNotifications({ clientUid }))
            : this.store.dispatch(fromNotifications.notificationActions.ReqUserNotifications());
    }

    handleToggleActiveRoute(newRoute: NavigationItem): void {
        this.activeRoute = newRoute;
        this.changeNavigationTabHelper();
    }

    maintainOrderHelper = (): number => {
        return 0;
    };

    changeNavigationTabHelper(): void {
        this.router.navigate([`/dashboard/${this.activeRoute}`]);
    }

    selectClientHelper(): void {
        this.store
            .select(brokersSelectors.getCurrentClient)
            .pipe(takeUntil(this.destroyed$))
            .subscribe((client: Client) => {
                this.client = client;
                this.getUserNotificationsCountHelper();
            });
    }

    selectUserHelper(): void {
        this.store
            .select(authSelectors.getUser)
            .pipe(takeUntil(this.destroyed$))
            .subscribe((user: User) => {
                this.user = user;
                this.hideNavForAgentHelper();
                this.checkIfUserCompletedProfileHelper();
            });
    }

    hideNavForAgentHelper(): void {
        if (this.router.url.includes('profile') && this.user?.isBroker) {
            this.hideNav = true;
        }
    }

    checkIfUserCompletedProfileHelper(): void {
        if (!this.user?.isBroker && !isProfileCompleteHelper(this.user)) {
            this.confirmModalService
                .open(
                    'Profile Incomplete',
                    'Please go to your profile and complete all the required sections to continue using MatchMX',
                    this.client,
                    'Complete Profile',
                    'Cancel',
                )
                .afterClosed()
                .pipe(take(1))
                .subscribe((result) => {
                    !result ? this.checkIfUserCompletedProfileHelper() : this.router.navigate([PROFILE_ROUTE]);
                });
        } else if (this.user?.isBroker && !isProfileCompleteHelper(this.client)) {
            this.confirmModalService
                .open(
                    "Client's Profile incomplete",
                    'Please reach out to the client and ask them to kindly complete their profile',
                    this.client,
                    'OK',
                    'Cancel',
                )
                .afterClosed()
                .pipe(take(1))
                .subscribe((result) => {});
        }
    }
}
