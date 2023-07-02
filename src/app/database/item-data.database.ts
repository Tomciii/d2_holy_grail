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

      } catch (error) {
        console.error('Error fetching data:', error);
      }

    console.log("This sdata" + this.data)
    return this.data
  }

  async fetchData(): Promise<void> {
    console.log("Fetching " + this.data.length)
    if (this.data.length === 0) {
      try {
        const response = await this.getData();
        this.data = response ? response : [];
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  }
}
