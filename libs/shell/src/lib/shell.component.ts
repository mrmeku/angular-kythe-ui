import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, startWith, tap } from 'rxjs/operators';

@Component({
  selector: 'angular-kythe-ui-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));

  constructor(
    private readonly breakpointObserver: BreakpointObserver,
    private readonly router: Router,
    private readonly titleService: Title
  ) {}

  readonly filePath$ = this.router.events.pipe(
    filter((e): e is NavigationEnd => e instanceof NavigationEnd),
    map(e => {
      const u = new URL(`http://foo/${e.url}`);
      return u.pathname.substr(2);
    }),
    tap(u => this.titleService.setTitle(`Angular Kythe UI - ${u}`))
  );
}
