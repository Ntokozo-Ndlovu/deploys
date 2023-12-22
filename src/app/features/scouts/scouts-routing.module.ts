import { FineTuneComponent } from './components/fine-tune/fine-tune.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScoutsComponent } from './scouts.component';
import { ScoutsFormComponent } from './components/scouts-form/scouts-form.component';
import { ScoutsSearchResultsComponent } from './components/scouts-search-results/scouts-search-results.component';
import { ScoutsEditFormComponent } from './components/scouts-edit-form/scouts-edit-form.component';

const routes: Routes = [
    {
        path: '',
        component: ScoutsComponent,
        children: [
            { path: '', redirectTo: 'create', pathMatch: 'full' },
            { path: 'create', component: ScoutsFormComponent },
            { path: 'edit/:id', component: ScoutsEditFormComponent },
            { path: 'search-results', component: ScoutsSearchResultsComponent },
            { path: 'fine-tune', component: FineTuneComponent },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ScoutsRoutingModule {}
