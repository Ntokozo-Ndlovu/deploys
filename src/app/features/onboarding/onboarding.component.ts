import { take } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { onboardingContent, SCOUT_CREATE_ROUTE, SUBSCRIBE_ROUTE } from 'src/app/core/helpers/constants';
import { StepperData } from 'src/app/core/models/viewModels';

@Component({
    selector: 'app-onboarding',
    templateUrl: './onboarding.component.html',
    styleUrls: ['./onboarding.component.scss'],
})
export class OnboardingComponent implements OnInit {
    onboardingContents: StepperData[] = onboardingContent;

    fromSupport: boolean = false;
    stepperIndex: number = 0;

    showAnimation: boolean = false;

    constructor(private route: ActivatedRoute, private router: Router) {}

    ngOnInit(): void {
        this.route.queryParams.pipe(take(1)).subscribe(({ stepperIndex, fromSupport }) => {
            if (stepperIndex) {
                this.stepperIndex = +stepperIndex;
            }
            if (fromSupport === 'true') {
                this.fromSupport = true;
            }
        });
    }

    handleProgressNext() {
        if (this.stepperIndex === this.onboardingContents.length - 1) {
            this.router.navigate([SUBSCRIBE_ROUTE], { queryParams: { fromSupport: this.fromSupport } });
        } else {
            this.showAnimation = true;
            setTimeout(() => {
                this.showAnimation = false;
            }, 500);
            this.stepperIndex += 1;
            this.updateQueryParamsHelper();
        }
    }

    handleNavigateCreateScout() {
        this.router.navigate([SCOUT_CREATE_ROUTE]);
    }

    updateQueryParamsHelper() {
        const queryParams = this.fromSupport
            ? { fromSupport: this.fromSupport, stepperIndex: this.stepperIndex }
            : { stepperIndex: this.stepperIndex };
        this.router.navigate([], {
            relativeTo: this.route,
            queryParams,
            replaceUrl: true,
        });
    }
}
