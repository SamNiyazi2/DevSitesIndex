
// 11/01/2019 05:26 am - SSN - [20191101-0526] - [001] - Check login status

// 11/03/2019 06:10 am - SSN - [20191101-0526] - [016] - Check login status
// handle errors
// https://scotch.io/@vigneshsithirai/angular-6-7-http-client-interceptor-with-error-handling

import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { tap, catchError } from 'rxjs/operators';
import { AuthenticateService } from '../users/authenticate.service';
import { BroadcasterUtilService } from '../broadcaster-util.service';

import * as ehu from '../util/ErrorHandlingHelpers';

@Injectable({
  providedIn: 'root'
})
export class CheckLoginService implements HttpInterceptor {


  constructor(public authenticateService: AuthenticateService, private broadcasterUtil: BroadcasterUtilService) { }


  // https://alligator.io/angular/httpclient-interceptors/
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


    let counter: number = 0;
    let requestCount: number = 0;

    let isAuthenticated_checkedAlready: boolean = false;

    let doPromptToLogin: boolean = false; // !this.authenticateService.isAuthenticated();

    let returnResult = next.handle(req).pipe(
      tap(evt => {

        counter += 1;


     //   console.log("check-login - 20191101-0534 - Authenticated", this.authenticateService.isAuthenticated());

        if (evt.type != 0) {

          if (evt.type != 0) {
            requestCount += 1;
          }

          //console.log(evt);
          //console.log('---------------------------------- [' + counter + "] [" + requestCount + "]");

          // "http://p3013.nonbs.net:3013/api/authenticateUserAPI/ForgeryToken"

          //console.log(req.url.toLowerCase().indexOf('api/authenticateUserAPI'.toLowerCase()));
          //console.log(req.url);

          if (req.url.toLowerCase().indexOf('api/authenticateUserAPI'.toLowerCase()) !== -1) {
            isAuthenticated_checkedAlready = true;
          }

          if (req.url.toLowerCase().indexOf('api/authenticateUserAPI'.toLowerCase()) === -1) {

            //if (evt instanceof HttpResponse) {

            //  console.log('check-login - 20191101-0534 - is HttpResponse ');

            //}


          }

        }


       // doPromptToLogin = !this.authenticateService.isAuthenticated();

        //console.log('8888888888888888888 [' + counter + "]");
        //console.log('Authenticated ', this.authenticateService.isAuthenticated());

        //if (requestCount > 0 && !isAuthenticated_checkedAlready && doPromptToLogin) {
        //  console.log('****************** [' + counter + "]  [" + requestCount + "]");
        /////////////////////////////////  this.broadcasterUtil.broadcast('doLogin', { controlId: 'appLoginPopup', message: 'Sent from check-loing - 20191101-1601' });
        //  // return;
        //}

      })
    ).pipe(catchError(error => {

    

      console.log("===============================================");
      console.log("===============================================");
      console.log("===============================================");
      console.log("===============================================");
      console.log("===============================================");


      console.log('check-login-service - catchError');
      console.log(error);



      console.log(error.url);

      // Get returnUrl
      const myRegexp = /(\/Account\/login\??)(ReturnUrl=)(.*)/ig;
      const match = myRegexp.exec(error.url);
      let returnUrl = match[3];

      console.log("===============================================");
      console.log("===============================================");
      console.log("===============================================");
      console.log("===============================================");
      console.log("===============================================");
      console.log("===============================================");

  /////////////////////    this.broadcasterUtil.broadcast('doLogin', { controlId: 'appLoginPopup', message: 'Sent from check-loing - 20191101-1601', returnUrl });

      ehu.ErrorHandlingHelpers.showHtmlErrorResponse(error);


      return new Observable<HttpEvent<any>>();

    }));


    return returnResult;



  }


}

