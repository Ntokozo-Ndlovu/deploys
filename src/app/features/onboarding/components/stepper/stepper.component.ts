import { Component, Input, OnInit } from '@angular/core';
import { StepperData } from 'src/app/core/models/viewModels';

@Component({
    selector: 'app-stepper',
    templateUrl: './stepper.component.html',
    styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent implements OnInit {
    @Input() stepperContents: StepperData[];
    @Input() stepperIndex: number;

    constructor() {}

    ngOnInit(): void {}
}
