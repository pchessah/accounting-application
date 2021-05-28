import { Component, OnInit, ViewChild } from '@angular/core';
import { IexpenseData } from 'src/app/libs/interfaces/IexpenseData';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AddExpenseComponent } from '../add-expense/add-expense.component';

@Component({
  selector: 'app-expenses-dashboard',
  templateUrl: './expenses-dashboard.component.html',
  styleUrls: ['./expenses-dashboard.component.scss']
})
export class ExpensesDashboardComponent implements OnInit {

  displayedColumns: string[] = [
    "expense_name",
    "expense_cost",
    "expense_date",
    "edit_expense"
  ]

  expenseData: IexpenseData[] = [
    {
      expense_name: "Transport",
      cost: "200",
      expense_date: "20/5/2021"
    },
    {
      expense_name: "Lunch",
      cost: "100",
      expense_date: "21/5/2021"
    }
  ]

  dataSource: MatTableDataSource<IexpenseData>

  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort
  singleExpense: any;

  constructor(public dialog: MatDialog, public router: Router)  {
    this.dataSource = new MatTableDataSource(this.expenseData)
   }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.expenseData)
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

  viewExpensesReport(){
    this.router.navigateByUrl("/expense-report")

  }

  addExpense(): void {
    const dialogRef = this.dialog.open(AddExpenseComponent, {
      width: '400px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.singleExpense = result;
    });
  }

}
