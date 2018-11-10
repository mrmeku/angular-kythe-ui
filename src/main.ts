import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import * as CodeMirror from 'codemirror';
import { decorate } from 'projects/kythe/src/public_api';
import { largeResponse as response } from 'projects/kythe/src/testing_api';
// import {smallResponse as response} from 'projects/kythe/src/testing_api';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

var editor = CodeMirror(document.body, {
  theme: 'solarized',
  lineNumbers: true,
  styleSelectedText: true,
  mode: 'go',
  readOnly: 'nocursor'
} as any);

decorate(editor, response);

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(console.error);
