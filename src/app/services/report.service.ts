import { Injectable, ComponentFactoryResolver, ApplicationRef,  Injector,  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';


import { SheetSectionService } from 'src/app/services/sheetSection.service';
import { SheetOptionsService } from 'src/app/services/sheetOptionsService';
import { ControlsService } from 'src/app/services/controlsService';
import { CtrlAttached } from 'src/app/models/CtrlAttached';

import { ControlsBase } from 'src/app/base/controls.base';


@Injectable({ providedIn: 'root' })
export class ReportService extends  ControlsBase  {
    //contenedor de todos los controles que vamos agregando
    ctrlsAttached: CtrlAttached[] = [];

    constructor(
        private sectionService: SheetSectionService,
        private sheetOptionService: SheetOptionsService,
        public controlsService: ControlsService,
        public appRef: ApplicationRef,
        public componentFactoryResolver: ComponentFactoryResolver,
        public injector: Injector,
        private http: HttpClient
    ) {
        super(controlsService, appRef, componentFactoryResolver, injector);
     }
   
    preview(params:any):any{
        console.log(this.ctrlsAttached);
        //return this.http.post(`${environment.getUrl('/report/preview')}`, params);
    }
}