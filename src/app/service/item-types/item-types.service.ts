import {Injectable} from '@angular/core';
import {ItemTypeEnum} from "../../model/itemTypeEnum.model";

@Injectable({
  providedIn: 'root'
})
export class ItemTypesService {
  private armorTypes: ItemTypeEnum[] = [
    ItemTypeEnum.Amulets,
    ItemTypeEnum.BodyArmors,
    ItemTypeEnum.Boots,
    ItemTypeEnum.Belts,
    ItemTypeEnum.Gloves,
    ItemTypeEnum.Helms,
    ItemTypeEnum.Shields,
    ItemTypeEnum.Rings,
    ItemTypeEnum.Jewels,
    ItemTypeEnum.Runes
  ];

  private weaponTypes: ItemTypeEnum[] = [
    ItemTypeEnum.Axes,
    ItemTypeEnum.Crossbows,
    ItemTypeEnum.Daggers,
    ItemTypeEnum.Javelins,
    ItemTypeEnum.Maces,
    ItemTypeEnum.Polearms,
    ItemTypeEnum.Scepter,
    ItemTypeEnum.Spears,
    ItemTypeEnum.Staves,
    ItemTypeEnum.Swords,
    ItemTypeEnum.ThrowingWeapons,
    ItemTypeEnum.Wands,
    ItemTypeEnum.Orbs
  ];

  private sets: string[] = [
    "Angelic Raiment",
    "Arcanna's Tricks",
    "Cathan's Traps",
    "Civerb's Vestments",
    "Iratha's Finery",
    "Tancred's Battlegear",
    "The Disciple",
    "Tal Rasha's Wrappings",
    "Trang-Oul's Avatar",
    "Sander's Folly",
    "Sazabi's Grand Tribute",
    "Orphan's Call",
    "Natalya's Odium",
    "Naj's Ancient Vestige",
    "M'avina's Battle Hymn",
    "Immortal King",
    "Hwanin's Majesty",
    "Heaven's Brethren",
    "Griswold's Legacy",
    "Cow King's Leathers",
    "Bul-Kathos' Children",
    "Aldur's Watchtower",
    "Vidala's Rig",
    "Sigon's Complete Steel",
    "Milabrega's Regalia",
    "Isenhart's Armory",
    "Infernal Tools",
    "Iratha's Finery",
    "Hsaru's Defense",
    "Cleglaw's Brace",
    "Berserker's Arsenal",
    "Arctic Gear",
    "Death's Disguise"
  ];

  private runesTypes: ItemTypeEnum[] = [
    ItemTypeEnum.Runes
  ];

  getArmorTypes(): any[] {
    return this.armorTypes.map((type: ItemTypeEnum) => ItemTypeEnum[type]);
  }

  getRuneTypes(): any[] {
    return this.runesTypes.map((type: ItemTypeEnum) => ItemTypeEnum[type])
  }

  getWeaponTypes(): any[] {
    return this.weaponTypes.map((type: ItemTypeEnum) => ItemTypeEnum[type]);
  }

  getSets(): any[] {
    return this.sets;
  }
}
