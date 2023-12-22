import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { DeliveryPoint } from 'src/app/core/models/queryModels';

@Component({
    selector: 'app-delivery-initial',
    templateUrl: './delivery-initial.component.html',
    styleUrls: ['./delivery-initial.component.scss'],
})
export class DeliveryInitialComponent implements OnInit {
    @Input() publicDeliveryPoints: DeliveryPoint[] = [];
    @Input() userDeliveryPoints: DeliveryPoint[] = [];

    @Output() $closeModalEvent: EventEmitter<number> = new EventEmitter();
    @Output() $toggleIsCreateOwnEvent: EventEmitter<any> = new EventEmitter();

    searchTerm: string = '';
    filteredDeliveryPoints: DeliveryPoint[] = [];
    selectedDeliveryPointId: number | null = null;

    constructor(private router: Router, private location: Location) {}

    ngOnInit(): void {
        this.filteredDeliveryPoints = this.publicDeliveryPoints;
    }

    handleSaveAndCloseModal() {
        this.$closeModalEvent.emit(this.selectedDeliveryPointId);
    }

    handleToggleIsCreateOwn() {
        this.$toggleIsCreateOwnEvent.emit();
    }

    handleSearchTermChange(searchTerm: string | DeliveryPoint) {
        if (typeof searchTerm === 'string') {
            this.filteredDeliveryPoints = this.publicDeliveryPoints.filter((filtered) => {
                return filtered.name.toLocaleLowerCase().includes(this.searchTerm.toLocaleLowerCase());
            });
        }
    }

    handleSearchIconClick() {
        this.searchTerm = '';
        this.selectedDeliveryPointId = null;
    }

    handleSelectDeliveryPoint(deliveryPoint: DeliveryPoint) {
        this.selectedDeliveryPointId = deliveryPoint.id;
        this.searchTerm = deliveryPoint.name;
    }

    handleSelectUserDeliveryPoint(deliveryPoint: DeliveryPoint) {
        this.selectedDeliveryPointId = this.selectedDeliveryPointId === deliveryPoint.id ? null : deliveryPoint.id;
    }
}
