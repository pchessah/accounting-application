import { AfterViewInit, Component, ViewChild } from '@angular/core'
import { MatPaginator } from '@angular/material/paginator'
import { MatSort } from '@angular/material/sort'
import { MatTableDataSource } from '@angular/material/table'
import {
  MatDialog,
} from '@angular/material/dialog'
import { AddProductComponent } from '../add-product/add-product.component'
import { Router } from '@angular/router'
import { IproductData } from '../../../libs/interfaces/IproductData'
import { ProductService } from 'src/app/libs/services/product.service'

@Component({
  selector: 'app-inventory-dashboard',
  templateUrl: './inventory-dashboard.component.html',
  styleUrls: ['./inventory-dashboard.component.scss'],
})
export class InventoryDashboardComponent implements AfterViewInit {
  allProducts: any
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
  ]
  productData = undefined
  dataSource: MatTableDataSource<IproductData>

  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort

  constructor(
    public dialog: MatDialog,
    public router: Router,
    private productService: ProductService,
  ) {
    this.dataSource = new MatTableDataSource(this.productData)
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddProductComponent, {
      width: '400px',
      data: {},
    })

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed')
      this.singleProduct = result
    })
  }

  openInventoryManager(): void {
    this.router.navigateByUrl('/inventory-manager')
  }

  getAllProducts(): void {
    this.productService.getAllProducts().subscribe((products) => {
      this.allProducts = products.map((e) => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as {}),
        } as {}
      })
      this.dataSource = new MatTableDataSource(this.allProducts)
    })
  }

  ngOnInit(): void {
    this.getAllProducts()
    console.log(this.allProducts)
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

  goToMainDashboard() {
    this.router.navigateByUrl('/dashboard')
  }
}
