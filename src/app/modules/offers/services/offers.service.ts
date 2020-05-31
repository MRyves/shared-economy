import {Injectable} from '@angular/core';
import {ApiService} from '../../../core/services/api.service';
import {BehaviorSubject, combineLatest, Observable} from 'rxjs';
import {Offer} from '../../../core/models/offer';
import {AuthService} from '../../../core/auth/auth.service';
import {map, tap} from 'rxjs/operators';
import {UserService} from './user.service';

@Injectable({
    providedIn: 'root'
})
export class OffersService {

    private offersSubject = new BehaviorSubject<Offer[]>([]);
    offers$ = this.offersSubject.asObservable();

    constructor(private apiService: ApiService,
                private authService: AuthService,
                private userService: UserService) {
        this.updateOffers();
    }

    /**
     * @return Observable of all offers from other user.
     */
    getAllOffers(): Observable<Offer[]> {
        return this.offers$;
    }

    private updateOffers(): void {
        combineLatest([this.apiService.get<Offer[]>('offers'), this.userService.users$])
            .pipe(map(([offers, users]) => {
                offers.forEach(offer => offer.offeringUser = users.find(user => user.id === offer.offeringUserId));
                return offers;
            }))
            .subscribe(offers => this.offersSubject.next(offers));
    }

    updateOffer(offer: Offer): Observable<Offer> {
        return this.apiService.put<Offer>(`offers`, offer).pipe(tap(() => this.updateOffers()));
    }

    createOffer(offer: Offer): Observable<Offer> {
        return this.apiService.post<Offer>('offers', offer).pipe(tap(() => this.updateOffers()));
    }

    deleteOffer(offerId: number): Observable<any> {
        return this.apiService.delete(`offers/${offerId}`).pipe(tap(() => this.updateOffers()));
    }
}
