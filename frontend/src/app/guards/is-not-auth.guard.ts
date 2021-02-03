import { Injectable } from '@angular/core';
import { Router, Route, CanActivate, CanActivateChild, CanLoad, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class IsNotAuthGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(
    private router: Router,
    private auth: AuthService
  ) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    return this.checkLogin();
  }

  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    return this.checkLogin();
  }

  canLoad(route: Route): Observable<boolean | UrlTree> {
    return this.checkLogin();
  }

  checkLogin() {
    return this.auth.checkAuthorization().pipe(map(isAuth => {
      if (isAuth) {
        return this.router.parseUrl('/home');
      } else {
        return true;
      }
    }));
  }

}
