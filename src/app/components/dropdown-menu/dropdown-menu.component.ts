import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';
/**
 * @title Basic menu
 */
@Component({
  selector: 'app-dropdown-menu',
  templateUrl: `dropdown-menu.component.html`
})
export class DropdownMenuComponent {

  constructor(private router: Router) {}
  @Input() buttonTitle: string = "";
  @Input() menuItems: string[] = [""];

  navigateToPage(pageName: string) {
    this.router.navigate(["items", pageName]);
  }


}
