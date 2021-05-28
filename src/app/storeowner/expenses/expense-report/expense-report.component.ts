import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expense-report',
  templateUrl: './expense-report.component.html',
  styleUrls: ['./expense-report.component.scss']
})
export class ExpenseReportComponent implements OnInit {

  displayedColumns: string[] = [
    "expense_name",
    "expense_cost",
    "expense_date",
    "edit_expense"
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
