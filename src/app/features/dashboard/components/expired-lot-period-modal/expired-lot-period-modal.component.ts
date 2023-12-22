import { Component, Inject, OnInit } from '@angular/core';
import { MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';

@Component({
    selector: 'app-expired-lot-period-modal',
    templateUrl: './expired-lot-period-modal.component.html',
    styleUrls: ['./expired-lot-period-modal.component.scss'],
})
export class ExpiredLotPeriodModalComponent implements OnInit {
    dateFrom: string = '';
    dateTo: string = '';

    constructor(
        private dialogRef: MatDialogRef<ExpiredLotPeriodModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: { dateFrom: string; dateTo: string },
    ) {
        this.dateFrom = this.data.dateFrom;
        this.dateTo = this.data.dateTo;
    }

    ngOnInit(): void {}

    handleClose(): void {
        this.dialogRef.close();
    }

    handleCloseWithAction(action: 'edit' | 'view'): void {
        this.dialogRef.close(action);
    }
}
