import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CompletatiComponent } from './components/completati/completati.component';
import { UtentiComponent } from './components/utenti/utenti.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CompletatiComponent,
    UtentiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
