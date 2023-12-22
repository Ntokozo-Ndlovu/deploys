import { MarketFilters, User } from './../../models/queryModels';
import { DEFAULT_VERIFICATION } from './../../helpers/constants';
import {
    ScoutCard,
    ScoutSearchResult,
    LotMatch,
    LotCard,
    NegotiationCard,
    LotMatchIteration,
    MarketLotCard,
} from 'src/app/core/models/viewModels';
import {
    Scout,
    SQL_User,
    Lot,
    Entity,
    FineTunedScout,
    DeliveryPoint,
    IdName,
    ScoutAndFineTune,
    AdditionalEntityDetail,
    DateRange,
    Analytics,
    Crop,
} from 'src/app/core/models/queryModels';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import { map, tap } from 'rxjs/operators';
import { dateStringToDate } from '../../helpers/helperFunctions';

const API = environment.API;

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    baseHeaders = {
        firebaseToken: null,
        Authorization:
            'Bearer HhnIC9a99hqp7aW3Vx_Rx_43RcDLoWIxxjw8Ehs-Iqpeg2IktY6UYuMNmGGzGdq4ouao0MV0gAIF6kTRaa7zE2CX8GEAEZC9y8PaktdYCUisNWu_aMeO5D4sO5bHMxvZ-9TtIJuSyuPmlve-lsUaGUwhxE-fIGwt2n-igeyZsxuZVtjqUSRitE4u8rtVIJfdlmPhnmvgvWWEr-Gtf5HcmwxI1JU_TTnRc4bTRI6QnU2p4CRa73-ssLB9JBuIKHSEFkoNY8ZlDxUq6a8c_voqdA86Fi0_VefF5aJhVhSnwZi322L4E0YQZNUOMGJGIYhPL45s_V8bsMLU8DIDqS0HUdXB_9cooBGmVMXPqbvBxP21jbBbi37zB3OkiqnE6rOQKpcT-sQrvNrSdE8esnxHrphnyBs1uKGCfSMZHOjQdPHb4PBqcQTc7l97hO0__OSR2__GQ-OVRQ9RvcnQcYRgFu5ulQ5S0gTsDOMihapj4aoe9xA1jHm_6JkmJerXtHzsYTd_jtQps-kjoxugFsRv8BiqLUszkB7Eqd5QjzQ6m6U',
    };
    constructor(private http: HttpClient, private afAuth: AngularFireAuth, private afs: AngularFirestore) {
        this.afAuth.idToken.subscribe((token) => {
            this.baseHeaders.firebaseToken = token ? token : '';
        });
    }

    //#region AUTH
    getUser(clientUid: string = null): Observable<SQL_User> {
        if (clientUid) {
            return this.http.get<SQL_User>(`${API}/auth/login`, {
                headers: this.baseHeaders,
                params: {
                    clientUid,
                },
            });
        }
        return this.http.get<SQL_User>(`${API}/auth/login`, { headers: this.baseHeaders });
    }
    registerUser(email: string, phoneNumber: string): Observable<SQL_User> {
        return this.http
            .post<SQL_User>(`${API}/auth/register`, { email, phoneNumber }, { headers: this.baseHeaders })
            .pipe(
                tap((sqlUser) => {
                    return this.afs
                        .doc(`Users/${sqlUser.skuduId}`)
                        .update({ matchUser: true, verification: DEFAULT_VERIFICATION });
                }),
            );
    }

    deleteAccountRequest(user: User): Observable<{ id: number }> {
        return this.http.post<{ id: number }>(`${API}/auth/delete`, { ...user }, { headers: this.baseHeaders });
    }

    getEntityById(id: number): Observable<Entity> {
        return this.http.get<Entity>(`${API}/entity`, { headers: this.baseHeaders, params: { id: id.toString() } });
    }
    getEntitysDeliveryPoints(entityId: number): Observable<DeliveryPoint[]> {
        return this.http.get<DeliveryPoint[]>(`${API}/delivery-points/entity`, {
            headers: this.baseHeaders,
            params: { id: entityId.toString() },
        });
    }
    saveAdditionalEntityDetails(additionalDetails: AdditionalEntityDetail) {
        return this.http.post<AdditionalEntityDetail>(
            `${API}/entity/equity-info`,
            { ...additionalDetails },
            { headers: this.baseHeaders },
        );
    }
    getAdditionalEntityDetails(id: number): Observable<AdditionalEntityDetail> {
        return this.http.get<AdditionalEntityDetail>(`${API}/entity/equity-info`, {
            headers: this.baseHeaders,
            params: { id: id.toString() },
        });
    }
    //#endregion

    //#region DELIVERY MANAGEMENT PAGE
    getPublicDeliveryPoints(): Observable<DeliveryPoint[]> {
        return this.http.get<DeliveryPoint[]>(`${API}/delivery-points/is-public`, { headers: this.baseHeaders });
    }
    createDeliveryPoint(deliveryPoint: DeliveryPoint, clientUid: string): Observable<DeliveryPoint> {
        delete deliveryPoint.id;
        return this.http.post<DeliveryPoint>(
            `${API}/delivery-points/create`,
            { ...deliveryPoint },
            { headers: this.baseHeaders, params: { clientUid: clientUid } },
        );
    }
    updateDeliveryPoint(deliveryPoint: DeliveryPoint): Observable<DeliveryPoint> {
        return this.http.post<DeliveryPoint>(
            `${API}/delivery-points/update`,
            { ...deliveryPoint },
            { headers: this.baseHeaders },
        );
    }
    deleteDeliveryPoint(deliveryPointId: number): Observable<{ id: number }> {
        return this.http.post<{ id: number }>(
            `${API}/delivery-points/delete`,
            { id: deliveryPointId },
            { headers: this.baseHeaders },
        );
    }
    getLocationTypes(): Observable<IdName[]> {
        return this.http.get<DeliveryPoint[]>(`${API}/location-types/all`, { headers: this.baseHeaders });
    }
    //#endregion

    //#region APP
    getAllCrops(): Observable<Crop[]> {
        return this.http.get<Crop[]>(`${API}/crops/crop-categories`, { headers: this.baseHeaders });
    }
    getUnitOfMeasure(): Observable<IdName[]> {
        return this.http.get<IdName[]>(`${API}/unitsOfMeasure/all`, { headers: this.baseHeaders });
    }
    updateUser(detailsToUpdate: {
        uid: string;
        phoneNumber: string;
        email: string;
    }): Observable<{ responseMessage: string }> {
        return this.http.post<{ responseMessage: string }>(
            `${API}/user/update`,
            { ...detailsToUpdate },
            { headers: this.baseHeaders },
        );
    }
    //#endregion

    //#region SCOUTS
    createScout(scoutAndFineTune: ScoutAndFineTune): Observable<ScoutCard> {
        return this.http
            .post<ScoutCard>(
                `${API}/scout`,
                { scout: scoutAndFineTune.scout, fineTune: scoutAndFineTune.fineTune },
                { headers: this.baseHeaders },
            )
            .pipe(map((scoutCard) => dateStringToDate(scoutCard)));
    }
    getScoutSearchResults(scoutSearch: Scout): Observable<ScoutSearchResult> {
        return this.http
            .post<ScoutSearchResult>(`${API}/scout/search`, { ...scoutSearch }, { headers: this.baseHeaders })
            .pipe(
                map((searchReturn) => {
                    return { ...searchReturn };
                }),
            );
    }
    getFineTunedScoutSearchResults(scoutSearch: FineTunedScout): Observable<ScoutSearchResult> {
        return this.http
            .post<ScoutSearchResult>(`${API}/scout/fine-tune`, { ...scoutSearch }, { headers: this.baseHeaders })
            .pipe(
                map((searchReturn) => {
                    return { ...searchReturn };
                }),
            );
    }
    getScoutById(scoutId: number): Observable<ScoutAndFineTune> {
        return this.http.get<ScoutAndFineTune>(`${API}/scout/full`, {
            headers: this.baseHeaders,
            params: { id: scoutId.toString() },
        });
    }
    getScoutCardById(scoutId: number): Observable<ScoutCard> {
        return this.http
            .get<ScoutCard>(`${API}/scout`, { headers: this.baseHeaders, params: { id: scoutId.toString() } })
            .pipe(map((scoutCard) => dateStringToDate(scoutCard)));
    }
    getUserScoutCards(tradingEntityId: number): Observable<ScoutCard[]> {
        return this.http
            .get<ScoutCard[]>(`${API}/scout`, {
                headers: this.baseHeaders,
                params: { tradingEntityId: tradingEntityId.toString() },
            })
            .pipe(map((scoutCards) => dateStringToDate(scoutCards)));
    }
    updateScout(scoutAndFineTune: ScoutAndFineTune): Observable<ScoutCard> {
        return this.http
            .post<ScoutCard>(
                `${API}/scout/update`,
                { scout: scoutAndFineTune.scout, fineTune: scoutAndFineTune.fineTune },
                { headers: this.baseHeaders },
            )
            .pipe(map((scoutCard) => dateStringToDate(scoutCard)));
    }

    deleteScout(scoutId: number, clientUid: string = null): Observable<{ id: number }> {
        const params = clientUid ? { clientUid } : {};
        return this.http.post<{ id: number }>(
            `${API}/scout/delete`,
            { id: scoutId },
            { headers: this.baseHeaders, params: { ...params } },
        );
    }
    //#endregion

    //#region LOTS
    createLot(lot: Lot, clientUid: string = null): Observable<LotCard> {
        const params = clientUid ? { clientUid } : {};
        return this.http
            .post<LotCard>(`${API}/lot`, { ...lot }, { headers: this.baseHeaders, params: { ...params } })
            .pipe(map((lotCard) => dateStringToDate(lotCard)));
    }
    getLotById(lotId: number): Observable<Lot> {
        return this.http
            .get<Lot>(`${API}/lot/full`, { headers: this.baseHeaders, params: { id: lotId.toString() } })
            .pipe(map((lotCard) => dateStringToDate(lotCard)));
    }
    getLotCardById(lotId: number): Observable<LotCard> {
        return this.http
            .get<LotCard>(`${API}/lot`, { headers: this.baseHeaders, params: { id: lotId.toString() } })
            .pipe(map((lotCard) => dateStringToDate(lotCard)));
    }

    updateLot(changes: Lot, clientUid: string = null): Observable<LotCard> {
        const params = clientUid ? { clientUid } : {};
        return this.http
            .post<LotCard>(`${API}/lot/update`, { ...changes }, { headers: this.baseHeaders, params: { ...params } })
            .pipe(map((lotCard) => dateStringToDate(lotCard)));
    }

    privatiseLots(lotIds: number[]): Observable<any> {
        return this.http.post<any>(`${API}/lot/privatise-lots`, lotIds, { headers: this.baseHeaders });
    }
    getUserLotCards(tradingEntityId: number): Observable<LotCard[]> {
        return this.http
            .get<LotCard[]>(`${API}/lot`, {
                headers: this.baseHeaders,
                params: { tradingEntityId: tradingEntityId.toString() },
            })
            .pipe(
                map((lotCards) => {
                    const convertedLotCards = dateStringToDate(lotCards);
                    return convertedLotCards;
                }),
            );
    }

    deleteLot(lotId: number, clientUid: string = null): Observable<{ id: number }> {
        const params = clientUid ? { clientUid } : {};
        return this.http.post<{ id: number }>(
            `${API}/lot/delete`,
            { id: lotId },
            { headers: this.baseHeaders, params: { ...params } },
        );
    }
    //#endregion

    //#region LOT MATCHES
    createLotMatch(lotMatch: LotMatch): Observable<{ id: number }> {
        return this.http.post<{ id: number }>(`${API}/match`, { ...lotMatch }, { headers: this.baseHeaders });
    }
    getLotMatches(lotId: number, radius: number = 50): Observable<LotMatch[]> {
        return this.http
            .get<LotMatch[]>(`${API}/match`, {
                headers: this.baseHeaders,
                params: { lotId: lotId.toString(), radius: radius?.toString() || null },
            })
            .pipe(
                map((lotMatches) => {
                    return lotMatches.map((lotMatch) => {
                        return {
                            ...lotMatch,
                            buyerDetails: dateStringToDate(lotMatch.buyerDetails),
                            sellerDetails: dateStringToDate(lotMatch.sellerDetails),
                        };
                    });
                }),
            );
    }

    getLotMatchIterations(lotMatchId: number, clientUid: string = null): Observable<LotMatchIteration[]> {
        const params = clientUid ? { id: lotMatchId.toString(), clientUid: clientUid } : { id: lotMatchId.toString() };

        return this.http
            .get<LotMatchIteration[]>(`${API}/match/iterations`, {
                headers: this.baseHeaders,
                params: { ...params },
            })
            .pipe(
                map((lotMatchIterations) => {
                    return lotMatchIterations.map((lotMatchIteration) => {
                        return {
                            ...dateStringToDate(lotMatchIteration),
                            buyerDetails: dateStringToDate(lotMatchIteration.buyerDetails),
                            sellerDetails: dateStringToDate(lotMatchIteration.sellerDetails),
                        };
                    });
                }),
            );
    }
    updateLotMatch(lotMatch: LotMatch): Observable<LotMatchIteration> {
        return this.http
            .post<LotMatchIteration>(`${API}/match/update`, { ...lotMatch }, { headers: this.baseHeaders })
            .pipe(
                map((lotMatchIteration) => {
                    return {
                        ...dateStringToDate(lotMatchIteration),
                        buyerDetails: dateStringToDate(lotMatchIteration.buyerDetails),
                        sellerDetails: dateStringToDate(lotMatchIteration.sellerDetails),
                    };
                }),
            );
    }
    getHasBroker(lotIds: number[]): Observable<{ [key: string]: boolean }> {
        return this.http.get<{ [key: string]: boolean }>(`${API}/match/hasBroker`, {
            headers: this.baseHeaders,
            params: { lotIds: lotIds.toString() },
        });
    }

    sendIntroductionEmail(lotMatchId: number): Observable<{ lotMatchId: number }> {
        return this.http.post<{ lotMatchId: number }>(
            `${API}/match/introduction-email`,
            { lotMatchId },
            { headers: this.baseHeaders },
        );
    }
    //#endregion

    // #region NEGOTIATIONS
    getUserNegotiationCards(tradingEntityId: number, clientUid: string = null): Observable<NegotiationCard[]> {
        const params = clientUid
            ? { tradingEntityId: tradingEntityId.toString(), clientUid }
            : { tradingEntityId: tradingEntityId.toString() };

        return this.http
            .get<NegotiationCard[]>(`${API}/negotiation`, {
                headers: this.baseHeaders,
                params: { ...params },
            })
            .pipe(
                map((negotiationCards) => {
                    const convertedNegotiationCards = dateStringToDate(negotiationCards);
                    return convertedNegotiationCards;
                }),
            );
    }
    completeNegotiation(
        lotMatch: LotMatch,
        clientHasBroker: boolean,
        counterPartyHasBroker: boolean,
    ): Observable<{ id: number }> {
        return this.http.post<{ id: number }>(
            `${API}/match/complete`,
            { ...lotMatch },
            {
                headers: this.baseHeaders,
                params: {
                    clientHasBroker: clientHasBroker.toString(),
                    counterPartyHasBroker: counterPartyHasBroker.toString(),
                },
            },
        );
    }

    declineNegotiation(lotMatch: LotMatch): Observable<{ id: number }> {
        return this.http.post<{ id: number }>(`${API}/match/decline`, { ...lotMatch }, { headers: this.baseHeaders });
    }
    clearNegotiation(lotMatch: LotMatch, requestedBy: string): Observable<{ id: number }> {
        return this.http.post<{ id: number }>(
            `${API}/match/clear`,
            { ...lotMatch },
            {
                headers: this.baseHeaders,
                params: { requestedBy: requestedBy },
            },
        );
    }

    getAvailableMatchedIds(lotMatchId: number, clientUid: string = null): Observable<number[]> {
        const params = clientUid
            ? { lotMatchId: lotMatchId.toString(), clientUid: clientUid }
            : { lotMatchId: lotMatchId.toString() };

        return this.http.get<number[]>(`${API}/match/lot-match-ids`, {
            headers: this.baseHeaders,
            params: { ...params },
        });
    }
    // #endregion

    // #region FORM DATA
    getCropCategories(): Observable<IdName[]> {
        return this.http.get<IdName[]>(`${API}/form-options/crop-categories`, { headers: this.baseHeaders });
    }
    getCropGrades(cropId: number): Observable<IdName[]> {
        return this.http.get<IdName[]>(`${API}/form-options/grades`, {
            headers: this.baseHeaders,
            params: { cropId: cropId.toString() },
        });
    }
    getCropPackaging(cropId: number): Observable<IdName[]> {
        return this.http.get<IdName[]>(`${API}/form-options/packaging`, {
            headers: this.baseHeaders,
            params: { cropId: cropId.toString() },
        });
    }
    getIncoTerms(): Observable<IdName[]> {
        return this.http.get<IdName[]>(`${API}/form-options/inco-terms`, { headers: this.baseHeaders });
    }
    getPaymentOptions(): Observable<IdName[]> {
        return this.http.get<IdName[]>(`${API}/form-options/payment-terms`, { headers: this.baseHeaders });
    }
    getCropMonths(cropId: number, exchangeId: number): Observable<IdName[]> {
        return this.http.get<IdName[]>(`${API}/form-options/months`, {
            headers: this.baseHeaders,
            params: {
                cropId: cropId.toString(),
                exchangeId: exchangeId.toString(),
            },
        });
    }
    // #endregion

    // #region ANALYTICS
    getAnalytics(): Observable<Analytics> {
        return this.http.get<Analytics>(`${API}/analytics/all`, { headers: this.baseHeaders });
    }
    getLotsInDateRange(dateRange: DateRange): Observable<Lot[]> {
        return this.http
            .post<Lot[]>(`${API}/analytics/lots`, { ...dateRange }, { headers: this.baseHeaders })
            .pipe(map((lots) => dateStringToDate(lots)));
    }
    // #endregion

    //#region VERIFICATION
    sendVerificationFormEmail(): Observable<{ responseMessage: string }> {
        return this.http.get<{ responseMessage: string }>(`${API}/verification/email`, { headers: this.baseHeaders });
    }
    //#endregion

    //#region BROWSE THE MARKET
    getMarketLotCards(marketFilters: MarketFilters): Observable<MarketLotCard[]> {
        return this.http.post<MarketLotCard[]>(
            `${API}/market/filteredLots`,
            { ...marketFilters },
            { headers: this.baseHeaders },
        );
    }
    getMarketScoutCards(marketFilters: MarketFilters): Observable<ScoutCard[]> {
        return this.http.post<ScoutCard[]>(
            `${API}/market/filteredScouts`,
            { ...marketFilters },
            { headers: this.baseHeaders },
        );
    }
    //#endregion

    // #region BROKERS
    sendPairingNotification(fromBroker: boolean, newRequest: boolean, brokerUid: string, clientUid: string) {
        return this.http.post(
            `${API}/broker/pairingNotification`,
            { fromBroker: fromBroker, newRequest, clientUid, brokerUid: brokerUid },
            { headers: this.baseHeaders },
        );
    }
    //#endregion
}
