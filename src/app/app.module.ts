import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core'
import { FlexLayoutModule } from '@angular/flex-layout'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module'

import { MatCardModule } from '@angular/material/card'
import { MatTableModule } from '@angular/material/table'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatInputModule } from '@angular/material/input'
import { MatDialogModule } from '@angular/material/dialog'
import { MatSnackBarModule } from '@angular/material/snack-bar'

import { environment } from 'src/environments/environment'
import { AngularFireModule } from '@angular/fire'
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { AngularFireAuthModule } from "@angular/fire/auth";

import { AppComponent } from './app.component'
import { SignupComponent } from './components/signup/signup.component'
import { LoginComponent } from './components/login/login.component'
import { DashboardComponent } from './storeowner/dashboard/dashboard.component'
import { StoreSetupComponent } from './storeowner/store-setup/store-setup.component'
import { AddAttendantComponent } from './storeowner/add-attendant/add-attendant.component'
import { AddProductComponent } from './storeowner/inventory/add-product/add-product.component'
import { InventoryDashboardComponent } from './storeowner/inventory/inventory-dashboard/inventory-dashboard.component'
import { InventoryManagerComponent } from './storeowner/inventory/inventory-manager/inventory-manager.component'
import { EditStockComponent } from './storeowner/inventory/edit-stock/edit-stock.component'
import { SalesDashboardComponent } from './storeowner/sales/sales-dashboard/sales-dashboard.component'
import { AddSaleComponent } from './storeowner/sales/add-sale/add-sale.component'
import { ViewSalesReportComponent } from './storeowner/sales/view-sales-report/view-sales-report.component'
import { SalesReportComponent } from './storeowner/sales/sales-report/sales-report.component'
import { ExpensesDashboardComponent } from './storeowner/expenses/expenses-dashboard/expenses-dashboard.component'
import { AddExpenseComponent } from './storeowner/expenses/add-expense/add-expense.component'
import { ExpenseReportComponent } from './storeowner/expenses/expense-report/expense-report.component'
import { CashFlowManagerComponent } from './storeowner/cash-flow/cash-flow-manager/cash-flow-manager.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component'

const MATMODULES = [
  MatDialogModule,
  MatCardModule,
  MatTableModule,
  MatFormFieldModule,
  MatPaginatorModule,
  MatInputModule,
  MatSnackBarModule,
]

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    DashboardComponent,
    StoreSetupComponent,
    AddAttendantComponent,
    AddProductComponent,
    InventoryDashboardComponent,
    InventoryManagerComponent,
    EditStockComponent,
    SalesDashboardComponent,
    AddSaleComponent,
    ViewSalesReportComponent,
    SalesReportComponent,
    ExpensesDashboardComponent,
    AddExpenseComponent,
    ExpenseReportComponent,
    CashFlowManagerComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    ...MATMODULES,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
