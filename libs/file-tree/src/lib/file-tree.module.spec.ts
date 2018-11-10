import { async, TestBed } from '@angular/core/testing';
import { FileTreeModule } from './file-tree.module';

describe('FileTreeModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FileTreeModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FileTreeModule).toBeDefined();
  });
});
