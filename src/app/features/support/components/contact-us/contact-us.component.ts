import { SUPPORT_ROUTE } from './../../../../core/helpers/constants';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, map, of } from 'rxjs';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
    selector: 'app-contact-us',
    templateUrl: './contact-us.component.html',
    styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
    skuduOfficeCoordinates: { lat: number; lng: number } = { lat: -33.7317975, lng: 18.9642491 };
    apiLoaded:BehaviorSubject<boolean> = new BehaviorSubject(false);
    constructor(private loader:Loader,private router: Router) {}

    ngOnInit(): void {
        this.loader.importLibrary('maps')
        .then(({Map}) => {
          this.apiLoaded?.next(true);
         })
        .catch((e) => {
          // do something
        });
    }

    handleBack() {
        this.router.navigate([SUPPORT_ROUTE]);
    }
}
