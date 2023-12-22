import { SUPPORT_ROUTE } from './../../../../core/helpers/constants';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-know-your-counter-party',
    templateUrl: './know-your-counter-party.component.html',
    styleUrls: ['./know-your-counter-party.component.scss'],
})
export class KnowYourCounterPartyComponent implements OnInit {
    constructor(private router: Router) {}

    ngOnInit(): void {}

    handleBack() {
        this.router.navigate([SUPPORT_ROUTE]);
    }
}
