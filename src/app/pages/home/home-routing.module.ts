import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectorComponent } from '../selectors/selector/selector.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'selectors',
    loadChildren: () => import('../selectors/selectors.module').then(m => m.SelectorsModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
