import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accounts-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {

  constructor(
    public fb: FormBuilder,
    private router: Router,
    public accountsService: AccountsService){ }

  accountForm: FormGroup;

  ngOnInit() {
      this.accountForm = this.fb.group({
      name: [''],
      description: [''],
      price: [''],
      quantity: [''],    
    })
  }

  submitForm() {
    this.accountsService.create(this.accountForm.value).subscribe(res => {
      console.log('Account created!');
      this.router.navigateByUrl('/accounts/home/'); 
      }  )
  }

}