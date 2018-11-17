import {
  CodeMirrorModule,
  codeMirrorRoutes
} from '@angular-kythe-ui/code-mirror';
import {FileTreeModule} from '@angular-kythe-ui/file-tree';
import {KytheModule} from '@angular-kythe-ui/kythe';
import {ZoektModule, zoektRoutes} from '@angular-kythe-ui/zoekt';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import {RouterModule} from '@angular/router';

import {ShellComponent} from './shell.component';

// const routes = RouterModule.forChild(codeMirrorRoutes);
const routes = RouterModule.forChild(zoektRoutes);

@NgModule({
  declarations : [ ShellComponent ],
  imports : [
    routes, FileTreeModule, KytheModule, ZoektModule, CodeMirrorModule,
    CommonModule, MatIconModule, MatSidenavModule, MatToolbarModule,
    MatListModule, MatButtonModule
  ],
  exports : [ ShellComponent ]
})
export class ShellModule {
}
