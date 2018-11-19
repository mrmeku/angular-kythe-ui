import { KytheTarget } from '@angular-kythe-ui/kythe';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { merge, Observable, Subject } from 'rxjs';
import {
  distinctUntilChanged,
  first,
  map,
  shareReplay,
  tap
} from 'rxjs/operators';

@Component({
  selector: 'angular-kythe-ui-source-viewer',
  templateUrl: './source-viewer.component.html',
  styleUrls: ['./source-viewer.component.scss']
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class SourceViewerComponent {
  private readonly filePath$ = this.activatedRoute.paramMap.pipe(
    map(paramMap => paramMap.get('path') || ''),
    distinctUntilChanged(),
    tap(u => this.titleService.setTitle(`Angular Kythe UI - ${u}`)),
    shareReplay()
  );

  readonly filePathParts$ = this.filePath$.pipe(
    map(path =>
      path.split('/').reduce((parts, part, index) => {
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
      const [corpus, ...pathParts] = path.split('/');
      return KytheTarget.fromCorpusAndPath({
        corpus,
        path
      });
    })
  );

  readonly userSetRootSubject = new Subject<KytheTarget>();

  readonly fileTreeRoot$ = merge(
    this.kytheTarget$.pipe(first()),
    this.userSetRootSubject
  ).pipe(
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
    private readonly activatedRoute: ActivatedRoute,
    private readonly breakpointObserver: BreakpointObserver,
    private readonly router: Router,
    private readonly titleService: Title
  ) {}

  setRootTarget(url: string) {
    const root = KytheTarget.fromUrl(url);
    this.userSetRootSubject.next(root);
  }

  setRootAsParent({ corpus, filePathParts }: KytheTarget) {
    const path = filePathParts.slice(0, filePathParts.length - 1).join('/');
    const root = KytheTarget.fromCorpusAndPath({
      corpus,
      path
    });
    this.userSetRootSubject.next(root);
    this.router.navigate([`/${path}`]);
  }

  trackBy(_: number, item: { part: string; url: string }) {
    return item.url;
  }
}
