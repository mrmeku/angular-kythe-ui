/*
 * Public API Surface of kythe
 */

export * from './lib/kythe.service';
export * from './lib/kythe.module';

export * from './lib/kythe.declarations';
export * from './lib/get-decorations-request';
export * from './lib/kythe.target';
export * from './lib/codemirror';

/**
 * Testing API of kythe.
 */

export { response as largeResponse } from './testing/response_large';
export { response as smallResponse } from './testing/response_small';
