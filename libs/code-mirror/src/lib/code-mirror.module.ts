import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RouterModule,
  Route,
  UrlMatcher,
  UrlSegment,
  UrlSegmentGroup,
  UrlMatchResult
} from '@angular/router';
import { CodeMirrorComponent } from './code-mirror.component';
import { KytheModule } from '@angular-kythe-ui/kythe';
import * as CodeMirror from 'codemirror';

export function matcher(segments: UrlSegment[]): UrlMatchResult {
  if (segments.length <= 1) {
    return null;
  }
  return {
    consumed: segments,
    posParams: {
      corpus: new UrlSegment(segments[0].toString(), {}),
      path: new UrlSegment(
        segments
          .slice(1)
          .map(s => s.toString())
          .join('/'),
        {}
      )
    }
  };
}

export const codeMirrorRoutes: Route[] = [
  {
    component: CodeMirrorComponent,
    matcher
  }
];

export const CODE_MIRROR_FACTORY = new InjectionToken('CodeMirror');
export type CodeMirrorFactory = (
  host: HTMLElement,
  options?: CodeMirror.EditorConfiguration
) => CodeMirror.Editor;

@NgModule({
  imports: [KytheModule, CommonModule],
  declarations: [CodeMirrorComponent],
  exports: [CodeMirrorComponent]
  // providers: [{ provide: CODE_MIRROR_FACTORY, useFactory: () => CodeMirror }]
})
export class CodeMirrorModule {}
