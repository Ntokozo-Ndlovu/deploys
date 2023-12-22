import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NegotiationsComponent } from './components/negotiations/negotiations.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CompletedComponent } from './components/completed/completed.component';
import { ScoutComponent } from './components/scout/scout.component';
import { LotComponent } from './components/lot/lot.component';
import { BrowseTheMarketComponent } from './components/browse-the-market/browse-the-market.component';
import { BrokersComponent } from './components/agents/brokers.component';
import { BrokerRequestsComponent } from './components/agents/components/broker-requests/broker-requests.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            { path: '', redirectTo: 'scouts', pathMatch: 'full' },
            { path: 'profile', component: ProfileComponent },
            { path: 'scouts', component: ScoutComponent },
            { path: 'lots', component: LotComponent },
            { path: 'negotiations', component: NegotiationsComponent },
            { path: 'completed', component: CompletedComponent },
            { path: 'browse', component: BrowseTheMarketComponent },
            { path: 'brokers', component: BrokersComponent },
            { path: 'requested', component: BrokerRequestsComponent },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DashboardRoutingModule {}
