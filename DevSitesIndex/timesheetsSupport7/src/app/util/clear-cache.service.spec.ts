import { TestBed } from '@angular/core/testing';

import { ClearCacheService } from './clear-cache.service';

describe('ClearCacheService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClearCacheService = TestBed.get(ClearCacheService);
    expect(service).toBeTruthy();
  });
});
