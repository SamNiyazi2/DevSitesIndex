import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticateService } from '../authenticate.service';
import { Router } from '@angular/router';
//import * as $ from 'jquery';

import * as customValidatorsX from '../../util/customValidators';
import { ToastrService } from 'src/app/shared/toastr.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;


  constructor(private authenticateService: AuthenticateService, private router: Router, private toastr:ToastrService) { }


  ngOnInit() {


    // 10/07/2019 07:20 pm - SSN - [20191007-1857] - [001] - M07-06 - Reactive forms


    let first = "notset";
    let last = "NotSet";

    if (this.authenticateService) {
      if (this.authenticateService.currentUser) {
        first = this.authenticateService.currentUser.firstName;
        last = this.authenticateService.currentUser.lastName;
      }
    }

    // 10/08/2019 12:03 pm - SSN - [20191008-1202] - [001] - M07-07 - Validating Reactive forms
    // Validators.required
    this.firstName = new FormControl(first, [Validators.required, Validators.pattern('[a-zA-Z].*'), Validators.maxLength(10)]);
    this.lastName = new FormControl(last, [Validators.required, customValidatorsX.customValidator, customValidatorsX.customValidator_v02(['aaa', 'bbb'])]);

    this.profileForm = new FormGroup({ firstName: this.firstName, lastName: this.lastName });
     
  }

 


  // 10/07/2019 07:57 pm - SSN - [20191007-1857] - [003] - M07-06 - Reactive forms

  cancel() {

    this.router.navigate(['/timesheet']);
  }


  saveProfile(formValue) {

    console.log(formValue);
    if (this.profileForm.valid) {

      this.authenticateService.currentUser.firstName = formValue.firstName;
      this.authenticateService.currentUser.lastName = formValue.lastName;
      this.router.navigate(['/timesheet']);
      this.toastr.info("Saved record.");
    }

  }


  validFirstName() {

    // profileForm.controls.firstName.invalid && profileForm.controls.firstName.touched;
    return this.firstName.valid || this.firstName.untouched;

  }


  validLastName() {

    return this.lastName.valid || this.lastName.untouched;

  }
   

}



