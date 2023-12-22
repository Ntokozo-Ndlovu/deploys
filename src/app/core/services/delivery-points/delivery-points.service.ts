import { Injectable } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Entity, EntityUser, DeliveryPoint } from '../../models/queryModels';
import { ApiService } from '../api/api.service';

@Injectable({
    providedIn: 'root',
})
export class DeliveryPointsService {
    constructor(private api: ApiService) {}

    getEntityUsersDeliveryPoints(entityUsers: Entity[]): Observable<DeliveryPoint[]> {
        return combineLatest([
            ...entityUsers.map((entityUser) => {
                return this.api.getEntitysDeliveryPoints(entityUser.id);
            }),
        ]).pipe(
            map((nestedDeliveryPoints) => {
                return nestedDeliveryPoints.reduce((acc, deliveryPoints) => {
                    acc = acc.concat(deliveryPoints);
                    return acc;
                }, []);
            }),
        );
    }
}
