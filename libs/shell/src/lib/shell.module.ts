import { NgModule } from '@angular/core';
import { RouterModule, UrlMatchResult, UrlSegment } from '@angular/router';

import { ShellComponent } from './shell.component';

const SEARCH_PATH = 'search';

export function sourceViewerRouteMatcher(
  segments: UrlSegment[]
): UrlMatchResult | null {
  return !segments[0] || segments[0].path === SEARCH_PATH
    ? null
    : {
        consumed: []
      };
}

@NgModule({
  declarations: [ShellComponent],
  imports: [
    RouterModule.forChild([
      {
        path: SEARCH_PATH,
        // loadChildren: './customers/customers.module#CustomersModule'
        redirectTo: '',
        pathMatch: 'full'
      },
      {
        matcher: sourceViewerRouteMatcher,
        loadChildren: '@angular-kythe-ui/source-viewer#SourceViewerModule'
      },
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
      }
    ])
  ],
  exports: [ShellComponent]
})
export class ShellModule {}
