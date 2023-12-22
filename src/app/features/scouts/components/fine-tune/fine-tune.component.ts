import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from 'src/app/core/ngrx/reducers/index';
import * as actions from 'src/app/core/helpers/index.actions';
import { FineTune } from 'src/app/core/models/queryModels';
import { ratingData } from 'src/app/core/helpers/constants';
import { bbbeeRating } from 'src/app/core/models/viewModels';
import { SCOUT_SEARCH_RESULT_ROUTE } from './../../../../core/helpers/constants';

@Component({
    selector: 'app-fine-tune',
    templateUrl: './fine-tune.component.html',
    styleUrls: ['./fine-tune.component.scss'],
})
export class FineTuneComponent implements OnInit {
    fineTune: FineTune = new FineTune();
    ratingData: bbbeeRating[] = ratingData;

    constructor(private router: Router, private store: Store<fromRoot.State>) {}

    ngOnInit(): void {}

    handleToggleExFarm(input: boolean) {
        this.fineTune.exFarm = input;
    }
    handleToggleIncludeLots(input: boolean) {
        this.fineTune.hasLots = input;
    }

    navigateToSearchResultsHelper() {
        this.store.dispatch(actions.scoutActions.ReqFineTunedScoutSearch({ searchInfo: this.fineTune }));
        this.router.navigate([SCOUT_SEARCH_RESULT_ROUTE], { queryParams: { skipSearch: true } });
    }
}
