import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { ReportComponent } from 'src/app/report/report.component';
import { LeftSideComponent } from 'src/app/layout-logued/left-side/left-side.component';


const routes: Routes = [
  {
    path: '',
    component: ReportComponent,
  }
];

@NgModule({
  declarations: [
    LeftSideComponent
  ],
  imports: [
    LeftSideComponent,
    RouterModule.forChild(routes)
  ],
  exports: [
    LeftSideComponent,
    RouterModule,
    
  ],
  bootstrap:[],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ]
})
export class LayoutLoguedRoutingModule { }
