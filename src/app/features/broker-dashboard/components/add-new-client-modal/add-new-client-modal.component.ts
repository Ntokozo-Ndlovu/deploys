import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { MatLegacyDialog as MatDialog, MatLegacyDialogRef as MatDialogRef } from '@angular/material/legacy-dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as snackBarConfigs from '../../../../core/helpers/snackbar';
import { RequestSentModalComponent } from '../request-sent-modal/request-sent-modal.component';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { State } from '../../../../core/ngrx/authState/auth.reducer';
import { take, takeUntil } from 'rxjs/operators';
import { brokersActions, brokersSelectors } from '../../../../core/ngrx/brokers';
import { Broker, Client } from '../../../../core/models/queryModels';
import { authSelectors } from '../../../../core/ngrx/reducers';

@Component({
    selector: 'app-add-new-client-modal',
    templateUrl: './add-new-client-modal.component.html',
    styleUrls: ['./add-new-client-modal.component.scss'],
})
export class AddNewClientModalComponent implements OnInit, OnDestroy {
    clientEmail: string;
    emailValidationLoading: boolean;
    client: Client;
    broker: Broker;
    activeClients: string[];
    pendingRequestsByBroker: string[];
    pendingRequestsByClient: string[];
    private destroyed$ = new EventEmitter();

    constructor(
        private dialogRef: MatDialogRef<AddNewClientModalComponent>,
        private snackbar: MatSnackBar,
        private dialog: MatDialog,
        private actions$: Actions,
        private store: Store<State>,
    ) {}
    // #region Life Cycle Hooks
    ngOnInit(): void {
        this.selectClient();
        this.selectBroker();
        this.selectActiveClientsList();
        this.selectPendingRequests();
    }

    ngOnDestroy() {
        this.destroyed$.emit(true);
    }

    // #endregion

    selectClient(): void {
        this.store
            .select(brokersSelectors.getCurrentClient)
            .pipe(takeUntil(this.destroyed$))
            .subscribe((client) => {
                this.client = client;
            });
    }

    selectBroker(): void {
        this.store
            .select(authSelectors.getUser)
            .pipe(takeUntil(this.destroyed$))
            .subscribe((broker) => {
                this.broker = broker as Broker;
            });
    }

    selectActiveClientsList(): void {
        this.store
            .select(brokersSelectors.getActiveClients)
            .pipe(takeUntil(this.destroyed$))
            .subscribe((activeClients) => {
                this.activeClients = activeClients.map((client) => client.uid);
            });
    }

    selectPendingRequests(): void {
        this.store
            .select(brokersSelectors.getPendingRequests)
            .pipe(takeUntil(this.destroyed$))
            .subscribe((pendingRequests) => {
                this.pendingRequestsByBroker = pendingRequests.map((request) =>
                    request.sentByBroker ? request.clientUid : null,
                );
                this.pendingRequestsByClient = pendingRequests.map((request) =>
                    !request.sentByBroker ? request.clientUid : null,
                );
            });
    }

    handleCloseModal(): void {
        this.dialogRef.close();
    }

    handleValidateClientEmail(): void {
        this.emailValidationLoading = true;

        this.actions$
            .pipe(
                ofType(
                    brokersActions.ReqCheckIfClientExists_BrokerSuccess,
                    brokersActions.ReqCheckIfClientExists_BrokerFail,
                ),
                take(1),
            )
            .subscribe((action) => {
                if (action.type === brokersActions.ReqCheckIfClientExists_BrokerSuccess.type) {
                    this.dialogRef.close(this.clientEmail);
                    this.checkIfClientHasBroker();
                } else {
                    this.emailValidationLoading = false;
                    this.snackbar.open(
                        'The client email provided does not exist on our system, please enter a valid client email',
                        'CLOSE',
                        snackBarConfigs.errorConfig,
                    );
                }
            });

        this.store.dispatch(brokersActions.ReqCheckIfClientExists_Broker({ email: this.clientEmail }));
    }

    checkIfClientHasBroker(): void {
        this.actions$
            .pipe(
                ofType(brokersActions.ReqCheckIfClientHasBrokerSuccess, brokersActions.ReqCheckIfClientHasBrokerFail),
                take(1),
            )
            .subscribe((action) => {
                if (action.type === brokersActions.ReqCheckIfClientHasBrokerSuccess.type) {
                    if (action.result) {
                        this.activeClients.includes(this.client.uid)
                            ? this.snackbar.open(
                                  'You have already been paired with the client, please try another client',
                                  'CLOSE',
                                  snackBarConfigs.errorConfig,
                              )
                            : this.snackbar.open(
                                  'The client already has a Broker, please try another client or contact support if you think this is a mistake',
                                  'CLOSE',
                                  snackBarConfigs.errorConfig,
                              );

                        this.store.dispatch(brokersActions.ClearClientObject_Broker());
                    } else {
                        this.checkPendingRequest();
                    }
                }
            });

        this.store.dispatch(brokersActions.ReqCheckIfClientHasBroker({ clientId: this.client.uid }));
    }

    checkPendingRequest(): void {
        if (this.pendingRequestsByClient.includes(this.client.uid)) {
            this.snackbar.open('The client has already sent you a request', 'CLOSE', snackBarConfigs.errorConfig);
        } else if (this.pendingRequestsByBroker.includes(this.client.uid)) {
            this.snackbar.open('You have already sent the client a request', 'CLOSE', snackBarConfigs.errorConfig);
        } else {
            this.sendClientRequest();
        }
    }

    sendClientRequest(): void {
        this.actions$
            .pipe(
                ofType(brokersActions.ReqCreateRequest_SharedSuccess, brokersActions.ReqCreateRequest_SharedFail),
                take(1),
            )
            .subscribe((action) => {
                if (action.type === brokersActions.ReqCreateRequest_SharedSuccess.type) {
                    this.store.dispatch(
                        brokersActions.ReqSendPairingNotification_Shared({
                            fromBroker: true,
                            newRequest: true,
                            brokerUid: action.brokerUid,
                            clientUid: action.clientUid,
                        }),
                    );
                    this.dialog.open(RequestSentModalComponent, {
                        panelClass: 'g-modal-container',
                    });
                } else {
                    this.emailValidationLoading = false;
                    this.snackbar.open(
                        'Something went wrong while trying to send the request, please try again',
                        'CLOSE',
                        snackBarConfigs.errorConfig,
                    );
                }
            });

        this.store.dispatch(
            brokersActions.ReqCreateRequest_Shared({
                brokerUid: this.broker.uid,
                clientUid: this.client.uid,
                sentByBroker: true,
            }),
        );
        this.store.dispatch(brokersActions.ClearClientObject_Broker());
    }
}
