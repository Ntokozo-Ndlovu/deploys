import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnboardingComponent } from './onboarding.component';
import { OnboardingRoutingModule } from './onboarding-routing.module';
import { StepperComponent } from './components/stepper/stepper.component';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';

@NgModule({
    declarations: [OnboardingComponent, StepperComponent],
    imports: [CommonModule, OnboardingRoutingModule, MatButtonModule],
})
export class OnboardingModule {}
