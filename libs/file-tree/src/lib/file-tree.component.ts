import { KytheService } from '@angular-kythe-ui/kythe';
import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';

import { DynamicFlatNode } from './dynamic-flat-node';
import { FileTreeDataSource } from './file-tree.data-source';

@Component({
  selector: 'angular-kythe-ui-file-tree',
  templateUrl: 'file-tree.component.html',
  styleUrls: ['file-tree.component.scss']
})
export class FileTreeComponent implements OnInit {
  treeControl = new FlatTreeControl<DynamicFlatNode>(
    this.getLevel,
    this.hasChild
  );
  dataSource = new FileTreeDataSource(this.treeControl, this.kytheService);

  constructor(private readonly kytheService: KytheService) {}

  ngOnInit() {}

  getLevel(dynamicFlatNode: DynamicFlatNode): number {
    return dynamicFlatNode.kytheTarget.depth;
  }

  hasChild() {
    return true;
  }
}
