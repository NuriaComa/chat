import { Injectable } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

export const COOKIE_NAME: string = environment.cookieName;

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): any {
    let request = req;
    const token = localStorage.getItem(COOKIE_NAME);

    request = req.clone({
      setHeaders: {
        Authorization: `Bearer ${ token }`
      }
    });

    return next.handle(request).pipe(
      catchError(
        (err) => {
          if (err.status === 401){
            this.handleAuthError();
            return of(err);
          }
          throw err;
        }
      )
    );
  }

  private handleAuthError(): void {
    localStorage.removeItem(COOKIE_NAME);
    this.router.navigate(['']);
  }
}
