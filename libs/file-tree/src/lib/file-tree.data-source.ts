import { KytheService } from '@angular-kythe-ui/kythe';
import { CollectionViewer, SelectionChange } from '@angular/cdk/collections';
import { DataSource } from '@angular/cdk/table';
import { FlatTreeControl } from '@angular/cdk/tree';
import { BehaviorSubject, merge, Observable } from 'rxjs';
import { first, map, tap } from 'rxjs/operators';

import { DynamicFlatNode } from './dynamic-flat-node';

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
      let currentNode = this.data[index + 1];
      while (currentNode && currentNode.level > node.level) {
        count++;
        currentNode = this.data[index + 1 + count];
      }

      if (count) {
        this.data = this.data.filter(
          (_, i) => !Boolean(index + 1 <= i && i < index + 1 + count)
        );
      }
    }
  }

  private getChildren(node: DynamicFlatNode): Observable<DynamicFlatNode[]> {
    return this.kytheService.dir(node.kytheTarget).pipe(
      first(),
      map(kytheTargets =>
        kytheTargets.map(target =>
          DynamicFlatNode.fromKytheTarget(target, node.level + 1)
        )
      )
    );
  }
}
