import { Component, OnInit } from '@angular/core';
import { FileTreeDataSource, DynamicFlatNode } from './file-tree.data-source';
import { FlatTreeControl } from '@angular/cdk/tree';
import { KytheService } from '@angular-kythe-ui/kythe';

@Component({
  selector: 'lib-file-tree',
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
