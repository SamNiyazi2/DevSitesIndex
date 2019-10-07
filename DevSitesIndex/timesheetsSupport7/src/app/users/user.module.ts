
// 10/06/2019 08:58 pm - SSN - [20191006-2058] - [001] - Adding Angular 7 - Lazily loading feature modules

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { userRoutes } from './user.routes';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component'; 


console.log("user.module.ts - 20191006-2121");

@NgModule(
  {
    imports: [

      CommonModule,

      // 10/07/2019 09:57 am - SSN - [20191007-0947] - [003] - Adding Angular 7 - Collecting data with Angular forms and validations - Login form

      FormsModule ,
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





