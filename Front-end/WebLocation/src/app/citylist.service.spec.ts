import { TestBed } from '@angular/core/testing';

import { CitylistService } from './citylist.service';

describe('CitylistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CitylistService = TestBed.get(CitylistService);
    expect(service).toBeTruthy();
  });
});
