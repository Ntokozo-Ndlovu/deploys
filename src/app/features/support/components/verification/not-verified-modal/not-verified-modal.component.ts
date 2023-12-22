import { Component, OnInit } from '@angular/core';
import { MatLegacyDialogRef as MatDialogRef } from '@angular/material/legacy-dialog';
import { Router } from '@angular/router';
import { PROFILE_ROUTE } from 'src/app/core/helpers/constants';

@Component({
    selector: 'app-not-verified-modal',
    templateUrl: './not-verified-modal.component.html',
    styleUrls: ['./not-verified-modal.component.scss'],
})
export class NotVerifiedModalComponent implements OnInit {
    constructor(private dialogRef: MatDialogRef<NotVerifiedModalComponent>, private router: Router) {}

    ngOnInit(): void {}

    handleClose(): void {
        this.dialogRef.close();
    }

    handleRouteToProfile(): void {
        this.dialogRef.close();
        this.router.navigate([PROFILE_ROUTE], { queryParams: { tabIndex: 2 } });
    }
}
