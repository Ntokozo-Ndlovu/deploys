// #region Angular Imports

import { Component, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// #endregion

// #region NgRx Imports

import { Store, select } from '@ngrx/store';
import * as fromRoot from 'src/app/core/ngrx/reducers/index';
import * as actions from 'src/app/core/helpers/index.actions';
import { selectCropByCategories, selectCropByCategoryId } from './../../../../core/ngrx/crop/crop.selectors';

// #endregion

// #region RxJs Imports

import { catchError, map, take, takeUntil } from 'rxjs/operators';

// #endregion

// #region Interface, Class & Constant Imports

import { AnimationDirection } from 'src/app/core/models/viewModels';
import {
    IdName,
    Scout,
    ScoutClass,
    ScoutCreator,
    ScoutType,
    Crop,
    DeliveryPoint,
    User,
} from 'src/app/core/models/queryModels';
import {
    SCOUT_CREATE_ROUTE,
    SCOUT_SEARCH_RESULT_ROUTE,
    SCOUTS_ROUTE,
    ONBOARDING_ROUTE,
    SIGNIN_ROUTE,
} from './../../../../core/helpers/constants';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Loader } from '@googlemaps/js-api-loader';

// #endregion

@Component({
    selector: 'app-scouts-form',
    templateUrl: './scouts-form.component.html',
    styleUrls: ['./scouts-form.component.scss'],
})
export class ScoutsFormComponent implements OnInit {
    stepperIndex: number = 0;
    animateForwards: boolean = false;
    animateBackwards: boolean = false;
    animateFadeOut: boolean = false;
    animateFadeIn: boolean = false;

    scout: Scout = new ScoutClass();
    creatorTypes: ScoutCreator[] = ['Farmer', 'Offtaker (Processor)', 'Trader'];
    scoutTypes: ScoutType[] = ['Sell', 'Buy'];
    crops: Crop[];
    cropCategoryId: number;
    cropCategories: IdName[];
    searchTerm: string = '';
    publicDeliveryPoints: DeliveryPoint[] = [];
    filteredDeliveryPoints: DeliveryPoint[] = [];
    options: any = {
        types: ['(regions)'],
    };
    zoom: number = 4;

    isLoading: boolean = true;
    userIsAuthenticated: boolean = false;
    silosSubscriptionIsNotOpen: boolean = true;

    destroyed$: EventEmitter<void> = new EventEmitter<void>();
    apiLoaded:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    constructor(private loader:Loader, private route: ActivatedRoute, private router: Router, private store: Store<fromRoot.State>) {}

    ngOnInit(): void {
        this.loader.importLibrary('maps')
        .then(({Map}) => {
          this.apiLoaded?.next(true);
         })
        .catch((e) => {
          // do something
        });

        this.route.queryParams.pipe(take(1)).subscribe((params) => {
            const paramsLength = Object.keys(params).length;
            if (paramsLength !== 0 && paramsLength !== 1 && paramsLength !== 10) {
                this.router.navigate([SCOUT_CREATE_ROUTE]);
            } else if (paramsLength === 1) {
                this.scout.scoutType = params.scoutType;
            } else if (paramsLength === 10) {
                this.scout.creatorType = params.creatorType;
                this.scout.scoutType = params.scoutType;
                this.scout.crop.id = +params.cropId;
                this.scout.crop.name = params.cropName;
                this.scout.inSouthAfrica = params.inSouthAfrica === 'true';
                if (!this.scout.inSouthAfrica) {
                    this.scout.googlePlaceId = params.googlePlaceId;
                    this.zoom = 13;
                    this.scout.town = params.town;
                    this.scout.location.lat = +params.lat;
                    this.scout.location.lng = +params.lng;
                    this.scout.radius = +params.radius;
                }
            }
        });

        this.store.pipe(select(selectCropByCategories), takeUntil(this.destroyed$)).subscribe((cropCategories) => {
            if (cropCategories.length) {
                this.cropCategories = cropCategories;
                this.isLoading = false;
            }
        });
        this.store.dispatch(actions.cropActions.ReqAllCrops());
        this.store.dispatch(actions.cropActions.ReqCropCategories());

        this.store.pipe(select(fromRoot.authSelectors.getUser), takeUntil(this.destroyed$)).subscribe((user: User) => {
            if (user && Object.keys(user).length) {
                this.userIsAuthenticated = true;
                this.silosSubscriptionIsNotOpen && this.getSilosHelper();
            }
        });
    }

    ngOnDestroy(): void {
        this.destroyed$.next();
    }

    handleChangeCropCategory(id: number) {
        this.cropCategoryId = id;
        this.cropCategoryChangeHelper();
        this.handleAnimateStepperHelper('next');
    }

    handleNavigateToDashboard() {
        this.router.navigate([SCOUTS_ROUTE]);
    }

    handleAnimateStepperHelper(direction: AnimationDirection) {
        direction === 'previous' ? (this.stepperIndex -= 1) : (this.stepperIndex += 1);
        this[`animate${direction === 'previous' ? 'Backwards' : 'Forwards'}`] = true;
        setTimeout(() => {
            this[`animate${direction === 'previous' ? 'Backwards' : 'Forwards'}`] = false;
        }, 500);
    }

    handleBack() {
        this.userIsAuthenticated ? this.router.navigate([SCOUTS_ROUTE]) : this.router.navigate([ONBOARDING_ROUTE]);
    }

    handleRouteToSignIn() {
        this.router.navigate([SIGNIN_ROUTE]);
    }

    handleToggleCreatorType(creatorType: ScoutCreator) {
        if (creatorType !== this.scout.creatorType) {
            this.scout.creatorType = creatorType;
        }
    }

    handleToggleScoutType(scoutType: ScoutType) {
        if (this.scout.scoutType !== scoutType) {
            this.scout.scoutType = scoutType;
            if (this.scout.scoutType === 'Sell' && this.scout.inSouthAfrica) {
                this.scout.inSouthAfrica = false;
            }
        }
    }

    handleToggleIsSouthAfrica(option: boolean) {
        if (this.scout.inSouthAfrica !== option) {
            if (option) {
                this.animateFadeOut = true;
                setTimeout(() => {
                    this.scout.inSouthAfrica = option;
                    this.scout.radius = null;
                    this.animateFadeOut = false;
                }, 290);
            }
            if (!option) {
                this.scout.inSouthAfrica = option;
                this.scout.radius = 50;
                this.animateFadeIn = true;
                setTimeout(() => {
                    this.animateFadeIn = false;
                }, 300);
            }
        }
    }

    handleSelectLocation($event: Address) {
        this.searchTerm = '';
        this.scout.town = $event.formatted_address;
        this.scout.googlePlaceId = $event.place_id;
        this.scout.location.lat = $event.geometry.location.lat();
        this.scout.location.lng = $event.geometry.location.lng();
        this.zoom = 13;
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

    handleDragEnd($event) {
        this.scout.location.lat = $event.latLng.lat();
        this.scout.location.lng = $event.latLng.lng();
    }

    handleNavigateToSearchResults() {
        let scoutParams: any = {
            creatorType: this.scout.creatorType,
            scoutType: this.scout.scoutType,
            cropId: this.scout.crop.id,
            cropName: this.scout.crop.name,
            inSouthAfrica: this.scout.inSouthAfrica,
            googlePlaceId: this.scout.googlePlaceId,
            town: this.scout.inSouthAfrica ? 'South Africa' : this.scout.town.split(',')[0],
            lat: this.scout.location.lat,
            lng: this.scout.location.lng,
            radius: this.scout.radius,
        };
        this.router.navigate([SCOUT_SEARCH_RESULT_ROUTE], { queryParams: scoutParams });
    }

    getSilosHelper(): void {
        this.store
            .pipe(select(fromRoot.deliveryPointsSelectors.getManageDeliveryPointDetails), takeUntil(this.destroyed$))
            .subscribe(({ publicDeliveryPoints }) => {
                if (publicDeliveryPoints.length) {
                    this.publicDeliveryPoints = publicDeliveryPoints;
                    this.filteredDeliveryPoints = publicDeliveryPoints;
                }
            });
        this.silosSubscriptionIsNotOpen = false;
        this.store.dispatch(actions.deliveryPointActions.ReqManagementData({ executedTime: Date.now() }));
    }

    cropCategoryChangeHelper(): void {
        this.store
            .pipe(select(selectCropByCategoryId, this.cropCategoryId), takeUntil(this.destroyed$))
            .subscribe((crops) => {
                this.crops = crops;
            });
    }

    compareSelectionsHelper(selection1: IdName, selection2: IdName) {
        return selection1.id === selection2?.id;
    }
}
