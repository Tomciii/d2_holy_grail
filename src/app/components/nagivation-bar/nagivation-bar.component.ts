import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nagivation-bar',
  templateUrl: './nagivation-bar.component.html',
  styleUrls: ['./nagivation-bar.component.css']
})
export class NagivationBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title: string = "Diablo 2 Holy Grail";
}
