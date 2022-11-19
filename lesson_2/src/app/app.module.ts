import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {PeopleChangeComponent} from './components/peoples/index.component'
import {FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    PeopleChangeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
