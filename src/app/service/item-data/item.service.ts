import { Injectable } from '@angular/core';
import { Item } from '../../model/item.model';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private apiUrl = 'http://localhost:8080/public/api/getItemData';
  private fullItemData: Item[] = [];

  constructor(private http: HttpClient) {

  }

  async getAllItems(): Promise<Item[]> {
    try {
      const response = await this.http.get<Item[]>(this.apiUrl).toPromise();
      this.fullItemData = response ? response : [];
      return response ? response : [];
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  }

  save(items: Item[]): void {
    const json = JSON.stringify(items);
    const url = 'http://localhost:8080/public/api/saveItemData';
    this.saveItemData(json, url)
      .then((response) => console.log('Items saved successfully' + response))
      .catch(error => console.error('Error saving items:', error));
  }

  saveItemData(jsonData: string, url: string): Promise<any> {
    return this.http.post(url, jsonData).toPromise();
  }

  getItemsFoundCount(items: Item[]): number {
    return items.filter(item => item.found).length;
  }

  async getItemsFoundByItemType(itemType: string): Promise<Item[]> {
    try {
      const response = await this.http.get<Item[]>(this.apiUrl).toPromise();
      const items = response ? response : [];
      this.fullItemData = items;

      if (itemType === "/" || itemType === "")
        return items;

      return items.filter(item => item.itemType === itemType);
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  }
}
