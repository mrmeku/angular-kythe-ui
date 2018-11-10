import { async, TestBed } from '@angular/core/testing';
import { CodeMirrorModule } from './code-mirror.module';

describe('CodeMirrorModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CodeMirrorModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CodeMirrorModule).toBeDefined();
  });
});
