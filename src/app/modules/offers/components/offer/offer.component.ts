import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {Offer} from '../../../../core/models/offer';
import {AuthService} from '../../../../core/auth/auth.service';

@Component({
    selector: 'app-offer',
    templateUrl: './offer.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OfferComponent implements OnInit {

    @Input()
    offer: Offer;

    @Output()
    outEditOffer = new EventEmitter<Offer>();

    @Output()
    outDeleteOffer = new EventEmitter<number>();

    isMyOffer = false;

    constructor(private authService: AuthService) {
    }

    ngOnInit() {
        if (this.offer) {
            this.isMyOffer = this.offer.offeringUser.id === this.authService.currentUserValue.id;
        }
    }

    editOffer() {
        this.outEditOffer.emit(this.offer);
    }

    deleteOffer() {
        this.outDeleteOffer.emit(this.offer.id);
    }
}
