import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { concatAll, concatMap, filter, toArray, share, shareReplay } from 'rxjs/operators';

import { QuoteInfo, SymbolInfo } from '../stocks-api/stocks-types';
import { StocksService } from '../stocks-api/stocks.service';

@Component({
  selector: 'app-wertpapier-liste',
  templateUrl: './wertpapier-liste.component.html',
  styleUrls: ['./wertpapier-liste.component.scss']
})
export class WertpapierListeComponent {

  readonly symbols$: Observable<SymbolInfo[]>;

  readonly quotes$: Observable<QuoteInfo[]>;

  constructor(stocksService: StocksService) {
    this.symbols$ = stocksService.getSymbols();

    this.quotes$ = of([
      <any>{ symbol: 'FOO', latestPrice: '13.37' } as QuoteInfo
    ]);
  }

}
