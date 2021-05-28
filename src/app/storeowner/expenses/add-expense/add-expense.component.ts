import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { IexpenseData } from 'src/app/libs/interfaces/IexpenseData';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.scss']
})
export class AddExpenseComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddExpenseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IexpenseData,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close()
  }

  save() {
    this.dialogRef.close()
  }

  cancel(){
    this.dialogRef.close()
  }
}
