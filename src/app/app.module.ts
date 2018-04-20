import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  LocationStrategy,
  HashLocationStrategy
} from '@angular/common';
import {
  RouterModule,
  Router,
  Routes
} from '@angular/router';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MeComponent } from './me/me.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'me', component: MeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    MeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
