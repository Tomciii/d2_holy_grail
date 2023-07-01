import { Injectable } from '@angular/core';
import { Item } from '../model/item.model';
import { ItemDataDatabase } from "../database/item-data.database";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ItemRepository {
  private itemDataBase: ItemDataDatabase;
  private data: Item[] | undefined;

  constructor(private http: HttpClient) {
    this.itemDataBase = new ItemDataDatabase(http);
    this.initializeData();
  }

  private async initializeData(): Promise<void> {
    await this.itemDataBase.fetchData();
    this.data = this.itemDataBase.getAllItemsFromLocalStorage();

    if (!this.data || this.data.length === 0) {
      // Data not found in local storage, fetch from API
      this.data = await this.itemDataBase.getData();
      this.itemDataBase.saveItemsToLocalStorage(this.data);
    }

    console.log("Test", this.data);
  }

  getAllItems(): Item[] {
    return this.data ?? [];
  }

  getItemsByType(itemType: string): Item[] {
    const allData: Item[] = this.data ?? [];
    return allData.filter(item => item.itemType === itemType);
  }
}
