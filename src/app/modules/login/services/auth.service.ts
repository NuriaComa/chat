import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Router } from '@angular/router';
import { LoginI } from '../models/login/login';

export const COOKIE_NAME: string = environment.cookieName;

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private httpClient: HttpClient, private router: Router) {
  }


  login(data): void {
    this.httpClient.post(
       environment.url + 'login', data
    ).subscribe(
      (responseData: LoginI) => {
        localStorage.setItem(COOKIE_NAME, responseData.session_id);
        this.router.navigate(['/chat']);
      },
      (error: HttpErrorResponse) => {
        console.log('Error login request', error);
      }
    );
  }
}
