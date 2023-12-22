import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { AngularMaterialModule } from '../shared/angular-material.module';
import { ClearingRoutingModule } from './clearing-routing.module';

import { ClearingComponent } from './clearing.component';

import * as fromNegotiation from './../../core/ngrx/entities/negotiations/index';
import { NegotiationEffects } from './../../core/ngrx/entities/negotiations/negotiation.effects';
import { CompletedClearingCardComponent } from './components/completed-clearing-card/completed-clearing-card.component';
import { ClearingEmailModalComponent } from './components/clearing-email-modal/clearing-email-modal.component';

@NgModule({
    declarations: [ClearingComponent, CompletedClearingCardComponent, ClearingEmailModalComponent],
    imports: [
        CommonModule,
        ClearingRoutingModule,
        AngularMaterialModule,
        FormsModule,
        StoreModule.forFeature(fromNegotiation.negotiationFeatureKey, fromNegotiation.negotiationReducer),
        EffectsModule.forFeature([NegotiationEffects]),
    ],
})
export class ClearingModule {}
