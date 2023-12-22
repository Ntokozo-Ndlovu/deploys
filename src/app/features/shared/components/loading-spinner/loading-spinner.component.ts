import { CommonModule } from '@angular/common';
import { Component, OnInit, Input, NgModule } from '@angular/core';

@Component({
    selector: 'app-loading-spinner',
    templateUrl: './loading-spinner.component.html',
    styleUrls: ['./loading-spinner.component.scss'],
})
export class LoadingSpinnerComponent implements OnInit {
    @Input() loading = false;

    constructor() {}

    ngOnInit() {}
}
@NgModule({
    declarations: [LoadingSpinnerComponent],
    imports: [CommonModule],
    exports: [LoadingSpinnerComponent],
})
export class LoadingSpinnerModule {}
