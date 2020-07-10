import { Injectable, ComponentFactoryResolver, ApplicationRef,  Injector,  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';


import { SheetSectionService } from 'src/app/old/services/sheetSection.service';
import { SheetOptionsService } from 'src/app/old/services/sheetOptionsService';
import { ControlsService } from 'src/app/old/services/controlsService';
import { CtrlAttached } from 'src/app/old/models/CtrlAttached';

import { ControlsBase } from 'src/app/old/base/controls.base';


@Injectable({ providedIn: 'root' })
export class ReportOldService extends  ControlsBase  {
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