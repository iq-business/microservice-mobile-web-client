import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuItemComponent } from './menu-item/menu-item.component';

import { MenuService } from './menu.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
