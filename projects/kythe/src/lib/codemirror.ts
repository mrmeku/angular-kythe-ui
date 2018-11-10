import * as CodeMirror from 'codemirror';
import {
  KytheDecoration,
  KytheOffset,
  KytheReference,
} from './declarations';

function offsetToPosition(offset: KytheOffset): CodeMirror.Position {
  return {
    ch : offset.column_offset as number,
    line : offset.line_number - 1,
  };
}

export function decorate(codeMirror: CodeMirror.Editor,
                         kytheDecoration: KytheDecoration) {

  const value = atob(kytheDecoration.source_text);
  codeMirror.setValue(value);

  kytheDecoration.reference.forEach((reference: KytheReference) => {
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

    (codeMirror as any).markText(start, end, {
      replacedWith : el,
    });
  });
}
