import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrokerDashboardComponent } from './broker-dashboard.component';

const routes: Routes = [
    {
        path: '',
        component: BrokerDashboardComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
})
export class BrokerDashboardRoutingModule {}
