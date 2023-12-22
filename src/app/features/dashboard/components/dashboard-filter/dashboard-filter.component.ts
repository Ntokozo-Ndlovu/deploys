import { displayChoices } from './../../../../core/helpers/constants';
import { searchInfo } from './../../../../core/models/queryModels';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
    selector: 'app-dashboard-filter',
    templateUrl: './dashboard-filter.component.html',
    styleUrls: ['./dashboard-filter.component.scss'],
})
export class DashboardFilterComponent implements OnInit {
    @Input() isFilterActive: boolean;
    @Input() searchInput: searchInfo[];
    @Input() set tabIndex(tabIndex: number) {
        this._isScout = tabIndex === 0;
    }
    _isScout: boolean = true;

    displayChoices = displayChoices;

    @Output() $toggleFilter: EventEmitter<any> = new EventEmitter();

    searchTerm: string = '';
    isNegotiationsRoute: boolean = false;

    constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.route.url.pipe(take(1)).subscribe(() => {
            if (this.route.snapshot.url[0].path === 'negotiations') {
                this.isNegotiationsRoute = true;
            }
        });
    }

    handleSearchIconClick() {
        this.searchTerm = '';
    }

    handleToggleFilter() {
        this.$toggleFilter.emit();
    }

    handleSearch(formData) {
        if (this._isScout) {
            // TODO: Dispatch action to search scouts
        } else {
            // TODO: Dispatch action to search lots
        }
    }
}
