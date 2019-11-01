
// 11/01/2019 05:26 am - SSN - [20191101-0526] - [001] - Check login status

import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { tap, catchError } from 'rxjs/operators';
import { AuthenticateService } from '../users/authenticate.service';

@Injectable({
  providedIn: 'root'
})
export class CheckLoginService implements HttpInterceptor {


  // https://alligator.io/angular/httpclient-interceptors/
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(req).pipe(tap(evt => {

      let doPromptToLogin: boolean = !this.authenticateService.isAuthenticated();

      console.log("check-login - 20191101-0534 - Authenticated", this.authenticateService.isAuthenticated());

      //if (evt.type != 0) {

      //  console.log(evt);
      //  console.log('----------------------------------');

      //}

      //if (evt instanceof HttpResponse) {

      //  console.log('check-login - 20191101-0534 - is HttpResponse ');

      //}

      if (doPromptToLogin) {
        console.log("20191101-1025 - Prompt to login");
      }

    }));


  }

  constructor(public authenticateService: AuthenticateService) { }

}

