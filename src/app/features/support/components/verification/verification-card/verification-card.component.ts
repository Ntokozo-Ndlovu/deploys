import { Component, Input, OnInit } from '@angular/core';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { Dictionary } from '@ngrx/entity';
import { GRAINSA_VERIFICATION_ID, GRAINSA_VERIFICATION_TEXT } from 'src/app/core/helpers/constants';
import { VerificationSubscription } from 'src/app/core/models/viewModels';
import { NotVerifiedModalComponent } from '../not-verified-modal/not-verified-modal.component';
import { SubscriptionTypeModalComponent } from '../subscription-type-modal/subscription-type-modal.component';

@Component({
    selector: 'app-verification-card',
    templateUrl: './verification-card.component.html',
    styleUrls: ['./verification-card.component.scss'],
})
export class VerificationCardComponent implements OnInit {
    @Input() verificationSubscription: Dictionary<VerificationSubscription>;
    @Input() isWeb: boolean;
    @Input() isGrainSAVerified: boolean;

    constructor(private dialog: MatDialog) {}

    ngOnInit(): void {}

    handleVerificationModal() {
        if (+this.verificationSubscription.key === GRAINSA_VERIFICATION_ID && this.isGrainSAVerified) {
            this.dialog.open(SubscriptionTypeModalComponent, {
                panelClass: 'g-modal-container',
                autoFocus: false,
                data: {
                    verificationSubscription: this.verificationSubscription,
                    promotionalText: GRAINSA_VERIFICATION_TEXT,
                },
            });
        } else if (+this.verificationSubscription.key === GRAINSA_VERIFICATION_ID && !this.isGrainSAVerified) {
            this.dialog.open(NotVerifiedModalComponent, {
                panelClass: 'g-modal-container',
                autoFocus: false,
            });
        } else {
            this.dialog.open(SubscriptionTypeModalComponent, {
                panelClass: 'g-modal-container',
                autoFocus: false,
                data: {
                    verificationSubscription: this.verificationSubscription,
                },
            });
        }
    }
}
