import { SupportCard } from './../../core/models/viewModels';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HOME_ROUTE, LANDING_ROUTE, SUPPORT_CARDS_DATA } from 'src/app/core/helpers/constants';
import { Location } from '@angular/common';

@Component({
    selector: 'app-support',
    templateUrl: './support.component.html',
    styleUrls: ['./support.component.scss'],
})
export class SupportComponent implements OnInit {
    cards: SupportCard[] = SUPPORT_CARDS_DATA;

    constructor(private router: Router, private location: Location) {}

    ngOnInit(): void {}

    handleNavigateToHome() {
        this.router.navigate([HOME_ROUTE]);
    }

    handleNavigate(route: string) {
        route === LANDING_ROUTE
            ? this.router.navigate([route], { queryParams: { fromSupport: true } })
            : this.router.navigate([route]);
    }
}
