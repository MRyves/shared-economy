import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {combineLatest, Observable} from 'rxjs';
import {Offer} from '../../../../core/models/offer';
import {map} from 'rxjs/operators';
import {OffersService} from '../../services/offers.service';
import {ActivatedRoute} from '@angular/router';
import {AuthService} from '../../../../core/auth/auth.service';
import {AlertService} from '../../../../core/services/alert.service';

@Component({
    selector: 'app-offers-detail-container',
    templateUrl: './offers-detail-container.component.html',
    styles: [],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OffersDetailContainerComponent implements OnInit {

    selectedOffer: Observable<Offer>;
    isEligibleForChange: Observable<boolean>;

    constructor(private offersService: OffersService,
                private authService: AuthService,
                private route: ActivatedRoute,
                private alertService: AlertService) {
    }

    ngOnInit() {
        this.selectedOffer = combineLatest([
            this.offersService.getAllOffers(),
            this.route.params
        ]).pipe(
            map(([offers, routeParams]) =>
                offers.find((offer) => offer.id === +routeParams.offerId)
            )
        );

        this.isEligibleForChange = combineLatest([this.selectedOffer, this.authService.currentUser$])
            .pipe(map(([selectedOffer, currentUser]) =>
                selectedOffer.offeringUser.id === currentUser.id
            ));
    }

    updateOffer(offer: Offer) {
        this.offersService.updateOffer(offer);
        this.alertService.success('Successfully updated offer');
    }
}
