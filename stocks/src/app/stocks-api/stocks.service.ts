import { Injectable } from '@angular/core';
import { MonoTypeOperatorFunction, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { SymbolInfo, QuoteInfo, BatchQuoteInfo } from './stocks-types';

@Injectable()
export abstract class StocksService {
  abstract getSymbols(): Observable<SymbolInfo[]>;
  abstract getQuote(symbol: string): Observable<QuoteInfo>;
  abstract getBatchQuotes(symbols: string[]): Observable<BatchQuoteInfo>;

  protected getLogPipe<T>(url: string) {
    return tap<T>();
  }
}
