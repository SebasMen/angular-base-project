import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidTokenGuard } from '../guards/valid-token.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    canActivate: [ValidTokenGuard],
    canLoad: [ValidTokenGuard]
  },
  {
    path: 'forms',
    loadChildren: () => import('./forms/forms.module').then(m => m.FormsModule),
    canActivate: [ValidTokenGuard],
    canLoad: [ValidTokenGuard]
  },
  {
    path: 'graphics',
    loadChildren: () => import('./graphics/graphics.module').then(m => m.GraphicsModule),
    canActivate: [ValidTokenGuard],
    canLoad: [ValidTokenGuard]
  },
  {
    path: 'directives',
    loadChildren: () => import('./directives/directives.module').then(m => m.DirectivesModule),
    canActivate: [ValidTokenGuard],
    canLoad: [ValidTokenGuard]
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
