import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from 'src/app/users/authenticate.service';
import { DataService } from 'src/app/shared/data.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  forgeryToken: any;


  // 10/08/2019 10:39 pm - SSN - [20191008-1232] - [017] - X-XSRF-TOKEN
  // https://angular.io/guide/security#xss

  constructor(private authenticateService: AuthenticateService, private dataService: DataService, private sanitizer: DomSanitizer) { }

  ngOnInit() {

    // 10/08/2019 06:41 pm - SSN - [20191008-1232] - [010] - X-XSRF-TOKEN
    this.authenticateService.isLoggedIn().then(this.isLoggedInSuccess.bind(this), this.isLoggedInError.bind(this));

    this.dataService.getForgeryToken().then(this.forgeryTokenSuccess.bind(this), this.forgeryTokenError.bind(this));

  }


  forgeryTokenSuccess(response) {

    this.forgeryToken = this.sanitizer.bypassSecurityTrustHtml(response);

  }


  forgeryTokenError(response) {

    console.log('header.component.ts - forgeryTokenError - 20191009-0014');
    console.log(response);

    this.forgeryToken = "";

  }


  isLoggedInSuccess(response) {

    this.authenticateService.currentUser = response;

  }


  isLoggedInError(response) {
    console.log('header.component.ts isLoggedInError');
    console.log(response);
  }



  getGreetingMessage() {


    if (this.authenticateService) {
      if (this.authenticateService.isAuthenticated()) {
        return "Hello " + this.authenticateService.currentUser.firstName;
      }
      else {
        return "Not Authenticated"
      }
    }

    return "";
  }

}