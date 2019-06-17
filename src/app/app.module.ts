import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {WxMenuModule} from '../../projects/wx-menu/src/lib/wx-menu.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WxMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
