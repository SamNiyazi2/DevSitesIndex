
// 11/04/2019 06:51 am - SSN - [20191104-0607] - [004] - Registration - Client 

import { Component, OnInit, Output, EventEmitter, } from '@angular/core';
import { Router } from '@angular/router';
import { GenUtilService } from 'src/app/shared/gen-util.service';
import { PopupComponentSupport } from 'src/app/interfaces/PopupComponentSupport';






@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent extends PopupComponentSupport implements OnInit {

  mouseoverRegister: boolean;
  feedbackMessage: string;
  email: string;
  password: string;
  confirmPassword: string;


  constructor(private route: Router, private genUtil: GenUtilService) {
    super();
  }


  ngOnInit() {

    this.genUtil.doSetfocus_withTimeout(".autofocus");

  }


  register(formValue) {

    console.log('regiser.component - 20191104-0654 - register');

    console.log(formValue);


  }


  cancel() {
    this.route.navigate(['/']);
  }

}


