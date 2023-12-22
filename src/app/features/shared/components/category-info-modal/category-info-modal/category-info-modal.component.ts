import { Component, Inject, OnInit } from '@angular/core';
import { MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { select, Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import { Crop } from 'src/app/core/models/queryModels';
import * as fromLot from 'src/app/features/lots/lots.selectors';
import * as fromCrop from 'src/app/core/ngrx/crop/crop.selectors';
import * as actions from 'src/app/core/helpers/index.actions';
import { Actions, ofType } from '@ngrx/effects';

@Component({
    selector: 'app-category-info-modal',
    templateUrl: './category-info-modal.component.html',
    styleUrls: ['./category-info-modal.component.scss'],
})
export class CategoryInfoModalComponent implements OnInit {
    isDataLoading: boolean = true;
    crops: Crop[];

    constructor(
        private dialogRef: MatDialogRef<CategoryInfoModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: { categoryId: number; iconSource: string; categoryName: string },
        private actions$: Actions,
        private store: Store<fromLot.State>,
    ) {}

    ngOnInit(): void {
        this.store.dispatch(actions.cropActions.ReqAllCrops());

        this.actions$.pipe(ofType(actions.cropActions.AllCropsSuccess), take(1)).subscribe(() => {
            this.store
                .pipe(select(fromCrop.selectCropByCategoryId, this.data.categoryId), take(1))
                .subscribe((crops) => {
                    this.crops = crops;
                    this.isDataLoading = false;
                });
        });
    }

    handleClose(): void {
        this.dialogRef.close();
    }
}
