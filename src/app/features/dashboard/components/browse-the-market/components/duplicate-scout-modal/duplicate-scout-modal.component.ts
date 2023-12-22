import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';

import { Actions, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import * as fromScout from 'src/app/core/ngrx/entities/scout/index';
import { take } from 'rxjs/operators';

import { SCOUTS_ROUTE, SCOUT_EDIT_ROUTE } from 'src/app/core/helpers/constants';
import { Scout } from 'src/app/core/models/queryModels';
import { MarketLotCard, ScoutCard } from 'src/app/core/models/viewModels';
import { prepareScoutFromMarketLotCardHelper } from 'src/app/core/helpers/helperFunctions';

import { cloneDeep } from 'lodash';

@Component({
    selector: 'app-duplicate-scout-modal',
    templateUrl: './duplicate-scout-modal.component.html',
    styleUrls: ['./duplicate-scout-modal.component.scss'],
})
export class DuplicateScoutModalComponent implements OnInit {
    duplicateScoutCard: ScoutCard = null as ScoutCard;
    marketLotCard: MarketLotCard = null as MarketLotCard;

    actionIsLoading: boolean = false;

    constructor(
        private dialogRef: MatDialogRef<DuplicateScoutModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: { duplicateScoutCard: ScoutCard; marketLotCard: MarketLotCard },
        private router: Router,
        private actions$: Actions,
        private store: Store,
    ) {
        this.duplicateScoutCard = this.data.duplicateScoutCard;
        this.marketLotCard = cloneDeep(this.data.marketLotCard);
    }

    ngOnInit(): void {}

    // #region Handlers

    handleClose(): void {
        this.dialogRef.close();
    }

    handleRouteToScout(): void {
        this.router.navigate([`${SCOUT_EDIT_ROUTE}/${this.duplicateScoutCard.id}`]);
        this.handleClose();
    }

    handleCreateScout(): void {
        this.actionIsLoading = true;

        this.actions$
            .pipe(ofType(fromScout.scoutActions.CreateScoutSuccess, fromScout.scoutActions.CreateScoutFail), take(1))
            .subscribe((action: Action) => {
                if (action.type === fromScout.scoutActions.CreateScoutSuccess.type) {
                    this.router.navigate([SCOUTS_ROUTE]);
                    this.handleClose();
                }
                this.actionIsLoading = false;
            });

        const scout: Scout = prepareScoutFromMarketLotCardHelper(cloneDeep(this.marketLotCard));
        this.store.dispatch(fromScout.scoutActions.ReqUpdateSearchValues({ scout }));
        this.store.dispatch(fromScout.scoutActions.ReqCreateScout({ isPublic: true }));
    }

    // #endregion
}
