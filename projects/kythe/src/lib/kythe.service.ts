import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

interface CorpusRoot {
  name: string;
  root: string[];
}

interface CorpusRootResponse {
  corpus: CorpusRoot[];
}

@Injectable({
  providedIn: "root"
})
export class KytheService {
  corpusRoots(): Observable<CorpusRoot[]> {
    return this.http
      .get<CorpusRootResponse>("/api/corpusRoots")
      .pipe(map(response => response.corpus));
  }

  constructor(private readonly http: HttpClient) {}
}
