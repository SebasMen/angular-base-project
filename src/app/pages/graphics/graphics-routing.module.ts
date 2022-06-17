import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GraphicsComponent } from './graphics.component';
import { BarrasDoblesComponent } from './pages/barras-dobles/barras-dobles.component';
import { BarrasComponent } from './pages/barras/barras.component';
import { DonutHttpComponent } from './pages/donut-http/donut-http.component';
import { DonutComponent } from './pages/donut/donut.component';

const routes: Routes = [
  {
    path: '',
    component: GraphicsComponent,
    children: [
      { path: 'bars', component: BarrasComponent },
      { path: 'double-bars', component: BarrasDoblesComponent },
      { path: 'donut', component: DonutComponent },
      { path: 'donut-http', component: DonutHttpComponent },
      { path: '**', redirectTo: 'bars' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraphicsRoutingModule { }
