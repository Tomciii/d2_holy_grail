import {Component, Input, OnInit} from '@angular/core';
import {ItemTypesService} from "../../service/item-types/item-types.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nagivation-bar',
  templateUrl: './nagivation-bar.component.html',
  styleUrls: ['./nagivation-bar.component.css']
})
export class NagivationBarComponent implements OnInit {

  itemSerive:ItemTypesService= new ItemTypesService();
  title: string = "Diablo 2 Holy Grail";
  @Input() armorTypes: string[] = this.itemSerive.getArmorTypes()
  @Input() weaponTypes: string[] = this.itemSerive.getWeaponTypes()

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  navigateToPage() {
    this.router.navigate(["/"]);
  }
}
