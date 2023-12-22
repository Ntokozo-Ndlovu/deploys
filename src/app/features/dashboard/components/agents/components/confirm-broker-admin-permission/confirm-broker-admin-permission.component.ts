import { Component, OnInit } from '@angular/core';
import { MatLegacyDialogRef as MatDialogRef } from '@angular/material/legacy-dialog';

@Component({
    selector: 'app-confirm-broker-admin-permission',
    templateUrl: './confirm-broker-admin-permission.component.html',
    styleUrls: ['./confirm-broker-admin-permission.component.scss'],
})
export class ConfirmBrokerAdminPermissionComponent implements OnInit {
    constructor(private dialogRef: MatDialogRef<ConfirmBrokerAdminPermissionComponent>) {}

    ngOnInit(): void {}

    handleCloseModal(): void {
        this.dialogRef.close();
    }
}
