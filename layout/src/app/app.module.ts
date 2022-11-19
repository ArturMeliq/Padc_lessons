import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HeaderComponent} from "./components/header/header.component";
import {SearchComponent} from "./components/search/search.component";
import {HeaderButtonComponent} from "./components/header_button/header_button.component";
import {BannerComponent} from "./components/banner/banner.component";
import {Single_itemComponent} from "./components/singleItems/single_item.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    HeaderButtonComponent,
    BannerComponent,
    Single_itemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
