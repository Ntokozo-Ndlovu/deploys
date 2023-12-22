import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Actions, ofType, createEffect } from '@ngrx/effects';
import { mergeMap, catchError, take, switchMap } from 'rxjs/operators';
import { from, of } from 'rxjs';

import { BrokersService } from '../../services/brokers/brokers.service';
import { brokersActions } from './index';

import * as actions from '../../helpers/index.actions';
import * as snackBarConfigs from '../../helpers/snackbar';
import { calculateBrokerDistanceHelper } from '../../helpers/helperFunctions';

import { BrokerNegotiation, BrokerRequest, Client } from '../../models/queryModels';
import { ApiService } from '../../services/api/api.service';
import { NotificationsService } from '../../services/notifications/notifications.service';
import { ReqSendIntroductionEmail } from './brokers.actions';
import { checkIfClientHasBroker } from '../../helpers/brokerHelperFunctions';

@Injectable()
export class BrokersEffects {
    //#region Shared Broker/Client

    // #region ReqBrokersAndDistance_Shared
    ReqBrokersAndDistance_Shared$ = createEffect(() =>
        this.actions$.pipe(
            ofType(brokersActions.ReqBrokersAndDistance_Shared),
            mergeMap((user) => {
                return from(this.brokersService.getBrokers()).pipe(
                    take(1),
                    mergeMap((brokers) => {
                        let locationsToGeocode = [user.user.location];
                        brokers.forEach((broker) => {
                            locationsToGeocode.push(broker.location);
                        });
                        return from(this.brokersService.getGeocodedAddresses(locationsToGeocode)).pipe(
                            take(1),
                            mergeMap((coordinates) => {
                                let distances = calculateBrokerDistanceHelper(coordinates);
                                brokers.forEach((broker, index) => {
                                    broker.distance = distances[index];
                                });

                                return [brokersActions.ReqBrokersAndDistance_SharedSuccess({ brokers: brokers })];
                            }),
                        );
                    }),
                    catchError((error) => {
                        console.log('ReqBrokersAndDistance_Shared: ', error);
                        return [brokersActions.ReqBrokersAndDistance_SharedFail()];
                    }),
                );
            }),
        ),
    );
    //#endregion

    // #region ReqCreateRequest_Shared
    ReqCreateRequest_Shared$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.brokersActions.ReqCreateRequest_Shared),
            switchMap(({ brokerUid, clientUid, sentByBroker }) => {
                return of(this.brokersService.createRequest(brokerUid, clientUid, sentByBroker)).pipe(
                    switchMap((response) => {
                        return [
                            actions.brokersActions.ReqCreateRequest_SharedSuccess({
                                response,
                                clientUid,
                                brokerUid,
                            }),
                        ];
                    }),
                    catchError((error) => {
                        console.log('ReqCreateRequest_Shared: ', error);
                        return [actions.brokersActions.ReqCreateRequest_SharedFail()];
                    }),
                );
            }),
        ),
    );
    // #endregion

    // #region ReqAcceptRequest_Shared
    ReqAcceptRequest_Shared$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.brokersActions.ReqAcceptRequest_Shared),
            switchMap(({ brokerUid, clientUid }) => {
                return of(this.brokersService.acceptRequest(brokerUid, clientUid)).pipe(
                    switchMap((response) => {
                        return [actions.brokersActions.ReqAcceptRequest_SharedSuccess({ response: response })];
                    }),
                    catchError((error) => {
                        console.log('ReqAcceptRequest_Shared: ', error);
                        return [actions.brokersActions.ReqAcceptRequest_SharedFail()];
                    }),
                );
            }),
        ),
    );
    // #endregion

    // #region ReqDeleteRequest_Shared
    ReqDeleteRequest_Shared$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.brokersActions.ReqDeleteRequest_Shared),
            switchMap(({ brokerUid, clientUid }) => {
                return of(this.brokersService.deleteRequest(brokerUid, clientUid)).pipe(
                    switchMap(() => {
                        return [actions.brokersActions.ReqDeleteRequest_SharedSuccess({ clientUid })];
                    }),
                    catchError((error) => {
                        console.log('ReqDeleteRequest_Shared: ', error);
                        return [actions.brokersActions.ReqDeleteRequest_SharedFail()];
                    }),
                );
            }),
        ),
    );
    // #endregion

    // #region ReqSendPairingNotification_Shared
    ReqSendPairingNotification_Shared$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.brokersActions.ReqSendPairingNotification_Shared),
            mergeMap(({ fromBroker, newRequest, brokerUid, clientUid }) => {
                return this.api.sendPairingNotification(fromBroker, newRequest, brokerUid, clientUid).pipe(
                    take(1),
                    switchMap(() => {
                        return [actions.brokersActions.ReqSendPairingNotification_SharedSuccess()];
                    }),
                    catchError((error) => {
                        console.log('ReqSendPairingNotification_SharedFail: ', error.message);
                        return [actions.brokersActions.ReqSendPairingNotification_SharedFail()];
                    }),
                );
            }),
        ),
    );
    // #endregion

    // #region ReqCheckIfClientExists_Broker
    ReqCheckIfClientExists_Broker$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.brokersActions.ReqCheckIfClientExists_Broker),
            switchMap(({ email }) => {
                return this.brokersService.getClientByEmail(email).pipe(
                    mergeMap((client) => {
                        if (client.length && !client[0].isBroker) {
                            return [
                                actions.brokersActions.ReqCheckIfClientExists_BrokerSuccess({
                                    client: client[0] as Client,
                                }),
                            ];
                        }
                    }),
                    catchError((error) => {
                        console.log('ReqCheckIfClientExists_Broker: ', error);
                        this.snackbar.open(error, 'CLOSE', snackBarConfigs.errorConfig);
                        return [actions.brokersActions.ReqCheckIfClientExists_BrokerFail()];
                    }),
                );
            }),
        ),
    );
    // #endregion

    // #region ReqCheckIfClientHasBroker

    ReqCheckIfClientHasBroker$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.brokersActions.ReqCheckIfClientHasBroker),
            switchMap(({ clientId }) => {
                return this.brokersService.getClientBrokerRequests(clientId).pipe(
                    mergeMap((brokerRequests: BrokerRequest[]) => {
                        const result = checkIfClientHasBroker(clientId, brokerRequests);
                        return [actions.brokersActions.ReqCheckIfClientHasBrokerSuccess({ result })];
                    }),
                    catchError((error) => {
                        console.log('ReqCheckIfClientHasBroker: ', error);
                        this.snackbar.open(error, 'CLOSE', snackBarConfigs.errorConfig);
                        return [actions.brokersActions.ReqCheckIfClientHasBrokerFail()];
                    }),
                );
            }),
        ),
    );

    // #endregion

    // #region ReqGetBrokerRequest
    ReqGetBrokerRequest$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.brokersActions.ReqGetBrokerRequest),
            switchMap(({ brokerUid, clientUid }) => {
                return this.brokersService.getBrokerRequest(brokerUid, clientUid).pipe(
                    mergeMap((brokerRequest: BrokerRequest[]) => {
                        return [actions.brokersActions.GetBrokerRequestSuccess({ brokerRequest: brokerRequest.pop() })];
                    }),
                    catchError((error) => {
                        console.log('GetBrokerRequestFail: ', error);
                        this.snackbar.open(error, 'CLOSE', snackBarConfigs.errorConfig);
                        return [actions.brokersActions.GetBrokerRequestFail()];
                    }),
                );
            }),
        ),
    );
    // #endregion

    // #region ReqToggleBrokerAdminRole
    ReqToggleBrokerAdminRole$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.brokersActions.ReqToggleBrokerAdminRole),
            switchMap(({ brokerUid, clientUid, adminRole }) => {
                return of(this.brokersService.toggleBrokerAdminRole(brokerUid, clientUid, adminRole)).pipe(
                    mergeMap(() => {
                        return [actions.brokersActions.ToggleBrokerAdminRoleSuccess()];
                    }),
                    catchError((error) => {
                        console.log('ToggleBrokerAdminRoleFail: ', error);
                        this.snackbar.open(error, 'CLOSE', snackBarConfigs.errorConfig);
                        return [actions.brokersActions.ToggleBrokerAdminRoleFail()];
                    }),
                );
            }),
        ),
    );
    // #endregion

    // #region ReqToggleBrokerAdminRole
    ReqGetActiveClients_Broker$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.brokersActions.ReqGetActiveClients_Broker),
            mergeMap(({ clientIds }) => {
                return this.brokersService.getClients(clientIds).pipe(
                    mergeMap((clients) => {
                        if (clients) {
                            return [actions.brokersActions.ReqGetActiveClients_BrokerSuccess({ clients })];
                        }
                    }),
                    catchError((error) => {
                        console.log('ReqGetActiveClients_Broker: ', error);
                        this.snackbar.open(error, 'CLOSE', snackBarConfigs.errorConfig);
                        return [actions.brokersActions.ReqGetActiveClients_BrokerFail()];
                    }),
                );
            }),
        ),
    );
    // #endregion

    // #region ReqGetPendingClients_Broker
    ReqGetPendingClients_Broker$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.brokersActions.ReqGetPendingClients_Broker),
            mergeMap(({ clientIds }) => {
                return this.brokersService.getClients(clientIds).pipe(
                    mergeMap((clients) => {
                        if (clients) {
                            return [actions.brokersActions.ReqGetPendingClients_BrokerSuccess({ clients })];
                        }
                    }),
                    catchError((error) => {
                        console.log('ReqGetPendingClients_Broker: ', error);
                        this.snackbar.open(error, 'CLOSE', snackBarConfigs.errorConfig);
                        return [actions.brokersActions.ReqGetPendingClients_BrokerFail()];
                    }),
                );
            }),
        ),
    );
    // #endregion

    // #region ReqPendingBrokerRequests_Broker
    ReqPendingBrokerRequests_Broker$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.brokersActions.ReqPendingBrokerRequests_Broker),
            mergeMap(({ brokerUid }) => {
                return this.brokersService.getPendingBrokerRequests(brokerUid).pipe(
                    mergeMap((requests: BrokerRequest[]) => {
                        if (requests) {
                            return [
                                actions.brokersActions.ReqPendingBrokerRequests_BrokerSuccess({
                                    brokerRequests: requests,
                                }),
                            ];
                        }
                    }),
                    catchError((error) => {
                        console.log('ReqPendingBrokerRequests_Broker: ', error);
                        this.snackbar.open(error, 'CLOSE', snackBarConfigs.errorConfig);
                        return [actions.brokersActions.ReqPendingBrokerRequests_BrokerFail()];
                    }),
                );
            }),
        ),
    );
    // #endregion

    // #region ReqAcceptedBrokerRequests_Broker
    ReqAcceptedBrokerRequests_Broker$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.brokersActions.ReqAcceptedBrokerRequests_Broker),
            switchMap(({ brokerUid }) => {
                return this.brokersService.getAcceptedBrokerRequests(brokerUid).pipe(
                    mergeMap((requests) => {
                        if (requests) {
                            return [
                                actions.brokersActions.ReqAcceptedBrokerRequests_BrokerSuccess({
                                    acceptedRequests: requests,
                                }),
                            ];
                        }
                    }),
                    catchError((error) => {
                        console.log('ReqAcceptedBrokerRequests_Broker: ', error);
                        this.snackbar.open(error, 'CLOSE', snackBarConfigs.errorConfig);
                        return [actions.brokersActions.ReqAcceptedBrokerRequests_BrokerFail()];
                    }),
                );
            }),
        ),
    );
    // #endregion

    // #endregion

    // #region Client Effects

    // #region ReqClientBrokerRequests_Client
    ReqClientBrokerRequests_Client$ = createEffect(() =>
        this.actions$.pipe(
            ofType(brokersActions.ReqClientBrokerRequests_Client),
            mergeMap((payload) => {
                return from(this.brokersService.getClientBrokerRequests(payload.uid)).pipe(
                    mergeMap((brokerRequests) => {
                        return [
                            brokersActions.ReqClientBrokerRequests_ClientSuccess({ brokerRequests: brokerRequests }),
                        ];
                    }),
                    catchError((error) => {
                        console.log('ReqClientBrokerRequests_Client: ', error);
                        return [brokersActions.ReqClientBrokerRequests_ClientFail()];
                    }),
                );
            }),
        ),
    );
    //#endregion

    // #region ReqClientsNotifications
    ReqClientsNotifications$ = createEffect(() =>
        this.actions$.pipe(
            ofType(brokersActions.ReqClientsNotifications),
            mergeMap((payload) => {
                return this.notifications.getClientsNotifications(payload.clientsUids).pipe(
                    take(1),
                    mergeMap((notifications) => {
                        return [brokersActions.ReqClientsNotificationsSuccess({ notifications: notifications })];
                    }),
                    catchError((error) => {
                        console.log('ReqClientsNotifications: ', error);
                        return [brokersActions.ReqClientsNotificationsFail()];
                    }),
                );
            }),
        ),
    );
    // #endregion

    // #region ReqCoordinates_Client
    ReqCoordinates_Client$ = createEffect(() =>
        this.actions$.pipe(
            ofType(brokersActions.ReqCoordinates_Client),
            mergeMap((payload) => {
                return from(this.brokersService.getGeocodedAddresses(payload.location)).pipe(
                    take(1),
                    mergeMap((coordinates) => {
                        return [brokersActions.ReqCoordinates_ClientSuccess({ coordinates })];
                    }),
                    catchError((error) => {
                        console.log('ReqCoordinates_Client: ', error);
                        return [brokersActions.ReqCoordinates_ClientFail()];
                    }),
                );
            }),
        ),
    );
    // #endregion

    // #region ReqCreateNegotiationDocument
    ReqCreateNegotiationDocument$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.brokersActions.ReqCreateNegotiationDocument),
            switchMap(({ lotMatchId, buyerEmail, sellerEmail, buyerPaid, sellerPaid }) => {
                return from(
                    this.brokersService.createNegotiationDocument(
                        lotMatchId,
                        sellerEmail,
                        buyerEmail,
                        sellerPaid,
                        buyerPaid,
                    ),
                ).pipe(
                    switchMap((response) => {
                        return [actions.brokersActions.CreateNegotiationDocumentSuccess({ response })];
                    }),
                    catchError((error) => {
                        console.log('ReqCreateNegotiation_Client: ', error);
                        return [actions.brokersActions.CreateNegotiationDocumentFail()];
                    }),
                );
            }),
        ),
    );
    // #endregion

    // #region ReqUpdateNegotiationDocument
    ReqUpdateNegotiationDocument$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.brokersActions.ReqUpdateNegotiationDocument),
            switchMap(({ brokerNegotiation }) => {
                return from(this.brokersService.updateBrokerNegotiationDocument(brokerNegotiation)).pipe(
                    switchMap((response) => {
                        return [actions.brokersActions.UpdateNegotiationDocumentSuccess({ response })];
                    }),
                    catchError((error) => {
                        console.log('ReqCreateNegotiation_Client: ', error);
                        return [actions.brokersActions.UpdateNegotiationDocumentFail()];
                    }),
                );
            }),
        ),
    );
    // #endregion

    // #region ReqGetBrokerNegotiationDocument
    ReqGetBrokerNegotiationDocument$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.brokersActions.ReqGetBrokerNegotiationDocuments),
            mergeMap(({ lotMatchIds }) => {
                return this.brokersService.getBrokerNegotiations(lotMatchIds).pipe(
                    mergeMap((brokerNegotiationDocs: BrokerNegotiation[]) => {
                        return [
                            actions.brokersActions.GetBrokerNegotiationDocumentsSuccess({
                                brokerNegotiationDocs,
                            }),
                        ];
                    }),
                    catchError((error) => {
                        console.log('GetBrokerNegotiationDocumentFail: ', error);
                        return [actions.brokersActions.GetBrokerNegotiationDocumentsFail];
                    }),
                );
            }),
        ),
    );
    // #endregion

    // #region ReqSendIntroductionEmail
    ReqSendIntroductionEmail$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.brokersActions.ReqSendIntroductionEmail),
            mergeMap(({ lotMatchId }) => {
                return this.api.sendIntroductionEmail(lotMatchId).pipe(
                    mergeMap((response) => {
                        return from(this.brokersService.updateBrokerNegotiationEmailStatus(response.lotMatchId)).pipe(
                            mergeMap(() => {
                                return [actions.brokersActions.SendIntroductionEmailSuccess];
                            }),
                        );
                    }),
                    catchError((error) => {
                        console.log('SendIntroductionEmailFail: ', error);
                        return [brokersActions.SendIntroductionEmailFail()];
                    }),
                );
            }),
        ),
    );
    // #endregion

    // #endregion

    constructor(
        private actions$: Actions,
        private brokersService: BrokersService,
        private snackbar: MatSnackBar,
        private api: ApiService,
        private notifications: NotificationsService,
    ) {}
}
