
// 10/06/2019 09:05 pm - SSN - [20191006-2058] - [002] - Adding Angular 7 - Lazily loading feature modules

import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';

console.log('usre.routes.ts - 201910062124');



export const userRoutes = [

  { path: 'profile', component: ProfileComponent },

  // 10/07/2019 09:52 am - SSN - [20191007-0947] - [002] - Adding Angular 7 - Collecting data with Angular forms and validations - Login form

  { path: 'login', component: LoginComponent }

];
