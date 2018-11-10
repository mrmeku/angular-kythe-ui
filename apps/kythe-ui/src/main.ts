import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import * as CodeMirror from 'codemirror';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { decorate, largeResponse } from '@angular-kythe-ui/kythe';

if (environment.production) {
  enableProdMode();
}

const editor = CodeMirror(document.body, {
  theme: 'solarized',
  lineNumbers: true,
  styleSelectedText: true,
  mode: 'go',
  readOnly: 'nocursor'
} as any);

decorate(editor, largeResponse);

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(console.error);
