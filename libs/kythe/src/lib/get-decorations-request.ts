import { KytheTarget } from './kythe.target';

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
