import { NgModule } from '@angular/core';
import { FileTreeComponent } from './file-tree.component';
import {
  MatTreeModule,
  MatIconModule,
  MatButtonModule
} from '@angular/material';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [FileTreeComponent],
  imports: [
    MatButtonModule,
    CommonModule,
    MatTreeModule,
    MatIconModule
  ],
  exports: [FileTreeComponent]
})
export class FileTreeModule {}
