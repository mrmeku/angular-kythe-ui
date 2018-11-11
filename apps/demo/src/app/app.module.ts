import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShellModule } from '@angular-kythe-ui/shell';
import { RouterModule } from '@angular/router';

@NgModule({
  exports: [AppComponent],
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ShellModule,
    RouterModule.forRoot([
      {
        path: '',
        pathMatch: 'prefix',
        redirectTo:
          'kythe.io/kythe/go/extractors/cmd/bazel/bazel_go_extractor.go'
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
