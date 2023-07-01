import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ItemDataService } from '../../service/item-data/item-data.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnChanges {
  @Input() itemType!: string;

  displayedColumns: string[] = [ 'item', 'stats', 'found'];
  dataSource!: MatTableDataSource<any>;

  constructor(private dataService: ItemDataService) { }

  ngOnInit() {
    this.refreshTable();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.refreshTable();
  }

  private refreshTable(): void {
    this.dataSource = new MatTableDataSource<any>(this.dataService.getData(this.itemType));
  }
}
