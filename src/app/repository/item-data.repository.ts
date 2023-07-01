import {Injectable} from '@angular/core';
import {Item} from '../model/item.model';
import {ItemRarity, ItemTypeEnum, ItemVariety} from '../model/itemTypeEnum.model';

@Injectable({
  providedIn: 'root'
})
export class ItemRepository {
  private data: Item[] = [
    new Item("Biggin's Bonnet", ItemTypeEnum.Helms, ["Defense: 17-19", "Durability: 12", "Req Level:3", "+30% Enhanced Damage", "+30 to Attack Rating", "+15 to Mana", "+14 to Defense", "+15 to Life"], false, "https://assets.d2grail.com/images/uniques/biggins-bonnet-6bbe5.png", ItemVariety.Cap, ItemRarity.Unique),
    new Item("Harlequin Crest", ItemTypeEnum.Helms, ["Defense: 98-141", "Req Strength: 50"], false, "https://assets.d2grail.com/images/uniques/harlequin-crest-8f143.png", ItemVariety.Shako, ItemRarity.Unique),
    new Item("War Traveler", ItemTypeEnum.Boots, ["Assassin Kick Damage: 37-64", "Defense: 120-139"], false, "https://assets.d2grail.com/images/uniques/war-traveler-7f82c.png", ItemVariety.Battle_Boots, ItemRarity.Exceptional_Unique)
  ];

  getAllItems(): Item[] {
    return this.data;
  }

  getItemsByType(itemType: ItemTypeEnum): Item[] {
    return this.data.filter(item => item.itemType === itemType);
  }
}
