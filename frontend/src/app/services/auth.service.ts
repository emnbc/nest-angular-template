import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { User } from '../models/user.model';
import { HttpHelperService } from './http-helper.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _token: string = null;
  user$ = new BehaviorSubject<User>(new User());

  constructor(private http: HttpHelperService) {}
  
  set token(value: string) {
    this._token = value;
  }

  get token(): string {
    if(this._token) {
      return this._token;
    } else if (this.getTokenFromStorage()) {
      this.token = this.getTokenFromStorage();
      return this.getTokenFromStorage();
    } else {
      return null;
    };
  }

  setTokenToStorage(token: string): void {
    localStorage.setItem('token', token);
  }

  getTokenFromStorage(): string {
    if(localStorage.getItem('token')) {
      return localStorage.getItem('token')
    } else return null;
  }

  checkAuthorization(): Observable<boolean>  {
    if(this.user$.getValue().id) {
      return of(true);
    }
    if(this.token) {
      return this.http.find<User>('auth/me').pipe(map(res => {
        if(res.body && res.body.id) {
          this.user$.next(new User(res.body));
          return true;
        } else {
          return false;
        }
      }), catchError(() => {
        return of(false);
      }));
    } else {
      return of(false);
    }
  }

  logOut(): void {
    this.token = null;
    localStorage.removeItem('token');
    this.user$.next(new User());
  }

}