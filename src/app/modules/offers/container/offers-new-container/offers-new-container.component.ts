import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Offer} from '../../../../core/models/offer';
import {OffersService} from '../../services/offers.service';
import {AuthService} from '../../../../core/auth/auth.service';
import {Router} from '@angular/router';
import {AlertService} from '../../../../core/services/alert.service';

@Component({
    selector: 'app-offers-new-container',
    templateUrl: './offers-new-container.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OffersNewContainerComponent implements OnInit {
    tempOffer: Offer;

    constructor(private offersService: OffersService,
                private authService: AuthService,
                private router: Router,
                private alertService: AlertService) {
    }

    ngOnInit() {
        this.tempOffer = {
            offeringUserId: this.authService.currentUserValue.id,
        };
    }

    createOffer(offer: Offer) {
        this.offersService.createOffer(offer)
            .subscribe(
                savedOffer => this.router.navigate([savedOffer.id])
                    .then(() => this.alertService.success('You created a new Offer', 'Yeah!')),
                error => this.alertService.error(error.message));
    }

}
