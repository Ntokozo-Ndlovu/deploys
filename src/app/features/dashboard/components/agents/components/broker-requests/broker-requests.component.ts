import { Component, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BROKERS_ROUTE } from 'src/app/core/helpers/constants';
import { Broker, BrokerRequest, User } from 'src/app/core/models/queryModels';
import { Store, select } from '@ngrx/store';
import { mergeMap, take, takeUntil } from 'rxjs/operators';
import { combineLatest } from 'rxjs';

import * as fromBrokers from 'src/app/core/ngrx/brokers/index';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { PendingRequestModalComponent } from '../pending-request-modal/pending-request-modal.component';
import * as fromAuth from 'src/app/core/ngrx/authState/index';

@Component({
    selector: 'app-broker-requests',
    templateUrl: './broker-requests.component.html',
    styleUrls: ['./broker-requests.component.scss'],
})
export class BrokerRequestsComponent implements OnInit {
    isLoading: boolean = false;
    brokers: Broker[] = [];
    user: User;
    fromClientRequests: Broker[] = [];
    fromBrokerRequests: Broker[] = [];
    noRequests: boolean = false;

    destroyed$: EventEmitter<void> = new EventEmitter<void>();

    constructor(private router: Router, private store: Store, private dialog: MatDialog) {}

    ngOnInit(): void {
        this.isLoading = true;

        this.store.pipe(select(fromAuth.authSelectors.getUser), take(1)).subscribe((user: User) => {
            this.user = user;
        });

        this.store
            .pipe(select(fromBrokers.brokersSelectors.getFilteredRequests), takeUntil(this.destroyed$))
            .subscribe((response: { fromBrokerRequests: Broker[]; fromClientRequests: Broker[] }) => {
                if (response?.fromBrokerRequests) {
                    this.fromBrokerRequests = response?.fromBrokerRequests;
                }
                if (response?.fromClientRequests) {
                    this.fromClientRequests = response?.fromClientRequests;
                }
                if (!response) {
                    this.noRequests = true;
                }
                this.isLoading = false;
            });
    }

    handleBack() {
        this.router.navigate([BROKERS_ROUTE]);
    }

    handleViewRequest(broker: Broker, fromBroker: boolean) {
        this.dialog.open(PendingRequestModalComponent, {
            panelClass: 'g-modal-container-sm-padding',
            data: { broker: broker, user: this.user, fromBroker: fromBroker },
        });
    }
}
