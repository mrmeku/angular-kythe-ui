import { KytheTarget } from '@angular-kythe-ui/kythe';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {
  distinctUntilChanged,
  filter,
  map,
  shareReplay,
  startWith,
  tap
} from 'rxjs/operators';

@Component({
  selector: 'angular-kythe-ui-source-viewer',
  templateUrl: './source-viewer.component.html',
  styleUrls: ['./source-viewer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SourceViewerComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.Handset, Breakpoints.Small])
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private readonly breakpointObserver: BreakpointObserver,
    private readonly router: Router,
    private readonly titleService: Title
  ) {}

  readonly filePath$ = this.router.events.pipe(
    filter((e): e is NavigationEnd => e instanceof NavigationEnd),
    map(e => e.urlAfterRedirects),
    startWith(this.router.url),
    map(e => {
      const u = new URL(`http://foo/${e}`);
      return u.pathname.substr(2);
    }),
    filter(p => Boolean(p)),
    distinctUntilChanged(),
    tap(u => this.titleService.setTitle(`Angular Kythe UI - ${u}`)),
    shareReplay()
  );

  readonly kytheTarget$ = this.filePath$.pipe(
    map(path => {
      const [corpus] = path.split('/');
      return KytheTarget.fromCorpusAndPath({
        corpus,
        path
      });
    })
  );
}
