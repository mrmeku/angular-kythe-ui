import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { CodeMirrorComponent } from './code-mirror.component';

export const codeMirrorRoutes: Route[] = [];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [CodeMirrorComponent],
  exports: [CodeMirrorComponent]
})
export class CodeMirrorModule {}
