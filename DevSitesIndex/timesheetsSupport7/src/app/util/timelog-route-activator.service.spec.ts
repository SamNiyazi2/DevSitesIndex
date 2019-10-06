import { TestBed } from '@angular/core/testing';

import { TimelogRouteActivatorService } from './timelog-route-activator.service';

describe('TimelogRouteActivatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TimelogRouteActivatorService = TestBed.get(TimelogRouteActivatorService);
    expect(service).toBeTruthy();
  });
});
