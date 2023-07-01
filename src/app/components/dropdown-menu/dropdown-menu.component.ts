import {Component, Input} from '@angular/core';

/**
 * @title Basic menu
 */
@Component({
  selector: 'app-dropdown-menu',
  templateUrl: `dropdown-menu.component.html`
})
export class DropdownMenuComponent {
  @Input() buttonTitle: string = "";
  @Input() menuItems: string[] = [""];
}
