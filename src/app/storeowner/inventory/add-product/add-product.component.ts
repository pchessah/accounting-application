import { Component, Inject, OnInit } from '@angular/core'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { FormBuilder } from '@angular/forms';
import { IproductData } from '../../../libs/interfaces/IproductData'
import { ProductService } from '../../../libs/services/product.service'

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  product: IproductData = {
    stock_name: "",
    quantity: "",
    buying_price: "",
    selling_price: "",    
  }

  productsForm = this.fb.group({
    stock_name: [''],
    quantity: [""],
    buying_price: [""],
    selling_price: [""],
  })

  constructor(
    public dialogRef: MatDialogRef<AddProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IproductData,
    private productService: ProductService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close()
  }

  save() {
    this.product = this.productsForm.value;
    this.productService.addProduct(this.product)
    this.dialogRef.close()
  }

  cancel() {
    this.dialogRef.close()
  }
}
