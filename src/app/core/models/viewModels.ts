import { IdName, ScoutType, LotMatchDetails, Crop, GPSCoordinates, Client } from './queryModels';

export type NavigationItem = 'scouts' | 'lots' | 'negotiations' | 'completed' | 'browse';
export type Tab = 'Entity' | 'Delivery/Admin' | 'User';
export type Toggle = 'All' | 'Sell' | 'Sold' | 'Buy' | 'Bought';
export type AnimationDirection = 'previous' | 'next';
export type bbbeeRating =
    | 'Non-compliant'
    | 'Level 1'
    | 'Level 2'
    | 'Level 3'
    | 'Level 4'
    | 'Level 5'
    | 'Level 6'
    | 'Level 7'
    | 'Level 8';
export type LotStatus = 'new' | 'negotiating' | 'pending' | 'complete' | 'declined';
export type VerificationName =
    | 'Farmer'
    | 'Farmer: On-Farm Storage'
    | 'Processor of Byproducts'
    | 'Buyer'
    | 'Transporter'
    | 'Unverified'
    | 'Grain SA'
    | 'Acting on behalf of premium client';

export interface SignUpData {
    name: string;
    surname: string;
    phone: string;
    location: string;
    grainSAId?: string;
}

export interface SignUpUser {
    name: string;
    surname: string;
    email: string;
    phone: string;
    location: string;
    password: string;
    grainSAId?: string;
}

export interface StepperData {
    title: string;
    info: string;
    imagePath: string;
}

export interface HomeCard {
    title: string;
    routesTo: string;
    source: string;
    sourceAlt: string;
    stepText?: string;
}

export interface SupportCard extends HomeCard {
    linksTo: string | null;
}

export interface TutorialTableItem {
    title: string;
    value: string;
}

export interface DisplayChoice {
    value: boolean;
    key: string;
}

export interface iconDetailData {
    name: NavigationItem;
    sourceGrey: string;
    sourceBlue: string;
}

export interface NameSourceDetails {
    name: string;
    source: string;
    details: string;
}

// #region Delivery Point

export interface DeliveryPointPinIcon {
    url: string;
    scaledSize: { width: number; height: number };
}

// #endregion

// #region Crop Category

export interface CropCategoryImageData {
    name: string;
    source: string;
    sourceAlt: string;
}

export interface CropCategoryCardData {
    id: number;
    name: string;
    source: string;
    sourceAlt: string;
    isAvailable: boolean;
}

// #endregion

//#region Scout
export interface ScoutSearchResult {
    scoutType: string;
    cropName: string;
    town: string;
    matchCount: number;
    lotCount?: number;
    isPublic: boolean;
}

export interface ScoutCard {
    id: number;
    scoutType: ScoutType;
    isPublic: boolean;
    crop: Crop;
    town: string;
    matchCount: number;
    lotCount: number;
    createdDate: Date;
    radius: number | null;
}
//#endregion

// #region Lot
export interface LotCard {
    id: number;
    lotType: ScoutType;
    isPublic: boolean;
    crop: IdName;
    town: string;
    matchCount: number;
    quantity: number;
    price: number;
    unitOfMeasure: string;
    dateFrom: Date;
    dateTo: Date;
    lotName: string;
    createdDate: Date;
    radius: number | null;
    isExpired: boolean;
    deliveryPointName: string;
}
export interface LotMatch {
    id: number;
    userType: ScoutType;
    lotName: string;
    completedDate: Date;
    sellerDetails: LotMatchDetails;
    buyerDetails: LotMatchDetails;
}
export interface LotMatchIteration {
    id: number;
    lotMatchId: number;
    createdDate: Date;
    iterationCount: number;
    userType: ScoutType;
    lotName: string;
    completedDate: Date;
    sellerDetails: LotMatchDetails;
    buyerDetails: LotMatchDetails;
    hasSellerSubmittedMatch: boolean;
    hasBuyerSubmittedMatch: boolean;
}
// #endregion

// #region Negotiation
export interface NegotiationCard {
    id: number;
    lotType: ScoutType;
    lotName: string;
    cropName: string;
    quantity: number;
    unitOfMeasure: string;
    dateFrom: Date;
    dateTo: Date;
    createdDate: Date;
    isCompleted: boolean;
    activeNegotiations: ActiveNegotiation[];
}

export interface ActiveNegotiation {
    lotMatchId: number;
    price: number;
    isSafexMinus: boolean;
    isPending: boolean;
    unitOfMeasure: string;
    matchedPropertyCount: number;
}
// #endregion

// #region Notifications
export interface CurrentNotification {
    title: string;
    body: string;
}

export interface IncompleteProfileNotification {
    isUserProfileComplete: boolean;
    incompleteUserProfileItems: string[];
}

export interface Notification {
    uid: string;
    message: string;
    lotId?: number;
    lotMatchId?: number;
    seen: boolean;
    userId: string;
    lotStatus?: LotStatus;
    newRequest?: boolean;
    senderUid?: string;
}

export interface NotificationCounts {
    total: number;
    profile: number;
    negotiations: number;
    completedNegotiations: number;
    brokerRequest?: number;
}
// #endregion

// #region Verification
export interface VerificationType {
    id: number;
    name: VerificationName;
    source: string;
}
export interface VerificationSubscription extends VerificationType {
    product: Product;
    product_monthly: Product;
    identifier: string;
    promotion?: string;
}
// #endregion

export interface Product {
    title: string;
    price: string;
}

// #region Step Info
export interface StepInfo {
    iconPath: string;
    tooltip: string;
    heading: string;
    body: string;
}
// #endregion

// #region Browse The Maret
export interface MarketLotCard {
    id: number;
    lotType: ScoutType;
    lotName: string;
    crop: Crop;
    town: string;
    location: { lat: number; lng: number };
    radius: number;
    quantity: number;
    unitOfMeasure: string;
    dateFrom: Date;
    dateTo: Date;
    price: number;
    isExpired: boolean;
}
// #endregion

// #region Agents

export interface LatLng {
    lat: number;
    lng: number;
}

// #endregion

// #region
export interface BrokersConfirmationModal {
    header: string;
    subHeader: string;
    clientData?: Client;
    confirmButton: string;
    declineButton: string;
}
// #endregion
