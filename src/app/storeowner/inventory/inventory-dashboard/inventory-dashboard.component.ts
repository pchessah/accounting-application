import { AfterViewInit, Component, ViewChild } from '@angular/core'
import { MatPaginator } from '@angular/material/paginator'
import { MatSort } from '@angular/material/sort'
import { MatTableDataSource } from '@angular/material/table'

export interface IproductData {
  stock_name: string
  quantity: string
  buying_price: string
  selling_price: string
}

@Component({
  selector: 'app-inventory-dashboard',
  templateUrl: './inventory-dashboard.component.html',
  styleUrls: ['./inventory-dashboard.component.scss'],
})
export class InventoryDashboardComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'stock_name',
    'quantity',
    'buying_price',
    'selling_price',
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

  constructor() {
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
}

/** Builds and returns a new User. */
// function createNewUser(id: number): UserData {
//   const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
//       NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

//   return {
//     //id: id.toString(),
//    // name: name,
//     //progress: Math.round(Math.random() * 100).toString(),
//     //color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
//   };
//}
