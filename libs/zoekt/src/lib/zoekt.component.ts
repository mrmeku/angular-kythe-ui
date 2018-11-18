import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { ZoektSearchResponse } from './zoekt.declarations';
import { ZoektService } from './zoekt.service';

@Component({
  selector: 'angular-kythe-ui-shell',
  templateUrl: './zoekt.component.html',
  styleUrls: ['./zoekt.component.scss']
})
export class ZoektComponent implements OnInit, AfterViewInit {
  constructor(
    private readonly zoektService: ZoektService,
    private readonly titleService: Title,
    private readonly activeRoute: ActivatedRoute
  ) {}

  searchResults: Observable<ZoektSearchResponse>;

  ngOnInit() {
    this.activeRoute.queryParamMap
      .pipe(
        map(q => q.get('query')),
        map(query =>
          this.zoektService.search({
            query,
            restrict: [{ repo: 'kythe', branches: ['master'] }]
          })
        )
      )
      .subscribe(r => {
        //
        this.searchResults = r;
      });
  }

  ngAfterViewInit() {
    this.titleService.setTitle('Search: vnameRuleFile');
  }

  trackBy(index, item) {
    return index;
  }
}
