import { TestBed } from '@angular/core/testing';

import { GetFruitsService } from './get-fruits.service';

describe('GetFruitsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetFruitsService = TestBed.get(GetFruitsService);
    expect(service).toBeTruthy();
  });
});
