import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class SubscriptionService {
    unsubscribeComponent$ = new Subject<void>();
    unsubscribe$ = this.unsubscribeComponent$.asObservable();
}
