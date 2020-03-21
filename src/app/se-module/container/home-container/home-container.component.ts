import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import {OffersService} from "../../services/offers.service";
import {Observable} from "rxjs";
import {Offer} from "../../../core/models/offer";

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeContainerComponent implements OnInit {

  offers: Observable<Offer[]>;

  constructor(private offersService: OffersService) { }

  ngOnInit() {
    this.offers = this.offersService.getAllOffers();
  }

}
