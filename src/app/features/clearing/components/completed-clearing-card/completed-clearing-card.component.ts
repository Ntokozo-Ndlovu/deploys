import { Component, Input, OnInit } from '@angular/core';
import { NegotiationCard } from 'src/app/core/models/viewModels';

@Component({
    selector: 'app-completed-clearing-card',
    templateUrl: './completed-clearing-card.component.html',
    styleUrls: ['./completed-clearing-card.component.scss'],
})
export class CompletedClearingCardComponent implements OnInit {
    @Input() negotiationCard: NegotiationCard;

    constructor() {}

    ngOnInit(): void {}
}
