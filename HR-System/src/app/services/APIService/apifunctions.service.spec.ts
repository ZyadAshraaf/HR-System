import { TestBed } from '@angular/core/testing';

import { APIFunctionsService } from './apifunctions.service';

describe('APIFunctionsService', () => {
  let service: APIFunctionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APIFunctionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
