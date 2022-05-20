import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ 
  {
    path: 'selectors',
    loadChildren: () => import('./selectors/selectors.module').then(m => m.SelectorsModule)
  },
  {
    path: 'logins',
    loadChildren: () => import('./logins/logins.module').then(m => m.LoginsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
