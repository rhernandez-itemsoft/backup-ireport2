import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutLoguedComponent } from './layout-logued.component';
import { ReportComponent } from '../report/report.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutLoguedComponent,
    children: [
      { path: '', component: ReportComponent, },
    ]
  }
];

@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  schemas:[
    
  ]
})
export class LayoutLoguedRoutingModule { }
