import * as actions from 'src/app/core/helpers/index.actions';
import { AuthService } from '../../core/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromRoot from '../../core/ngrx/reducers/index';
import { map, take, tap } from 'rxjs/operators';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
    user$;
    constructor(public authService: AuthService, public store: Store<fromRoot.State>) {}

    handleLogout() {
        this.store.dispatch(actions.authActions.ReqLogoutAction());
    }

    ngOnInit() {
        this.user$ = this.store.pipe(select(fromRoot.authSelectors.getUser), take(1));
    }
}
