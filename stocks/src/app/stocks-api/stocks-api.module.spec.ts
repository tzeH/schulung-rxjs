import { StocksApiModule } from './stocks-api.module';

describe('StocksApiModule', () => {
  let stocksApiModule: StocksApiModule;

  beforeEach(() => {
    stocksApiModule = new StocksApiModule();
  });

  it('should create an instance', () => {
    expect(stocksApiModule).toBeTruthy();
  });
});
