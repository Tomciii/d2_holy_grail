import {Item} from "../model/item.model";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ItemDataDatabase {
  constructor(private http: HttpClient) {
    this.getData();
    this.fetchData();
  }

  private data: Item[] = [];

  async getData(): Promise<Item[]> {
    try {
      const response = await this.http.get<Item[]>('assets/item-data.json').toPromise();
      this.data = response ? response : [];
      this.saveItemsToLocalStorage(this.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }

    return this.data
  }

  async fetchData(): Promise<void> {
    await this.getData();

    if (this.data === []){
      this.getData()
    }

    this.data = this.getAllItemsFromLocalStorage();
  }

  getAllItemsFromLocalStorage(): Item[] {
    if (!this.data) {
      const storedItems = localStorage.getItem('items');
      if (storedItems) {
        this.data = JSON.parse(storedItems);
      } else {
        this.saveItemsToLocalStorage(this.data);
      }
    }

    return this.data;
  }

  saveItemsToLocalStorage(items: Item[]): void {
    localStorage.setItem('items', JSON.stringify(items));
  }
}
