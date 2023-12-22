import { createFeatureSelector, createSelector } from '@ngrx/store';
import { filterBrokerHelper } from '../../helpers/helperFunctions';
import { Broker, BrokerRequest } from '../../models/queryModels';
import * as fromBrokers from './brokers.reducer';

export const selectBrokersState = createFeatureSelector<fromBrokers.State>(fromBrokers.brokersFeatureKey);

export const getBrokers = createSelector(selectBrokersState, (brokersState) => {
    return brokersState.brokers;
});

export const getClientsBrokerRequests = createSelector(selectBrokersState, (brokersState) => {
    return brokersState.clientBrokerRequests;
});

export const getBrokerRequest = createSelector(selectBrokersState, (brokersState) => {
    return brokersState.brokerRequest;
});

export const getBrokerTermsCheck = createSelector(selectBrokersState, (brokersState) => {
    return brokersState.seenTsAndCs;
});

export const getCurrentClient = createSelector(selectBrokersState, (brokersState) => {
    return brokersState.client;
});

export const getActiveClients = createSelector(selectBrokersState, (brokersState) => {
    return brokersState.activeClients;
});

export const getPendingClients = createSelector(selectBrokersState, (brokersState) => {
    return brokersState.pendingClients;
});

export const getPendingRequests = createSelector(selectBrokersState, (brokersState) => {
    return brokersState.pendingRequests;
});

export const getAcceptedRequests = createSelector(selectBrokersState, (brokersState) => {
    return brokersState.acceptedRequests;
});

export const getClientNotificationsCount = createSelector(selectBrokersState, (brokersState) => {
    return brokersState.clientsNotifications;
});

export const getNegotiationDocuments = createSelector(selectBrokersState, (brokersState) => {
    return brokersState.brokerNegotiations;
});

export const getFilteredBrokers = createSelector(getBrokers, getClientsBrokerRequests, (broker, brokerRequests) => {
    var activeBroker: Broker;
    var brokerList: Broker[];

    if (brokerRequests.length) {
        let activeBrokerRequest = brokerRequests.filter(
            ({ acceptedRequest, expiryDate }) => acceptedRequest && expiryDate >= Date.now(),
        );
        activeBroker = broker.filter(({ uid }) => uid === activeBrokerRequest[0]?.brokerUid)[0];
        if (activeBroker) {
            return { activeBroker: activeBroker };
        }
    }
    if (broker.length && !activeBroker) {
        let sortedBrokers = [...broker];
        sortedBrokers.sort((a, b) => a.distance - b.distance);
        brokerList = sortedBrokers;
        if (brokerRequests.length) {
            let brokerRequestUids = brokerRequests.map((brokerRequest) => brokerRequest.brokerUid);
            let filteredBrokers = sortedBrokers.filter((broker: Broker) => !brokerRequestUids.includes(broker.uid));
            brokerList = filteredBrokers;
        }
        return { brokerList: brokerList };
    } else {
        return { brokerList: [] };
    }
});

export const getFilteredRequests = createSelector(
    getBrokers,
    getClientsBrokerRequests,
    (brokers: Broker[], brokerRequests: BrokerRequest[]) => {
        if (brokers.length && brokerRequests.length) {
            let fromClientRequests = filterBrokerHelper(brokerRequests, brokers, false);
            let fromBrokerRequests = filterBrokerHelper(brokerRequests, brokers, true);
            return { fromClientRequests: fromClientRequests, fromBrokerRequests: fromBrokerRequests };
        }
    },
);
