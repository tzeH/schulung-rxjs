import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { StocksOfflineService } from './stocks-offline.service';
import { StocksService } from './stocks.service';
import { StocksOnlineService } from './stocks-online.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [
    HttpClientModule,
    { provide: StocksService, useClass: StocksOfflineService },
    // { provide: StocksService, useClass: StocksOnlineService }
  ]
})
export class StocksApiModule { }
