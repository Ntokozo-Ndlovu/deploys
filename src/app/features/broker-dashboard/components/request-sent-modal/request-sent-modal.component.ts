import { Component } from '@angular/core';
import { MatLegacyDialogRef as MatDialogRef } from '@angular/material/legacy-dialog';

@Component({
    selector: 'app-request-sent-modal',
    templateUrl: './request-sent-modal.component.html',
    styleUrls: ['./request-sent-modal.component.scss'],
})
export class RequestSentModalComponent {
    constructor(private dialogRef: MatDialogRef<RequestSentModalComponent>) {}

    handleCloseModal(): void {
        this.dialogRef.close();
    }
}
