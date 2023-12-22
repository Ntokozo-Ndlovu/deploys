import { SUPPORT_ROUTE } from './../../../../core/helpers/constants';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-faq',
    templateUrl: './faq.component.html',
    styleUrls: ['./faq.component.scss'],
})
export class FAQComponent implements OnInit {
    constructor(private router: Router) {}

    ngOnInit(): void {}

    handleBack() {
        this.router.navigate([SUPPORT_ROUTE]);
    }
}
