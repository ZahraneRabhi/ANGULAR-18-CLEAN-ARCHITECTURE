import { TestBed } from '@angular/core/testing';

import { OtherServiceService } from './other-service.service';

describe('OtherServiceService', () => {
  let service: OtherServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OtherServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
