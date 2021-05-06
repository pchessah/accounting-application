import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"

@Component({
  selector: 'app-store-setup',
  templateUrl: './store-setup.component.html',
  styleUrls: ['./store-setup.component.scss']
})
export class StoreSetupComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  save(): void{
    this.router.navigateByUrl("/add-attendant")
  }

}
