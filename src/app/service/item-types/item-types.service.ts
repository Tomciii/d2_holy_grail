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
}
