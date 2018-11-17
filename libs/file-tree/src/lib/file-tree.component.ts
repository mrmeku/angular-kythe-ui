import { KytheService, KytheTarget } from '@angular-kythe-ui/kythe';
import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { DynamicFlatNode } from './dynamic-flat-node';
import { FileTreeDataSource } from './file-tree.data-source';

@Component({
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      state('*', style({ opacity: 1 })),
      transition(`* <=> *`, animate(`300ms ease-in-out`))
    ])
  ],
  selector: 'angular-kythe-ui-file-tree',
  templateUrl: 'file-tree.component.html',
  styleUrls: ['file-tree.component.scss']
})
export class FileTreeComponent implements OnInit {
  dataSource: FileTreeDataSource;

  @Input() rootedAt: KytheTarget;

  readonly loading = new BehaviorSubject(false);

  readonly isExpandable = (node: DynamicFlatNode) =>
    node.kytheTarget.isDirectory;
  readonly hasChild = (_: number, node: DynamicFlatNode) =>
    node.kytheTarget.isDirectory;
  readonly getLevel = (dynamicFlatNode: DynamicFlatNode): number =>
    dynamicFlatNode.kytheTarget.depth -
    this.rootedAt.depth -
    (this.rootedAt.isDirectory ? 1 : 0);
  readonly treeControl = new FlatTreeControl<DynamicFlatNode>(
    this.getLevel,
    this.isExpandable
  );

  constructor(private readonly kytheService: KytheService) {}

  ngOnInit() {
    this.dataSource = new FileTreeDataSource(
      this.treeControl,
      this.kytheService
    );

    const path = this.rootedAt.isDirectory
      ? this.rootedAt.path
      : this.rootedAt.filePathParts
          .slice(0, this.rootedAt.filePathParts.length - 1)
          .join('/');

    this.loading.next(true);
    this.kytheService
      .dir({
        corpus: this.rootedAt.corpus,
        path,
        root: null
      })
      .subscribe(kytheTargets => {
        this.loading.next(false);
        this.dataSource.data = kytheTargets.map(target =>
          DynamicFlatNode.fromKytheTarget(target, target.filePathParts.length)
        );
      });
  }
}
