import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectorsComponent } from './selectors.component';
import { SelectorsRoutingModule } from './selectors-routing.module';
import { MenuModule } from 'src/app/components/menu/menu.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SelectorsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SelectorsRoutingModule,
    MenuModule
  ]
})
export class SelectorsModule { }
