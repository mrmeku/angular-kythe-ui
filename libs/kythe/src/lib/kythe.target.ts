import { CorpusAndPath, CorpusRoot, KytheUri } from './kythe.declarations';

export class KytheTarget {
  // kythe-uri    = "kythe:" [corpus] attrs ["#" signature]
  // corpus       = "//" label 0*{"/" path-segment}
  // label        = ireg-name -- RFC 3987
  // attrs        = ["?" lang-attr] ["?" path-attr] ["?" root-attr]
  // lang-attr    = "lang=" language
  // path-attr    = "path=" path-segment 0*{"/" path-segment}
  // root-attr    = "root=" root-segment 0*{"/" root-segment}
  // language     = 1*ipchar  -- RFC 3987
  // signature    = 1*ipchar  -- RFC 3987
  // root-segment = 1*ipchar  -- RFC 3987
  // path-segment = 1*{unreserved | pct-encoded | "/"}  -- RFC 3987

  private readonly url = new URL(this.kytheUri);

  readonly path = this.url.searchParams.get('path') || '';
  readonly filePathParts = this.path.split('/');
  readonly corpus = this.url.pathname.slice(2);
  readonly depth = this.filePathParts.length;
  readonly name = this.filePathParts[this.filePathParts.length - 1];

  readonly isDirectory = this.name.indexOf('.') === -1;

  constructor(readonly kytheUri: KytheUri) {}

  static fromCorpusRoot(corpusRoot: CorpusRoot): KytheTarget {
    const root = corpusRoot.root[0] ? `?root=${corpusRoot.root[0]}` : '';
    return new KytheTarget(`kythe://${corpusRoot.name}${root}`);
  }

  static fromCorpusAndPath({ corpus, path }: CorpusAndPath): KytheTarget {
    return new KytheTarget(`kythe://${corpus}?path=${path}`);
  }

  static fromUrl(url: string) {
    url = url.slice(1);
    const [corpus, ...pathParts] = url.split('/');
    return KytheTarget.fromCorpusAndPath({ corpus, path: url });
  }

  toString() {
    return `kythe://${this.corpus}?path=${this.path}`;
  }
}
