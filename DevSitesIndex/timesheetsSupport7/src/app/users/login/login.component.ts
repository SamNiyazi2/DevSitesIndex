
// 10/07/2019 09:47 am - SSN - [20191007-0947] - [001] - Adding Angular 7 - Collecting data with Angular forms and validations - Login form

import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../authenticate.service';
import { IUser } from '../iuser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  currentUser: IUser;
  feedbackMessage: string = "";
  constructor(private authenticateService: AuthenticateService, private route: Router) { }

  ngOnInit() {
  }


  // 10/07/2019 10:07 am - SSN - [20191007-0947] - [004] - Adding Angular 7 - Collecting data with Angular forms and validations - Login form
  login(formValues) {

    console.log('login.component.ts - 20191007-1008');

    console.log(formValues);

    this.authenticateService.loginUser(formValues.email, formValues.password).then(this.loginUserSuccess.bind(this), this.loginUserError.bind(this));

  }


  cancel() {
    this.route.navigate(['/timesheet']);
  }


  loginUserSuccess(response) {

    console.log("login.component.ts - success ");

    console.log(response);

    this.authenticateService.currentUser = response;

    console.log(this.authenticateService.currentUser);

    if (this.authenticateService.currentUser.isAuthenticated) {
      this.route.navigate(['/timesheet']);
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
