export interface IdName {
    id: number;
    name: string;
}
export interface Crop {
    id: number;
    name: string;
    cropCategoryId: number;
}

export interface GPSCoordinates {
    lat: number;
    lng: number;
}

// #region Entity

export interface User {
    uid: string;
    email: string;
    phone: string;
    SQL_id?: number;
    archived: number;
    lastname: string;
    firstname: string;
    createdAt: number;
    updatedAt: number;
    enterprise?: string;
    token?: string;
    location: string;
    matchUser?: boolean;
    hasBrowsedMarket?: boolean;
    entities?: Entity[];
    verification?: Verification;
    successfulMatches?: number;
    ratings?: Rating[];
    deviceTokens?: string[];
    isBroker?: boolean;
    grainSA?: GrainSA;
}

export interface Broker extends User {
    distance?: number;
    activeClients?: string[];
}

export interface Client extends User {
    distance: number;
}

export interface BrokerRequest {
    brokerUid: string;
    clientUid: string;
    sentByBroker: boolean;
    acceptedRequest: boolean;
    expiryDate: number;
    brokerAdminRole: boolean;
}
export interface BrokerNegotiation {
    lotMatchId: number;
    sellerEmail: string;
    buyerEmail: string;
    sellerPaid: boolean;
    buyerPaid: boolean;
    emailSent: boolean;
}
export interface Verification {
    id: number;
    verificationDate: number;
    verificationExpires?: number;
}

export interface GrainSA {
    grainSAId: string;
    isVerified: boolean;
}

export interface Rating {
    ratingScore: number;
    userId: string;
}

export interface UserVerification {
    uid: string;
    fullName: string;
    verification: Verification;
}

export interface SQL_User {
    id: number;
    skuduId: string;
    entities: Entity[];
    hasB_BBEE: boolean;
}

export interface Entity {
    id: number;
    name: string;
    email: string;
    userEntity: boolean;
    registrationNumber: string;
    phoneNumber: string;
    maxUsers: number;
    tradingEntities: TradingEntity[];
    B_BBEE_Rating: number;
}

export interface EntityUser {
    id: number;
    entityId: number;
    roleId: number;
    userEntity: boolean;
}
export interface EntityDelivery {
    id: number;
    deliveryPointId: number;
    contactPerson: string;
    phoneNumber: string;
    email: string;
}

export interface TradingEntity {
    id: number;
    name: string;
    equityScore: number;
    entityType: IdName;
    entityDeliveries?: EntityDelivery[];
}
// #endregion

// #region Scout

export type ScoutCreator = 'Farmer' | 'Offtaker (Processor)' | 'Trader';
export type ScoutType = 'Buy' | 'Sell';

export interface Scout {
    id?: number;
    creatorType: ScoutCreator;
    scoutType: ScoutType;
    crop: Crop;
    inSouthAfrica: boolean;
    googlePlaceId: string;
    town: string;
    location: GPSCoordinates;
    radius: number;
    isPublic: boolean;
    tradingEntityId?: number;
}

export interface ScoutAndFineTune {
    scout: Scout;
    fineTune: FineTune;
}

export interface ScoutSave extends Scout {
    tradingEntityId: number;
}

export class ScoutClass implements Scout {
    creatorType: ScoutCreator = 'Farmer';
    scoutType: ScoutType = 'Sell';
    crop = {
        id: null,
        name: '',
        cropCategoryId: null,
    };
    inSouthAfrica = false;
    googlePlaceId = '';
    town = '';
    location = {
        lat: -30.5595,
        lng: 22.9375,
    };
    radius = 50;
    isPublic = true;
}

// #endregion

// #region Delivery Point

export interface DeliveryPoint {
    id: number;
    name: string;
    streetNumber: string;
    street: string;
    suburb: string;
    town: string;
    postalCode: string;
    region: string;
    province: string;
    country: string;
    googlePlaceId: string;
    isPublic: boolean;
    location: GPSCoordinates;
    locationType?: IdName;
}

export class DeliveryPointClass implements DeliveryPoint {
    id: number = 112358132134558914;
    name: string = null;
    streetNumber: string = null;
    street: string = null;
    suburb: string = null;
    town: string = null;
    postalCode: string = null;
    region: string = null;
    province: string = null;
    country: string = null;
    googlePlaceId: string = null;
    isPublic: boolean = false;
    location = {
        lat: -30.5595,
        lng: 22.9375,
    };
    locationType?: IdName = {
        id: 8,
        name: 'User Generated',
    };
}

export interface Silo {
    id: number;
    name: string;
    deliveryPoint: DeliveryPoint;
}

// #endregion

// #region Additional Details Modal

export interface AdditionalEntityDetail {
    entityId?: number;
    legalEntityName: string;
    exFarm: boolean;
    bbbeeRating: number;
    email: string;
}

export class AdditionalEntityDetailsClass implements AdditionalEntityDetail {
    legalEntityName = '';
    exFarm = false;
    bbbeeRating = 0;
    email = '';
}

export interface UserWithEntities extends User {
    entities: Entity[];
    hasB_BBEE: boolean;
}

// #endregion

// #region Lot

export type SafexMonth =
    | 'January'
    | 'February'
    | 'March'
    | 'April'
    | 'May'
    | 'June'
    | 'July'
    | 'August'
    | 'September'
    | 'October'
    | 'November'
    | 'December';
export type SafexOption = 'PLUS' | 'MINUS';
export type PriceType = { name: 'Fixed Price'; id: 2 } | { name: 'Basis'; id: 1 };

export class Lot {
    id?: number;
    lotName: string = '';
    lotType: ScoutType = 'Sell';
    crop: Crop = null;
    priceType: PriceType = { name: 'Fixed Price', id: 2 };
    month: IdName = null;
    dateFrom: Date = null;
    dateTo: Date = null;
    incoTerm: IdName = null;
    deliveryPoint: DeliveryPoint = new DeliveryPointClass();
    quality: IdName = null;
    quantity: number = null;
    price: number = null;
    paymentTerm: IdName = null;
    isPublic: boolean = true;
    scoutId: number = null;
    exchange: IdName = { id: 1, name: 'SAFEX' };
    quantityMeasure: IdName = null;
    safexOption: SafexOption = 'PLUS';
    tradingEntityId = null;
    packaging: IdName = null;
    radius: number | null = null;
}

export type MatchItems = 'Product' | 'Position' | 'Period' | 'ContractPrice' | 'Payment' | 'Quantity' | 'Quality';

export class LotMatchDetails {
    id: number;
    crop: IdName;
    packaging: IdName;
    deliveryPoint: DeliveryPoint;
    dateFrom: Date;
    dateTo: Date;
    currency: IdName;
    price: number;
    priceType: PriceType;
    exchange: IdName;
    incoTerm: IdName;
    month: IdName;
    exchangeValue: 'PLUS' | 'MINUS';
    payment: IdName;
    quantity: number;
    unitOfMeasure: IdName;
    grade: IdName;
    userVerificationId: number;
    lotId?: number;
}

// #endregion

// #region Search Info

export interface searchInfo {
    searchData: string;
    isPublic: boolean;
}

// #endregion

// #region Fine Tune

export class FineTune {
    id?: number;
    scoutId?: number;
    exFarm: boolean;
    hasLots: boolean;
    rating: number;
}

export interface FineTunedScout extends Scout {
    exFarm: boolean;
    hasLots: boolean;
    rating: number;
}

// #endregion

//#region Analytics

export interface Analytics {
    numberOfBuyingScouts: number;
    numberOfSellingScouts: number;
    numberOfBuyingLots: number;
    numberOfSellingLots: number;
    totalSkuduMatches: number;
    volumeNegotiatedInTons: number;
}

export class DateRange {
    lowerBound: Date;
    upperBound: Date;
}

//#endregion

//#region Browse the Market

export class MarketFilters {
    cardType: ScoutType;
    gpsCoordinates: GPSCoordinates;

    crop: IdName | null;
    cropCategory: IdName | null;
    town: string | null;
    dateFrom: Date | null;
    dateTo: Date | null;
    radius: number | null;
}

export class MarketFilterClass extends MarketFilters {
    cardType: ScoutType = 'Buy';
    gpsCoordinates: GPSCoordinates = {
        lat: -30.5595,
        lng: 22.9375,
    };

    crop: IdName | null = null;
    cropCategory: IdName | null = null;
    town: string | null = null;
    dateFrom: Date | null = null;
    dateTo: Date | null = null;
    radius: number | null = null;
}

//#endregion

//#region Paygate

export interface Transaction {
    VERSION: number;
    PAYGATE_ID: string;
    REFERENCE: string;
    AMOUNT: string;
    CURRENCY: string;
    RETURN_URL: string;
    TRANSACTION_DATE: string;
    EMAIL: string;
    SUBS_START_DATE: string;
    SUBS_END_DATE: string;
    SUBS_FREQUENCY: string;
    PROCESS_NOW: string;
    PROCESS_NOW_AMOUNT: string;
    CHECKSUM: string;
}

export interface TransactionReturn {
    PAYGATE_ID: number;
    REFERENCE: string;
    TRANSACTION_STATUS: string;
    RESULT_CODE: number;
    AUTH_CODE: number;
    AMOUNT: string;
    RESULT_DESC: string;
    TRANSACTION_ID: string;
    SUBSCRIPTION_ID: string;
    RISK_INDICATOR: string;
    CHECKSUM: string;
}

//#endregion
