import { TestBed } from '@angular/core/testing';

import { ManagerFunctionsService } from './manager-functions.service';

describe('ManagerFunctionsService', () => {
  let service: ManagerFunctionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagerFunctionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
