import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core'
import { FlexLayoutModule } from '@angular/flex-layout'

import { AppRoutingModule } from './app-routing.module'

import { MatCardModule } from '@angular/material/card'
import { MatTableModule } from '@angular/material/table'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatInputModule } from '@angular/material/input'
import { MatDialogModule } from '@angular/material/dialog'

import { AppComponent } from './app.component'
import { SignupComponent } from './components/signup/signup.component'
import { LoginComponent } from './components/login/login.component'
import { DashboardComponent } from './storeowner/dashboard/dashboard.component'
import { StoreSetupComponent } from './storeowner/store-setup/store-setup.component'
import { AddAttendantComponent } from './storeowner/add-attendant/add-attendant.component'
import { AddProductComponent } from './storeowner/inventory/add-product/add-product.component'
import { InventoryDashboardComponent } from './storeowner/inventory/inventory-dashboard/inventory-dashboard.component';
import { InventoryManagerComponent } from './storeowner/inventory/inventory-manager/inventory-manager.component';
import { EditStockComponent } from './storeowner/inventory/edit-stock/edit-stock.component';
import { SalesDashboardComponent } from './storeowner/sales/sales-dashboard/sales-dashboard.component';
import { AddSaleComponent } from './storeowner/sales/add-sale/add-sale.component';
import { ViewSalesReportComponent } from './storeowner/sales/view-sales-report/view-sales-report.component';
import { SalesReportComponent } from './storeowner/sales/sales-report/sales-report.component';
import { ExpensesDashboardComponent } from './storeowner/expenses/expenses-dashboard/expenses-dashboard.component'

const MATMODULES = [
  MatDialogModule,
  MatCardModule,
  MatTableModule,
  MatFormFieldModule,
  MatPaginatorModule,
  MatInputModule,
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
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    ...MATMODULES,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
