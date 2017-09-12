import { Component } from '@angular/core';
import { MenuItemComponent } from './menu-item/menu-item.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// @Component({
//   selector: 'menu-item',
//   template: '<h1>Menu Item</h1>',
//   directives:[MenuItemComponent]
// })

export class AppComponent {
  title = 'app';
}
