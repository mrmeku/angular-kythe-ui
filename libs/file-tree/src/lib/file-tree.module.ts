import { NgModule } from '@angular/core';
import { FileTreeComponent } from './file-tree.component';
import {
  MatTreeModule,
  MatIconModule,
  MatButtonModule
} from '@angular/material';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [FileTreeComponent],
  imports: [
    MatButtonModule,
    MatTreeModule,
    MatIconModule,
    CommonModule,
    HttpClientModule,
    MatTreeModule,
    MatIconModule
  ],
  exports: [FileTreeComponent]
})
export class FileTreeModule {}
