import { Injectable } from '@angular/core';
import { Router, Route, CanActivate, CanActivateChild, CanLoad, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
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

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.checkLogin();
  }

  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.checkLogin();
  }

  canLoad(route: Route): Observable<boolean> {
    return this.checkLogin();
  }

  checkLogin() {
    return this.auth.checkAuthorization().pipe(map(res => {
      if(res) {
        this.router.navigate(['/home']);
        return false;
      } else {
        return true;
      }
    }));
  }

}
