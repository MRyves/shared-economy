import {Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Input} from '@angular/core';
import {Offer} from '../../../core/models/offer';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OffersComponent implements OnInit {

  @Input()
  offers: Offer[];

  constructor() { }

  ngOnInit() {
  }

}
