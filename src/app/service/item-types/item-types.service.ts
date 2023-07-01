import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemTypesService {
  private armorTypes: any[] = [
    { id: 1, name: 'Helms' },
    { id: 1, name: 'Circlets' },
    { id: 3, name: 'Body Armors'},
    { id: 4, name: 'Shields'},
    { id: 5, name: 'Gloves'},
    { id: 6, name: 'Boots'},
    { id: 7, name: 'Belts'},
    { id: 8, name: 'Rings'},
    { id: 9, name: 'Amulets'},
    { id: 10, name: 'Jewels'},
  ];

  private weaponTypes: any[] = [
    { id: 1, name: 'Axes' },
    { id: 2, name: '(Cross)Bows' },
    { id: 3, name: 'Daggers'},
    { id: 4, name: 'Javelins'},
    { id: 5, name: 'Maces'},
    { id: 6, name: 'Polearms'},
    { id: 7, name: 'Scepter'},
    { id: 8, name: 'Spears'},
    { id: 9, name: 'Staves'},
    { id: 10, name: 'Swords'},
    { id: 11, name: 'Throwing Weapons'},
    { id: 12, name: 'Wands'},
  ];

  getArmorTypes(): any[] {
    return this.armorTypes.map(item => item.name);
  }

  getWeaponTypes(): any[] {
    return this.weaponTypes.map(item => item.name);
  }
}
