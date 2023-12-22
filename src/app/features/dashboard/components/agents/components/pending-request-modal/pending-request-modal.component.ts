import { Component, EventEmitter, Inject, OnInit } from '@angular/core';
import { MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { Store } from '@ngrx/store';
import { Broker, User } from 'src/app/core/models/queryModels';
import * as actions from 'src/app/core/helpers/index.actions';
import { Router } from '@angular/router';
import { BROKERS_ROUTE, REQUESTS_ROUTE } from 'src/app/core/helpers/constants';
import * as fromBrokers from 'src/app/core/ngrx/brokers/index';
import { Actions, ofType } from '@ngrx/effects';
import { take } from 'rxjs/operators';

@Component({
    selector: 'app-pending-request-modal',
    templateUrl: './pending-request-modal.component.html',
    styleUrls: ['./pending-request-modal.component.scss'],
})
export class PendingRequestModalComponent implements OnInit {
    isLoading: boolean = false;
    requestBroker: boolean = false;
    termsAccepted: boolean = false;

    destroyed$: EventEmitter<void> = new EventEmitter<void>();
    constructor(
        private dialogRef: MatDialogRef<PendingRequestModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: { broker: Broker; user: User; fromBroker: boolean },
        private store: Store,
        private router: Router,
        private actions$: Actions,
    ) {}

    ngOnInit(): void {}

    handleCloseModal() {
        this.dialogRef.close();
    }

    handleShowTerms() {
        this.requestBroker = true;
    }

    handleDeleteRequest() {
        this.isLoading = true;
        this.actions$
            .pipe(
                ofType(
                    actions.brokersActions.ReqDeleteRequest_SharedSuccess,
                    actions.brokersActions.ReqDeleteRequest_SharedFail,
                ),
                take(1),
            )
            .subscribe((response) => {
                if (response) {
                    this.store.dispatch(
                        fromBrokers.brokersActions.ReqClientBrokerRequests_Client({ uid: this.data.user.uid }),
                    );
                } else {
                    this.isLoading = false;
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
                    this.dialogRef.close();
                    this.router.navigate([REQUESTS_ROUTE]);
                }
                this.isLoading = false;
            });
        this.store.dispatch(
            actions.brokersActions.ReqDeleteRequest_Shared({
                brokerUid: this.data.broker.uid,
                clientUid: this.data.user.uid,
            }),
        );
    }

    handleAcceptRequest() {
        this.isLoading = true;
        this.actions$
            .pipe(
                ofType(
                    actions.brokersActions.ReqAcceptRequest_SharedSuccess,
                    actions.brokersActions.ReqAcceptRequest_SharedFail,
                ),
                take(1),
            )
            .subscribe((response) => {
                if (response) {
                    this.store.dispatch(
                        fromBrokers.brokersActions.ReqClientBrokerRequests_Client({ uid: this.data.user.uid }),
                    );
                    this.store.dispatch(
                        actions.brokersActions.ReqSendPairingNotification_Shared({
                            fromBroker: false,
                            newRequest: false,
                            brokerUid: this.data.broker.uid,
                            clientUid: this.data.user.uid,
                        }),
                    );
                } else {
                    this.isLoading = false;
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
                    this.dialogRef.close();
                    this.router.navigate([BROKERS_ROUTE]);
                }
                this.isLoading = false;
            });
        this.store.dispatch(
            actions.brokersActions.ReqAcceptRequest_Shared({
                brokerUid: this.data.broker.uid,
                clientUid: this.data.user.uid,
            }),
        );
    }
}
