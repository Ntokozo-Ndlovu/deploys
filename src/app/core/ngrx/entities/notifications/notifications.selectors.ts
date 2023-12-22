import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromNotifications from './notifications.reducer';
import * as fromAuth from 'src/app/core/ngrx/authState/auth.reducer';
import { User } from 'src/app/core/models/queryModels';
import { requiredUserProfileItems } from 'src/app/core/helpers/constants';

// #region Feature Selectors

export const selectNotificationsState = createFeatureSelector<fromNotifications.State>(
    fromNotifications.notificationsFeatureKey,
);

export const selectAuthState = createFeatureSelector<fromAuth.State>(fromAuth.authFeatureKey);

// #endregion

// #region GetPermissionStatus

export const getPermissionStatus = createSelector(selectNotificationsState, (state) => {
    return state.permissionStatus;
});

// #endregion

// #region getCurrentNotification

export const getCurrentNotification = createSelector(selectNotificationsState, (state) => {
    return state.currentNotification;
});

// #endregion

// #region getNotificationCounts

export const getNotificationCounts = createSelector(
    selectNotificationsState,
    selectAuthState,
    (notificationState, authState) => {
        const notifications = Object.values(notificationState.entities);
        const profileNotificationCount = isProfileCompleteHelper(authState?.user) ? 0 : 1;
        return {
            total: notifications.length + profileNotificationCount,
            profile: profileNotificationCount,
            negotiations: notifications.filter(
                (notification) => notification.lotStatus !== 'complete' && !notification.senderUid,
            ).length,
            completedNegotiations: notifications.filter((notification) => notification.lotStatus === 'complete').length,
            agentRequest: notifications.filter((notification) => notification.senderUid).length,
        };
    },
);

// #endregion

// #region getNotificationsForDropDown

export const getNotificationsForDropDown = createSelector(selectNotificationsState, (state) => {
    const notifications = Object.values(state.entities);
    return {
        negotiations: notifications.filter(
            (notification) =>
                notification.lotStatus === 'negotiating' ||
                notification.lotStatus === 'pending' ||
                notification.lotStatus === 'declined',
        ),
        matches: notifications.filter(
            (notification) => notification.lotStatus === 'new' || notification.lotStatus === 'complete',
        ),
        brokers: notifications.filter((notification) => notification?.senderUid),
    };
});

// #endregion

// #region getIncompleteUserProfileItems

export const getIncompleteUserProfileItems = createSelector(selectAuthState, (state) => {
    const requiredKeys = requiredUserProfileItems;
    return requiredKeys.filter((requiredKey) => !state.user[requiredKey]);
});

// #endregion

// #region getNegotiationNotifications

export const getNegotiationNotifications = createSelector(selectNotificationsState, (state) => {
    return [...Object.values(state.entities).filter((notification) => notification.lotStatus !== 'complete')];
});

// #endregion

// #region getCompletedNegotiationNotifications

export const getCompletedNegotiationNotifications = createSelector(selectNotificationsState, (state) => {
    return [...Object.values(state.entities).filter((notification) => notification.lotStatus === 'complete')];
});

// #endregion

// #region Helpers

function isProfileCompleteHelper(user: User): boolean {
    return Boolean(user?.firstname && user?.lastname && user?.email && user?.phone && user?.location);
}

// #endregion
