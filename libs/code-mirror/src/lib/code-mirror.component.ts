import {
  decorate,
  GetDecorationsRequest,
  KytheService,
  KytheTarget
} from '@angular-kythe-ui/kythe';
import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  NgZone,
  OnDestroy,
  ViewEncapsulation
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as CodeMirror from 'codemirror';
import { BehaviorSubject, Subscription } from 'rxjs';
import {
  distinctUntilChanged,
  filter,
  first,
  map,
  switchMap,
  tap
} from 'rxjs/operators';

const CODE_MIRROR_ACTIVE_LINE_CLASS = 'CodeMirror-activeline';
const CODE_MIRROR_ACTIVE_GUTTER_CLASS = 'CodeMirror-activegutter';
const ACTIVE_LINE_OFFSET_RATIO = 0.35;
@Component({
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      state('*', style({ opacity: 1 })),
      transition(`* <=> *`, animate(`300ms ease-in-out`))
    ])
  ],
  selector: 'angular-kythe-ui-code-mirror',
  templateUrl: './code-mirror.component.html',
  styleUrls: ['./code-mirror.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CodeMirrorComponent implements AfterViewInit, OnDestroy {
  private readonly nativeElement = this.elementRef.nativeElement as HTMLElement;
  private paramsSubscription?: Subscription;
  private lineHighlighterSubscription?: Subscription;
  private codeMirrorContainer?: HTMLDivElement;
  readonly loading = new BehaviorSubject(true);

  static removeLineClass(editor: CodeMirror.Editor, line: number) {
    editor.removeLineClass(line, 'background', CODE_MIRROR_ACTIVE_LINE_CLASS);
    editor.removeLineClass(line, 'gutter', CODE_MIRROR_ACTIVE_GUTTER_CLASS);
  }

  static addLineClass(editor: CodeMirror.Editor, line: number) {
    editor.addLineClass(line, 'background', CODE_MIRROR_ACTIVE_LINE_CLASS);
    editor.addLineClass(line, 'gutter', CODE_MIRROR_ACTIVE_GUTTER_CLASS);
  }

  constructor(
    private readonly elementRef: ElementRef,
    private readonly activeRoute: ActivatedRoute,
    private readonly router: Router,
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

      editor.on('gutterClick', (instance, line, gutter, clickEvent) => {
        // Set it as a query param here
        this.router.navigate(['.'], {
          relativeTo: this.activeRoute,
          queryParams: { line: line + 1 },
          queryParamsHandling: 'merge'
        });
      });

      let activeLine = 0;

      this.paramsSubscription = this.activeRoute.paramMap
        .pipe(
          map(paramMap =>
            KytheTarget.fromCorpusAndPath({
              corpus: paramMap.get('corpus'),
              path: paramMap.get('path')
            })
          ),
          tap(() => this.setLoading(true)),
          switchMap(kytheTarget =>
            this.kytheService.getDecorations(
              GetDecorationsRequest.fromTicket(kytheTarget)
            )
          ),
          tap(() => this.setLoading(false))
        )
        .subscribe(kytheDecoration => {
          if (this.codeMirrorContainer.isConnected) {
            this.nativeElement.removeChild(this.codeMirrorContainer);
          }
          decorate(editor, kytheDecoration);
          this.nativeElement.prepend(this.codeMirrorContainer);
          editor.refresh();

          const line$ = this.activeRoute.queryParamMap.pipe(
            map(queryParamMap => parseInt(queryParamMap.get('line'), 10))
          );
          this.lineHighlighterSubscription = line$
            .pipe(
              distinctUntilChanged(),
              filter(line => !isNaN(line))
            )
            .subscribe(line => {
              // Remove the old active line's styling.
              CodeMirrorComponent.removeLineClass(editor, activeLine);

              // Now set the positive styling.
              activeLine = line - 1;
              CodeMirrorComponent.addLineClass(editor, activeLine);
            });

          line$.pipe(first()).subscribe(line => {
            if (isNaN(line)) {
              return;
            }
            // Compute the offset by figuring out the height of the
            // default line and dividing the viewable space to
            // determine how many default lines would be displayed.
            const displayedLineCount =
              this.nativeElement.clientHeight / editor.defaultTextHeight();
            // Now figure out the line that comes n lines before the
            // selected line, where n == max # of lines per viewing
            // area * %%.
            const lineHeight = editor.heightAtLine(
              line - Math.floor(displayedLineCount * ACTIVE_LINE_OFFSET_RATIO),
              'local'
            );

            editor.scrollTo(0, lineHeight);
          });
        });
    });
  }

  setLoading(value: boolean) {
    this.ngZone.run(() => {
      this.loading.next(value);
    });
  }

  ngOnDestroy() {
    if (this.paramsSubscription) {
      this.paramsSubscription.unsubscribe();
    }
    if (this.lineHighlighterSubscription) {
      this.lineHighlighterSubscription.unsubscribe();
    }
  }
}
