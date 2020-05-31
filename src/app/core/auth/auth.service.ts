import {Inject, Injectable} from '@angular/core';
import {Credentials} from '../../account-module/models/credentials';
import {SESSION_STORAGE, StorageService} from 'ngx-webstorage-service';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../models/user';
import {ApiService} from '../services/api.service';
import {map} from 'rxjs/operators';
import * as shajs from 'sha.js';
import {HttpParams} from '@angular/common/http';

const userKey = 'shared-economy-current-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<User>;
    public currentUser$: Observable<User>;

  constructor(@Inject(SESSION_STORAGE) private storageService: StorageService<User>,
              private apiService: ApiService) {
      // check session storage if user is still logged in:
      this.currentUserSubject = new BehaviorSubject<User>(this.storageService.get(userKey));
      this.currentUser$ = this.currentUserSubject.asObservable();
  }

  get currentUserValue() {
    return this.currentUserSubject.getValue();
  }

  login(credentials: Credentials): Observable<User> {
    const submittedPwHash = shajs('sha256').update(credentials.password).digest('hex');
    return this.apiService.get<User[]>(`users`, new HttpParams().set('username', encodeURIComponent(credentials.username)))
      .pipe(map(foundUsers => {
        if (foundUsers.length !== 1) {
          throw Error('No user found with given username!');
        }
        if (foundUsers[0].pwHash === submittedPwHash) {
          this.storageService.set(userKey, foundUsers[0]);
          this.currentUserSubject.next(foundUsers[0]);
          return foundUsers[0];
        }

        throw Error('Wrong password!');
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
    throw Error('User is currently not logged in')
  }
}
