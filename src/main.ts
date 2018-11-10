import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import * as CodeMirror from 'codemirror';
import {
  KytheDecoration,
  KytheOffset,
  KytheReference,
} from 'projects/kythe/src/public_api';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';
import {response as response2} from './response2';

if (environment.production) {
  enableProdMode();
}

const smallResponse: KytheDecoration = {
  "location" : {
    "ticket" :
        "kythe://kythe.io?path=kythe.io%2Fkythe%2Fgo%2Findexer%2Ftestdata%2Fmeta.go"
  },
  "source_text" :
      "cGFja2FnZSBtZXRhCgpmdW5jIEZvb2JhcigpIHt9Ci8vICAgXiAgICAgXiBvZmZzZXQgMjUKLy8gICBcIG9mZnNldCAxOQoKLy8gTm90ZTogVGhlIGxvY2F0aW9ucyBpbiB0aGlzIGZpbGUgYXJlIGNvbm5lY3RlZCB0byB0aGUgb2Zmc2V0cyBkZWZpbmVkIGluIHRoZQovLyBhc3NvY2lhdGVkIG1ldGEgZmlsZS4gSWYgeW91IG1vdmUgYW55dGhpbmcgYWJvdmUgdGhpcyBjb21tZW50IHdpdGhvdXQKLy8gdXBkYXRpbmcgdGhlIG1ldGFkYXRhLCB0aGUgdGVzdCBtYXkgYnJlYWsuCgovLy0gRkEubm9kZS9raW5kIGFuY2hvcgovLy0gRkEubG9jL3N0YXJ0IDE5Ci8vLSBGQS5sb2MvZW5kICAgMjUKLy8tIEZBIGRlZmluZXMvYmluZGluZyBGb29iYXIKLy8tIEZvb2Jhci5ub2RlL2tpbmQgZnVuY3Rpb24KLy8tIEFsdD12bmFtZShnc2lnLCBnY29ycCwgZ3Jvb3QsIGdwYXRoLCBnbGFuZykgZ2VuZXJhdGVzIEZvb2Jhcgo=",
  "reference" : [
    {
      "target_ticket" : "kythe://kythe?lang=go#package",
      "kind" : "/kythe/edge/defines/binding",
      "span" : {
        "start" : {"byte_offset" : 8, "line_number" : 1, "column_offset" : 8},
        "end" : {"byte_offset" : 12, "line_number" : 1, "column_offset" : 12}
      }
    },
    {
      "target_ticket" : "kythe://kythe?lang=go#func%20Foobar",
      "kind" : "/kythe/edge/defines",
      "span" : {
        "start" : {"byte_offset" : 14, "line_number" : 3},
        "end" : {"byte_offset" : 30, "line_number" : 3, "column_offset" : 16}
      }
    },
    {
      "target_ticket" : "kythe://kythe?lang=go#func%20Foobar",
      "kind" : "/kythe/edge/defines/binding",
      "span" : {
        "start" : {"byte_offset" : 19, "line_number" : 3, "column_offset" : 5},
        "end" : {"byte_offset" : 25, "line_number" : 3, "column_offset" : 11}
      }
    }
  ]
};

const response = false ? smallResponse : response2;

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
