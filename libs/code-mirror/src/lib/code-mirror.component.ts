import {
  Component,
  AfterViewInit,
  ChangeDetectionStrategy,
  ElementRef,
  ViewEncapsulation,
  OnDestroy,
  Inject
} from '@angular/core';
import * as CodeMirror from 'codemirror';

import {
  decorate,
  largeResponse,
  KytheTarget,
  KytheService,
  GetDecorationsRequest
} from '@angular-kythe-ui/kythe';
import { ActivatedRoute } from '@angular/router';
import { startWith, map, switchMap } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { CodeMirrorFactory, CODE_MIRROR_FACTORY } from './code-mirror.module';

const SELECTOR = '.code-mirror-container';

@Component({
  selector: 'angular-kythe-ui-code-mirror',
  templateUrl: './code-mirror.component.html',
  styleUrls: ['./code-mirror.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CodeMirrorComponent implements AfterViewInit, OnDestroy {
  private readonly nativeElement = this.elementRef.nativeElement as HTMLElement;
  private paramsSubscription?: Subscription;

  constructor(
    private readonly elementRef: ElementRef,
    private readonly activeRoute: ActivatedRoute,
    private readonly kytheService: KytheService
  ) // @Inject(CODE_MIRROR_FACTORY)
  // private readonly codeMirrorFactory: CodeMirrorFactory
  {}

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

    this.paramsSubscription = this.activeRoute.paramMap
      .pipe(
        map(paramMap =>
          KytheTarget.fromCorpusAndPath({
            corpus: paramMap.get('corpus'),
            path: paramMap.get('path')
          })
        ),
        switchMap(kytheTarget =>
          this.kytheService.getDecorations(
            GetDecorationsRequest.fromTicket(kytheTarget)
          )
        )
      )
      .subscribe(kytheDecoration => {
        decorate(editor, kytheDecoration);
      });
  }

  ngOnDestroy() {
    if (this.paramsSubscription) {
      this.paramsSubscription.unsubscribe();
    }
  }
}
