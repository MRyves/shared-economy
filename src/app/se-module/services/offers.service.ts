import {Injectable} from '@angular/core';
import {ApiService} from '../../core/services/api.service';
import {Observable} from 'rxjs';
import {Offer} from '../../core/models/offer';
import {filter, map} from "rxjs/operators";
import {AuthService} from "../../core/auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  constructor(private apiService: ApiService, private authService: AuthService) {
  }

  /**
   * @return Observable of all offers from other user.
   */
  getAllOffers(): Observable<Offer[]> {
    return this.apiService.get<Offer[]>('offers')
      .pipe(map(offers => offers.filter(offer => offer.offeringUser !== this.authService.currentUserValue)));
  }
}
