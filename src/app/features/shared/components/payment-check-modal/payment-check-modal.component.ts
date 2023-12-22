import { Component, Inject, OnInit } from '@angular/core';
import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA, MatLegacyDialogRef as MatDialogRef } from '@angular/material/legacy-dialog';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-payment-check-modal',
    templateUrl: './payment-check-modal.component.html',
    styleUrls: ['./payment-check-modal.component.scss'],
})
export class PaymentCheckModalComponent implements OnInit {
    feedbackMessage: string;

    constructor(
        public dialogRef: MatDialogRef<PaymentCheckModalComponent>,
        public domSanitizer: DomSanitizer,
        @Inject(MAT_DIALOG_DATA)
        public data: {
            metricTons: number;
            paymentStepReady: boolean;
            paymentComplete: boolean;
            counterPartySubmitted: boolean;
            currentUserSubmitted: boolean;
        },
    ) {}

    commission = 0;
    ngOnInit(): void {
        this.commission = this.data.metricTons ? this.data.metricTons * 3 : 0;
        console.log(this.data);
        this.prepareFeedbackMessage();
    }

    prepareFeedbackMessage(): void {
        if (this.data.paymentStepReady && this.data.currentUserSubmitted && this.data.counterPartySubmitted) {
            this.feedbackMessage = `
          <p class="d-flex">
            The commission made by the agent to be payed to MX is R${this.commission}
          </p>

          <h2 class="g-text-h2-dark">
            Bank Account Details
          </h2>

          <p class="d-flex flex-row text-left">
            Rekeningnaam/Account Name: MATCHMX (PTY) LTD <br>
            ABSA-rekeningnommer/ABSA Account Number: 4090190760 <br>
            Rekeningtipe/Account Type: Current (Tjek) <br>
            Takkode/Branch Code: 632005 <br>
          </p>`;
        } else if (!this.data.paymentStepReady && this.data.currentUserSubmitted && !this.data.counterPartySubmitted) {
            this.feedbackMessage = `
          <p>
            This negotiation is pending submission from the Counter Party.
            Payment for Broker services will be due when the Counter Party submits the Match.
          </p>
           `;
        } else if (!this.data.paymentStepReady && !this.data.currentUserSubmitted && this.data.counterPartySubmitted) {
            this.feedbackMessage = `
          <p>
            This negotiation is pending because you have not yet submitted the Match.
            Payment for Broker services will be due once you have submitted the Match.
          </p>`;
        } else if (this.data.paymentComplete) {
            this.feedbackMessage = `
          <p>
            This negotiation has now been closed and is considered complete.
            Payment for Broker services has been completed.
          </p>`;
        }
    }

    handleCloseModal(): void {
        this.dialogRef.close();
    }
}
