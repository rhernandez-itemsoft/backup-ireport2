import { NgModule,NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutLoguedRoutingModule } from './layout-logued-routing.module';

import { ReportComponent } from 'src/app/report/report.component';
import { LeftSideComponent } from 'src/app/layout-logued/left-side/left-side.component';


@NgModule({
  exports:[
  ],
  declarations:[
    
  ],
  imports: [
    CommonModule,
    LayoutLoguedRoutingModule,
  ],
  bootstrap: [
  ],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ]

})
export class LayoutLoguedModule { }
