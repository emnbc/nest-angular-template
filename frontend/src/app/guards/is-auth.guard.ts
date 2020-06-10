import { Injectable } from '@angular/core';
import { Router, CanActivate, CanActivateChild, CanLoad, ActivatedRouteSnapshot, RouterStateSnapshot, Route } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map} from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { HttpHelperService } from '../services/http-helper.service';
import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class IsAuthGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(
    public router: Router,
    public auth: AuthService
  ) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.checkLogin();
  }

  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.checkLogin();
  }

  canLoad(route: Route): Observable<boolean>  {
    return this.checkLogin();
  }

  checkLogin() {
    return this.auth.checkAuthorization().pipe(map(res => {
      if(res) {
        return true;
      } else {
        this.router.navigate(['/welcome']);
        return false;
      }
    }));
  }

}
