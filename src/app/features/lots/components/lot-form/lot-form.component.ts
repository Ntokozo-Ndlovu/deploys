import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';

// #region NgRx/RxJs

import { Store, select } from '@ngrx/store';
import { Actions, ofType } from '@ngrx/effects';
import { take, takeUntil, distinctUntilChanged, filter, switchMap } from 'rxjs/operators';
import { BehaviorSubject, combineLatest } from 'rxjs';
import * as fromLot from 'src/app/features/lots/lots.selectors';
import * as fromCrop from 'src/app/core/ngrx/crop/crop.selectors';
import * as actions from 'src/app/core/helpers/index.actions';

// #endregion

// #region Models/Constants

import {
    Lot,
    IdName,
    DeliveryPoint,
    PriceType,
    SafexOption,
    ScoutType,
    Scout,
    Crop,
    Client,
    FineTune,
} from 'src/app/core/models/queryModels';
import { lotFormAsteriskMonths, LOTS_ROUTE } from 'src/app/core/helpers/constants';

// #endregion

// #region Modals

import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { ConfirmationModalComponent } from './../../../shared/components/confirmation-modal/confirmation-modal.component';
import { DeliveryPointModalComponent } from 'src/app/features/shared/components/delivery-point-modal/delivery-point-modal.component';

// #endregion

// #region Other

import { environment } from 'src/environments/environment.prod';
import * as snackBarConfigs from 'src/app/core/helpers/snackbar';
import { brokersSelectors } from '../../../../core/ngrx/brokers';
import { transformLotBeforeDispatchHelper } from '../../../../core/helpers/helperFunctions';
import * as fromRoot from '../../../../core/ngrx/reducers';
import { cloneDeep } from 'lodash';

// #endregion

@Component({
    selector: 'app-lot-form',
    templateUrl: './lot-form.component.html',
    styleUrls: ['./lot-form.component.scss'],
})
export class LotFormComponent implements OnInit {
    lotId: number;
    cropCategoryId: number;
    cropCategory: IdName = { id: null, name: '' };
    lot: Lot = new Lot();

    lotTypes: ScoutType[] = ['Sell', 'Buy'];
    isSeller: boolean = false;

    dateFrom: Date;
    dateTo: Date;
    isPeriodValid: boolean;
    periodHadBeenEdited: boolean = false;

    userDeliveryPoints: DeliveryPoint[];
    publicDeliveryPoints: DeliveryPoint[];

    crops: Crop[];
    cropCategories: IdName[];
    packaging: IdName[];
    incoTerms: IdName[];
    quantityMeasures: IdName[];
    qualities: IdName[];
    priceTypes: PriceType[];
    paymentTerms: IdName[];
    safexMonths: IdName[];
    monthIndex: number = 0;

    asteriskMonths: string[] = lotFormAsteriskMonths;

    scout: Scout;
    fineTune: FineTune = new FineTune();

    hasBeenEdited: boolean = false;
    showInitialDeliveryPointsModalStep = true;

    isPageLoading: boolean = true;
    isActionLoading: boolean = false;

    showPriceHint: boolean = false;
    showQuantityHint: boolean = false;

    selectedCropId$: BehaviorSubject<number> = new BehaviorSubject(null);
    destroyed$: EventEmitter<void> = new EventEmitter<void>();

    client: Client;

    @ViewChild('picker') picker;

    constructor(
        private actions$: Actions,
        private route: ActivatedRoute,
        private router: Router,
        private location: Location,
        private store: Store<fromLot.State>,
        public dialog: MatDialog,
        private snackbar: MatSnackBar,
    ) {}

    ngOnInit(): void {
        this.selectClient();

        this.actions$.pipe(ofType(actions.lotActions.LotFormDataSuccess), take(1)).subscribe(() => {
            this.isPageLoading = false;
        });

        this.route.params.pipe(take(1)).subscribe(({ id }) => {
            id && (this.lotId = id);
        });

        this.route.queryParams.pipe(take(1)).subscribe(({ lotType, cropCategoryId }) => {
            lotType && this.handleToggleLotType(lotType);
            cropCategoryId && (this.cropCategoryId = +cropCategoryId);
        });

        this.store
            .pipe(select(fromLot.getLotFormData), takeUntil(this.destroyed$))
            .subscribe(({ lot, priceTypes, paymentTerms, safexMonths }) => {
                if (priceTypes && priceTypes.length) {
                    this.priceTypes = priceTypes;
                }
                if (paymentTerms && paymentTerms.length) {
                    this.paymentTerms = paymentTerms;
                    if (!this.lotId) {
                        this.lot.paymentTerm = paymentTerms.find(
                            (paymentTerms) => paymentTerms.id === environment.DEFAULT_PAYMENT_ID,
                        );
                    }
                }
                this.safexMonths = safexMonths;
                if (!safexMonths.length) {
                    this.lot.month = null;
                    this.handleTogglePrice(priceTypes[1], true);
                }
                if (lot !== null) {
                    this.lot = lot;
                    this.cropCategoryId = this.lot.crop.cropCategoryId;
                    if (this.lot.quality === null) {
                        this.lot.quality = this.qualities.find(
                            (quality) => quality.id === environment.STANDARD_QUALITY_ID,
                        );
                    }
                    this.selectedCropId$.next(this.lot.crop.id);
                    if (this.lot.priceType.id === 1) {
                        this.monthIndex = this.safexMonths.findIndex((month) => month.id === this.lot.month.id) || 0;
                    }
                    if (this.lot.dateTo < new Date()) this.scrollToExpiredLotsDateInput();
                }
            });

        this.selectedCropId$
            .pipe(
                switchMap((cropId: number) => {
                    return combineLatest([
                        this.store.pipe(select(fromLot.appSelectors.getUnitsOfMeasureByCropId, { cropId })),
                        this.store.pipe(select(fromLot.appSelectors.getIncoTermsByCropId, { cropId })),
                    ]);
                }),
                takeUntil(this.destroyed$),
            )
            .subscribe(([unitsOfMeasure, incoTerms]: IdName[][]) => {
                this.quantityMeasures = unitsOfMeasure;
                if (!this.lotId) {
                    this.lot.quantityMeasure = this.quantityMeasures.find(
                        (quantityMeasure) => quantityMeasure.id === environment.DEFAULT_UOM_ID,
                    );
                }
                this.incoTerms = incoTerms;
            });

        this.store
            .pipe(select(fromLot.deliveryPointSelectors.getManageDeliveryPointDetails), takeUntil(this.destroyed$))
            .subscribe(({ userDeliveryPoints, publicDeliveryPoints }) => {
                this.userDeliveryPoints = userDeliveryPoints;
                this.publicDeliveryPoints = publicDeliveryPoints;
            });

        this.store
            .pipe(select(fromLot.appSelectors.getCropGrades), takeUntil(this.destroyed$))
            .subscribe((cropGrades) => {
                this.qualities = cropGrades;
                if (this.qualities.length === 1 || this.cropCategory?.name === 'Grains & Oilseeds') {
                    this.lot.quality = this.qualities[0];
                }
            });

        this.store
            .pipe(select(fromLot.appSelectors.getCropPackaging), takeUntil(this.destroyed$))
            .subscribe((cropPackaging) => {
                this.packaging = cropPackaging;
                if (this.cropCategory?.name === 'Grains & Oilseeds') this.lot.packaging = this.packaging[0];
            });

        this.store
            .pipe(
                select(fromLot.getLotFormData),
                takeUntil(this.destroyed$),
                distinctUntilChanged((a, b) => a?.lot?.id === b?.lot?.id),
                filter((x) => !!x.lot),
                take(1),
            )
            .subscribe(() => {
                this.store.dispatch(
                    actions.cropActions.ReqCropMonthsAndGrades({
                        cropId: this.lot.crop.id,
                        exchangeId: this.lot?.exchange?.id || 1,
                    }),
                );
                this.store.dispatch(actions.cropActions.ReqCropPackaging({ cropId: this.lot.crop.id }));
            });

        this.store
            .pipe(select(fromRoot.marketSelectors.getFineTune), takeUntil(this.destroyed$))
            .subscribe((fineTune) => {
                if (fineTune) {
                    this.fineTune = cloneDeep(fineTune);
                }
            });

        this.store
            .pipe(select(fromRoot.marketSelectors.getCurrentFullScout), takeUntil(this.destroyed$))
            .subscribe((currentScout) => {
                if (currentScout && Object.keys(currentScout).length) {
                    this.scout = cloneDeep(currentScout);
                }
            });

        this.store
            .pipe(
                select(fromLot.lotSelectors.getLinkedScout),
                takeUntil(this.destroyed$),
                distinctUntilChanged((a, b) => a?.id === b?.id),
            )
            .subscribe((scout) => {
                if (scout) {
                    this.lot.lotType = scout.scoutType;
                    this.lot.crop = scout.crop;
                    this.selectedCropId$.next(this.lot.crop.id);
                    this.lot.scoutId = scout.id;
                    this.lot.isPublic = scout.isPublic;
                    this.lot.radius = scout.radius;
                    this.store.dispatch(
                        actions.cropActions.ReqCropMonthsAndGrades({
                            cropId: this.lot.crop.id,
                            exchangeId: this.lot?.exchange?.id || 1,
                        }),
                    );
                    this.store.dispatch(actions.cropActions.ReqCropPackaging({ cropId: this.lot.crop.id }));
                    this.store.dispatch(actions.scoutActions.ReqScoutFormData({ scoutId: scout.id }));
                }
            });

        this.store.dispatch(actions.deliveryPointActions.ReqManagementData({ executedTime: Date.now() }));

        this.store.dispatch(actions.lotActions.ReqLotFormData(this.lotId ? { lotId: this.lotId } : null));

        this.store
            .pipe(select(fromCrop.selectCropByCategories), takeUntil(this.destroyed$))
            .subscribe((cropCategories) => {
                if (cropCategories.length) {
                    this.cropCategories = cropCategories.filter((cropCategory) =>
                        environment.CROP_CATEGORIES.includes(cropCategory.id),
                    );
                    if (!this.cropCategoryId) {
                        this.cropCategoryId = this.lot.scoutId
                            ? this.lot.crop.cropCategoryId
                            : this.cropCategories[0].id;
                    }
                    this.cropCategory = this.cropCategories.find(
                        (cropCategory) => cropCategory.id === this.cropCategoryId,
                    );
                    this.handleCropCategoryChange();
                }
            });

        this.store.dispatch(actions.cropActions.ReqCropCategories());

        if (this.lot.lotType === 'Sell') {
            this.isSeller = true;
        }
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

    handleCropCategoryChange(): void {
        this.store
            .pipe(select(fromCrop.selectCropByCategoryId, this.cropCategoryId), takeUntil(this.destroyed$))
            .subscribe((crops) => {
                this.crops = crops;
            });
    }

    handleBack(): void {
        this.lot.quality = null;
        this.lot.packaging = null;
        this.location.back();
    }

    handlePublicToggle(option: boolean): void {
        this.lot.isPublic = option;
        this.hasBeenEditedHelper();
    }

    handleCropChange(cropId: number): void {
        this.store.dispatch(actions.cropActions.ReqCropPackaging({ cropId: this.lot.crop.id }));
        this.store.dispatch(
            actions.cropActions.ReqCropMonthsAndGrades({ cropId: this.lot.crop.id, exchangeId: this.lot.exchange.id }),
        );
        this.selectedCropId$.next(cropId);
    }

    handleEditDeliveryPoint(): void {
        const dialogRef = this.dialog.open(DeliveryPointModalComponent, {
            data: {
                deliveryPointId: null,
                showInitial: this.showInitialDeliveryPointsModalStep,
                isView: false,
                fromProfile: false,
                hidePublicDeliveryPoints: this.lot.incoTerm?.id === 1 || false,
            },
            panelClass: 'g-modal-fullwidth-container',
            autoFocus: false,
        });

        dialogRef
            .afterClosed()
            .pipe(take(1))
            .subscribe((selectedDeliveryPointId: number) => {
                let selectedDeliveryPoint = [...this.userDeliveryPoints, ...this.publicDeliveryPoints].find(
                    (deliveryPoint) => deliveryPoint.id === selectedDeliveryPointId,
                );
                selectedDeliveryPoint && (this.lot.deliveryPoint = selectedDeliveryPoint);
            });

        this.hasBeenEditedHelper();
    }

    handleTogglePrice(priceType: PriceType, fromInit?: boolean): void {
        if (priceType.id === 2) {
            this.lot.month = null;
        } else {
            this.handleToggleSafexOption('MINUS');
            this.monthIndex = 0;
            this.lot.month = this.safexMonths[this.monthIndex];
        }
        if (this.lot.priceType !== priceType) {
            this.lot.priceType = priceType;
        }
        !fromInit && this.hasBeenEditedHelper();
    }

    handleToggleLotType(lotType: ScoutType): void {
        if (!this.lotId) {
            this.lot.lotType = lotType;
            this.isSeller = this.lot.lotType === 'Sell';
        }
    }

    handleToggleSafexOption(option: SafexOption): void {
        this.lot.safexOption = option;
        this.hasBeenEditedHelper();
    }

    handleShowPriceHint(): void {
        if (this.lot.price === 0) {
            this.showPriceHint = true;
        }
        if (this.lot.price > 0 && this.showPriceHint) {
            this.showPriceHint = false;
        }
        this.hasBeenEditedHelper();
    }

    handleShowQuantityHint(): void {
        if (this.lot.quantity > 1000000) {
            this.showQuantityHint = true;
        }
        if (this.lot.quantity < 1000000 && this.showQuantityHint) {
            this.showQuantityHint = false;
        }
        this.hasBeenEditedHelper();
    }

    handleSaveLot(lotForm: NgForm): void {
        if (this.isFormValidHelper(lotForm)) {
            const props = this.client
                ? { lot: transformLotBeforeDispatchHelper(this.lot), clientUid: this.client.uid }
                : { lot: transformLotBeforeDispatchHelper(this.lot) };
            this.isActionLoading = true;
            this.store.dispatch(
                actions.lotActions.ReqCreateLot({
                    ...props,
                }),
            );
            this.handleMakeScoutPublic();

            this.actions$.pipe(ofType(actions.lotActions.CreateLotSuccess), take(1)).subscribe(() => {
                this.isActionLoading = false;
                this.routeToLotsHelper();
            });
            this.routeToLotsHelper();
        } else {
            const lotFormErrorMessage: string = `Your Lot Form Has Some Issues. Please Resolve Them And Try Again.`;
            this.snackbar.open(lotFormErrorMessage, 'CLOSE', snackBarConfigs.errorConfig);
        }
    }

    handleMakeScoutPublic(): void {
        if (!this.scout.isPublic) {
            this.scout.isPublic = true;
            this.store.dispatch(
                actions.scoutActions.ReqUpdateScout({
                    scoutAndFineTune: { scout: this.scout, fineTune: this.fineTune },
                }),
            );
        }
    }

    handleEditLot(lotForm: NgForm): void {
        if (this.isFormValidHelper(lotForm) && this.hasBeenEdited) {
            const props = this.client
                ? { lot: transformLotBeforeDispatchHelper(this.lot), clientUid: this.client.uid }
                : { lot: transformLotBeforeDispatchHelper(this.lot) };
            this.isActionLoading = true;

            this.store.dispatch(
                actions.lotActions.ReqUpdateLot({
                    ...props,
                }),
            );

            this.actions$.pipe(ofType(actions.lotActions.UpdateLotSuccess), take(1)).subscribe(() => {
                this.isActionLoading = false;
                this.routeToLotsHelper();
            });
        }
    }

    handleDeleteLot(): void {
        const dialogRef = this.dialog.open(ConfirmationModalComponent, {
            data: { currentAction: 'delete', currentItem: 'Lot' },
            panelClass: 'g-modal-container',
        });

        dialogRef
            .afterClosed()
            .pipe(take(1))
            .subscribe((shouldDispatch) => {
                if (shouldDispatch) {
                    const props = this.client
                        ? { lotId: this.lotId, clientUid: this.client.uid }
                        : { lotId: this.lotId };
                    this.isPageLoading = true;
                    this.store.dispatch(actions.lotActions.ReqDeleteLot({ ...props }));

                    this.actions$
                        .pipe(ofType(actions.lotActions.DeleteLotSuccess, actions.lotActions.DeleteLotFail), take(1))
                        .subscribe((action) => {
                            this.isPageLoading = false;
                            if (action.type === actions.lotActions.DeleteLotSuccess.type) {
                                this.routeToLotsHelper();
                            }
                        });
                }
            });
    }

    handleIncoTermChange(): void {
        this.hasBeenEditedHelper();
        if (this.lot.incoTerm.name === 'ExFarm') {
            this.showInitialDeliveryPointsModalStep = false;
        } else {
            this.showInitialDeliveryPointsModalStep = true;
        }
    }

    handlePeriodChange() {
        this.hasBeenEditedHelper();
        !this.periodHadBeenEdited && (this.periodHadBeenEdited = true);
        this.isPeriodValid = this.isPeriodValidHelper();
    }

    routeToLotsHelper(): void {
        this.router.navigate([LOTS_ROUTE]);
    }

    compareSelectionsHelper(selection1: IdName, selection2: IdName): boolean {
        return selection1.id === selection2?.id;
    }

    isFormValidHelper(lotForm: NgForm): boolean {
        this.isPeriodValid = this.isPeriodValidHelper();
        return (
            lotForm.form.valid &&
            this.lot.packaging &&
            !this.showPriceHint &&
            !this.showQuantityHint &&
            this.isPeriodValid
        );
    }

    hasBeenEditedHelper(): void {
        !this.hasBeenEdited && (this.hasBeenEdited = true);
    }

    isPeriodValidHelper(): boolean {
        return this.lot.dateFrom < this.lot.dateTo && new Date() < this.lot.dateTo;
    }

    scrollToExpiredLotsDateInput() {
        const referenceElement = document.getElementById('dateInput');
        if (referenceElement) referenceElement.scrollIntoView({ behavior: 'smooth' });
    }
}
