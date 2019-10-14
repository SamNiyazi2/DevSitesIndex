import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AuthenticateService } from '../authenticate.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { BroadcasterUtilService } from 'src/app/broadcaster-util.service';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authenticateService: AuthenticateService, private router: Router, private broadcasterUtil: BroadcasterUtilService) { }

  ngOnInit() {

    // 10/08/2019 02:09 pm - SSN - [20191008-1232] - [005] - X-XSRF-TOKEN
    let token = $("[name=__RequestVerificationToken]").val();
 
    this.authenticateService.logoutUser(token).then(this.logoutUserSuccess.bind(this), this.logoutUserError.bind(this));

  }


  logoutUserSuccess() {
    console.log("logout.component - success - 20191008-1407");


    // 10/11/2019 06:30 pm - SSN - [20191011-1804] - [004] - Adding broadcastutil
    this.broadcasterUtil.broadcast('login', '******************* logout component');


    this.router.navigate(['/timesheet']);
  }


  logoutUserError() {
    console.log("logout.component - error - 20191008-1408");
  }


  // 10/08/2019 03:45 pm - SSN - [20191008-1232] - [009] - X-XSRF-TOKEN

  foods = ['Bacon', 'Lettuce', 'Tomatoes'];

  addTag(control) {
    this.foods.push(control.value);
    control.value = '';
    control.focus();

  }

  removeTag(tag) {

    console.log("************************ removeTag ");
    console.log(tag);


    console.log(tag)

    console.log(this.foods);

    this.foods.splice(this.foods.indexOf(tag), 1);


    console.log(this.foods);
    console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXxxremoveTag ");

  }
}


@Component({
  selector: 'app-child',
  template: `
 
  <span  *ngFor="let item of data">  <span>{{ item }}</span> &nbsp; &nbsp; <span (click)='removeTag_local(\"" +   item + "\")'>X</span> &nbsp;  &nbsp;</span> 

`
})
export class ChildComponent {
  @Input() data: string[];
  @Output() removeTag_call = new EventEmitter();

  removeTag_local(value) {

    console.log('logout.component.ts - childComponent - removeTag_local ');
    console.log(value);

    this.removeTag_call.emit(value);


    console.log('>>>>>>>>>>>>>>>>>>>>>>> logout.component.ts - childComponent - removeTag_local ');
  }
}




