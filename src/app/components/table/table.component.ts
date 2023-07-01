import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ItemDataService } from '../../service/item-data/item-data.service';
import {Item} from "../../model/item.model";
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnChanges {
  @Input() itemType!: string;

  displayedColumns: string[] = [ 'item', 'stats', 'found'];
  itemDataSource!: MatTableDataSource<any>;
  itemsFound!: number;
  itemsTotalCount!: number;

  constructor(private dataService: ItemDataService) { }

  ngOnInit() {
    this.refreshTable();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.refreshTable();
  }

  refreshTable(): void {
    const items = this.dataService.getItems(this.itemType);
    this.itemDataSource = new MatTableDataSource<Item>(items);
    this.itemsFound = this.dataService.getItemsFoundCount(items);
    this.itemsTotalCount = items.length;
  }
}
