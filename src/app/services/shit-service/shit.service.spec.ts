import { TestBed } from '@angular/core/testing';

import { ShitService } from './shit.service';

describe('ShitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShitService = TestBed.get(ShitService);
    expect(service).toBeTruthy();
  });
});
