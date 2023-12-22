import { Component, OnInit } from '@angular/core';
import { MatLegacyDialogRef as MatDialogRef } from '@angular/material/legacy-dialog';

@Component({
    selector: 'app-refresh-modal',
    templateUrl: './refresh-modal.component.html',
    styleUrls: ['./refresh-modal.component.scss'],
})
export class RefreshModalComponent implements OnInit {
    constructor(private dialogRef: MatDialogRef<RefreshModalComponent>) {}

    ngOnInit(): void {}

    handleCloseModal() {
        this.dialogRef.close();
    }
}
