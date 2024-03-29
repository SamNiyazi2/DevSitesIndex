
// 10/06/2019 08:58 pm - SSN - [20191006-2058] - [001] - Adding Angular 7 - Lazily loading feature modules

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// 10/28/2019 05:12 am - SSN - [20191028-0456] - [004] - Timesheet dashboard
// ng build --aot=true - child route fix
// import { userRoutes } from './user.routes';
import { UserRoutesModule } from './user.routes';

import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent, ChildComponent } from './logout/logout.component';


@NgModule(
  {
    imports: [

      CommonModule,

      // 10/07/2019 09:57 am - SSN - [20191007-0947] - [003] - Adding Angular 7 - Collecting data with Angular forms and validations - Login form

      FormsModule,

      // 10/07/2019 07:28 pm - SSN - [20191007-1857] - [002] - M07-06 - Reactive forms
      ReactiveFormsModule,

      // RouterModule.forChild(userRoutes),
      UserRoutesModule,
    ]

    ,

    declarations: [

      ProfileComponent,


      // 11/02/2019 04:51 pm - SSN - [20191101-0526] - [008] - Check login status
      // Moved to main module since we need to call it automatically from intercepter.
      //LoginComponent,

      LogoutComponent,
      ChildComponent 
    ]

    ,

    providers: []


  }
)
export class UserModule { }





