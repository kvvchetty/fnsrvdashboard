import { Component, OnInit } from '@angular/core';
import { PayeesService } from '../payees.service';
import { Payee } from '../payee';

@Component({
  selector: 'app-payees-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  payees: Payee[] = [];

  constructor(public payeesService: PayeesService) { }

  ngOnInit() {

    this.payeesService.getAll().subscribe((data: Payee[])=>{
      console.log(data);
      this.payees = data;
    })  
  }

}