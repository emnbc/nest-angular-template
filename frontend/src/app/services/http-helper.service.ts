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

  find<T>(url: string, paramsList?: Param[]): Observable<HttpResponse<T>> {
    return this.http.get<T>(`${environment.apiUrl}/${url}`, {observe: 'response', ...paramsList && {params: this.setParams(paramsList)}});
  }

  create<T>(url: string, body: T): Observable<T> {
    return this.http.post<T>(`${environment.apiUrl}/${url}`, body);
  }

  update<T>(url: string, id: string, body: T): Observable<T> {
    return this.http.put<T>(`${environment.apiUrl}/${url}/${id}`, body);
  }

  setParams(paramsList?: Param[]): any {
    let params = new HttpParams();
    for(const param of paramsList) {
      if(param.value) params = params.set(param.key, param.value.toString());
    }
    return params;
  }

}

export interface Param {
  key: string;
  value: string | number;
}
