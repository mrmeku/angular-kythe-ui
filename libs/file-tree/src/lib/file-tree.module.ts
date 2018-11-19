import { KytheModule } from '@angular-kythe-ui/kythe';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatTreeModule
} from '@angular/material';
import { RouterModule } from '@angular/router';

import { FileTreeComponent } from './file-tree.component';

@NgModule({
  declarations: [FileTreeComponent],
  imports: [
    KytheModule,
    MatToolbarModule,
    FlexLayoutModule,
    RouterModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatTreeModule,
    MatIconModule,
    CommonModule,
    MatTreeModule,
    MatIconModule
  ],
  exports: [FileTreeComponent]
})
export class FileTreeModule {}
