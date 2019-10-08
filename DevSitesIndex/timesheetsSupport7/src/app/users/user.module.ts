
// 10/06/2019 08:58 pm - SSN - [20191006-2058] - [001] - Adding Angular 7 - Lazily loading feature modules

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { userRoutes } from './user.routes';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
 

@NgModule(
  {
    imports: [

      CommonModule,

      // 10/07/2019 09:57 am - SSN - [20191007-0947] - [003] - Adding Angular 7 - Collecting data with Angular forms and validations - Login form

      FormsModule,

      // 10/07/2019 07:28 pm - SSN - [20191007-1857] - [002] - M07-06 - Reactive forms
      ReactiveFormsModule,

      RouterModule.forChild(userRoutes),

    ]

    ,

    declarations: [

      ProfileComponent,
      LoginComponent
    ]

    ,

    providers: []


  }
)
export class UserModule { }





