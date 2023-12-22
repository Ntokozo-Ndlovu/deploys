import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// #region NgRx/RxJs

import { select, Store } from '@ngrx/store';
import { take, takeUntil } from 'rxjs/operators';
import { Actions, ofType } from '@ngrx/effects';
import * as fromRoot from 'src/app/features/dashboard/dashboard.selectors';
import * as actions from 'src/app/core/helpers/index.actions';
import * as snackBarConfigs from 'src/app/core/helpers/snackbar';

// #endregion

// #region Models/Constants

import {
    HOME_ROUTE,
    adminEmails,
    ratingData,
    verificationTypes,
    version,
    emailRegex,
    DOCUMENT_VIEWER_ROUTE,
} from 'src/app/core/helpers/constants';
import { bbbeeRating, Tab, VerificationType } from 'src/app/core/models/viewModels';
import {
    AdditionalEntityDetail,
    DeliveryPoint,
    AdditionalEntityDetailsClass,
    User,
    UserVerification,
    Entity,
} from 'src/app/core/models/queryModels';

// #endregion

// #region Modals

import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { DeliveryPointModalComponent } from 'src/app/features/shared/components/delivery-point-modal/delivery-point-modal.component';
import { LotsAnalyticsModalComponent } from '../lot-analytics-modal/lots-analytics-modal.component';
import { SkuduAnalyticsModalComponent } from '../skudu-analytics-modal/skudu-analytics-modal.component';
import { VerificationModalComponent } from '../verification-modal/verification-modal.component';

// #endregion

// #region Other

import { cloneDeep } from 'lodash';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Dictionary } from '@ngrx/entity';
import { ConfirmationModalComponent } from 'src/app/features/shared/components/confirmation-modal/confirmation-modal.component';
import { DeleteAccountModalComponent } from '../delete-account-modal/delete-account-modal.component';
import { GrainSaModalComponent } from 'src/app/features/shared/components/grain-sa-modal/grain-sa-modal.component';

// #endregion

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
    @Output() toggleIsCreateOwnEvent: EventEmitter<any> = new EventEmitter();

    profileTabs: Tab[] = ['Entity', 'Delivery/Admin', 'User'];
    tabIndex: number = 0;

    entityDetails: AdditionalEntityDetail;
    additionalEntityDetails: AdditionalEntityDetail = new AdditionalEntityDetailsClass();

    deliveryPoints: DeliveryPoint[];
    userDeliveryPoints: DeliveryPoint[];
    publicDeliveryPoints: DeliveryPoint[];

    verificationUsers: User[] = [];
    filteredVerificationUsers: User[] = [];
    selectedVerificationUsers: User[] = [];
    verificationTypes: Dictionary<VerificationType> = verificationTypes;
    selectedVerificationType: VerificationType = null as VerificationType;
    userSearchTerm: string = '';

    user: User;
    editableUser: User;
    profileHasBeenEdited: boolean = false;
    grainSAId: string;

    options: any = {
        types: ['(regions)'],
    };

    ratingData: bbbeeRating[] = ratingData;

    version: string = version;

    isCreateOwn: boolean = false;
    isAdmin: boolean = false;

    isEntityLoading: boolean = true;
    isDeliveryPointLoading: boolean = true;
    isUsersLoading: boolean = true;
    isDetailsActionLoading: boolean = false;
    isAnalyticsActionLoading: boolean = false;
    isGetLotsActionLoading: boolean = false;
    isUserProfileActionLoading: boolean = false;
    isDeleteActionLoading: boolean = false;
    isGrainSAVerified: boolean = false;

    destroyed$: EventEmitter<void> = new EventEmitter<void>();

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private store: Store,
        private actions$: Actions,
        public dialog: MatDialog,
        private snackbar: MatSnackBar,
    ) {}

    ngOnInit(): void {
        this.route.queryParams.pipe(take(1)).subscribe((params) => {
            if (params) {
                if (params.tabIndex) {
                    this.tabIndex = +params.tabIndex;
                }
                this.updateQueryParamsHelper();
            }
        });

        this.store.pipe(select(fromRoot.authSelectors.getUser), takeUntil(this.destroyed$)).subscribe((user) => {
            this.user = user;
            this.editableUser = cloneDeep(this.user);
            if (this.editableUser.grainSA) {
                this.grainSAId = this.editableUser.grainSA.grainSAId;
                this.isGrainSAVerified = this.editableUser.grainSA.isVerified;
            }
            this.isAdmin = adminEmails.includes(user?.email);
            this.requestVerificationUsersHelper();
        });

        this.store
            .pipe(select(fromRoot.authSelectors.getAdditionalEntityDetails), takeUntil(this.destroyed$))
            .subscribe((entityDetails) => {
                if (entityDetails && Object.keys(entityDetails).length) {
                    this.entityDetails = cloneDeep(entityDetails);
                    this.isEntityLoading = false;
                }
            });

        this.store
            .pipe(select(fromRoot.deliveryPointsSelectors.getAllDeliveryPoints), takeUntil(this.destroyed$))
            .subscribe((deliveryPoints) => {
                if (deliveryPoints) {
                    this.deliveryPoints = deliveryPoints;
                }
            });

        this.store.pipe(select(fromRoot.appSelectors.getUsers), takeUntil(this.destroyed$)).subscribe((users) => {
            if (users.length) {
                this.verificationUsers = users;
                this.filteredVerificationUsers = this.verificationUsers;
                this.isUsersLoading = false;
            }
        });

        this.actions$
            .pipe(
                ofType(
                    actions.deliveryPointActions.EntityDeliveryPointsSuccess,
                    actions.deliveryPointActions.EntityDeliveryPointsFail,
                ),
                takeUntil(this.destroyed$),
            )
            .subscribe(() => (this.isDeliveryPointLoading = false));

        this.store.dispatch(actions.authActions.ReqEntityDisplayInfo());
        this.store.dispatch(actions.deliveryPointActions.ReqEntityDeliveryPoints({ executedTime: Date.now() }));
    }

    ngOnDestroy(): void {
        this.destroyed$.next();
    }

    handleNavigateToHomePage(): void {
        this.router.navigate([HOME_ROUTE]);
    }

    handleTabChange(newTabIndex: number): void {
        this.tabIndex = newTabIndex;
        this.requestVerificationUsersHelper();
        this.updateQueryParamsHelper();
    }

    handleCreateDeliveryPoint(): void {
        this.isCreateOwn = true;
        this.updateQueryParamsHelper();

        this.isDeliveryPointLoading = true;

        const dialogRef = this.dialog.open(DeliveryPointModalComponent, {
            data: {
                deliveryPointId: null,
                showInitial: false,
                isView: false,
                fromProfile: true,
                hidePublicDeliveryPoints: false,
            },
            panelClass: 'g-modal-fullwidth-container',
            autoFocus: false,
        });

        dialogRef
            .afterClosed()
            .pipe(take(1))
            .subscribe(() => {
                this.store.dispatch(actions.deliveryPointActions.ReqEntityDeliveryPoints({ executedTime: Date.now() }));

                this.actions$
                    .pipe(ofType(actions.deliveryPointActions.EntityDeliveryPointsSuccess), take(1))
                    .subscribe(() => {
                        this.isCreateOwn = false;
                        this.updateQueryParamsHelper();
                    });
            });
    }

    handleEditDeliveryPoint(id: number): void {
        this.isCreateOwn = true;
        this.updateQueryParamsHelper();

        this.isDeliveryPointLoading = true;

        const dialogRef = this.dialog.open(DeliveryPointModalComponent, {
            data: {
                deliveryPointId: id,
                showInitial: false,
                isView: true,
                fromProfile: true,
                hideDeliveryPublicDeliveryPoints: false,
            },
            panelClass: 'g-modal-fullwidth-container',
            autoFocus: false,
        });

        dialogRef
            .afterClosed()
            .pipe(take(1))
            .subscribe(() => {
                this.store.dispatch(actions.deliveryPointActions.ReqEntityDeliveryPoints({ executedTime: Date.now() }));

                this.actions$
                    .pipe(ofType(actions.deliveryPointActions.EntityDeliveryPointsSuccess), take(1))
                    .subscribe(() => {
                        this.isCreateOwn = false;
                        this.updateQueryParamsHelper();
                    });
            });
    }

    handleFilterUsers(): void {
        const lowerCaseSearchTerm: string = this.userSearchTerm.toLowerCase();
        this.filteredVerificationUsers = this.verificationUsers.filter((verificationUser) => {
            const userNameAndEmail: string =
                `${verificationUser.firstname} ${verificationUser.lastname} ${verificationUser.email}`.toLowerCase();
            if (userNameAndEmail.includes(lowerCaseSearchTerm)) {
                return true;
            }
            const relatedEntityNames: Entity = verificationUser.entities?.find((entity) =>
                entity.name.toLowerCase().includes(lowerCaseSearchTerm),
            );
            return !!relatedEntityNames;
        });
        if (this.selectedVerificationType) {
            this.filterByVerificationTypeHelper();
        }
    }

    handleOpenVerificationModal(isFilter: boolean): void {
        isFilter && this.handleClearUserSelection();

        const dialogRef = this.dialog.open(VerificationModalComponent, {
            data: {
                isFilter,
                verificationTypes: this.verificationTypes,
                selectedVerificationType: this.selectedVerificationType,
            },
            panelClass: 'g-modal-fullwidth-container',
        });

        dialogRef
            .afterClosed()
            .pipe(take(1))
            .subscribe((verificationType) => {
                if (verificationType || verificationType === null) {
                    this.toggleVerificationTypeHelper(verificationType, isFilter);
                    if (!isFilter) {
                        this.isUsersLoading = true;
                        this.updateUsersVerificationTypeHelper();
                    }
                }
            });
    }

    handleToggleSelectUser(user: User): void {
        this.selectedVerificationUsers.indexOf(user) > -1
            ? this.selectedVerificationUsers.splice(this.selectedVerificationUsers.indexOf(user), 1)
            : this.selectedVerificationUsers.push(user);
    }

    handleClearUserSelection(): void {
        this.selectedVerificationUsers = [];
    }

    handleToggleExFarm(option: boolean): void {
        if (option !== this.entityDetails.exFarm) {
            this.entityDetails.exFarm = option;
        }
    }

    handleSaveEntityDetails(): void {
        this.isDetailsActionLoading = true;
        const isEmail = this.validateEmailHelper(this.entityDetails.email);

        if (this.entityDetails.legalEntityName.length < 2) {
            this.isDetailsActionLoading = false;
            this.snackbar.open('Please enter a valid entity name.', 'CLOSE', snackBarConfigs.errorConfig);
        } else {
            if (isEmail) {
                this.actions$
                    .pipe(
                        ofType(actions.authActions.UpdateEntityInfoSuccess, actions.authActions.UpdateEntityInfoFail),
                        take(1),
                    )
                    .subscribe(() => {
                        this.isDetailsActionLoading = false;
                    });

                this.store.dispatch(
                    actions.authActions.ReqUpdateEntityInfo({ additionalEntityDetails: this.entityDetails }),
                );
            } else {
                this.isDetailsActionLoading = false;
                this.snackbar.open('Please enter a valid Email', 'CLOSE', snackBarConfigs.errorConfig);
            }
        }
    }

    handleRequestAnalytics(): void {
        this.store.dispatch(actions.appActions.ReqGetAnalytics());
        this.isAnalyticsActionLoading = true;
        this.actions$.pipe(ofType(actions.appActions.GetAnalyticsSuccess), take(1)).subscribe(({ analytics }) => {
            this.isAnalyticsActionLoading = false;

            this.dialog.open<SkuduAnalyticsModalComponent>(SkuduAnalyticsModalComponent, {
                data: {
                    numberOfBuyingScouts: analytics.numberOfBuyingScouts,
                    numberOfSellingScouts: analytics.numberOfSellingScouts,
                    numberOfBuyingLots: analytics.numberOfBuyingLots,
                    numberOfSellingLots: analytics.numberOfSellingLots,
                    totalSkuduMatches: analytics.totalSkuduMatches,
                    volumeNegotiatedInTons: analytics.volumeNegotiatedInTons,
                },
                panelClass: 'g-modal-container',
            });
        });
        this.actions$.pipe(ofType(actions.appActions.GetAnalyticsFail), take(1)).subscribe(() => {
            this.isAnalyticsActionLoading = false;
        });
    }

    handleSelectLocation($event): void {
        this.editableUser.location = $event.formatted_address;
    }

    handleSaveUserProfile(): void {
        this.isUserProfileActionLoading = true;

        this.actions$
            .pipe(
                ofType(actions.authActions.ReqUpdateUserDetailsSuccess, actions.authActions.ReqUpdateUserDetailsFail),
                take(1),
            )
            .subscribe(() => {
                this.isUserProfileActionLoading = false;
            });

        if (!this.editableUser.grainSA || this.editableUser.grainSA.grainSAId !== this.grainSAId) {
            this.editableUser.grainSA = { grainSAId: this.grainSAId || null, isVerified: false };
        }

        this.store.dispatch(
            actions.authActions.ReqUpdateUserDetails({ user: { ...this.editableUser, updatedAt: Date.now() } }),
        );
    }

    handleGetLotsInDateRange(): void {
        const dialogRef = this.dialog.open<LotsAnalyticsModalComponent>(LotsAnalyticsModalComponent, {
            panelClass: 'g-modal-container',
        });
        dialogRef.afterClosed().subscribe((dateRange) => {
            this.isGetLotsActionLoading = true;
            this.store.dispatch(actions.appActions.ReqGetLotsInDateRange({ dateRange }));
        });
        this.actions$
            .pipe(
                ofType(actions.appActions.GetLotsInDateRangeSuccess, actions.appActions.GetLotsInDateRangeFail),
                take(1),
            )
            .subscribe(() => {
                this.isGetLotsActionLoading = false;
            });
    }

    handleLogout(): void {
        this.store.dispatch(actions.authActions.ReqLogoutAction());
    }

    handleDeletionRequestModal() {
        this.isDeleteActionLoading = true;
        const dialogRef = this.dialog.open(DeleteAccountModalComponent, {
            panelClass: 'g-modal-container',
        });
        dialogRef.afterClosed().subscribe((response) => {
            if (response) {
                this.store.dispatch(actions.authActions.ReqDeleteAccountEmail({ user: this.user }));
            } else {
                this.isDeleteActionLoading = false;
            }
        });
        this.actions$
            .pipe(
                ofType(actions.authActions.ReqDeleteAccountEmailSuccess, actions.authActions.ReqDeleteAccountEmailFail),
                take(1),
            )
            .subscribe(() => {
                this.isDeleteActionLoading = false;
            });
    }

    handleGrainSAModal() {
        this.dialog.open(GrainSaModalComponent, {
            panelClass: 'g-modal-container',
            autoFocus: false,
            data: { showSubscription: true },
        });
    }

    updateQueryParamsHelper(): void {
        let queryParams = this.isCreateOwn
            ? {
                  tabIndex: this.tabIndex,
                  isCreateOwn: this.isCreateOwn,
              }
            : { tabIndex: this.tabIndex };
        this.router.navigate([], {
            relativeTo: this.route,
            queryParams,
            replaceUrl: true,
        });
    }

    validateEmailHelper(email: string): boolean {
        const regularExpression = emailRegex;
        return regularExpression.test(String(email).toLowerCase());
    }

    requestVerificationUsersHelper(): void {
        if (this.isAdmin && this.tabIndex === 1 && !this.verificationUsers.length) {
            this.store.dispatch(actions.appActions.ReqGetUsersForVerification());
        }
    }

    toggleVerificationTypeHelper(verificationType: VerificationType | null, isFilter: boolean): void {
        this.selectedVerificationType = verificationType;
        isFilter && this.handleFilterUsers();
    }

    filterByVerificationTypeHelper(): void {
        this.filteredVerificationUsers = this.selectedVerificationType
            ? this.filteredVerificationUsers.filter(
                  (filteredVerificationUser) =>
                      filteredVerificationUser.verification?.id === this.selectedVerificationType.id,
              )
            : this.verificationUsers;
    }

    updateUsersVerificationTypeHelper() {
        const dialogRef = this.dialog.open(ConfirmationModalComponent, {
            data: { currentAction: 'update', currentItem: 'user verifications' },
            panelClass: 'g-modal-container',
        });

        dialogRef
            .afterClosed()
            .pipe(take(1))
            .subscribe((shouldDispatch) => {
                if (shouldDispatch) {
                    this.actions$
                        .pipe(
                            ofType(
                                actions.authActions.ReqUpdateUserVerificationStatusSuccess,
                                actions.authActions.ReqUpdateUserVerificationStatusFail,
                            ),
                            take(1),
                        )
                        .subscribe(() => {
                            this.isUsersLoading = false;
                        });

                    this.store.dispatch(
                        actions.authActions.ReqUpdateUserVerificationStatus({
                            userVerifications: this.transformUsersForVerificationHelper(this.selectedVerificationUsers),
                            showSnackBar: true,
                        }),
                    );

                    this.handleClearUserSelection();
                    this.toggleVerificationTypeHelper(null, true);
                }
            });
    }

    transformUsersForVerificationHelper(verificationUsers: User[]): UserVerification[] {
        const verificationDate: number = Date.now();
        return verificationUsers.map((verificationUser) => {
            return {
                uid: verificationUser.uid,
                fullName: `${verificationUser.firstname} ${verificationUser.lastname}`,
                verification: {
                    id: this.selectedVerificationType.id,
                    verificationDate,
                },
            };
        });
    }

    toggleProfileEditStatusHelper(): void {
        !this.profileHasBeenEdited && (this.profileHasBeenEdited = true);
    }

    handleRouteToDocumentViewer(name: string) {
        this.router.navigate([`${DOCUMENT_VIEWER_ROUTE}/${name}`]);
    }
}
