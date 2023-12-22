import { Component, OnInit } from '@angular/core';
import { MatLegacyDialogRef as MatDialogRef } from '@angular/material/legacy-dialog';

@Component({
    selector: 'app-delete-account-modal',
    templateUrl: './delete-account-modal.component.html',
    styleUrls: ['./delete-account-modal.component.scss'],
})
export class DeleteAccountModalComponent implements OnInit {
    constructor(private dialogRef: MatDialogRef<DeleteAccountModalComponent>) {}

    ngOnInit(): void {}

    handleClose(): void {
        this.dialogRef.close(false);
    }

    handleDelete(): void {
        this.dialogRef.close(true);
    }
}
