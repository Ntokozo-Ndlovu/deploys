import { Injectable } from '@angular/core';
import { MatLegacyDialog as MatDialog, MatLegacyDialogRef as MatDialogRef } from '@angular/material/legacy-dialog';
import { ConfirmationModalComponent } from '../../../features/broker-dashboard/components/confirmation-modal/confirmation-modal.component';
import { Client } from '../../models/queryModels';

@Injectable({
    providedIn: 'root',
})
export class ConfirmationModalService {
    constructor(private dialog: MatDialog) {}

    open(
        header: string,
        subHeader: string,
        clientData: Client,
        confirmButton: string,
        declineButton: string,
    ): MatDialogRef<ConfirmationModalComponent> {
        return this.dialog.open(ConfirmationModalComponent, {
            panelClass: 'g-modal-container',
            data: {
                header,
                subHeader,
                clientData,
                confirmButton,
                declineButton,
            },
        });
    }
}
