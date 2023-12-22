import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Action, select, Store } from '@ngrx/store';
import { Actions, ofType } from '@ngrx/effects';
import * as fromScout from 'src/app/core/ngrx/entities/scout/index';

import { take, takeUntil } from 'rxjs/operators';

import { DuplicateScoutModalComponent } from '../duplicate-scout-modal/duplicate-scout-modal.component';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';

import { SCOUTS_ROUTE } from 'src/app/core/helpers/constants';
import { Scout } from 'src/app/core/models/queryModels';
import { MarketLotCard, ScoutCard } from 'src/app/core/models/viewModels';
import { prepareScoutFromMarketLotCardHelper } from 'src/app/core/helpers/helperFunctions';

@Component({
    selector: 'app-market-lot-card',
    templateUrl: './market-lot-card.component.html',
    styleUrls: ['./market-lot-card.component.scss'],
})
export class MarketLotCardComponent implements OnInit {
    @Input() marketLotCard: MarketLotCard = null as MarketLotCard;

    isSelling: boolean = true;
    formattedTownName: string = '';

    actionIsBeingDispatched: boolean = false;

    constructor(private store: Store, private actions$: Actions, private dialog: MatDialog, private router: Router) {}

    ngOnInit(): void {
        this.isSelling = this.marketLotCard.lotType === 'Sell';

        this.formattedTownName =
            this.marketLotCard.town.length > 30
                ? this.formatTextHelper(this.marketLotCard.town, 30)
                : this.marketLotCard.town;
    }

    // region Handlers

    handleCreateScout(): void {
        this.actionIsBeingDispatched = true;

        let scoutCards: ScoutCard[] = [];
        const scoutsHaveBeenRetrieved$: EventEmitter<void> = new EventEmitter<void>();

        this.store
            .pipe(select(fromScout.scoutSelectors.getAllScoutCards), takeUntil(scoutsHaveBeenRetrieved$))
            .subscribe((existingScoutCards: ScoutCard[]) => {
                scoutCards = existingScoutCards;
            });

        this.actions$
            .pipe(
                ofType(fromScout.scoutActions.UserScoutCardsSuccess, fromScout.scoutActions.UserScoutCardsFail),
                take(1),
            )
            .subscribe((action: Action) => {
                if (action.type === fromScout.scoutActions.UserScoutCardsSuccess.type) {
                    scoutsHaveBeenRetrieved$.next();
                    const duplicateScoutCard: ScoutCard | null = this.duplicateScoutCardExistsHelper(scoutCards);

                    if (scoutCards.length && duplicateScoutCard) {
                        this.dialog.open(DuplicateScoutModalComponent, {
                            panelClass: 'g-modal-container',
                            autoFocus: false,
                            data: {
                                duplicateScoutCard,
                                marketLotCard: this.marketLotCard,
                            },
                        });

                        this.actionIsBeingDispatched = false;
                    } else {
                        this.actions$
                            .pipe(
                                ofType(
                                    fromScout.scoutActions.CreateScoutSuccess,
                                    fromScout.scoutActions.CreateScoutFail,
                                ),
                                take(1),
                            )
                            .subscribe((action: Action) => {
                                if (action.type === fromScout.scoutActions.CreateScoutSuccess.type) {
                                    this.router.navigate([SCOUTS_ROUTE]);
                                }
                                this.actionIsBeingDispatched = false;
                            });

                        const scout: Scout = prepareScoutFromMarketLotCardHelper(this.marketLotCard);
                        this.store.dispatch(fromScout.scoutActions.ReqUpdateSearchValues({ scout }));
                        this.store.dispatch(fromScout.scoutActions.ReqCreateScout({ isPublic: true }));
                    }
                }
            });

        this.store.dispatch(fromScout.scoutActions.ReqUserScoutCards());
    }

    // #endregion

    // #region Helpers

    formatTextHelper(text: string, formattedLength: number): string {
        return `${text.slice(0, formattedLength)}...`;
    }

    duplicateScoutCardExistsHelper(scoutCards: ScoutCard[]): ScoutCard | null {
        const { lotType, crop, town } = this.marketLotCard;
        const duplicateScoutCard: ScoutCard | undefined = scoutCards.find(
            (scoutCard: ScoutCard) =>
                scoutCard.scoutType === lotType && scoutCard.crop.id === crop.id && scoutCard.town === town,
        );
        return duplicateScoutCard || null;
    }

    // #endregion
}
