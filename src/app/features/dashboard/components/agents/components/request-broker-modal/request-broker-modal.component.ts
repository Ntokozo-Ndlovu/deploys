import { Component, Inject, OnInit } from '@angular/core';
import { MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { Router } from '@angular/router';
import { REQUESTS_ROUTE } from 'src/app/core/helpers/constants';
import { Broker, User } from 'src/app/core/models/queryModels';
import * as actions from 'src/app/core/helpers/index.actions';
import { Actions, ofType } from '@ngrx/effects';
import { take } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as fromBrokers from 'src/app/core/ngrx/brokers/index';

@Component({
    selector: 'app-request-broker-modal',
    templateUrl: './request-broker-modal.component.html',
    styleUrls: ['./request-broker-modal.component.scss'],
})
export class RequestBrokerModalComponent implements OnInit {
    isRequestSent: boolean = false;
    isLoading: boolean = false;
    constructor(
        private dialogRef: MatDialogRef<RequestBrokerModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: { broker: Broker; user: User },
        private router: Router,
        private actions$: Actions,
        private store: Store,
    ) {}

    ngOnInit(): void {}

    handleRequestBroker() {
        this.isLoading = true;
        this.actions$
            .pipe(
                ofType(
                    actions.brokersActions.ReqCreateRequest_SharedSuccess,
                    actions.brokersActions.ReqCreateRequest_SharedFail,
                ),
                take(1),
            )
            .subscribe((response) => {
                if (response) {
                    this.store.dispatch(
                        fromBrokers.brokersActions.ReqClientBrokerRequests_Client({ uid: this.data.user.uid }),
                    );
                    this.store.dispatch(
                        fromBrokers.brokersActions.ReqSendPairingNotification_Shared({
                            fromBroker: false,
                            newRequest: true,
                            brokerUid: this.data.broker.uid,
                            clientUid: this.data.user.uid,
                        }),
                    );
                }
            });

        this.actions$
            .pipe(
                ofType(
                    actions.brokersActions.ReqClientBrokerRequests_ClientSuccess,
                    actions.brokersActions.ReqClientBrokerRequests_ClientFail,
                ),
                take(1),
            )
            .subscribe((response) => {
                if (response) {
                    this.isRequestSent = true;
                }
                this.isLoading = false;
            });

        this.store.dispatch(
            actions.brokersActions.ReqCreateRequest_Shared({
                brokerUid: this.data.broker.uid,
                clientUid: this.data.user.uid,
                sentByBroker: false,
            }),
        );
    }
    handleViewBrokerRequest() {
        this.dialogRef.close();
        this.router.navigate([REQUESTS_ROUTE]);
    }

    handleCloseModal() {
        this.dialogRef.close();
    }
}
