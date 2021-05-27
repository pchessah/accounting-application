import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { IproductData } from 'src/app/libs/interfaces/IproductData';
import { ViewSalesReportComponent } from '../view-sales-report/view-sales-report.component';

@Component({
  selector: 'app-sales-report',
  templateUrl: './sales-report.component.html',
  styleUrls: ['./sales-report.component.scss']
})
export class SalesReportComponent implements OnInit {

  date: any;

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
  ]
  productData: IproductData[] = [
    {
      stock_name: 'Guiness 500ml',
      quantity: '2',
      buying_price: '150',
      selling_price: '220',
    },
    {
      stock_name: 'Tusker 500ml',
      quantity: '1',
      buying_price: '150',
      selling_price: '200',
    },
  ]
  dataSource: MatTableDataSource<IproductData>

  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort

  constructor(public dialog: MatDialog, public router: Router) {
    this.dataSource = new MatTableDataSource(this.productData)
    this.getCurrentDate()
    
  }
  goToMainDashboard(){
    this.router.navigateByUrl("/dashboard")
  }

  getCurrentDate(){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    this.date = mm + '/' + dd + '/' + yyyy;
  }

  pickDate(){
    const dialogRef = this.dialog.open(ViewSalesReportComponent, {
      width: '400px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.singleProduct = result;
    });

  }

  ngOnInit(): void {
  }

}
