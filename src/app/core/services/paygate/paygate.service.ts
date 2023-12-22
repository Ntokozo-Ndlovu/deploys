import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction, TransactionReturn } from '../../models/queryModels';

const paygateAPI = 'https://www.paygate.co.za/paysubs/process.trans';

@Injectable({
    providedIn: 'root',
})
export class PaygateService {
    baseHeaders = {
        password: 'secret',
    };

    constructor(private http: HttpClient) {}

    //#region Paygate Subscriptions

    postPaySubs(transaction: Transaction): Observable<TransactionReturn> {
        return this.http.post<TransactionReturn>(`${paygateAPI}`, { transaction }, { headers: this.baseHeaders });
    }

    //#endregion
}
