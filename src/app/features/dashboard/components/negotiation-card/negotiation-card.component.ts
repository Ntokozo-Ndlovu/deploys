import { Component, EventEmitter, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ActiveNegotiation, NegotiationCard, Notification } from 'src/app/core/models/viewModels';
import { NEGOTIATION_EDIT_ROUTE, NEGOTIATION_VIEW_ROUTE } from 'src/app/core/helpers/constants';
import { Dictionary } from '@ngrx/entity';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { PaymentCheckModalComponent } from 'src/app/features/shared/components/payment-check-modal/payment-check-modal.component';
import { act, Actions, ofType } from '@ngrx/effects';
import { brokersActions, brokersSelectors } from 'src/app/core/ngrx/brokers/index';
import { take, takeUntil } from 'rxjs/operators';
import { BrokerNegotiation } from '../../../../core/models/queryModels';
import { filterOutNegotiationDocument } from '../../../../core/helpers/brokerHelperFunctions';
import * as actions from 'src/app/core/helpers/index.actions';
import { GetBrokerNegotiationDocumentsSuccess } from '../../../../core/ngrx/brokers/brokers.actions';

@Component({
    selector: 'app-negotiation-card',
    templateUrl: './negotiation-card.component.html',
    styleUrls: ['./negotiation-card.component.scss'],
})
export class NegotiationCardComponent implements OnInit, OnDestroy {
    @Input() negotiationCard: NegotiationCard;
    @Input() hasActiveAgent: boolean;
    @Input() get notifications(): Notification[] {
        return this._notifications;
    }
    set notifications(value: Notification[]) {
        this._notifications = value;
        if (!this.negotiationCard.isCompleted) {
            if (this._notifications.length) {
                const notificationLotMatchIds = this.notifications.map((notification) => notification.lotMatchId);
                for (let i = 0; i < notificationLotMatchIds.length; i++) {
                    this.notificationCounts[notificationLotMatchIds[i]] = notificationLotMatchIds.filter(
                        (id) => id === notificationLotMatchIds[i],
                    ).length;
                }
            } else {
                this.notificationCounts = {};
            }
        }
    }
    _notifications: Notification[] = [];
    notificationCounts: Dictionary<number> = {};

    activeNegotiationsCount: number;

    BASE_CARD_HEIGHT: string = '236px';
    EXPANDED_CARD_HEIGHT: string;

    cardHeight: string = this.BASE_CARD_HEIGHT;

    isExpanded: boolean = false;
    animateIn: boolean = false;

    isPaymentComplete: boolean = false;
    agentNegotiationExists: boolean = false;
    lotMatches: ActiveNegotiation[];

    destroyed$: EventEmitter<void> = new EventEmitter<void>();
    cardStatusTag: 'PENDING' | 'PAYMENT PENDING' | 'PAYMENT COMPLETE';
    counterPartySubmitted: boolean;
    currentUserSubmitted: boolean;

    constructor(private router: Router, private store: Store, public dialog: MatDialog, public actions$: Actions) {}

    // #region life cycle hooks
    ngOnInit(): void {
        this.activeNegotiationsCount = this.negotiationCard.activeNegotiations.length;
        this.EXPANDED_CARD_HEIGHT = `${236 + this.activeNegotiationsCount * 105}px`;

        this.selectBindingNegotiationDocuments();
    }

    ngOnDestroy() {
        this.destroyed$.next();
    }

    // #endregion

    // #region NGRX Flows
    selectBindingNegotiationDocuments(): void {
        this.store
            .select(brokersSelectors.getNegotiationDocuments)
            .pipe(takeUntil(this.destroyed$))
            .subscribe((negotiationDocs: BrokerNegotiation[]) => {
                if (negotiationDocs.length) {
                    this.getNegotiationCardStatusTagHelper(negotiationDocs);
                }
            });
    }
    // #endregion

    // #region Event Helpers

    handleOpenPaymentDetails(e: Event): void {
        e.stopPropagation();
        const paymentReady: boolean = this.cardStatusTag === 'PAYMENT PENDING' ? true : false;
        const paymentComplete: boolean = this.cardStatusTag === 'PAYMENT COMPLETE' ? true : false;
        this.dialog.open(PaymentCheckModalComponent, {
            panelClass: 'g-modal-container',
            data: {
                metricTons: this.negotiationCard.quantity,
                paymentStepReady: paymentReady,
                paymentComplete: paymentComplete,
                counterPartySubmitted: this.counterPartySubmitted,
                currentUserSubmitted: this.currentUserSubmitted,
            },
        });
    }

    handleRouteToNegotiation(id: number, isPending: boolean) {
        const negotiationNotifications = this._notifications.filter((notification) => notification.lotMatchId === id);
        const queryParams = negotiationNotifications.length
            ? {
                  isPending,
                  notificationUids: negotiationNotifications.map((notification) => notification.uid),
              }
            : { isPending };
        this.router.navigate([`${NEGOTIATION_EDIT_ROUTE}/${id}`], { queryParams });
    }

    handleRouteToCompletedNegotiation() {
        this.router.navigate([`${NEGOTIATION_VIEW_ROUTE}/${this.getCompletedNegotiationIdHelper()}`]);
    }

    handleToggleIsExpanded() {
        if (this.activeNegotiationsCount !== 0 && !this.negotiationCard.isCompleted) {
            this.alterCardHeightHelper();
            this.isExpanded = !this.isExpanded;
            this.toggleAnimateInHelper();
        } else if (this.negotiationCard.isCompleted) {
            this.router.navigate([`${NEGOTIATION_VIEW_ROUTE}/${this.getCompletedNegotiationIdHelper()}`]);
        }
    }

    // #endregion

    // #region Helper Functions
    getCompletedNegotiationIdHelper() {
        return (
            this.negotiationCard.activeNegotiations.find(
                (activeNegotiation) => activeNegotiation.matchedPropertyCount === 6,
            )?.lotMatchId || this.negotiationCard.activeNegotiations[0].lotMatchId
        );
    }

    alterCardHeightHelper() {
        this.cardHeight = this.isExpanded ? this.BASE_CARD_HEIGHT : this.EXPANDED_CARD_HEIGHT;
    }

    toggleAnimateInHelper() {
        this.isExpanded ? setTimeout(() => (this.animateIn = true), 300) : (this.animateIn = false);
    }

    getNegotiationCardStatusTagHelper(negotiationDocs: BrokerNegotiation[]): void {
        this.negotiationCard.activeNegotiations.map((activeNegotioation: ActiveNegotiation) => {
            const negotiationDoc = filterOutNegotiationDocument(activeNegotioation.lotMatchId, negotiationDocs);
            if (negotiationDoc && negotiationDoc.lotMatchId === activeNegotioation.lotMatchId) {
                this.counterPartySubmitted = this.checkIfCounterPartyHasSubmittedMatch(negotiationDoc);
                this.currentUserSubmitted = this.checkIfCurrentUserHasSubmitted(negotiationDoc);
                if (
                    (!negotiationDoc.buyerEmail && negotiationDoc.sellerEmail) ||
                    (negotiationDoc.buyerEmail && !negotiationDoc.sellerEmail)
                ) {
                    this.cardStatusTag = 'PENDING';
                } else if (
                    negotiationDoc.buyerEmail &&
                    negotiationDoc.sellerEmail &&
                    (!negotiationDoc.buyerPaid || !negotiationDoc.sellerPaid)
                ) {
                    this.cardStatusTag = 'PAYMENT PENDING';
                } else if (
                    negotiationDoc.buyerEmail &&
                    negotiationDoc.sellerEmail &&
                    this.checkNegotiationPaymentStatusHelper(negotiationDoc)
                ) {
                    this.cardStatusTag = 'PAYMENT COMPLETE';
                    if (!negotiationDoc.emailSent) {
                        this.sendIntroductionEmailHelper(negotiationDoc.lotMatchId);
                    }
                }
            }
        });
    }

    checkNegotiationPaymentStatusHelper(negotiationDoc: BrokerNegotiation): boolean {
        if (
            (this.negotiationCard.lotType === 'Sell' && negotiationDoc.sellerPaid) ||
            (this.negotiationCard.lotType === 'Buy' && negotiationDoc.buyerPaid)
        ) {
            return true;
        } else {
            return false;
        }
    }

    checkIfCounterPartyHasSubmittedMatch(negotiationDoc: BrokerNegotiation): boolean {
        if (this.negotiationCard.lotType === 'Sell' && negotiationDoc.buyerEmail) {
            return true;
        } else if (this.negotiationCard.lotType === 'Buy' && negotiationDoc.sellerEmail) {
            return true;
        }
        return false;
    }

    checkIfCurrentUserHasSubmitted(negotiationDoc: BrokerNegotiation): boolean {
        if (
            (this.negotiationCard.lotType === 'Sell' && negotiationDoc.sellerEmail) ||
            (this.negotiationCard.lotType === 'Buy' && negotiationDoc.buyerEmail)
        ) {
            return true;
        }
        return false;
    }

    sendIntroductionEmailHelper(lotMatchId: number): void {
        this.store.dispatch(brokersActions.ReqSendIntroductionEmail({ lotMatchId: lotMatchId }));
    }

    // #endregion
}
