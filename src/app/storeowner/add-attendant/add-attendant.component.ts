import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"

@Component({
  selector: 'app-add-attendant',
  templateUrl: './add-attendant.component.html',
  styleUrls: ['./add-attendant.component.scss']
})
export class AddAttendantComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  save(): void{
    this.router.navigateByUrl("/dashboard")
  }

  back():void{
    this.router.navigateByUrl("/store-setup")
  }

  skip():void{
    this.router.navigateByUrl("/dashboard")
  }

}
