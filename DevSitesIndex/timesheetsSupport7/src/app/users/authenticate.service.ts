
// 10/07/2019 10:20 am - SSN - [20191007-1020] - [001] - Adding Angular 7 - Collecting data with Angular forms and validations - Authenticate user

import { Injectable } from '@angular/core';
import { IUser } from './iuser';
import { DataService } from '../shared/data.service';

import * as ehu from '../util/ErrorHandlingHelpers';
import { promise } from 'protractor';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  currentUser: IUser = null;
  counter: number = 0;

  constructor(private dataService: DataService) {

  }


  loginUser(forgeryToken: string, email: string, password: string) {

    return this.dataService.authenticateUser({ forgeryToken: forgeryToken, email: email, password: password }).toPromise();

  }


  isAuthenticated() {

    this.counter += 1;

    if (!this.currentUser) return false;

    return this.currentUser.isAuthenticated;

  }


  // 10/08/2019 06:44 pm - SSN - [20191008-1232] - [011] - X-XSRF-TOKEN

  // 11/03/2019 05:44 am - SSN - [20191101-0526] - [015] - Check login status
  // Moved processing from header.component

  isLoggedIn_subscribe(): void {

    this.dataService.isLoggedIn().subscribe(data => {

      if (this.isAuthenticated()) {
        return;
      }

      this.currentUser = data as IUser;

    }
      ,

      (e) => {
        console.log("20191103-0542 - authenticate.service - subscribe exception - isLoggedIn ");
        console.log(e);

        ehu.ErrorHandlingHelpers.showHtmlErrorResponse(e);
      }
    );

  }


  isLoggedIn_promise(): Promise<object> {

    if (this.isAuthenticated()) {
      return new Promise((resolve,reject) => { resolve()});
    }

    return this.dataService.isLoggedIn().toPromise().then(this.isLoggedInSuccess.bind(this), this.isLoggedInError.bind(this));
  }


  isLoggedInSuccess(response) {

    this.currentUser = response;

  }


  isLoggedInError(response) {
    console.log('EEEEEEEEEEEEEEEEEE authenticate.service.ts isLoggedInError');
    console.log(response);
    ehu.ErrorHandlingHelpers.showHtmlErrorResponse(response);
  }



  // 10/08/2019 02:09 pm - SSN - [20191008-1232] - [006] - X-XSRF-TOKEN

  logoutUser(token) {

    return this.dataService.logoutUser(token).toPromise();

  }




}
