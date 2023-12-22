import { DeliveryPointPinIcon, LotMatch } from 'src/app/core/models/viewModels';
import { DeliveryPoint, LotMatchDetails } from 'src/app/core/models/queryModels';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { formatDate } from '@angular/common';
import { MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { IdName, MatchItems, PriceType, SafexOption } from 'src/app/core/models/queryModels';
import * as fromNegotiations from 'src/app/features/negotiations/negotiations.selectors';
import { MatStepper } from '@angular/material/stepper';
import { Store } from '@ngrx/store';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import * as actions from 'src/app/core/helpers/index.actions';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, ofType } from '@ngrx/effects';
import { catchError, map, take } from 'rxjs/operators';
import * as snackBarConfigs from 'src/app/core/helpers/snackbar';
import { buyerDeliveryPointIcon, sellerDeliveryPointIcon } from 'src/app/core/helpers/constants';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
    selector: 'app-negotiation-edit-modal',
    templateUrl: './negotiation-edit-modal.component.html',
    styleUrls: ['./negotiation-edit-modal.component.scss'],
})
export class NegotiationEditModalComponent implements OnInit {
    @ViewChild('PriceMatStepper') priceMatStepper: MatStepper;
    @ViewChild('PositionMatStepper') positionMatStepper: MatStepper;

    sellerIconUrl: DeliveryPointPinIcon = sellerDeliveryPointIcon;
    buyerIconUrl: DeliveryPointPinIcon = buyerDeliveryPointIcon;

    matchItem: MatchItems;
    lotMatch: LotMatch;
    lotDetails: LotMatchDetails;
    oppLotDetails: LotMatchDetails;
    isSeller: boolean;
    packaging: IdName[] = [];
    publicDeliveryPoints: DeliveryPoint[];
    paymentTerms: IdName[] = [];
    unitsOfMeasure: IdName[] = [];
    cropGrades: IdName[] = [];
    priceTypes: PriceType[] = [];
    safexMonths: IdName[] = [];
    opposingValue: any;
    secondOpposingValue: any = null;
    isMatch: boolean = false;
    isPrice: boolean = false;
    isPosition: boolean = false;
    showPriceHint: boolean = false;
    isFullMatch: boolean = false;
    monthIndex: number = 0;
    incoTerms: IdName[] = [];
    isActionLoading: boolean = false;
    locationType: IdName;
    basisValue: string = '';
    oldDeliveryPoint: DeliveryPoint;
    oldPeriod: { from: Date; to: Date };
    infoBoxText: string;

    isQuantityValid: boolean = true;
    isPeriodValid: boolean = true;

    searchTerm: string;
    filteredDeliveryPoints: DeliveryPoint[];
    selectedDeliveryPointId: number;
    markers: DeliveryPoint[] = [];
    isMatchPeriod: boolean;

    options: google.maps.places.AutocompleteOptions = {
        types: ['(regions)'],
    };
    apiLoaded:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    constructor(
        private loader:Loader,
        private dialogRef: MatDialogRef<NegotiationEditModalComponent>,
        @Inject(MAT_DIALOG_DATA)
        public data: {
            matchItem: MatchItems;
            lotMatch: LotMatch;
            formData: any;
            qualities: IdName[];
        },
        private store: Store<fromNegotiations.State>,
        private snackbar: MatSnackBar,
        private actions$: Actions,
    ) {
    }

    ngOnInit(): void {
        this.loader.importLibrary('maps')
        .then(({Map}) => {
          this.apiLoaded?.next(true);
         })
        .catch((e) => {
          // do something
        });

        this.matchItem = this.data.matchItem;
        this.isPrice = this.matchItem.split(/(?=[A-Z])/).join('-') === 'Contract-Price';
        this.isPosition = this.matchItem === 'Position';
        this.lotMatch = this.data.lotMatch;
        this.packaging = this.data.formData.packaging;
        this.paymentTerms = this.data.formData.paymentTerms;
        this.unitsOfMeasure = this.data.formData.unitsOfMeasure;
        this.priceTypes = this.data.formData.priceTypes;
        this.safexMonths = this.data.formData.safexMonths;
        this.cropGrades = this.data.formData.cropGrades;
        this.incoTerms = this.data.formData.incoTerms;
        this.publicDeliveryPoints = this.data.formData.deliveryPoints;

        this.isSeller = this.lotMatch.userType === 'Sell';

        if (this.lotMatch.userType === 'Sell') {
            this.lotDetails = this.lotMatch.sellerDetails;
            this.oppLotDetails = this.lotMatch.buyerDetails;
        } else {
            this.lotDetails = this.lotMatch.buyerDetails;
            this.oppLotDetails = this.lotMatch.sellerDetails;
        }

        this.locationType = this.lotDetails.deliveryPoint.locationType;

        if (!this.data.formData.safexMonths.length) {
            this.lotDetails.month = null;
            this.oppLotDetails.month = null;
            this.handleTogglePrice(this.data.formData.priceTypes[1]);
        }

        this.oldDeliveryPoint = this.lotDetails.deliveryPoint;
        this.oldPeriod = { from: this.lotDetails.dateFrom, to: this.lotDetails.dateTo };
        this.handleUpdateMarkers();

        this[`getOpposing${this.matchItem.split('-').join('')}Helper`]();
        this[`is${this.matchItem.split('-').join('')}MatchHelper`]();

        if (this.oppLotDetails?.exchangeValue === 'PLUS') {
            this.basisValue = '+';
        }
        if (this.oppLotDetails?.exchangeValue === 'MINUS') {
            this.basisValue = '-';
        }
        if (this.oppLotDetails?.exchangeValue === 'PLUS' && this.oppLotDetails.priceType.name === 'Fixed Price') {
            this.basisValue = ' ';
        }

        this.infoBoxText = this.getInfoBoxTextHelper(this.matchItem.split('-').join(''));
    }

    //#region Handlers

    handleTogglePrice(priceType: PriceType) {
        if (priceType.id === 2) {
            this.lotDetails.month = null;
            this.lotDetails.exchangeValue = 'PLUS';
        } else {
            this.handleToggleSafexOption('MINUS');
            this.monthIndex = 0;
            this.lotDetails.month = this.safexMonths[this.monthIndex];
        }

        if (this.lotDetails.priceType !== priceType) this.lotDetails.priceType = priceType;
        this.isMatch = this.lotDetails.priceType === this.oppLotDetails.priceType;
    }

    handleToggleSafexOption(option: SafexOption) {
        this.lotDetails.exchangeValue = option;
    }

    handleChangePriceStep() {
        this.priceMatStepper.next();
    }

    handleChangePositionStep() {
        this.positionMatStepper.next();
    }

    handleShowPriceHint(userLot: LotMatchDetails) {
        this.showPriceHint = this.lotDetails.price === 0 && !this.showPriceHint;
        this.isMatch = userLot.price === this.oppLotDetails.price;
    }

    handleCropChange() {
        this.store.dispatch(
            actions.cropActions.ReqCropMonthsAndGrades({
                cropId: this.lotDetails.crop.id,
                exchangeId: this.lotDetails.exchange.id,
            }),
        );
    }

    handleLocationSelection($event: Address) {
        this.lotDetails.deliveryPoint.town = $event.formatted_address;
        this.lotDetails.deliveryPoint.googlePlaceId = $event.place_id;
        this.lotDetails.deliveryPoint.location.lat = $event.geometry.location.lat();
        this.lotDetails.deliveryPoint.location.lng = $event.geometry.location.lng();
    }

    handleSearchTermChange(searchTerm: string | DeliveryPoint) {
        this.isMatch = searchTerm === this.oppLotDetails.deliveryPoint.town;

        if (typeof searchTerm === 'string') {
            this.filteredDeliveryPoints = this.publicDeliveryPoints.filter((filtered) => {
                return filtered.name.toLocaleLowerCase().includes(this.searchTerm.toLocaleLowerCase());
            });
        }
    }

    handleSelectDeliveryPoint(deliveryPoint: DeliveryPoint) {
        this.lotDetails.deliveryPoint = deliveryPoint;
        this.selectedDeliveryPointId = deliveryPoint.id;
        this.searchTerm = deliveryPoint.name;
        this.handleUpdateMarkers();
    }

    handleSearchIconClick() {
        this.searchTerm = '';
        this.selectedDeliveryPointId = null;
        this.handleUpdateMarkers();
    }

    handleMatchDeliveryPoint(oppDeliveryPoint) {
        this.lotDetails.deliveryPoint = oppDeliveryPoint;
        this.lotDetails.incoTerm = this.oppLotDetails.incoTerm;
        this.handleUpdateMatchMarkers();
    }

    handleMatchItem(matchItem: MatchItems) {
        this.isMatch = true;
        if (matchItem === 'Product') {
            this.lotDetails.packaging = this.oppLotDetails.packaging;
        }
        if (matchItem === 'ContractPrice') {
            this.lotDetails.price = this.oppLotDetails.price;
            this.lotDetails.month = this.oppLotDetails.month;
            this.lotDetails.exchange = this.oppLotDetails.exchange;
            this.lotDetails.exchangeValue = this.oppLotDetails.exchangeValue;
            this.lotDetails.priceType = this.oppLotDetails.priceType;
        }
        if (matchItem === 'Payment') {
            this.lotDetails.payment = this.oppLotDetails.payment;
        }
        if (matchItem === 'Quantity') {
            this.lotDetails.quantity = this.oppLotDetails.quantity;
            this.lotDetails.unitOfMeasure = this.oppLotDetails.unitOfMeasure;
            this.handleQuantityChange();
        }
        if (matchItem === 'Quality') {
            this.lotDetails.grade = this.oppLotDetails.grade;
        }
        if (matchItem === 'Period') {
            this.lotDetails.dateFrom = this.oppLotDetails.dateFrom;
            this.lotDetails.dateTo = this.oppLotDetails.dateTo;
            this.handlePeriodChange();
        }
        if (matchItem === 'Position') {
            this.handleMatchDeliveryPoint(this.oppLotDetails.deliveryPoint);
        }
    }

    handleCloseModal() {
        if (this.isFormValidHelper()) {
            this.handleUpdateMarkers();

            if (!this.isMatchPeriod && this.matchItem === 'Period') {
                this.transformDateToUtcHelper(this.lotDetails.dateFrom);
                this.transformDateToUtcHelper(this.lotDetails.dateTo);
            }

            if (this.lotMatch.userType === 'Sell') {
                this.lotMatch.sellerDetails = this.lotDetails;
                this.lotMatch.buyerDetails = this.oppLotDetails;
            } else {
                this.lotMatch.buyerDetails = this.lotDetails;
                this.lotMatch.sellerDetails = this.oppLotDetails;
            }

            this.handleSaveIteration();

            this.dialogRef.close(this.lotMatch);
        }
    }

    handleSaveIteration() {
        this.isActionLoading = true;
        const lotMatch = this.lotMatch;
        this.store.dispatch(actions.matchActions.ReqUpdateLotMatch({ lotMatch: lotMatch }));

        this.actions$
            .pipe(ofType(actions.matchActions.UpdateLotMatchSuccess, actions.matchActions.UpdateLotMatchFail), take(1))
            .subscribe(() => {
                this.isActionLoading = false;
                this.dialogRef.close(this.lotMatch);
            });
    }

    handleCancelModal() {
        this.dialogRef.close(null);
    }

    handleClosePeriodModal(period?: LotMatchDetails) {
        if (period.dateFrom === null || period.dateTo === null) {
            this.snackbar.open('Enter a valid date range', 'CLOSE', snackBarConfigs.errorConfig);
        } else {
            this.handleCloseModal();
        }
    }

    handleUpdateMarkers() {
        this.markers = [this.lotDetails.deliveryPoint, this.oppLotDetails.deliveryPoint];
    }

    handleUpdateMatchMarkers() {
        this.markers = [this.oppLotDetails.deliveryPoint];
    }

    handlePeriodChange() {
        this.isPeriodValid = this.lotDetails.dateFrom < this.lotDetails.dateTo && new Date() < this.lotDetails.dateTo;
        this.isMatch =
            this.getShortDateHelper(this.lotMatch.sellerDetails.dateFrom) ===
                this.getShortDateHelper(this.lotMatch.buyerDetails.dateFrom) &&
            this.getShortDateHelper(this.lotMatch.sellerDetails.dateTo) ===
                this.getShortDateHelper(this.lotMatch.buyerDetails.dateTo);
    }
    handleQuantityChange() {
        this.isQuantityValid = this.lotDetails.quantity <= 1000000;
        this.isMatch = this.lotDetails.quantity === this.oppLotDetails.quantity;
    }
    handleQualityChange() {
        this.isMatch = this.lotDetails.grade?.id === this.oppLotDetails.grade?.id;
    }
    handlePaymentChange() {
        this.isMatch = this.lotDetails.payment?.id === this.oppLotDetails.payment?.id;
    }
    handleProductChange() {
        this.isMatch = this.lotDetails.packaging?.id === this.oppLotDetails.packaging?.id;
    }

    //#endregion

    //#region  getOpposingValues

    getOpposingProductHelper() {
        this.opposingValue = this.oppLotDetails.packaging ? this.oppLotDetails.packaging.name : 'No packaging chosen';
    }

    getOpposingPositionHelper() {
        this.opposingValue = this.oppLotDetails.deliveryPoint.name;
    }

    getOpposingPeriodHelper() {
        this.isSeller
            ? (this.opposingValue =
                  this.getShortDateHelper(this.lotMatch.buyerDetails.dateFrom) +
                  ' - ' +
                  this.getShortDateHelper(this.lotMatch.buyerDetails.dateTo))
            : (this.opposingValue =
                  this.getShortDateHelper(this.lotMatch.sellerDetails.dateFrom) +
                  ' - ' +
                  this.getShortDateHelper(this.lotMatch.sellerDetails.dateTo));
    }

    getOpposingPaymentHelper() {
        this.opposingValue = this.oppLotDetails.payment.name;
    }

    getOpposingQuantityHelper() {
        this.opposingValue = this.oppLotDetails.quantity;
        this.secondOpposingValue = this.oppLotDetails.unitOfMeasure.name;
    }

    getOpposingQualityHelper() {
        this.opposingValue = this.oppLotDetails.grade.name;
    }

    getOpposingContractPriceHelper() {
        this.oppLotDetails.priceType.id === 1 && this.oppLotDetails.exchangeValue === 'MINUS'
            ? (this.opposingValue = `-${this.oppLotDetails.price}`)
            : (this.opposingValue = this.oppLotDetails.price);
    }

    //#endregion

    //#region isMatch Helpers

    isProductMatchHelper() {
        this.isMatch = this.lotMatch.sellerDetails.packaging?.id === this.lotMatch.buyerDetails.packaging?.id;
    }

    isPositionMatchHelper() {
        this.isMatch =
            this.lotMatch.sellerDetails.deliveryPoint.id === this.lotMatch.buyerDetails.deliveryPoint.id &&
            this.lotMatch.sellerDetails.incoTerm.id === this.lotMatch.buyerDetails.incoTerm.id;
    }

    isPeriodMatchHelper() {
        this.isMatch =
            this.getShortDateHelper(this.lotMatch.sellerDetails.dateFrom) ===
                this.getShortDateHelper(this.lotMatch.buyerDetails.dateFrom) &&
            this.getShortDateHelper(this.lotMatch.sellerDetails.dateTo) ===
                this.getShortDateHelper(this.lotMatch.buyerDetails.dateTo);
    }

    isPaymentMatchHelper() {
        this.isMatch = this.lotMatch.sellerDetails.payment.id === this.lotMatch.buyerDetails.payment.id;
    }

    isQuantityMatchHelper() {
        this.isMatch =
            this.lotMatch.sellerDetails.quantity === this.lotMatch.buyerDetails.quantity &&
            this.lotMatch.sellerDetails.unitOfMeasure.id === this.lotMatch.buyerDetails.unitOfMeasure.id;
    }

    isQualityMatchHelper() {
        this.isMatch = this.lotMatch.sellerDetails.grade.id === this.lotMatch.buyerDetails.grade.id;
    }

    isContractPriceMatchHelper() {
        this.isMatch =
            this.lotMatch.sellerDetails.price === this.lotMatch.buyerDetails.price &&
            this.lotMatch.sellerDetails.priceType.id === this.lotMatch.buyerDetails.priceType.id &&
            this.lotMatch.sellerDetails.exchange.id === this.lotMatch.buyerDetails.exchange.id &&
            this.lotMatch.sellerDetails.exchangeValue === this.lotMatch.buyerDetails.exchangeValue &&
            this.lotMatch.sellerDetails.month?.id === this.lotMatch.buyerDetails.month?.id;
    }

    //#endregion

    compareSelectionsHelper(selection1: IdName, selection2: IdName) {
        return selection1.id === selection2?.id;
    }

    isFormValidHelper() {
        if (this.matchItem === 'Quantity') return this.isQuantityValid;
        else if (this.matchItem === 'Period') return this.isPeriodValid;
        else return true;
    }

    getInfoBoxTextHelper(matchItem: string) {
        const finalMatchItem =
            matchItem === 'Quantity'
                ? 'quantities'
                : matchItem === 'Quality'
                ? 'qualities'
                : matchItem === 'Position'
                ? 'positions (or INCO terms)'
                : matchItem === 'Product'
                ? 'product packaging'
                : matchItem.toLowerCase() + 's';
        return `The ${finalMatchItem} do not match`;
    }

    transformDateToUtcHelper(date: Date) {
        let newDate = date;
        newDate.setHours(10);
        return newDate;
    }

    getShortDateHelper(date: Date) {
        return formatDate(date, 'dd/MM/yyyy', 'en-ZA');
    }

    getCorrectMatchItemNameHelper(value: string): string {
        return value.split(/(?=[A-Z])/).join(' ');
    }
}
