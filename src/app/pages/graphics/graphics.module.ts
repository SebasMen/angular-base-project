import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraphicsRoutingModule } from './graphics-routing.module';
import { MenuModule } from 'src/app/components/menu/menu.module';
import { SidebarModule } from 'src/app/components/sidebar/sidebar.module';
import { NgChartsModule } from 'ng2-charts';

import { GraphicsComponent } from './graphics.component';
import { BarrasComponent } from './pages/barras/barras.component';
import { BarrasDoblesComponent } from './pages/barras-dobles/barras-dobles.component';
import { DonutComponent } from './pages/donut/donut.component';
import { DonutHttpComponent } from './pages/donut-http/donut-http.component';
import { GraphicBarComponent } from './components/graphic-bar/graphic-bar.component';


@NgModule({
  declarations: [
    BarrasComponent,
    BarrasDoblesComponent,
    DonutComponent,
    DonutHttpComponent,
    GraphicsComponent,
    GraphicBarComponent
  ],
  imports: [
    CommonModule,
    GraphicsRoutingModule,
    MenuModule,
    SidebarModule,
    NgChartsModule
  ]
})
export class GraphicsModule { }
