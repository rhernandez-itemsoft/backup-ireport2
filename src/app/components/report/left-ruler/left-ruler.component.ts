import {  Component,  OnInit,  Input,  EventEmitter,  OnChanges,  SimpleChanges,  SimpleChange,} from '@angular/core';
import {  RptOptions,  RptUnit,  RptSize,  RptOrientation,} from 'src/app/old/models/options';
import { PositionXY } from 'src/app/old/models/positionxy';


const  STYLE_MARK ="";
const  STYLE_MARK_SMALL = "pipe-small";
const  STYLE_MARK_MEDIUM = "pipe-medium";
const  STYLE_MARK_LARGE = "pipe-large";

const  MARK_IN = "pipe-in";
const  MARK_CM = "pipe-mm";
const  MARK_MM = "pipe-mm";
const  MARK_PX = "pipe-px";


@Component({
  selector: 'app-left-ruler',
  templateUrl: './left-ruler.component.html',
  styleUrls: ['./left-ruler.component.scss']
})
export class LeftRulerComponent implements OnInit {
  @Input() resize: boolean = false;
  //Optios, esto retornará las opciones al workspace
  @Input() options: RptOptions = new RptOptions();
  //contiene la posición actual del mouse
  @Input() mousePosition: PositionXY = new PositionXY(0, 0);

  @Input()   activeStyle:string =  "inactive";

  marks: any = [];


  constructor() { }

  
  ngOnInit() {
    let unit = 'cm';

    this.options.unit = <RptUnit>{
      id: 0,
      label: 'Centimeters',
      value: unit,
    };
    this.options.size = <RptSize>{
      id: 1,
      label: 'Carta',
      value: 'carta',
      // //pulgadas
      // width: 8.5,
      // height: 11,
      
      // //centimetros
      // width: 21.6,
      // height: 27.9,

      //milimetros
      // width: 216,
      // height: 279,

      //pixeles
      // width: 816,
      // height: 1054,
    };
    switch(unit){
      case 'in':{
        this.options.size.width = 8.5;
        this.options.size.height = 11;
        break;
      }
      case 'cm':{
        this.options.size.width = 21.6;
        this.options.size.height = 3; // 27.9;
        break;
      }
      case 'mm':{
        this.options.size.width = 216;
        this.options.size.height = 279;
        break;
      }
      case 'px':{
        this.options.size.width = 110; // 816;
        this.options.size.height = 110; // 1054;
        break;
      }
    }




    this.options.orientation = <RptOrientation>{
      id: 1,
      label: 'Vertical',
      value: 'vertical',
    };
    
    this.createRuler();
  }

  //crea una regla, segun la unidad de medida
  createRuler() {

    //calcula el total de marcas
    let totalMarks: number = this.calcTotalMarks();
    switch (this.options.unit.value) {
      case 'in': {
        this.createMarks_MM(totalMarks);
        break;
      }
      case 'cm': {
        //crea las marcas de la regla en Milimetros
        this.createMarks_MM(totalMarks);
        break;
      }
      case 'mm': {
        //crea las marcas de la regla en Milimetros
        this.createMarks_MM(totalMarks);
        break;
      }
      case 'px': {
        //crea las marcas de la regla en Pixeles
        this.createMarks_MM(totalMarks);
        break;
      }
    }
    
    
  }

  //crea un arreglo que contiene las marcas de la regla en Milimetros
  private createMarks_MM(totalMarks: number){
    let index = 0;
    for (index = 0; index<totalMarks; index++){
      let _showNumber: boolean = false;
      let _style: string = STYLE_MARK_SMALL;

      let _stackMedium :any = {  mod: 5,  result: .5 };
      let _stackLarge :any = {  mod: 10,  result: 1 };


      switch (this.options.unit.value) {
        case 'in': {
          _stackMedium = {  mod: 4,  result: 1 };
          _stackLarge = {  mod: 16,  result: 1 };
          break;
        }
        case 'cm': {
          _stackMedium = {  mod: 5,  result: .5 };
          _stackLarge = {  mod: 10,  result: 1 };
          break;
        }
        case 'mm': {
          _stackMedium = {  mod: 5,  result: .5 };
          _stackLarge = {  mod: 10,  result: 1 };
          break;
        }
        case 'px': {
          _stackMedium = {  mod: 5,  result: .5 };
          _stackLarge = {  mod: 10,  result: 1 };
          break;
        }
      }

      
      //if (index/_stackMedium.mod % _stackMedium.result  == 0){
      if (index/_stackMedium.mod % _stackMedium.result  == 0){
        _style = STYLE_MARK_MEDIUM;
      }
      if (index/_stackLarge.mod % _stackLarge.result == 0){
        _style = STYLE_MARK_LARGE;
        _showNumber=true;
      }
      _style = this.setMarkStyle(STYLE_MARK) + ' ' +_style;
      

      this.marks.push( {number:index, style: _style, showNumber: _showNumber} );
    }
  }

  private setMarkStyle(_style: string): string{
    switch (this.options.unit.value) {
      case 'in': {
        _style += ' '+MARK_IN;
        break;
      }
      case 'cm': {
        _style += ' '+MARK_CM;
        break;
      }
      case 'mm': {
        _style += ' '+MARK_MM;
        break;
      }
      case 'px': {
        _style += ' '+MARK_PX;
        break;
      }
    }

    return _style;
  }
 

  //calcula el total de marcas que existirán en la regla
  private calcTotalMarks(): number {
    let totalMarks: number = this.options.size.height;
    
    switch (this.options.unit.value) {
      case 'in': {
        totalMarks = this.options.size.height * 16;
        break;
      }
      case 'cm': {
        totalMarks = this.options.size.height * 10;
        break;
      }
      case 'mm': {
        totalMarks = this.options.size.height;
        break;
      }
      case 'px': {
        totalMarks = this.options.size.height / 10;
        break;
      }
    }
    
    return totalMarks+1;
  }

}
