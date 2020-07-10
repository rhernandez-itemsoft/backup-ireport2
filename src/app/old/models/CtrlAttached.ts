
import { ComponentRef,  Type, } from '@angular/core';
import { HtmlContainer } from './HtmlContainer';
import { Ctrl, CtrlLabel, CtrlInput, CtrlImage, CtrlTable, CtrlChart, CtrlBarCode } from 'src/app/old/models/ctrl-object';
import { InputComponent } from 'src/app/report/controls/input/input.component';
  export class CtrlAttached {
    container: HtmlContainer;
    componentRef: ComponentRef<InputComponent>;
    componentType: Type<any>;
    properties: CtrlInput;
    constructor(_container: HtmlContainer, _componentRef: ComponentRef<InputComponent>, _componentType: Type<any>) {
      this.container = _container;
      this.componentRef = _componentRef;
      this.componentType = _componentType;
    }
  }