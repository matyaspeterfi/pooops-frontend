import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Shit } from 'src/app/models/shit';

@Injectable({
  providedIn: 'root'
})
export class ShitService {

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
}
