
// 10/06/2019 09:05 pm - SSN - [20191006-2058] - [002] - Adding Angular 7 - Lazily loading feature modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';


// 10/28/2019 05:02 am - SSN - [20191028-0456] - [002] - Timesheet dashboard
// ng build --aot=true - child route fix

//export const userRoutes = [
const userRoutes = [

  { path: 'profile', component: ProfileComponent },

  // 10/07/2019 09:52 am - SSN - [20191007-0947] - [002] - Adding Angular 7 - Collecting data with Angular forms and validations - Login form

  { path: 'login', component: LoginComponent },


  // 11/04/2019 06:09 am - SSN - [20191104-0607] - [002] - Registration - Client
  // 11/04/2019 04:57 pm - SSN - [20191104-0607] - [006] - Registration - Client -- canDeactivateCreateTimelog

  { path: 'register', component: RegisterComponent, canDeactivate: ['canDeactivateCreateTimelog']},


  // 10/08/2019 02:01 pm - SSN - [20191008-1232] - [004] - X-XSRF-TOKEN

  { path: 'logout', component: LogoutComponent },

];
// 10/28/2019 05:04 am - SSN - [20191028-0456] - [003] - Timesheet dashboard
// ng build --aot=true - child route fix
@NgModule({
  imports: [
    RouterModule.forChild(userRoutes)
  ],
  exports: [RouterModule]
})
export class UserRoutesModule { }
