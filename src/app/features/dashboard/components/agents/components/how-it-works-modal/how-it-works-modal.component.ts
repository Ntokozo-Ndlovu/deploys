import { Component, OnInit } from '@angular/core';
import { MatLegacyDialogRef as MatDialogRef } from '@angular/material/legacy-dialog';
import { Router } from '@angular/router';
import { HOME_ROUTE } from 'src/app/core/helpers/constants';

@Component({
    selector: 'app-ts-and-cs-modal',
    templateUrl: './how-it-works-modal.component.html',
    styleUrls: ['./how-it-works-modal.component.scss'],
})
export class HowItWorksModalComponent implements OnInit {
    constructor(private dialogRef: MatDialogRef<HowItWorksModalComponent>, private router: Router) {}

    ngOnInit(): void {}

    handleBack() {
        this.router.navigate([HOME_ROUTE]);
        this.dialogRef.close();
    }

    handleRouteToBrokers() {
        this.dialogRef.close();
    }
}
