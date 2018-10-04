import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GenChartsComponent } from './gen-charts/gen-charts.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes:Routes = [
  { path:'', component:HomeComponent },
  { path:'gen-charts', component:GenChartsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GenChartsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
