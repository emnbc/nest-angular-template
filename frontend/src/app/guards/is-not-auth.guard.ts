import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map} from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { HttpHelperService } from '../services/http-helper.service';
import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class IsNotAuthGuard implements CanActivate {

  user$: User = new User();

  constructor(
    public router: Router,
    public http: HttpHelperService,
    public auth: AuthService
  ) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {

    if(this.auth.user$.getValue().id) {
      this.router.navigate(['/']);
      return false;
    }

    if(this.auth.token) {
      return this.http.find<User>('auth/me').pipe(map(res => {
        if(res.body && res.body.id) {
          this.auth.user$.next(new User(res.body));
          this.router.navigate(['/']);
          return false;
        } else {
          return true;
        }
      }), catchError(() => {  
        return of(true);
      }));
    } else return true;

  }

}
