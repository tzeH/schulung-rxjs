import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StocksApiModule } from './stocks-api/stocks-api.module';
import { WertpapierListeComponent } from './wertpapier-liste/wertpapier-liste.component';

@NgModule({
  declarations: [
    AppComponent,
    WertpapierListeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StocksApiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
