import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NegotiationsComponent } from './negotiations.component';
import { NegotiationPageComponent } from './components/negotiation-page/negotiation-page.component';

const routes: Routes = [
    {
        path: '',
        component: NegotiationsComponent,
        children: [
            { path: 'edit/:id', component: NegotiationPageComponent },
            { path: 'view/:id', component: NegotiationPageComponent },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class NegotiationsRoutingModule {}
