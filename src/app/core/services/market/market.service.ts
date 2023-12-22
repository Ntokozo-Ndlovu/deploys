import { MarketFilters } from 'src/app/core/models/queryModels';
import { ApiService } from 'src/app/core/services/api/api.service';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class MarketService {
    constructor(private api: ApiService) {}
    getMarketLotCards(marketFilters: MarketFilters) {
        try {
            return this.api.getMarketLotCards(marketFilters);
        } catch (error) {
            console.log('getMarketLotCards', { error });
            throw error.code ? error.code : error.message;
        }
    }
    getMarketScoutCards(marketFilters: MarketFilters) {
        try {
            return this.api.getMarketScoutCards(marketFilters);
        } catch (error) {
            console.log('getMarketScoutCards', { error });
            throw error.code ? error.code : error.message;
        }
    }
}
