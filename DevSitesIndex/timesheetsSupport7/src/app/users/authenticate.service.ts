
// 10/07/2019 10:20 am - SSN - [20191007-1020] - [001] - Adding Angular 7 - Collecting data with Angular forms and validations - Authenticate user

import { Injectable } from '@angular/core';
import { IUser } from './iuser';
import { DataService } from '../shared/data.service';


@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  currentUser: IUser = null;
  counter: number = 0;

  constructor(private dataService: DataService) {

  }

  loginUser(email: string, password: string) {

    return this.dataService.authenticateUser({ email: email, password: password }).toPromise();

  }

  isAuthenticated() {

    this.counter += 1;

    if (!this.currentUser) return false;

    return this.currentUser.isAuthenticated;

  }




}
