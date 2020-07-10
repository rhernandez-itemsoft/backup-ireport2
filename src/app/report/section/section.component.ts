import {  Component,  OnInit,  Input,  Output,  ComponentFactoryResolver,  ApplicationRef,  Injector,  Type, EventEmitter} from '@angular/core';
import { SheetSectionService } from 'src/app/services/sheetSection.service';
import { SheetOptionsService } from 'src/app/services/sheetOptionsService';
import { ControlsService } from 'src/app/services/controlsService';
import { CtrlAttached } from 'src/app/models/CtrlAttached';

import { ControlsBase } from 'src/app/base/controls.base';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent extends  ControlsBase implements OnInit {
  @Input() sectionName: string = '';
  @Input() label: string = '';
  
  activeStyle: string = 'inactive';

  @Input() activeDefault: boolean = false;

  //contenedor de todos los controles que vamos agregando
  ctrlsAttached: CtrlAttached[] = [];

  constructor(
    private sectionService: SheetSectionService,
    private sheetOptionService: SheetOptionsService,
    public controlsService: ControlsService,
    public appRef: ApplicationRef,
    public componentFactoryResolver: ComponentFactoryResolver,
    public injector: Injector,
  ) {
    super(controlsService, appRef, componentFactoryResolver, injector);
    
  }

  ngOnInit(): void {
    if (this.activeDefault) {
      this.activeStyle = 'active';
    }

    this.getOnChangeActive();

    this.getOnChangeSheetOptions();

    this.catchNewControl();
    
    this.getWidthHeight();
  }

  getWidthHeight(){
    let contenedor = document.getElementById('container');
  }
  //detecta cuando la seccion está activa
  //esto permite mostrar activa o inactiva la regla
  getOnChangeActive() {
    this.sectionService.getSectionName.subscribe((_sectionName) => {
      if (_sectionName == this.sectionName) {
        this.activeStyle = 'active';
      }else if(_sectionName!=''){
        this.activeStyle = 'inactive';
      }
    });
  }

  //detecta cuando alguna opcion de la hoja del reporte ha cambiado
  getOnChangeSheetOptions() {
    this.sheetOptionService.getOptions.subscribe((options) => {
     
    });
  }

  activateThis() {
    if (this.sectionName != '') {
      this.sectionService.setSectionName(this.sectionName);
    }
  }

  //detecta cuando se quiere agregar un nuevo control
  catchNewControl() {
    this.controlsService.getNewTypeControl.subscribe((_typeControl) => {
      let _ctrl:any = this.getObjControl(_typeControl);
      const newCtrl = this.prepareNewControl(_ctrl, this.ctrlsAttached.length, this.sectionName );

      if (newCtrl!=null && this.activeStyle == 'active' && newCtrl.pageSection != this.sectionName ) {
        this.addComponent(newCtrl.component, newCtrl.ctrl, this.sectionName);
      }

    });
  }

  currentIndex: any;
  onClick(event){
    if (event.toElement.id == 'container'){
      //this.controlsService.setCurrentControl({ index: -1, container: 'nothing'});
      this.currentControlProperties.emit(null); 
    }
    
    // console.log(event.toElement.id);
  }
}
