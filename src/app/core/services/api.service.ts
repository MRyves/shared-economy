import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

const cudOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};


@Injectable({
    providedIn: 'root'
})
export class ApiService {

    private static apiPath = 'api/';

    constructor(private http: HttpClient) {
    }

    private static formatErrors(error: any) {
        console.log(error);
        return throwError(error);
    }

    get<T>(path: string, params: HttpParams = new HttpParams()): Observable<T> {
        return this.http.get<T>(`${ApiService.apiPath}${path}`, {params})
            .pipe(catchError(ApiService.formatErrors));
    }

    put<T>(path: string, body: T): Observable<null | T> {
        return this.http.put<T>(
            `${ApiService.apiPath}${path}`,
            body, cudOptions
        ).pipe(catchError(ApiService.formatErrors));
    }

    // tslint:disable-next-line:ban-types
    post<T>(path: string, body: Object = {}): Observable<T> {
        return this.http.post<T>(`${ApiService.apiPath}${path}`, body).pipe(catchError(ApiService.formatErrors));
    }

    delete(path): Observable<any> {
        return this.http.delete(
            `${ApiService.apiPath}${path}`
        ).pipe(catchError(ApiService.formatErrors));
    }
}
