import {ItemTypeEnum} from "./itemTypeEnum.model";

export class Item {
  name: string;
  itemType: ItemTypeEnum;
  stats: string[];
  found: boolean;
  image: string;

  constructor(name: string, itemType: ItemTypeEnum, stats:string[], found:boolean, image:string) {
    this.name = name;
    this.stats = stats;
    this.found = found;
    this.itemType = itemType;
    this.image = image;
  }
}
