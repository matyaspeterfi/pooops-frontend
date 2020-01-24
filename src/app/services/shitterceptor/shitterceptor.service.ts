import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpSentEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShitterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | any> {
    let token = localStorage.getItem('accessToken');
    return next.handle(req.clone({ setHeaders: { Authorization: `Bearer ${token}` } }));
  }

  constructor() { }
}
