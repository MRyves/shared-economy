import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {Alert} from '../models/alert';
import {NavigationStart, Router} from '@angular/router';
import {filter} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private alertSubject = new Subject<Alert>();
  alerts = this.alertSubject.asObservable();

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationStart))
      .subscribe(() => this.alertSubject.next(null));
  }

  setAlert(severity: string, text: string, title: string = null) {
    this.alertSubject.next({
      severity,
      text,
      title,
    } as Alert);
  }

  error(text: string, title: string = null) {
    this.setAlert('danger', text, title);
  }

  success(text: string, title: string = null) {
    this.setAlert('success', text, title);
  }
}
