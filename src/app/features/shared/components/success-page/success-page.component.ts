import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Store, select } from '@ngrx/store';
import * as fromRoot from 'src/app/features/dashboard/dashboard.selectors';
import { take } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import {
    NEGOTIATING_ROOM_ROUTE,
    NEGOTIATIONS_COMPLETED_ROUTE,
    NEGOTIATION_EDIT_ROUTE,
} from 'src/app/core/helpers/constants';
import { AnimationOptions } from 'ngx-lottie';

@Component({
    selector: 'app-success-page',
    templateUrl: './success-page.component.html',
    styleUrls: ['./success-page.component.scss'],
})
export class SuccessPageComponent implements OnInit {
    lotMatchId: number;
    hasOpposingPartySubmitted: boolean = false;

    options: AnimationOptions = {
        path: './assets/images/success-lottie.json',
        loop: false,
    };

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private location: Location,
        private store: Store<fromRoot.State>,
    ) {}

    ngOnInit(): void {
        this.route.params.pipe(take(1)).subscribe(({ id }) => {
            if (id) {
                this.lotMatchId = id;
            }
        });

        this.route.queryParams.pipe(take(1)).subscribe(({ hasOpposingPartySubmitted }) => {
            if (hasOpposingPartySubmitted) {
                this.hasOpposingPartySubmitted = true;
            }
        });
    }

    handleRouteToNegotiation() {
        this.store.pipe(select(fromRoot.matchSelectors.getNewMatchId), take(1)).subscribe((lotMatchId) => {
            if (lotMatchId) {
                this.router.navigate([`${NEGOTIATION_EDIT_ROUTE}/${lotMatchId}`], {
                    queryParams: { fromSuccess: true },
                });
            }
        });
    }

    handleContinueSwiping() {
        this.location.back();
    }

    handleNavigateToNegotiationCard() {
        this.hasOpposingPartySubmitted
            ? this.router.navigate([NEGOTIATIONS_COMPLETED_ROUTE], { queryParams: { fromSuccess: true } })
            : this.router.navigate([NEGOTIATING_ROOM_ROUTE]);
    }
}
