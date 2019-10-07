
// 10/06/2019 08:58 pm - SSN - [20191006-2058] - [001] - Adding Angular 7 - Lazily loading feature modules

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {  userRoutes  } from './user.routes';
import { ProfileComponent } from './profile/profile.component';


console.log("user.module.ts - 20191006-2121");

@NgModule(
  {
    imports: [
      CommonModule,
      RouterModule.forChild(userRoutes)

    ]

    ,
    declarations: [

      ProfileComponent
    ]

    ,
    providers: []


  }
)
export class UserModule { }





