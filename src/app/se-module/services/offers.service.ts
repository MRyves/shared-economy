import {Injectable} from '@angular/core';
import {ApiService} from '../../core/services/api.service';
import {Observable} from 'rxjs';
import {Offer} from '../../core/models/offer';

@Injectable({
    providedIn: 'root'
})
export class OffersService {

    constructor(private apiService: ApiService) {
    }

    getAllOffers(): Observable<Offer[]> {
        return this.apiService.get('offers');
    }
}
