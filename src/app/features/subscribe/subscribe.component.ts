import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SCOUT_CREATE_ROUTE, verificationTypes, SUPPORT_ROUTE } from 'src/app/core/helpers/constants';
import { take } from 'rxjs/operators';
import { VerificationType } from 'src/app/core/models/viewModels';
import { Dictionary } from '@ngrx/entity';

@Component({
    selector: 'app-subscribe',
    templateUrl: './subscribe.component.html',
    styleUrls: ['./subscribe.component.scss'],
})
export class SubscribeComponent implements OnInit {
    fromSupport: boolean = false;
    subscribeContent: Dictionary<VerificationType> = verificationTypes;
    verificationOrder: number[] = [4, 1, 3, 2, 5];
    constructor(private route: ActivatedRoute, private router: Router) {}

    ngOnInit(): void {
        this.route.queryParams.pipe(take(1)).subscribe(({ fromSupport }) => {
            if (fromSupport === 'true') this.fromSupport = true;
        });
    }

    handleNavigateCreateScout() {
        this.router.navigate([this.fromSupport ? SUPPORT_ROUTE : SCOUT_CREATE_ROUTE]);
    }
}
