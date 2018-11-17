import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {
  ZoektSearchRequest,
  ZoektSearchResponse,
} from './zoekt.declarations';

const baseUrl = '/zoekt';

@Injectable({providedIn : 'root'})
export class ZoektService {
  search(zoektSearchRequest: ZoektSearchRequest) {
    return this.http.post<ZoektSearchResponse>(
        baseUrl + '/api/search', zoektSearchRequest, {
          headers : {
            "Content-Type" : "application/json; charset=utf-8",
          },
        });
  }

  constructor(private readonly http: HttpClient) {}
}
