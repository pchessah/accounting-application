import { Component, OnInit } from '@angular/core';
import { userAuthService } from 'src/app/libs/services/userAuth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
 

  constructor(  public userAuthService: userAuthService) { }

  ngOnInit(): void {
  }

}
