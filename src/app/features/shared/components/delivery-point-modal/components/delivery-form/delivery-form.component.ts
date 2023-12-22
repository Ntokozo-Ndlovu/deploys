import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DeliveryPoint, DeliveryPointClass } from 'src/app/core/models/queryModels';
import { NgForm } from '@angular/forms';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { catchError, map, take } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as actions from 'src/app/core/helpers/index.actions';
import { Actions, ofType } from '@ngrx/effects';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { ConfirmationModalComponent } from '../../../confirmation-modal/confirmation-modal.component';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
    selector: 'app-delivery-form',
    templateUrl: './delivery-form.component.html',
    styleUrls: ['./delivery-form.component.scss'],
})
export class DeliveryFormComponent implements OnInit {
    @Input() isLoading: boolean = false;
    @Input() isView: boolean;
    @Input() showInitial: boolean;
    @Input() fromProfile: boolean;
    @Input() deliveryPoint: DeliveryPoint;

    @Output() $closeModalEvent: EventEmitter<any> = new EventEmitter();
    @Output() $toggleIsCreateOwnEvent: EventEmitter<any> = new EventEmitter();
    @Output() $createDeliveryPointEvent: EventEmitter<DeliveryPoint> = new EventEmitter();

    options: google.maps.places.AutocompleteOptions = {
        types: ['(regions)'],
    };

    zoom: number = 4;
    markerVisibility: number = 0;

    showDeleteButton: boolean = false;
    apiLoaded:BehaviorSubject<boolean> = new BehaviorSubject(false);

    constructor(private loader:Loader,public dialog: MatDialog, private store: Store, private actions$: Actions) {}

    ngOnInit(): void {
        this.loader.importLibrary('maps')
        .then(({Map}) => {
          this.apiLoaded?.next(true);
         })
        .catch((e) => {
          // do something
        });
        if (this.deliveryPoint) {
            this.showDeleteButton = true;
            this.markerVisibility = 100;
            this.zoom = 12.5;
        } else {
            this.deliveryPoint = new DeliveryPointClass();
        }
    }

    handleBack() {
        if (this.showInitial && !this.fromProfile) {
            this.$toggleIsCreateOwnEvent.emit();
            return;
        }
        this.$closeModalEvent.emit();
    }

    handleLocationSelection($event: Address) {
        this.deliveryPoint.town = $event.formatted_address;
        this.deliveryPoint.googlePlaceId = $event.place_id;
        this.deliveryPoint.location.lat = $event.geometry.location.lat();
        this.deliveryPoint.location.lng = $event.geometry.location.lng();
        this.zoom = 12.5;
        this.markerVisibility = 100;
    }

    handleDragEnd($event: google.maps.KmlMouseEvent) {
        this.deliveryPoint.location.lat = $event.latLng.lat();
        this.deliveryPoint.location.lng = $event.latLng.lng();
    }

    handleCreateDeliveryPoint(deliveryForm: NgForm) {
        if (deliveryForm.valid && this.deliveryPoint.town && this.deliveryPoint.googlePlaceId) {
            this.deliveryPoint.town = this.deliveryPoint.town.split(',')[0];
            this.$createDeliveryPointEvent.emit(this.deliveryPoint);
        }
    }

    handleDeleteDeliveryPoint() {
        const dialogRef = this.dialog.open(ConfirmationModalComponent, {
            data: { currentAction: 'delete', currentItem: 'Delivery Point' },
            panelClass: 'g-modal-container',
        });

        dialogRef
            .afterClosed()
            .pipe(take(1))
            .subscribe((shouldDispatch) => {
                this.actions$
                    .pipe(ofType(actions.deliveryPointActions.DeleteDeliveryPointSuccess), take(1))
                    .subscribe(() => {
                        this.handleBack();
                    });

                if (shouldDispatch) {
                    this.store.dispatch(
                        actions.deliveryPointActions.ReqDeleteDeliveryPoint({
                            id: this.deliveryPoint.id,
                            executedTime: Date.now(),
                        }),
                    );
                }
            });
    }
}
