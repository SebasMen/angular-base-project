import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DirectivesRoutingModule } from './directives-routing.module';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { MenuModule } from 'src/app/components/menu/menu.module';

import { ErrorMsgDirective } from './directive/error-msg.directive';


@NgModule({
  declarations: [
    AgregarComponent,
    ErrorMsgDirective
  ],
  imports: [
    CommonModule,
    DirectivesRoutingModule,
    MenuModule,
    ReactiveFormsModule
  ]
})
export class DirectivesModule { }
