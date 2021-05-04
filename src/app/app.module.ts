import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FlexLayoutModule} from "@angular/flex-layout";

import { AppRoutingModule } from './app-routing.module';

import {MatCardModule} from '@angular/material/card';

import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';

const MATMODULES = [MatCardModule]

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    ...MATMODULES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
