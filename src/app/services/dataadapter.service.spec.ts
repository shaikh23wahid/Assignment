import { TestBed } from '@angular/core/testing';

import { DataadapterService } from './dataadapter.service';

describe('DataadapterService', () => {
  let service: DataadapterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataadapterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
