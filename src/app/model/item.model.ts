import {ItemTypeEnum} from "./itemTypeEnum.model";

export class Item {
  id: number;
  name: string;
  itemType: ItemTypeEnum;
  stats: string[];
  found: boolean;

  constructor(id: number, name: string, itemType: ItemTypeEnum, stats:string[], found:boolean) {
    this.id = id;
    this.name = name;
    this.stats = stats;
    this.found = found;
    this.itemType = itemType;
  }
}
