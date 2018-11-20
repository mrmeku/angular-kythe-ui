import { CodeMirrorModule } from '@angular-kythe-ui/code-mirror';
import { FileTreeModule } from '@angular-kythe-ui/file-tree';
import { KytheModule } from '@angular-kythe-ui/kythe';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatIconModule,
  MatIconRegistry,
  MatInputModule,
  MatToolbarModule
} from '@angular/material';
import { RouterModule, UrlMatchResult, UrlSegment } from '@angular/router';

import { ShellComponent } from './shell.component';

const SEARCH_PATH = 'search';

export function sourceViewerRouteMatcher(
  segments: UrlSegment[]
): UrlMatchResult | null {
  return !segments[0] || segments[0].path === SEARCH_PATH
    ? null
    : { consumed: [] };
}

@NgModule({
  declarations: [ShellComponent],
  imports: [
    RouterModule.forChild([
      {
        path: SEARCH_PATH,
        loadChildren: '@angular-kythe-ui/zoekt#ZoektModule'
      },
      {
        matcher: sourceViewerRouteMatcher,
        loadChildren: '@angular-kythe-ui/source-viewer#SourceViewerModule'
      },
      { path: '', redirectTo: SEARCH_PATH, pathMatch: 'full' }
    ]),
    FileTreeModule,
    KytheModule,
    CodeMirrorModule,
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    FlexLayoutModule,
    FormsModule
  ],
  exports: [ShellComponent]
})
export class ShellModule {
  constructor(matIconRegistry: MatIconRegistry) {
    matIconRegistry.setDefaultFontSetClass('material-icons-extended');
  }
}
