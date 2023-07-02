import { Injectable } from '@angular/core';
import { Item } from '../../model/item.model';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  constructor(private http: HttpClient) {}

  async getAllItems(item?: string): Promise<Item[]> {
    try {
      const response = await this.http.get<Item[]>('assets/item-data.json').toPromise();
      return response ? response : [];
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  }

  saveItemsToJSONFile(items: Item[]): void {
    const json = JSON.stringify(items);
    const url = 'http://localhost:4200/assets/item-data.json';

    this.http.put(url, json).subscribe(
      () => console.log('Items saved successfully'),
      error => console.error('Error saving items:', error)
    );
  }


  getItemsFoundCount(items: Item[]): number {
    return items.filter(item => item.found).length;
  }


  async getItemsFoundByItemType(itemType: string): Promise<Item[]> {
    try {
      const response = await this.http.get<Item[]>('assets/item-data.json').toPromise();
      const items = response ? response : [];

      if (itemType === "/" || itemType === "")
        return items

      return items.filter(item => item.itemType === itemType);
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  }
}
