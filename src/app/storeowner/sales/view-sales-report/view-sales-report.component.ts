import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { IproductData } from 'src/app/libs/interfaces/IproductData';

@Component({
  selector: 'app-view-sales-report',
  templateUrl: './view-sales-report.component.html',
  styleUrls: ['./view-sales-report.component.scss']
})
export class ViewSalesReportComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ViewSalesReportComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IproductData,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close()
  }

  save() {
    this.router.navigateByUrl("/sales-report")
    this.dialogRef.close()
  }

  cancel(){
    this.dialogRef.close()
  }

}
