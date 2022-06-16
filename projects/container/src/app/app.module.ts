import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouteReuseStrategy } from '@angular/router';
import { MicroFrontendRouteReuseStrategy } from '../services/route-reuse-strategy';
import { SpaHostComponent } from './spa-host/spa-host.component';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{
    provide: RouteReuseStrategy,
    useClass: MicroFrontendRouteReuseStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
