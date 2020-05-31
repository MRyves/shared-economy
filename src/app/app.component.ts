import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Alert} from './core/models/alert';
import {AlertService} from './core/services/alert.service';
import {filter} from 'rxjs/operators';
import {ActivatedRoute, NavigationEnd, NavigationStart, ResolveStart, Router} from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
    title = 'SharedEconomyPrototype';
    alert: Observable<Alert>;

    // layout options:
    showNavigation = false;

    constructor(private alertService: AlertService,
                private router: Router,
                private activatedRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.alert = this.alertService.alerts.pipe(filter(alert => alert !== null));
        this.router.events
            .pipe(filter(event => event instanceof NavigationEnd))
            .subscribe(event => {
                this.showNavigation = this.activatedRoute.firstChild.snapshot.data.showNavigation !== false;
            });
    }


}
