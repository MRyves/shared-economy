import {Injectable} from '@angular/core';
import {ReplaySubject} from 'rxjs';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {filter, map} from 'rxjs/operators';

const defaultTitle = 'Welcome to SharedEconomy!';

@Injectable({
    providedIn: 'root'
})
export class TitleService {

    private titleSubject = new ReplaySubject<string>(1);
    title = this.titleSubject.asObservable();

    constructor(private router: Router, private activatedRoute: ActivatedRoute) {
        this.titleSubject.next(defaultTitle);
        this.router.events
            .pipe(
                filter(event => event instanceof NavigationEnd),
                map(() => {
                    let child = this.activatedRoute.firstChild;
                    while (child.firstChild) {
                        child = child.firstChild;
                    }
                    if (child.snapshot.data.title) {
                        return child.snapshot.data.title;
                    }
                    return defaultTitle;
                })
            )
            .subscribe(title => this.titleSubject.next(title));
    }
}
