import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { userAuthService } from 'src/app/libs/services/userAuth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor( private userAuthService: userAuthService, private fb: FormBuilder) { }

  signUpForm = this.fb.group({
    firstName:[""],
    secondName:[""],
    email:[""],
    password:[""]
  })


  ngOnInit(): void {
  }

  signUp(){
    let email = this.signUpForm.value.email
    let password = this.signUpForm.value.password

  }

}
