import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { TRANSACTIONAL_RISK_ROUTE, SCOUT_CREATE_ROUTE } from './../../core/helpers/constants';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
    fromSupport: boolean = false;
    constructor(private route: ActivatedRoute, private router: Router) {}

    ngOnInit(): void {
        this.route.queryParams.pipe(take(1)).subscribe(({ fromSupport }) => {
          if (fromSupport === 'true') this.fromSupport = true;
        });
    }

    handleNavigateToTransactionalRisk() {
        this.router.navigate([TRANSACTIONAL_RISK_ROUTE], { queryParams: { fromSupport: this.fromSupport } });
    }

    handleNavigateCreateScout() {
        this.router.navigate([SCOUT_CREATE_ROUTE]);
    }
}
