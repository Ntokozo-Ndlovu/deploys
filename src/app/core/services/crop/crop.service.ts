import { combineLatest, Observable } from 'rxjs';
import { ApiService } from 'src/app/core/services/api/api.service';
import { Injectable } from '@angular/core';
import { IdName } from '../../models/queryModels';

@Injectable({
    providedIn: 'root',
})
export class CropService {
    constructor(private api: ApiService) {}

    getCropMonthsAndGrades(cropId: number, exchangeId: number): Observable<[IdName[], IdName[]]> {
        return combineLatest([this.api.getCropMonths(cropId, exchangeId), this.api.getCropGrades(cropId)]);
    }
}
