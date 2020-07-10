import { Component, OnInit } from '@angular/core';
import { LeftSideComponent} from './left-side/left-side.component';


@Component({
  selector: 'app-layout-logued',
  templateUrl: './layout-logued.component.html',
  styleUrls: ['./layout-logued.component.scss'],
  entryComponents:[LeftSideComponent],
})
export class LayoutLoguedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
