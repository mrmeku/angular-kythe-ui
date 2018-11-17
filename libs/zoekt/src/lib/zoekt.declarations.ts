export interface ZoektSearchRequest {
  query: string;
  restrict: ZoektSearchRequestRestriction[];
}

export interface ZoektSearchRequestRestriction {
  repo: string;
  branches: string[];
}

export interface ZoektSearchResponse {
  Files: ZoektSearchResponseFile[];
  Error: string | null;
}

export interface ZoektSearchResponseFile {
  Repo: string;
  Branches: string[];
  FileName: string;
  Lines: ZoektSearchResponseLine[];
}

export interface ZoektSearchResponseLine {
  LineNumber: number;
  Line: string;
  Matches: ZoektSearchResponseMatch[];
}

export interface ZoektSearchResponseMatch {
  Start: number;
  End: number;
}
