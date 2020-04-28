import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { Account } from '../account';

@Component({
  selector: 'app-accounts-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  accounts: Account[] = [];

  constructor(public accountsService: AccountsService) { }

  ngOnInit() {

    this.accountsService.getAll().subscribe((data: Account[])=>{
      console.log(data);
      this.accounts = data;
    })  
  }

}