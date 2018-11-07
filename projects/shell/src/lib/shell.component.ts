import { Component, OnInit } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { KytheService } from "projects/kythe/src/public_api";

@Component({
  selector: "lib-shell",
  templateUrl: "./shell.component.html",
  styleUrls: ["./shell.component.scss"]
})
export class ShellComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));

  constructor(
    private breakpointObserver: BreakpointObserver,
    private readonly kytheService: KytheService
  ) {}

  ngOnInit() {
    this.kytheService.corpusRoots().subscribe(
      res => {
        debugger;
        console.log(res);
      },
      err => {
        debugger;
        console.log(err);
      }
    );
  }
}
