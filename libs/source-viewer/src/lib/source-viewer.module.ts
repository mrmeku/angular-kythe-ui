import { CodeMirrorModule } from '@angular-kythe-ui/code-mirror';
import { FileTreeModule } from '@angular-kythe-ui/file-tree';
import { KytheModule } from '@angular-kythe-ui/kythe';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import {
  Route,
  RouterModule,
  UrlMatchResult,
  UrlSegment
} from '@angular/router';

import { SourceViewerComponent } from './source-viewer.component';

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

export const routes: Route[] = [
  {
    component: SourceViewerComponent,
    matcher
  }
];

@NgModule({
  imports: [
    FileTreeModule,
    KytheModule,
    CodeMirrorModule,
    CommonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SourceViewerComponent]
})
export class SourceViewerModule {}
