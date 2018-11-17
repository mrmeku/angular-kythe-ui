import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import {
  Route,
  RouterModule,
  UrlMatchResult,
  UrlSegment
} from '@angular/router';

import { ZoektComponent } from './zoekt.component';
import { ZoektService } from './zoekt.service';

export const routes: Route[] = [{ path: '', component: ZoektComponent }];

@NgModule({
  providers: [ZoektService],
  declarations: [ZoektComponent],
  imports: [
    HttpClientModule,
    FlexLayoutModule,
    MatCardModule,
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ZoektModule {}
