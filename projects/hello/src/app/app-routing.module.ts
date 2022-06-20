import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import {APP_BASE_HREF} from '@angular/common';
import {EmptyRouteComponent} from "./empty-route/empty-route.component";
const routes: Routes = [
  {
    path: '',
    component: HelloComponent
  },
  {
  path: '**',
  component: EmptyRouteComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
})
export class AppRoutingModule { }
