import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, NgModule, OnInit, Output } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { cropCategoriesImages, LOTS_CREATE_ROUTE } from 'src/app/core/helpers/constants';
import { IdName, ScoutType } from 'src/app/core/models/queryModels';
import { CropCategoryCardData } from 'src/app/core/models/viewModels';
import { environment } from 'src/environments/environment.prod';
import { CategoryInfoModalComponent } from '../category-info-modal/category-info-modal/category-info-modal.component';

@Component({
    selector: 'app-crop-categories',
    templateUrl: './crop-categories.component.html',
    styleUrls: ['./crop-categories.component.scss'],
})
export class CropCategoriesComponent implements OnInit {
    @Input() get cropCategories(): IdName[] {
        return this._cropCategoryCards;
    }
    set cropCategories(value: IdName[]) {
        this._cropCategoryCards = [];
        const activeCropCategories: IdName[] = value.filter((v) => environment.CROP_CATEGORIES.includes(v.id));
        const inActiveCropCategories: IdName[] = value.filter((v) => !environment.CROP_CATEGORIES.includes(v.id));
        const orderedCropCategories: IdName[] = [...activeCropCategories, ...inActiveCropCategories];
        for (let i = 0; i < orderedCropCategories.length; i++) {
            this._cropCategoryCards.push({
                ...orderedCropCategories[i],
                ...cropCategoriesImages.find(
                    (cropCategoriesImage) => cropCategoriesImage.name === orderedCropCategories[i].name,
                ),
                isAvailable: environment.CROP_CATEGORIES.includes(orderedCropCategories[i].id),
            });
        }
    }

    @Output() $changeCropCategoryEvent: EventEmitter<number> = new EventEmitter();

    _cropCategoryCards: CropCategoryCardData[] = [];

    lotType: ScoutType;
    isScoutCreate: boolean = false;

    constructor(private route: ActivatedRoute, private router: Router, private dialog: MatDialog) {}

    ngOnInit(): void {
        this.route.url.pipe(take(1)).subscribe(() => {
            if (this.route.snapshot.url[0].path === 'create') {
                this.isScoutCreate = true;
            }
        });

        this.route.queryParams.pipe(take(1)).subscribe(({ lotType }) => {
            if (lotType) {
                this.lotType = lotType;
            }
        });
    }

    handleChooseCropCategory(id: number, isAvailable: boolean) {
        if (isAvailable) {
            this.isScoutCreate
                ? this.$changeCropCategoryEvent.emit(id)
                : this.router.navigate([LOTS_CREATE_ROUTE], {
                      queryParams: { lotType: this.lotType, cropCategoryId: id },
                  });
        }
    }

    handleInfoModal(id: number, src: string, name: string, e: Event): void {
        e.stopPropagation();
        this.dialog.open(CategoryInfoModalComponent, {
            panelClass: 'g-modal-container',
            data: {
                categoryId: id,
                iconSource: src,
                categoryName: name,
            },
        });
    }
}

@NgModule({
    declarations: [CropCategoriesComponent],
    imports: [CommonModule, MatRippleModule],
    exports: [CropCategoriesComponent],
})
export class CropCategoriesModule {}
