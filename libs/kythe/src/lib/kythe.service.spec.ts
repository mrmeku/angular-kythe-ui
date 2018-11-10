import { TestBed } from '@angular/core/testing';

import { KytheService } from './kythe.service';
import { KytheModule } from './kythe.module';

describe('KytheService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [KytheModule]
    })
  );

  it('should be created', () => {
    const service: KytheService = TestBed.get(KytheService);
    expect(service).toBeDefined();
  });
});
