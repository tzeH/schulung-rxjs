import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, MonoTypeOperatorFunction } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SymbolInfo, BatchQuoteInfo, QuoteInfo } from './stocks-types';
import { StocksService } from './stocks.service';


@Injectable()
export class StocksOnlineService extends StocksService {
  private readonly baseUrl = 'https://api.iextrading.com/1.0/';

  constructor(private httpClient: HttpClient) {
    super();
  }

  getSymbols(): Observable<SymbolInfo[]> {
    const url = `${this.baseUrl}/ref-data/symbols`;
    return this.httpClient.get<SymbolInfo[]>(url)
      .pipe(
        this.getLogPipe(url)
      );
  }

  getQuote(symbol: string): Observable<QuoteInfo> {
    const url = `${this.baseUrl}/stock/${symbol}/quote`;
    return this.httpClient.get<QuoteInfo>(url).pipe(
      this.getLogPipe(url)
    );
  }

  getBatchQuotes(symbols: string[]): Observable<BatchQuoteInfo> {
    const symbolList = symbols.join(',');
    const url = `${this.baseUrl}/stock/market/batch`;
    return this.httpClient.get<BatchQuoteInfo>(url, {
      params: {
        symbols: symbolList,
        types: 'quote'
      }
    }).pipe(
      this.getLogPipe(url)
    );
  }
}
