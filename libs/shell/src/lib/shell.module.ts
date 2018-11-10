import { NgModule } from '@angular/core';
import { ShellComponent } from './shell.component';
import {
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatButtonModule,
  MatIconModule
} from '@angular/material';
import { CommonModule } from '@angular/common';
import { KytheModule } from '@angular-kythe-ui/kythe';
import { CodeMirrorModule } from '@angular-kythe-ui/code-mirror';
import { FileTreeModule } from '@angular-kythe-ui/file-tree';

@NgModule({
  declarations: [ShellComponent],
  imports: [
    FileTreeModule,
    KytheModule,
    CodeMirrorModule,
    CommonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule
  ],
  exports: [ShellComponent]
})
export class ShellModule {}
