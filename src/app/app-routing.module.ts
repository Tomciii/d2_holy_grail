import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ItemTableComponent} from "./components/item-table/item-table.component";


const routes: Routes = [
  { path: '', component: ItemTableComponent }, // Example of a default route
  { path: 'items/:pageName', component: ItemTableComponent } // Route for item types
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
