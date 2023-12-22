import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Broker, BrokerNegotiation, BrokerRequest, Client, User } from '../../models/queryModels';
import { LatLng } from '../../models/viewModels';

@Injectable({
    providedIn: 'root',
})
export class BrokersService {
    private geocoder: any;
    constructor(private afs: AngularFirestore) {}

    getBrokers(): Observable<Broker[]> {
        return this.afs.collection<User>('Users', (userRef) => userRef.where('isBroker', '==', true)).valueChanges();
    }

    getClientByEmail(email: string): Observable<User[]> {
        return this.afs.collection<Client>('Users', (userRef) => userRef.where('email', '==', email)).valueChanges();
    }

    getPendingBrokerRequests(brokerUid: string): Observable<BrokerRequest[]> {
        return this.afs
            .collection<BrokerRequest>('BrokerRequests', (userRef) =>
                userRef.where('brokerUid', '==', brokerUid).where('acceptedRequest', '==', false),
            )
            .valueChanges();
    }

    getAcceptedBrokerRequests(brokerUid: string): Observable<BrokerRequest[]> {
        return this.afs
            .collection<BrokerRequest>('BrokerRequests', (userRef) =>
                userRef.where('brokerUid', '==', brokerUid).where('acceptedRequest', '==', true),
            )
            .valueChanges();
    }

    getBrokerRequest(brokerUid: string, clientUid: string): Observable<BrokerRequest[]> {
        return this.afs
            .collection<BrokerRequest>('BrokerRequests', (userRef) => userRef.where('clientUid', '==', clientUid))
            .valueChanges();
    }

    getClients(clientIds: string[]): Observable<Client[]> {
        return this.afs.collection<Client>('Users', (userRef) => userRef.where('uid', 'in', clientIds)).valueChanges();
    }

    getClientBrokerRequests(uid: string): Observable<BrokerRequest[] | []> {
        return this.afs
            .collection<BrokerRequest>('BrokerRequests', (brokerRequestsRef) =>
                brokerRequestsRef.where('clientUid', '==', uid),
            )
            .valueChanges();
    }

    createRequest(brokerUid: string, clientUid: string, sentByBroker: boolean) {
        try {
            this.afs.doc(`BrokerRequests/${brokerUid}-${clientUid}`).set({
                acceptedRequest: false,
                brokerUid: brokerUid,
                clientUid: clientUid,
                expiryDate: 0,
                sentByBroker: sentByBroker,
            });
            return 'Success';
        } catch (error) {
            console.log('createBrokerRequest', { error });
            throw error;
        }
    }

    deleteRequest(brokerUid: string, clientUid: string) {
        try {
            this.afs.doc(`BrokerRequests/${brokerUid}-${clientUid}`).delete();
            return 'Success';
        } catch (error) {
            console.log('createBrokerRequest', { error });
            throw error;
        }
    }

    acceptRequest(brokerUid: string, clientUid: string) {
        try {
            this.afs.doc(`BrokerRequests/${brokerUid}-${clientUid}`).update({
                acceptedRequest: true,
                expiryDate: new Date().setFullYear(new Date().getFullYear() + 1),
                brokerAdminRole: true,
            });
            return 'Success';
        } catch (error) {
            console.log('createBrokerRequest', { error });
            throw error;
        }
    }

    toggleBrokerAdminRole(brokerUid: string, clientUid: string, adminRole: boolean): Promise<void> {
        try {
            return this.afs.doc(`BrokerRequests/${brokerUid}-${clientUid}`).update({ brokerAdminRole: adminRole });
        } catch (error) {
            console.log('toggleBrokerAdminRole', { error });
            throw error;
        }
    }

    async createNegotiationDocument(
        lotMatchId: number,
        sellerEmail: string,
        buyerEmail: string,
        sellerPaid: boolean,
        buyerPaid: boolean,
    ) {
        try {
            await this.afs.collection(`BrokerNegotiations`).add({
                lotMatchId: lotMatchId,
                sellerEmail: sellerEmail,
                buyerEmail: buyerEmail,
                sellerPaid: sellerPaid,
                buyerPaid: buyerPaid,
                emailSent: false,
            });
            return 'Success';
        } catch (error) {
            console.log('createBrokerNegotiationDocument', { error });
            throw error;
        }
    }

    updateBrokerNegotiationDocument(brokerNegotiation: BrokerNegotiation) {
        try {
            this.afs
                .collection<BrokerNegotiation>('BrokerNegotiations', (brokerNegotiationRef) =>
                    brokerNegotiationRef.where('lotMatchId', '==', brokerNegotiation.lotMatchId),
                )
                .get()
                .subscribe((brokerNegotiations) => {
                    brokerNegotiations.forEach((document) => {
                        document.ref.update({ ...brokerNegotiation });
                    });
                });
            return 'Success';
        } catch (error) {
            console.log('updateBrokerNegotiationDocument: ', { error });
            throw error;
        }
    }

    getBrokerNegotiations(lotMatchIds: number[]): Observable<BrokerNegotiation[]> {
        return this.afs
            .collection<BrokerNegotiation>('BrokerNegotiations', (brokerNegotiationRef) =>
                brokerNegotiationRef.where('lotMatchId', 'in', lotMatchIds),
            )
            .valueChanges();
    }

    updateBrokerNegotiationEmailStatus(lotMatchId: number) {
        try {
            this.afs
                .collection<BrokerNegotiation>('BrokerNegotiations', (brokerNegotiationRef) =>
                    brokerNegotiationRef.where('lotMatchId', '==', lotMatchId),
                )
                .get()
                .subscribe((brokerNegotiations) => {
                    brokerNegotiations.forEach((brokerNegotiation) => {
                        brokerNegotiation.ref.update({ emailSent: true });
                    });
                });
            return 'Success';
        } catch (error) {
            console.log('updateBrokerRequest', { error });
            throw error;
        }
    }

    async getGeocodedAddresses(locations: string[]): Promise<LatLng[]> {
        this.geocoder = new google.maps.Geocoder();
        var coordsArray = [];
        for (let i = 0; i < locations.length; i++) {
            await this.geocoder.geocode({ address: locations[i] }, (results, status) => {
                if (status == google.maps.GeocoderStatus.OK) {
                    let coords = {
                        lat: results[0].geometry.location.lat(),
                        lng: results[0].geometry.location.lng(),
                    };
                    coordsArray = [...coordsArray, coords];
                } else {
                    console.log('Error: ', results, ' & Status: ', status);
                    let coords = {
                        lat: 0,
                        lng: 0,
                    };
                    coordsArray = [...coordsArray, coords];
                }
            });
        }
        return coordsArray;
    }
}
