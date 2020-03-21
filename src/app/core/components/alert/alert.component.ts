import {ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {Alert} from '../../models/alert';
import {Subscription} from 'rxjs';
import {AlertService} from '../../services/alert.service';
import {take} from 'rxjs/operators';

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
            .pipe(take(1))
            .subscribe((alert) => {
                this.alert = alert;
            });
    }

    ngOnDestroy(): void {
        this.alertSubscription.unsubscribe();
    }

}
