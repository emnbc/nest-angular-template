import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class HttpHelperService {

  constructor(private http: HttpClient) { }

  login(authData: User): Observable<any> {
    return this.http.post(`${environment.apiUrl}/auth/login`, authData);
  }

  find<T>(url: string, params?: Params): Observable<HttpResponse<T>> {
    return this.http.get<T>(`${environment.apiUrl}/${url}`, {observe: 'response', ...params && {params: this.setParams(params)}});
  }

  create<T>(url: string, body: T): Observable<T> {
    return this.http.post<T>(`${environment.apiUrl}/${url}`, body);
  }

  update<T>(url: string, id: string, body: T): Observable<T> {
    return this.http.put<T>(`${environment.apiUrl}/${url}/${id}`, body);
  }

  setParams(paramsObj: Params) {
    let params = new HttpParams();
    for(let key in paramsObj) {
      if (paramsObj[key]) {
        params = params.set(key, paramsObj[key].toString());
      }
    }
    return params;
  }

}

export interface Params {
  [key: string]: string | number;
}