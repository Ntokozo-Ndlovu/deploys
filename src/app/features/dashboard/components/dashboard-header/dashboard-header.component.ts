import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { STEP_INFO_DATA } from 'src/app/core/helpers/constants';
import { Toggle } from 'src/app/core/models/viewModels';
import { StepInfoModalComponent } from 'src/app/features/shared/components/step-info-modal/step-info-modal.component';

@Component({
    selector: 'app-dashboard-header',
    templateUrl: './dashboard-header.component.html',
    styleUrls: ['./dashboard-header.component.scss'],
})
export class DashboardHeaderComponent implements OnInit {
    @Input() activeRoute: string;
    @Input() toggleIndex: number;
    @Input() toggles: Toggle[];
    @Input() showSearchBar: boolean;
    @Input() dontShowTabs: boolean;
    @Input() dontShowSearchBar: boolean;

    @Output() $changeToggleEvent: EventEmitter<number> = new EventEmitter();
    @Output() $searchInputEvent: EventEmitter<string> = new EventEmitter();
    @Output() $createEvent: EventEmitter<void> = new EventEmitter();

    searchInput: string;
    infoText: string = '';

    isScoutOrLot: boolean = true;
    isScout: boolean = true;

    constructor(private route: ActivatedRoute, private dialog: MatDialog) {}

    ngOnInit(): void {
        if (this.activeRoute !== 'scouts') {
            this.isScout = false;
            if (this.activeRoute !== 'lots') {
                this.isScoutOrLot = false;
            }
        }
        this.infoText = STEP_INFO_DATA[this.activeRoute].tooltip;

        if (this.showSearchBar) {
            this.route.queryParams.pipe(take(1)).subscribe((params) => {
                if (Object.keys(params).length > 0) {
                    if (params.searchInput) {
                        this.searchInput = params.searchInput;
                    }
                }
            });
        }
    }

    handleChangeToggle(newToggle) {
        if (this.toggleIndex !== newToggle) {
            this.$changeToggleEvent.emit(newToggle);
        }
    }

    handleCreate() {
        this.$createEvent.emit();
    }

    handleToggleSearchBar() {
        this.searchInput = this.showSearchBar ? null : '';
        this.handleSearchInput();
    }

    handleSearchInput() {
        this.$searchInputEvent.emit(this.searchInput);
    }

    handleInfoModal(): void {
        this.dialog.open(StepInfoModalComponent, {
            panelClass: 'g-modal-container',
            data: {
                stepInfo: STEP_INFO_DATA[this.activeRoute],
            },
        });
    }
}
