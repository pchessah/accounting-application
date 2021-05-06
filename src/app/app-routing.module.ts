import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { SignupComponent } from '../app/components/signup/signup.component'
import { LoginComponent } from '../app/components/login/login.component'
import { StoreSetupComponent } from './storeowner/store-setup/store-setup.component'
import { AddAttendantComponent } from './storeowner/add-attendant/add-attendant.component'
import { DashboardComponent } from './storeowner/dashboard/dashboard.component'

const routes: Routes = [
 
  { path: 'store-setup', component: StoreSetupComponent },
  { path: 'add-attendant', component: AddAttendantComponent },
  { path: 'dashboard', component: DashboardComponent },

  { path: 'sign-up', component: SignupComponent },
  { path: 'log-in', component: LoginComponent },
  { path: '', component: SignupComponent },
 
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
