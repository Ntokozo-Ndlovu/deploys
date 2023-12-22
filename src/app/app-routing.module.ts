import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireAuthGuard, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';

import { LandingComponent } from './features/landing/landing.component';
import { TransactionalRisksComponent } from './features/transactional-risks/transactional-risks.component';
import { SubscribeComponent } from './features/subscribe/subscribe.component';
import { SuccessPageComponent } from './features/shared/components/success-page/success-page.component';

import { HOME_ROUTE, SIGNIN_ROUTE } from './core/helpers/constants';
import { DocumentViewerComponent } from './features/shared/components/document-viewer/document-viewer.component';

const redirectLoggedInToHome = () => redirectLoggedInTo([HOME_ROUTE]);
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo([SIGNIN_ROUTE]);

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'landing',
        component: LandingComponent,
    },
    {
        path: 'onboarding',
        loadChildren: () => import('./features/onboarding/onboarding.module').then((m) => m.OnboardingModule),
    },
    {
        path: 'scouts',
        loadChildren: () => import('./features/scouts/scouts.module').then((m) => m.ScoutsModule),
    },
    {
        path: 'authentication',
        canActivate: [AngularFireAuthGuard],
        data: { authGuardPipe: redirectLoggedInToHome },
        loadChildren: () =>
            import('./features/authentication/authentication.module').then((m) => m.AuthenticationModule),
    },
    {
        path: 'transactional-risk',
        component: TransactionalRisksComponent,
    },
    {
        path: 'subscribe',
        component: SubscribeComponent,
    },
    {
        path: 'document/:name',
        component: DocumentViewerComponent,
    },
    {
        path: 'home',
        canActivate: [AngularFireAuthGuard],
        data: { authGuardPipe: redirectUnauthorizedToLogin },
        loadChildren: () => import('./features/home/home.module').then((m) => m.HomeModule),
    },
    {
        path: 'support',
        loadChildren: () => import('./features/support/support.module').then((m) => m.SupportModule),
    },
    {
        path: 'dashboard',
        canActivate: [AngularFireAuthGuard],
        data: { authGuardPipe: redirectUnauthorizedToLogin },
        loadChildren: () => import('./features/dashboard/dashboard.module').then((m) => m.DashboardModule),
    },
    {
        path: 'clearing',
        canActivate: [AngularFireAuthGuard],
        data: { authGuardPipe: redirectUnauthorizedToLogin },
        loadChildren: () => import('./features/clearing/clearing.module').then((m) => m.ClearingModule),
    },
    {
        path: 'lots',
        canActivate: [AngularFireAuthGuard],
        data: { authGuardPipe: redirectUnauthorizedToLogin },
        loadChildren: () => import('./features/lots/lots.module').then((m) => m.LotsModule),
    },
    {
        path: 'success',
        canActivate: [AngularFireAuthGuard],
        data: { authGuardPipe: redirectUnauthorizedToLogin },
        component: SuccessPageComponent,
    },
    {
        path: 'success/:id',
        canActivate: [AngularFireAuthGuard],
        data: { authGuardPipe: redirectUnauthorizedToLogin },
        component: SuccessPageComponent,
    },
    {
        path: 'negotiations',
        canActivate: [AngularFireAuthGuard],
        data: { authGuardPipe: redirectUnauthorizedToLogin },
        loadChildren: () => import('./features/negotiations/negotiations.module').then((m) => m.NegotiationsModule),
    },
    {
        path: 'broker-dashboard',
        canActivate: [AngularFireAuthGuard],
        data: { authGuardPipe: redirectUnauthorizedToLogin },
        loadChildren: () =>
            import('./features/broker-dashboard/broker-dashboard.module').then((m) => m.BrokerDashboardModule),
    },
    {
        path: '**',
        redirectTo: 'home',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {})],
    exports: [RouterModule],
})
export class AppRoutingModule {}
