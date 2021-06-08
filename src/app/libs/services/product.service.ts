import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http'
import { AngularFirestore } from '@angular/fire/firestore';
import { IproductData } from '../interfaces/IproductData';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private firestore: AngularFirestore ) { }

  //CHECK ERRORS WITH HTTP CALLS
  handleError(err: HttpErrorResponse) {
    let errorMessage = ''
    //check if error is on the client side
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occured: ${err.error.message}`
    } else {
      //else error is server side
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`
    }
    console.error(errorMessage)
    return throwError(errorMessage)
  }

  
  //ADD PRODUCT
  addProduct(product: IproductData) {
    return new Promise<any>((resolve, reject) => {
      this.firestore.collection("products")
                    .add(product)
                    .then( res => {}, err => reject(err))
    })
  }

  //GET ALL PRODUCTS
  getAllProducts() {
    return this.firestore
      .collection('products')
      .snapshotChanges()
      .pipe(catchError(this.handleError))
  }
}
