import { KytheTarget } from '@angular-kythe-ui/kythe';
import { BehaviorSubject } from 'rxjs';

export class DynamicFlatNode {
  isLoading: BehaviorSubject<boolean>;

  constructor(
    readonly kytheTarget: KytheTarget,
    readonly name: string,
    readonly level: number,
    isLoading: boolean = false
  ) {
    this.isLoading = new BehaviorSubject(isLoading);
  }

  static fromKytheTarget(kytheTarget: KytheTarget, level: number) {
    return new DynamicFlatNode(kytheTarget, kytheTarget.corpus, level);
  }
}
