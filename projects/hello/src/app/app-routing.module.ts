import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import {EmptyRouteComponent} from "./empty-route/empty-route.component";
const routes: Routes = [
  {
    path: 'hello',
    component: HelloComponent
  },
  {
  path: '**',
  component: EmptyRouteComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
