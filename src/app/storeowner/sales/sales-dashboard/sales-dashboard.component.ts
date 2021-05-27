import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { IproductData } from "../../../libs/interfaces/IproductData"
import { ViewSalesReportComponent } from '../view-sales-report/view-sales-report.component';

@Component({
  selector: 'app-sales-dashboard',
  templateUrl: './sales-dashboard.component.html',
  styleUrls: ['./sales-dashboard.component.scss']
})
export class SalesDashboardComponent implements OnInit {

  singleProduct: IproductData = {
    stock_name: '',
    quantity: '',
    buying_price: '',
    selling_price: '',
  }

  displayedColumns: string[] = [
    'stock_name',
    'quantity',
    'selling_price',
    'add_item'
  ]
  productData: IproductData[] = [
    {
      stock_name: 'Guiness 500ml',
      quantity: '20',
      buying_price: '150',
      selling_price: '220',
    },
    {
      stock_name: 'Tusker 500ml',
      quantity: '10',
      buying_price: '150',
      selling_price: '200',
    },
  ]
  dataSource: MatTableDataSource<IproductData>

  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort

  constructor(public dialog: MatDialog, public router: Router) {
    this.dataSource = new MatTableDataSource(this.productData)
    
  }
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.productData)
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator
    this.dataSource.sort = this.sort
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value
    this.dataSource.filter = filterValue.trim().toLowerCase()

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage()
    }
  }

  goToMainDashboard(){
    this.router.navigateByUrl("/dashboard")
  }

  viewSalesReport(){
    const dialogRef = this.dialog.open(ViewSalesReportComponent, {
      width: '400px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.singleProduct = result;
    });

  }

}
