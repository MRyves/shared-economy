import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Advert} from '../../../core/models/advert';
import {tap} from 'rxjs/operators';
import {BackendApiService} from '../../../core/services/backend-api.service';

@Injectable({
    providedIn: 'root'
})
export class OffersService {

    private offersSubject = new BehaviorSubject<Advert[]>([]);
    offers$ = this.offersSubject.asObservable();

    constructor(private apiService: BackendApiService) {
        this.updateOffers();
    }

    /**
     * @return Observable of all offers from other user.
     */
    getAllOffers(): Observable<Advert[]> {
        return this.offers$;
    }

    private updateOffers(): void {
        this.apiService.get<Advert[]>('adverts')
            .subscribe(adverts => this.offersSubject.next(adverts));
    }

    updateOffer(offer: Advert): Observable<Advert> {
        return this.apiService.put<Advert>(`adverts/${offer.id}`, offer)
            .pipe(tap(() => this.updateOffers()));
    }

    createOffer(offer: Advert): Observable<Advert> {
        return this.apiService.post<Advert>('adverts', offer).pipe(tap(() => this.updateOffers()));
    }

    deleteOffer(offerId: number): Observable<any> {
        return this.apiService.delete(`adverts/${offerId}`).pipe(tap(() => this.updateOffers()));
    }
}
