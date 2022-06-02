import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginsComponent } from './logins.component';
import { Login1Component } from './login1/login1.component';
import { Login2Component } from './login2/login2.component';

const routes: Routes = [
  {
    path: '',
    component: LoginsComponent,
    children: [
      {
        path: 'login1',
        component: Login1Component
      },
      {
        path: 'login2',
        component: Login2Component
      },
      {
        path: '**',
        redirectTo: 'login1'
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginsRoutingModule { }
