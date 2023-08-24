import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  constructor() { }
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler,): Observable<HttpEvent<any>> {
    const authReq = httpRequest.clone({headers: httpRequest.headers
        .set('Content-Type', 'application/json')
        .set('Authorization', 'Bearer ' + "this is my token")
        .set('Token', "this is my token")
    })
    return next.handle(authReq);
  }
}
