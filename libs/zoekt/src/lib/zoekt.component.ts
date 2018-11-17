import { AfterViewInit, Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { ZoektService } from './zoekt.service';

@Component({
  selector: 'angular-kythe-ui-shell',
  templateUrl: './zoekt.component.html',
  styleUrls: ['./zoekt.component.scss']
})
export class ZoektComponent implements AfterViewInit {
  constructor(
    private readonly zoektService: ZoektService,
    private readonly titleService: Title
  ) {}

  readonly searchResult$ = this.zoektService.search({
    query: 'ExtractToFile',
    restrict: [{ repo: 'kythe', branches: ['master'] }]
  });

  ngAfterViewInit() {
    this.titleService.setTitle('Search: vnameRuleFile');
  }

  trackBy(index, item) {
    return index;
  }
}
