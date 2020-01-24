import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { Shit } from 'src/app/models/shit';

@Injectable({
  providedIn: 'root'
})
export class ShitService {
  oldShits: Shit[];

  constructor(private http: HttpClient) { }

  getShits() {
    const request = this.http.get<any>(`${environment.hostname}/shits/`);
    return request.pipe(map(res => {
      let shits:Shit[] = [];
      res.forEach(e => {
        let shit = new Shit(e);
        shits.push(shit);
      });
      return shits;
    }),
      catchError(err => {
        return throwError(err);
      })
    );
  }

  putShit(shitId){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    headers = headers.append('shitid', `${shitId}`);

    const options = {
      headers: headers,
      observe: 'response' as 'body'
    };
    const request = this.http.put<any>(`${environment.hostname}/shit/`, {}, options)

    return request.pipe(map(res => {
      return res;
    }),catchError(err => {
      return throwError(err);
    }))
  }

  getOldShits() {
    const request = this.http.get<any>(`${environment.hostname}/oldShits`);
    return request.pipe(map(res => {
      let oldShits: Shit[] = [];
      res.forEach(e => {
        let oldShit = new Shit(e);
        oldShits.push(oldShit);
      });
      return oldShits;
    }),
      catchError(err => {
        return throwError(err);
      })
    );
  }

  postShit(shit): Observable<any> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });

    const options = {
      headers: headers,
      observe: 'response' as 'body'
    };

    const request = this.http.post(`${environment.hostname}/shit`,
      {
        shit: {
          name: shit.name,
          type: shit.type,
          lat: shit.lat,
          long: shit.lng
        }
      }, options);

    return request.pipe(map(res => {
      return res;
    }),
      catchError(err => {
        return throwError(err);
      })
    );
  }
}

