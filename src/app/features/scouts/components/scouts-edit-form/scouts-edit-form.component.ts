// #region Angular Imports

import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

// #endregion

// #region NgRx Imports

import { selectCropByCategories } from './../../../../core/ngrx/crop/crop.selectors';
import { Store, select } from '@ngrx/store';
import * as fromRoot from 'src/app/core/ngrx/reducers/index';
import * as actions from 'src/app/core/helpers/index.actions';
import { Actions, ofType } from '@ngrx/effects';

// #endregion

// #region RxJs Imports

import { catchError, map, take, takeUntil } from 'rxjs/operators';
import { BehaviorSubject, Observable, Subject, of } from 'rxjs';

// #endregion

// #region Interface, Class & Constant Imports

import { Scout, ScoutClass, ScoutType, IdName, DeliveryPoint, FineTune, Client } from 'src/app/core/models/queryModels';
import { bbbeeRating } from 'src/app/core/models/viewModels';
import { SCOUTS_ROUTE, ratingData } from 'src/app/core/helpers/constants';
import { Address } from 'ngx-google-places-autocomplete/objects/address';

// #endregion

// #region Other Imports

import { cloneDeep } from 'lodash';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { ConfirmationModalComponent } from 'src/app/features/shared/components/confirmation-modal/confirmation-modal.component';
import { brokersSelectors } from '../../../../core/ngrx/brokers';
import { HttpClient } from '@angular/common/http';
import { Loader } from '@googlemaps/js-api-loader';

// #endregion

@Component({
    selector: 'app-scouts-edit-form',
    templateUrl: './scouts-edit-form.component.html',
    styleUrls: ['./scouts-edit-form.component.scss'],
})
export class ScoutsEditFormComponent implements OnInit, OnDestroy {
    scout: Scout = new ScoutClass();
    fineTune: FineTune = new FineTune();

    scoutId: number;
    cropCategory: IdName;
    ratingData: bbbeeRating[] = ratingData;

    searchTerm: string = '';
    publicDeliveryPoints: DeliveryPoint[] = [];
    filteredDeliveryPoints: DeliveryPoint[] = [];
    options: google.maps.places.AutocompleteOptions = {
        types: ['(regions)'],
    };
    zoom: number = 4;

    isLoading: boolean = true;
    hasBeenEdited: boolean = false;
    hasActionDispatched: boolean = false;

    client: Client;

    destroyed$: EventEmitter<void> = new EventEmitter<void>();
    apiLoaded:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    constructor(
        private loader:Loader,
        private location: Location,
        private actions$: Actions,
        private router: Router,
        private route: ActivatedRoute,
        private store: Store<fromRoot.State>,
        private dialog: MatDialog,
    ) {}

    ngOnInit(): void {
        this.loader.importLibrary('maps')
        .then(({Map}) => {
          this.apiLoaded?.next(true);
         })
        .catch((e) => {
          // do something
        });

        this.selectClient();

        this.route.params.pipe(take(1)).subscribe(({ id }) => {
            id ? (this.scoutId = id) : this.handleBack();
        });

        this.actions$
            .pipe(
                ofType(actions.scoutActions.ScoutFormDataSuccess, actions.scoutActions.ScoutFormDataFail),
                takeUntil(this.destroyed$),
            )
            .subscribe(() => {
                this.store.dispatch(actions.cropActions.ReqCropCategories());
            });

        this.store
            .pipe(select(fromRoot.marketSelectors.getCurrentFullScout), takeUntil(this.destroyed$))
            .subscribe((currentScout) => {
                if (currentScout && Object.keys(currentScout).length) {
                    this.scout = cloneDeep(currentScout);
                    if (!this.scout.inSouthAfrica) {
                        this.zoom = 13;
                    }
                }
            });
        this.store.dispatch(actions.scoutActions.ReqScoutFormData({ scoutId: this.scoutId }));

        this.store.dispatch(actions.scoutActions.ReqScoutFormData({ scoutId: this.scoutId }));

        this.store
            .pipe(select(fromRoot.marketSelectors.getFineTune), takeUntil(this.destroyed$))
            .subscribe((fineTune) => {
                if (fineTune) {
                    this.fineTune = cloneDeep(fineTune);
                }
            });

        this.store.pipe(select(selectCropByCategories), takeUntil(this.destroyed$)).subscribe((cropCategories) => {
            if (cropCategories.length > 0) {
                this.cropCategory = cropCategories.find(
                    (cropCategory) => cropCategory.id === this.scout.crop.cropCategoryId,
                );
                if (this.cropCategory) {
                    this.isLoading = false;
                }
            }
        });

        this.store
            .pipe(select(fromRoot.deliveryPointsSelectors.getManageDeliveryPointDetails), takeUntil(this.destroyed$))
            .subscribe(({ publicDeliveryPoints }) => {
                if (publicDeliveryPoints.length) {
                    this.publicDeliveryPoints = publicDeliveryPoints;
                    this.filteredDeliveryPoints = publicDeliveryPoints;
                }
            });
        this.store.dispatch(actions.deliveryPointActions.ReqManagementData({ executedTime: Date.now() }));
    }

    ngOnDestroy(): void {
        this.destroyed$.next();
    }

    selectClient(): void {
        this.store
            .select(brokersSelectors.getCurrentClient)
            .pipe(takeUntil(this.destroyed$))
            .subscribe((client: Client) => {
                this.client = client;
            });
    }

    handleBack() {
        this.location.back();
    }

    handleToggleScoutType(scoutType: ScoutType) {
        if (this.scout.scoutType !== scoutType) {
            if (this.scout.inSouthAfrica) {
                this.scout.inSouthAfrica = false;
            }
            this.scout.scoutType = scoutType;
            this.hasBeenEditedHelper();
        }
    }

    handleToggleIsSouthAfrica(inSouthAfrica: boolean) {
        if (this.scout.inSouthAfrica !== inSouthAfrica) {
            this.scout.inSouthAfrica = inSouthAfrica;
            this.hasBeenEditedHelper();
        }
    }

    handleSelectLocation($event: Address) {
        this.searchTerm = '';
        this.scout.town = $event.formatted_address;
        this.scout.googlePlaceId = $event.place_id;
        const newLocation: { lat: number; lng: number } = {
            lat: $event.geometry.location.lat(),
            lng: $event.geometry.location.lng(),
        };
        this.scout.location = newLocation;
        this.zoom = 13;
        this.hasBeenEditedHelper();
    }

    handleSearchTermChange(searchTerm: string | DeliveryPoint) {
        if (typeof searchTerm === 'string') {
            this.filteredDeliveryPoints = this.publicDeliveryPoints.filter((filtered) => {
                return filtered.name.toLocaleLowerCase().includes(this.searchTerm.toLocaleLowerCase());
            });
        }
    }

    handleSelectDeliveryPoint(deliveryPoint: DeliveryPoint) {
        this.scout.town = deliveryPoint.town;
        this.scout.location = deliveryPoint.location;
        this.searchTerm = deliveryPoint.name;
    }

    handleDragEnd($event: google.maps.KmlMouseEvent) {
        this.scout.location.lat = $event.latLng.lat();
        this.scout.location.lng = $event.latLng.lng();
        this.hasBeenEditedHelper();
    }

    handleToggleExFarm(exFarm: boolean) {
        if (this.fineTune.exFarm !== exFarm) {
            this.fineTune.exFarm = exFarm;
            this.hasBeenEditedHelper();
        }
    }

    handleToggleHasLots(hasLots: boolean) {
        if (this.fineTune.hasLots !== hasLots) {
            this.fineTune.hasLots = hasLots;
            this.hasBeenEditedHelper();
        }
    }

    handleOpenConfirmationModal() {
        const dialogRef = this.dialog.open(ConfirmationModalComponent, {
            data: { currentAction: 'delete', currentItem: 'Scout' },
            panelClass: 'g-modal-container',
        });

        dialogRef
            .afterClosed()
            .pipe(take(1))
            .subscribe((shouldDispatch) => {
                if (shouldDispatch) {
                    this.handleDeleteScout();
                }
            });
    }

    handleDeleteScout() {
        this.actions$
            .pipe(ofType(actions.scoutActions.DeleteScoutSuccess, actions.scoutActions.DeleteScoutFail), take(1))
            .subscribe((action) => {
                if (action.type === actions.scoutActions.DeleteScoutSuccess.type) {
                    this.router.navigate([SCOUTS_ROUTE]);
                }
            });

        const props = this.client ? { scoutId: this.scout.id, clientUid: this.client.uid } : { scoutId: this.scout.id };

        this.store.dispatch(actions.scoutActions.ReqDeleteScout({ ...props }));
    }

    handleSaveChanges() {
        if (this.hasBeenEdited) {
            this.hasActionDispatched = true;

            this.actions$
                .pipe(ofType(actions.scoutActions.UpdateScoutSuccess, actions.scoutActions.UpdateScoutFail), take(1))
                .subscribe((action) => {
                    if (action.type === actions.scoutActions.UpdateScoutSuccess.type) {
                        this.router.navigate([SCOUTS_ROUTE]);
                    }
                });

            this.store.dispatch(
                actions.scoutActions.ReqUpdateScout({
                    scoutAndFineTune: { scout: this.scout, fineTune: this.fineTune },
                }),
            );
        }
    }

    handlePublicToggle(option: boolean): void {
        this.scout.isPublic = option;
        this.hasBeenEditedHelper();
    }

    compareSelectionsHelper(selection1: IdName, selection2: IdName) {
        return selection1.id === selection2?.id;
    }

    hasBeenEditedHelper() {
        if (!this.hasBeenEdited) {
            this.hasBeenEdited = true;
        }
    }
}
