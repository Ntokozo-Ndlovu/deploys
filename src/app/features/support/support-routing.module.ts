import { DetailedTutorialComponent } from './components/detailed-tutorial/detailed-tutorial.component';
import { KnowYourCounterPartyComponent } from './components/know-your-counter-party/know-your-counter-party.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FAQComponent } from './components/faq/faq.component';
import { SupportComponent } from './support.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VerificationComponent } from './components/verification/verification.component';

import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';
import { SIGNIN_ROUTE } from 'src/app/core/helpers/constants';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo([SIGNIN_ROUTE]);

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                canActivate: [AngularFireAuthGuard],
                data: { authGuardPipe: redirectUnauthorizedToLogin },
                component: SupportComponent,
            },
            {
                path: 'FAQs',
                canActivate: [AngularFireAuthGuard],
                data: { authGuardPipe: redirectUnauthorizedToLogin },
                component: FAQComponent,
            },
            {
                path: 'contact-us',
                canActivate: [AngularFireAuthGuard],
                data: { authGuardPipe: redirectUnauthorizedToLogin },
                component: ContactUsComponent,
            },
            {
                path: 'kyc-party',
                canActivate: [AngularFireAuthGuard],
                data: { authGuardPipe: redirectUnauthorizedToLogin },
                component: KnowYourCounterPartyComponent,
            },
            {
                path: 'detailed-tutorial',
                canActivate: [AngularFireAuthGuard],
                data: { authGuardPipe: redirectUnauthorizedToLogin },
                component: DetailedTutorialComponent,
            },
            { path: 'verification', component: VerificationComponent },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SupportRoutingModule {}
