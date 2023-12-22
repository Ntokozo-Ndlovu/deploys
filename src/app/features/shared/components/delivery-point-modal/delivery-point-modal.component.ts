import { Component, EventEmitter, Inject, NgModule, OnInit } from '@angular/core';
import { MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { ActivatedRoute, Router } from '@angular/router';

import * as fromRoot from 'src/app/core/ngrx/reducers/index';
import * as actions from 'src/app/core/helpers/index.actions';

import { Actions, ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { take, takeUntil } from 'rxjs/operators';

import { CreateDeliveryPointSuccess } from 'src/app/core/ngrx/entities/delivery-points/delivery-points.actions';

import { Client, DeliveryPoint } from 'src/app/core/models/queryModels';
import { DeliveryInitialComponent } from './components/delivery-initial/delivery-initial.component';
import { DeliveryFormComponent } from './components/delivery-form/delivery-form.component';
import { MatLegacyAutocompleteModule as MatAutocompleteModule } from '@angular/material/legacy-autocomplete';
import { CommonModule } from '@angular/common';
//import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
//import { AgmCoreModule } from '@diegomvh/agm-core';
import { FormsModule } from '@angular/forms';
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';
import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox';
import { brokersSelectors } from '../../../../core/ngrx/brokers';
import { GoogleMapsModule } from '@angular/google-maps';
import { NgxGpAutocompleteModule } from '@angular-magic/ngx-gp-autocomplete';

@Component({
    selector: 'app-delivery-point-modal',
    templateUrl: './delivery-point-modal.component.html',
    styleUrls: ['./delivery-point-modal.component.scss'],
})
export class DeliveryPointModalComponent implements OnInit {
    userDeliveryPoints: DeliveryPoint[];
    publicDeliveryPoints: DeliveryPoint[];
    deliveryPointId: number;
    viewableDeliveryPoint: DeliveryPoint;

    isView: boolean;
    hidePublicDeliveryPoints: boolean = false;

    isCreateOwn: boolean = false;
    showInitial: boolean = true;
    fromProfile: boolean = false;
    isLoading: boolean = true;

    client: Client;

    destroyed$: EventEmitter<void> = new EventEmitter<void>();

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private store: Store<fromRoot.State>,
        private actions$: Actions,
        private dialogRef: MatDialogRef<DeliveryPointModalComponent>,
        @Inject(MAT_DIALOG_DATA)
        public data: {
            deliveryPointId: number;
            showInitial: boolean;
            isView: boolean;
            fromProfile: boolean;
            hidePublicDeliveryPoints: boolean;
        },
    ) {
        this.deliveryPointId = this.data.deliveryPointId;
        this.showInitial = this.data.showInitial;
        this.isView = this.data.isView;
        this.fromProfile = this.data.fromProfile;
        this.hidePublicDeliveryPoints = this.data.hidePublicDeliveryPoints;
    }

    ngOnInit(): void {
        this.selectClient();

        this.route.queryParams.pipe(take(1)).subscribe((params) => {
            this.isCreateOwn = params.isCreateOwn === 'true';
        });

        this.store
            .pipe(select(fromRoot.deliveryPointsSelectors.getManageDeliveryPointDetails), takeUntil(this.destroyed$))
            .subscribe(({ userDeliveryPoints, publicDeliveryPoints }) => {
                this.userDeliveryPoints = userDeliveryPoints;
                this.publicDeliveryPoints = publicDeliveryPoints;
                if (this.deliveryPointId) {
                    this.viewableDeliveryPoint = this.userDeliveryPoints.find(
                        (deliveryPoint) => deliveryPoint.id === this.deliveryPointId,
                    );
                }
                if (userDeliveryPoints.length) this.showInitial = true;
                this.isLoading = false;
            });

        if (!this.userDeliveryPoints?.length || !this.publicDeliveryPoints?.length) {
            this.store.dispatch(actions.deliveryPointActions.ReqManagementData({ executedTime: Date.now() }));
        }
    }

    ngOnDestroy(): void {
        this.destroyed$.next();
    }

    handleCloseModal(selectedDeliveryPointId: number) {
        this.dialogRef.close(selectedDeliveryPointId);
    }

    handleToggleIsCreateOwn() {
        this.isCreateOwn = !this.isCreateOwn;
        this.updateQueryParamsHelper();
    }

    handleCreateDeliveryPoint(deliveryPointData: DeliveryPoint) {
        this.isLoading = true;
        const clientUid: string = this.client ? this.client.uid : '';

        this.actions$.pipe(ofType(CreateDeliveryPointSuccess), take(1)).subscribe((payload) => {
            if (payload) {
                this.handleCloseModal(payload.deliveryPoint.id);
                this.handleToggleIsCreateOwn();
                this.isLoading = false;
            }
        });

        this.store.dispatch(
            actions.deliveryPointActions.ReqCreateDeliveryPoint({
                deliveryPoint: deliveryPointData,
                executedTime: Date.now(),
                clientUid: clientUid,
            }),
        );
    }

    updateQueryParamsHelper() {
        let queryParams = this.isCreateOwn ? { isCreateOwn: this.isCreateOwn } : {};
        this.router.navigate([], {
            relativeTo: this.route,
            queryParams,
            replaceUrl: true,
        });
    }

    selectClient(): void {
        this.store
            .select(brokersSelectors.getCurrentClient)
            .pipe(takeUntil(this.destroyed$))
            .subscribe((client: Client) => {
                this.client = client;
            });
    }
}

@NgModule({
    declarations: [DeliveryPointModalComponent, DeliveryInitialComponent, DeliveryFormComponent],
    imports: [
        CommonModule,
        FormsModule,
        MatAutocompleteModule,
        MatProgressSpinnerModule,
        MatCheckboxModule,
       // GooglePlaceModule,
       NgxGpAutocompleteModule, 
       GoogleMapsModule
        /*
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyAPz_4c60V_PBTnACgcWOz2nVPKpyN8DT8',
        }),*/
    ],
    exports: [DeliveryPointModalComponent, DeliveryInitialComponent, DeliveryFormComponent],
})
export class DeliveryPointModule {}
