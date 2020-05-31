import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {User} from '../../../core/models/user';
import {AuthService} from '../../../core/auth/auth.service';
import {Observable} from 'rxjs';
import {TitleService} from '../../../core/services/title.service';
import {MatDialog} from '@angular/material';
import {OfferDialogComponent} from '../../offer-dialog/offer-dialog.component';
import {Advert} from '../../../core/models/advert';
import {OffersService} from '../../../modules/offers/services/offers.service';
import {switchMap} from 'rxjs/operators';
import {AlertService} from '../../../core/services/alert.service';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent implements OnInit {
    user: User;
    title: Observable<string>;

    constructor(private authService: AuthService,
                private titleService: TitleService,
                private offersService: OffersService,
                private alertService: AlertService,
                private matDialog: MatDialog) {
    }

    ngOnInit() {
        this.user = this.authService.currentUserValue;
        this.title = this.titleService.title;
    }

    openOfferDialog() {
        const offerDialogRef = this.matDialog.open(OfferDialogComponent, {
            width: '75%',
            data: {
                user: this.authService.currentUserValue,
                advertType: {
                    id: 1,
                    advertType: 'Offer',
                    description: 'Offering something'
                },
                pricing: {

                    currency: {
                        id: 4,
                        currency: 'Ethereum',
                        currencyShortcode: 'ETH'
                    },
                    pricingType: {
                        id: 2,
                        type: 'UsagePayment',
                        description: 'Pay according to usage, e.g. driven kilometers'
                    }
                }
            } as Advert
        });

        offerDialogRef.afterClosed()
            .pipe(switchMap(offer => this.offersService.createOffer(offer)))
            .subscribe(() => this.alertService.success('Successfully created new offer', 'NICE!'));
    }

    logout() {
        this.authService.logout();
    }
}
