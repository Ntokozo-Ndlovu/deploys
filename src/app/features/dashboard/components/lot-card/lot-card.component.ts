import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { LotCard } from 'src/app/core/models/viewModels';
import * as fromDashboard from 'src/app/features/dashboard/dashboard.selectors';
import * as actions from 'src/app/core/helpers/index.actions';
import { LOTS_EDIT_ROUTE, LOTS_MATCH_ROUTE } from './../../../../core/helpers/constants';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { ExpiredLotPeriodModalComponent } from '../expired-lot-period-modal/expired-lot-period-modal.component';
import { take } from 'rxjs/operators';

@Component({
    selector: 'app-lot-card',
    templateUrl: './lot-card.component.html',
    styleUrls: ['./lot-card.component.scss'],
})
export class LotCardComponent implements OnInit {
    @Input() get lotCard(): LotCard {
        return this._lotCard;
    }
    set lotCard(value: LotCard) {
        this._lotCard = value;
        if (this._lotCard.lotType === 'Buy') {
            this.isBuyer = true;
        }
        this.usableLotName =
            this._lotCard.lotName.length > 24
                ? this.formatTextHelper(this._lotCard.lotName, 24)
                : this._lotCard.lotName;
        this.usableLotDeliveryPointName =
            this._lotCard.deliveryPointName.length > 30
                ? this.formatTextHelper(this._lotCard.deliveryPointName, 30)
                : this._lotCard.deliveryPointName;
    }
    _lotCard: LotCard = {} as LotCard;

    usableLotName: string = '';
    usableLotDeliveryPointName: string = '';

    isBuyer: boolean = false;

    constructor(private router: Router, private store: Store<fromDashboard.State>, private dialog: MatDialog) {}

    ngOnInit(): void {}

    handleCardClick(intendedAction: 'edit' | 'view'): void {
        this._lotCard.isExpired ? this.openExpiredLotPeriodDialogHelper() : this[`${intendedAction}LotHelper`]();
    }

    editLotHelper(): void {
        this.store.dispatch(actions.lotActions.ReqSaveLotFormData({ lot: null }));
        this.router.navigate([`${LOTS_EDIT_ROUTE}/${this._lotCard.id}`]);
    }

    viewLotHelper(): void {
        const queryParams = this.isBuyer ? { isBuyer: true, radius: this._lotCard.radius } : {};
        this.router.navigate([`${LOTS_MATCH_ROUTE}/${this._lotCard.id}`], { queryParams: queryParams });
    }

    openExpiredLotPeriodDialogHelper(): void {
        const dialogRef = this.dialog.open(ExpiredLotPeriodModalComponent, {
            panelClass: 'g-modal-container',
            data: {
                dateFrom: this._lotCard.dateFrom,
                dateTo: this._lotCard.dateTo,
            },
        });
        dialogRef
            .afterClosed()
            .pipe(take(1))
            .subscribe((action) => {
                action && this[`${action}LotHelper`]();
            });
    }

    formatTextHelper(text: string, formattedLength: number): string {
        return `${text.slice(0, formattedLength)}...`;
    }
}
