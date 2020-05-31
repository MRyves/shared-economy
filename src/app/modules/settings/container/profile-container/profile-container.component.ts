import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AuthService} from '../../../../core/auth/auth.service';
import {Observable} from 'rxjs';
import {User} from '../../../../core/models/user';
import {UserService} from '../../../offers/services/user.service';
import {Router} from '@angular/router';
import {AlertService} from '../../../../core/services/alert.service';

@Component({
    selector: 'app-profile-container',
    templateUrl: './profile-container.component.html',
    styles: [],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileContainerComponent implements OnInit {

    user: Observable<User>;

    constructor(private authService: AuthService,
                private userService: UserService,
                private router: Router,
                private alertService: AlertService) {
    }

    ngOnInit() {
        this.user = this.authService.currentUser$;
    }

    updateUser(updatedUser: User) {
        try {
            this.userService.updateUser(updatedUser);
            this.alertService.success('Successfully update profile!');
        } catch (e) {
            console.error('Exception occurred during update of user: %o; %o', updatedUser, e);
            this.router.navigate(['/login']);
        }
    }

    deleteUser() {
        this.userService.deleteCurrentUser();
        this.router.navigate(['/login'])
            .then(() => this.alertService.success('Your profile has been deleted!', 'We\'re sad to see you leave'));
    }
}
