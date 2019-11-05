
// 10/07/2019 09:47 am - SSN - [20191007-0947] - [001] - Adding Angular 7 - Collecting data with Angular forms and validations - Login form


import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { AuthenticateService } from '../authenticate.service';
import { IUser } from '../iuser';
import { Router } from '@angular/router';
import { BroadcasterUtilService } from 'src/app/broadcaster-util.service';

import * as ehu from '../../util/ErrorHandlingHelpers';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnChanges {


  // 11/03/2019 07:25 am - SSN - [20191101-0526] - [017] - Check login status
  // To pass returnUrl
  @Input() customObject: any;


  // 11/02/2019 07:12 pm - SSN - [20191101-0526] - [011] - Check login status
  @Output() closePopupCaller = new EventEmitter();

  // 10/28/2019 05:41 am - SSN - [20191028-0456] - [008] - Timesheet dashboard
  // ng build --aot=true - child route fix
  mouseoverLogin: boolean;
  displayProps: boolean;
  email: string;
  password: string;


  currentUser: IUser;
  feedbackMessage: string = "";
  constructor(private authenticateService: AuthenticateService, private route: Router, private broadcasterUtil: BroadcasterUtilService) { }

  ngOnInit() {

    setTimeout(this.doSetfocus, 700);

  }


  // 11/03/2019 07:34 am - SSN - [20191101-0526] - [018] - Check login status
  // To pass in returnUrl
  ngOnChanges(): void {

    //console.log('login.component - 20191103-0726 XXXXXXXXX');
    //console.log(this.customObject);

  }


  // 10/11/2019 08:22 pm - SSN
  doSetfocus() {
    $('[autofocus]').focus();
  }


  // 10/07/2019 10:07 am - SSN - [20191007-0947] - [004] - Adding Angular 7 - Collecting data with Angular forms and validations - Login form
  login(formValues) {

    let forgeryToken: any = $("[name=__RequestVerificationToken]").val();

    this.authenticateService.loginUser(forgeryToken, formValues.email, formValues.password).then(this.loginUserSuccess.bind(this), this.loginUserError.bind(this));

  }


  cancel() {

    // this.route.navigate(['/timesheet']);
    // We need to redirect regardless, in case the current selected page requires login.
    console.log("cancel - login.component - 20191104-0512-B");

    document.location.href = "/";

  }


  // 11/02/2019 07:14 pm - SSN - [20191101-0526] - [012] - Check login status
  closePopupCaller_check(): boolean {

    // If we are calling form a popup, we will not do anything here other than close the popup.  No redirect.

    if (!this.isOpenAsModal()) {
      return false;
    }

    this.closePopupCaller.emit();
    return true;

  }


  isOpenAsModal(): boolean {
    return this.closePopupCaller.observers.length !== 0;

  }


  loginUserSuccess(response) {

    this.authenticateService.currentUser = response;

    if (this.authenticateService.isAuthenticated()) {

      if (!this.closePopupCaller_check()) {

        this.route.navigate(['/timesheet']);

      }
      else {

        if (this.customObject) {
          if (this.customObject.returnUrl) {
            let returnUrl: string = unescape(this.customObject.returnUrl);
            this.route.navigate([returnUrl]);
          }
        }
      }

      // 10/11/2019 06:07 pm - SSN - [20191011-1804] - [002] - Adding broadcastutil

      this.broadcasterUtil.broadcast('login', '*******************  login component');

    }
    else {
      this.feedbackMessage = response.feedbackMessages;
    }
  }


  loginUserError(response) {

    console.log("login.component.ts - error ");
    console.log(response);

    ehu.ErrorHandlingHelpers.showHtmlErrorResponse(response);

  }

  // 11/04/2019 06:30 am - SSN - [20191104-0607] - [003] - Registration - Client 
  register() {
    this.closePopupCaller_check();
    this.route.navigate(['/user/register']);
  }

}
