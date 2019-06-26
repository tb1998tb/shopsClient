import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './component/shop/home/home.component';
import { SigninComponent } from './component/shop/signin/signin.component';
import { SignupComponent } from './component/shop/signup/signup.component';
import { ShopsGuard } from './shops.guard';
import { UpdateComponent } from './component/shop/update/update.component';

const myAppRoutes: Routes = [
    {path:'',component:HomeComponent,canActivate:[ShopsGuard]},
    {path:'signin',component:SigninComponent},
    {path:'signup',component:SignupComponent},
    {path:'update',component:UpdateComponent},
    {path:'**',redirectTo:''}

  ];
  
  @NgModule({
    imports: [
      RouterModule.forRoot(myAppRoutes)
    ],
    exports: [RouterModule]
  })
  export class MyRoutingModule { }
  