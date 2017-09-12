import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
  public name : string;
  public description : string;
  public price : number; 

  constructor() {
    this.name = "Coffee";
    this.description = "Tatooine Dark Roast";
    this.price = 23.50;
    
  }

  ngOnInit() {
  }
}
