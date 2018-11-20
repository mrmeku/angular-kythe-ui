import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { GetDecorationsRequest } from './get-decorations-request';
import {
  CorpusRootResponse,
  DirRequest,
  KytheDecoration,
  KytheUri
} from './kythe.declarations';
import { KytheTarget } from './kythe.target';

const baseUrl =
  'https://cors-anywhere.herokuapp.com/xrefs-dot-kythe-repo.appspot.com';

export interface DirResponse {
  file?: KytheUri[];
  subdirectory?: KytheUri[];
}

@Injectable({ providedIn: 'root' })
export class KytheService {
  corpusRoots(): Observable<KytheTarget[]> {
    return this.http
      .get<CorpusRootResponse>(baseUrl + '/corpusRoots')
      .pipe(map(response => response.corpus.map(KytheTarget.fromCorpusRoot)));
  }

  dir(target: KytheTarget): Observable<KytheTarget[]> {
    const dirRequest: DirRequest = {
      corpus: target.corpus,
      root: null,
      path: target.path
    };
    return this.http.post<DirResponse>(baseUrl + '/dir', dirRequest).pipe(
      map(response => {
        return [...(response.subdirectory || []), ...(response.file || [])].map(
          uri => new KytheTarget(uri)
        );
      })
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
