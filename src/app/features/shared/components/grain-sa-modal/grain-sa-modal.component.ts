import { Component, Inject, OnInit } from '@angular/core';
import { MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { Router } from '@angular/router';
import { VERIFICATION_ROUTE } from 'src/app/core/helpers/constants';

@Component({
    selector: 'app-grain-sa-modal',
    templateUrl: './grain-sa-modal.component.html',
    styleUrls: ['./grain-sa-modal.component.scss'],
})
export class GrainSaModalComponent implements OnInit {
    constructor(
        private dialogRef: MatDialogRef<GrainSaModalComponent>,
        private router: Router,
        @Inject(MAT_DIALOG_DATA) public data: { showSubscription: boolean },
    ) {}

    ngOnInit(): void {}

    handleClose(): void {
        this.dialogRef.close();
    }

    handleNavigateToSubscriptions(): void {
        this.dialogRef.close();
        this.router.navigate([VERIFICATION_ROUTE]);
    }
}
