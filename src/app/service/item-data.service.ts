import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemDataService {
  private data: any[] = [
    { id: 1, name: 'Wormskull', image:"", found:true },
    { id: 2, name: 'Undead Crown', image:"", found:true},
  
  ];

  getData(): any[] {
    return this.data;
  }

}