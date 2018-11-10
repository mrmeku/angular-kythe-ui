import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CodeMirrorComponent } from './code-mirror.component';
import {
  CodeMirrorModule,
  CODE_MIRROR_FACTORY,
  CodeMirrorFactory
} from './code-mirror.module';
// import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('CodeMirrorComponent', () => {
  let component: CodeMirrorComponent;
  let fixture: ComponentFixture<CodeMirrorComponent>;
  let mockCodeMirrorFactory: CodeMirrorFactory;

  beforeEach(async(() => {
    (document.body as any).createTextRange = () =>
      document.createElement('div');

    mockCodeMirrorFactory = () => {
      return {
        setValue: jest.fn(),
        markText: jest.fn()
      } as any;
    };
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, CodeMirrorModule],
      providers: [
        { provide: CODE_MIRROR_FACTORY, useValue: mockCodeMirrorFactory }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeMirrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
