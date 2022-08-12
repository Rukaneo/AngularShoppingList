import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingAddComponent } from './shopping-add/shopping-add.component';
import { ShoppingDisplayComponent } from './shopping-display/shopping-display.component';

const routes: Routes = [
  {path:'Display', component:ShoppingDisplayComponent},
  {path:'Add', component:ShoppingAddComponent},
  {path:'edit/:id', component:ShoppingEditComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
