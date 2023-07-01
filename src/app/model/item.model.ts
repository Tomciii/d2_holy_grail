import {ItemRarity, ItemTypeEnum, ItemVariety} from "./itemTypeEnum.model";

export class Item {
  name: string;
  itemType: ItemTypeEnum;
  stats: string[];
  found: boolean;
  image: string;
  variety: string;
  rarity: string;

  constructor(name: string, itemType: ItemTypeEnum, stats:string[], found:boolean, image:string, itemVariety: ItemVariety, itemRarity: ItemRarity) {
    this.name = name;
    this.stats = stats;
    this.found = found;
    this.itemType = itemType;
    this.image = image;
    this.variety = ItemVariety[itemVariety].replace("_"," ");
    this.rarity = ItemRarity[itemRarity].replace("_"," ");
  }
}
