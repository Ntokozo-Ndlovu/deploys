import { Component, Inject, OnInit } from '@angular/core';
import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA, MatLegacyDialogRef as MatDialogRef } from '@angular/material/legacy-dialog';

@Component({
    selector: 'app-negotiation-update-modal',
    templateUrl: './negotiation-update-modal.component.html',
    styleUrls: ['./negotiation-update-modal.component.scss'],
})
export class NegotiationUpdateModalComponent implements OnInit {
    constructor(
        private dialogRef: MatDialogRef<NegotiationUpdateModalComponent>,
        @Inject(MAT_DIALOG_DATA)
        public data: {
            completePage: boolean;
        },
    ) {}

    ngOnInit(): void {}

    handleCloseDialog() {
        this.dialogRef.close();
        window.location.reload();
    }
}
