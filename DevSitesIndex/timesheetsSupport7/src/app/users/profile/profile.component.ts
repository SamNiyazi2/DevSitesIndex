import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthenticateService } from '../authenticate.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;

  constructor(private authenticateService: AuthenticateService, private router:Router) { }


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

    let firstName = new FormControl(first);
    let lastName = new FormControl(last);

    this.profileForm = new FormGroup({ firstName: firstName, lastName: lastName });

  }


  // 10/07/2019 07:57 pm - SSN - [20191007-1857] - [003] - M07-06 - Reactive forms

  cancel() {

    this.router.navigate(['/timesheet']);
  }


  saveProfile(formValue) {

    console.log(formValue);
    this.authenticateService.currentUser.firstName = formValue.firstName;
    this.authenticateService.currentUser.lastName = formValue.lastName;
    this.router.navigate(['/timesheet']);


  }


}
