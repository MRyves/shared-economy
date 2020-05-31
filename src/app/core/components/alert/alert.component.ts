import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {Alert} from '../../models/alert';
import {Subscription} from 'rxjs';
import {AlertService} from '../../services/alert.service';

@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class AlertComponent implements OnInit, OnDestroy {

    alert: Alert;
    alertSubscription: Subscription;

    constructor(private alertService: AlertService) {
    }

    ngOnInit() {
        this.alertSubscription = this.alertService.alerts
            .subscribe((alert) => {
                this.alert = alert;
            });
    }

    ngOnDestroy(): void {
        this.alertSubscription.unsubscribe();
    }

}
