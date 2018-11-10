import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface CorpusRoot {
  name: string;
  root: string[];
}

export interface CorpusRootResponse {
  corpus: CorpusRoot[];
}

export interface DirRequest {
  corpus: string;
  path: string;
  root: null;
}

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

  readonly corpus = this.url.pathname.slice(2);
  readonly path = this.url.searchParams.get('path') || '';
  readonly depth = this.path.split('/').length;

  constructor(readonly kytheUri: KytheUri) {}

  static fromCorpusRoot(corpusRoot: CorpusRoot): KytheTarget {
    const root = corpusRoot.root[0] ? `?root=${corpusRoot.root[0]}` : '';
    return new KytheTarget(`kythe://${corpusRoot.name}${root}`);
  }
}

export type KytheUri = string;

export interface DirResponse {
  subdirectory: KytheUri[];
}

@Injectable({
  providedIn: 'root'
})
export class KytheService {
  corpusRoots(): Observable<KytheTarget[]> {
    return this.http
      .get<CorpusRootResponse>('/api/corpusRoots')
      .pipe(map(response => response.corpus.map(KytheTarget.fromCorpusRoot)));
  }

  dir(dirRequest: DirRequest): Observable<KytheTarget[]> {
    return this.http
      .post<DirResponse>('/api/dir', dirRequest)
      .pipe(
        map(response => response.subdirectory.map(uri => new KytheTarget(uri)))
      );
  }

  constructor(private readonly http: HttpClient) {}
}
