import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

//import { AppMatModule } from '../app-mat.module';

import { LayoutLoguedRoutingModule } from './layout-logued-routing.module';
import { LayoutLoguedComponent } from './layout-logued.component';
import { LeftSideComponent } from './left-side/left-side.component';
import { TopSideComponent } from './top-side/top-side.component';


@NgModule({
  declarations: [
     //LeftSideComponent, 
     TopSideComponent
  ],
  imports: [
    CommonModule,
    LayoutLoguedRoutingModule,
  ],
  exports:[
   
  ],
  providers:[
    
  ],
  schemas:[
    
  ]
})
export class LayoutLoguedModule { }
