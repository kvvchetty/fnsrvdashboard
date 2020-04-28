import { Component, OnInit } from '@angular/core';
import { PayeesService } from '../payees.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payees-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {
  constructor(
    public fb: FormBuilder,
    private router: Router,
    public payeesService: PayeesService){ }

  payeeForm: FormGroup;

  ngOnInit() {
      this.payeeForm = this.fb.group({
      name: [''],
      description: [''],
      price: [''],
      quantity: [''],    
    })
  }

  submitForm() {
    this.payeesService.create(this.payeeForm.value).subscribe(res => {
      console.log('Product created!');
      this.router.navigateByUrl('/payees/home/'); 
      }  )
  }

}