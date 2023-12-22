import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { Component, Inject, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';

@Component({
    selector: 'app-confirmation-modal',
    templateUrl: './confirmation-modal.component.html',
    styleUrls: ['./confirmation-modal.component.scss'],
})
export class ConfirmationModalComponent implements OnInit {
    currentAction: string;
    currentItem: string;

    constructor(
        private dialogRef: MatDialogRef<ConfirmationModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
    ) {}

    ngOnInit(): void {
        this.currentAction = this.data.currentAction;
        this.currentItem = this.data.currentItem;
    }

    handleCloseModal() {
        this.dialogRef.close(false);
    }

    handleConfirmAction() {
        this.dialogRef.close(true);
    }
}

@NgModule({
    declarations: [ConfirmationModalComponent],
    imports: [CommonModule, MatButtonModule],
    exports: [ConfirmationModalComponent],
})
export class ConfirmationComponentModule {}
