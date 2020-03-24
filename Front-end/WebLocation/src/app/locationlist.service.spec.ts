import { TestBed } from '@angular/core/testing';

import { LocationlistService } from './locationlist.service';

describe('LocationlistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocationlistService = TestBed.get(LocationlistService);
    expect(service).toBeTruthy();
  });
});
