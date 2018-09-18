import { Injectable } from '@angular/core';
import { Observable, of, MonoTypeOperatorFunction, defer } from 'rxjs';

import { SymbolInfo } from './stocks-types';
import { StocksService } from './stocks.service';
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StocksOfflineService implements StocksService {

  getSymbols(): Observable<SymbolInfo[]> {
    const symbols = JSON.parse(
      '[{"symbol":"A","name":"Agilent Technologies Inc.","date":"2018-09-17","isEnabled":true,"type":"cs","iexId":"2"},'
      + '{"symbol":"AA","name":"Alcoa Corporation","date":"2018-09-17","isEnabled":true,"type":"cs","iexId":"12042"},'
      + '{"symbol":"AAAU","name":"Perth Mint Physical Gold","date":"2018-09-17","isEnabled":true,"type":"N/A","iexId":"14924"},'
      + '{"symbol":"AABA","name":"Altaba Inc.","date":"2018-09-17","isEnabled":true,"type":"cs","iexId":"7653"},'
      + '{"symbol":"AAC","name":"AAC Holdings Inc.","date":"2018-09-17","isEnabled":true,"type":"cs","iexId":"9169"},'
      + '{"symbol":"AADR","name":"AdvisorShares Dorsey Wright ADR","date":"2018-09-17","isEnabled":true,"type":"et","iexId":"5"},'
      + '{"symbol":"AAL","name":"American Airlines Group Inc.","date":"2018-09-17","isEnabled":true,"type":"cs","iexId":"8148"},'
      + '{"symbol":"AAMC","name":"Altisource Asset Management Corp Com","date":"2018-09-17","isEnabled":true,"type":"cs","iexId":"7760"},'
      + '{"symbol":"AAME","name":"Atlantic American Corporation","date":"2018-09-17","isEnabled":true,"type":"cs","iexId":"7"},'
      + '{"symbol":"AAN","name":"Aaron\'s Inc.","date":"2018-09-17","isEnabled":true,"type":"cs","iexId":"8"},'
      + '{"symbol":"AAOI","name":"Applied Optoelectronics Inc.","date":"2018-09-17","isEnabled":true,"type":"cs","iexId":"7790"},'
      + '{"symbol":"AAON","name":"AAON Inc.","date":"2018-09-17","isEnabled":true,"type":"cs","iexId":"9"},'
      + '{"symbol":"AAP","name":"Advance Auto Parts Inc W/I","date":"2018-09-17","isEnabled":true,"type":"cs","iexId":"10"},'
      + '{"symbol":"AAPL","name":"Apple Inc.","date":"2018-09-17","isEnabled":true,"type":"cs","iexId":"11"},'
      + '{"symbol":"AAT","name":"American Assets Trust Inc.","date":"2018-09-17","isEnabled":true,"type":"cs","iexId":"12"},'
      + '{"symbol":"AAU","name":"Almaden Minerals Ltd.","date":"2018-09-17","isEnabled":true,"type":"cs","iexId":"13"}]');
    return defer(() => {
      return of(symbols).pipe(
        delay(1000 + 2000 * Math.random()), // zw. 1 und 3 Sekunden
        this.getLogPipe('getSymbole')
      );
    });
  }

  private getLogPipe<T>(url: string): MonoTypeOperatorFunction<T> {
    return tap((object) => console.log(url, object));
  }
}
