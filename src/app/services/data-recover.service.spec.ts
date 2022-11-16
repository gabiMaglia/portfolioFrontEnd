import { TestBed } from '@angular/core/testing';

import { DataRecoverService } from './data-recover.service';

describe('DateRecoverService', () => {
  let service: DataRecoverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataRecoverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
