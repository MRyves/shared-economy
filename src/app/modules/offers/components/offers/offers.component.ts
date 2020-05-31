import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';
import {Advert} from '../../../../core/models/advert';

@Component({
    selector: 'app-offers',
    templateUrl: './offers.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OffersComponent {

    @Input()
    offers: Advert[];

    @Output()
    outEditOffer = new EventEmitter<Advert>();

    @Output()
    outDeleteOffer = new EventEmitter<number>();

    editOffer(offer: Advert) {
        this.outEditOffer.emit(offer);
    }

    deleteOffer(offerId: number) {
        this.outDeleteOffer.emit(offerId);
    }

}
