import { Notification } from 'src/app/core/models/viewModels';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../../models/queryModels';

@Injectable({
    providedIn: 'root',
})
export class NotificationsService {
    private _isListenerActive: boolean = false;

    constructor(private afMessaging: AngularFireMessaging, private afStore: AngularFirestore) {}

    getCloudMessagingPermissionStatus(): Observable<string> {
        return this.afMessaging.getToken;
    }

    addDeviceTokenToUserDocument(user: User, newDeviceToken: string): void {
        if (!user.deviceTokens || !user.deviceTokens.includes(newDeviceToken)) {
            let deviceTokens = user.deviceTokens ? [...user.deviceTokens, newDeviceToken] : [newDeviceToken];
            this.afStore.doc<User>(`Users/${user.uid}`).update({ deviceTokens });
        }
    }

    activateNotificationListener() {
        if (!this._isListenerActive) {
            this._isListenerActive = true;
            return this.afMessaging.messages;
        } else {
            return of(null);
        }
    }

    getUserNotifications(uid: string): Observable<Notification[] | []> {
        return this.afStore
            .collection<Notification>('Notifications', (notificationsRef) =>
                notificationsRef.where('userId', '==', uid).where('seen', '==', false),
            )
            .valueChanges();
    }

    getClientsNotifications(uids: string[]): Observable<Notification[] | []> {
        return this.afStore
            .collection<Notification>('Notifications', (notificationsRef) =>
                notificationsRef.where('userId', 'in', uids).where('seenByAgent', '==', false),
            )
            .valueChanges();
    }

    toggleNotificationStatus(uids: string[], toggleForAgent = false) {
        const data = toggleForAgent ? { seenByAgent: true } : { seen: true };
        return Promise.all(
            uids.map((uid) => {
                return this.afStore.doc<Notification>(`Notifications/${uid}`).update({ ...data });
            }),
        );
    }
}
