import { Component, Inject, OnInit } from '@angular/core';
import { MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { Dictionary } from '@ngrx/entity';
import { VerificationType } from 'src/app/core/models/viewModels';

@Component({
    selector: 'app-verification-modal',
    templateUrl: './verification-modal.component.html',
    styleUrls: ['./verification-modal.component.scss'],
})
export class VerificationModalComponent implements OnInit {
    isFilter: boolean = true;
    verificationTypes: Dictionary<VerificationType> = {};
    selectedVerificationType: VerificationType | null = null;
    showWarning: boolean = false;

    constructor(
        private dialogRef: MatDialogRef<VerificationModalComponent>,
        @Inject(MAT_DIALOG_DATA)
        private data: {
            isFilter: boolean;
            verificationTypes: Dictionary<VerificationType>;
            selectedVerificationType: VerificationType;
        },
    ) {}

    ngOnInit(): void {
        this.isFilter = this.data.isFilter;
        this.verificationTypes = this.data.verificationTypes;
        this.selectedVerificationType = this.data.selectedVerificationType;
    }

    handleCloseModal() {
        this.dialogRef.close();
    }

    handleSelectVerificationType(verificationType: VerificationType) {
        this.selectedVerificationType = verificationType === this.selectedVerificationType ? null : verificationType;
    }

    handleCloseModalAndUpdateVerification() {
        !this.isFilter && !this.selectedVerificationType
            ? (this.showWarning = true)
            : this.dialogRef.close(this.selectedVerificationType);
    }
}
