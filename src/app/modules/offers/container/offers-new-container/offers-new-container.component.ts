import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Advert} from '../../../../core/models/advert';
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
    tempOffer: Advert;

    constructor(private offersService: OffersService,
                private authService: AuthService,
                private router: Router,
                private alertService: AlertService) {
    }

    ngOnInit() {
        this.tempOffer = {
            advertType: {
                id: 1,
                advertType: 'Offer',
                description: 'Offering something'
            },
            user: this.authService.currentUserValue,
            pricing: {
                pricingType: {
                    id: 2,
                    type: 'UsagePayment',
                    description: 'Pay according to usage, e.g. driven kilometers'
                },
                currency : {
                    id: 4,
                    currency: 'Ethereum',
                    currencyShortcode: 'ETH'
                }
            }
        };
    }

    createOffer(offer: Advert) {
        this.offersService.createOffer(offer)
            .subscribe(
                savedOffer => this.router.navigate([savedOffer.id])
                    .then(() => this.alertService.success('You created a new Advert', 'Yeah!')),
                error => this.alertService.error(error.message));
    }

}
