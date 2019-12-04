
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

    
    let returnResult = next.handle(req).pipe(
      tap(evt => {

        if (evt.type != 0) {

        }


      })
    );

    // 12/02/2019 07:25 am - SSN - We don't want to capture all errors.

    //.pipe(catchError(error => {
    

    //  console.log("===============================================");
    //  console.log("===============================================");
    //  console.log("===============================================");
    //  console.log("===============================================");
    //  console.log("===============================================");


    //  console.log('(Interceptor) check-login-service - catchError');
    //  console.log(error);
        
    //  ehu.ErrorHandlingHelpers.showHtmlErrorResponse(error);
      
    //  return new Observable<HttpEvent<any>>();

    //}));
    
    return returnResult;
    

  }


}

