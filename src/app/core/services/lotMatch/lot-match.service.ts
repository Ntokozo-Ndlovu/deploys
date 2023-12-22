import { GetLotMatchFormDataResponse } from './../../helpers/queryTypes';
import { map, take } from 'rxjs/operators';
import { combineLatest, of } from 'rxjs';
import { ApiService } from 'src/app/core/services/api/api.service';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class LotMatchService {
    constructor(private api: ApiService) {}

    getLotMatchFormData(lotMatchId: number, entityId: number, clientUid: string = null) {
        if (lotMatchId) {
            return combineLatest([
                combineLatest([
                    this.api.getLotMatchIterations(lotMatchId, clientUid),
                    this.api.getEntitysDeliveryPoints(entityId),
                    this.api.getPublicDeliveryPoints(),
                    this.api.getAllCrops(),
                ]),
                combineLatest([this.api.getIncoTerms(), this.api.getPaymentOptions(), this.api.getUnitOfMeasure()]),
            ]).pipe(
                map(
                    ([
                        [lotMatchIterations, entityDeliveryPoints, publicDeliverPoints, crops],
                        [incoTerms, paymentOptions, unitsOfMeasure],
                    ]): GetLotMatchFormDataResponse => {
                        return [
                            lotMatchIterations,
                            entityDeliveryPoints,
                            publicDeliverPoints,
                            crops,
                            incoTerms,
                            paymentOptions,
                            unitsOfMeasure,
                        ];
                    },
                ),
                take(1),
            );
        } else {
            return combineLatest([
                combineLatest([
                    of(null),
                    this.api.getEntitysDeliveryPoints(entityId),
                    this.api.getPublicDeliveryPoints(),
                    this.api.getAllCrops(),
                ]),
                combineLatest([this.api.getIncoTerms(), this.api.getPaymentOptions(), this.api.getUnitOfMeasure()]),
            ]).pipe(
                map(
                    ([
                        [lotMatchIterations, entityDeliveryPoints, publicDeliverPoints, crops],
                        [incoTerms, paymentOptions, unitsOfMeasure],
                    ]): GetLotMatchFormDataResponse => {
                        return [
                            lotMatchIterations,
                            entityDeliveryPoints,
                            publicDeliverPoints,
                            crops,
                            incoTerms,
                            paymentOptions,
                            unitsOfMeasure,
                        ];
                    },
                ),
                take(1),
            );
        }
    }
}
