import { ShellComponent, ShellModule } from '@angular-kythe-ui/shell';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

@NgModule({
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
  bootstrap: [ShellComponent]
})
export class AppModule {}
