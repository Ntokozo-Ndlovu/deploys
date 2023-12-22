// #region Module Imports

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
//import { AgmCoreModule } from '@diegomvh/agm-core';
import { MatRippleModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { SupportRoutingModule } from './support-routing.module';
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';

// #endregion

// #region Component Imports

import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FAQComponent } from './components/faq/faq.component';
import { SupportComponent } from './support.component';
import { KnowYourCounterPartyComponent } from './components/know-your-counter-party/know-your-counter-party.component';
import { DetailedTutorialComponent } from './components/detailed-tutorial/detailed-tutorial.component';
import { VerificationComponent } from './components/verification/verification.component';
import { VerificationCardComponent } from './components/verification/verification-card/verification-card.component';
import { SubscriptionTypeModalComponent } from './components/verification/subscription-type-modal/subscription-type-modal.component';
import { EffectsModule } from '@ngrx/effects';
import { PaygateEffects } from '../../core/ngrx/paygate/paygate.effects';
import { NotVerifiedModalComponent } from './components/verification/not-verified-modal/not-verified-modal.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { NgxGpAutocompleteModule } from '@angular-magic/ngx-gp-autocomplete';

// #endregion

@NgModule({
    declarations: [
        SupportComponent,
        FAQComponent,
        ContactUsComponent,
        KnowYourCounterPartyComponent,
        DetailedTutorialComponent,
        VerificationComponent,
        VerificationCardComponent,
        SubscriptionTypeModalComponent,
        NotVerifiedModalComponent,
    ],
    imports: [
        CommonModule,
        SupportRoutingModule,/*
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyAPz_4c60V_PBTnACgcWOz2nVPKpyN8DT8',
        }),*/
        GoogleMapsModule,
        NgxGpAutocompleteModule,
       // GooglePlaceModule,
        MatRippleModule,
        MatExpansionModule,
        MatProgressSpinnerModule,
        EffectsModule.forFeature([PaygateEffects]),
    ],
})
export class SupportModule {}
