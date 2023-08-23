import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptorService implements HttpInterceptor {
  constructor() {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let authRequest = req.clone();
    switch (req.headers.get('apiKey')) {
      case 'noAuth':
        break;
      default: {
        authRequest = authRequest.clone({
          headers: authRequest.headers.set(
            'authorization',
            'Bearer ' + sessionStorage.getItem('access-token')
          ),
        });
      }
    }
    return next.handle(authRequest);
  }
}
