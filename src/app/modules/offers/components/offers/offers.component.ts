import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';
import {Offer} from '../../../../core/models/offer';

@Component({
    selector: 'app-offers',
    templateUrl: './offers.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OffersComponent {

    @Input()
    offers: Offer[];

    @Output()
    outEditOffer = new EventEmitter<Offer>();

    @Output()
    outDeleteOffer = new EventEmitter<number>();

    editOffer(offer: Offer) {
        this.outEditOffer.emit(offer);
    }

    deleteOffer(offerId: number) {
        this.outDeleteOffer.emit(offerId);
    }

}
