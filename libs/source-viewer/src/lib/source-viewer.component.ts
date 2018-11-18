import { KytheTarget } from '@angular-kythe-ui/kythe';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { merge, Observable, Subject } from 'rxjs';
import {
  distinctUntilChanged,
  filter,
  first,
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
  private readonly filePath$ = this.router.events.pipe(
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

  readonly filePathParts$ = this.filePath$.pipe(
    map(url =>
      url.split('/').reduce((parts, part, index) => {
        parts.push({
          part,
          url: index === 0 ? `/${part}` : `${parts[index - 1].url}/${part}`
        });
        return parts;
      }, [])
    )
  );

  readonly kytheTarget$ = this.filePath$.pipe(
    map(path => {
      const parts = path.split('/');
      return KytheTarget.fromCorpusAndPath({
        corpus: parts[0],
        path: parts.slice(1).join('/')
      });
    })
  );

  readonly userSetRootSubject = new Subject<KytheTarget>();

  readonly fileTreeRoot$ = merge(
    this.kytheTarget$.pipe(first()),
    this.userSetRootSubject
  ).pipe(
    map(target => {
      if (!target.isDirectory) {
        return KytheTarget.fromCorpusAndPath({
          corpus: target.corpus,
          path: target.path.slice(0, target.path.lastIndexOf('/'))
        });
      }
      return target;
    }),
    distinctUntilChanged((a, b) => a.corpus === b.corpus && a.path === b.path),
    shareReplay()
  );

  readonly isHandset$: Observable<boolean> = this.breakpointObserver
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

  setRootTarget(url: string) {
    const root = KytheTarget.fromUrl(url);
    this.userSetRootSubject.next(root);
  }

  trackBy(_: number, item: { part: string; url: string }) {
    return item.url;
  }
}
