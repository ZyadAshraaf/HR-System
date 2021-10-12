import { TestBed } from '@angular/core/testing';

import { CourseFunctionsService } from './course-functions.service';

describe('CourseFunctionsService', () => {
  let service: CourseFunctionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseFunctionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
