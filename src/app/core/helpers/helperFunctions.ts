import { saveAs } from 'file-saver';
import { Broker, BrokerRequest, Lot, Scout, User, UserVerification } from '../models/queryModels';
import { MarketLotCard, LatLng, Notification } from '../models/viewModels';
import { RCproductIdentifiers } from './constants';

// #region Date Helper Functions
export function dateStringToDate<T>(objectToConvert: T): T;
export function dateStringToDate<T>(objectToConvert: T[]): T[];
export function dateStringToDate<T>(objectToConvert: T | T[]): T | T[] {
    if (objectToConvert instanceof Array) {
        return mapArrayOfObjects(objectToConvert);
    } else {
        return convertDateStringToObject(objectToConvert);
    }
}
function convertDateStringToObject<T>(object: T) {
    if (typeof object === 'object') {
        for (const key of Object.keys(object)) {
            if (key.toLowerCase().includes('date') && object[key]) {
                object[key] = new Date(object[key]);
            }
        }
    }
    return object;
}

function mapArrayOfObjects<T>(objectArray: T[]) {
    objectArray = objectArray.map(convertDateStringToObject);
    return objectArray;
}
// #endregion

//#region CSV Download Helper
export function downloadFile(data: any) {
    const replacer = (key, value) => (value === null ? '' : value);
    const header = Object.keys(data[0]);
    const csv = data.map((row) => header.map((fieldName) => JSON.stringify(row[fieldName], replacer)).join(','));

    csv.unshift(header.join(','));
    csv.unshift('SEP=,');
    const csvArray = csv.join('\r\n');

    var blob = new Blob([csvArray], { type: 'text/csv' });
    saveAs(blob, 'myFile.csv');
}
//#endregion

// #region Prepare Scout From Market Lot Card Helper

export function prepareScoutFromMarketLotCardHelper(marketLotCard: MarketLotCard): Scout {
    const { lotType, crop, town, location, radius } = marketLotCard;
    const counterPartyLotType = lotType === 'Sell' ? 'Buy' : 'Sell';
    return {
        creatorType: 'Farmer',
        scoutType: counterPartyLotType,
        crop,
        inSouthAfrica: false,
        googlePlaceId: '',
        town,
        location,
        radius,
        isPublic: true,
    };
}

// #endregion

export function transformSingleUsersForVerificationHelper(
    verificationId: number,
    user: User,
    period: number | null,
): UserVerification {
    const verificationDate: number = Date.now();
    return {
        uid: user.uid,
        fullName: `${user.firstname} ${user.lastname}`,
        verification: {
            id: verificationId,
            verificationDate: verificationDate,
            verificationExpires: period,
        },
    };
}

export function matchRCIdentifierToVerificationIdHelper(identifier: string) {
    for (const verificationId in RCproductIdentifiers) {
        if (RCproductIdentifiers[verificationId].includes(identifier)) {
            return parseInt(verificationId);
        }
    }
}

//#region Calculate distance

export function calculateBrokerDistanceHelper(coordinates: LatLng[]) {
    let latUser = coordinates[0].lat;
    let lngUser = coordinates[0].lng;
    coordinates = coordinates.slice(1);
    let distances = [];

    for (let i = 0; i < coordinates.length; i++) {
        let latAgent = coordinates[i].lat;
        let lngAgent = coordinates[i].lng;

        if (latUser == latAgent && lngUser == lngAgent) {
            distances.push(0);
        } else if (latAgent == 0) {
            distances.push(-1);
        } else {
            var radLatUser = (Math.PI * latUser) / 180;
            var radLatAgent = (Math.PI * latAgent) / 180;
            var theta = lngUser - lngAgent;
            var radTheta = (Math.PI * theta) / 180;
            var dist =
                Math.sin(radLatUser) * Math.sin(radLatAgent) +
                Math.cos(radLatUser) * Math.cos(radLatAgent) * Math.cos(radTheta);
            if (dist > 1) {
                dist = 1;
            }
            dist = Math.acos(dist);
            dist = (dist * 180) / Math.PI;
            dist = dist * 60 * 1.85;
            distances.push(Math.ceil(dist));
        }
    }

    return distances;
}

// #endregion

// #region Client Notifications
export function getClientNotificationsCountHelper(uid: string, notifications: Notification[]): number {
    let notificationsCount = 0;

    for (let i = 0; i < notifications.length; i++) {
        if (notifications[i].userId === uid) {
            notificationsCount++;
        }
    }
    return notificationsCount;
}
// #endregion

// #region Filter broker requests
export function filterBrokerHelper(brokerRequests: BrokerRequest[], brokers: Broker[], sentByBroker: boolean) {
    let sentBy = brokerRequests.filter((brokerRequest) => brokerRequest.sentByBroker === sentByBroker);
    let sentByUids = sentBy.map((brokerRequest) => brokerRequest.brokerUid);
    let sentByBrokers = brokers.filter((broker) => sentByUids.includes(broker.uid));
    return sentByBrokers.sort((a, b) => a.distance - b.distance);
}
// #endregion

// #region Profile Complete Checker

export function isProfileCompleteHelper(user: User): boolean {
    return Boolean(user.firstname && user.lastname && user.email && user.phone && user.location);
}

// #endregion

// #region Lots Transformation

export function transformDateToUtcHelper(date: Date): Date {
    let newDate = date;
    newDate.setHours(newDate.getHours() + 12);
    return newDate;
}

export function transformLotBeforeDispatchHelper(lot: Lot): Lot {
    return {
        ...lot,
        quantity: +lot.quantity,
        price: +lot.price,
        dateFrom: transformDateToUtcHelper(lot.dateFrom),
        dateTo: transformDateToUtcHelper(lot.dateTo),
    };
}
// #endregion
