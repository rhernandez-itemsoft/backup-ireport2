import { Injectable, EventEmitter, Type, Output } from '@angular/core';
import {
    Component, OnInit, NgZone, ChangeDetectionStrategy, Renderer2, ElementRef, ViewChild,
    ViewContainerRef, ComponentFactoryResolver,
    ApplicationRef, ComponentRef, EmbeddedViewRef, Injector,  ChangeDetectorRef, ɵCodegenComponentFactoryResolver, ComponentFactory, Input
  
  } from '@angular/core';

import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Ctrl, CtrlLabel, CtrlInput, CtrlImage, CtrlTable, CtrlChart, CtrlBarCode } from 'src/app/models/ctrl-object';
import { CtrlObjStyles } from 'src/app/models/ctrl-obj-styles';
import { InputComponent } from 'src/app/report/controls/input/input.component';
import { CtrlAttached } from 'src/app/models/CtrlAttached';
import { HtmlContainer } from 'src/app/models/HtmlContainer';
import { ControlsService } from 'src/app/services/controlsService';

export class ControlsBase {
  // @Input() sectionName: string = '';
  // activeStyle: string = 'inactive';

  constructor( 
    public controlsService: ControlsService,
    public appRef: ApplicationRef,
    public componentFactoryResolver: ComponentFactoryResolver,
    public injector: Injector,
  ) {
   
  }

  //contenedor de todos los controles que vamos agregando
  ctrlsAttached: CtrlAttached[] = [];

  private control: BehaviorSubject<Ctrl> = new BehaviorSubject(null);
  getControl = this.control.asObservable();
  newControl(_typeControl: any) {
    this.control.next(this.initControlObject(_typeControl));
  }

  private initControlObject(_typeControl): Ctrl {
    return  new Ctrl();
  }

  private config(ctrl: Ctrl, siezeContainer: number, section: string): Ctrl{
    if (!ctrl){
        return null;
    }
    
    ctrl.name = ctrl.type.substring(0, 1).toUpperCase() + ctrl.type.substring(1, ctrl.type.length - 1) + siezeContainer;
  
    ctrl.container.name = section;
    return ctrl;
  }

  prepareNewControl(ctrl: any, siezeContainer: number, section: string): any{
    if (!ctrl){
        return null;
    }

    //configura el control
    ctrl = this.config(ctrl,siezeContainer, section);

    //crea las propiedades del control, para el tipo especificado por el left panel
    switch (ctrl.type) {
      case 'input': {
        ctrl = <CtrlInput>ctrl;
        ctrl.data =  ctrl.name;
        break;
      }
    };
   
    return {ctrl: ctrl, component: this.returnTypeComponent( InputComponent ) };
  }

  //es necesario este pequeño truco para que pueda retornar el objeto adecuado
  private returnTypeComponent(component: Type<any>){
   return component;
  }

  getObjControl(_typeControl:string) : any{
    let _ctrl: any = null;
      
    if (_typeControl == 'input'){
      _ctrl = new CtrlInput();
    }

    return _ctrl;
  }

  //Agrega el componente adecuado, en su momento debemos acomodar esto para que acepte mas componentes, no solo InputComponent
  addComponent(component: Type<InputComponent>, _newCtrl: CtrlInput, sectionName:string) {
    const containerClassName = 'rpt-container-' + sectionName;

    let contenedor = <HTMLElement>document.getElementById(sectionName);
    contenedor = <HTMLElement>(
      contenedor.getElementsByClassName('rpt-container')[0]
    );

    contenedor = <HTMLElement>(
      contenedor.getElementsByClassName(containerClassName)[0]
    );

    let htmlContainer: HtmlContainer = new HtmlContainer(
      contenedor,
      this.appRef,
      this.componentFactoryResolver,
      this.injector
    );

    let _componentRef = htmlContainer.attach(component);
    let ctrlAttached: CtrlAttached = new CtrlAttached(
      htmlContainer,
      _componentRef,
      component
    );

    if (ctrlAttached.componentRef != null) {
      _newCtrl.container.name = sectionName; //this.sectionName;
      _newCtrl.container.width = contenedor.offsetWidth;
      _newCtrl.container.height = contenedor.offsetHeight;
      //crea las propiedades del control, para el tipo especificado por el left panel
      ctrlAttached.componentRef.instance.properties = _newCtrl;
      ctrlAttached.componentRef.instance.properties.index = this.ctrlsAttached.length;
      ctrlAttached.componentRef.instance.emitProperties.subscribe(properties => {
        this.onChangeCtrlProperties(properties);
      });

      // ctrlAttached.componentRef.instance['dataset'] = ctrlAttached.componentRef.instance.properties;
      // ctrlAttached.componentRef.instance.currentIndex  = this.currentIndex;
     
     
      ctrlAttached.componentRef.instance.container = containerClassName ;
      this.ctrlsAttached.push(ctrlAttached);
    }
  }

  @Output() currentControlProperties: EventEmitter<CtrlInput> = new EventEmitter<CtrlInput>(null);
  //cuando las propiedades del control cambian, interactuando con el
  onChangeCtrlProperties(_properties: CtrlInput) {    
    if (_properties != undefined) {

      this.ctrlsAttached[_properties.index].componentRef.instance.properties =_properties;     
        //notifica que el control seleccionado ha cambiado
      this.currentControlProperties.emit(_properties); 
      //this.ctrlsAttached[_properties.index].componentRef.instance.properties.prepareStyle();
      //console.log('onChangeCtrlProperties ....');
    }
  }
  
}
