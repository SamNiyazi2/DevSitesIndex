import { TestBed } from '@angular/core/testing';

import { TOASTR_TOKEN, Toastr } from './toastr.service';

describe('ToastrService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Toastr = TestBed.get(TOASTR_TOKEN);
    expect(service).toBeTruthy();
  });
});
