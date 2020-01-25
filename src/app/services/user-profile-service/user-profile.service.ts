import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  topCleaners: User[];
  topPoopers: User[];

  constructor(private http: HttpClient) { }

  getProfile(): Observable<any> {
    const request = this.http.get(`${environment.hostname}/profile/`);
    return request;
  }

  getTopCleaners() {
    const request = this.http.get<any>(`${environment.hostname}/topCleaners`);
    return request.pipe(map(res => {
      let topCleaners: User[] = [];
      res.forEach(e => {
        let user = new User(e);
        topCleaners.push(user);
      });
      return topCleaners;
    }),
      catchError(err => {
        return throwError(err);
      })
    );
  }

  getTopPoopers() {
    const request = this.http.get<any>(`${environment.hostname}/topPoopers`);
    return request.pipe(map(res => {
      let topPoopers: User[] = [];
      res.forEach(e => {
        let user = new User(e);
        topPoopers.push(user);
      });
      return topPoopers;
    }),
      catchError(err => {
        return throwError(err);
      })
    );
  }
}
