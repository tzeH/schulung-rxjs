import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, MonoTypeOperatorFunction } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SymbolInfo } from './stocks-types';
import { StocksService } from './stocks.service';


@Injectable()
export class StocksOnlineService implements StocksService {
  private readonly baseUrl = 'https://api.iextrading.com/1.0/';

  constructor(private httpClient: HttpClient) { }

  getSymbols(): Observable<SymbolInfo[]> {
    const url = `${this.baseUrl}/ref-data/symbols`;
    return this.httpClient.get<SymbolInfo[]>(url);
    // .pipe(this.getLogPipe(url));
  }

  private getLogPipe<T>(url: string): MonoTypeOperatorFunction<T> {
    return tap((object) => console.log(url, object));
  }

}
