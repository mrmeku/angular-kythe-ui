import { TestBed } from '@angular/core/testing';

import { ZoektModule } from './zoekt.module';
import { ZoektService } from './zoekt.service';

describe('ZoektService', () => {
  beforeEach(() => TestBed.configureTestingModule({ imports: [ZoektModule] }));

  it('should be created', () => {
    const service: ZoektService = TestBed.get(ZoektService);
    expect(service).toBeDefined();
  });
});
