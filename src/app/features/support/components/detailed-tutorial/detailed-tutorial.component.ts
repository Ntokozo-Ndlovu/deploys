import { SUPPORT_ROUTE, TUTORIAL_TABLE_DATA } from './../../../../core/helpers/constants';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TutorialTableItem } from 'src/app/core/models/viewModels';

@Component({
    selector: 'app-detailed-tutorial',
    templateUrl: './detailed-tutorial.component.html',
    styleUrls: ['./detailed-tutorial.component.scss'],
})
export class DetailedTutorialComponent implements OnInit {
    items: TutorialTableItem[] = TUTORIAL_TABLE_DATA;
    constructor(private router: Router) {}

    ngOnInit(): void {}

    handleBack() {
        this.router.navigate([SUPPORT_ROUTE]);
    }
}
