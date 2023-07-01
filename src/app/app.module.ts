import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NagivationBarComponent } from './components/nagivation-bar/nagivation-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { TableComponent } from './components/table/table.component';
import { DropdownMenuComponent } from './components/dropdown-menu/dropdown-menu.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { ItemTableComponent } from './components/item-table/item-table.component';
import {MatCheckboxModule } from '@angular/material/checkbox';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NagivationBarComponent,
    TableComponent,
    DropdownMenuComponent,
    ItemTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatMenuModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
