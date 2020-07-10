import { Component, OnInit,Input,Output, EventEmitter,ChangeDetectorRef } from '@angular/core';
import { Ctrl, CtrlLabel, CtrlInput, CtrlImage, CtrlTable, CtrlChart, CtrlBarCode } from 'src/app/old/models/ctrl-object';
import { PositionXY } from 'src/app/old/models/positionxy';
import { HelpersService } from 'src/app/old/helpers/HelpersService';
import { ControlsService } from 'src/app/old/services/controlsService';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() container: string = '';
  @Output() emitProperties: EventEmitter<CtrlInput> = new EventEmitter<CtrlInput>(true);
  
  _properties: CtrlInput = null;
  @Input() set properties(_propertiesValues: CtrlInput) {
    if (_propertiesValues != null) {
    
      this._properties = _propertiesValues;
      this.properties.prepareStyle();
      this.cdr.detectChanges();
    }
  }
  
  get properties() {
    return this._properties;
  }

 
  //desactiva el drago&Drop
  cancelDropped = false;

  //permite saber cuando se está efectuando el drag & drop
  isDraggued = false;

  dragPosition:any={x:0,y:0};
  constructor(private helper: HelpersService, private cdr: ChangeDetectorRef, private controlsService: ControlsService) { }

  ngOnInit(): void {
   this.controlsService.getCurrentControl.subscribe(_currentControl => {
     if (_currentControl!= null){
        this.properties.isActive = this.properties.index == _currentControl.index && this.properties.container == _currentControl.container;
      
     }else{
      this.properties.isActive = false;
     }
     this.properties.prepareStyle();
   
   });
  }

  
  //este por el momento no lo necesitamos
  dropped(event) {
    if (this.cancelDropped){
      event.preventDefault();
    }
    console.log('dropped...........');
  }

  //necesario para saber la posición del mouse y saber si se debe efectuar un drag o un resize
  mouseover(e: any){
    // if (e.currentTarget.offsetWidth >= 300){
    //   e.preventDefault();
    //   this.cancelDropped = true;
    //   return true;
    // }
    // console.log(e.currentTarget.offsetWidth);
    let _width = parseInt(e.currentTarget.offsetWidth); //e.srcElement.style.width
    let _height = parseInt(e.currentTarget.offsetHeight);
    this.cancelDropped  = this.allowDragDrop(_width,_height, e );

    this._properties.width  = _width;
    this._properties.height  = _height;
    // this._properties.style.width = _width+'px';
    // this._properties.style.height = _height+'px';
  }

  //permite determinar si puede o no efecturase el Drag, ya que cuando se está ejecutando resize, debe deshabilitarse el drag
  private allowDragDrop(_width:number, _height:number, e){
    let minArea = {
      x: _width - 20,
      y: _height - 20
    };

    let maxArea = {
      x: _width + 5 ,
      y: _height + 5
    };

    if (
      (e.offsetX >= minArea.x && e.offsetX <= maxArea.x )
      &&
      (e.offsetY >= minArea.y && e.offsetY <= maxArea.y )
    ){
     return true;
    }

    return false;
  }

  //se ejecuta cuando comienza el Drag&DRop
  onDragStart(){
    this.isDraggued = true;
  }

  //se ejecuta cuando termina de efecturarse el Drag&Drop
  onDragEnded(event) {
    let element = event.source.getRootElement();
    const transform: PositionXY = this.helper.getTransformXY(element);
    this.properties.left = transform.x;
    this.properties.top = transform.y;
    this.dragPosition={x:this.properties.left,y:this.properties.top};
    this.onEmitProperties();
    
  }

  //se ejecuta al hacer click en el objeto
  onClick(){
    if ( ! this.isDraggued ){
      this.onEmitProperties();
    }
    this.isDraggued = false;
  }

  //envia el ouput emitProperties
  onEmitProperties() {
    
    this.controlsService.setCurrentControl({ index: this.properties.index, container: this.properties.container });

    this.properties.prepareStyle();
    this.emitProperties.emit(this.properties);
    
  }
}
