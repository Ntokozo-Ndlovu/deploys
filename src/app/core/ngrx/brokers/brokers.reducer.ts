import { createReducer, on } from '@ngrx/store';
import { Broker, BrokerNegotiation, BrokerRequest, Client } from '../../models/queryModels';
import * as brokersActions from './brokers.actions';
import { Dictionary } from '@ngrx/entity';
import { getClientNotificationsCountHelper } from '../../helpers/helperFunctions';
import { getBrokers } from './brokers.selectors';
import { newClientsListWithoutDuplicates } from '../../helpers/brokerHelperFunctions';
import { act } from '@ngrx/effects';

export const brokersFeatureKey = 'brokers';
export interface State {
    brokers: Broker[];
    broker: Broker;
    activeClients: Client[];
    acceptedRequests: BrokerRequest[];
    pendingClients: Client[];
    pendingRequests: BrokerRequest[];
    client: Client;
    brokerRequest: BrokerRequest;
    seenTsAndCs: boolean;
    clientBrokerRequests: BrokerRequest[];
    clientsNotifications: Dictionary<number>;
    brokerNegotiations: BrokerNegotiation[];
}

export const initialState: State = {
    brokers: getBrokersFromLocalStorage(),
    broker: undefined,
    activeClients: [],
    acceptedRequests: [],
    pendingClients: [],
    pendingRequests: [],

    client: getClientFromLocalStorage(),
    brokerRequest: getBrokerRequestFromLocalStorage(),
    seenTsAndCs: false,
    clientBrokerRequests: getClientBrokerRequestsFromLocalStorage(),
    clientsNotifications: {},
    brokerNegotiations: [],
};

function getClientFromLocalStorage(): Client {
    const localStorageValue = localStorage.getItem('client');
    return localStorageValue !== 'undefined' ? (JSON.parse(localStorageValue) as Client) : null;
}

function getBrokerRequestFromLocalStorage(): BrokerRequest {
    const localStorageValue = localStorage.getItem('brokerRequest');
    return localStorageValue !== 'undefined' ? (JSON.parse(localStorageValue) as BrokerRequest) : null;
}

function getClientBrokerRequestsFromLocalStorage(): BrokerRequest[] {
    const localStorageValue = localStorage.getItem('ClientBrokerRequests');
    return localStorageValue !== 'undefined' ? (JSON.parse(localStorageValue) as BrokerRequest[]) : null;
}

function getBrokersFromLocalStorage(): Broker[] {
    const localStorageValue = localStorage.getItem('Brokers');
    return localStorageValue !== 'undefined' ? (JSON.parse(localStorageValue) as Broker[]) : null;
}

export const reducer = createReducer(
    initialState,
    on(brokersActions.ReqBrokerTermsCheck_Client, (state, action) => {
        return { ...state, seenTsAndCs: true };
    }),
    on(brokersActions.ReqBrokersAndDistance_SharedSuccess, (state, action) => {
        localStorage.setItem('Brokers', JSON.stringify(action.brokers));
        return { ...state, brokers: action.brokers };
    }),
    on(brokersActions.ReqClientBrokerRequests_ClientSuccess, (state, action) => {
        localStorage.setItem('ClientBrokerRequests', JSON.stringify(action.brokerRequests));
        return { ...state, clientBrokerRequests: action.brokerRequests };
    }),
    on(brokersActions.ReqCheckIfClientExists_BrokerSuccess, brokersActions.PopulateClientObject, (state, action) => {
        localStorage.setItem('client', JSON.stringify(action.client));
        return { ...state, client: action.client };
    }),
    on(brokersActions.ClearClientObject_Broker, (state, action) => {
        localStorage.removeItem('client');
        return { ...state, client: undefined };
    }),
    on(brokersActions.GetBrokerRequestSuccess, (state, action) => {
        localStorage.setItem('brokerRequest', JSON.stringify(action.brokerRequest));
        return { ...state, brokerRequest: action.brokerRequest };
    }),
    on(brokersActions.ClearBrokerRequest, (state, action) => {
        localStorage.removeItem('brokerRequest');
        return { ...state, brokerRequest: undefined };
    }),
    on(brokersActions.ReqGetActiveClients_BrokerSuccess, (state, action) => {
        let clients: Client[] = [];
        if (state.activeClients.length) {
            clients = newClientsListWithoutDuplicates(state.activeClients, action.clients);
        } else {
            clients = action.clients;
        }

        return { ...state, activeClients: clients };
    }),
    on(brokersActions.ResetActiveClientsState, (state, action) => {
        return { ...state, activeClients: [] };
    }),
    on(brokersActions.ResetPendingClientsState, (state, action) => {
        return { ...state, pendingClients: [] };
    }),
    on(brokersActions.ReqGetPendingClients_BrokerSuccess, (state, action) => {
        let clients: Client[];
        if (state.pendingClients.length) {
            clients = newClientsListWithoutDuplicates(state.pendingClients, action.clients);
        } else {
            clients = action.clients;
        }

        return { ...state, pendingClients: clients };
    }),
    on(brokersActions.ReqPendingBrokerRequests_BrokerSuccess, (state, action) => {
        return { ...state, pendingRequests: action.brokerRequests };
    }),
    on(brokersActions.ReqAcceptedBrokerRequests_BrokerSuccess, (state, action) => {
        return { ...state, acceptedRequests: action.acceptedRequests };
    }),
    on(brokersActions.ReqDeleteRequest_SharedSuccess, (state, action) => {
        return {
            ...state,
            pendingRequests: state.pendingRequests.filter(
                (pendingRequest) => pendingRequest.clientUid !== action.clientUid,
            ),
            pendingClients: state.pendingClients.filter((pendingClient) => pendingClient.uid !== action.clientUid),
            acceptedRequests: state.acceptedRequests.filter(
                (pendingRequest) => pendingRequest.clientUid !== action.clientUid,
            ),
            activeClients: state.activeClients.filter((pendingClient) => pendingClient.uid !== action.clientUid),
        };
    }),
    on(brokersActions.ReqClientsNotificationsSuccess, (state, action) => {
        const notificationDict: Dictionary<number> = {};
        state.acceptedRequests.map(
            (request) =>
                (notificationDict[request.clientUid] = getClientNotificationsCountHelper(
                    request.clientUid,
                    action.notifications,
                )),
        );

        return {
            ...state,
            clientsNotifications: notificationDict,
        };
    }),
    on(brokersActions.GetBrokerNegotiationDocumentsSuccess, (state, action) => {
        let newBrokerNegotiations: BrokerNegotiation[] = [];

        if (state.brokerNegotiations.length) {
            newBrokerNegotiations = state.brokerNegotiations;
            newBrokerNegotiations.concat(action.brokerNegotiationDocs);
        } else {
            newBrokerNegotiations = action.brokerNegotiationDocs;
        }
        return { ...state, brokerNegotiations: newBrokerNegotiations };
    }),
);
