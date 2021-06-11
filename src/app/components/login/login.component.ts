import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userAuthService } from 'src/app/libs/services/userAuth.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private userAuthService: userAuthService, private fb: FormBuilder) { }

  logInForm = this.fb.group({
    email:[""],
    password:[""]
  })

  ngOnInit(): void {
  }

  logIn(): void{
    let email = this.logInForm.value.email
    let password = this.logInForm.value.password
    this.userAuthService.SignIn(email, password)
  }

}
