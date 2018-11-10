import {
  Component,
  AfterViewInit,
  ChangeDetectionStrategy,
  ElementRef,
  ViewEncapsulation
} from '@angular/core';
import * as CodeMirror from 'codemirror';

import { decorate, largeResponse } from '@angular-kythe-ui/kythe';

const SELECTOR = '.code-mirror-container';

@Component({
  selector: 'angular-kythe-ui-code-mirror',
  templateUrl: './code-mirror.component.html',
  styleUrls: ['./code-mirror.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CodeMirrorComponent implements AfterViewInit {
  private readonly nativeElement = this.elementRef.nativeElement as HTMLElement;

  constructor(private readonly elementRef: ElementRef) {}

  ngAfterViewInit() {
    const codeMirrorContainer = this.nativeElement.querySelector<HTMLElement>(
      SELECTOR
    );

    const editor = CodeMirror(codeMirrorContainer, {
      theme: 'solarized',
      lineNumbers: true,
      styleSelectedText: true,
      mode: 'go',
      readOnly: 'nocursor'
    } as any);

    decorate(editor, largeResponse);
  }
}
