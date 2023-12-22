// #region Module Imports

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LotsRoutingModule } from './lots-routing.module';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from './../shared/angular-material.module';
import { LotMatchTableModule } from './../shared/components/lot-match-table/lot-match-table.component';
import { CropCategoriesModule } from '../shared/components/crop-categories/crop-categories.component';
import { VerificationBadgeModule } from '../shared/components/verification-badge/verification-badge.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';

// #endregion

// #region Component Imports

import { LotsComponent } from './lots.component';
import { LotFormComponent } from './components/lot-form/lot-form.component';
import { LotMatchPageComponent } from './components/lot-match-page/lot-match-page.component';

// #endregion

// #region Other

import { LotEffects } from './../../core/ngrx/entities/lot/lot.effects';
import * as fromLot from './../../core/ngrx/entities/lot/index';
import { matchFeatureKey, matchReducer } from 'src/app/core/ngrx/entities/match';
import { MatchEffects } from './../../core/ngrx/entities/match/match.effects';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { DeliveryPointModule } from '../shared/components/delivery-point-modal/delivery-point-modal.component';
import { CropCategoriesPageComponent } from './components/crop-categories-page/crop-categories-page.component';

// #endregion

@NgModule({
    declarations: [LotsComponent, LotFormComponent, LotMatchPageComponent, CropCategoriesPageComponent],
    imports: [
        CommonModule,
        LotsRoutingModule,
        FormsModule,
        AngularMaterialModule,
        DeliveryPointModule,
        LotMatchTableModule,
        CropCategoriesModule,
        VerificationBadgeModule,
        StoreModule.forFeature(fromLot.lotFeatureKey, fromLot.lotReducer),
        StoreModule.forFeature(matchFeatureKey, matchReducer),
        EffectsModule.forFeature([LotEffects, MatchEffects]),
    ],
    providers: [{ provide: MAT_DATE_LOCALE, useValue: 'en-GB' }],
})
export class LotsModule {}
