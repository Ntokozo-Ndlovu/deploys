import { Component, OnInit } from '@angular/core';
import { MatLegacyDialogRef as MatDialogRef } from '@angular/material/legacy-dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as snackBarConfigs from 'src/app/core/helpers/snackbar';
import { AdditionalEntityDetail, AdditionalEntityDetailsClass } from 'src/app/core/models/queryModels';
import { emailRegex, ratingData } from 'src/app/core/helpers/constants';
import { bbbeeRating } from 'src/app/core/models/viewModels';

@Component({
    selector: 'app-additional-info-modal',
    templateUrl: './additional-info-modal.component.html',
    styleUrls: ['./additional-info-modal.component.scss'],
})
export class AdditionalInfoModalComponent implements OnInit {
    additionalEntityDetails: AdditionalEntityDetail = new AdditionalEntityDetailsClass();
    ratingData: bbbeeRating[] = ratingData;

    constructor(private dialogRef: MatDialogRef<AdditionalInfoModalComponent>, private snackbar: MatSnackBar) {}

    ngOnInit(): void {}

    handleToggleExFarm(option: boolean): void {
        option !== this.additionalEntityDetails.exFarm && (this.additionalEntityDetails.exFarm = option);
    }

    validateEmail(email): boolean {
        return emailRegex.test(String(email).toLowerCase());
    }

    handleSaveDetails(email): void {
        const isEmail = this.validateEmail(email);

        if (!(this.additionalEntityDetails.legalEntityName.length < 2) && isEmail) {
            this.dialogRef.close(this.additionalEntityDetails);
        } else {
            this.additionalEntityDetails.legalEntityName.length < 2
                ? this.snackbar.open('Please enter a valid Entity name.', 'CLOSE', snackBarConfigs.errorConfig)
                : this.snackbar.open('Please enter a valid Email', 'CLOSE', snackBarConfigs.errorConfig);
        }
    }
}
