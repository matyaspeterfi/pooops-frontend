import { TestBed } from '@angular/core/testing';

import { ShitterceptorService } from './shitterceptor.service';

describe('ShitterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShitterceptorService = TestBed.get(ShitterceptorService);
    expect(service).toBeTruthy();
  });
});
