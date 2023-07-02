import { Injectable } from '@angular/core';
import { Item } from '../model/item.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ItemRepository {
  constructor(private http: HttpClient) {}

  data: Item[] = [];

  async getAllItems(): Promise<Item[]> {
    try {
      const response = await this.http.get<Item[]>('assets/item-data.json').toPromise();
      return response ? response : [];
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  }

  getItemsByType(itemType: string): Item[] {
    const allData: Item[] = this.data ?? [];
    return allData.filter(item => item.itemType === itemType);
  }
}
