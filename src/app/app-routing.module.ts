import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { SignupComponent } from '../app/components/signup/signup.component'
import { LoginComponent } from '../app/components/login/login.component'

const routes: Routes = [
  { path: 'sign-up', component: SignupComponent },
  { path: 'log-in', component: LoginComponent },
  { path: '', component: SignupComponent },
 
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
