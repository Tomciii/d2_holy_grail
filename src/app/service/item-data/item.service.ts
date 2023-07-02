import { Injectable } from '@angular/core';
import { Item } from '../../model/item.model';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private backend = 'http://localhost:8080/public/api/'
  private apiGETUrl = this.backend + 'getItemData';
  private apiPOSTUrl = this.backend + 'saveItemData';

  private fullItemData: Item[] = [];

  constructor(private http: HttpClient) {}

  async getAllItems(): Promise<Item[]> {
    try {
      const response = await this.http.get<Item[]>(this.apiGETUrl).toPromise();
      this.fullItemData = response ? response : [];
      return response ? response : [];
    } catch (error) {
      return [];
    }
  }

  save(items: Item[]): void {
    const json = JSON.stringify(items);

    this.saveItemData(json, this.apiPOSTUrl)
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
      console.log("Test" + itemType)
      const response = await this.http.get<Item[]>(this.apiGETUrl).toPromise();
      const items = response ? response : [];

      this.fullItemData = items;
      if (itemType === "/" || itemType === "") {
        return items;

      }

      if (itemType.includes(" ")){
        return items.filter(item => item.variety === itemType)
      }

      return items.filter(item => item.itemType === itemType);
    } catch (error) {
      return [];
    }
  }
}
