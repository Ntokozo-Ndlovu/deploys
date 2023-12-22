import { cloneDeep } from 'lodash';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import * as fromRoot from 'src/app/core/ngrx/reducers/index';
import * as actions from 'src/app/core/helpers/index.actions';
import * as fromCrop from './../../../../core/ngrx/crop/crop.selectors';
import { LOTS_ROUTE } from 'src/app/core/helpers/constants';
import { IdName } from 'src/app/core/models/queryModels';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-crop-categories-page',
    templateUrl: './crop-categories-page.component.html',
    styleUrls: ['./crop-categories-page.component.scss'],
})
export class CropCategoriesPageComponent implements OnInit {
    cropCategories: IdName[] = [];

    destroyed$: EventEmitter<void> = new EventEmitter<void>();

    constructor(private router: Router, private store: Store<fromRoot.State>) {}

    ngOnInit(): void {
        this.store
            .pipe(select(fromCrop.selectCropByCategories), takeUntil(this.destroyed$))
            .subscribe((cropCategories) => {
                if (cropCategories.length) {
                    this.cropCategories = cloneDeep(cropCategories);
                }
            });
        this.store.dispatch(actions.cropActions.ReqCropCategories());
    }

    ngOnDestroy(): void {
        this.destroyed$.next();
    }

    handleNavigateToDashboard(): void {
        this.router.navigate([LOTS_ROUTE]);
    }
}
