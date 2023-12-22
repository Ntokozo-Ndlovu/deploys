// #region Module Imports

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from './../shared/angular-material.module';
import { ScoutsRoutingModule } from './scouts-routing.module';
//import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
//import { AgmCoreModule } from '@diegomvh/agm-core';
import { CropCategoriesModule } from '../shared/components/crop-categories/crop-categories.component';

// #endregion

// #region Component Imports

import { ScoutsComponent } from './scouts.component';
import { ScoutsFormComponent } from './components/scouts-form/scouts-form.component';
import { ScoutsSearchResultsComponent } from './components/scouts-search-results/scouts-search-results.component';
import { FineTuneComponent } from './components/fine-tune/fine-tune.component';
import { ScoutsEditFormComponent } from './components/scouts-edit-form/scouts-edit-form.component';
import { ConfirmationComponentModule } from '../shared/components/confirmation-modal/confirmation-modal.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { NgxGpAutocompleteModule } from '@angular-magic/ngx-gp-autocomplete';

// #endregion

@NgModule({
    declarations: [
        ScoutsComponent,
        ScoutsFormComponent,
        ScoutsSearchResultsComponent,
        FineTuneComponent,
        ScoutsEditFormComponent,
    ],
    imports: [
        CommonModule,
        ScoutsRoutingModule,
        FormsModule,
        ConfirmationComponentModule,
        CropCategoriesModule,
        AngularMaterialModule,
      //  GooglePlaceModule,
      NgxGpAutocompleteModule,
        GoogleMapsModule
        /*
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyAPz_4c60V_PBTnACgcWOz2nVPKpyN8DT8',
        }),*/
    ],
})
export class ScoutsModule {}
