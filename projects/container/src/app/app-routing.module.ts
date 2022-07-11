import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const parcel = `hello_${document.location.protocol.replace(':','')}`;
console.log(parcel);
const routes: Routes = [{
  path: '',
  children: [{
    path: '**',
    loadChildren: () => import('./spa-host/spa-host.module').then(m => m.SpaHostModule),
    data: { app: parcel}
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
