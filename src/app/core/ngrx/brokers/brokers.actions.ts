import { createAction, props } from '@ngrx/store';
import { Broker, BrokerNegotiation, BrokerRequest, Client, User } from '../../models/queryModels';
import { LatLng, Notification } from '../../models/viewModels';

// #region Shared Broker/Client Actions

// #region ReqBrokersAndDistance_Shared
export const ReqBrokersAndDistance_Shared = createAction(
    '[Brokers & Brokers Dashboard] ReqBrokersAndDistance_Shared',
    props<{ user: User }>(),
);
export const ReqBrokersAndDistance_SharedSuccess = createAction(
    '[ReqBrokersAndDistance_Shared] ReqBrokersAndDistance_SharedSuccess',
    props<{ brokers: Broker[] }>(),
);
export const ReqBrokersAndDistance_SharedFail = createAction(
    '[ReqBrokersAndDistance_Shared] ReqBrokersAndDistance_SharedFail',
);
// #endregion

// #region ReqCreateRequest_Shared
export const ReqCreateRequest_Shared = createAction(
    '[Request Broker Modal & Broker Dashboard] ReqCreateRequest_Shared',
    props<{ brokerUid: string; clientUid: string; sentByBroker: boolean }>(),
);
export const ReqCreateRequest_SharedSuccess = createAction(
    '[ReqCreateRequest_Shared] ReqCreateRequest_SharedSuccess',
    props<{ response: string; clientUid: string; brokerUid: string }>(),
);
export const ReqCreateRequest_SharedFail = createAction('[ReqCreateRequest_Shared] ReqCreateRequest_SharedFail');
// #endregion

// #region ReqAcceptRequest_Shared
export const ReqAcceptRequest_Shared = createAction(
    '[Pending Request Modal & Broker Dashboard] ReqAcceptRequest_Shared',
    props<{ brokerUid: string; clientUid: string }>(),
);
export const ReqAcceptRequest_SharedSuccess = createAction(
    '[ReqAcceptRequest_Shared] ReqAcceptRequest_SharedSuccess',
    props<{ response: string }>(),
);
export const ReqAcceptRequest_SharedFail = createAction('[ReqAcceptRequest_Shared] ReqAcceptRequest_SharedFail');
// #endregion

// #region ReqDeleteRequest_Shared
export const ReqDeleteRequest_Shared = createAction(
    '[Broker Dashboard & Pending Request Modal] ReqDeleteRequest_Shared',
    props<{ brokerUid: string; clientUid: string }>(),
);
export const ReqDeleteRequest_SharedFail = createAction('[ReqDeleteRequest_Shared] ReqDeleteRequest_SharedFail');
export const ReqDeleteRequest_SharedSuccess = createAction(
    '[ReqDeleteRequest_Shared] ReqDeleteRequest_SharedSuccess',
    props<{ clientUid: string }>(),
);

// #endregion

// #region ReqSendPairingNotification
export const ReqSendPairingNotification_Shared = createAction(
    '[Request Broker Modal & Add New Client Modal] ReqSendPairingNotification_Shared',
    props<{ fromBroker: boolean; newRequest: boolean; brokerUid: string; clientUid: string }>(),
);
export const ReqSendPairingNotification_SharedSuccess = createAction(
    '[ReqSendPairingNotification_Shared] ReqSendPairingNotification_SharedSuccess',
);
export const ReqSendPairingNotification_SharedFail = createAction(
    '[ReqSendPairingNotification_Shared] ReqSendPairingNotification_SharedFail',
);

// #region Populate/Hydrate Client Object
export const PopulateClientObject = createAction(
    '[Broker Dashboard] [NF] [SCU] PopulateClientObject',
    props<{ client: Client }>(),
);

// #region Broker Actions

// #region ClearClientObject_Broker
export const ClearClientObject_Broker = createAction('[Broker Dashboard] [NF] [SCU] ClearClientObject_Broker');
// #endregion

// #region ReqCheckIfClientExists_Broker
export const ReqCheckIfClientExists_Broker = createAction(
    '[Broker Dashboard] ReqCheckIfClientExists_Broker',
    props<{ email: string }>(),
);
export const ReqCheckIfClientExists_BrokerFail = createAction('[Broker Dashboard] ReqCheckIfClientExists_BrokerFail');
export const ReqCheckIfClientExists_BrokerSuccess = createAction(
    '[Broker Dashboard] ReqCheckIfClientExists_BrokerSuccess',
    props<{ client: Client }>(),
);
// #endregion

// #region ReqCheckIfClientHasBroker

export const ReqCheckIfClientHasBroker = createAction(
    '[Add New Client Modal] ReqCheckIfClientHasBroker',
    props<{ clientId: string }>(),
);
export const ReqCheckIfClientHasBrokerFail = createAction('[Add New Client Modal] ReqCheckIfClientHasBrokerFail');
export const ReqCheckIfClientHasBrokerSuccess = createAction(
    '[Add New Client Modal] ReqCheckIfClientHasBrokerSuccess',
    props<{ result: boolean }>(),
);

// #endregion

// #region ReqGetActiveClients_Broker
export const ReqGetActiveClients_Broker = createAction(
    '[Broker Dashboard] ReqGetActiveClients_Broker',
    props<{ clientIds: string[] }>(),
);
export const ReqGetActiveClients_BrokerFail = createAction('[Broker Dashboard] ReqGetActiveClients_BrokerFail');
export const ReqGetActiveClients_BrokerSuccess = createAction(
    '[Broker Dashboard] ReqGetActiveClients_BrokerSuccess',
    props<{ clients: Client[] }>(),
);
export const ResetActiveClientsState = createAction('[Broker Dashboard] [NF] [SCU] ResetActiveClientsState');
// #endregion

// #region ReqGetPendingClients_Broker
export const ReqGetPendingClients_Broker = createAction(
    '[Broker Dashboard] ReqGetPendingClients_Broker',
    props<{ clientIds: string[] }>(),
);
export const ReqGetPendingClients_BrokerFail = createAction('[Broker Dashboard] ReqGetPendingClients_BrokerFail');
export const ReqGetPendingClients_BrokerSuccess = createAction(
    '[Broker Dashboard] ReqGetPendingClients_BrokerSuccess',
    props<{ clients: Client[] }>(),
);
export const ResetPendingClientsState = createAction('[Broker Dashboard] [NF] [SCU] ResetPendingClientsState');
// #endregion

// #region ReqPendingBrokerRequests_Broker
export const ReqPendingBrokerRequests_Broker = createAction(
    '[Broker Dashboard] ReqPendingBrokerRequests_Broker',
    props<{ brokerUid: string }>(),
);
export const ReqPendingBrokerRequests_BrokerFail = createAction(
    '[Broker Dashboard] ReqPendingBrokerRequests_BrokerFail',
);
export const ReqPendingBrokerRequests_BrokerSuccess = createAction(
    '[Broker Dashboard] ReqPendingBrokerRequests_BrokerSuccess',
    props<{ brokerRequests: BrokerRequest[] }>(),
);
// #endregion

// #region ReqAcceptedBrokerRequests_Broker
export const ReqAcceptedBrokerRequests_Broker = createAction(
    '[Broker Dashboard] ReqAcceptedBrokerRequests_Broker',
    props<{ brokerUid: string }>(),
);
export const ReqAcceptedBrokerRequests_BrokerFail = createAction(
    '[Broker Dashboard] ReqAcceptedBrokerRequests_BrokerFail',
);
export const ReqAcceptedBrokerRequests_BrokerSuccess = createAction(
    '[Broker Dashboard] ReqAcceptedBrokerRequests_BrokerSuccess',
    props<{ acceptedRequests: BrokerRequest[] }>(),
);
// #endregion

// #endregion

// #region Client Actions

// #region ReqBrokerTermsCheck_Client
export const ReqBrokerTermsCheck_Client = createAction('[Brokers] [NF] [SCU] ReqBrokerTermsCheck_Client');
// #endregion

// #region ReqClientBrokerRequests_Client
export const ReqClientBrokerRequests_Client = createAction(
    '[Brokers] ReqClientBrokerRequests_Client',
    props<{ uid: string }>(),
);
export const ReqClientBrokerRequests_ClientSuccess = createAction(
    '[ReqClientBrokerRequests_Client] ReqClientBrokerRequests_ClientSuccess',
    props<{ brokerRequests: BrokerRequest[] }>(),
);
export const ReqClientBrokerRequests_ClientFail = createAction(
    '[ReqClientBrokerRequests_Client] ReqClientBrokerRequests_ClientFail',
);
// #endregion

// #region ReqCoordinates_Client
export const ReqCoordinates_Client = createAction('[Brokers] ReqCoordinates_Client', props<{ location: string[] }>());
export const ReqCoordinates_ClientSuccess = createAction(
    '[ReqCoordinates_Client] ReqCoordinates_ClientSuccess',
    props<{ coordinates: LatLng[] }>(),
);
export const ReqCoordinates_ClientFail = createAction('[ReqCoordinates_Client] ReqCoordinates_ClientFail');
// #endregion

// #region ReqCreateNegotiationDocument
export const ReqCreateNegotiationDocument = createAction(
    '[Request Broker Modal & Broker Dashboard] ReqCreateNegotiation',
    props<{
        lotMatchId: number;
        sellerEmail: string;
        buyerEmail: string;
        sellerPaid: boolean;
        buyerPaid: boolean;
    }>(),
);
export const CreateNegotiationDocumentSuccess = createAction(
    '[ReqCreateNegotiation_Client] CreateNegotiationDocumentSuccess',
    props<{ response: string }>(),
);
export const CreateNegotiationDocumentFail = createAction(
    '[ReqCreateNegotiation_Client] CreateNegotiationDocumentFail',
);
// #endregion

// #region ReqUpdateNegotiationDocument
export const ReqUpdateNegotiationDocument = createAction(
    '[Request Broker Modal & Broker Dashboard] ReqUpdateNegotiationDocument',
    props<{
        brokerNegotiation: BrokerNegotiation;
    }>(),
);
export const UpdateNegotiationDocumentSuccess = createAction(
    '[ReqUpdateNegotiationDocument] UpdateNegotiationDocumentSuccess',
    props<{ response: string }>(),
);
export const UpdateNegotiationDocumentFail = createAction(
    '[ReqUpdateNegotiationDocument] UpdateNegotiationDocumentFail',
);
// #endregion

// #region Get Broker-Client Negotiation Document

export const ReqGetBrokerNegotiationDocuments = createAction(
    '[Negotiation page] ReqGetBrokerNegotiationDocument',
    props<{ lotMatchIds: number[] }>(),
);

export const GetBrokerNegotiationDocumentsSuccess = createAction(
    '[ReqGetBrokerNegotiationDocument] GetBrokerNegotiationDocumentSuccess',
    props<{ brokerNegotiationDocs: BrokerNegotiation[] }>(),
);

export const GetBrokerNegotiationDocumentsFail = createAction(
    '[ReqGetBrokerNegotiationDocument] GetBrokerNegotiationDocumentFail',
);

// #endregion

export const ReqSendIntroductionEmail = createAction(
    '[Negotiation Card] ReqSendIntroductionEmail',
    props<{ lotMatchId: number }>(),
);

export const SendIntroductionEmailSuccess = createAction('[ReqSendIntroductionEmail] SendIntroductionEmailSuccess');
export const SendIntroductionEmailFail = createAction('[ReqSendIntroductionEmail] SendIntroductionEmailFail');
// #endregion

// #region ReqClientsNotifications
export const ReqClientsNotifications = createAction(
    '[Broker Dashboard] ReqClientsNotifications',
    props<{ clientsUids: string[] }>(),
);
export const ReqClientsNotificationsSuccess = createAction(
    '[ReqClientsNotifications] ReqClientsNotificationsSuccess',
    props<{ notifications: Notification[] }>(),
);
export const ReqClientsNotificationsFail = createAction('[ReqClientsNotifications] ReqClientsNotificationsFail');

// #endregion

// #region ReqGetBrokerRequest
export const ReqGetBrokerRequest = createAction(
    '[ Negotiation ] ReqGetBrokerRequest',
    props<{ brokerUid: string; clientUid: string }>(),
);
export const GetBrokerRequestSuccess = createAction(
    '[ Negotiation ] GetBrokerRequestSuccess',
    props<{ brokerRequest: BrokerRequest }>(),
);
export const GetBrokerRequestFail = createAction('[ Negotiation ] GetBrokerRequestFail');
export const ClearBrokerRequest = createAction('[ Negotiation ] ClearBrokerRequest');

// #endregion

// #region ReqToggleBrokerAdminRole
export const ReqToggleBrokerAdminRole = createAction(
    '[ Brokers Component ] ReqToggleBrokerAdminRole',
    props<{ brokerUid: string; clientUid: string; adminRole: boolean }>(),
);
export const ToggleBrokerAdminRoleSuccess = createAction('[ Brokers Component ] ToggleBrokerAdminRoleSuccess');
export const ToggleBrokerAdminRoleFail = createAction('[ Brokers Component ] ToggleBrokerAdminRoleFail');

// #endregion
