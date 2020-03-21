import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {User} from '../../../core/models/user';
import {AuthService} from '../../../core/auth/auth.service';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent implements OnInit {
    user: User;

    constructor(private authService: AuthService) {
    }

    ngOnInit() {
        this.user = this.authService.currentUserValue;
    }

}
