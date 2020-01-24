import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';
import { LoginResponse } from 'src/app/models/login';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  login(email, password): Observable<any> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });

    const options = {
      headers: headers,
      observe: 'response' as 'body'
    };

    const request = this.http.post(`${environment.hostname}/login`,
      {
        'email': `${email}`,
        'password': `${password}`,
      },options);

      return request.pipe(map(res => {
        return new LoginResponse(res['body'].accessToken, res['body'].refreshToken)
      }),
        catchError(err => {
          return throwError(err);
        })
      );
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('access_token') ? true : false;
  }

  logout(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    this.router.navigate(['/login']);
  }
}