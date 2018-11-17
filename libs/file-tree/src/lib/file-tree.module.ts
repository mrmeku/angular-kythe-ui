import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatTreeModule
} from '@angular/material';
import { RouterModule } from '@angular/router';

import { FileTreeComponent } from './file-tree.component';

@NgModule({
  declarations: [FileTreeComponent],
  imports: [
    FlexLayoutModule,
    RouterModule,
    MatProgressSpinnerModule,
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
