import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuModule } from 'src/app/components/menu/menu.module';
import { SelectorComponent } from './selector/selector.component';
import { SelectorsRoutingModule } from './selectors-routing.module';


@NgModule({
  declarations: [
    SelectorComponent
  ],
  imports: [
    CommonModule,
    MenuModule,
    SelectorsRoutingModule
  ]
})
export class SelectorsModule { }
