import { Injectable, EventEmitter, Type, } from '@angular/core';
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

@Injectable({ providedIn: 'root' })
export class ControlsService {

  //aqui solo me va a decir cuando hay que crear un nuevo control
  private newTypeControl: BehaviorSubject<string> = new BehaviorSubject('');
  getNewTypeControl = this.newTypeControl.asObservable();
  setNewTypeControl(_value: string) {
    this.newTypeControl.next(_value);
  }


  private currentControl: BehaviorSubject<any> = new BehaviorSubject(null);
  getCurrentControl = this.currentControl.asObservable();
  setCurrentControl(currentControl: any) {
    this.currentControl.next(currentControl);
  }




  // _typeControl:string = -1;
  // @Input() set typeControl(_value: string) {
  //   this._typeControl = _value != undefined || _value != null?_value:-1;
   
  //   this.cdr.detectChanges();
  // }
  // get typeControl(): string {
  //   return this._typeControl;
  // }





  // private control: BehaviorSubject<Ctrl> = new BehaviorSubject(null);
  // getControl = this.control.asObservable();
  // newControl(_typeControl: any) {
  //   this.control.next(this.initControlObject(_typeControl));
  // }

  // private initControlObject(_typeControl): Ctrl {
  //   return  new Ctrl();
  // }

  // private config(ctrl: Ctrl, siezeContainer: number, section: string): Ctrl{
  //   if (!ctrl){
  //       return null;
  //   }
    
  //   ctrl.name = ctrl.type.substring(0, 1).toUpperCase() + ctrl.type.substring(1, ctrl.type.length - 1) + siezeContainer;
  //   ctrl.container.name = section;
  //   return ctrl;
  // }

  // addControl(ctrl: Ctrl, siezeContainer: number, section: string): any{
  //   if (!ctrl){
  //       return null;
  //   }
  //   //configura el control
  //   ctrl = this.config(ctrl,siezeContainer, section);
  //   //crea las propiedades del control, para el tipo especificado por el left panel
  //   switch (ctrl.type) {
  //     case 'input': {
  //       ctrl = <CtrlInput>ctrl;
  //       ctrl.data = '';
  //       break;
  //     }
  //   };
   
  //   return {ctrl: ctrl, component: this.returnTypeComponent( InputComponent ) };
  // }

  // //es necesario este pequeño truco para que pueda retornar el objeto adecuado
  // private returnTypeComponent(component: Type<any>){
  //  return component;
  // }


  // // onClick(sectionName:string): Observable<string>{
  // //     return new Observable(observer => {
  // //         this.cartItems.next(sectionName);
  // //         // setTimeout(() => {
  // //         //     observer.next( sectionName );
  // //         // }, 1000);
  // //  });
  // // }
}
