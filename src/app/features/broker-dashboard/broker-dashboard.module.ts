import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrokerDashboardComponent } from './broker-dashboard.component';
import { BrokerDashboardRoutingModule } from './broker-dashboard-routing.module';
import { HomeModule } from '../home/home.module';
import { BrokerMainNavComponent } from './components/broker-main-nav/broker-main-nav.component';
import { BrokerToolbarComponent } from './components/broker-toolbar/broker-toolbar.component';
import { AngularMaterialModule } from '../shared/angular-material.module';
import { FormsModule } from '@angular/forms';
import { AddNewClientModalComponent } from './components/add-new-client-modal/add-new-client-modal.component';
import { RequestSentModalComponent } from './components/request-sent-modal/request-sent-modal.component';
import { BrokerInfoCardModule } from '../shared/components/broker-info-card/broker-info-card.component';
import { ConfirmationModalComponent } from './components/confirmation-modal/confirmation-modal.component';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';

@NgModule({
    declarations: [
        BrokerDashboardComponent,
        BrokerMainNavComponent,
        BrokerToolbarComponent,
        AddNewClientModalComponent,
        RequestSentModalComponent,
        ConfirmationModalComponent,
    ],
    imports: [
        CommonModule,
        AngularMaterialModule,
        BrokerDashboardRoutingModule,
        HomeModule,
        FormsModule,
        BrokerInfoCardModule,
        MatDialogModule,
    ],
})
export class BrokerDashboardModule {}
