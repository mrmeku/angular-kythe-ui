import { CollectionViewer, SelectionChange } from '@angular/cdk/collections';
import { DataSource } from '@angular/cdk/table';
import { FlatTreeControl } from '@angular/cdk/tree';
import { BehaviorSubject, merge, Observable } from 'rxjs';
import { first, map, tap } from 'rxjs/operators';
import { KytheTarget, KytheService } from '@angular-kythe-ui/kythe';

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

export class FileTreeDataSource extends DataSource<DynamicFlatNode> {
  dataChange = new BehaviorSubject<DynamicFlatNode[]>([]);

  get data(): DynamicFlatNode[] {
    return this.dataChange.value;
  }
  set data(value: DynamicFlatNode[]) {
    this.treeControl.dataNodes = value;
    this.dataChange.next(value);
  }

  constructor(
    private readonly treeControl: FlatTreeControl<DynamicFlatNode>,
    private readonly kytheService: KytheService
  ) {
    super();
  }

  connect(collectionViewer: CollectionViewer): Observable<DynamicFlatNode[]> {
    this.kytheService.corpusRoots().subscribe(kytheTargets => {
      this.data = kytheTargets.map(target =>
        DynamicFlatNode.fromKytheTarget(target, 0)
      );
    });

    if (!this.treeControl.expansionModel.changed) {
      throw new Error('Tree control does not have change handler');
    }

    this.treeControl.expansionModel.changed.subscribe(change => {
      if (change.added || change.removed) {
        this.handleTreeControl(change);
      }
    });

    return merge(collectionViewer.viewChange, this.dataChange).pipe(
      map(() => this.data)
    );
  }

  disconnect() {}

  /** Handle expand/collapse behaviors */
  handleTreeControl(change: SelectionChange<DynamicFlatNode>) {
    if (change.added) {
      change.added.forEach(node => this.toggleNode(node, true));
    }
    if (change.removed) {
      change.removed
        .slice()
        .reverse()
        .forEach(node => this.toggleNode(node, false));
    }
  }

  toggleNode(node: DynamicFlatNode, expand: boolean) {
    let index = this.data.indexOf(node);
    if (index < 0) {
      return;
    }

    node.isLoading.next(true);

    if (expand) {
      this.getChildren(node)
        .pipe(tap(() => node.isLoading.next(true)))
        .subscribe(children => {
          node.isLoading.next(false);
          index = this.data.indexOf(node);
          this.data = [
            ...this.data.slice(0, index + 1),
            ...children,
            ...this.data.slice(index + 1, this.data.length)
          ];
        });
    } else {
      let count = 0;
      for (
        let i = index + 1;
        i < this.data.length && this.data[i].level > node.level;
        i++, count++
      ) {}

      if (count) {
        this.data = this.data.filter(
          (_, i) => !Boolean(index + 1 <= i && i < index + 1 + count)
        );
      }
    }
  }

  private getChildren(node: DynamicFlatNode): Observable<DynamicFlatNode[]> {
    return this.kytheService
      .dir({
        corpus: node.kytheTarget.corpus,
        path: node.kytheTarget.path,
        root: null
      })
      .pipe(
        first(),
        map(kytheTargets => kytheTargets.map(DynamicFlatNode.fromKytheTarget))
      );
  }
}
