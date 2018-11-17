import { KytheModule } from '@angular-kythe-ui/kythe';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatProgressSpinnerModule } from '@angular/material';

import { CodeMirrorComponent } from './code-mirror.component';

@NgModule({
  imports: [
    KytheModule,
    MatProgressSpinnerModule,
    FlexLayoutModule,
    CommonModule
  ],
  declarations: [CodeMirrorComponent],
  exports: [CodeMirrorComponent]
})
export class CodeMirrorModule {}
