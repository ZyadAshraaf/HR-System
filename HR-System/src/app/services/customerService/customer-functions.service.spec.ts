import { TestBed } from '@angular/core/testing';

import { CustomerFunctionsService } from './customer-functions.service';

describe('CustomerFunctionsService', () => {
  let service: CustomerFunctionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerFunctionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
