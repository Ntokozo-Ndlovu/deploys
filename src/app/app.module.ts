// #region Module Imports

import { CommonModule } from '@angular/common';
import { NGRXModule } from './core/ngrx/ngrx.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FirebaseModule } from './features/shared/firebase.module.ts';
import { LoadingSpinnerModule } from './features/shared/components/loading-spinner/loading-spinner.component';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
//import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { FormsModule } from '@angular/forms';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatRippleModule } from '@angular/material/core';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';
import { ServiceWorkerModule } from '@angular/service-worker';
import { LottieModule } from 'ngx-lottie';

// #endregion

// #region Component Imports

import { AppComponent } from './app.component';
import { AdditionalInfoModalComponent } from './features/shared/components/additional-info-modal/additional-info-modal.component';
import { RefreshModalComponent } from './features/shared/components/refresh-modal/refresh-modal.component';
import { SuccessPageComponent } from './features/shared/components/success-page/success-page.component';
import { LandingComponent } from './features/landing/landing.component';
import { TransactionalRisksComponent } from './features/transactional-risks/transactional-risks.component';
import { SubscribeComponent } from './features/subscribe/subscribe.component';
import { NotificationComponent } from './features/notification/notification.component';
import { InAppPurchase2 } from '@awesome-cordova-plugins/in-app-purchase-2/ngx';
import { CategoryInfoModalComponent } from './features/shared/components/category-info-modal/category-info-modal/category-info-modal.component';

// #endregion

// #region Other Imports

import { AngularFireAuthGuard } from '@angular/fire/compat/auth-guard';
import { environment } from 'src/environments/environment.prod';
import { PaymentCheckModalComponent } from './features/shared/components/payment-check-modal/payment-check-modal.component';
import { GrainSaModalComponent } from './features/shared/components/grain-sa-modal/grain-sa-modal.component';
import { DocumentViewerComponent } from './features/shared/components/document-viewer/document-viewer.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

// #endregion
import { Loader } from '@googlemaps/js-api-loader';
import { NgxGpAutocompleteModule } from "@angular-magic/ngx-gp-autocomplete"
// #region Lottie Player

export function playerFactory() {
    return import('lottie-web');
}

// #endregion

@NgModule({
    declarations: [
        AppComponentG,
        LandingComponent,
        TransactionalRisksComponent,
        SubscribeComponent,
        AdditionalInfoModalComponent,
        RefreshModalComponent,
        SuccessPageComponent,
        NotificationComponent,
        CategoryInfoModalComponent,
        PaymentCheckModalComponent,
        GrainSaModalComponent,
        DocumentViewerComponent,
    ],
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        FirebaseModule,
        NGRXModule,
        LoadingSpinnerModule,
        HttpClientModule,
        HttpClientJsonpModule,
        //GooglePlaceModule,
        NgxGpAutocompleteModule,
        FormsModule,
        MatDialogModule,
        MatButtonModule,
        MatRippleModule,
        MatSelectModule,
        MatProgressSpinnerModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
        LottieModule.forRoot({ player: playerFactory }),
        NgxExtendedPdfViewerModule,
    ],
    exports: [//GooglePlaceModule
    NgxGpAutocompleteModule
],
    providers: [AngularFireAuthGuard,  {
        provide: Loader,
        useValue: new Loader({
          apiKey: 'AIzaSyAFaylOBsuhYPYw9YqWmhN370xTvc6DXYU',
          libraries: ['places']
        })
      },
      InAppPurchase2],
    bootstrap: [AppComponent],
})
export class AppModule {}
