import { Store } from '@ngrx/store';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScoutCard } from 'src/app/core/models/viewModels';

import * as actions from 'src/app/core/helpers/index.actions';
import * as fromDashboard from 'src/app/features/dashboard/dashboard.selectors';
import { LOTS_CREATE_ROUTE, SCOUT_EDIT_ROUTE } from './../../../../core/helpers/constants';

@Component({
    selector: 'app-scout-card',
    templateUrl: './scout-card.component.html',
    styleUrls: ['./scout-card.component.scss'],
})
export class ScoutCardComponent implements OnInit {
    @Input() scoutCard: ScoutCard;

    constructor(private router: Router, private store: Store<fromDashboard.State>) {}

    ngOnInit(): void {}

    handleEditScout(id: number) {
        this.router.navigate([`${SCOUT_EDIT_ROUTE}/${id}`]);
    }

    handleCreateLot(scout: ScoutCard) {
        this.store.dispatch(actions.lotActions.LinkCurrentScoutToLot({ scout }));
        this.router.navigate([LOTS_CREATE_ROUTE], {
            queryParams: { cropCategoryId: scout.crop.cropCategoryId },
        });
    }
}
