//import { AgmCoreModule } from '@diegomvh/agm-core';

import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, NgModule, OnInit, Output } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { Broker } from 'src/app/core/models/queryModels';
import * as actions from 'src/app/core/helpers/index.actions';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as snackBarConfigs from 'src/app/core/helpers/snackbar';
import { Store } from '@ngrx/store';
import { LatLng } from 'src/app/core/models/viewModels';
import { catchError, map, take } from 'rxjs/operators';
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';
import { MatLegacySlideToggleModule as MatSlideToggleModule } from '@angular/material/legacy-slide-toggle';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
    selector: 'app-broker-info-card',
    templateUrl: './broker-info-card.component.html',
    styleUrls: ['./broker-info-card.component.scss'],
})
export class BrokerInfoCardComponent implements OnInit {
    @Input() data: Broker;
    @Input() validUntil: number;
    @Input() showMap: boolean;
    @Input() textLeft: boolean;
    @Input() showAccepted: boolean;
    @Input() toggleInputValue: boolean;
    @Output() toggleOutputValueEvent = new EventEmitter<boolean>();
    @Input() showToggle: boolean;

    user: {
        broker_data: Broker;
        location: string;
        textLeft: boolean;
        showAccepted: boolean;
        validUntil: number;
        showMap: boolean;
    };
    isLoading: boolean = false;
    coordinates: LatLng;
    apiLoaded: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    constructor(private loader:Loader,private actions$: Actions, private snackbar: MatSnackBar, private store: Store) {}

    ngOnInit(): void {
        this.loader.importLibrary('maps')
        .then(({Map}) => {
          this.apiLoaded?.next(true);
         })
        .catch((e) => {
          // do something
        });

        if (this.showMap) {
            this.isLoading = true;
            this.actions$
                .pipe(
                    take(10),
                    ofType(
                        actions.brokersActions.ReqCoordinates_ClientSuccess,
                        actions.brokersActions.ReqCoordinates_ClientFail,
                    ),
                )
                .subscribe((action) => {
                    if (action.type === actions.brokersActions.ReqCoordinates_ClientSuccess.type) {
                        this.coordinates = action.coordinates[0];
                        this.isLoading = false;
                    } else {
                        this.snackbar.open(
                            'An error occurred when trying to fetch the map. Please reload the page.',
                            'CLOSE',
                            snackBarConfigs.errorConfig,
                        );
                        this.isLoading = false;
                    }
                });

            this.store.dispatch(actions.brokersActions.ReqCoordinates_Client({ location: [this.data.location] }));
        }
        this.user = {
            broker_data: this.data,
            location: this.data.location ? this.data.location.split(',')[0] : 'No Location Found',
            textLeft: this.textLeft ? true : false,
            validUntil: this.validUntil ? this.validUntil : null,
            showMap: this.showMap ? true : false,
            showAccepted: this.showAccepted ? true : false,
        };
    }
}

@NgModule({
    declarations: [BrokerInfoCardComponent],
    imports: [
        CommonModule,
        MatProgressSpinnerModule,
        MatSlideToggleModule,
    ],
    exports: [BrokerInfoCardComponent],
})
export class BrokerInfoCardModule {}
