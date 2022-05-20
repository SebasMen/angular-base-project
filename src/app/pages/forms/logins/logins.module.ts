import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginsRoutingModule } from './logins-routing.module';
import { LoginsComponent } from './logins.component';
import { MenuModule } from 'src/app/components/menu/menu.module';


@NgModule({
  declarations: [
    LoginsComponent
  ],
  imports: [
    CommonModule,
    LoginsRoutingModule,
    MenuModule
  ]
})
export class LoginsModule { }
