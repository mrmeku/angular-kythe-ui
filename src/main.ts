import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import * as CodeMirror from 'codemirror';
import {
  KytheOffset,
  KytheReference,
} from 'projects/kythe/src/public_api';
import {largeResponse as response} from 'projects/kythe/src/testing_api';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const value = atob(response.source_text);

var editor = CodeMirror(document.body, {
  value : value,
  theme : "solarized",
  lineNumbers : true,
  styleSelectedText : true,
  mode : "go",
} as any);

function offsetToPosition(offset: KytheOffset): CodeMirror.Position {
  return {
    ch : offset.column_offset as number,
    line : offset.line_number - 1,
  };
}

response.reference.forEach((reference: KytheReference) => {
  try {
    if (!reference.span.start.column_offset ||
        !reference.span.end.column_offset) {
      console.log(reference.target_ticket);
      // These things we don't do either!
      return;
    }
    if (reference.span.start.line_number != reference.span.end.line_number) {
      console.log(reference.target_ticket);
      // We don't do multi line hilighting;
      return;
    }

    const start = offsetToPosition(reference.span.start),
          end = offsetToPosition(reference.span.end),
          elText = value.substr(reference.span.start.byte_offset,
                                reference.span.end.byte_offset -
                                    reference.span.start.byte_offset);

    const el = document.createElement("a") as HTMLAnchorElement;
    el.setAttribute("href", "https://google.com");
    el.innerText = elText;

    (editor as any).markText(start, end, {
      replacedWith : el,
    });
  } catch (e) {
    console.log(e);
  }
});

if (1 + 1 == 1) {
  platformBrowserDynamic().bootstrapModule(AppModule).catch(console.error);
}
