import { BrokerNegotiation, Client, BrokerRequest } from '../models/queryModels';
import { NegotiationCard } from '../models/viewModels';
import { cloneDeep } from 'lodash';

/**
 * Broker Feature Helper Functions
 * */

// #region Negotiation Documents
export function filterOutNegotiationDocument(
    lotMatchId: number,
    brokerNegotiationDocuments: BrokerNegotiation[],
): BrokerNegotiation | null {
    if (!brokerNegotiationDocuments.length) {
        return null;
    }

    let brokerDocument: BrokerNegotiation[];

    brokerDocument = brokerNegotiationDocuments.filter((document) => document.lotMatchId === lotMatchId);
    return brokerDocument[0];
}

export function getAllLotMatchIdsFromNegotiationCards(negotiationCards: NegotiationCard[]): number[] {
    const lotMatchIds: number[] = [];
    if (!negotiationCards.length) {
        return lotMatchIds;
    }

    negotiationCards.map((card) => {
        card.activeNegotiations.map((activeNegotiation) => {
            lotMatchIds.push(activeNegotiation.lotMatchId);
        });
    });

    return lotMatchIds;
}

export function newClientsListWithoutDuplicates(stateClients: Client[], actionClients: Client[]): Client[] {
    if (!stateClients.length && !actionClients.length) {
        return [];
    } else if (!actionClients.length) {
        return stateClients;
    }

    const newStateClients = cloneDeep(stateClients);
    const newActionClients = cloneDeep(actionClients);

    for (let i = actionClients.length - 1; i >= 0; i--) {
        const actionClient = actionClients[i];
        const existingIndex = newStateClients.findIndex((client) => client.uid === actionClient.uid);

        if (existingIndex !== -1) {
            newStateClients[existingIndex] = actionClient;
            newActionClients.splice(i, 1);
        }
    }

    return newStateClients.concat(newActionClients);
}

export function checkIfClientHasBroker(clientId: string, brokerRequests: BrokerRequest[]): boolean {
    if (!brokerRequests.length) {
        return false;
    }

    return (
        brokerRequests.filter(
            (brokerRequest: BrokerRequest) => brokerRequest.clientUid === clientId && brokerRequest.acceptedRequest,
        ).length > 0
    );
}

// #endregion
