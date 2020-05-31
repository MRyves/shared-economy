import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {Advert} from '../../../../core/models/advert';
import {AuthService} from '../../../../core/auth/auth.service';

@Component({
    selector: 'app-offer',
    templateUrl: './offer.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OfferComponent implements OnInit {

    @Input()
    offer: Advert;

    @Output()
    outEditOffer = new EventEmitter<Advert>();

    @Output()
    outDeleteOffer = new EventEmitter<number>();

    isMyOffer = false;

    constructor(private authService: AuthService) {
    }

    ngOnInit() {
        if (this.offer) {
            this.isMyOffer = this.offer.user.id === this.authService.currentUserValue.id;
        }
    }

    editOffer() {
        this.outEditOffer.emit(this.offer);
    }

    deleteOffer() {
        this.outDeleteOffer.emit(this.offer.id);
    }
}
