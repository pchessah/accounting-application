import { Component, OnInit } from '@angular/core';
import { userAuthService } from 'src/app/libs/services/userAuth.service';

@Component({
  selector: 'app-auth-checker',
  templateUrl: './auth-checker.component.html',
  styleUrls: ['./auth-checker.component.scss']
})
export class AuthCheckerComponent implements OnInit {
  
  loggedIn = false
  loggedOut = true

  constructor(private userAuthService: userAuthService) {
    this.loggedInUserChecker()
   }

  ngOnInit(): void {
  }

  loggedInUserChecker(){
    if (localStorage.getItem('user') !== null) {
      this.loggedIn = true
      this.loggedOut = false
  } else {
      this.loggedIn = false
      this.loggedOut = true
  }
    
  }

  logOut(){
    this.userAuthService.SignOut()
    this.loggedIn = false;
    this.loggedOut = true
    this.loggedInUserChecker()
  }

}
