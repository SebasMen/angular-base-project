import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'forms',
    loadChildren: () => import('./pages/forms/forms.module').then(m => m.FormsModule)
  },
  {
    path: 'graphics',
    loadChildren: () => import('./pages/graphics/graphics.module').then(m => m.GraphicsModule)
  },
  {
    path: 'directives',
    loadChildren: () => import('./pages/directives/directives.module').then(m => m.DirectivesModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
