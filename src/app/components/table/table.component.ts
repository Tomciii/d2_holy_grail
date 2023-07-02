import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ItemService } from '../../service/item-data/item.service';
import {Item} from "../../model/item.model";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnChanges {
  @Input() itemType!: string;

  items: Item[] = [];
  displayedColumns: string[] = ['image', 'item', 'stats', 'found'];
  itemDataSource!: MatTableDataSource<any>;
  itemsFound!: number;
  itemsTotalCount!: number;

  constructor(private dataService: ItemService) { }

  ngOnInit() {
    this.refreshTable();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.refreshTable();
  }

  async refreshPage() : Promise<void>{
    this.itemDataSource = new MatTableDataSource<Item>(this.items);
    this.itemsFound = this.dataService.getItemsFoundCount(this.items);
    this.itemsTotalCount = this.items.length;
    this.saveItems();
  }

  async refreshTable(): Promise<void> {
    const items = await this.dataService.getItemsFoundByItemType(this.itemType);
    this.items = items;
    this.refreshPage();
  }

  saveItems(): void {
    this.dataService.saveItemsToJSONFile(this.items);
  }
}
