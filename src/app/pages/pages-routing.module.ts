import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'forms',
    loadChildren: () => import('./forms/forms.module').then(m => m.FormsModule)
  },
  {
    path: 'graphics',
    loadChildren: () => import('./graphics/graphics.module').then(m => m.GraphicsModule)
  },
  {
    path: 'directives',
    loadChildren: () => import('./directives/directives.module').then(m => m.DirectivesModule)
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
