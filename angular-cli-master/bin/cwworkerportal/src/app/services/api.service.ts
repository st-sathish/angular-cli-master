import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable ,  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable()
export class ApiService {

  private API_URL: string;

  constructor(
    private http: HttpClient,
  ) {
      this.API_URL = `${environment.BASE_URL}` + '/api';
   }

  // tslint:disable-next-line: typedef
  private formatErrors(error: any) {
    return  throwError(error.error);
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(this.API_URL + `${path}`, { params })
      .pipe(catchError(this.formatErrors));
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http.put(
      this.API_URL + `${path}`,
      JSON.stringify(body)
    ).pipe(catchError(this.formatErrors));
  }

  post(path: string, body: Object = {}): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post(
      this.API_URL + `${path}`,
      JSON.stringify(body)
    ).pipe(catchError(this.formatErrors));
  }

  delete(path: string): Observable<any> {
    return this.http.delete(
      this.API_URL + `${path}`
    ).pipe(catchError(this.formatErrors));
  }

  postMultiPart(path: string, fd: Object = {}): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'multipart/form-data'
      })
    };
    return this.http.post(
      this.API_URL + `${path}`, fd,
    ).pipe(catchError(this.formatErrors));
  }
}
