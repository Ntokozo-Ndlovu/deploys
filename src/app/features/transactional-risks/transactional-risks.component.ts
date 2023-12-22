import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { ONBOARDING_ROUTE, SCOUT_CREATE_ROUTE } from './../../core/helpers/constants';

@Component({
    selector: 'app-transactional-risks',
    templateUrl: './transactional-risks.component.html',
    styleUrls: ['./transactional-risks.component.scss'],
})
export class TransactionalRisksComponent implements OnInit {
  fromSupport: boolean = false;
    constructor(private route: ActivatedRoute, private router: Router) {}

    ngOnInit(): void {
      this.route.queryParams.pipe(take(1)).subscribe(({ fromSupport }) => {
        if (fromSupport === 'true') this.fromSupport = true;
      });
    }

    handleNavigateToOnboarding() {
        this.router.navigate([ONBOARDING_ROUTE], { queryParams: { fromSupport: this.fromSupport } });
    }

    handleNavigateCreateScout() {
        this.router.navigate([SCOUT_CREATE_ROUTE]);
    }
}
