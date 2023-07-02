export class Item {
  name: string;
  itemType: string;
  stats: string[];
  found: boolean;
  image: string;
  variety: string;
  rarity: string;

  constructor(name: string, itemType: string, stats:string[], found:boolean, image:string, itemRarity: string, itemVariety: string) {
    this.name = name;
    this.stats = stats;
    this.found = found;
    this.itemType = itemType;
    this.image = image;
    this.variety = itemVariety;
    this.rarity = itemRarity;
  }
}
