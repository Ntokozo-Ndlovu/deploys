import { CommonModule } from '@angular/common';
import { Component, Input, NgModule, OnInit } from '@angular/core';
import { Dictionary } from '@ngrx/entity';
import { VerificationType } from 'src/app/core/models/viewModels';

@Component({
    selector: 'app-verification-badge',
    templateUrl: './verification-badge.component.html',
    styleUrls: ['./verification-badge.component.scss'],
})
export class VerificationBadgeComponent implements OnInit {
    @Input() verificationTypes: Dictionary<VerificationType> = {};
    @Input() isOwn: boolean = false;
    @Input() verificationId: number = 6;

    constructor() {}

    ngOnInit(): void {}
}

@NgModule({
    declarations: [VerificationBadgeComponent],
    imports: [CommonModule],
    exports: [VerificationBadgeComponent],
})
export class VerificationBadgeModule {}
