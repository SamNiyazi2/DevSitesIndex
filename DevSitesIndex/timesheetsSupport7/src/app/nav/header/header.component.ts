import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from 'src/app/users/authenticate.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authenticateService: AuthenticateService) { }

  ngOnInit() {
  }

  getGreetingMessage() {


    if (this.authenticateService) {
      if (this.authenticateService.isAuthenticated()) {
        return "Hello " + this.authenticateService.currentUser.firstName;
      }
      else {
        return "Not Authenticated"
      }
    }

    return "No greeting message!";
  }

}
