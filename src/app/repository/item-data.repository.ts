import {Injectable} from '@angular/core';
import {Item} from '../model/item.model';
import {ItemDataDatabase} from "../database/item-data.database";

@Injectable({
  providedIn: 'root'
})
export class ItemRepository {

  itemDataBase: ItemDataDatabase = new ItemDataDatabase();
  private data: Item[] = this.itemDataBase.getAllItems();

  getAllItems(): Item[] {
    return this.data;
  }

  getItemsByType(itemType: string): Item[] {
    return this.data.filter(item => item.itemType === itemType);
  }
}
