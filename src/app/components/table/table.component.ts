// table.component.ts
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ItemDataService } from '../../service/item-data.service'; 
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'image', 'name', 'found'];
  dataSource!: MatTableDataSource<any>; 

  constructor(private dataService: ItemDataService) { } 

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.dataService.getData());
  }
}