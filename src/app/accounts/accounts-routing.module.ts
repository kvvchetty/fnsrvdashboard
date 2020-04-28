import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  { path: 'accounts', redirectTo: 'accounts/home', pathMatch: 'full'},
  { path: 'accounts/home', component: HomeComponent },
  { path: 'accounts/details/:productId', component: DetailsComponent },
  { path: 'accounts/create', component: CreateComponent },
  { path: 'accounts/update/:productId', component: UpdateComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }



