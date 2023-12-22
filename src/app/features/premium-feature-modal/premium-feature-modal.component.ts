import { Component, Inject, OnInit } from '@angular/core';
import { MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { Router } from '@angular/router';
import { VERIFICATION_ROUTE } from 'src/app/core/helpers/constants';

@Component({
    selector: 'app-premium-feature-modal',
    templateUrl: './premium-feature-modal.component.html',
    styleUrls: ['./premium-feature-modal.component.scss'],
})
export class PremiumFeatureModalComponent implements OnInit {
    constructor(
        private dialogRef: MatDialogRef<PremiumFeatureModalComponent>,
        private router: Router,
        @Inject(MAT_DIALOG_DATA) public data: { featurePhrase: string; subscribeText: string },
    ) {}

    ngOnInit(): void {}

    handleClose(): void {
        this.dialogRef.close();
    }

    handleNavigateToSubscribeToBeVerified(): void {
        this.router.navigate([VERIFICATION_ROUTE]);
        this.handleClose();
    }
}
