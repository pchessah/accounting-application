import { Component, OnInit } from '@angular/core';
import { userAuthService } from 'src/app/libs/services/userAuth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor( private userAuthService: userAuthService ) { 
    this.getCurrentUser()
  }
  currentUser: any
  stores: any[] = []
  storeName: string =""
  

  ngOnInit(): void {
    this.getCurrentUser()
    this.getStoreName()
  }

  //GET USER LOGGED IN CURRENTLY
  getCurrentUser(){
    this.userAuthService.getCurrentUser().then((user)=>{
      this.currentUser = user
    })
  }

  //GET STORE NAME
  getStoreName():void{
    this.userAuthService.getAllUsers().subscribe((data) => {
      this.stores = data.map(e =>{
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as {}
        } 
      })

      this.storeName = this.stores.filter((store) => {
        store.uid == this.currentUser.uid
      }).join("")      
    })
    debugger
  }

}
