import {NgModule} from '@angular/core';

import {OffersRoutingModule} from './offers-routing.module';
import {OffersContainerComponent} from './container/offers-container/offers-container.component';
import {OfferComponent} from './components/offer/offer.component';
import {SharedModule} from '../../shared/shared.module';
import {AccordionModule} from 'ngx-bootstrap/accordion';
import {OfferDetailComponent} from './components/offer-detail/offer-detail.component';
import {OffersDetailContainerComponent} from './container/offers-detail-container/offers-detail-container.component';
import {OffersNewContainerComponent} from './container/offers-new-container/offers-new-container.component';
import {OffersComponent} from './components/offers/offers.component';
import {MatExpansionModule, MatIconModule} from '@angular/material';
import {Ng2SearchPipeModule} from 'ng2-search-filter';



@NgModule({
    declarations: [
        OffersContainerComponent,
        OffersComponent,
        OfferComponent,
        OfferDetailComponent,
        OffersDetailContainerComponent,
        OffersNewContainerComponent
    ],
    imports: [
        SharedModule,
        Ng2SearchPipeModule,
        AccordionModule.forRoot(),
        OffersRoutingModule,
        MatExpansionModule,
        MatIconModule
    ]
})
export class OffersModule {
}
