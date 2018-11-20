import { KytheModule, KytheService } from '@angular-kythe-ui/kythe';
import { ShellComponent, ShellModule } from '@angular-kythe-ui/shell';
import { SourceViewerModule } from '@angular-kythe-ui/source-viewer';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { MockKytheService } from './mock-kythe-service';

@NgModule({
  imports: [
    SourceViewerModule,
    BrowserModule,
    BrowserAnimationsModule,
    ShellModule,
    KytheModule,
    RouterModule.forRoot([])
  ],
  providers: [{ provide: KytheService, useValue: new MockKytheService() }],
  bootstrap: [ShellComponent]
})
export class AppModule {}
