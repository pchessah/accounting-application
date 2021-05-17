import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core'
import { MatPaginator } from '@angular/material/paginator'
import { MatSort } from '@angular/material/sort'
import { MatTableDataSource } from '@angular/material/table'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddProductComponent } from '../add-product/add-product.component';
import { Router } from '@angular/router';

export interface IproductData {
  stock_name: string
  quantity: string
  buying_price: string
  selling_price: string
}

@Component({
  selector: 'app-inventory-manager',
  templateUrl: './inventory-manager.component.html',
  styleUrls: ['./inventory-manager.component.scss']
})
export class InventoryManagerComponent implements OnInit {
  singleProduct: IproductData = {
    stock_name: '',
    quantity: '',
    buying_price: '',
    selling_price: '',
  }

  displayedColumns: string[] = [
    'stock_name',
    'quantity',
    'buying_price',
    'selling_price',
    'edit_stock'
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

  constructor( public router: Router) {
    this.dataSource = new MatTableDataSource(this.productData)
   }

  ngOnInit(): void {
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

  goToInventoryDashboard(){
    this.router.navigateByUrl("/inventory-dashboard")    
  }

}
