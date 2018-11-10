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

@NgModule({
  declarations: [ShellComponent],
  imports: [
    KytheModule,
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
