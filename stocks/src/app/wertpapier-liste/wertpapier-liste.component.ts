import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { SymbolInfo } from '../stocks-api/stocks-types';
import { StocksService } from '../stocks-api/stocks.service';

@Component({
  selector: 'app-wertpapier-liste',
  templateUrl: './wertpapier-liste.component.html',
  styleUrls: ['./wertpapier-liste.component.scss']
})
export class WertpapierListeComponent implements OnInit {

  readonly symbols$: Observable<SymbolInfo[]>;

  constructor(private stocksService: StocksService) {
    this.symbols$ = stocksService.getSymbols();
  }

  ngOnInit() {
  }

}
