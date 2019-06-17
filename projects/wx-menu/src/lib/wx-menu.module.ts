import {NgModule} from '@angular/core';
import {WxMenuComponent} from './wx-menu.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [WxMenuComponent],
  imports: [CommonModule, FormsModule],
  exports: [WxMenuComponent]
})
export class WxMenuModule {}
