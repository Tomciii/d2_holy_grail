import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-item-table',
  templateUrl: './item-table.component.html',
  styleUrls: ['./item-table.component.css']
})
export class ItemTableComponent implements OnInit {

  itemType: string = "";
  itemHeader: string = "";

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const pageName = params.get('pageName');
      this.itemType = pageName ? pageName : '';
      this.itemHeader = pageName ? pageName : 'All Items';
    });
  }
}
