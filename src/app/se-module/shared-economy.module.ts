import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedEconomyRoutingModule } from './shared-economy-routing.module';
import { HomeContainerComponent } from './container/home-container/home-container.component';
import { OffersComponent } from './components/offers/offers.component';
import { OfferComponent } from './components/offer/offer.component';
import { ProfileContainerComponent } from './container/profile-container/profile-container.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [HomeContainerComponent, OffersComponent, OfferComponent, ProfileContainerComponent],
  imports: [
    CommonModule,
    SharedEconomyRoutingModule,
    SharedModule
  ]
})
export class SharedEconomyModule { }
