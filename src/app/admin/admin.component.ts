import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  tiles = [
    {text: 'Investments', cols: 2, rows: 1, color: '#142A5C'},
    {text: 'Spending/Borrowing', cols: 1, rows: 1, color: '#B7A0E8'},
    {text: 'Govt Policies', cols: 1, rows: 2, color: '#FF0000'},
    {text: 'Market Place', cols: 3, rows: 1, color: '#D9EDD9'},
  ];

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

}