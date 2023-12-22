import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';
import { User } from '../../models/baseModels';

@Injectable({
    providedIn: 'root',
})
export class ErrorService {
    constructor(private afs: AngularFirestore) {}

    saveError(error: Error, user: User, action: { type: string }) {
        const date = Date.now();
        const path = `Errors/${new Date(date).toDateString()}/${action.type}`;
        this.afs.collection(path).add({ email: user.email, errorMessage: error.message, time: date });
    }
}
