import { TestBed } from '@angular/core/testing';

import { KytheService } from './kythe.service';

describe('KytheService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KytheService = TestBed.get(KytheService);
    expect(service).toBeTruthy();
  });
});
