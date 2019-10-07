import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from 'src/app/users/authenticate.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  greetingMessage: string;

  constructor(private authenticateService: AuthenticateService) { }

  ngOnInit() {

    console.log('header.component - ngOnInit - 20191007-1418');

    console.log(this.authenticateService);


    if (this.authenticateService) {
      if (this.authenticateService.isAuthenticated()) {
        this.greetingMessage = "Hello [" + this.authenticateService.currentUser.email + "]";
      }
      else {
        this.greetingMessage = "Not Authenticated"
      }
    }
  }

}
