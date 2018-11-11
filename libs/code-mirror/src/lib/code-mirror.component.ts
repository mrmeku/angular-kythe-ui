import {
  Component,
  AfterViewInit,
  ChangeDetectionStrategy,
  ElementRef,
  ViewEncapsulation,
  OnDestroy,
  Inject,
  NgZone
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

const CODE_MIRROR_CONTAINER_SELECTOR = '.code-mirror-container';

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
  private codeMirrorContainer?: HTMLDivElement;

  constructor(
    private readonly elementRef: ElementRef,
    private readonly activeRoute: ActivatedRoute,
    private readonly kytheService: KytheService,
    private readonly ngZone: NgZone
  ) {}

  ngAfterViewInit() {
    this.ngZone.runOutsideAngular(() => {
      this.codeMirrorContainer = document.createElement('div');
      this.codeMirrorContainer.classList.add('code-mirror-container');

      const editor = CodeMirror(this.codeMirrorContainer, {
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
          if (this.nativeElement.hasChildNodes()) {
            this.nativeElement.removeChild(this.codeMirrorContainer);
          }
          decorate(editor, kytheDecoration);
          this.nativeElement.prepend(this.codeMirrorContainer);
          editor.refresh();
        });
    });
  }

  ngOnDestroy() {
    if (this.paramsSubscription) {
      this.paramsSubscription.unsubscribe();
    }
  }
}
