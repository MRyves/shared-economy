import {Injectable} from '@angular/core';
import {ApiService} from '../../../core/services/api.service';
import {User} from '../../../core/models/user';
import {AuthService} from '../../../core/auth/auth.service';
import {BehaviorSubject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private usersSubject = new BehaviorSubject<User[]>([])
    users$ = this.usersSubject.asObservable();

    constructor(private apiService: ApiService, private authService: AuthService) {
        this.loadUsers();
    }

    updateUser(user: User) {
        this.apiService.put<User>(`users/${user.id}`, user)
            .subscribe(() => {
                this.loadUsers();
                this.authService.updateUser();
            });
    }

    deleteCurrentUser() {
        this.apiService.delete(`users/${this.authService.currentUserValue.id}`)
            .subscribe(() => this.loadUsers());
        this.authService.logout();
    }

    private loadUsers(): void {
        this.apiService.get<User[]>('users')
            .subscribe(users => this.usersSubject.next(users));
    }
}
