import { GetLotFormDataResponse } from './../../helpers/queryTypes';
import { IdName, DeliveryPoint, Lot } from 'src/app/core/models/queryModels';
import { ApiService } from 'src/app/core/services/api/api.service';
import { combineLatest, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { map, take } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class LotService {
    constructor(private api: ApiService) {}
    getLotFormData(lotId: number, entityId: number) {
        if (lotId) {
            return combineLatest([
                combineLatest([
                    this.api.getLotById(lotId),
                    this.api.getEntitysDeliveryPoints(entityId),
                    this.api.getPublicDeliveryPoints(),
                    this.api.getAllCrops(),
                ]),
                combineLatest([this.api.getIncoTerms(), this.api.getPaymentOptions(), this.api.getUnitOfMeasure()]),
            ]).pipe(
                map(
                    ([
                        [lot, entityDeliveryPoints, publicDeliverPoints, crops],
                        [incoTerms, paymentOptions, unitsOfMeasure],
                    ]): GetLotFormDataResponse => {
                        return [
                            lot,
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
                        [lot, entityDeliveryPoints, publicDeliverPoints, crops],
                        [incoTerms, paymentOptions, unitsOfMeasure],
                    ]): GetLotFormDataResponse => {
                        return [
                            lot,
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
