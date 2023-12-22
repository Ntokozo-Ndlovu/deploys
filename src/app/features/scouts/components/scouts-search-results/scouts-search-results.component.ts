import { Actions, ofType } from '@ngrx/effects';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Scout, ScoutClass } from 'src/app/core/models/queryModels';
import { ScoutSearchResult } from 'src/app/core/models/viewModels';
import { Store, select } from '@ngrx/store';
import * as fromRoot from 'src/app/core/ngrx/reducers/index';
import * as actions from 'src/app/core/helpers/index.actions';
import { cloneDeep } from 'lodash';
import { take, takeUntil } from 'rxjs/operators';
import {
    SCOUTS_ROUTE,
    SCOUT_CREATE_ROUTE,
    SCOUT_EDIT_ROUTE,
    SCOUT_FINE_TUNE_ROUTE,
    SIGNIN_ROUTE,
} from './../../../../core/helpers/constants';

@Component({
    selector: 'app-scouts-search-results',
    templateUrl: './scouts-search-results.component.html',
    styleUrls: ['./scouts-search-results.component.scss'],
})
export class ScoutsSearchResultsComponent implements OnInit {
    scoutId: number;
    scout: Scout = new ScoutClass();

    scoutResult: ScoutSearchResult;

    pills: any[];

    hasLots: boolean = false;
    shouldDispatch: boolean = true;
    isLoading: boolean = true;
    isActionLoading: boolean = false;
    isUserAuthenticated: boolean = false;

    destroyed$: EventEmitter<void> = new EventEmitter<void>();

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private store: Store<fromRoot.State>,
        private actions$: Actions,
    ) {}

    ngOnInit(): void {
        this.actions$
            .pipe(ofType(actions.scoutActions.ScoutSearchFail, actions.scoutActions.ScoutSearchSuccess))
            .subscribe(() => {
                this.isLoading = false;
            });

        const redirectBackHelper = () => {
            throw new Error('Invalid Parameters');
        };

        this.route.queryParams.pipe(take(1)).subscribe((params) => {
            if (!params.skipSearch) {
                try {
                    this.scoutId = params.id ? params.id : null;
                    this.scout.creatorType = params.creatorType || redirectBackHelper();
                    this.scout.scoutType = params.scoutType || redirectBackHelper();
                    this.scout.crop.id = +params.cropId || redirectBackHelper();
                    this.scout.crop.name = params.cropName || redirectBackHelper();
                    this.scout.inSouthAfrica = params.inSouthAfrica === 'true';
                    if (!this.scout.inSouthAfrica) {
                        this.scout.googlePlaceId = params.googlePlaceId ? params.googlePlaceId : null;
                        this.scout.location.lat = +params.lat || redirectBackHelper();
                        this.scout.location.lng = +params.lng || redirectBackHelper();
                        this.scout.radius = +params.radius || redirectBackHelper();
                    } else {
                        this.scout.radius = null;
                    }
                    this.scout.town = params.town || redirectBackHelper();
                } catch {
                    this.router.navigate([SCOUT_CREATE_ROUTE]);
                }
            } else {
                this.shouldDispatch = false;
                this.isLoading = false;
            }
        });

        this.store
            .pipe(select(fromRoot.marketSelectors.getSearchResults), takeUntil(this.destroyed$))
            .subscribe((scoutResult) => {
                if (!!scoutResult && Object.keys(scoutResult).length > 0) {
                    this.scoutResult = cloneDeep(scoutResult);
                    this.pills = [
                        this.scoutResult.scoutType,
                        this.scoutResult.cropName,
                        this.scoutResult.town === '' ? 'South Africa' : this.scoutResult.town,
                    ];
                    if (this.scoutResult.lotCount !== null) {
                        this.hasLots = true;
                    }
                }
            });

        if (this.shouldDispatch) {
            this.store.dispatch(actions.scoutActions.ReqScoutSearch({ scout: this.scout }));
        }

        this.store.pipe(select(fromRoot.authSelectors.getUser), take(1)).subscribe((user) => {
            if (user) {
                this.isUserAuthenticated = true;
            }
        });
    }

    ngOnDestroy(): void {
        this.destroyed$.next();
    }

    handleNavigateToDashboard() {
        this.router.navigate([SCOUTS_ROUTE]);
    }

    handleEditButtonClick() {
        if (!this.scoutId) {
            let scoutParams: any = {
                creatorType: this.scout.creatorType,
                scoutType: this.scout.scoutType,
                cropId: this.scout.crop.id,
                cropName: this.scout.crop.name,
                inSouthAfrica: this.scout.inSouthAfrica,
                googlePlaceId: this.scout.googlePlaceId,
                town: this.scout.town,
                lat: this.scout.location.lat,
                lng: this.scout.location.lng,
                radius: this.scout.radius,
            };
            this.router.navigate([SCOUT_CREATE_ROUTE], { queryParams: scoutParams });
        }
        if (this.scoutId) {
            this.router.navigate([`${SCOUT_EDIT_ROUTE}/${this.scoutId}`]);
        }
    }

    handlePublicToggle(option: boolean) {
        if (this.scoutResult.isPublic !== option) {
            this.scoutResult.isPublic = option;
        }
    }

    handleSaveScout() {
        if (this.isUserAuthenticated) {
            this.isActionLoading = true;

            this.store.dispatch(actions.scoutActions.ReqCreateScout({ isPublic: this.scoutResult.isPublic }));

            this.actions$
                .pipe(ofType(actions.scoutActions.CreateScoutSuccess, actions.scoutActions.CreateScoutFail), take(1))
                .subscribe((action) => {
                    if (action.type === actions.scoutActions.CreateScoutSuccess.type) {
                        this.handleNavigateToDashboard();
                    }
                    this.isActionLoading = false;
                });
        } else {
            this.router.navigate([SIGNIN_ROUTE], { queryParams: { fromScoutSearch: true } });
        }
    }

    handleNavigateToFineTune() {
        this.router.navigate([SCOUT_FINE_TUNE_ROUTE]);
    }
}
