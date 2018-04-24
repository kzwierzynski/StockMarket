import { TestBed, inject } from '@angular/core/testing';

import { GetPricesService } from './get-prices.service';

describe('GetPricesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetPricesService]
    });
  });

  it('should be created', inject([GetPricesService], (service: GetPricesService) => {
    expect(service).toBeTruthy();
  }));
});
