import { Component, Inject, OnInit } from '@angular/core';
import { MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { GPSCoordinates } from 'src/app/core/models/queryModels';
import { cloneDeep } from 'lodash';
import { BehaviorSubject, Observable, catchError, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
    selector: 'app-location-modal',
    templateUrl: './location-modal.component.html',
    styleUrls: ['./location-modal.component.scss'],
})
export class LocationModalComponent implements OnInit {
    town: string = '';
    gpsCoordinates: GPSCoordinates = {
        lat: -30.5595,
        lng: 22.9375,
    };

    options: google.maps.places.AutocompleteOptions = {
        types: ['(regions)'],
    };
    zoom: number = 6;

    locationHasBeenSelected: boolean = false;

    apiLoaded: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    constructor(private loader:Loader,
        private dialogRef: MatDialogRef<LocationModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: { town: string; gpsCoordinates: GPSCoordinates },
    ) {
        this.town = this.data.town;
        if (this.town) {
            this.locationHasBeenSelected = true;
            this.zoom = 15;
        }
        this.gpsCoordinates = cloneDeep(this.data.gpsCoordinates);
    }

    ngOnInit(): void {
        this.loader.importLibrary('maps')
        .then(({Map}) => {
          this.apiLoaded?.next(true);
         })
        .catch((e) => {
          // do something
        });
    }

    // #region Handlers

    handleClose(): void {
        this.dialogRef.close();
    }

    handleSelectLocation($event: Address) {
        this.town = $event.formatted_address;
        this.gpsCoordinates.lat = $event.geometry.location.lat();
        this.gpsCoordinates.lng = $event.geometry.location.lng();
        this.zoom = 15;
        this.locationHasBeenSelected = true;
    }

    handleDragEnd($event) {
        this.gpsCoordinates.lat = $event.latLng.lat();
        this.gpsCoordinates.lng = $event.latLng.lng();
    }

    handleCloseWithGPSCoordinates(): void {
        this.dialogRef.close({ town: this.town, gpsCoordinates: this.gpsCoordinates });
    }

    // #endregion
}
