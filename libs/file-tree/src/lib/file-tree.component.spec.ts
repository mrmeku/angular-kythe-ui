import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileTreeComponent } from './file-tree.component';
import { FileTreeModule } from './file-tree.module';

describe('FileTreeComponent', () => {
  let component: FileTreeComponent;
  let fixture: ComponentFixture<FileTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FileTreeModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
