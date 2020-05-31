import {Inject, Injectable} from '@angular/core';
import {Credentials} from '../../account-module/models/credentials';
import {SESSION_STORAGE, StorageService} from 'ngx-webstorage-service';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../models/user';
import {catchError, tap} from 'rxjs/operators';
import {BackendApiService} from '../services/backend-api.service';

const userKey = 'shared-economy-current-user';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private currentUserSubject: BehaviorSubject<User>;
    public currentUser$: Observable<User>;

    constructor(@Inject(SESSION_STORAGE) private storageService: StorageService<User>,
                private apiService: BackendApiService) {
        // check session storage if user is still logged in:
        this.currentUserSubject = new BehaviorSubject<User>(this.storageService.get(userKey));
        this.currentUser$ = this.currentUserSubject.asObservable();
    }

    get currentUserValue() {
        return this.currentUserSubject.getValue();
    }

    login(credentials: Credentials): Observable<User> {
        return this.apiService.post<User>('users/login', credentials)
            .pipe(tap(user => {
                this.storageService.set(userKey, user);
                this.currentUserSubject.next(user);
            }), catchError(err => {
                console.log(err);
                throw Error(err);
            }));
    }

    logout(): void {
        this.storageService.remove(userKey);
        this.currentUserSubject.next(null);
    }

    updateUser(): void {
        if (this.currentUserValue) {
            this.apiService.get<User>(`users/${this.currentUserValue.id}`)
                .subscribe(user => {
                    this.currentUserSubject.next(user);
                    this.storageService.set(userKey, user);
                });
            return;
        }
        throw Error('User is currently not logged in');
    }
}
