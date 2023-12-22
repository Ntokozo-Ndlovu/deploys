// #region Module Imports

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NegotiationsRoutingModule } from './negotiations-routing.module';
import { AngularMaterialModule } from './../shared/angular-material.module';
import { FormsModule } from '@angular/forms';
import { LotMatchTableModule } from '../shared/components/lot-match-table/lot-match-table.component';
//import { AgmCoreModule } from '@diegomvh/agm-core';
//import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { SubmitMatchModule } from '../shared/components/submit-match/submit-match.component';
import { VerificationBadgeModule } from '../shared/components/verification-badge/verification-badge.component';

// #endregion

// #region Component Imports

import { NegotiationsComponent } from './negotiations.component';
import { NegotiationPageComponent } from './components/negotiation-page/negotiation-page.component';
import { NegotiationEditModalComponent } from './components/negotiation-edit-modal/negotiation-edit-modal.component';
import { NegotiationUpdateModalComponent } from './components/negotiation-update-modal/negotiation-update-modal.component';

// #endregion

// #region Other

import { NegotiationEffects } from './../../core/ngrx/entities/negotiations/negotiation.effects';
import { lotFeatureKey, lotReducer } from 'src/app/core/ngrx/entities/lot';
import { matchFeatureKey, matchReducer } from 'src/app/core/ngrx/entities/match';
import { negotiationFeatureKey, negotiationReducer } from 'src/app/core/ngrx/entities/negotiations';
import { MatchEffects } from 'src/app/core/ngrx/entities/match/match.effects';
import { LotEffects } from 'src/app/core/ngrx/entities/lot/lot.effects';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { NgxGpAutocompleteModule } from '@angular-magic/ngx-gp-autocomplete';

// #endregion

@NgModule({
    declarations: [
        NegotiationsComponent,
        NegotiationPageComponent,
        NegotiationEditModalComponent,
        NegotiationUpdateModalComponent,
    ],
    imports: [
        CommonModule,
        NegotiationsRoutingModule,
        AngularMaterialModule,
        FormsModule,
        LotMatchTableModule,
        SubmitMatchModule,
        VerificationBadgeModule,
        StoreModule.forFeature(lotFeatureKey, lotReducer),
        StoreModule.forFeature(matchFeatureKey, matchReducer),
        StoreModule.forFeature(negotiationFeatureKey, negotiationReducer),
        EffectsModule.forFeature([LotEffects, MatchEffects, NegotiationEffects]),
        /*
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyAPz_4c60V_PBTnACgcWOz2nVPKpyN8DT8',
        }),*/
        GoogleMapsModule,
       // GooglePlaceModule,
        NgxGpAutocompleteModule
    ],
    providers: [{ provide: MAT_DATE_LOCALE, useValue: 'en-GB' }],
})
export class NegotiationsModule {}
