import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { AddNewClientModalComponent } from './components/add-new-client-modal/add-new-client-modal.component';
import { Broker, Client, User } from '../../core/models/queryModels';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { State } from '../../core/ngrx/authState/auth.reducer';
import { authSelectors } from '../../core/ngrx/reducers';
import { take, takeUntil } from 'rxjs/operators';
import { brokersActions, brokersSelectors } from '../../core/ngrx/brokers';
import * as snackBarConfigs from '../../core/helpers/snackbar';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LOTS_ROUTE } from '../../core/helpers/constants';
import { ConfirmationModalComponent } from './components/confirmation-modal/confirmation-modal.component';
import { authActions } from '../../core/ngrx/authState';
import { lotActions } from '../../core/ngrx/entities/lot';
import { NotificationsService } from '../../core/services/notifications/notifications.service';
import { Dictionary } from '@ngrx/entity';
import { notificationActions } from '../../core/ngrx/entities/notifications';
import { scoutActions } from '../../core/ngrx/entities/scout';

@Component({
    selector: 'app-broker-dashboard',
    templateUrl: './broker-dashboard.component.html',
    styleUrls: ['./broker-dashboard.scss'],
})
export class BrokerDashboardComponent implements OnInit, OnDestroy {
    tabIndex = 0;
    broker: Broker;
    brokers: Broker[];
    activeClients: Client[];
    filteredActiveClients: Client[];
    pendingClients: Client[];
    filteredPendingClients: Client[];
    pendingRequestsByBroker: string[];
    pendingRequests: string[];
    acceptedRequests: string[];
    searchResults: Client[];
    clientNotificationsCount: Dictionary<number>;

    private destroyed$ = new EventEmitter();

    constructor(
        private dialog: MatDialog,
        private actions$: Actions,
        private store: Store<State>,
        private snackbar: MatSnackBar,
        private router: Router,
    ) {}

    // #region Life Cycle Hooks
    ngOnInit(): void {
        this.fetchBrokerInfoHelper();
        this.selectActiveClientsList();
        this.selectPendingClientsList();
        this.selectPendingRequests();
        this.selectAcceptedRequests();
        this.clearClientObject();
        this.clearBrokerRequest();
        this.clearClientEntities();
        this.clearAllLots();
        this.clearAllScouts();
        this.selectClientsNotificationsCount();
        this.clearNotificationsHelper();
    }

    ngOnDestroy() {
        this.destroyed$.emit(true);
    }
    // #endregion

    clearClientObject(): void {
        this.store.dispatch(brokersActions.ClearClientObject_Broker());
    }

    clearBrokerRequest(): void {
        this.store.dispatch(brokersActions.ClearBrokerRequest());
    }

    clearClientEntities(): void {
        this.store.dispatch(authActions.ClearClientEntities());
    }

    clearAllLots(): void {
        this.store.dispatch(lotActions.ClearAllLots());
    }

    clearAllScouts(): void {
        this.store.dispatch(scoutActions.ClearAllScouts());
    }

    selectPendingClientsList(): void {
        this.store
            .select(brokersSelectors.getPendingClients)
            .pipe(takeUntil(this.destroyed$))
            .subscribe((pendingClients) => {
                this.pendingClients = pendingClients;
                this.filteredPendingClients = pendingClients;
            });
    }

    selectPendingRequests(): void {
        this.store
            .select(brokersSelectors.getPendingRequests)
            .pipe(takeUntil(this.destroyed$))
            .subscribe((pendingRequests) => {
                this.pendingRequests = pendingRequests.map((request) => request.clientUid);
                this.pendingRequestsByBroker = pendingRequests
                    .filter((request) => request.sentByBroker)
                    .map((request) => request.clientUid);

                this.pendingRequests.length
                    ? this.fetchPendingClientRequests()
                    : this.store.dispatch(brokersActions.ResetPendingClientsState());
            });
    }

    selectAcceptedRequests(): void {
        this.store
            .select(brokersSelectors.getAcceptedRequests)
            .pipe(takeUntil(this.destroyed$))
            .subscribe((acceptedRequests) => {
                this.acceptedRequests = acceptedRequests.map((request) => request.clientUid);

                if (this.acceptedRequests.length) {
                    this.fetchActiveClientsNotifications();
                    this.fetchActiveClientsList();
                } else {
                    this.store.dispatch(brokersActions.ResetActiveClientsState());
                }
            });
    }

    selectActiveClientsList(): void {
        this.store
            .select(brokersSelectors.getActiveClients)
            .pipe(takeUntil(this.destroyed$))
            .subscribe((activeClients) => {
                this.activeClients = activeClients;
                this.filteredActiveClients = activeClients;
            });
    }

    selectClientsNotificationsCount(): void {
        this.store
            .select(brokersSelectors.getClientNotificationsCount)
            .pipe(takeUntil(this.destroyed$))
            .subscribe((clientNotificationsCount) => {
                this.clientNotificationsCount = clientNotificationsCount;
            });
    }

    fetchActiveClientsNotifications(): void {
        if (this.acceptedRequests.length > 10) {
            const chuckSize = 10;
            for (let i = 0; i < this.acceptedRequests.length; i += chuckSize) {
                const smallerAcceptedRequestsIdsArray: string[] = this.acceptedRequests.slice(i, i + chuckSize);
                this.store.dispatch(
                    brokersActions.ReqClientsNotifications({ clientsUids: smallerAcceptedRequestsIdsArray }),
                );
            }
        } else {
            this.store.dispatch(brokersActions.ReqClientsNotifications({ clientsUids: this.acceptedRequests }));
        }
    }

    fetchBrokerInfoHelper(): void {
        this.store
            .select(authSelectors.getUser)
            .pipe(takeUntil(this.destroyed$))
            .subscribe((broker: User) => {
                this.broker = broker as Broker;
                this.fetchPendingRequests();
                this.fetchAcceptedRequests();
            });
    }

    clearNotificationsHelper(): void {
        this.store.dispatch(notificationActions.ClearNotifications());
    }

    fetchActiveClientsList(): void {
        if (this.acceptedRequests.length > 10) {
            const chuckSize = 10;
            for (let i = 0; i < this.acceptedRequests.length; i += chuckSize) {
                const smallerAcceptedRequestsIdsArray: string[] = this.acceptedRequests.slice(i, i + chuckSize);
                this.store.dispatch(
                    brokersActions.ReqGetActiveClients_Broker({ clientIds: smallerAcceptedRequestsIdsArray }),
                );
            }
        } else {
            this.store.dispatch(brokersActions.ReqGetActiveClients_Broker({ clientIds: this.acceptedRequests }));
        }
    }

    fetchPendingClientRequests(): void {
        if (this.pendingRequests.length > 10) {
            const chuckSize = 10;
            for (let i = 0; i < this.pendingRequests.length; i += chuckSize) {
                const smallerPendingRequestsIdsArray: string[] = this.pendingRequests.slice(i, i + chuckSize);
                this.store.dispatch(
                    brokersActions.ReqGetPendingClients_Broker({ clientIds: smallerPendingRequestsIdsArray }),
                );
            }
        } else {
            this.store.dispatch(brokersActions.ReqGetPendingClients_Broker({ clientIds: this.pendingRequests }));
        }
    }

    fetchPendingRequests(): void {
        this.store.dispatch(brokersActions.ReqPendingBrokerRequests_Broker({ brokerUid: this.broker.uid }));
    }

    fetchAcceptedRequests(): void {
        this.store.dispatch(brokersActions.ReqAcceptedBrokerRequests_Broker({ brokerUid: this.broker.uid }));
    }

    acceptRequest(clientUid: string): void {
        this.actions$
            .pipe(
                ofType(brokersActions.ReqAcceptRequest_SharedSuccess, brokersActions.ReqAcceptRequest_SharedFail),
                take(1),
            )
            .subscribe((action) => {
                if (action.type === brokersActions.ReqAcceptRequest_SharedSuccess.type) {
                    this.snackbar.open(
                        'Client request has been accepted successfully.',
                        'CLOSE',
                        snackBarConfigs.successConfig,
                    );
                    this.store.dispatch(
                        brokersActions.ReqSendPairingNotification_Shared({
                            fromBroker: true,
                            newRequest: false,
                            brokerUid: this.broker.uid,
                            clientUid: clientUid,
                        }),
                    );
                } else {
                    this.snackbar.open(
                        'Something went wrong while trying to accept client request, Please try again.',
                        'CLOSE',
                        snackBarConfigs.errorConfig,
                    );
                }
            });

        this.store.dispatch(brokersActions.ReqAcceptRequest_Shared({ brokerUid: this.broker.uid, clientUid }));
    }

    declineRequest(clientUid: string): void {
        this.actions$
            .pipe(
                ofType(brokersActions.ReqDeleteRequest_SharedSuccess, brokersActions.ReqDeleteRequest_SharedFail),
                take(1),
            )
            .subscribe((action) => {
                if (action.type === brokersActions.ReqDeleteRequest_SharedSuccess.type) {
                    this.snackbar.open(
                        'Client request has been declined successfully.',
                        'CLOSE',
                        snackBarConfigs.successConfig,
                    );
                } else {
                    this.snackbar.open(
                        'Something went wrong while trying to decline client request, Please try again.',
                        'CLOSE',
                        snackBarConfigs.errorConfig,
                    );
                }
            });

        this.store.dispatch(brokersActions.ReqDeleteRequest_Shared({ brokerUid: this.broker.uid, clientUid }));
    }

    removeClient(clientUid: string): void {
        this.actions$
            .pipe(
                ofType(brokersActions.ReqDeleteRequest_SharedSuccess, brokersActions.ReqDeleteRequest_SharedFail),
                take(1),
            )
            .subscribe((action) => {
                if (action.type === brokersActions.ReqDeleteRequest_SharedSuccess.type) {
                    this.snackbar.open('Client has been removed successfully.', 'CLOSE', snackBarConfigs.successConfig);
                } else {
                    this.snackbar.open(
                        'Something went wrong while trying to remove the client , Please try again.',
                        'CLOSE',
                        snackBarConfigs.errorConfig,
                    );
                }
            });

        this.store.dispatch(brokersActions.ReqDeleteRequest_Shared({ brokerUid: this.broker.uid, clientUid }));
    }

    handleClientSearch(searchPhrase: string): void {
        searchPhrase = searchPhrase.toLowerCase();
        if (this.tabIndex === 0) {
            this.filteredActiveClients = this.filterClientsHelper(this.activeClients, searchPhrase);
        } else {
            this.filteredPendingClients = this.filterClientsHelper(this.pendingClients, searchPhrase);
        }
    }

    handleGetToggleOption(index: number): void {
        this.tabIndex = index;
    }

    handleAddNewClient(): void {
        this.dialog.open(AddNewClientModalComponent, {
            panelClass: 'g-modal-container',
        });
    }

    handleViewLots(clientUid: string): void {
        const client = this.activeClients.filter((clientObj) => clientObj.uid === clientUid).pop();
        this.store.dispatch(brokersActions.PopulateClientObject({ client }));
        this.store.dispatch(brokersActions.ReqGetBrokerRequest({ brokerUid: this.broker.uid, clientUid: clientUid }));
        this.router.navigate([LOTS_ROUTE]);
    }

    filterClientsHelper(clientsList: Client[], searchPhrase: string): Client[] {
        return clientsList.filter(
            ({ firstname, lastname, email }) =>
                firstname.toLowerCase().includes(searchPhrase) ||
                lastname.toLowerCase().includes(searchPhrase) ||
                email.toLowerCase().includes(searchPhrase),
        );
    }

    // #region Confirmation Modals/Dialogs

    handleViewRequest(client: Client): void {
        const dialogRef = this.dialog.open(ConfirmationModalComponent, {
            panelClass: 'g-modal-container',
            data: {
                header: 'Accept Request?',
                subHeader: 'The following user would like you to be their broker for their lots! ',
                clientData: client,
                confirmButton: 'Accept Request',
                declineButton: 'Decline Request',
            },
        });

        dialogRef.afterClosed().subscribe((result) => {
            if (result === true) {
                this.acceptRequest(client.uid);
            } else if (result === false) {
                this.declineRequest(client.uid);
            }
        });
    }

    handleCancelRequest(client: Client): void {
        const dialogRef = this.dialog.open(ConfirmationModalComponent, {
            panelClass: 'g-modal-container',
            data: {
                header: 'Pending Request',
                subHeader:
                    'This request is awaiting acceptance from the MX User.' +
                    ' You may cancel this request before they have accepted.',
                clientData: client,
                confirmButton: 'Keep Request',
                declineButton: 'Cancel Request',
            },
        });

        dialogRef.afterClosed().subscribe((result) => {
            if (result === false) {
                this.declineRequest(client.uid);
            }
        });
    }

    handleOpenDeleteClientConfirmation(client: Client): void {
        const dialogRef = this.dialog.open(ConfirmationModalComponent, {
            panelClass: 'g-modal-container',
            data: {
                header: 'Are You Sure?',
                subHeader:
                    'Are you sure you want to remove this client?' +
                    ' The contractual agreement period is not concluded. This cannot be undone.',
                clientData: client,
                confirmButton: 'Keep Client',
                declineButton: 'Remove Client',
            },
        });

        dialogRef.afterClosed().subscribe((result) => {
            if (result === false) {
                this.removeClient(client.uid);
            }
        });
    }

    // #endregion
}
