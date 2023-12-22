import { DateRange } from '../../../../core/models/queryModels';
import { Component, OnInit } from '@angular/core';
import { MatLegacyDialogRef as MatDialogRef } from '@angular/material/legacy-dialog';

@Component({
    selector: 'app-lots-analytics-modal',
    templateUrl: './lots-analytics-modal.component.html',
    styleUrls: ['./lots-analytics-modal.component.scss'],
})
export class LotsAnalyticsModalComponent implements OnInit {
    lowerBound: Date;
    upperBound: Date;

    constructor(private dialogRef: MatDialogRef<LotsAnalyticsModalComponent>) {}

    ngOnInit(): void {}

    handleCloseModal() {
        const dateRange: DateRange = { lowerBound: this.lowerBound, upperBound: this.upperBound };
        this.dialogRef.close(dateRange);
    }
}
