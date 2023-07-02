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
  @Input() handleClickValue: string = "";

  handleMenuClick(clickedMenuItem: string){
    switch (clickedMenuItem){
      case "Export": console.log("Hello Export")
        break;
      case "Import": console.log("Hello Import")
        break;
      case "Reset": console.log("Hello Reset")
        break;
      default: this.navigateToPage(clickedMenuItem)
    }
  }
  navigateToPage(pageName: string) {
    this.router.navigate(["items", pageName]);
  }

}
