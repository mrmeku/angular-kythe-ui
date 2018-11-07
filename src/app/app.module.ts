import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShellModule } from 'projects/shell/src/public_api';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, ShellModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
