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

export type KythTarget = string;

export interface DirResponse {
  subdirectory: KythTarget[];
}

@Injectable({
  providedIn: 'root'
})
export class KytheService {
  corpusRoots(): Observable<CorpusRoot[]> {
    return this.http
      .get<CorpusRootResponse>('/api/corpusRoots')
      .pipe(map(response => response.corpus));
  }

  dir(dirRequest: DirRequest): Observable<KythTarget[]> {
    return this.http
      .post<DirResponse>('/api/dir', dirRequest)
      .pipe(map(response => response.subdirectory));
  }

  constructor(private readonly http: HttpClient) {}
}
