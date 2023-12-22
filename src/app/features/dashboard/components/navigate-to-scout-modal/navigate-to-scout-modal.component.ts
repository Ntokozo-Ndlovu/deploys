import { Component, OnInit } from '@angular/core';
import { MatLegacyDialogRef as MatDialogRef } from '@angular/material/legacy-dialog';
import { Router } from '@angular/router';
import { SCOUTS_ROUTE } from 'src/app/core/helpers/constants';

@Component({
    selector: 'app-navigate-to-scout-modal',
    templateUrl: './navigate-to-scout-modal.component.html',
    styleUrls: ['./navigate-to-scout-modal.component.scss'],
})
export class NavigateToScoutModalComponent implements OnInit {
    constructor(private dialogRef: MatDialogRef<NavigateToScoutModalComponent>, private router: Router) {}

    ngOnInit(): void {}

    handleClose(): void {
        this.dialogRef.close();
    }

    handleNavigateToScout() {
        this.dialogRef.close();
        this.router.navigate([SCOUTS_ROUTE]);
    }
}
