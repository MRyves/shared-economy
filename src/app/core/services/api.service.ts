import {Injectable} from '@angular/core';
import {HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export abstract class ApiService {

    protected constructor() {
    }

    protected static formatErrors(error: any) {
        console.error(error);
        return throwError(error.error.message);
    }

    // abstract methods:

    abstract get<T>(path: string, params?: HttpParams): Observable<T>;

    abstract put<T>(path: string, body: T): Observable<null | T>;

    // tslint:disable-next-line:ban-types
    abstract post<T>(path: string, body: T): Observable<T>;

    abstract delete(path): Observable<any>;
}

