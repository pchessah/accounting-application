import { Injectable } from '@angular/core';
import {
  MatSnackBar,
 
} from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class FeedbackMsgService {
 
  constructor( private _snackBar: MatSnackBar ) { }

  feedBackMsg( message: string) {
    this._snackBar.open( `${message}` , 'close', {
     
    });
  }
}
