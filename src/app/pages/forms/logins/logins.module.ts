import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginsComponent } from './logins.component';
import { Login1Component } from './login1/login1.component';
import { Login2Component } from './login2/login2.component';
import { LoginsRoutingModule } from './logins-routing.module';
import { MenuModule } from 'src/app/components/menu/menu.module';
import { SidebarModule } from 'src/app/components/sidebar/sidebar.module';

@NgModule({
  declarations: [
    LoginsComponent,
    Login1Component,
    Login2Component
  ],
  imports: [
    CommonModule,
    LoginsRoutingModule,
    ReactiveFormsModule,
    MenuModule,
    SidebarModule
  ]
})
export class LoginsModule { }
