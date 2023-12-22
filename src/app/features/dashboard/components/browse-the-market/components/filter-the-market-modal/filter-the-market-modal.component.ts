import { Component, EventEmitter, Inject, OnInit } from '@angular/core';

import { Action, select, Store } from '@ngrx/store';
import * as fromCrop from 'src/app/core/ngrx/crop/index';
import { take, takeUntil } from 'rxjs/operators';
import { Actions, ofType } from '@ngrx/effects';

import { MatLegacyDialog as MatDialog, MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { LocationModalComponent } from '../location-modal/location-modal.component';

import {
    MarketFilters,
    ScoutType,
    IdName,
    Crop,
    GPSCoordinates,
    MarketFilterClass,
} from 'src/app/core/models/queryModels';

import { environment } from 'src/environments/environment.prod';
import { cloneDeep } from 'lodash';

@Component({
    selector: 'app-filter-the-market-modal',
    templateUrl: './filter-the-market-modal.component.html',
    styleUrls: ['./filter-the-market-modal.component.scss'],
})
export class FilterTheMarketModalComponent implements OnInit {
    filters: MarketFilters = {} as MarketFilters;

    crops: Crop[] = [];
    cropCategories: IdName[] = [];
    isLoading: boolean = true;

    radii: string[] = ['25', '50', '75', '100', 'Over 100'];
    radius: string | null = null;

    isPeriodValid: boolean = false;
    periodHadBeenEdited: boolean = false;

    destroyed$: EventEmitter<void> = new EventEmitter<void>();

    constructor(
        private dialogRef: MatDialogRef<FilterTheMarketModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: { filters: MarketFilters },
        private actions$: Actions,
        private store: Store,
        private dialog: MatDialog,
    ) {
        this.filters = cloneDeep(this.data.filters);
    }

    ngOnInit(): void {
        this.actions$
            .pipe(ofType(fromCrop.cropActions.AllCropsSuccess, fromCrop.cropActions.AllCropsFail), take(1))
            .subscribe((action: Action) => {
                if (action.type === fromCrop.cropActions.AllCropsSuccess.type) {
                    if (this.filters.cropCategory?.id) {
                        this.cropCategoryChangeHelper(this.filters.cropCategory.id);
                    }
                    this.isLoading = false;
                }
            });

        this.store
            .pipe(select(fromCrop.cropSelectors.selectCropByCategories), takeUntil(this.destroyed$))
            .subscribe((cropCategories) => {
                if (cropCategories.length) {
                    this.cropCategories = cropCategories.filter((cropCategory) =>
                        environment.CROP_CATEGORIES.includes(cropCategory.id),
                    );
                }
            });
        this.store.dispatch(fromCrop.cropActions.ReqCropCategories());
        this.store.dispatch(fromCrop.cropActions.ReqAllCrops());
    }

    ngOnDestroyed(): void {
        this.destroyed$.next();
    }

    // #region Handlers

    handleClose(): void {
        this.dialogRef.close();
    }

    handleOpenLocationModal(): void {
        const dialogRef = this.dialog.open(LocationModalComponent, {
            panelClass: 'g-modal-fullwidth-container',
            data: {
                town: this.filters.town,
                gpsCoordinates: this.filters.gpsCoordinates,
            },
            autoFocus: false,
        });

        dialogRef
            .afterClosed()
            .pipe(take(1))
            .subscribe((location?: { town: string; gpsCoordinates: GPSCoordinates }) => {
                if (location) {
                    this.filters.town = location.town;
                    this.filters.gpsCoordinates = location.gpsCoordinates;
                }
            });
    }

    handleToggleLotType(type: ScoutType) {
        if (this.filters.cardType !== type) {
            this.filters.cardType = type;
        }
    }

    handleChangeCropCategory(id: number) {
        this.cropCategoryChangeHelper(id);
    }

    handlePeriodChange() {
        !this.periodHadBeenEdited && (this.periodHadBeenEdited = true);
        this.isPeriodValid = this.isPeriodValidHelper();
    }

    handleClearFilters(): void {
        this.filters = new MarketFilterClass();
    }

    handleCloseAndApplyFilters(): void {
        this.dialogRef.close(this.filters);
    }

    // #endregion

    // #region Helpers

    cropCategoryChangeHelper(id: number): void {
        this.store
            .pipe(select(fromCrop.cropSelectors.selectCropByCategoryId, id), take(1))
            .subscribe((crops: Crop[]) => {
                this.crops = crops;
            });
    }

    isPeriodValidHelper(): boolean {
        return this.filters.dateFrom < this.filters.dateTo && new Date() < this.filters.dateTo;
    }

    compareSelectionsHelper(selection1: IdName, selection2: IdName): boolean {
        return selection1.id === selection2?.id;
    }

    filtersExistHelper(): boolean {
        const { town, cropCategory, crop, radius, dateFrom, dateTo } = this.filters;
        return Boolean(town || cropCategory || crop || radius || dateFrom || dateTo);
    }

    // #endregion
}
