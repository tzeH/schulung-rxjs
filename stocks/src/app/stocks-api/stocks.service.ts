import { Observable } from 'rxjs';

import { SymbolInfo } from './stocks-types';
import { Injectable } from '@angular/core';

@Injectable()
export abstract class StocksService {
  abstract getSymbols(): Observable<SymbolInfo[]>;
}
