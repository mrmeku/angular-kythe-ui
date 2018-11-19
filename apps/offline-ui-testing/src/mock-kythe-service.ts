import {
  DirRequest,
  GetDecorationsRequest,
  KytheTarget,
  KytheUri,
  largeResponse
} from '@angular-kythe-ui/kythe';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface DirResponse {
  file?: KytheUri[];
  subdirectory?: KytheUri[];
}

@Injectable({ providedIn: 'root' })
export class MockKytheService {
  corpusRoots(): Observable<KytheTarget[]> {
    return of([]);
  }

  dir(dirRequest: DirRequest): Observable<KytheTarget[]> {
    const subdirectories = new Array(3)
      .fill(null)
      .map(
        (_, i) =>
          new KytheTarget(`kythe://corpus?path=${dirRequest.path}/dir-${i}`)
      );
    const files = new Array(3)
      .fill(null)
      .map(
        (_, i) =>
          new KytheTarget(`kythe://corpus?path=${dirRequest.path}/file-${i}.go`)
      );

    return of([...subdirectories, ...files]);
  }

  getDecorations(_: GetDecorationsRequest) {
    return of(largeResponse);
  }
}
