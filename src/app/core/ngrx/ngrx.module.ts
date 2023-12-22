import { MatSnackBarModule } from '@angular/material/snack-bar';
import { State } from './reducers/index';
import { environment } from 'src/environments/environment';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { Store, StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { ReqCheckAuthorization } from './app-state/app-state.actions';

//#region Effects
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './authState/auth.effects';
import { AppStateEffects } from './app-state/app-state.effects';
import { DeliveryPointsEffects } from './entities/delivery-points/delivery-points.effects';
import { MarketEffects } from './entities/scout/scout.effects';
import { BrokersEffects } from './brokers/brokers-effects.service';
import { CropEffects } from './crop/crop.effects';
import { NotificationsEffects } from './entities/notifications/notifications.effects';
//#endregion

@NgModule({
    imports: [
        MatSnackBarModule,
        StoreModule.forRoot(reducers, {
            metaReducers,
            runtimeChecks: {
                strictStateImmutability: true,
                strictActionImmutability: true,
            },
        }),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
        EffectsModule.forRoot([
            AuthEffects,
            AppStateEffects,
            DeliveryPointsEffects,
            MarketEffects,
            CropEffects,
            NotificationsEffects,
            BrokersEffects,
        ]),
    ],
    providers: [
        {
            provide: APP_INITIALIZER,
            useFactory: (store: Store<State>) => {
                return () => {
                    store.dispatch(ReqCheckAuthorization({ executedTime: Date.now() }));
                };
            },
            multi: true,
            deps: [Store],
        },
    ],
    exports: [StoreModule, StoreDevtoolsModule, EffectsModule],
})
export class NGRXModule {}
