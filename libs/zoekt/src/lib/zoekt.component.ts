import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';

import {ZoektService} from './zoekt.service';

@Component({
  selector : 'angular-kythe-ui-shell',
  templateUrl : './zoekt.component.html',
  styleUrls : [ './zoekt.component.scss' ]
})
export class ZoektComponent {
  constructor(
      private readonly zoektService: ZoektService,
      private readonly titleService: Title,
  ) {}

  readonly searchResult$ = this.zoektService.search({
    query : "vnameRuleFile",
    restrict: [ {
      repo : "kythe",
      branches:
          [
            "master",
          ],
    } ]
  });

  ngAfterViewInit() { this.titleService.setTitle("Search: vnameRuleFile"); }
}
