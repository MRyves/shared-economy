import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {ApiService} from './api.service';

const cudOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};


@Injectable({
    providedIn: 'root'
})
export class BackendApiService extends ApiService {

    private static apiPath = 'http://localhost:8888/api/';

    constructor(private http: HttpClient) {
        super();
    }

    get<T>(path: string, params: HttpParams = new HttpParams()): Observable<T> {
        return this.http.get<T>(`${BackendApiService.apiPath}${path}`, {params})
            .pipe(catchError(BackendApiService.formatErrors));
    }

    put<T>(path: string, body: T): Observable<null | T> {
        return this.http.put<T>(
            `${BackendApiService.apiPath}${path}`,
            body, cudOptions
        ).pipe(catchError(BackendApiService.formatErrors));
    }

    // tslint:disable-next-line:ban-types
    post<T>(path: string, body: {}): Observable<T> {
        return this.http.post<T>(`${BackendApiService.apiPath}${path}`, body, cudOptions).pipe(catchError(BackendApiService.formatErrors));
    }

    delete(path): Observable<any> {
        return this.http.delete(
            `${BackendApiService.apiPath}${path}`
        ).pipe(catchError(BackendApiService.formatErrors));
    }
}

