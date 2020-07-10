import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  SimpleChange,
} from '@angular/core';
import {  RptOptions,  RptUnit,  RptSize,  RptOrientation,} from 'src/app/old/models/options';
import { PositionXY } from 'src/app/old/models/positionxy';




const  PIPE_SMALL = "pipe-small";
const  PIPE_MEDIUM = "pipe-medium";
const  PIPE_LARGE = "pipe-large";

const  PIPE_IN = "pipe-in";
const  PIPE_CM = "pipe-cm";
const  PIPE_MM = "pipe-mm";
const  PIPE_PX = "pipe-px";

@Component({
  selector: 'app-top-ruler',
  templateUrl: './top-ruler.component.html',
  styleUrls: ['./top-ruler.component.scss']
})
export class TopRulerComponent implements OnInit {
  @Input() resize: boolean = false;
  //Optios, esto retornará las opciones al workspace
  @Input() options: RptOptions = new RptOptions();
  //contiene la posición actual del mouse
  @Input() mousePosition: PositionXY = new PositionXY(0, 0);


  pipeUnit = '';
  
  

  constructor() {}

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
   
    };
    switch(unit){
      case 'in':{
        this.options.size.width = 8.5;
        this.options.size.height = 11;
        this.pipeUnit = PIPE_IN;
        break;
      }
      case 'cm':{
        this.options.size.width = 21.6;
        this.options.size.height = 27.9;
        this.pipeUnit = PIPE_CM;
        break;
      }
      case 'mm':{
        this.options.size.width = 216;
        this.options.size.height = 279;
        this.pipeUnit = PIPE_MM;
        break;
      }
      case 'px':{
        this.options.size.width =   816;
        this.options.size.height =  1054;
        this.pipeUnit = PIPE_PX;
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

 

  pipeLarge: any = [];
  pipeSmall: any = [];
  //crea un arreglo que contiene las marcas de la regla en Milimetros
  private createMarks_MM(totalMarks: number){
    
    let totalPipeLarge:number = 0;
    let totalPipes:number = 0;
    let warapEach:any = {  mod: 5,  result: .5 };
    
    let numberLargeInterval:number = 100;
    switch (this.options.unit.value) {
      case 'in': {
        totalPipeLarge = Math.ceil(totalMarks / 16);
        totalPipes = 15 ; // total de pipes entre un pipe largo y otro largo
        warapEach = {  mod: 4,  result: 1 }; // cada cuantos cortos, se pone un mediano
        numberLargeInterval = 1;
        break;
      }
      case 'cm': {
        totalPipeLarge = Math.ceil(totalMarks / 10) ;
        totalPipes = 9 ; // total de pipes entre un pipe largo y otro largo
        warapEach = {  mod: 5,  result: .5 }; // cada cuantos cortos, se pone un mediano
        numberLargeInterval = 1;
        break;
      }
      case 'mm': {
        totalPipeLarge = Math.ceil(totalMarks / 100);
        totalPipes = 9 ; // total de pipes entre un pipe largo y otro largo
        warapEach = {  mod: 5,  result: .5 }; // cada cuantos cortos, se pone un mediano
        numberLargeInterval = 10;
        break;
      }
      case 'px': {
        totalPipeLarge = Math.ceil(totalMarks / 10);
        totalPipes = 9 ; // total de pipes entre un pipe largo y otro largo
        warapEach = {  mod: 5,  result: .5 }; // cada cuantos cortos, se pone un mediano
       break;
      }
    }

    //agregamos las lineas largas
    for(let index =0; index<totalPipeLarge; index++){

      this.pipeLarge.push({unit: this.pipeUnit, type:PIPE_LARGE, number:  index*numberLargeInterval  });
    }

    //agregamos las lineas cortas que van antes de las medianas
    for(let index =1; index<=totalPipes; index++){
      if (index/warapEach.mod % warapEach.result  == 0){
        this.pipeSmall.push({unit: this.pipeUnit, type:PIPE_MEDIUM });
      }else{
        this.pipeSmall.push({unit: this.pipeUnit, type:PIPE_SMALL });
      }
    }

  }


  private setMarkStyle(_style: string): string{
    switch (this.options.unit.value) {
      case 'in': {
        _style += ' '+PIPE_IN;
        break;
      }
      case 'cm': {
        _style += ' '+PIPE_CM;
        break;
      }
      case 'mm': {
        _style += ' '+PIPE_MM;
        break;
      }
      case 'px': {
        _style += ' '+PIPE_PX;
        break;
      }
    }

    return _style;
  }
 

  //calcula el total de marcas que existirán en la regla
  private calcTotalMarks(): number {
    let totalMarks: number = this.options.size.width;
    
    switch (this.options.unit.value) {
      case 'in': {
        totalMarks = this.options.size.width * 16;
        break;
      }
      case 'cm': {
        totalMarks = this.options.size.width * 10;
        break;
      }
      case 'mm': {
        totalMarks = this.options.size.width;
        break;
      }
      case 'px': {
        totalMarks = this.options.size.width / 10;
        break;
      }
    }
    
    return totalMarks+1;
  }


}
