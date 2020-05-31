import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {OffersService} from '../../services/offers.service';
import {combineLatest, Observable} from 'rxjs';
import {Advert} from '../../../../core/models/advert';
import {ActivatedRoute} from '@angular/router';
import {filter, map, switchMap} from 'rxjs/operators';
import {AuthService} from '../../../../core/auth/auth.service';
import {MatDialog} from '@angular/material';
import {OfferDialogComponent} from '../../../../shared/offer-dialog/offer-dialog.component';
import {AlertService} from '../../../../core/services/alert.service';
import {ConfirmDialogComponent} from '../../../../shared/confirm-dialog/confirm-dialog.component';

@Component({
    selector: 'app-offers-container',
    templateUrl: './offers-container.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OffersContainerComponent implements OnInit {

    offers: Observable<Advert[]>;
    filter = '';

    constructor(private offersService: OffersService,
                private activatedRoute: ActivatedRoute,
                private authService: AuthService,
                private alertService: AlertService,
                private matDialog: MatDialog) {
    }

    ngOnInit() {
        this.offers = combineLatest([this.offersService.offers$, this.activatedRoute.data, this.authService.currentUser$])
            .pipe(map(([offers, routeData, currentUser]) => {
                if (routeData.onlyMyOffers) {
                    return offers.filter(offer => offer.user.id === currentUser.id);
                }
                return offers;
            }));
    }


    editOffer(offer: Advert) {
        const offerDialogRef = this.matDialog.open(OfferDialogComponent, {
            width: '75%',
            data: offer
        });

        offerDialogRef.afterClosed()
            .pipe(switchMap(changedOffer => this.offersService.updateOffer(changedOffer)))
            .subscribe(() => this.alertService.success('Successfully updated your offer', 'Looks good!'));
    }

    deleteOffer(offerId: number) {
        const confirmDialog = this.matDialog.open(ConfirmDialogComponent, {
            width: 'auto',
            data: 'Are your really really sure to delete your offer?'
        });

        confirmDialog.afterClosed()
            .pipe(
                filter(result => result),
                switchMap(() => this.offersService.deleteOffer(offerId)))
            .subscribe(() => this.alertService.success('We`re sad to see your offer leave!', 'Damn!'));
    }
}
