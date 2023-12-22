import { Component, EventEmitter, HostListener, OnInit } from '@angular/core';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Capacitor } from '@capacitor/core';

import { takeUntil, take } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import * as fromAuth from 'src/app/core/ngrx/authState/index';
import * as fromBrokers from 'src/app/core/ngrx/brokers/index';
import * as fromNotifications from 'src/app/core/ngrx/entities/notifications/index';

import { HowItWorksModalComponent } from './components/how-it-works-modal/how-it-works-modal.component';
import { RequestBrokerModalComponent } from './components/request-broker-modal/request-broker-modal.component';

import { HOME_ROUTE, REQUESTS_ROUTE } from 'src/app/core/helpers/constants';
import { Broker, BrokerRequest, User } from 'src/app/core/models/queryModels';
import { brokersActions, brokersSelectors } from 'src/app/core/ngrx/brokers/index';
import { ConfirmBrokerAdminPermissionComponent } from './components/confirm-broker-admin-permission/confirm-broker-admin-permission.component';

@Component({
    selector: 'app-brokers',
    templateUrl: './brokers.component.html',
    styleUrls: ['./brokers.component.scss'],
})
export class BrokersComponent implements OnInit {
    isWeb: boolean = false;
    isLoading: boolean = false;
    showTermsMenu: boolean = false;
    acceptedTerms: boolean = false;

    user: User;
    brokers: Broker[] = [];
    activeBroker: Broker;
    brokerExpiryDate: number;

    notificationUids: string[] = [];

    destroyed$: EventEmitter<void> = new EventEmitter<void>();
    toggleValue;

    constructor(
        private router: Router,
        private dialog: MatDialog,
        private store: Store,
        private route: ActivatedRoute,
    ) {
        this.isWeb = Capacitor.getPlatform() === 'web';
    }

    ngOnInit(): void {
        this.isLoading = true;
        this.store.pipe(select(fromAuth.authSelectors.getUser), takeUntil(this.destroyed$)).subscribe((user: User) => {
            this.user = user;
            this.store.dispatch(fromBrokers.brokersActions.ReqBrokersAndDistance_Shared({ user: this.user }));
            this.store.dispatch(fromBrokers.brokersActions.ReqClientBrokerRequests_Client({ uid: this.user.uid }));
        });

        this.store
            .pipe(select(fromBrokers.brokersSelectors.getBrokerTermsCheck), takeUntil(this.destroyed$))
            .subscribe((termsChecked: boolean) => {
                this.acceptedTerms = termsChecked;
            });

        if (!this.acceptedTerms) {
            const tsandCsRef = this.dialog.open(HowItWorksModalComponent, {
                panelClass: 'g-modal-container-sm-padding',
            });
            tsandCsRef
                .afterClosed()
                .pipe(take(1))
                .subscribe(() => {
                    this.store.dispatch(fromBrokers.brokersActions.ReqBrokerTermsCheck_Client());
                });
        }

        this.store
            .pipe(select(fromBrokers.brokersSelectors.getFilteredBrokers), takeUntil(this.destroyed$))
            .subscribe((response) => {
                if (response?.activeBroker) {
                    this.activeBroker = response.activeBroker;
                    this.isLoading = false;
                }
                if (response?.brokerList) {
                    this.brokers = response.brokerList;
                    this.isLoading = false;
                }
            });

        this.route.queryParams.pipe(take(1)).subscribe(({ notificationUids }) => {
            if (notificationUids?.length) {
                this.notificationUids = notificationUids;
            }
        });

        this.getToggleValueHelper();
    }

    @HostListener('window:click')
    handleClick() {
        this.showTermsMenu = false;
    }

    handleBack() {
        this.router.navigate([HOME_ROUTE]);
    }

    handleToggleTermsMenu(e: Event) {
        e.stopPropagation();
        this.showTermsMenu = !this.showTermsMenu;
    }

    handleRequestBroker(broker: Broker) {
        this.dialog.open(RequestBrokerModalComponent, {
            panelClass: 'g-modal-container-sm-padding',
            data: { broker: broker, user: this.user },
        });
    }

    handleRouteToRequests() {
        if (this.notificationUids.length > 0) {
            this.store.dispatch(
                fromNotifications.notificationActions.ReqToggleNotificationStatus({
                    notificationUids: this.notificationUids,
                }),
            );
        }

        this.router.navigate([REQUESTS_ROUTE]);
    }

    getToggleValueHelper(): void {
        this.store
            .pipe(select(brokersSelectors.getClientsBrokerRequests), takeUntil(this.destroyed$))
            .subscribe((requests: BrokerRequest[]) => {
                const brokerRequest = requests.filter((request: BrokerRequest) => request.acceptedRequest).pop();
                this.toggleValue = brokerRequest ? brokerRequest.brokerAdminRole : false;
                this.brokerExpiryDate = brokerRequest ? brokerRequest.expiryDate : null;
            });
    }

    handleToggleSwitch(value: boolean): void {
        this.toggleValue = value;
        if (value) {
            this.handleOpenConfirmBrokerPermissionModal();
        }
        this.store.dispatch(
            brokersActions.ReqToggleBrokerAdminRole({
                brokerUid: this.activeBroker.uid,
                clientUid: this.user.uid,
                adminRole: value,
            }),
        );
    }

    handleOpenConfirmBrokerPermissionModal(): void {
        this.dialog.open(ConfirmBrokerAdminPermissionComponent, {
            panelClass: 'g-modal-container',
        });
    }
}
