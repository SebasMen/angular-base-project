import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidTokenGuard } from './guards/valid-token.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
    canActivate: [ValidTokenGuard],
    canLoad: [ValidTokenGuard]
  },
  {
    path: '**',
    redirectTo: 'auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
