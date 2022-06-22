import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidTokenGuard } from 'src/app/guards/valid-token.guard';
import { AgregarComponent } from './pages/agregar/agregar.component';

const routes: Routes = [
  {
    path: 'add',
    component: AgregarComponent,
    canActivate: [ValidTokenGuard],
    canLoad: [ValidTokenGuard]
  },
  { path: '**', redirectTo: 'add' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectivesRoutingModule { }
