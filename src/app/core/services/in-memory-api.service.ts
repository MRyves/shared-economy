import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {ApiService} from './api.service';

const cudOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};


@Injectable({
    providedIn: 'root'
})
export class InMemoryApiService extends ApiService {

    private static apiPath = 'api/';

    constructor(private http: HttpClient) {
        super();
    }

    get<T>(path: string, params: HttpParams = new HttpParams()): Observable<T> {
        return this.http.get<T>(`${InMemoryApiService.apiPath}${path}`, {params})
            .pipe(catchError(InMemoryApiService.formatErrors));
    }

    put<T>(path: string, body: T): Observable<null | T> {
        return this.http.put<T>(
            `${InMemoryApiService.apiPath}${path}`,
            body, cudOptions
        ).pipe(catchError(InMemoryApiService.formatErrors));
    }

    // tslint:disable-next-line:ban-types
    post<T>(path: string, body: {}): Observable<T> {
        return this.http.post<T>(`${InMemoryApiService.apiPath}${path}`, body, cudOptions)
            .pipe(catchError(InMemoryApiService.formatErrors));
    }

    delete(path): Observable<any> {
        return this.http.delete(
            `${InMemoryApiService.apiPath}${path}`
        ).pipe(catchError(InMemoryApiService.formatErrors));
    }
}
