import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {Alert} from '../models/alert';

@Injectable({
    providedIn: 'root'
})
export class AlertService {

    private alertSubject = new Subject<Alert>();
    alerts = this.alertSubject.asObservable();

    constructor() {
    }

    setAlert(severity: string, text: string, title: string = null) {
        this.alertSubject.next({
            severity,
            text,
            title,
        } as Alert);
    }

    error(text: string, title: string = null) {
        this.setAlert('danger', text);
    }
}
