import { TestBed } from '@angular/core/testing';

import { TimesheetResolverService } from './timesheet-resolver.service';

describe('TimesheetResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TimesheetResolverService = TestBed.get(TimesheetResolverService);
    expect(service).toBeTruthy();
  });
});
