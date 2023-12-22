import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClearingComponent } from './clearing.component';

const routes: Routes = [
    {
        path: '',
        component: ClearingComponent,
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ClearingRoutingModule {}
