import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'hello',
  children: [{
    path: '**',
    loadChildren: () => import('./spa-host/spa-host.module').then(m => m.SpaHostModule),
    data: { app: 'hello' }
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
