import { Injectable } from '@angular/core';
import { Item } from '../../model/item.model';
import { ItemTypeEnum } from '../../model/itemTypeEnum.model';
import { ItemRepository } from '../../repository/item-data.repository';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private itemRepository: ItemRepository) {}

  getAllItems(item: string): Item[] {
    if (item === '/' || item === '') {
      return this.itemRepository.getAllItems();
    }

    const itemType: ItemTypeEnum = ItemTypeEnum[item as keyof typeof ItemTypeEnum];
    return this.itemRepository.getItemsByType(ItemTypeEnum[itemType]);
  }

  getItemsFoundCount(items: Item[]): number {
    return items.filter(item => item.found).length;
  }
}
