import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { switchMap, mergeMap, catchError, take } from 'rxjs/operators';
import { PaygateService } from '../../services/paygate/paygate.service';
import * as paygateActions from './paygate.actions';

@Injectable()
export class PaygateEffects {
    ReqPaySubs$ = createEffect(() =>
        this.actions$.pipe(
            ofType(paygateActions.ReqPaySubs),
            mergeMap((payload) => {
                return this.api.postPaySubs(payload.transaction).pipe(
                    take(1),
                    switchMap((transaction) => {
                        console.log('Effect transaction: ', transaction);
                        return [paygateActions.ReqPaySubsSuccess()];
                    }),
                    catchError((error) => {
                        console.log('ReqPaySubs: ', error.message);
                        return [paygateActions.ReqPaySubsFail()];
                    }),
                );
            }),
        ),
    );

    constructor(private actions$: Actions, private api: PaygateService) {}
}
