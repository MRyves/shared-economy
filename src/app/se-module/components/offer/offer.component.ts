import {ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Offer} from '../../../core/models/offer';

@Component({
    selector: 'app-offer',
    templateUrl: './offer.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OfferComponent implements OnInit {

    @Input()
    offer: Offer;

    constructor() {
    }

    ngOnInit() {
    }

}
