import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StocksService {
  private readonly baseUrl = 'https://api.iextrading.com/1.0/';

  constructor(private httpClient: HttpClient) { }

  getSymbols(): Observable<Object> {
    return this.httpClient.get(`${this.baseUrl}/ref-data/symbols`);
  }

}
