import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAnalyticsModule, UserTrackingService } from '@angular/fire/compat/analytics';
import { AngularFireFunctionsModule } from '@angular/fire/compat/functions';
import { AngularFireMessagingModule } from '@angular/fire/compat/messaging';
import { environment } from '../../../environments/environment';

@NgModule({
    declarations: [],
    imports: [
        AngularFireAuthModule,
        AngularFirestoreModule,
        AngularFireAnalyticsModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule.enablePersistence(),
        AngularFireFunctionsModule,
        AngularFireMessagingModule,
    ],
    exports: [
        AngularFireAuthModule,
        AngularFirestoreModule,
        AngularFireAnalyticsModule,
        AngularFireFunctionsModule,
        AngularFireMessagingModule,
    ],
    providers: [UserTrackingService],
})
export class FirebaseModule {}
