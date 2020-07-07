import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportComponent } from 'src/app/report/report.component';
import { LeftSideComponent } from 'src/app/layout-logued/left-side/left-side.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./layout-logued/layout-logued.module').then(m => m.LayoutLoguedModule)
  }
];

@NgModule({
  declarations:[
    
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
