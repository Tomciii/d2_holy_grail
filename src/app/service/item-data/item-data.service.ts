import {Injectable} from '@angular/core';
import {Item} from "../../model/item.model";
import {ItemTypeEnum} from "../../model/itemTypeEnum.model";

@Injectable({
  providedIn: 'root'
})
export class ItemDataService {
  private data: Item[] = [
    new Item("Harlequin Crest", ItemTypeEnum.Helms, ["Defense: 98-141", "Req Strength:50"],false,"https://assets.d2grail.com/images/uniques/harlequin-crest-8f143.png"),
    new Item("War Traveler", ItemTypeEnum.Boots, ["Assassin Kick Damage: 37-64", "Defense: 120-139"],false,"https://assets.d2grail.com/images/uniques/war-traveler-7f82c.png")
  ];

  getData(item: string): Item[] {
    const itemType: ItemTypeEnum = ItemTypeEnum[item as keyof typeof ItemTypeEnum];

    if (item === "/" || item === "")
      return this.data

    return this.data.filter((item) => item.itemType === itemType);
  }
}
