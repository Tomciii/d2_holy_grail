import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';
import {ItemService} from "../../service/item-data/item.service";
import {HttpClient} from "@angular/common/http";
/**
 * @title Basic menu
 */
@Component({
  selector: 'app-dropdown-menu',
  templateUrl: `dropdown-menu.component.html`
})
export class DropdownMenuComponent {

  private backend = 'http://localhost:8080/public/api/'
  private apiRESETUrl = this.backend + 'resetItemData';
  private apiExportUrl = this.backend + 'exportItemData';
  private apiImportUrl = this.backend + 'importItemData';

  constructor(private router: Router, private http: HttpClient) {}
  @Input() buttonTitle: string = "";
  @Input() menuItems: string[] = [""];
  @Input() handleClickValue: string = "";

  handleMenuClick(clickedMenuItem: string){
    switch (clickedMenuItem){
      case "Export": this.export()
        break;
      case "Import": this.import()
        break;
      case "Reset": this.reset()
        break;
      default: this.navigateToPage(clickedMenuItem)
    }
  }

  reset(){
    this.http.get(this.apiRESETUrl).toPromise();
  }

  export(){
    this.http.get(this.apiExportUrl).toPromise();
  }

  import(){
    this.http.get(this.apiImportUrl).toPromise();
  }

  navigateToPage(pageName: string) {
    this.router.navigate(["items", pageName]);
  }

}
