import { Analytics } from '../../../../core/models/queryModels';
import { Component, Inject, OnInit } from '@angular/core';
import { MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';

@Component({
    selector: 'app-skudu-analytics-modal',
    templateUrl: './skudu-analytics-modal.component.html',
    styleUrls: ['./skudu-analytics-modal.component.scss'],
})
export class SkuduAnalyticsModalComponent implements OnInit {
    numberOfBuyingScouts: number;
    numberOfSellingScouts: number;
    numberOfBuyingLots: number;
    numberOfSellingLots: number;
    totalSkuduMatches: number;
    volumeNegotiatedInTons: number;

    constructor(
        private dialogRef: MatDialogRef<SkuduAnalyticsModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: Analytics,
    ) {}

    ngOnInit(): void {
        this.numberOfBuyingScouts = this.data.numberOfBuyingScouts;
        this.numberOfSellingScouts = this.data.numberOfSellingScouts;
        this.numberOfBuyingLots = this.data.numberOfBuyingLots;
        this.numberOfSellingLots = this.data.numberOfSellingLots;
        this.totalSkuduMatches = this.data.totalSkuduMatches;
        this.volumeNegotiatedInTons = this.data.volumeNegotiatedInTons;
    }

    handleCloseModal() {
        this.dialogRef.close();
    }
}
