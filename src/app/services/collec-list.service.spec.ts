import { TestBed } from '@angular/core/testing';

import { CollecListService } from './collec-list.service';

describe('CollecListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CollecListService = TestBed.get(CollecListService);
    expect(service).toBeTruthy();
  });
});
