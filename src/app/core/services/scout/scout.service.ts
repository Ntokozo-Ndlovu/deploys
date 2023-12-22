import { ScoutAndFineTune, Crop } from './../../models/queryModels';
import { Scout, IdName } from 'src/app/core/models/queryModels';
import { ApiService } from 'src/app/core/services/api/api.service';
import { Observable, combineLatest, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { ScoutCard } from '../../models/viewModels';

@Injectable({
    providedIn: 'root',
})
export class ScoutService {
    constructor(private api: ApiService) {}
    getScoutEditData(scoutId: number): Observable<[ScoutAndFineTune, Crop[], IdName[]]> {
        if (scoutId) {
            return combineLatest([this.api.getScoutById(scoutId), this.api.getAllCrops(), this.api.getUnitOfMeasure()]);
        } else {
            return combineLatest([of(null), this.api.getAllCrops(), this.api.getUnitOfMeasure()]);
        }
    }
}
