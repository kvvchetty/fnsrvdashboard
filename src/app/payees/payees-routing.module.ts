import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  { path: 'payees', redirectTo: 'payees/home', pathMatch: 'full'},
  { path: 'payees/home', component: HomeComponent },
  { path: 'payees/details/:productId', component: DetailsComponent },
  { path: 'payees/create', component: CreateComponent },
  { path: 'payees/update/:productId', component: UpdateComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayeesRoutingModule { }



