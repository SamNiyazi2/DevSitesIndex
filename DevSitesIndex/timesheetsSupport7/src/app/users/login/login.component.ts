
// 10/07/2019 09:47 am - SSN - [20191007-0947] - [001] - Adding Angular 7 - Collecting data with Angular forms and validations - Login form

import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../authenticate.service';
import { IUser } from '../iuser';
import { Router } from '@angular/router';
import { BroadcasterUtilService } from 'src/app/broadcaster-util.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


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
    this.route.navigate(['/timesheet']);
  }


  loginUserSuccess(response) {

    this.authenticateService.currentUser = response;

    console.log(this.authenticateService.currentUser);

    if (this.authenticateService.currentUser.isAuthenticated) {

      this.route.navigate(['/timesheet']);

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

  }

}
