import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { KytheDecoration } from './declarations';

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

interface P {
  corpus: string;
  path: string;
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

  static fromCorpusAndPath({ corpus, path }: P): KytheTarget {
    return new KytheTarget(`kythe://${corpus}?path=${path}`);
  }

  toString() {
    return `kythe://${this.corpus}?path=${this.corpus}%2f${encodeURIComponent(
      this.path
    )}`;
  }
}

export class GetDecorationsRequest {
  constructor(
    readonly location: { ticket: KytheTarget },
    readonly references: boolean,
    readonly source_text: boolean,
    readonly target_definitions: boolean
  ) {}

  static fromTicket(target: KytheTarget): GetDecorationsRequest {
    return new GetDecorationsRequest({ ticket: target }, true, true, true);
  }
}

export type KytheUri = string;

const baseUrl =
  'https://cors-anywhere.herokuapp.com/xrefs-dot-kythe-repo.appspot.com';

export interface DirResponse {
  subdirectory: KytheUri[];
}

@Injectable({ providedIn: 'root' })
export class KytheService {
  corpusRoots(): Observable<KytheTarget[]> {
    return this.http
      .get<CorpusRootResponse>(baseUrl + '/corpusRoots')
      .pipe(map(response => response.corpus.map(KytheTarget.fromCorpusRoot)));
  }

  dir(dirRequest: DirRequest): Observable<KytheTarget[]> {
    return this.http
      .post<DirResponse>(baseUrl + '/dir', dirRequest)
      .pipe(
        map(response => response.subdirectory.map(uri => new KytheTarget(uri)))
      );
  }

  getDecorations(getDecorationsRequest: GetDecorationsRequest) {
    return this.http.post<KytheDecoration>(baseUrl + '/decorations', {
      location: { ticket: getDecorationsRequest.location.ticket.toString() },
      references: true,
      source_text: true,
      target_definitions: true
    });
  }

  constructor(private readonly http: HttpClient) {}
}
