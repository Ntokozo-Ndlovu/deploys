import { Component, OnInit } from '@angular/core';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { SwUpdate , VersionReadyEvent} from '@angular/service-worker';
import { Store, select } from '@ngrx/store';
import { take, filter } from 'rxjs/operators';
import * as fromRoot from './core/ngrx/reducers/index';
import { RefreshModalComponent } from './features/shared/components/refresh-modal/refresh-modal.component';
import { Purchases } from '@awesome-cordova-plugins/purchases/ngx';
import { Capacitor } from '@capacitor/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    title = 'skudu_match';
    appState$ = this.store.pipe(select(fromRoot.getAppState));
    isWeb: boolean = false;

    constructor(
        private store: Store<fromRoot.State>,
        private dialog: MatDialog,
        private serviceWorkerUpdate: SwUpdate,
        private purchases: Purchases,
    ) {}

    ngOnInit(): void {
        if (this.serviceWorkerUpdate.isEnabled) {
            this.serviceWorkerUpdate.versionUpdates.pipe(filter((evt):evt is VersionReadyEvent=> evt.type === 'VERSION_READY')).subscribe(() => {
                const dialogRef = this.dialog.open(RefreshModalComponent, {
                    panelClass: 'g-modal-fullwidth-transparent-container',
                });
                dialogRef
                    .afterClosed()
                    .pipe(take(1))
                    .subscribe(() => {
                        window.location.reload();
                    });
            });
        }
        this.isWeb = Capacitor.getPlatform() == 'web';
        this.onDeviceReady();
    }
    onDeviceReady() {
        if (!this.isWeb) {
            this.purchases.setDebugLogsEnabled(true);
            if (Capacitor.getPlatform() == 'ios') {
                this.purchases.setFirebaseAppInstanceID('appl_SNiWZGuiodCXToFPLjYJkggISVd')
                //this.purchases.setup('appl_SNiWZGuiodCXToFPLjYJkggISVd');
            } else if (Capacitor.getPlatform() == 'android') {
                this.purchases.setFirebaseAppInstanceID('goog_hiDXDTNYQQJNeqcKMMoMcpkJOUy')
               
              //  this.purchases.setup('goog_hiDXDTNYQQJNeqcKMMoMcpkJOUy');
            }
        }
    }
}
