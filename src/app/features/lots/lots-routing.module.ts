import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LotsComponent } from './lots.component';
import { LotFormComponent } from './components/lot-form/lot-form.component';
import { LotMatchPageComponent } from './components/lot-match-page/lot-match-page.component';
import { CropCategoriesPageComponent } from './components/crop-categories-page/crop-categories-page.component';

const routes: Routes = [
    {
        path: '',
        component: LotsComponent,
        children: [
            { path: '', redirectTo: 'crop-categories', pathMatch: 'full' },
            { path: 'crop-categories', component: CropCategoriesPageComponent },
            { path: 'create', component: LotFormComponent },
            { path: 'edit/:id', component: LotFormComponent },
            { path: 'lot-match/:id', component: LotMatchPageComponent },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LotsRoutingModule {}
