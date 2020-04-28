import { Component, OnInit } from '@angular/core';
import { PayeesService } from '../payees.service';
import { FormBuilder, FormGroup, ReactiveFormsModule  } from '@angular/forms';
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

  addForm: FormGroup;

  ngOnInit() {
      this.addForm = this.fb.group({
      name: [''],
      description: [''],
      price: [''],
      quantity: [''],    
    })
  }

  submitForm() {
    this.payeesService.create(this.addForm.value).subscribe(res => {
      console.log('Payee created!');
      this.router.navigateByUrl('/payees/home/'); 
      }  )
  }

}