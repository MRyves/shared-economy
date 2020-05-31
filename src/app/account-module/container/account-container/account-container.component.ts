import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AuthService} from '../../../core/auth/auth.service';
import {Credentials} from '../../models/credentials';
import {take} from 'rxjs/operators';
import {Router} from '@angular/router';
import {AlertService} from '../../../core/services/alert.service';

@Component({
    selector: 'app-account-container',
    templateUrl: './account-container.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountContainerComponent implements OnInit {

    constructor(private authService: AuthService, private router: Router, private alertService: AlertService) {
    }

    ngOnInit() {
    }

    login(credentials: Credentials) {
        this.authService.login(credentials)
            .pipe(take(1))
            .subscribe(user => {
                    this.router.navigate(['/']);
                },
                err => {
                    // todo: implement error handling
                    this.alertService.error(err.message);
                });
    }

}
