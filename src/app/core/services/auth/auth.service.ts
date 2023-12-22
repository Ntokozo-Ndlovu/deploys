import { UserWithEntities, UserVerification } from './../../models/queryModels';
import { ApiService } from './../api/api.service';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import { take, map, switchMap, tap, retry } from 'rxjs/operators';
import { Router } from '@angular/router';
import { User } from '../../models/queryModels';
import { SignUpData } from '../../models/viewModels';
import { combineLatest, Observable, of } from 'rxjs';
import { SQL_User } from '../../models/queryModels';
import { DEFAULT_VERIFICATION, SIGNIN_ROUTE } from '../../../core/helpers/constants';
import { Plugins } from '@capacitor/core';
import firebase from 'firebase/compat/app';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(
        private router: Router,
        private afs: AngularFirestore,
        private afAuth: AngularFireAuth,
        private api: ApiService,
    ) {}

    getUser(uid: string, actionByAgent: boolean = false): Observable<UserWithEntities> {
        const documentSnapshot = of(this.afs.doc(`Users/${uid}`).ref);
        return documentSnapshot.pipe(
            switchMap((ref) => {
                return ref.get();
            }),
            switchMap((doc) => {
                if (doc.exists) {
                    const user = doc.data() as User;
                    if (user.matchUser) {
                        return combineLatest([of(user), actionByAgent ? this.api.getUser(uid) : this.api.getUser()]);
                    } else {
                        return combineLatest([of(user), this.api.registerUser(user.email, user.phone)]);
                    }
                } else {
                    throw new Error('Null User');
                }
            }),
            map(([user, sqlUser]: [User, SQL_User]) => {
                if (user) {
                    return {
                        ...user,
                        verification: user.verification ?? DEFAULT_VERIFICATION,
                        hasBrowsedMarket: user.hasBrowsedMarket ? user.hasBrowsedMarket : false,
                        SQL_id: sqlUser.id,
                        entities: sqlUser.entities,
                        hasB_BBEE: sqlUser.hasB_BBEE,
                    } as UserWithEntities;
                } else {
                    return null;
                }
            }),
            retry(5),
        );
    }

    getAuthorization() {
        return this.afAuth.authState.pipe();
    }

    async emailLogin(email: string, password: string) {
        try {
            const userCredentials = await this.afAuth.signInWithEmailAndPassword(email, password);
            return userCredentials;
        } catch (error) {
            console.log('emailLogin: ', error);
            throw error.code;
        }
    }

    async providerLogin() {
        try {
            const provider = new firebase.auth.GoogleAuthProvider();
            const firebaseUser = await this.afAuth.signInWithPopup(provider);
            const user = this.userDataHelper(firebaseUser);
            if (firebaseUser.additionalUserInfo.isNewUser) {
                await this.updateUserData(user);
            }
        } catch (error) {
            console.log('providerLogin', { error });
            throw error.code ? error.code : error.message;
        }
    }

    async nativeProviderLogin() {
        try {
            const googleUser = await Plugins.GoogleAuth.signIn();
            const credential = firebase.auth.GoogleAuthProvider.credential(googleUser.authentication.idToken);
            const firebaseUser = await this.afAuth.signInWithCredential(credential);
            const user = this.userDataHelper(firebaseUser);
            await this.nativeCreateUser(user);
        } catch (error) {
            console.log('nativeProviderLogin', { error });
            throw error.code ? error.code : error.message;
        }
    }

    async emailSignUp(email: string, password: string, signUpData: SignUpData) {
        try {
            const userCred = await this.afAuth.createUserWithEmailAndPassword(email, password);
            let data: Partial<User> = {
                uid: userCred.user.uid,
                email: email,
                firstname: signUpData.name,
                lastname: signUpData.surname,
                phone: signUpData.phone,
                location: signUpData.location,
                token: null,
            };

            if (signUpData.grainSAId) {
                data.grainSA = { grainSAId: signUpData.grainSAId, isVerified: false };
            }

            await this.createUser(data, data.uid);

            return { user: data };
        } catch (error) {
            console.log('emailSignUp', { error });
            throw error.code ? error.code : error.message;
        }
    }

    async createUser(data: Partial<User>, uid: string) {
        try {
            const userCol: firebase.firestore.QuerySnapshot = await this.afs
                .collection('/Users', (ref) =>
                    ref.where('email', '==', data.email.toLowerCase()).where('archived', '==', 0),
                )
                .get()
                .pipe(take(1))
                .toPromise();

            const doesExist: boolean = !userCol.empty;

            if (!doesExist) {
                const userRef = this.afs.doc(`Users/${uid}`);
                data.archived = 0;
                data.createdAt = Date.now();
                data.phone = data.phone;
                data.location = data.location;
                data.updatedAt = Date.now();
                data.email = data.email.toLocaleLowerCase();
                if (data.grainSA)
                    data.grainSA = { grainSAId: data.grainSA.grainSAId, isVerified: data.grainSA.isVerified };

                userRef.set(data); // Creates the document for the first time user on the first login.
            } else {
                const userData = {
                    ...data,
                    archived: 0,
                    uid: uid,
                    email: data.email.toLocaleLowerCase(),
                };

                const newUserRef = this.afs.doc(`Users/${uid}`);
                await newUserRef.set(userData).then(() => {
                    userCol.forEach((doc) => {
                        const oldUserRef = doc.ref;
                        oldUserRef.update({ archived: 1 });
                    });
                });
            }
            return 'Success';
        } catch (error) {
            console.log('createUser', { error });
            throw error;
        }
    }

    async nativeCreateUser(data: User) {
        try {
            const userRef = this.afs.doc(`Users/${data.uid}`);
            const doesExist = await this.checkIfRefExists(userRef);

            if (!doesExist) {
                userRef.set(data);
            }
        } catch (error) {
            console.log('nativeCreateUser', error);
            return Promise.reject('fail');
        }
    }

    async updateUserData(data: User): Promise<string> {
        try {
            const userRef = this.afs.doc(`Users/${data.uid}`);
            const doesExist = await this.checkIfRefExists(userRef);

            if (!doesExist) {
                userRef.set(data);
            } else {
                userRef.update({ ...data, updatedAt: Date.now() });
            }
            return 'success';
        } catch (error) {
            console.log('updateUserData', error);
            return Promise.reject('fail');
        }
    }

    async verifyUsers(usersToBeVerified: UserVerification[]): Promise<string> {
        let failedUsersList: string[] = usersToBeVerified.map((user) => user.fullName);
        let totalUsersToUpdate = usersToBeVerified.length;
        try {
            for (let i = 0; i < usersToBeVerified.length; i++) {
                const failedUserName = await this.updateVerification(usersToBeVerified[i]);
                if (failedUserName !== null) {
                    failedUsersList = failedUsersList.filter((fullName) => fullName !== failedUserName);
                }
            }
            const singularOrPlural: string = totalUsersToUpdate === 1 ? '' : 's';
            const usersToRetry: string = failedUsersList.join(', ');
            return failedUsersList.length === 0
                ? `Successfully Verified ${totalUsersToUpdate} User${singularOrPlural}.`
                : `Failed to verify ${failedUsersList.length} of ${totalUsersToUpdate}. Please retry for the following users: ${usersToRetry}`;
        } catch (error) {
            console.log('Verify Users Error: ', error);
            const usersToRetry: string = failedUsersList.join(', ');
            return Promise.reject(
                `Failed to verify ${failedUsersList.length} of ${totalUsersToUpdate}. Please retry for the following users: ${usersToRetry}`,
            );
        }
    }

    async updateVerification(userToBeVerified: UserVerification): Promise<string | null> {
        const userRef = this.afs.doc(`Users/${userToBeVerified.uid}`);
        const doesExist: boolean = await this.checkIfRefExists(userRef);
        if (doesExist) {
            await userRef.update({
                verification: userToBeVerified.verification,
            });
            return userToBeVerified.fullName;
        }
        return null;
    }

    getUsersForVerification(): Observable<User[]> {
        return this.afs.collection<User>('Users', (userRef) => userRef.where('matchUser', '==', true)).valueChanges();
    }

    async checkIfRefExists(ref: AngularFirestoreDocument): Promise<boolean> {
        const snap = await ref.get().pipe(take(1)).toPromise();
        return snap.exists ? true : false;
    }

    resetPassword(email: string): Promise<void> {
        return this.afAuth.sendPasswordResetEmail(email);
    }

    async logout(): Promise<void> {
        await this.afAuth.signOut();
        this.router.navigate([SIGNIN_ROUTE]);
    }

    userDataHelper(firebaseUser: firebase.auth.UserCredential): User {
        return {
            firstname: firebaseUser.user.displayName,
            email: firebaseUser.user.email,
            uid: firebaseUser.user.uid,
            archived: 0,
            lastname: '',
            createdAt: Date.now(),
            updatedAt: Date.now(),
            location: '',
            matchUser: !firebaseUser.additionalUserInfo.isNewUser,
            phone: firebaseUser.user.phoneNumber || '',
        };
    }
}
