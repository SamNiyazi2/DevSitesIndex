import { TestBed } from '@angular/core/testing';

import { GenUtilService } from './gen-util.service';

describe('GenUtilService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GenUtilService = TestBed.get(GenUtilService);
    expect(service).toBeTruthy();
  });
});
