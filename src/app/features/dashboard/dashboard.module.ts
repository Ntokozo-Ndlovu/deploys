// #region Module Imports

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from './../shared/angular-material.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DeliveryPointModule } from '../shared/components/delivery-point-modal/delivery-point-modal.component';
import { VerificationBadgeModule } from '../shared/components/verification-badge/verification-badge.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
//import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { BrokerInfoCardModule } from '../shared/components/broker-info-card/broker-info-card.component';

// #endregion

// #region Component Imports

import { DashboardComponent } from './dashboard.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { ScoutComponent } from './components/scout/scout.component';
import { LotComponent } from './components/lot/lot.component';
import { NegotiationsComponent } from './components/negotiations/negotiations.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DashboardHeaderComponent } from './components/dashboard-header/dashboard-header.component';
import { ScoutCardComponent } from './components/scout-card/scout-card.component';
import { LotCardComponent } from './components/lot-card/lot-card.component';
import { CompletedComponent } from './components/completed/completed.component';
import { NegotiationCardComponent } from './components/negotiation-card/negotiation-card.component';
import { SkuduAnalyticsModalComponent } from './components/skudu-analytics-modal/skudu-analytics-modal.component';
import { LotsAnalyticsModalComponent } from './components/lot-analytics-modal/lots-analytics-modal.component';
import { VerificationModalComponent } from './components/verification-modal/verification-modal.component';
import { ExpiredLotPeriodModalComponent } from './components/expired-lot-period-modal/expired-lot-period-modal.component';
import { BrowseTheMarketComponent } from './components/browse-the-market/browse-the-market.component';
import { FilterTheMarketModalComponent } from './components/browse-the-market/components/filter-the-market-modal/filter-the-market-modal.component';
import { PremiumFeatureModalComponent } from '../premium-feature-modal/premium-feature-modal.component';
import { MarketLotCardComponent } from './components/browse-the-market/components/market-lot-card/market-lot-card.component';
import { DuplicateScoutModalComponent } from './components/browse-the-market/components/duplicate-scout-modal/duplicate-scout-modal.component';
import { LocationModalComponent } from './components/browse-the-market/components/location-modal/location-modal.component';

// #endregion

// #region Other

import { NegotiationEffects } from './../../core/ngrx/entities/negotiations/negotiation.effects';
import { MatchEffects } from './../../core/ngrx/entities/match/match.effects';
import { LotEffects } from './../../core/ngrx/entities/lot/lot.effects';
import { MarketEffects } from './../../core/ngrx/market/market.effects';
import { BrokersEffects } from '../../core/ngrx/brokers/brokers-effects.service';
import * as fromLot from './../../core/ngrx/entities/lot/index';
import * as fromMatch from './../../core/ngrx/entities/match/index';
import * as fromNegotiation from './../../core/ngrx/entities/negotiations/index';
import * as fromMarket from './../../core/ngrx/market/index';
//import { AgmCoreModule } from '@diegomvh/agm-core';

import { GoogleMap, GoogleMapsModule} from '@angular/google-maps';

import { NavigateToScoutModalComponent } from './components/navigate-to-scout-modal/navigate-to-scout-modal.component';
import { DeleteAccountModalComponent } from './components/delete-account-modal/delete-account-modal.component';
import { BrokersComponent } from './components/agents/brokers.component';
import { HowItWorksModalComponent } from './components/agents/components/how-it-works-modal/how-it-works-modal.component';
import { UpdateInfoModalComponent } from './components/agents/components/update-info-modal/update-info-modal.component';
import { RequestBrokerModalComponent } from './components/agents/components/request-broker-modal/request-broker-modal.component';
import { BrokerRequestsComponent } from './components/agents/components/broker-requests/broker-requests.component';
import { PendingRequestModalComponent } from './components/agents/components/pending-request-modal/pending-request-modal.component';
import { ConfirmBrokerAdminPermissionComponent } from './components/agents/components/confirm-broker-admin-permission/confirm-broker-admin-permission.component';
import { NgxGpAutocompleteModule } from '@angular-magic/ngx-gp-autocomplete';

// #endregion

@NgModule({
    declarations: [
        DashboardComponent,
        MainNavComponent,
        ScoutComponent,
        LotComponent,
        NegotiationsComponent,
        ProfileComponent,
        DashboardHeaderComponent,
        ScoutCardComponent,
        LotCardComponent,
        NegotiationCardComponent,
        CompletedComponent,
        ScoutComponent,
        LotComponent,
        SkuduAnalyticsModalComponent,
        LotsAnalyticsModalComponent,
        VerificationModalComponent,
        ExpiredLotPeriodModalComponent,
        BrowseTheMarketComponent,
        FilterTheMarketModalComponent,
        PremiumFeatureModalComponent,
        MarketLotCardComponent,
        DuplicateScoutModalComponent,
        LocationModalComponent,
        NavigateToScoutModalComponent,
        DeleteAccountModalComponent,
        BrokersComponent,
        HowItWorksModalComponent,
        UpdateInfoModalComponent,
        RequestBrokerModalComponent,
        BrokerRequestsComponent,
        PendingRequestModalComponent,
        ConfirmBrokerAdminPermissionComponent,
    ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        AngularMaterialModule,
        FormsModule,
        NgxGpAutocompleteModule,
        DeliveryPointModule,
        VerificationBadgeModule,
     //   GooglePlaceModule,
        BrokerInfoCardModule,
        StoreModule.forFeature(fromLot.lotFeatureKey, fromLot.lotReducer),
        StoreModule.forFeature(fromMatch.matchFeatureKey, fromMatch.matchReducer),
        StoreModule.forFeature(fromNegotiation.negotiationFeatureKey, fromNegotiation.negotiationReducer),
        StoreModule.forFeature(fromMarket.marketFeatureKey, fromMarket.marketReducer),
        EffectsModule.forFeature([LotEffects, MatchEffects, NegotiationEffects, MarketEffects, BrokersEffects]),
        ScrollingModule,
        GoogleMapsModule
       /*
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyAPz_4c60V_PBTnACgcWOz2nVPKpyN8DT8',
            libraries: ['geometry'],
        })*/
    ],
})
export class DashboardModule {}
