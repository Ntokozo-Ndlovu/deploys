import { Component, Inject, OnInit } from '@angular/core';
import { MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { StepInfo } from 'src/app/core/models/viewModels';

@Component({
    selector: 'app-step-info-modal',
    templateUrl: './step-info-modal.component.html',
    styleUrls: ['./step-info-modal.component.scss'],
})
export class StepInfoModalComponent implements OnInit {

    constructor(
        private dialogRef: MatDialogRef<StepInfoModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: { stepInfo: StepInfo },
    ) {}

    ngOnInit(): void {}

    handleClose(): void {
        this.dialogRef.close();
    }
}
