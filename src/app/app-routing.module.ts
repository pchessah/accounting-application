import { NgModule } from '@angular/core'
import { Routes, RouterModule, ExtraOptions } from '@angular/router'
import { AuthGuard } from "../app/libs/guards/auth.guard"


import { SignupComponent } from '../app/components/signup/signup.component'
import { LoginComponent } from '../app/components/login/login.component'
import { StoreSetupComponent } from './storeowner/store-setup/store-setup.component'
import { AddAttendantComponent } from './storeowner/add-attendant/add-attendant.component'
import { DashboardComponent } from './storeowner/dashboard/dashboard.component'
import { AddProductComponent } from './storeowner/inventory/add-product/add-product.component'
import { InventoryDashboardComponent } from './storeowner/inventory/inventory-dashboard/inventory-dashboard.component'
import { InventoryManagerComponent } from './storeowner/inventory/inventory-manager/inventory-manager.component'
import { SalesDashboardComponent } from './storeowner/sales/sales-dashboard/sales-dashboard.component'
import { SalesReportComponent } from './storeowner/sales/sales-report/sales-report.component'
import { ExpensesDashboardComponent } from './storeowner/expenses/expenses-dashboard/expenses-dashboard.component'
import { ExpenseReportComponent } from './storeowner/expenses/expense-report/expense-report.component'
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component'
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';


const routes: Routes = [
  { path: 'store-setup', component: StoreSetupComponent, canActivate: [AuthGuard] },
  { path: 'add-attendant', component: AddAttendantComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },

  { path: 'add-product', component: AddProductComponent, canActivate: [AuthGuard] },
  { path: 'inventory-dashboard', component: InventoryDashboardComponent, canActivate: [AuthGuard] },
  { path: 'inventory-manager', component: InventoryManagerComponent, canActivate: [AuthGuard]},
  { path: 'sales-dashboard', component: SalesDashboardComponent, canActivate: [AuthGuard] },
  { path: 'sales-report', component: SalesReportComponent, canActivate: [AuthGuard] },
  { path: 'expenses-dashboard', component: ExpensesDashboardComponent, canActivate: [AuthGuard] },
  { path: "expense-report", component: ExpenseReportComponent, canActivate: [AuthGuard]},

  { path: 'verify-email', component: VerifyEmailComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'sign-up', component: SignupComponent },
  { path: 'log-in', component: LoginComponent },
  { path: '', component: SignupComponent },
]

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
}

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
