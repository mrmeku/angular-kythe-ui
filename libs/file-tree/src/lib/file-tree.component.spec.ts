import { KytheTarget } from '@angular-kythe-ui/kythe';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { FileTreeComponent } from './file-tree.component';
import { FileTreeModule } from './file-tree.module';

describe('FileTreeComponent', () => {
  let component: FileTreeComponent;
  let fixture: ComponentFixture<FileTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, FileTreeModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    (window as any).matchMedia = () => ({
      addListener: () => {}
    });
    fixture = TestBed.createComponent(FileTreeComponent);
    component = fixture.componentInstance;
    component.rootedAt = KytheTarget.fromCorpusAndPath({
      corpus: 'corpus',
      path: 'path'
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
