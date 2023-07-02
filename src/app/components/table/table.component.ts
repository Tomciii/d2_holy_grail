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

  allItems: Item[] = [];
  selectedItems: Item[] = [];
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

  async updateTable(): Promise<void> {
    this.itemDataSource = new MatTableDataSource<Item>(this.selectedItems);
    this.itemsFound = this.dataService.getItemsFoundCount(this.selectedItems);
    this.itemsTotalCount = this.selectedItems.length;
    this.updateFoundStatus();
    this.saveItems();
  }


  updateFoundStatus(): void {
    this.selectedItems.forEach((selectedItem) => {
      const itemToUpdate = this.allItems.find((item) => item.name === selectedItem.name);
      if (itemToUpdate) {
        itemToUpdate.found = selectedItem.found;
      }
    });
  }

  async refreshTable(): Promise<void> {
    this.allItems = await this.dataService.getAllItems();
    this.selectedItems = await this.dataService.getItemsFoundByItemType(this.itemType);
    this.updateTable();
  }

  async saveItems(): Promise<void> {
    this.dataService.save(this.allItems);
  }
}
