
// 11/03/2019 11:49 am - SSN - [20191101-0526] - [021] - Check login status

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { BroadcasterUtilService } from 'src/app/broadcaster-util.service';
import { AuthenticateService } from 'src/app/users/authenticate.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedGuard implements CanActivate {

  constructor(private authenticateService: AuthenticateService, private broadcasterUtil: BroadcasterUtilService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
     

    return this.authenticateService.isLoggedIn_promise().then(data => {
      
      if (this.authenticateService.isAuthenticated()) return true;
       
      this.broadcasterUtil.broadcast('doLogin', { controlId: 'appLoginPopup', message: 'Sent from AuthenticatedGuard - 20191103-1201', returnUrl: state.url });

      return false;

    });


  }


}
