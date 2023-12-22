import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-broker-toolbar',
    templateUrl: './broker-toolbar.component.html',
    styleUrls: ['./broker-toolbar.scss'],
})
export class BrokerToolbarComponent implements OnInit {
    @Output() $changeToggleEvent: EventEmitter<number> = new EventEmitter();
    @Output() $searchInputEvent: EventEmitter<string> = new EventEmitter();
    @Output() $addNewClientEvent: EventEmitter<void> = new EventEmitter();

    @Input() get tabIndex(): number {
        return this._tabIndex;
    }
    set tabIndex(value: number) {
        this._tabIndex = value;
    }

    _tabIndex: number = 0;

    searchInput: string;

    constructor() {}

    ngOnInit(): void {}

    handleSearchInput() {
        this.$searchInputEvent.emit(this.searchInput.toLowerCase());
    }

    handleChangeToggle(newToggle: number) {
        this.tabIndex = newToggle;
        this.$changeToggleEvent.emit(newToggle);
    }

    handleAddNewClient() {
        this.$addNewClientEvent.emit();
    }
}
