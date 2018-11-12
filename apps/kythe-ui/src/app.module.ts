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
    RouterModule.forRoot([])
  ],
  bootstrap: [ShellComponent]
})
export class AppModule {}
