import { Entity } from './../../../../core/models/queryModels';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, NgModule, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyDialogRef as MatDialogRef } from '@angular/material/legacy-dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import * as fromRoot from 'src/app/features/dashboard/dashboard.selectors';
import { takeUntil } from 'rxjs/operators';
import { submitMatchContent } from 'src/app/core/helpers/constants';

@Component({
    selector: 'app-submit-match',
    templateUrl: './submit-match.component.html',
    styleUrls: ['./submit-match.component.scss'],
})
export class SubmitMatchComponent implements OnInit, OnDestroy {
    entity: Entity[];
    stepperData: string[] = submitMatchContent;

    isLinear: boolean = true;
    isFinalStep: boolean = false;
    showMatch: boolean = false;

    destroyed$: EventEmitter<void> = new EventEmitter<void>();

    constructor(private router: Router, private dialogRef: MatDialogRef<SubmitMatchComponent>, private store: Store) {}

    ngOnInit(): void {
        this.store
            .pipe(select(fromRoot.authSelectors.getUserEntities), takeUntil(this.destroyed$))
            .subscribe((entity) => {
                this.entity = entity;
            });
    }

    ngOnDestroy(): void {
        this.destroyed$.next();
    }

    @ViewChild('stepper') stepper: MatStepper;

    handleBack() {
        if (this.isFinalStep) {
            this.isFinalStep = false;
        }

        this.stepper.previous();
    }

    handleNext() {
        if (this.isFinalStepHelper()) {
            this.closeModalAndDispatchHelper();
        } else {
            this.stepper.next();

            if (this.isFinalStepHelper()) {
                this.isFinalStep = true;
            }
        }
    }

    closeModalAndDispatchHelper() {
        this.dialogRef.close({ shouldDispatch: true });
    }

    handleCloseModal() {
        this.dialogRef.close({ shouldDispatch: false });
    }

    isFinalStepHelper() {
        return this.stepper.selectedIndex === this.stepperData.length - 1;
    }
}

@NgModule({
    declarations: [SubmitMatchComponent],
    imports: [CommonModule, MatStepperModule, MatIconModule, MatButtonModule],
    exports: [SubmitMatchComponent],
})
export class SubmitMatchModule {}
