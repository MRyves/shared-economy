import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedEconomyRoutingModule } from './shared-economy-routing.module';
import { HomeContainerComponent } from './container/home-container/home-container.component';
import { OffersComponent } from './components/offers/offers.component';
import { OfferComponent } from './components/offer/offer.component';
import { ProfileContainerComponent } from './container/profile-container/profile-container.component';
import {SharedModule} from '../shared/shared.module';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AccordionModule} from "ngx-bootstrap/accordion";
import {FaIconLibrary, FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {fas} from "@fortawesome/free-solid-svg-icons";

@NgModule({
  declarations: [HomeContainerComponent, OffersComponent, OfferComponent, ProfileContainerComponent],
  imports: [
    CommonModule,
    SharedModule,
    BrowserAnimationsModule,
    AccordionModule.forRoot(),
    SharedEconomyRoutingModule,
    FontAwesomeModule
  ]
})
export class SharedEconomyModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }
}
