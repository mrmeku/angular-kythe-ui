import { KytheModule } from '@angular-kythe-ui/kythe';
import { CommonModule } from '@angular/common';
import { InjectionToken, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatProgressSpinnerModule } from '@angular/material';
import { Route, UrlMatchResult, UrlSegment } from '@angular/router';
import * as CodeMirror from 'codemirror';

import { CodeMirrorComponent } from './code-mirror.component';

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
  imports: [
    KytheModule,
    MatProgressSpinnerModule,
    FlexLayoutModule,
    CommonModule
  ],
  declarations: [CodeMirrorComponent],
  exports: [CodeMirrorComponent]
})
export class CodeMirrorModule {}
