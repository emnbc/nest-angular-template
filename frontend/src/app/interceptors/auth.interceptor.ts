import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const header = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${this.auth.token}`)
                          .set('Content-Type', 'application/json; charset=utf-8')
    });
        
    return next.handle(header).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          // Http Response
        }
      }, err => {
        if (err instanceof HttpErrorResponse) {
            // Http Error Response
            if(err.status === 401) {
                this.auth.logOut();
                setTimeout(() => {
                    this.router.navigate(['/sign-in']);
                }, 1000);
            }
        }
      })
    );
  }
}