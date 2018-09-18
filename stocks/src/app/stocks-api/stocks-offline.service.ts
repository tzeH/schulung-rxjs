import { Injectable } from '@angular/core';
import { Observable, of, MonoTypeOperatorFunction, defer } from 'rxjs';

import { SymbolInfo, QuoteInfo, BatchQuoteInfo } from './stocks-types';
import { StocksService } from './stocks.service';
import { delay, tap, map, toArray, mergeMap, concatMap } from 'rxjs/operators';

function randomDelay() {
  return 1000 + 2000 * Math.random();  // zw. 1 und 3 Sekunden
}

function randomPrice() {
  return 90 + 200 * Math.random();
}

@Injectable({
  providedIn: 'root'
})
export class StocksOfflineService extends StocksService {

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
        delay(randomDelay()),
        this.getLogPipe('getSymbole')
      );
    });
  }

  getQuote(symbol: string): Observable<QuoteInfo> {
    const quoteInfo: QuoteInfo = JSON.parse('{"symbol":"AAPL",'
      + '"companyName":"Apple Inc.",'
      + '"primaryExchange":"Nasdaq Global Select",'
      + '"sector":"Technology",'
      + '"calculationPrice":"close",'
      + '"open":222,"openTime":1537191000671,"close":217.88,"closeTime":1537214400272,'
      + '"high":222.95,"low":217.27,"latestPrice":217.88,"latestSource":"Close",'
      + '"latestTime":"September 17, 2018",'
      + '"latestUpdate":1537214400272,"latestVolume":36318715,'
      + '"iexRealtimePrice":217.94,"iexRealtimeSize":100,"iexLastUpdated":1537214399572,'
      + '"delayedPrice":217.88,"delayedPriceTime":1537214400272,'
      + '"extendedPrice":217.92,"extendedChange":0.04,"extendedChangePercent":0.00018,'
      + '"extendedPriceTime":1537217973996,"previousClose":223.84,"change":-5.96,'
      + '"changePercent":-0.02663,"iexMarketPercent":0.02335,"iexVolume":848042,"avgTotalVolume":30129265,"iexBidPrice":0,'
      + '"iexBidSize": 0, "iexAskPrice": 0, "iexAskSize": 0, "marketCap": 1052344276880, '
      + '"peRatio":21.03,"week52High":229.67,"week52Low":149.16,"ytdChange":0.2527277609947376}');

    return defer(() => {
      const angepassterQuote: QuoteInfo = {
        ...quoteInfo,
        symbol: symbol.toUpperCase(),
        latestPrice: randomPrice()
      };

      return of(angepassterQuote).pipe(
        delay(randomDelay()),
        this.getLogPipe('getQuote')
      );
    });
  }

  getBatchQuotes(symbols: string[]): Observable<BatchQuoteInfo> {
    const quoteInfo: QuoteInfo = JSON.parse('{"symbol":"AAPL",'
      + '"companyName":"Apple Inc.",'
      + '"primaryExchange":"Nasdaq Global Select",'
      + '"sector":"Technology",'
      + '"calculationPrice":"close",'
      + '"open":222,"openTime":1537191000671,"close":217.88,"closeTime":1537214400272,'
      + '"high":222.95,"low":217.27,"latestPrice":217.88,"latestSource":"Close",'
      + '"latestTime":"September 17, 2018",'
      + '"latestUpdate":1537214400272,"latestVolume":36318715,'
      + '"iexRealtimePrice":217.94,"iexRealtimeSize":100,"iexLastUpdated":1537214399572,'
      + '"delayedPrice":217.88,"delayedPriceTime":1537214400272,'
      + '"extendedPrice":217.92,"extendedChange":0.04,"extendedChangePercent":0.00018,'
      + '"extendedPriceTime":1537217973996,"previousClose":223.84,"change":-5.96,'
      + '"changePercent":-0.02663,"iexMarketPercent":0.02335,"iexVolume":848042,"avgTotalVolume":30129265,"iexBidPrice":0,'
      + '"iexBidSize": 0, "iexAskPrice": 0, "iexAskSize": 0, "marketCap": 1052344276880, '
      + '"peRatio":21.03,"week52High":229.67,"week52Low":149.16,"ytdChange":0.2527277609947376}');

    return of(...symbols).pipe(
      map(symbol => ({ ...quoteInfo, symbol: symbol.toUpperCase(), latestPrice: randomPrice() } as QuoteInfo)),
      toArray(),
      map(quotes => quotes.reduce((acc, cur) => {
        acc[cur.symbol] = { quote: cur };
        return acc;
      }, {} as BatchQuoteInfo)),
      delay(randomDelay()),
      this.getLogPipe('getBatchQuotes')
    );
  }
}
