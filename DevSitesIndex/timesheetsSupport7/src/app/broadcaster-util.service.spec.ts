import { TestBed } from '@angular/core/testing';

import { BroadcasterUtilService } from './broadcaster-util.service';

describe('BroadcasterUtilService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BroadcasterUtilService = TestBed.get(BroadcasterUtilService);
    expect(service).toBeTruthy();
  });
});
